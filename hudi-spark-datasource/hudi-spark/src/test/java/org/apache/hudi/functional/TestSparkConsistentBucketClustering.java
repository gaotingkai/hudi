/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.functional;

import org.apache.hudi.client.WriteStatus;
import org.apache.hudi.client.clustering.plan.strategy.SparkConsistentBucketClusteringPlanStrategy;
import org.apache.hudi.client.clustering.run.strategy.SparkConsistentBucketClusteringExecutionStrategy;
import org.apache.hudi.client.clustering.update.strategy.SparkConsistentBucketDuplicateUpdateStrategy;
import org.apache.hudi.client.timeline.HoodieTimelineArchiver;
import org.apache.hudi.common.config.HoodieStorageConfig;
import org.apache.hudi.common.fs.ConsistencyGuardConfig;
import org.apache.hudi.common.fs.FSUtils;
import org.apache.hudi.common.model.HoodieConsistentHashingMetadata;
import org.apache.hudi.common.model.HoodieRecord;
import org.apache.hudi.common.model.HoodieTableType;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.common.table.timeline.HoodieActiveTimeline;
import org.apache.hudi.common.table.view.FileSystemViewStorageConfig;
import org.apache.hudi.common.table.view.FileSystemViewStorageType;
import org.apache.hudi.common.testutils.HoodieTestDataGenerator;
import org.apache.hudi.common.testutils.HoodieTestUtils;
import org.apache.hudi.common.util.Option;
import org.apache.hudi.config.HoodieArchivalConfig;
import org.apache.hudi.config.HoodieCleanConfig;
import org.apache.hudi.config.HoodieClusteringConfig;
import org.apache.hudi.config.HoodieCompactionConfig;
import org.apache.hudi.config.HoodieIndexConfig;
import org.apache.hudi.config.HoodieWriteConfig;
import org.apache.hudi.exception.HoodieException;
import org.apache.hudi.execution.bulkinsert.BulkInsertSortMode;
import org.apache.hudi.index.HoodieIndex;
import org.apache.hudi.index.bucket.ConsistentBucketIndexUtils;
import org.apache.hudi.keygen.constant.KeyGeneratorOptions;
import org.apache.hudi.table.HoodieSparkTable;
import org.apache.hudi.table.HoodieTable;
import org.apache.hudi.table.action.cluster.ClusteringPlanPartitionFilterMode;
import org.apache.hudi.testutils.HoodieMergeOnReadTestUtils;
import org.apache.hudi.testutils.HoodieSparkClientTestHarness;
import org.apache.hudi.testutils.MetadataMergeWriteStatus;

import org.apache.avro.Schema;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.hive.serde2.io.DoubleWritable;
import org.apache.hadoop.io.ArrayWritable;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapred.RecordReader;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.apache.hudi.config.HoodieClusteringConfig.DAYBASED_LOOKBACK_PARTITIONS;
import static org.apache.hudi.config.HoodieClusteringConfig.PLAN_PARTITION_FILTER_MODE;
import static org.apache.hudi.config.HoodieClusteringConfig.PLAN_STRATEGY_SKIP_PARTITIONS_FROM_LATEST;

@Tag("functional")
public class TestSparkConsistentBucketClustering extends HoodieSparkClientTestHarness {

  private HoodieWriteConfig config;
  private HoodieTestDataGenerator dataGen = new HoodieTestDataGenerator(0);

  public void setup(int maxFileSize) throws IOException {
    setup(maxFileSize, Collections.emptyMap());
  }

  public void setup(int maxFileSize, Map<String, String> options) throws IOException {
    initPath();
    initSparkContexts();
    initTestDataGenerator();
    initFileSystem();
    Properties props = getPropertiesForKeyGen(true);
    props.putAll(options);
    props.setProperty(KeyGeneratorOptions.RECORDKEY_FIELD_NAME.key(), "_row_key");
    metaClient = HoodieTestUtils.init(hadoopConf, basePath, HoodieTableType.MERGE_ON_READ, props);
    config = getConfigBuilder().withProps(props)
        .withAutoCommit(false)
        .withIndexConfig(HoodieIndexConfig.newBuilder().fromProperties(props)
            .withIndexType(HoodieIndex.IndexType.BUCKET).withBucketIndexEngineType(HoodieIndex.BucketIndexEngineType.CONSISTENT_HASHING)
            .withBucketNum("8").withBucketMaxNum(14).withBucketMinNum(4).build())
        .withStorageConfig(HoodieStorageConfig.newBuilder().parquetMaxFileSize(maxFileSize).build())
        .withClusteringConfig(HoodieClusteringConfig.newBuilder()
            .withClusteringPlanStrategyClass(SparkConsistentBucketClusteringPlanStrategy.class.getName())
            .withClusteringExecutionStrategyClass(SparkConsistentBucketClusteringExecutionStrategy.class.getName())
            .withClusteringUpdatesStrategy(SparkConsistentBucketDuplicateUpdateStrategy.class.getName()).build())
        .build();

    writeClient = getHoodieWriteClient(config);
  }

  @AfterEach
  public void tearDown() throws IOException {
    cleanupResources();
  }

  /**
   * Test resizing with bucket number upper bound and lower bound
   *
   * @throws IOException
   */
  @ParameterizedTest
  @MethodSource("configParams")
  public void testResizing(boolean isSplit, boolean rowWriterEnable) throws IOException {
    final int maxFileSize = isSplit ? 5120 : 128 * 1024 * 1024;
    final int targetBucketNum = isSplit ? 14 : 4;
    setup(maxFileSize);
    config.setValue("hoodie.datasource.write.row.writer.enable", String.valueOf(rowWriterEnable));
    config.setValue("hoodie.metadata.enable", "false");
    writeData(HoodieActiveTimeline.createNewInstantTime(), 2000, true);
    String clusteringTime = (String) writeClient.scheduleClustering(Option.empty()).get();
    writeClient.cluster(clusteringTime, true);

    metaClient = HoodieTableMetaClient.reload(metaClient);
    final HoodieTable table = HoodieSparkTable.create(config, context, metaClient);
    Assertions.assertEquals(2000, readRecords().size());

    Arrays.stream(dataGen.getPartitionPaths()).forEach(p -> {
      HoodieConsistentHashingMetadata metadata = ConsistentBucketIndexUtils.loadMetadata(table, p).get();
      Assertions.assertEquals(targetBucketNum, metadata.getNodes().size());

      // The file slice has no log files
      table.getSliceView().getLatestFileSlices(p).forEach(fs -> {
        Assertions.assertTrue(fs.getBaseFile().isPresent());
        Assertions.assertTrue(fs.getLogFiles().count() == 0);
      });
    });
  }

  /**
   * Test running archival after clustering
   * @throws IOException
   */
  @ParameterizedTest
  @MethodSource("configParams")
  public void testLoadMetadata(boolean isCommitFilePresent, boolean rowWriterEnable) throws IOException {
    final int maxFileSize = 5120;
    final int targetBucketNum = 14;
    setup(maxFileSize);
    writeClient.getConfig().setValue(HoodieCleanConfig.CLEANER_COMMITS_RETAINED.key(), "1");
    writeClient.getConfig().setValue(HoodieArchivalConfig.MIN_COMMITS_TO_KEEP.key(), "4");
    writeClient.getConfig().setValue(HoodieArchivalConfig.MAX_COMMITS_TO_KEEP.key(), "5");
    writeClient.getConfig().setValue("hoodie.datasource.write.row.writer.enable", String.valueOf(rowWriterEnable));
    writeData(HoodieActiveTimeline.createNewInstantTime(), 2000, true);
    String clusteringTime = (String) writeClient.scheduleClustering(Option.empty()).get();
    writeClient.cluster(clusteringTime, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    metaClient = HoodieTableMetaClient.reload(metaClient);
    final HoodieTable table = HoodieSparkTable.create(config, context, metaClient);
    writeClient.clean();
    HoodieTimelineArchiver hoodieTimelineArchiver = new HoodieTimelineArchiver(writeClient.getConfig(), table);
    hoodieTimelineArchiver.archiveIfRequired(context);
    Arrays.stream(dataGen.getPartitionPaths()).forEach(p -> {
      if (!isCommitFilePresent) {
        Path metadataPath = FSUtils.getPartitionPath(table.getMetaClient().getHashingMetadataPath(), p);
        try {
          Arrays.stream(table.getMetaClient().getFs().listStatus(metadataPath)).forEach(fl -> {
            if (fl.getPath().getName().contains(HoodieConsistentHashingMetadata.HASHING_METADATA_COMMIT_FILE_SUFFIX)) {
              try {
                // delete commit marker to test recovery job
                table.getMetaClient().getFs().delete(fl.getPath());
              } catch (IOException e) {
                throw new RuntimeException(e);
              }
            }
          });
        } catch (IOException e) {
          throw new RuntimeException(e);
        }
      }
      HoodieConsistentHashingMetadata metadata = ConsistentBucketIndexUtils.loadMetadata(table, p).get();
      Assertions.assertEquals(targetBucketNum, metadata.getNodes().size());
    });
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 10, true);
    Assertions.assertEquals(2080, readRecords().size());
  }

  /**
   * 1. Test PARTITION_SORT mode, i.e., sort by the record key
   * 2. Test custom column sort
   *
   * @throws IOException
   */
  @ParameterizedTest
  @ValueSource(strings = {"_row_key", "begin_lat"})
  public void testClusteringColumnSort(String sortColumn) throws IOException {
    Map<String, String> options = new HashMap<>();
    // Record key is handled specially
    if (sortColumn.equals("_row_key")) {
      options.put(HoodieWriteConfig.BULK_INSERT_SORT_MODE.key(), BulkInsertSortMode.PARTITION_SORT.toString());
    } else {
      options.put(HoodieClusteringConfig.PLAN_STRATEGY_SORT_COLUMNS.key(), sortColumn);
    }
    setup(128 * 1024 * 1024, options);

    writeData(HoodieActiveTimeline.createNewInstantTime(), 500, true);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 500, true);
    String clusteringTime = (String) writeClient.scheduleClustering(Option.empty()).get();
    writeClient.cluster(clusteringTime, true);

    // Check the specified column is in sort order
    metaClient = HoodieTableMetaClient.reload(metaClient);
    List<String> inputPaths = Arrays.stream(dataGen.getPartitionPaths()).map(p -> Paths.get(basePath, p).toString()).collect(Collectors.toList());

    // Get record reader for file groups and check each file group independently
    List<RecordReader> readers = HoodieMergeOnReadTestUtils.getRecordReadersUsingInputFormat(hadoopConf, inputPaths, basePath, new JobConf(hadoopConf), true, false);
    Schema rawSchema = new Schema.Parser().parse(HoodieTestDataGenerator.TRIP_EXAMPLE_SCHEMA);
    Schema.Field field = rawSchema.getField(sortColumn);
    Comparator comparator;
    if (field.schema().getType() == Schema.Type.DOUBLE) {
      comparator = Comparator.comparingDouble(o -> ((DoubleWritable) o).get());
    } else if (field.schema().getType() == Schema.Type.STRING) {
      comparator = Comparator.comparing(Object::toString, String::compareTo);
    } else {
      throw new HoodieException("Cannot get comparator: unsupported data type, " + field.schema().getType());
    }

    for (RecordReader recordReader: readers) {
      Object key = recordReader.createKey();
      ArrayWritable writable = (ArrayWritable) recordReader.createValue();
      // The target column in a single file group should be in sorted order
      Object lastValue = null;
      while (recordReader.next(key, writable)) {
        Object rowKey = writable.get()[field.pos()];
        Assertions.assertTrue(lastValue == null || comparator.compare(lastValue, rowKey) <= 0);
        lastValue = rowKey;
      }
    }
  }

  /**
   * Only one clustering job is allowed on each partition
   */
  @Test
  public void testConcurrentClustering() throws IOException {
    setup(5120);
    writeData(HoodieActiveTimeline.createNewInstantTime(), 2000, true);
    String clusteringTime = (String) writeClient.scheduleClustering(Option.empty()).get();
    // Schedule again, it should not be scheduled as the previous one are doing clustering to all partitions
    Assertions.assertFalse(writeClient.scheduleClustering(Option.empty()).isPresent());
    writeClient.cluster(clusteringTime, true);

    // Schedule two clustering, each working on a single partition
    config.setValue(DAYBASED_LOOKBACK_PARTITIONS, "1");
    config.setValue(PLAN_STRATEGY_SKIP_PARTITIONS_FROM_LATEST, "0");
    config.setValue(PLAN_PARTITION_FILTER_MODE, ClusteringPlanPartitionFilterMode.RECENT_DAYS.toString());
    Assertions.assertTrue(writeClient.scheduleClustering(Option.empty()).isPresent());
    config.setValue(DAYBASED_LOOKBACK_PARTITIONS, "1");
    config.setValue(PLAN_STRATEGY_SKIP_PARTITIONS_FROM_LATEST, "1");
    Assertions.assertTrue(writeClient.scheduleClustering(Option.empty()).isPresent());
  }

  /**
   * 1. If there is any ongoing writing, cannot schedule clustering
   * 2. If the clustering is scheduled, it cannot block incoming new writers
   */
  @ParameterizedTest
  @ValueSource(booleans = {true, false})
  public void testConcurrentWrite(boolean rowWriterEnable) throws IOException {
    setup(5120);
    config.setValue("hoodie.datasource.write.row.writer.enable", String.valueOf(rowWriterEnable));
    String writeTime = HoodieActiveTimeline.createNewInstantTime();
    List<WriteStatus> writeStatues = writeData(writeTime, 2000, false);
    // Cannot schedule clustering if there is in-flight writer
    Assertions.assertFalse(writeClient.scheduleClustering(Option.empty()).isPresent());
    Assertions.assertTrue(writeClient.commitStats(writeTime, context.parallelize(writeStatues, 1), writeStatues.stream().map(WriteStatus::getStat).collect(Collectors.toList()),
        Option.empty(), metaClient.getCommitActionType()));
    metaClient = HoodieTableMetaClient.reload(metaClient);

    // Schedule clustering
    String clusteringTime = (String) writeClient.scheduleClustering(Option.empty()).get();
    // Concurrent is not blocked by the clustering
    writeData(HoodieActiveTimeline.createNewInstantTime(), 2000, true);
    // The records are immediately visible when the writer completes
    Assertions.assertEquals(4000, readRecords().size());
    // Clustering finished, check the number of records (there will be file group switch in the background)
    writeClient.cluster(clusteringTime, true);
    Assertions.assertEquals(4000, readRecords().size());
  }

  private List<Row> readRecords() {
    Dataset<Row> roViewDF = sparkSession
        .read()
        .format("hudi")
        .load(basePath + "/*/*/*/*");
    roViewDF.createOrReplaceTempView("hudi_ro_table");
    return sparkSession.sqlContext().sql("select * from hudi_ro_table").collectAsList();
  }

  /**
   * Insert `num` records into table given the commitTime
   *
   * @param commitTime
   * @param totalRecords
   */
  private List<WriteStatus> writeData(String commitTime, int totalRecords, boolean doCommit) {
    List<HoodieRecord> records = dataGen.generateInserts(commitTime, totalRecords);
    JavaRDD<HoodieRecord> writeRecords = jsc.parallelize(records, 2);
    metaClient = HoodieTableMetaClient.reload(metaClient);

    writeClient.startCommitWithTime(commitTime);
    List<WriteStatus> writeStatues = writeClient.upsert(writeRecords, commitTime).collect();
    org.apache.hudi.testutils.Assertions.assertNoWriteErrors(writeStatues);
    if (doCommit) {
      Assertions.assertTrue(writeClient.commitStats(commitTime, context.parallelize(writeStatues, 1), writeStatues.stream().map(WriteStatus::getStat).collect(Collectors.toList()),
          Option.empty(), metaClient.getCommitActionType()));
    }
    metaClient = HoodieTableMetaClient.reload(metaClient);
    return writeStatues;
  }

  public HoodieWriteConfig.Builder getConfigBuilder() {
    return HoodieWriteConfig.newBuilder().withPath(basePath).withSchema(HoodieTestDataGenerator.TRIP_EXAMPLE_SCHEMA)
        .withParallelism(2, 2).withBulkInsertParallelism(2).withFinalizeWriteParallelism(2).withDeleteParallelism(2)
        .withWriteStatusClass(MetadataMergeWriteStatus.class)
        .withConsistencyGuardConfig(ConsistencyGuardConfig.newBuilder().withConsistencyCheckEnabled(true).build())
        .withCompactionConfig(HoodieCompactionConfig.newBuilder().compactionSmallFileSize(1024 * 1024).build())
        .withStorageConfig(HoodieStorageConfig.newBuilder().hfileMaxFileSize(1024 * 1024).parquetMaxFileSize(1024 * 1024).build())
        .forTable("test-trip-table")
        .withEmbeddedTimelineServerEnabled(true).withFileSystemViewConfig(FileSystemViewStorageConfig.newBuilder()
            .withStorageType(FileSystemViewStorageType.EMBEDDED_KV_STORE).build());
  }

  private static Stream<Arguments> configParams() {
    return Stream.of(
        Arguments.of(true, false),
        Arguments.of(false, false),
        Arguments.of(true, true),
        Arguments.of(false, true)
    );
  }
}

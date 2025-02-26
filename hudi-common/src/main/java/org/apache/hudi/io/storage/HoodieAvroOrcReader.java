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

package org.apache.hudi.io.storage;

import org.apache.hudi.common.bloom.BloomFilter;
import org.apache.hudi.common.model.HoodieFileFormat;
import org.apache.hudi.common.util.AvroOrcUtils;
import org.apache.hudi.common.util.BaseFileUtils;
import org.apache.hudi.common.util.collection.ClosableIterator;
import org.apache.hudi.common.util.OrcReaderIterator;
import org.apache.hudi.exception.HoodieIOException;

import org.apache.avro.Schema;
import org.apache.avro.generic.IndexedRecord;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.orc.OrcFile;
import org.apache.orc.Reader;
import org.apache.orc.Reader.Options;
import org.apache.orc.RecordReader;
import org.apache.orc.TypeDescription;

import java.io.IOException;
import java.util.Iterator;
import java.util.Objects;
import java.util.Set;

/**
 * {@link HoodieFileReader} implementation for ORC format.
 */
public class HoodieAvroOrcReader extends HoodieAvroFileReaderBase {

  private final Path path;
  private final Configuration conf;
  private final BaseFileUtils orcUtils;

  public HoodieAvroOrcReader(Configuration configuration, Path path) {
    this.conf = configuration;
    this.path = path;
    this.orcUtils = BaseFileUtils.getInstance(HoodieFileFormat.ORC);
  }

  @Override
  public String[] readMinMaxRecordKeys() {
    return orcUtils.readMinMaxRecordKeys(conf, path);
  }

  @Override
  public BloomFilter readBloomFilter() {
    return orcUtils.readBloomFilterFromMetadata(conf, path);
  }

  @Override
  public Set<String> filterRowKeys(Set candidateRowKeys) {
    return orcUtils.filterRowKeys(conf, path, candidateRowKeys);
  }

  @Override
  public ClosableIterator<IndexedRecord> getIndexedRecordIterator(Schema readerSchema, Schema requestedSchema) {
    if (!Objects.equals(readerSchema, requestedSchema)) {
      throw new UnsupportedOperationException("Schema projections are not supported in HFile reader");
    }

    try (Reader reader = OrcFile.createReader(path, OrcFile.readerOptions(conf))) {
      TypeDescription orcSchema = AvroOrcUtils.createOrcSchema(readerSchema);
      RecordReader recordReader = reader.rows(new Options(conf).schema(orcSchema));
      return new OrcReaderIterator<>(recordReader, readerSchema, orcSchema);
    } catch (IOException io) {
      throw new HoodieIOException("Unable to create an ORC reader.", io);
    }
  }

  @Override
  public ClosableIterator<String> getRecordKeyIterator() {
    final Iterator<String> iterator = orcUtils.readRowKeys(conf, path).iterator();
    return new ClosableIterator<String>() {
      @Override
      public boolean hasNext() {
        return iterator.hasNext();
      }

      @Override
      public String next() {
        return iterator.next();
      }

      @Override
      public void close() {
      }
    };
  }

  @Override
  public Schema getSchema() {
    return orcUtils.readAvroSchema(conf, path);
  }

  @Override
  public void close() {
  }

  @Override
  public long getTotalRecords() {
    return orcUtils.getRowCount(conf, path);
  }
}

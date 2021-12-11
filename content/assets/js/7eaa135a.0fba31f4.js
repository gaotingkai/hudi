"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4466],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8584:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={version:"0.5.3",title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},l=void 0,p={unversionedId:"use_cases",id:"version-0.5.3/use_cases",isDocsHomePage:!1,title:"Use Cases",description:"Near Real-Time Ingestion",source:"@site/versioned_docs/version-0.5.3/use_cases.md",sourceDirName:".",slug:"/use_cases",permalink:"/docs/0.5.3/use_cases",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.5.3/use_cases.md",version:"0.5.3",frontMatter:{version:"0.5.3",title:"Use Cases",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.5.3/docs",previous:{title:"Quick-Start Guide",permalink:"/docs/0.5.3/quick-start-guide"},next:{title:"Writing Hudi Tables",permalink:"/docs/0.5.3/writing_data"}},c=[{value:"Near Real-Time Ingestion",id:"near-real-time-ingestion",children:[]},{value:"Near Real-time Analytics",id:"near-real-time-analytics",children:[]},{value:"Incremental Processing Pipelines",id:"incremental-processing-pipelines",children:[]},{value:"Data Dispersal From DFS",id:"data-dispersal-from-dfs",children:[]}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"near-real-time-ingestion"},"Near Real-Time Ingestion"),(0,i.kt)("p",null,"Ingesting data from external sources like (event logs, databases, external sources) into a ",(0,i.kt)("a",{parentName:"p",href:"http://martinfowler.com/bliki/DataLake"},"Hadoop Data Lake")," is a well known problem.\nIn most (if not all) Hadoop deployments, it is unfortunately solved in a piecemeal fashion, using a medley of ingestion tools,\neven though this data is arguably the most valuable for the entire organization."),(0,i.kt)("p",null,"For RDBMS ingestion, Hudi provides ",(0,i.kt)("strong",{parentName:"p"},"faster loads via Upserts"),", as opposed costly & inefficient bulk loads. For e.g, you can read the MySQL BIN log or ",(0,i.kt)("a",{parentName:"p",href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports"},"Sqoop Incremental Import")," and apply them to an\nequivalent Hudi table on DFS. This would be much faster/efficient than a ",(0,i.kt)("a",{parentName:"p",href:"https://sqoop.apache.org/docs/1.4.0-incubating/SqoopUserGuide#id1770457"},"bulk merge job"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"http://hortonworks.com/blog/four-step-strategy-incremental-updates-hive/"},"complicated handcrafted merge workflows")),(0,i.kt)("p",null,"For NoSQL datastores like ",(0,i.kt)("a",{parentName:"p",href:"http://cassandra.apache.org/"},"Cassandra")," / ",(0,i.kt)("a",{parentName:"p",href:"http://www.project-voldemort.com/voldemort/"},"Voldemort")," / ",(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org/"},"HBase"),", even moderately big installations store billions of rows.\nIt goes without saying that ",(0,i.kt)("strong",{parentName:"p"},"full bulk loads are simply infeasible")," and more efficient approaches are needed if ingestion is to keep up with the typically high update volumes."),(0,i.kt)("p",null,"Even for immutable data sources like ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Kafka")," , Hudi helps ",(0,i.kt)("strong",{parentName:"p"},"enforces a minimum file size on HDFS"),", which improves NameNode health by solving one of the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.cloudera.com/blog/2009/02/the-small-files-problem/"},"age old problems in Hadoop land")," in a holistic way. This is all the more important for event streams, since typically its higher volume (eg: click streams) and if not managed well, can cause serious damage to your Hadoop cluster."),(0,i.kt)("p",null,"Across all sources, Hudi adds the much needed ability to atomically publish new data to consumers via notion of commits, shielding them from partial ingestion failures"),(0,i.kt)("h2",{id:"near-real-time-analytics"},"Near Real-time Analytics"),(0,i.kt)("p",null,"Typically, real-time ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_mart"},"datamarts")," are powered by specialized analytical stores such as ",(0,i.kt)("a",{parentName:"p",href:"http://druid.io/"},"Druid")," or ",(0,i.kt)("a",{parentName:"p",href:"http://www.memsql.com/"},"Memsql")," or ",(0,i.kt)("a",{parentName:"p",href:"http://opentsdb.net/"},"even OpenTSDB")," .\nThis is absolutely perfect for lower scale (",(0,i.kt)("a",{parentName:"p",href:"https://blog.twitter.com/2015/hadoop-filesystem-at-twitter"},"relative to Hadoop installations like this"),") data, that needs sub-second query responses such as system monitoring or interactive real-time analysis.\nBut, typically these systems end up getting abused for less interactive queries also since data on Hadoop is intolerably stale. This leads to under utilization & wasteful hardware/license costs."),(0,i.kt)("p",null,"On the other hand, interactive SQL solutions on Hadoop such as Presto & SparkSQL excel in ",(0,i.kt)("strong",{parentName:"p"},"queries that finish within few seconds"),".\nBy bringing ",(0,i.kt)("strong",{parentName:"p"},"data freshness to a few minutes"),", Hudi can provide a much efficient alternative, as well unlock real-time analytics on ",(0,i.kt)("strong",{parentName:"p"},"several magnitudes larger tables")," stored in DFS.\nAlso, Hudi has no external dependencies (like a dedicated HBase cluster, purely used for real-time analytics) and thus enables faster analytics on much fresher analytics, without increasing the operational overhead."),(0,i.kt)("h2",{id:"incremental-processing-pipelines"},"Incremental Processing Pipelines"),(0,i.kt)("p",null,"One fundamental ability Hadoop provides is to build a chain of tables derived from each other via DAGs expressed as workflows.\nWorkflows often depend on new data being output by multiple upstream workflows and traditionally, availability of new data is indicated by a new DFS Folder/Hive Partition.\nLet's take a concrete example to illustrate this. An upstream workflow ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," can create a Hive partition for every hour, with data for that hour (event_time) at the end of each hour (processing_time), providing effective freshness of 1 hour.\nThen, a downstream workflow ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),", kicks off immediately after ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," finishes, and does its own processing for the next hour, increasing the effective latency to 2 hours."),(0,i.kt)("p",null,"The above paradigm simply ignores late arriving data i.e when ",(0,i.kt)("inlineCode",{parentName:"p"},"processing_time")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"event_time")," drift apart.\nUnfortunately, in today's post-mobile & pre-IoT world, ",(0,i.kt)("strong",{parentName:"p"},"late data from intermittently connected mobile devices & sensors are the norm, not an anomaly"),".\nIn such cases, the only remedy to guarantee correctness is to ",(0,i.kt)("a",{parentName:"p",href:"https://falcon.apache.org/FalconDocumentation#Handling_late_input_data"},"reprocess the last few hours")," worth of data,\nover and over again each hour, which can significantly hurt the efficiency across the entire ecosystem. For e.g; imagine reprocessing TBs worth of data every hour across hundreds of workflows."),(0,i.kt)("p",null,"Hudi comes to the rescue again, by providing a way to consume new data (including late data) from an upstream Hudi table ",(0,i.kt)("inlineCode",{parentName:"p"},"HU")," at a record granularity (not folders/partitions),\napply the processing logic, and efficiently update/reconcile late data with a downstream Hudi table ",(0,i.kt)("inlineCode",{parentName:"p"},"HD"),". Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"HU")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HD")," can be continuously scheduled at a much more frequent schedule\nlike 15 mins, and providing an end-end latency of 30 mins at ",(0,i.kt)("inlineCode",{parentName:"p"},"HD"),"."),(0,i.kt)("p",null,"To achieve this, Hudi has embraced similar concepts from stream processing frameworks like ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/streaming-programming-guide#join-operations"},"Spark Streaming")," , Pub/Sub systems like ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/documentation/#theconsumer"},"Kafka"),"\nor database replication technologies like ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E11882_01/server.112/e16545/xstrm_cncpt.htm#XSTRM187"},"Oracle XStream"),".\nFor the more curious, a more detailed explanation of the benefits of Incremental Processing (compared to Stream Processing & Batch Processing) can be found ",(0,i.kt)("a",{parentName:"p",href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop"},"here")),(0,i.kt)("h2",{id:"data-dispersal-from-dfs"},"Data Dispersal From DFS"),(0,i.kt)("p",null,"A popular use-case for Hadoop, is to crunch data and then disperse it back to an online serving store, to be used by an application.\nFor e.g, a Spark Pipeline can ",(0,i.kt)("a",{parentName:"p",href:"https://eng.uber.com/telematics/"},"determine hard braking events on Hadoop")," and load them into a serving store like ElasticSearch, to be used by the Uber application to increase safe driving. Typical architectures for this employ a ",(0,i.kt)("inlineCode",{parentName:"p"},"queue")," between Hadoop and serving store, to prevent overwhelming the target serving store.\nA popular choice for this queue is Kafka and this model often results in ",(0,i.kt)("strong",{parentName:"p"},"redundant storage of same data on DFS (for offline analysis on computed results) and Kafka (for dispersal)")),(0,i.kt)("p",null,"Once again Hudi can efficiently solve this problem, by having the Spark Pipeline upsert output from\neach run into a Hudi table, which can then be incrementally tailed (just like a Kafka topic) for new data & written into the serving store."))}u.isMDXComponent=!0}}]);
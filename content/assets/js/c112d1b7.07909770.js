"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[257],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return t?n.createElement(m,o(o({ref:a},d),{},{components:t})):n.createElement(m,o({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},26396:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(87462),r=t(67294),i=t(72389),o=t(79443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(63616),p=t(86010),d="tabItem_vU9c";function u(e){var a,t,i,o=e.lazy,u=e.block,c=e.defaultValue,h=e.values,m=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),g=(0,l.lx)(f,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(a=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=s(),w=_.tabGroupChoices,y=_.setTabGroupChoices,N=(0,r.useState)(b),T=N[0],E=N[1],P=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=w[m];null!=I&&I!==T&&f.some((function(e){return e.value===I}))&&E(I)}var x=function(e){var a=e.currentTarget,t=P.indexOf(a),n=f[t].value;n!==T&&(O(a),E(n),null!=m&&y(m,n))},D=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;t=P[n]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},k)},f.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,p.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function c(e){var a=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},23257:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(26396),s=t(58215),l=["components"],p={title:"Spark Guide",sidebar_position:2,toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},d=void 0,u={unversionedId:"quick-start-guide",id:"version-0.8.0/quick-start-guide",title:"Spark Guide",description:"This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through",source:"@site/versioned_docs/version-0.8.0/quick-start-guide.md",sourceDirName:".",slug:"/quick-start-guide",permalink:"/docs/0.8.0/quick-start-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/quick-start-guide.md",tags:[],version:"0.8.0",sidebarPosition:2,frontMatter:{title:"Spark Guide",sidebar_position:2,toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.8.0/docs",previous:{title:"Overview",permalink:"/docs/0.8.0/overview"},next:{title:"Flink Guide",permalink:"/docs/0.8.0/flink-quick-start-guide"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"Insert data",id:"insert-data",children:[],level:2},{value:"Query data",id:"query-data",children:[],level:2},{value:"Update data",id:"update-data",children:[],level:2},{value:"Incremental query",id:"incremental-query",children:[],level:2},{value:"Point in time query",id:"point-in-time-query",children:[],level:2},{value:"Delete data",id:"deletes",children:[],level:2},{value:"Insert Overwrite Table",id:"insert-overwrite-table",children:[],level:2},{value:"Insert Overwrite",id:"insert-overwrite",children:[],level:2},{value:"Where to go from here?",id:"where-to-go-from-here",children:[],level:2}],h={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide provides a quick peek at Hudi's capabilities using spark-shell. Using Spark datasources, we will walk through\ncode snippets that allows you to insert and update a Hudi table of default table type:\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#copy-on-write-table"},"Copy on Write"),".\nAfter each write operation we will also show how to read the data both snapshot and incrementally."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Hudi works with Spark-2.4.3+ & Spark 3.x versions. You can follow instructions ",(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads"},"here")," for setting up spark.\nFrom the extracted directory run spark-shell with Hudi as:"),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"// spark-shell for spark 3\nspark-shell \\\n  --packages org.apache.hudi:hudi-spark3-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:3.0.1 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n  \n// spark-shell for spark 2 with scala 2.12\nspark-shell \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n  \n// spark-shell for spark 2 with scala 2.11\nspark-shell \\\n  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.8.0,org.apache.spark:spark-avro_2.11:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n"))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\nexport PYSPARK_PYTHON=$(which python3)\n\n# for spark3\npyspark\n--packages org.apache.hudi:hudi-spark3-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:3.0.1\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n\n# for spark2 with scala 2.12\npyspark\n--packages org.apache.hudi:hudi-spark-bundle_2.12:0.8.0,org.apache.spark:spark-avro_2.12:2.4.4\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n\n# for spark2 with scala 2.11\npyspark\n--packages org.apache.hudi:hudi-spark-bundle_2.11:0.8.0,org.apache.spark:spark-avro_2.11:2.4.4\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Please note the following")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",null,(0,i.kt)("li",null,"spark-avro module needs to be specified in --packages as it is not included with spark-shell by default"),(0,i.kt)("li",null,"spark-avro and spark versions must match (we have used 3.0.1 for both above)"),(0,i.kt)("li",null,"we have used hudi-spark-bundle built for scala 2.12 since the spark-avro module used also depends on 2.12. If spark-avro_2.11 is used, correspondingly hudi-spark-bundle_2.11 needs to be used. ")))),(0,i.kt)("p",null,"Setup table name, base path and a data generator to generate records for this guide."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nimport org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\n\nval tableName = "hudi_trips_cow"\nval basePath = "file:///tmp/hudi_trips_cow"\nval dataGen = new DataGenerator\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\ntableName = "hudi_trips_cow"\nbasePath = "file:///tmp/hudi_trips_cow"\ndataGen = sc._jvm.org.apache.hudi.QuickstartUtils.DataGenerator()\n')))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L50"},"DataGenerator"),"\ncan generate sample inserts and updates based on the the sample trip schema ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L57"},"here")))),(0,i.kt)("h2",{id:"insert-data"},"Insert data"),(0,i.kt)("p",null,"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\").\n    options(**hudi_options).\n    mode(\"overwrite\").\n    save(basePath)\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"mode(Overwrite)")," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/hudi_trips_cow/<region>/<country>/<city>/"),". We provided a record key\n(",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),"), partition field (",(0,i.kt)("inlineCode",{parentName:"p"},"region/country/city"),") and combine logic (",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"Modeling data stored in Hudi"),"\nand for info on ways to ingest data into Hudi, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data"},"Writing Hudi Tables"),".\nHere we are using the default write operation : ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),". If you have a workload without updates, you can also issue\n",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bulk_insert")," operations which could be faster. To know more, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"Write operations")))),(0,i.kt)("h2",{id:"query-data"},"Query data"),(0,i.kt)("p",null,"Load the data files into a DataFrame."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval tripsSnapshotDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n//load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\ntripsSnapshotDF = spark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*")\n# load(basePath) use "/partitionKey=partitionValue" folder structure for Spark auto partition discovery\n\ntripsSnapshotDF.createOrReplaceTempView("hudi_trips_snapshot")\n\nspark.sql("select fare, begin_lon, begin_lat, ts from  hudi_trips_snapshot where fare > 20.0").show()\nspark.sql("select _hoodie_commit_time, _hoodie_record_key, _hoodie_partition_path, rider, driver, fare from  hudi_trips_snapshot").show()\n')))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This query provides snapshot querying of the ingested data. Since our partition path (",(0,i.kt)("inlineCode",{parentName:"p"},"region/country/city"),") is 3 levels nested\nfrom base path we ve used ",(0,i.kt)("inlineCode",{parentName:"p"},'load(basePath + "/*/*/*/*")'),".\nRefer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#table-types--queries"},"Table types and queries")," for more info on all table types and query types supported."))),(0,i.kt)("h2",{id:"update-data"},"Update data"),(0,i.kt)("p",null,"This is similar to inserting new data. Generate updates to existing trips using the data generator, load into a DataFrame\nand write DataFrame into the hudi table."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval updates = convertToStringList(dataGen.generateUpdates(10))\nval df = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\nupdates = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateUpdates(10))\ndf = spark.read.json(spark.sparkContext.parallelize(updates, 2))\ndf.write.format("hudi"). \\\n  options(**hudi_options). \\\n  mode("append"). \\\n  save(basePath)\n')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice that the save mode is now ",(0,i.kt)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,i.kt)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated trips. Each write operation generates a new ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"driver")," fields for the same ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit. "))),(0,i.kt)("h2",{id:"incremental-query"},"Incremental query"),(0,i.kt)("p",null,"Hudi also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's incremental querying and providing a begin time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case). "),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\n// reload data\nspark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*").\n  createOrReplaceTempView("hudi_trips_snapshot")\n\nval commits = spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").map(k => k.getString(0)).take(50)\nval beginTime = commits(commits.length - 2) // commit time we are interested in\n\n// incrementally query data\nval tripsIncrementalDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# pyspark\n# reload data\nspark. \\\n  read. \\\n  format("hudi"). \\\n  load(basePath + "/*/*/*/*"). \\\n  createOrReplaceTempView("hudi_trips_snapshot")\n\ncommits = list(map(lambda row: row[0], spark.sql("select distinct(_hoodie_commit_time) as commitTime from  hudi_trips_snapshot order by commitTime").limit(50).collect()))\nbeginTime = commits[len(commits) - 2] # commit time we are interested in\n\n# incrementally query data\nincremental_read_options = {\n  \'hoodie.datasource.query.type\': \'incremental\',\n  \'hoodie.datasource.read.begin.instanttime\': beginTime,\n}\n\ntripsIncrementalDF = spark.read.format("hudi"). \\\n  options(**incremental_read_options). \\\n  load(basePath)\ntripsIncrementalDF.createOrReplaceTempView("hudi_trips_incremental")\n\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n')))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This will give all changes that happened after the beginTime commit with the filter of fare > 20.0. The unique thing about this\nfeature is that it now lets you author streaming pipelines on batch data."))),(0,i.kt)("h2",{id:"point-in-time-query"},"Point in time query"),(0,i.kt)("p",null,'Lets look at how to query data as of a specific time. The specific time can be represented by pointing endTime to a\nspecific commit time and beginTime to "000" (denoting earliest possible commit time). '),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval beginTime = "000" // Represents all commits > this time.\nval endTime = commits(commits.length - 2) // commit time we are interested in\n\n//incrementally query data\nval tripsPointInTimeDF = spark.read.format("hudi").\n  option(QUERY_TYPE_OPT_KEY, QUERY_TYPE_INCREMENTAL_OPT_VAL).\n  option(BEGIN_INSTANTTIME_OPT_KEY, beginTime).\n  option(END_INSTANTTIME_OPT_KEY, endTime).\n  load(basePath)\ntripsPointInTimeDF.createOrReplaceTempView("hudi_trips_point_in_time")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0").show()\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\nbeginTime = \"000\" # Represents all commits > this time.\nendTime = commits[len(commits) - 2]\n\n# query point in time data\npoint_in_time_read_options = {\n  'hoodie.datasource.query.type': 'incremental',\n  'hoodie.datasource.read.end.instanttime': endTime,\n  'hoodie.datasource.read.begin.instanttime': beginTime\n}\n\ntripsPointInTimeDF = spark.read.format(\"hudi\"). \\\n  options(**point_in_time_read_options). \\\n  load(basePath)\n\ntripsPointInTimeDF.createOrReplaceTempView(\"hudi_trips_point_in_time\")\nspark.sql(\"select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from hudi_trips_point_in_time where fare > 20.0\").show()\n")))),(0,i.kt)("h2",{id:"deletes"},"Delete data"),(0,i.kt)("p",null,"Delete records for the HoodieKeys passed in."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\n// fetch total records count\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n// fetch two records to be deleted\nval ds = spark.sql("select uuid, partitionpath from hudi_trips_snapshot").limit(2)\n\n// issue deletes\nval deletes = dataGen.generateDeletes(ds.collectAsList())\nval df = spark.read.json(spark.sparkContext.parallelize(deletes, 2))\n\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"delete").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// run the same read query as above.\nval roAfterDeleteViewDF = spark.\n  read.\n  format("hudi").\n  load(basePath + "/*/*/*/*")\n\nroAfterDeleteViewDF.registerTempTable("hudi_trips_snapshot")\n// fetch should return (total - 2) records\nspark.sql("select uuid, partitionpath from hudi_trips_snapshot").count()\n'))),(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\n# fetch total records count\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n# fetch two records to be deleted\nds = spark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").limit(2)\n\n# issue deletes\nhudi_delete_options = {\n  'hoodie.table.name': tableName,\n  'hoodie.datasource.write.recordkey.field': 'uuid',\n  'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n  'hoodie.datasource.write.table.name': tableName,\n  'hoodie.datasource.write.operation': 'delete',\n  'hoodie.datasource.write.precombine.field': 'ts',\n  'hoodie.upsert.shuffle.parallelism': 2, \n  'hoodie.insert.shuffle.parallelism': 2\n}\n\nfrom pyspark.sql.functions import lit\ndeletes = list(map(lambda row: (row[0], row[1]), ds.collect()))\ndf = spark.sparkContext.parallelize(deletes).toDF(['uuid', 'partitionpath']).withColumn('ts', lit(0.0))\ndf.write.format(\"hudi\"). \\\n  options(**hudi_delete_options). \\\n  mode(\"append\"). \\\n  save(basePath)\n\n# run the same read query as above.\nroAfterDeleteViewDF = spark. \\\n  read. \\\n  format(\"hudi\"). \\\n  load(basePath + \"/*/*/*/*\") \nroAfterDeleteViewDF.registerTempTable(\"hudi_trips_snapshot\")\n# fetch should return (total - 2) records\nspark.sql(\"select uuid, partitionpath from hudi_trips_snapshot\").count()\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only ",(0,i.kt)("inlineCode",{parentName:"p"},"Append")," mode is supported for delete operation."))),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data#deletes"},"deletion section")," of the writing data page for more details."),(0,i.kt)("h2",{id:"insert-overwrite-table"},"Insert Overwrite Table"),(0,i.kt)("p",null,"Generate some new trips, overwrite the table logically at the Hudi metadata level. The Hudi cleaner will eventually\nclean up the previous table snapshot's file groups. This can be faster than deleting the older table and recreating\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"Overwrite")," mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  show(10, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"insert_overwrite_table").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now, from query before.\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  show(10, false)\n\n')),(0,i.kt)("h2",{id:"insert-overwrite"},"Insert Overwrite"),(0,i.kt)("p",null,"Generate some new trips, overwrite the all the partitions that are present in the input. This operation can be faster\nthan ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," for batch ETL jobs, that are recomputing entire target partitions at once (as opposed to incrementally\nupdating the target tables). This is because, we are able to bypass indexing, precombining and other repartitioning\nsteps in the upsert write path completely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.\n  read.json(spark.sparkContext.parallelize(inserts, 2)).\n  filter("partitionpath = \'americas/united_states/san_francisco\'")\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"insert_overwrite").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now for San Francisco alone, from query before.\nspark.\n  read.format("hudi").\n  load(basePath + "/*/*/*/*").\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n')),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,i.kt)("p",null,"You can also do the quickstart by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi#building-apache-hudi-from-source"},"building hudi yourself"),",\nand using ",(0,i.kt)("inlineCode",{parentName:"p"},"--jars <path to hudi_code>/packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.1?-*.*.*-SNAPSHOT.jar")," in the spark-shell command above\ninstead of ",(0,i.kt)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark3-bundle_2.12:0.8.0"),". Hudi also supports scala 2.12. Refer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi#build-with-scala-212"},"build with scala 2.12"),"\nfor more info."),(0,i.kt)("p",null,"Also, we used Spark here to show case the capabilities of Hudi. However, Hudi can support multiple table types/query types and\nHudi tables can be queried from query engines like Hive, Spark, Presto and much more. We have put together a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VhNgUsxdrD0"},"demo video")," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,i.kt)("a",{parentName:"p",href:"/docs/docker_demo"},"here")," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/migration_guide"},"migration guide"),"."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[5742],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79669:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],s={title:"Syncing to Metastore",keywords:["hudi","hive","sync"]},l=void 0,d={unversionedId:"syncing_metastore",id:"version-0.10.0/syncing_metastore",isDocsHomePage:!1,title:"Syncing to Metastore",description:"Spark and DeltaStreamer",source:"@site/versioned_docs/version-0.10.0/syncing_metastore.md",sourceDirName:".",slug:"/syncing_metastore",permalink:"/cn/docs/syncing_metastore",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.10.0/syncing_metastore.md",version:"0.10.0",frontMatter:{title:"Syncing to Metastore",keywords:["hudi","hive","sync"]},sidebar:"version-0.10.0/docs",previous:{title:"Flink Setup",permalink:"/cn/docs/flink_configuration"},next:{title:"Bootstrapping",permalink:"/cn/docs/migration_guide"}},p=[{value:"Spark and DeltaStreamer",id:"spark-and-deltastreamer",children:[]},{value:"Flink Setup",id:"flink-setup",children:[{value:"Install",id:"install",children:[]},{value:"Hive Environment",id:"hive-environment",children:[]},{value:"Sync Template",id:"sync-template",children:[]},{value:"Query",id:"query",children:[]}]}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"spark-and-deltastreamer"},"Spark and DeltaStreamer"),(0,r.kt)("p",null,"Writing data with ",(0,r.kt)("a",{parentName:"p",href:"/docs/writing_data"},"DataSource")," writer or ",(0,r.kt)("a",{parentName:"p",href:"/docs/hoodie_deltastreamer"},"HoodieDeltaStreamer")," supports syncing of the table's latest schema to Hive metastore, such that queries can pick up new columns and partitions.\nIn case, it's preferable to run this from commandline or in an independent jvm, Hudi provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"HiveSyncTool"),", which can be invoked as below,\nonce you have built the hudi-hive module. Following is how we sync the above Datasource Writer written table to Hive metastore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"cd hudi-hive\n./run_sync_tool.sh  --jdbc-url jdbc:hive2:\\/\\/hiveserver:10000 --user hive --pass hive --partitioned-by partition --base-path <basePath> --database default --table <tableName>\n")),(0,r.kt)("p",null,"Starting with Hudi 0.5.1 version read optimized version of merge-on-read tables are suffixed '_ro' by default. For backwards compatibility with older Hudi versions, an optional HiveSyncConfig - ",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-ro-suffix"),", has been provided to turn off '_ro' suffixing if desired. Explore other hive sync options using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"cd hudi-hive\n./run_sync_tool.sh\n [hudi-hive]$ ./run_sync_tool.sh --help\n")),(0,r.kt)("h2",{id:"flink-setup"},"Flink Setup"),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("p",null,"Now you can git clone Hudi master branch to test Flink hive sync. The first step is to install Hudi to get ",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-flink-bundle_2.11-0.x.jar"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-flink-bundle")," module pom.xml sets the scope related to hive as ",(0,r.kt)("inlineCode",{parentName:"p"},"provided")," by default. If you want to use hive sync, you need to use the\nprofile ",(0,r.kt)("inlineCode",{parentName:"p"},"flink-bundle-shade-hive")," during packaging. Executing command below to install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Maven install command\nmvn install -DskipTests -Drat.skip=true -Pflink-bundle-shade-hive2\n\n# For hive1, you need to use profile -Pflink-bundle-shade-hive1\n# For hive3, you need to use profile -Pflink-bundle-shade-hive3 \n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Hive1.x can only synchronize metadata to hive, but cannot use hive query now. If you need to query, you can use spark to query hive table."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If using hive profile, you need to modify the hive version in the profile to your hive cluster version (Only need to modify the hive version in this profile).\nThe location of this ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"packaging/hudi-flink-bundle/pom.xml"),", and the corresponding profile is at the bottom of this file."))),(0,r.kt)("h3",{id:"hive-environment"},"Hive Environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import ",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle")," into hive. Creating ",(0,r.kt)("inlineCode",{parentName:"p"},"auxlib/")," folder under the root directory of hive, and moving ",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"auxlib"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-hadoop-mr-bundle-0.x.x-SNAPSHOT.jar")," is at ",(0,r.kt)("inlineCode",{parentName:"p"},"packaging/hudi-hadoop-mr-bundle/target"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When Flink sql client connects hive metastore remotely, ",(0,r.kt)("inlineCode",{parentName:"p"},"hive metastore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hiveserver2")," services need to be enabled, and the port number need to\nbe set correctly. Command to turn on the services:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Enable hive metastore and hiveserver2\nnohup ./bin/hive --service metastore &\nnohup ./bin/hive --service hiveserver2 &\n\n# While modifying the jar package under auxlib, you need to restart the service.\n")),(0,r.kt)("h3",{id:"sync-template"},"Sync Template"),(0,r.kt)("p",null,"Flink hive sync now supports two hive sync mode, ",(0,r.kt)("inlineCode",{parentName:"p"},"hms")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"hms")," mode only needs to configure metastore uris. For\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbc")," mode, the JDBC attributes and metastore uris both need to be configured. The options template is as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- hms mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  --If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'hms'         -- Required. Setting hive sync mode to hms, default jdbc\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083' -- Required. The port need set on hive-site.xml\n);\n\n\n-- jdbc mode template\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${db_path}/t1',\n  'table.type' = 'COPY_ON_WRITE',  --If MERGE_ON_READ, hive query will not have output until the parquet file is generated\n  'hive_sync.enable' = 'true',     -- Required. To enable hive synchronization\n  'hive_sync.mode' = 'hms'         -- Required. Setting hive sync mode to hms, default jdbc\n  'hive_sync.metastore.uris' = 'thrift://${ip}:9083'  -- Required. The port need set on hive-site.xml\n  'hive_sync.jdbc_url'='jdbc:hive2://${ip}:10000',    -- required, hiveServer port\n  'hive_sync.table'='t1',                          -- required, hive table name\n  'hive_sync.db'='testDB',                         -- required, hive database name\n  'hive_sync.username'='${user_name}',                     -- required, HMS username\n  'hive_sync.password'='${password}'             -- required, HMS password\n);\n")),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"While using hive beeline query, you need to enter settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set hive.input.format = org.apache.hudi.hadoop.hive.HoodieCombineHiveInputFormat;\n")))}u.isMDXComponent=!0}}]);
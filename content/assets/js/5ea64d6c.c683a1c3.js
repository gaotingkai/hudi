"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2906],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),u=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(m,c(c({ref:n},l),{},{components:t})):o.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<i;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35490:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),c=["components"],s={title:"Tencent Cloud",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:new Date("2020-04-21T21:38:24.000Z")},a=void 0,u={unversionedId:"cos_hoodie",id:"version-0.9.0/cos_hoodie",isDocsHomePage:!1,title:"Tencent Cloud",description:"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS.",source:"@site/versioned_docs/version-0.9.0/cos_hoodie.md",sourceDirName:".",slug:"/cos_hoodie",permalink:"/docs/0.9.0/cos_hoodie",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/versioned_docs/version-0.9.0/cos_hoodie.md",version:"0.9.0",frontMatter:{title:"Tencent Cloud",keywords:["hudi","hive","tencent","cos","spark","presto"],summary:"In this page, we go over how to configure Hudi with COS filesystem.",last_modified_at:"2020-04-21T21:38:24.000Z"},sidebar:"version-0.9.0/docs",previous:{title:"Microsoft Azure",permalink:"/docs/0.9.0/azure_hoodie"},next:{title:"IBM Cloud",permalink:"/docs/0.9.0/ibm_cos_hoodie"}},l=[{value:"Tencent Cloud COS configs",id:"tencent-cloud-cos-configs",children:[{value:"Tencent Cloud COS Credentials",id:"tencent-cloud-cos-credentials",children:[]},{value:"Tencent Cloud COS Libs",id:"tencent-cloud-cos-libs",children:[]}]}],p={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS."),(0,i.kt)("h2",{id:"tencent-cloud-cos-configs"},"Tencent Cloud COS configs"),(0,i.kt)("p",null,"There are two configurations required for Hudi-COS compatibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding Tencent Cloud COS Credentials for Hudi"),(0,i.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,i.kt)("h3",{id:"tencent-cloud-cos-credentials"},"Tencent Cloud COS Credentials"),(0,i.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your COS bucket name, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretId")," with your COS secret Id, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.cosn.userinfo.secretKey")," with your COS key. Hudi should be able to read/write from the bucket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>fs.defaultFS</name>\n        <value>cosn://bucketname</value>\n        <description>COS bucket name</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretId</name>\n        <value>cos-secretId</value>\n        <description>Tencent Cloud Secret Id</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.userinfo.secretKey</name>\n        <value>cos-secretkey</value>\n        <description>Tencent Cloud Secret Key</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.region</name>\n        <value>ap-region</value>\n        <description>The region where the bucket is located.</description>\n    </property>\n\n    <property>\n        <name>fs.cosn.bucket.endpoint_suffix</name>\n        <value>cos.endpoint.suffix</value>\n        <description>\n          COS endpoint to connect to. \n          For public cloud users, it is recommended not to set this option, and only the correct area field is required.\n        </description>\n    </property>\n\n    <property>\n        <name>fs.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosFileSystem</value>\n        <description>The implementation class of the CosN Filesystem.</description>\n    </property>\n\n    <property>\n        <name>fs.AbstractFileSystem.cosn.impl</name>\n        <value>org.apache.hadoop.fs.CosN</value>\n        <description>The implementation class of the CosN AbstractFileSystem.</description>\n    </property>\n\n")),(0,i.kt)("h3",{id:"tencent-cloud-cos-libs"},"Tencent Cloud COS Libs"),(0,i.kt)("p",null,"COS hadoop libraries to add to our classpath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-cos:2.8.5")))}d.isMDXComponent=!0}}]);
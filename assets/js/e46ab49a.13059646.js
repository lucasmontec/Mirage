"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),u=a,m=c["".concat(s,".").concat(u)]||c[u]||g[u]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"StringExtensions",title:"StringExtensions"},l="Class StringExtensions",o={unversionedId:"reference/Mirage.Serialization/StringExtensions",id:"reference/Mirage.Serialization/StringExtensions",title:"StringExtensions",description:"Inheritance",source:"@site/docs/reference/Mirage.Serialization/StringExtensions.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/StringExtensions",permalink:"/Mirage/docs/reference/Mirage.Serialization/StringExtensions",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Serialization/StringExtensions.md",tags:[],version:"current",frontMatter:{id:"StringExtensions",title:"StringExtensions"},sidebar:"api",previous:{title:"Reader<T>",permalink:"/Mirage/docs/reference/Mirage.Serialization/Reader-1"},next:{title:"SystemTypesExtensions",permalink:"/Mirage/docs/reference/Mirage.Serialization/SystemTypesExtensions"}},s={},d=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Properties",id:"properties",level:3},{value:"MaxStringLength",id:"maxstringlength",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Methods",id:"methods",level:3},{value:"WriteString(NetworkWriter, String)",id:"writestringnetworkwriter-string",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5},{value:"ReadString(NetworkReader)",id:"readstringnetworkreader",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns",level:5},{value:"WriteString(NetworkWriter, String, Encoding)",id:"writestringnetworkwriter-string-encoding",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"ReadString(NetworkReader, Encoding)",id:"readstringnetworkreader-encoding",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-1",level:5}],p={toc:d};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-stringextensions"},"Class StringExtensions"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static class StringExtensions\n")),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"maxstringlength"},"MaxStringLength"),(0,a.kt)("p",null,"Maximum number of bytes a string can be serialized to. This is to avoid allocation attack.\nDefaults MTU, 1300\nNOTE: this is byte size after Encoding\nIMPORTANT: Setting this property will resize the internal buffer. Do not call in hotpath. It is best to call once when you start the application"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static int MaxStringLength { get; set; }\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h4",{id:"writestringnetworkwriter-string"},"WriteString(NetworkWriter, String)"),(0,a.kt)("h5",{id:"declaration-1"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteString(this NetworkWriter writer, string value)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,a.kt)("td",{parentName:"tr",align:null},"writer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.String"),(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"string or null")))),(0,a.kt)("h4",{id:"readstringnetworkreader"},"ReadString(NetworkReader)"),(0,a.kt)("h5",{id:"declaration-2"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static string ReadString(this NetworkReader reader)\n")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,a.kt)("td",{parentName:"tr",align:null},"reader"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.String"),(0,a.kt)("td",{parentName:"tr",align:null},"string or null")))),(0,a.kt)("h4",{id:"writestringnetworkwriter-string-encoding"},"WriteString(NetworkWriter, String, Encoding)"),(0,a.kt)("h5",{id:"declaration-3"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static void WriteString(this NetworkWriter writer, string value, Encoding encoding)\n")),(0,a.kt)("h5",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,a.kt)("td",{parentName:"tr",align:null},"writer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.String"),(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"string or null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Text.Encoding"),(0,a.kt)("td",{parentName:"tr",align:null},"encoding"),(0,a.kt)("td",{parentName:"tr",align:null},"Use this for encoding other than the default (UTF8). Make sure to use same encoding for ReadString")))),(0,a.kt)("h4",{id:"readstringnetworkreader-encoding"},"ReadString(NetworkReader, Encoding)"),(0,a.kt)("h5",{id:"declaration-4"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static string ReadString(this NetworkReader reader, Encoding encoding)\n")),(0,a.kt)("h5",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,a.kt)("td",{parentName:"tr",align:null},"reader"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Text.Encoding"),(0,a.kt)("td",{parentName:"tr",align:null},"encoding"),(0,a.kt)("td",{parentName:"tr",align:null},"Use this for encoding other than the default (UTF8). Make sure to use same encoding for WriterString")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.String"),(0,a.kt)("td",{parentName:"tr",align:null},"string or null")))))}g.isMDXComponent=!0}}]);
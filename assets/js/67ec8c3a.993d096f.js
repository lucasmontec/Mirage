"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"MethodInvocationException",title:"MethodInvocationException"},o="Class MethodInvocationException",l={unversionedId:"reference/Mirage/MethodInvocationException",id:"reference/Mirage/MethodInvocationException",title:"MethodInvocationException",description:"Exception thrown if a guarded method is invoked incorrectly",source:"@site/docs/reference/Mirage/MethodInvocationException.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/MethodInvocationException",permalink:"/Mirage/docs/reference/Mirage/MethodInvocationException",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/MethodInvocationException.md",tags:[],version:"current",frontMatter:{id:"MethodInvocationException",title:"MethodInvocationException"},sidebar:"api",previous:{title:"MessageWaiter<T>",permalink:"/Mirage/docs/reference/Mirage/MessageWaiter-1"},next:{title:"NetworkAnimator",permalink:"/Mirage/docs/reference/Mirage/NetworkAnimator"}},c={},p=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"MethodInvocationException()",id:"methodinvocationexception",level:4},{value:"Declaration",id:"declaration",level:5},{value:"MethodInvocationException(String)",id:"methodinvocationexceptionstring",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters",level:5},{value:"MethodInvocationException(SerializationInfo, StreamingContext)",id:"methodinvocationexceptionserializationinfo-streamingcontext",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-1",level:5}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-methodinvocationexception"},"Class MethodInvocationException"),(0,r.kt)("p",null,"Exception thrown if a guarded method is invoked incorrectly"),(0,r.kt)("div",{class:"inheritance"},(0,r.kt)("h5",{id:"inheritance"},"Inheritance"),(0,r.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,r.kt)("div",{class:"level",style:{"--data-index":1}},"System.Exception")),(0,r.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show")),(0,r.kt)("h5",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class MethodInvocationException : Exception, _Exception, ISerializable\n")),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("h4",{id:"methodinvocationexception"},"MethodInvocationException()"),(0,r.kt)("p",null,"Initializes a new instance of the  class"),(0,r.kt)("h5",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public MethodInvocationException()\n")),(0,r.kt)("h4",{id:"methodinvocationexceptionstring"},"MethodInvocationException(String)"),(0,r.kt)("p",null,"Initializes a new instance of the  class"),(0,r.kt)("h5",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public MethodInvocationException(string message)\n")),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.String"),(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("xref",{href:"System.String","data-throw-if-not-resolved":"false"})," that describes the exception.")))),(0,r.kt)("h4",{id:"methodinvocationexceptionserializationinfo-streamingcontext"},"MethodInvocationException(SerializationInfo, StreamingContext)"),(0,r.kt)("h5",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected MethodInvocationException(SerializationInfo info, StreamingContext context)\n")),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Runtime.Serialization.SerializationInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System.Runtime.Serialization.StreamingContext"),(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);
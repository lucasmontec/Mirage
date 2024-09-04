"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[5498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},35946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"BitCountFromRangeAttribute",title:"BitCountFromRangeAttribute"},o="Class BitCountFromRangeAttribute",l={unversionedId:"reference/Mirage.Serialization/BitCountFromRangeAttribute",id:"reference/Mirage.Serialization/BitCountFromRangeAttribute",title:"BitCountFromRangeAttribute",description:"Calculates bitcount from then given min/max values and then packs using",source:"@site/docs/reference/Mirage.Serialization/BitCountFromRangeAttribute.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/BitCountFromRangeAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/BitCountFromRangeAttribute",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Serialization/BitCountFromRangeAttribute.md",tags:[],version:"current",frontMatter:{id:"BitCountFromRangeAttribute",title:"BitCountFromRangeAttribute"},sidebar:"api",previous:{title:"BitCountAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/BitCountAttribute"},next:{title:"BitHelper",permalink:"/Mirage/docs/reference/Mirage.Serialization/BitHelper"}},u={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"BitCountFromRangeAttribute(Int32, Int32)",id:"bitcountfromrangeattributeint32-int32",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-bitcountfromrangeattribute"},"Class BitCountFromRangeAttribute"),(0,a.kt)("p",null,"Calculates bitcount from then given min/max values and then packs using\nAlso See: Bit Packing Documentation"),(0,a.kt)("div",{class:"inheritance"},(0,a.kt)("h5",{id:"inheritance"},"Inheritance"),(0,a.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,a.kt)("div",{class:"level",style:{"--data-index":1}},"System.Attribute")),(0,a.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show")),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter)]\npublic class BitCountFromRangeAttribute : Attribute, _Attribute\n")),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("h4",{id:"bitcountfromrangeattributeint32-int32"},"BitCountFromRangeAttribute(Int32, Int32)"),(0,a.kt)("h5",{id:"declaration"},"Declaration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public BitCountFromRangeAttribute(int min, int max)\n")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"min"),(0,a.kt)("td",{parentName:"tr",align:null},"minimum possible int value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"minimum possible max value")))))}m.isMDXComponent=!0}}]);
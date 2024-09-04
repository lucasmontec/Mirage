"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[9805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,b=d["".concat(l,".").concat(p)]||d[p]||g[p]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"ZigZagEncodeAttribute",title:"ZigZagEncodeAttribute"},o="Class ZigZagEncodeAttribute",c={unversionedId:"reference/Mirage.Serialization/ZigZagEncodeAttribute",id:"reference/Mirage.Serialization/ZigZagEncodeAttribute",title:"ZigZagEncodeAttribute",description:"Used along size  to encodes a integer value using  so that both positive and negative values can be sent",source:"@site/docs/reference/Mirage.Serialization/ZigZagEncodeAttribute.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/ZigZagEncodeAttribute",permalink:"/Mirage/docs/reference/Mirage.Serialization/ZigZagEncodeAttribute",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Serialization/ZigZagEncodeAttribute.md",tags:[],version:"current",frontMatter:{id:"ZigZagEncodeAttribute",title:"ZigZagEncodeAttribute"},sidebar:"api",previous:{title:"ZigZag",permalink:"/Mirage/docs/reference/Mirage.Serialization/ZigZag"},next:{title:"Mirage.SocketLayer",permalink:"/Mirage/docs/reference/Mirage.SocketLayer/"}},l={},s=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"ZigZagEncodeAttribute()",id:"zigzagencodeattribute",level:4},{value:"Declaration",id:"declaration",level:5}],u={toc:s};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-zigzagencodeattribute"},"Class ZigZagEncodeAttribute"),(0,i.kt)("p",null,"Used along size  to encodes a integer value using  so that both positive and negative values can be sent\nAlso See: Bit Packing Documentation"),(0,i.kt)("div",{class:"inheritance"},(0,i.kt)("h5",{id:"inheritance"},"Inheritance"),(0,i.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object"),(0,i.kt)("div",{class:"level",style:{"--data-index":1}},"System.Attribute")),(0,i.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show")),(0,i.kt)("h5",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[AttributeUsage(AttributeTargets.Field | AttributeTargets.Parameter)]\npublic class ZigZagEncodeAttribute : Attribute, _Attribute\n")),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("h4",{id:"zigzagencodeattribute"},"ZigZagEncodeAttribute()"),(0,i.kt)("h5",{id:"declaration"},"Declaration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public ZigZagEncodeAttribute()\n")))}g.isMDXComponent=!0}}]);
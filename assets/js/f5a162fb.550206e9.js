"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),y=o(r),u=n,d=y["".concat(c,".").concat(u)]||y[u]||p[u]||l;return r?a.createElement(d,i(i({ref:t},g),{},{components:r})):a.createElement(d,i({ref:t},g))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},30899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={id:"MessageDelegateWithPlayerAsync-1",title:"MessageDelegateWithPlayerAsync<T>"},i="Delegate MessageDelegateWithPlayerAsync&lt;T&gt;",s={unversionedId:"reference/Mirage/MessageDelegateWithPlayerAsync-1",id:"reference/Mirage/MessageDelegateWithPlayerAsync-1",title:"MessageDelegateWithPlayerAsync<T>",description:"Syntax",source:"@site/docs/reference/Mirage/MessageDelegateWithPlayerAsync-1.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/MessageDelegateWithPlayerAsync-1",permalink:"/Mirage/docs/reference/Mirage/MessageDelegateWithPlayerAsync-1",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/MessageDelegateWithPlayerAsync-1.md",tags:[],version:"current",frontMatter:{id:"MessageDelegateWithPlayerAsync-1",title:"MessageDelegateWithPlayerAsync<T>"},sidebar:"api",previous:{title:"MessageDelegateWithPlayer<T>",permalink:"/Mirage/docs/reference/Mirage/MessageDelegateWithPlayer-1"},next:{title:"MessageHandler",permalink:"/Mirage/docs/reference/Mirage/MessageHandler"}},c={},o=[{value:"Syntax",id:"syntax",level:5},{value:"Type Parameters",id:"type-parameters",level:5}],g={toc:o};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delegate-messagedelegatewithplayerasynct"},"Delegate MessageDelegateWithPlayerAsync","<","T",">"),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public delegate UniTaskVoid MessageDelegateWithPlayerAsync<in T>(INetworkPlayer player, T message);\n")),(0,n.kt)("h5",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"T"),(0,n.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[7471],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>u});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,y=g["".concat(i,".").concat(u)]||g[u]||d[u]||l;return n?t.createElement(y,c(c({ref:r},s),{},{components:n})):t.createElement(y,c({ref:r},s))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=g;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50586:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const l={id:"SpawnHandlerAsyncDelegate",title:"SpawnHandlerAsyncDelegate"},c="Delegate SpawnHandlerAsyncDelegate",o={unversionedId:"reference/Mirage/SpawnHandlerAsyncDelegate",id:"reference/Mirage/SpawnHandlerAsyncDelegate",title:"SpawnHandlerAsyncDelegate",description:"Syntax",source:"@site/docs/reference/Mirage/SpawnHandlerAsyncDelegate.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/SpawnHandlerAsyncDelegate",permalink:"/Mirage/docs/reference/Mirage/SpawnHandlerAsyncDelegate",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/SpawnHandlerAsyncDelegate.md",tags:[],version:"current",frontMatter:{id:"SpawnHandlerAsyncDelegate",title:"SpawnHandlerAsyncDelegate"},sidebar:"api",previous:{title:"SpawnHandler",permalink:"/Mirage/docs/reference/Mirage/SpawnHandler"},next:{title:"SpawnHandlerDelegate",permalink:"/Mirage/docs/reference/Mirage/SpawnHandlerDelegate"}},i={},p=[{value:"Syntax",id:"syntax",level:5}],s={toc:p};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delegate-spawnhandlerasyncdelegate"},"Delegate SpawnHandlerAsyncDelegate"),(0,a.kt)("h5",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public delegate UniTask<NetworkIdentity> SpawnHandlerAsyncDelegate(SpawnMessage msg);\n")))}d.isMDXComponent=!0}}]);
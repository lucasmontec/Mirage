"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[8088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,d=h["".concat(c,".").concat(u)]||h[u]||p[u]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Network Animator",s={unversionedId:"components/network-animator",id:"components/network-animator",title:"Network Animator",description:"The Network Animator component allows you to synchronize animation states for networked objects. It synchronizes state and parameters from an Animator Controller.",source:"@site/docs/components/network-animator.md",sourceDirName:"components",slug:"/components/network-animator",permalink:"/Mirage/docs/components/network-animator",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/components/network-animator.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/Mirage/docs/components/"},next:{title:"Network Discovery",permalink:"/Mirage/docs/components/network-discovery"}},c={},l=[{value:"Details",id:"details",level:2}],m={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-animator"},"Network Animator"),(0,o.kt)("p",null,"The Network Animator component allows you to synchronize animation states for networked objects. It synchronizes state and parameters from an Animator Controller."),(0,o.kt)("p",null,"Note that if you create a Network Animator component on an empty game object, Mirage also creates a Network Identity component and an Animator component on that game object."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Network Animator component in the Inspector window",src:n(35909).Z,width:"484",height:"502"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Client Authority"),(0,o.kt)("br",{parentName:"p"}),"\n","Enable this to have changes to animation parameters sent from client to server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Animator"),(0,o.kt)("br",{parentName:"p"}),"\n","Use this field to define the Animator component you want the Network Animator to synchronize with."))),(0,o.kt)("p",null,"Normally, changes are sent to all observers of the object this component is on.  Setting ",(0,o.kt)("strong",{parentName:"p"},"Sync Mode")," to Owner Only makes the changes private between the server and the client owner of the object."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("strong",{parentName:"p"},"Sync Interval")," to specify how often it syncs (in seconds)."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("p",null,"The Network Animator ensures the synchronization of game object animation across the network, meaning that all players see the animation happen at the same. There are two kinds of authority for networked animation (see documentation on ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/authority"},"Network Authority"),"):"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Animator Triggers are not synced directly. Call ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkAnimator.SetTrigger")," instead. A game object with authority can use the SetTrigger function to fire an animation trigger on other clients.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the game object has authority over the client, you should animate it locally on the client that owns the game object. That client sends the animation state information to the server, which broadcasts it to all the other clients. For example, this may be suitable for player characters with client authority."),(0,o.kt)("li",{parentName:"ul"},"If the game object has authority on the server, then you should animate it on the server. The server then sends state information to all clients. This is common for animated game objects that are not related to a specific client, such as scene objects and non-player characters, or server-authoritative clients.")))}p.isMDXComponent=!0},35909:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/NetworkAnimatorComponent-3e1f0ea5f561ebd637ea88fe7b1d3cd3.png"}}]);
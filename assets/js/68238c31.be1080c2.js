"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[6384],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),k=n,v=p["".concat(d,".").concat(k)]||p[k]||s[k]||l;return a?r.createElement(v,o(o({ref:t},u),{},{components:a})):r.createElement(v,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},39630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={id:"NetworkManagerHud",title:"NetworkManagerHud"},o="Class NetworkManagerHud",i={unversionedId:"reference/Mirage/NetworkManagerHud",id:"reference/Mirage/NetworkManagerHud",title:"NetworkManagerHud",description:"Inheritance",source:"@site/docs/reference/Mirage/NetworkManagerHud.md",sourceDirName:"reference/Mirage",slug:"/reference/Mirage/NetworkManagerHud",permalink:"/Mirage/docs/reference/Mirage/NetworkManagerHud",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage/NetworkManagerHud.md",tags:[],version:"current",frontMatter:{id:"NetworkManagerHud",title:"NetworkManagerHud"},sidebar:"api",previous:{title:"NetworkManagerGUI",permalink:"/Mirage/docs/reference/Mirage/NetworkManagerGUI"},next:{title:"NetworkManagerMode",permalink:"/Mirage/docs/reference/Mirage/NetworkManagerMode"}},d={},c=[{value:"Inheritance",id:"inheritance",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Fields",id:"fields",level:3},{value:"NetworkManager",id:"networkmanager",level:4},{value:"Declaration",id:"declaration",level:5},{value:"NetworkAddress",id:"networkaddress",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"DontDestroy",id:"dontdestroy",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"NetworkAddressInput",id:"networkaddressinput",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"OfflineGO",id:"offlinego",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"OnlineGO",id:"onlinego",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"StatusLabel",id:"statuslabel",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Methods",id:"methods",level:3},{value:"StartHostButtonHandler()",id:"starthostbuttonhandler",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"StartServerOnlyButtonHandler()",id:"startserveronlybuttonhandler",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"StartClientButtonHandler()",id:"startclientbuttonhandler",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"StopButtonHandler()",id:"stopbuttonhandler",level:4},{value:"Declaration",id:"declaration-10",level:5},{value:"OnNetworkAddressInputUpdate()",id:"onnetworkaddressinputupdate",level:4},{value:"Declaration",id:"declaration-11",level:5}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-networkmanagerhud"},"Class NetworkManagerHud"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public class NetworkManagerHud : MonoBehaviour\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"networkmanager"},"NetworkManager"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public NetworkManager NetworkManager\n")),(0,n.kt)("h4",{id:"networkaddress"},"NetworkAddress"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public string NetworkAddress\n")),(0,n.kt)("h4",{id:"dontdestroy"},"DontDestroy"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool DontDestroy\n")),(0,n.kt)("h4",{id:"networkaddressinput"},"NetworkAddressInput"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public InputField NetworkAddressInput\n")),(0,n.kt)("h4",{id:"offlinego"},"OfflineGO"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public GameObject OfflineGO\n")),(0,n.kt)("h4",{id:"onlinego"},"OnlineGO"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public GameObject OnlineGO\n")),(0,n.kt)("h4",{id:"statuslabel"},"StatusLabel"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public Text StatusLabel\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"starthostbuttonhandler"},"StartHostButtonHandler()"),(0,n.kt)("h5",{id:"declaration-7"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void StartHostButtonHandler()\n")),(0,n.kt)("h4",{id:"startserveronlybuttonhandler"},"StartServerOnlyButtonHandler()"),(0,n.kt)("h5",{id:"declaration-8"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void StartServerOnlyButtonHandler()\n")),(0,n.kt)("h4",{id:"startclientbuttonhandler"},"StartClientButtonHandler()"),(0,n.kt)("h5",{id:"declaration-9"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void StartClientButtonHandler()\n")),(0,n.kt)("h4",{id:"stopbuttonhandler"},"StopButtonHandler()"),(0,n.kt)("h5",{id:"declaration-10"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void StopButtonHandler()\n")),(0,n.kt)("h4",{id:"onnetworkaddressinputupdate"},"OnNetworkAddressInputUpdate()"),(0,n.kt)("h5",{id:"declaration-11"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void OnNetworkAddressInputUpdate()\n")))}s.isMDXComponent=!0}}]);
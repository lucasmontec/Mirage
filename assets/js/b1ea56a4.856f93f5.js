"use strict";(self.webpackChunkmirage_docs=self.webpackChunkmirage_docs||[]).push([[3178],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=k(t,["components","mdxType","originalType","parentName"]),d=u(a),c=n,s=d["".concat(p,".").concat(c)]||d[c]||o[c]||l;return a?r.createElement(s,i(i({ref:e},m),{},{components:a})):r.createElement(s,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var k={};for(var p in e)hasOwnProperty.call(e,p)&&(k[p]=e[p]);k.originalType=t,k.mdxType="string"==typeof t?t:n,i[1]=k;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44315:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>k,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={id:"VarIntPacker",title:"VarIntPacker"},i="Class VarIntPacker",k={unversionedId:"reference/Mirage.Serialization/VarIntPacker",id:"reference/Mirage.Serialization/VarIntPacker",title:"VarIntPacker",description:"Inheritance",source:"@site/docs/reference/Mirage.Serialization/VarIntPacker.md",sourceDirName:"reference/Mirage.Serialization",slug:"/reference/Mirage.Serialization/VarIntPacker",permalink:"/Mirage/docs/reference/Mirage.Serialization/VarIntPacker",draft:!1,editUrl:"https://github.com/MirageNet/Mirage/tree/main/doc/docs/reference/Mirage.Serialization/VarIntPacker.md",tags:[],version:"current",frontMatter:{id:"VarIntPacker",title:"VarIntPacker"},sidebar:"api",previous:{title:"VarIntBlocksPacker",permalink:"/Mirage/docs/reference/Mirage.Serialization/VarIntBlocksPacker"},next:{title:"VarVector2Packer",permalink:"/Mirage/docs/reference/Mirage.Serialization/VarVector2Packer"}},p={},u=[{value:"Inheritance",id:"inheritance",level:5},{value:"Inherited Members",id:"inherited-members",level:5},{value:"Syntax",id:"syntax",level:5},{value:"Constructors",id:"constructors",level:3},{value:"VarIntPacker(UInt64, UInt64)",id:"varintpackeruint64-uint64",level:4},{value:"Declaration",id:"declaration",level:5},{value:"Parameters",id:"parameters",level:5},{value:"VarIntPacker(UInt64, UInt64, UInt64, Boolean)",id:"varintpackeruint64-uint64-uint64-boolean",level:4},{value:"Declaration",id:"declaration-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Methods",id:"methods",level:3},{value:"FromBitCount(Int32, Int32)",id:"frombitcountint32-int32",level:4},{value:"Declaration",id:"declaration-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns",level:5},{value:"FromBitCount(Int32, Int32, Int32, Boolean)",id:"frombitcountint32-int32-int32-boolean",level:4},{value:"Declaration",id:"declaration-3",level:5},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-1",level:5},{value:"PackUlong(NetworkWriter, UInt64)",id:"packulongnetworkwriter-uint64",level:4},{value:"Declaration",id:"declaration-4",level:5},{value:"Parameters",id:"parameters-4",level:5},{value:"PackUint(NetworkWriter, UInt32)",id:"packuintnetworkwriter-uint32",level:4},{value:"Declaration",id:"declaration-5",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"PackUshort(NetworkWriter, UInt16)",id:"packushortnetworkwriter-uint16",level:4},{value:"Declaration",id:"declaration-6",level:5},{value:"Parameters",id:"parameters-6",level:5},{value:"UnpackUlong(NetworkReader)",id:"unpackulongnetworkreader",level:4},{value:"Declaration",id:"declaration-7",level:5},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-2",level:5},{value:"UnpackUint(NetworkReader)",id:"unpackuintnetworkreader",level:4},{value:"Declaration",id:"declaration-8",level:5},{value:"Parameters",id:"parameters-8",level:5},{value:"Returns",id:"returns-3",level:5},{value:"UnpackUshort(NetworkReader)",id:"unpackushortnetworkreader",level:4},{value:"Declaration",id:"declaration-9",level:5},{value:"Parameters",id:"parameters-9",level:5},{value:"Returns",id:"returns-4",level:5}],m={toc:u};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-varintpacker"},"Class VarIntPacker"),(0,n.kt)("div",{class:"inheritance"},(0,n.kt)("h5",{id:"inheritance"},"Inheritance"),(0,n.kt)("div",{class:"level",style:{"--data-index":0}},"System.Object")),(0,n.kt)("h5",{id:"inherited-members"},"Inherited Members"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show")),(0,n.kt)("h5",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public sealed class VarIntPacker\n")),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("h4",{id:"varintpackeruint64-uint64"},"VarIntPacker(UInt64, UInt64)"),(0,n.kt)("h5",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public VarIntPacker(ulong smallValue, ulong mediumValue)\n")),(0,n.kt)("h5",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null},"smallValue"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null},"mediumValue"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"varintpackeruint64-uint64-uint64-boolean"},"VarIntPacker(UInt64, UInt64, UInt64, Boolean)"),(0,n.kt)("h5",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public VarIntPacker(ulong smallValue, ulong mediumValue, ulong largeValue, bool throwIfOverLarge = true)\n")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null},"smallValue"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null},"mediumValue"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null},"largeValue"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"throwIfOverLarge"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("h4",{id:"frombitcountint32-int32"},"FromBitCount(Int32, Int32)"),(0,n.kt)("h5",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public static VarIntPacker FromBitCount(int smallBits, int mediumBits)\n")),(0,n.kt)("h5",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"smallBits"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"mediumBits"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.VarIntPacker"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"frombitcountint32-int32-int32-boolean"},"FromBitCount(Int32, Int32, Int32, Boolean)"),(0,n.kt)("h5",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public static VarIntPacker FromBitCount(int smallBits, int mediumBits, int largeBits, bool throwIfOverLarge = true)\n")),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"smallBits"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"mediumBits"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Int32"),(0,n.kt)("td",{parentName:"tr",align:null},"largeBits"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"throwIfOverLarge"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.VarIntPacker"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"packulongnetworkwriter-uint64"},"PackUlong(NetworkWriter, UInt64)"),(0,n.kt)("h5",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void PackUlong(NetworkWriter writer, ulong value)\n")),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,n.kt)("td",{parentName:"tr",align:null},"writer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"packuintnetworkwriter-uint32"},"PackUint(NetworkWriter, UInt32)"),(0,n.kt)("h5",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void PackUint(NetworkWriter writer, uint value)\n")),(0,n.kt)("h5",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,n.kt)("td",{parentName:"tr",align:null},"writer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"packushortnetworkwriter-uint16"},"PackUshort(NetworkWriter, UInt16)"),(0,n.kt)("h5",{id:"declaration-6"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void PackUshort(NetworkWriter writer, ushort value)\n")),(0,n.kt)("h5",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkWriter"),(0,n.kt)("td",{parentName:"tr",align:null},"writer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt16"),(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unpackulongnetworkreader"},"UnpackUlong(NetworkReader)"),(0,n.kt)("h5",{id:"declaration-7"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public ulong UnpackUlong(NetworkReader reader)\n")),(0,n.kt)("h5",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,n.kt)("td",{parentName:"tr",align:null},"reader"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-2"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt64"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unpackuintnetworkreader"},"UnpackUint(NetworkReader)"),(0,n.kt)("h5",{id:"declaration-8"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public uint UnpackUint(NetworkReader reader)\n")),(0,n.kt)("h5",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,n.kt)("td",{parentName:"tr",align:null},"reader"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-3"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt32"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"unpackushortnetworkreader"},"UnpackUshort(NetworkReader)"),(0,n.kt)("h5",{id:"declaration-9"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public ushort UnpackUshort(NetworkReader reader)\n")),(0,n.kt)("h5",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mirage.Serialization.NetworkReader"),(0,n.kt)("td",{parentName:"tr",align:null},"reader"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h5",{id:"returns-4"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"System.UInt16"),(0,n.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[6366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={id:"icassp2023_download",title:"ICASSP 2023 Clarity Challenge Download",sidebar_label:"Download data and software",sidebar_position:1.5},o=void 0,l={unversionedId:"icassp2023/icassp2023_download",id:"icassp2023/icassp2023_download",title:"ICASSP 2023 Clarity Challenge Download",description:"Software",source:"@site/docs/icassp2023/icassp2023_download.mdx",sourceDirName:"icassp2023",slug:"/icassp2023/icassp2023_download",permalink:"/docs/icassp2023/icassp2023_download",draft:!1,tags:[],version:"current",sidebarPosition:1.5,frontMatter:{id:"icassp2023_download",title:"ICASSP 2023 Clarity Challenge Download",sidebar_label:"Download data and software",sidebar_position:1.5},sidebar:"tutorialSidebar_icassp2023",previous:{title:"ICASSP 2023 Introduction",permalink:"/docs/icassp2023/icassp2023_intro"},next:{title:"Important dates",permalink:"/docs/icassp2023/icassp2023_dates"}},s={},p=[{value:"Software",id:"software",level:3},{value:"Data",id:"data",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"software"},"Software"),(0,r.kt)("p",null,"All the necessary software tools are available as a single ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/claritychallenge/clarity"},"GitHub repository"),"."),(0,r.kt)("p",null,"A new version of the repository code, v0.2.0, has been released for use with the challenge. It contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"recipe")," for running the baseline and standard evaluation  (",(0,r.kt)("inlineCode",{parentName:"p"},"recipes/icassp2023"),")."),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The data is available for ",(0,r.kt)("a",{parentName:"p",href:"https://mab.to/KjXsa3EskhQuU"},"download here"),"."),(0,r.kt)("p",null,"On the download site you will see four data packages are available,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clarity_CEC2_core.v1_1.tgz"),"  ","[",(0,r.kt)("strong",{parentName:"p"},"28 GB"),"]"," - metadata and dev set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clarity_CEC2_train.v1_1.tgz")," ","[",(0,r.kt)("strong",{parentName:"p"},"69 GB"),"]"," - scenes for training systems")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clarity_CEC2_hoairs.v1_0.tgz")," ","[",(0,r.kt)("strong",{parentName:"p"},"144 GB"),"]"," - impulse responses for generating extended training data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"clarity_CEC2_icassp2023_eval.v1_0.tgz"),"  ","[",(0,r.kt)("strong",{parentName:"p"},"6.5 GB"),"]"," - the ",(0,r.kt)("inlineCode",{parentName:"p"},"eval1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eval2")," evaluation sets (added on 2nd Feb 2023)."))),(0,r.kt)("p",null,"All participants will require the ",(0,r.kt)("strong",{parentName:"p"},"core")," data package. Participants using machine learning approaches will additionally require the ",(0,r.kt)("strong",{parentName:"p"},"train")," data package. Participants wishing to extend the training set by using our provided scene rendering tools will also require the high order ambisonic impulse responses (i.e., the ",(0,r.kt)("strong",{parentName:"p"},"hoairs")," package)."),(0,r.kt)("p",null,"To unpack the data we recommend you follow the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/claritychallenge/clarity"},"Clarity Challenge GitHub repository"),"."))}u.isMDXComponent=!0}}]);
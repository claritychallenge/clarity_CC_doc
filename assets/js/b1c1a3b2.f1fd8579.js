"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[8453],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),h=a,d=f["".concat(l,".").concat(h)]||f[h]||u[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return f}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=n(4996),s=["components"],l={id:"cec1_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:4,tags:["cec1","baseline"]},c=void 0,p={unversionedId:"cec1/cec1_baseline",id:"cec1/cec1_baseline",title:"Baseline System",description:"Figure 1 shows a simplified schematic of the baseline system. For simplicity, not all signal paths are shown. A scene generator (blue box) creates the speech in noise (SPIN) that the hearing aid model then enhances (yellow box). This enhancement is individualised for each listener, hence there is also a system to select a random listener (white ellipse) with a particular set of pure tone air-conduction thresholds or audiograms.",source:"@site/docs/cec1/cec1_baseline.mdx",sourceDirName:"cec1",slug:"/cec1/cec1_baseline",permalink:"/docs/cec1/cec1_baseline",draft:!1,tags:[{label:"cec1",permalink:"/docs/tags/cec-1"},{label:"baseline",permalink:"/docs/tags/baseline"}],version:"current",sidebarPosition:4,frontMatter:{id:"cec1_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:4,tags:["cec1","baseline"]},sidebar:"tutorialSidebar1",previous:{title:"The Scenario",permalink:"/docs/cec1/cec1_scenario"},next:{title:"CEC1 Data",permalink:"/docs/cec1/cec1_data"}},u={},f=[],h={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Figure 1 shows a simplified schematic of the baseline system. For simplicity, not all signal paths are shown. A scene generator (blue box) creates the speech in noise (SPIN) that the hearing aid model then enhances (yellow box). This enhancement is individualised for each listener, hence there is also a system to select a random listener (white ellipse) with a particular set of pure tone air-conduction thresholds or audiograms."),(0,i.kt)("p",null,"The speech in noise that has been improved by the hearing aid is then passed to the prediction stage (orange box). This includes: (i) a simulation of hearing loss and (ii) a binaural model of intelligibility that estimates the speech intelligibility."),(0,i.kt)("img",{src:(0,o.Z)("/img/tutorial/the_baseline-11-1536x561.png")}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Figure 1 Simplified overview of the baseline")),(0,i.kt)("p",null,"As stated in the rules of the first Enhancement Challenge, you are free to choose which parts of the baseline are useful to your approach, and reconfigure the system as you feel fit."),(0,i.kt)("p",null,"More details of the different parts of the baseline appear on the ",(0,i.kt)("a",{parentName:"p",href:"./cec1_software"},"software page"),", see,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./cec1_software#a-scene-generator"},"Scene Generator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./cec1_software#b-baseeline-hearing-aid-processor"},"Hearing aid model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./cec1_software#d-hearing-loss-model"},"Hearing loss model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./cec1_software#e-speech-intelligibility-model"},"Speech intelligibility model"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./cec1_download"},"Download")," baseline software and data."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[7068],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(r),u=a,g=h["".concat(c,".").concat(u)]||h[u]||m[u]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={slug:"The baseline",title:"The baseline",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["baseline","enhancement","processing"]},i=void 0,l={permalink:"/blog/The baseline",source:"@site/blog/2020-04-29-the-baseline.md",title:"The baseline",description:"An overview of the current state of the baseline we\u2019re developing for the machine learning challenges",date:"2020-04-29T00:00:00.000Z",formattedDate:"April 29, 2020",tags:[{label:"baseline",permalink:"/blog/tags/baseline"},{label:"enhancement",permalink:"/blog/tags/enhancement"},{label:"processing",permalink:"/blog/tags/processing"}],readingTime:.82,hasTruncateMarker:!1,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"The baseline",title:"The baseline",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["baseline","enhancement","processing"]},prevItem:{title:"Why use machine learning challenges for hearing aids?",permalink:"/blog/Why use machine learning challenges for hearing aids"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},h="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An overview of the current state of the baseline we\u2019re developing for the machine learning challenges"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The baseline",src:r(84942).Z,width:"1536",height:"684"})),(0,a.kt)("p",null,"We\u2019re currently developing the baseline processing that challenge entrants will need. This takes a random listener and a random audio sample of speech in noise (SPIN) and passes that through a simulated hearing aid (the Enhancement Model). This improves the speech in noise. We then have an algorithm (the Prediction Model) to estimate the Speech Intelligibility that the listener would perceive (SI score). This score can then be used to drive machine learning to improve the hearing aid."),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/I1v8_TmXkeA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A talk through the baseline model we\u2019re developing.")),(0,a.kt)("p",null,"The first machine learning challenge is to improve the enhancement model, in other words, to produce a better processing algorithm for the hearing aid. The second challenge is to improve the prediction model using perceptual data we\u2019ll provide."))}m.isMDXComponent=!0},84942:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/baseline-1536x684-b7b4b9fdbaffe5d680f9dc1e0b073d7f.png"}}]);
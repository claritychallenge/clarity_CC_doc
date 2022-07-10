"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[4911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,u=g["".concat(c,".").concat(m)]||g[m]||h[m]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={slug:"One approach to our enhancement challenge",title:"One approach to our enhancement challenge",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["DNN","enhancement","evaluation","GAN","hearing aid","knowledge distillation"]},o=void 0,l={permalink:"/blog/One approach to our enhancement challenge",source:"@site/blog/2020-07-29-one-approach-to-our-enhancement-challenge.md",title:"One approach to our enhancement challenge",description:"Improving hearing aid processing using DNNs blog. A suggested approach to overcome the non-differentiable loss function.",date:"2020-07-29T00:00:00.000Z",formattedDate:"July 29, 2020",tags:[{label:"DNN",permalink:"/blog/tags/dnn"},{label:"enhancement",permalink:"/blog/tags/enhancement"},{label:"evaluation",permalink:"/blog/tags/evaluation"},{label:"GAN",permalink:"/blog/tags/gan"},{label:"hearing aid",permalink:"/blog/tags/hearing-aid"},{label:"knowledge distillation",permalink:"/blog/tags/knowledge-distillation"}],readingTime:3.59,hasTruncateMarker:!0,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"One approach to our enhancement challenge",title:"One approach to our enhancement challenge",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["DNN","enhancement","evaluation","GAN","hearing aid","knowledge distillation"]},prevItem:{title:"Clarity Challenge pre-announcement",permalink:"/blog/Clarity Challenge pre-announcement"},nextItem:{title:"The speech-in-noise problem part two",permalink:"/blog/The speech-in-noise problem part two"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Improving hearing aid processing using DNNs blog. A suggested approach to overcome the non-differentiable loss function."),(0,a.kt)("p",null,"The aim of our Enhancement Challenge is to get people producing new algorithms for processing speech signals through hearing aids. We expect most entries to replace the classic hearing aid processing of Dynamic Range Compressors (DRCs) with ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deep_learning"},"deep neural networks (DNN)")," (although all approaches are welcome!). The first round of the challenge is going to be all about improving speech intelligibility."),(0,a.kt)("p",null,"Setting up a DNN structure and training regime for the task is not as straightforward as it might first appear. Figure 1 shows an example of a naive training regime. An audio example of Speech in Noise (SPIN) is randomly created (",(0,a.kt)("em",{parentName:"p"},"audio sample generation"),", bottom left), and a listener is randomly selected with particular hearing loss characteristics (",(0,a.kt)("em",{parentName:"p"},"random artificial listener generation"),", top left). The DNN Enhancement model (represented by the bright yellow box) then produces improved speech in noise. (Audio signals in pink are two-channel, left and right because this is for binaural hearing aids.)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"schematic",src:n(6347).Z,width:"1149",height:"446"})),(0,a.kt)("p",null,"Figure 1"),(0,a.kt)("p",null,"Next the improved speech in noise is passed to the Prediction Model in the lime green box, and this gives an estimation of the Speech Intelligibility (SI). Our baseline system will include algorithms for this. We\u2019ve already blogged about the Hearing Loss Simulation. Our current thinking is that the intelligibility model will be using a binaural form of the Short-Time Objective Intelligibility Index (STOI) ","[1]",". The dashed line going back to the enhancement model shows that the DNN will be updated based on the reciprocal of the Speech Intelligibility (SI) score. By minimising (1/SI), the enhancement model will be maximising intelligibility."))}h.isMDXComponent=!0},6347:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clarity_schematic_for_blog-09-6f015d990f75f14a4068ca7ab8295f69.png"}}]);
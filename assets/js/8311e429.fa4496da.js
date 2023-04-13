"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[8037],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return i?a.createElement(f,o(o({ref:t},c),{},{components:i})):a.createElement(f,o({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},86453:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));i(8209);const r={id:"icassp2023_additional_tools",title:"Additional Tools",sidebar_label:"Additional Tools",sidebar_position:8},o=void 0,l={unversionedId:"icassp2023/software/icassp2023_additional_tools",id:"icassp2023/software/icassp2023_additional_tools",title:"Additional Tools",description:"Hearing loss model",source:"@site/docs/icassp2023/software/icassp2023_additional_tools.mdx",sourceDirName:"icassp2023/software",slug:"/icassp2023/software/icassp2023_additional_tools",permalink:"/docs/icassp2023/software/icassp2023_additional_tools",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"icassp2023_additional_tools",title:"Additional Tools",sidebar_label:"Additional Tools",sidebar_position:8},sidebar:"tutorialSidebar_icassp2023",previous:{title:"Core Software",permalink:"/docs/icassp2023/software/icassp2023_core_software"},next:{title:"Taking Part",permalink:"/docs/category/taking-part-1"}},s={},d=[{value:"Hearing loss model",id:"hearing-loss-model",level:2},{value:"Differentiable source separation and hearing aid amplification modules",id:"differentiable-source-separation-and-hearing-aid-amplification-modules",level:2},{value:"Speech intelligibility model (MBSTOI)",id:"speech-intelligibility-model-mbstoi",level:2},{value:"References",id:"references",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"hearing-loss-model"},"Hearing loss model"),(0,n.kt)("p",null,"This is an open-source python implementation of a hearing loss model developed by Brian Moore, Michael Stone and other members of the Auditory Perception Group, University of Cambridge  ","[",(0,n.kt)("a",{parentName:"p",href:"#refs"},"1"),", ",(0,n.kt)("a",{parentName:"p",href:"#refs"},"2"),"]","."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": A stereo wav audio signal, e.g., the output of the hearing aid model and audiograms for left and right ear."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,n.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HL-output.wav"))),(0,n.kt)("h2",{id:"differentiable-source-separation-and-hearing-aid-amplification-modules"},"Differentiable source separation and hearing aid amplification modules"),(0,n.kt)("p",null,"The modules are from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TuZehai/Sheffield_Clarity_CEC1_Entry"},"Sheffield E009 system")," in CEC1. The source separation module is a multi-channel Conv-TasNet optimised with a SNR objective. The hearing aid amplification module is an FIR filter optimised with an objective, which is the combination of a differentiable approximation to the hearing loss model and a STOI loss."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": six channels of mixed signals, i.e., ",(0,n.kt)("inlineCode",{parentName:"li"},"mixed_CH1.wav"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mixed_CH2.wav"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"mixed_CH3.wav")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": a single channel enhanced signal, therefore two source separation and amplification modules for left and right ears need to be optimised for the enhanced binaural signal.")),(0,n.kt)("h2",{id:"speech-intelligibility-model-mbstoi"},"Speech intelligibility model (MBSTOI)"),(0,n.kt)("p",null,"Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI)  ","[",(0,n.kt)("a",{parentName:"p",href:"#refs"},"3"),"]",". Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Inputs"),": HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections 'turned off', specified as 'target_anechoic'), (scene metadata)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Outputs"),": predicted intelligibility score")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("a",{name:"refs"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Moore, B. C. J., Alcantara, J. I., Stone, M. and Glasberg, B. R., 1999. Use of a loudness model for hearing aid fitting: II. Hearing aids with multi-channel compression. British Journal of Audiology, 33(3), pp. 157-170."),(0,n.kt)("li",{parentName:"ol"},"Nejime, Y. and Moore, B. C., 1997. Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. Journal of the Acoustical Society of America, 102(1), pp. 603-615."),(0,n.kt)("li",{parentName:"ol"},"Andersen, A. H., de Haan, J. M., Tan, Z. H. and Jensen, J., 2018. Refinement and validation of the binaural short-time objective intelligibility measure for spatially diverse conditions. Speech Communication, 102, pp. 1-13.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[1993],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>p});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(i),m=a,p=u["".concat(s,".").concat(m)]||u[m]||h[m]||r;return i?n.createElement(p,l(l({ref:t},d),{},{components:i})):n.createElement(p,l({ref:t},d))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},63756:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const r={slug:"baseline",title:"Baseline speech intelligibility model in round one",author:"Simone Graetzer",author_title:"Clarity Team Member",author_url:"https://www.salford.ac.uk/our-staff/simone-graetzer",author_image_url:"https://avatars.githubusercontent.com/sgraetzer",tags:["audibility","intelligibility","MBSTOI","baseline","CEC1"]},l=void 0,o={permalink:"/blog/baseline",source:"@site/blog/2021-04-22-baseline-speech-intelligiblity-model.md",title:"Baseline speech intelligibility model in round one",description:"Some comments on signal alignment and level-insensitivity",date:"2021-04-22T00:00:00.000Z",formattedDate:"April 22, 2021",tags:[{label:"audibility",permalink:"/blog/tags/audibility"},{label:"intelligibility",permalink:"/blog/tags/intelligibility"},{label:"MBSTOI",permalink:"/blog/tags/mbstoi"},{label:"baseline",permalink:"/blog/tags/baseline"},{label:"CEC1",permalink:"/blog/tags/cec-1"}],readingTime:3.755,hasTruncateMarker:!0,authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"}],frontMatter:{slug:"baseline",title:"Baseline speech intelligibility model in round one",author:"Simone Graetzer",author_title:"Clarity Team Member",author_url:"https://www.salford.ac.uk/our-staff/simone-graetzer",author_image_url:"https://avatars.githubusercontent.com/sgraetzer",tags:["audibility","intelligibility","MBSTOI","baseline","CEC1"]},prevItem:{title:"CEC1 eval data released",permalink:"/blog/CEC1 eval data released"},nextItem:{title:"Latency, computation time and real-time operation",permalink:"/blog/Latency, computation time and real-time operation"}},s={authorsImageUrls:[void 0]},c=[{value:"Some comments on signal alignment and level-insensitivity",id:"some-comments-on-signal-alignment-and-level-insensitivity",level:3},{value:"Evaluation",id:"evaluation",level:2},{value:"Signal alignment in time and frequency",id:"signal-alignment-in-time-and-frequency",level:2},{value:"Level insensitivity",id:"level-insensitivity",level:2},{value:"MBSTOI",id:"mbstoi",level:2},{value:"References",id:"references",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"some-comments-on-signal-alignment-and-level-insensitivity"},"Some comments on signal alignment and level-insensitivity"),(0,a.kt)("p",null,"Our baseline binaural speech intelligibility measure in round one is the Modified Binaural Short-Time Objective Intelligibility measure, or MBSTOI. This short post outlines the importance of correcting for delays that your hearing aid processing algorithm introduces into the audio signals to allow MBSTOI to estimate the speech intelligibility accurately. It also discusses the importance of considering the audibility of signals before evaluation with MBSTOI."),(0,a.kt)("h2",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"In stage one, entries will be ranked according to the average MBSTOI score across all samples in the evaluation test set. In the second stage, entries will be evaluated by the listening panel. There will be prizes for both stages. See this ",(0,a.kt)("a",{parentName:"p",href:"https://claritychallenge.github.io/clarity_CEC1_doc/docs/cec1_rules"},"page")," for more information."),(0,a.kt)("h2",{id:"signal-alignment-in-time-and-frequency"},"Signal alignment in time and frequency"),(0,a.kt)("p",null,"If the signal processed by the hearing aid introduces a significant delay, you should correct for this delay before submitting your entry. This is necessary because MBSTOI requires alignment of the clean speech \u201creference\u201d with the processed signal in time and frequency. This needs to be done for both ear signals."),(0,a.kt)("p",null,"MBSTOI downsamples signals to 10 kHz, uses a Discrete Fourier Transform to decompose the signal into one-third octave bands, and performs envelope extraction and short-time segmentation into 386 ms regions. Each region consists of 30 frames. These approaches are motivated by what is know about which frequencies and modulation frequencies are most important for intelligibility. For each frequency band and frame (over the region of which it is the last frame), an intermediate correlation coefficient is calculated between the clean reference and processed power envelopes for each ear. These are averaged to obtain the MBSTOI index. Thus is usually between 0 and 1, and rises monotonically with measured intelligibility scores, such that higher values indicate greater speech intelligibility. Alignment is therefore required at the level of the one-third octave bands and short-time regions."),(0,a.kt)("p",null,"Our baseline corrects for broadband delay per ear due to the hearing loss model. (The delay is measured by running a kronnecker delta function through the model for each ear.) However, the baseline software will not correct for delays created by your hearing aid processing."),(0,a.kt)("p",null,"Consequently, when submitting your hearing aid output signals, you are responsible for correcting for any delays introduced by your hearing aid. Note that this must be done blindly; the clean reference signals will not be supplied for the test/evaluation set."),(0,a.kt)("h2",{id:"level-insensitivity"},"Level insensitivity"),(0,a.kt)("p",null,"MBSTOI is level-independent, i.e., MBSTOI is broadly insensitive to the level of the processed signal because it is calculated using a cross-correlation method. This could be a problem because sounds that are below the auditory thresholds of the hearing impaired listener may appear to MBSTOI to be highly intelligible."),(0,a.kt)("p",null,"To overcome this, the baseline experimental code mbstoi_beta, in conjunction with the baseline hearing loss model, can be used to approximate hearing-impaired auditory thresholds. Specifically, mbstoi_beta adds internal noise that can be used to approximate normal hearing auditory thresholds. This noise, in combination with the attenuation of signals by the hearing loss model to simulate raised auditory thresholds, makes MBSTOI level-sensitive."),(0,a.kt)("p",null,"The noise is created by filtering white noise using pure tone threshold filter coefficients with one-third octave weighting, approximating the shape of a typical auditory filter (from Moore 2012, based on Patterson\u2019s method, 1976). This noise is added to the processed signal. Note, the standard MBSTOI in the equalisation-cancellation stage adds internal noise to parameters, but this is an independent process."),(0,a.kt)("h2",{id:"mbstoi"},"MBSTOI"),(0,a.kt)("p",null,"The method was developed by Asger Heidemann Andersen, Jan Mark de Haan, Zheng-Hua Tan and Jesper Jensen (Andersen et al., 2018). It builds on the Short-Time Objective Intelligibility (STOI) metric created by Cees H. Taal, Richard C. Hendriks, Richard Heusdens, and Jesper Jensen (Taal et al., 2011). MBSTOI includes a better ear stage and an equalisation-cancellation stage. For simplicity, the latter stage is not discussed here; see Andersen et al. (2018) for details."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Andersen, A. H., de Haan, J. M., Tan, Z. H., & Jensen, J. (2018). Refinement and validation of the binaural short time objective intelligibility measure for spatially diverse conditions. ",(0,a.kt)("em",{parentName:"li"},"Speech Communication"),", 102, 1-13."),(0,a.kt)("li",{parentName:"ul"},"Moore, B. C. (2012). ",(0,a.kt)("em",{parentName:"li"},"An introduction to the psychology of hearing"),". Brill."),(0,a.kt)("li",{parentName:"ul"},"Patterson, R. D. (1976). Auditory filter shapes derived with noise stimuli. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 59(3), 640-654."),(0,a.kt)("li",{parentName:"ul"},"Taal, C. H., Hendriks, R. C., Heusdens, R., & Jensen, J. (2011). An algorithm for intelligibility prediction of time\u2013frequency weighted noisy speech. ",(0,a.kt)("em",{parentName:"li"},"IEEE Transactions on Audio, Speech, and Language Processing"),", 19(7), 2125-2136.")))}h.isMDXComponent=!0}}]);
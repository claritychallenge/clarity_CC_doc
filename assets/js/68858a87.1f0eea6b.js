(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[2417],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:m,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[w,N]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=y[m];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const _=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==w&&(T(t),N(a),null!=m&&k(m,String(a)))},S=e=>{let t=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:S,onClick:_},o,{className:(0,i.Z)("tabs__item",p,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},67886:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(38516),n(65488),n(85162);const i={id:"cpc1_software",title:"Software",sidebar_label:"Software",sidebar_position:5},o=void 0,l={unversionedId:"cpc1/cpc1_software",id:"cpc1/cpc1_software",title:"Software",description:"The following software available to download shortly:",source:"@site/docs/cpc1/cpc1_software.mdx",sourceDirName:"cpc1",slug:"/cpc1/cpc1_software",permalink:"/docs/cpc1/cpc1_software",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"cpc1_software",title:"Software",sidebar_label:"Software",sidebar_position:5}},s={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. Hearing Loss model",id:"c-hearing-loss-model",level:2},{value:"D. Speech Intelligibility model",id:"d-speech-intelligibility-model",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following software available to download shortly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scene generator"),(0,r.kt)("li",{parentName:"ul"},"Hearing aid processor baseline"),(0,r.kt)("li",{parentName:"ul"},"Hearing loss model"),(0,r.kt)("li",{parentName:"ul"},"Speech intelligibility model")),(0,r.kt)("p",null,"The code is a Python package and accompanying unix shell scripts, with the facility to process a single scene or to bulk process the complete Clarity dataset."),(0,r.kt)("h2",{id:"a-scene-generator"},"A. Scene generator"),(0,r.kt)("p",null,"The scene generator is fully open-source python code for generating hearing aid inputs for each scene"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": target and interferer signals, BRIRs, RAVEN project (rpf) files, scene description JSON files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated.")),(0,r.kt)("h2",{id:"b-baseline-hearing-aid-processor"},"B. Baseline hearing aid processor"),(0,r.kt)("p",null,"The baseline hearing aid processor is based on openMHA ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"1"),"]"," but with a Python wrapper. The python code configures openMHA with a Camfit compressive fitting ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"2"),"]"," for a specific listener\u2019s audiogram."),(0,r.kt)("p",null,"This configuration of openMHA includes multiband dynamic compression, non-adaptive differential processing and a softclip plugin. The intention was to produce a basic hearing aid without various aspects of signal processing that are common in high-end hearing aids, but tend to be implemented in proprietary forms so cannot be replicated exactly."),(0,r.kt)("p",null,"The main inputs and outputs for the processor are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": Mixed scene signals for each hearing aid channel, a listener ID drawn from scene-listener pairs identified in \u2018scenes_listeners.json\u2019 and an entry in the listener metadata json file \u2018listeners.json\u2019 for that ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": The stereo hearing aid output signal, ",(0,r.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HA-output.wav"))),(0,r.kt)("h2",{id:"c-hearing-loss-model"},"C. Hearing Loss model"),(0,r.kt)("p",null,"Open-source python implementation of a hearing loss model developed by Brian Moore, Michael Stone and other members of the Auditory Perception Group, University of Cambridge (e.g., ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"3"),"]",")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": A stereo wav audio signal, e.g., the output of the baseline hearing aid processor, and a set of audiograms (both L and R ears)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),":  The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,r.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HL-output.wav"))),(0,r.kt)("h2",{id:"d-speech-intelligibility-model"},"D. Speech Intelligibility model"),(0,r.kt)("p",null,"Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI; ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"4"),"]","). This is an experimental baseline tool that is level-independent. Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),":  HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), (scene metadata)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": predicted intelligibility score")),(0,r.kt)("a",{name:"refs"}),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kayser, H., Herzke, T., Maanen, P., Pavlovic, C. and Hohmann, V., 2019. Open Master Hearing Aid (openMHA): An integrated platform for hearing aid research. Journal of the Acoustical Society of America, 146(4), pp. 2879-2879."),(0,r.kt)("li",{parentName:"ol"},"Moore, B. C. J., Alcantara, J. I., Stone, M. and Glasberg, B. R., 1999. Use of a loudness model for hearing aid fitting: II. Hearing aids with multi-channel compression. British Journal of Audiology, 33(3), pp. 157-170."),(0,r.kt)("li",{parentName:"ol"},"Nejime, Y. and Moore, B. C., 1997. Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. Journal of the Acoustical Society of America, 102(1), pp. 603-615."),(0,r.kt)("li",{parentName:"ol"},"Andersen, A. H., de Haan, J. M., Tan, Z. H. and Jensen, J., 2018. Refinement and validation of the binaural short-time objective intelligibility measure for spatially diverse conditions. Speech Communication, 102, pp. 1-13.")))}p.isMDXComponent=!0},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);
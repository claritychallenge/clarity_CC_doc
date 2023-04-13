"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[2417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},67886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(8209),n(74866),n(85162);const i={id:"cpc1_software",title:"Software",sidebar_label:"Software",sidebar_position:5},o=void 0,l={unversionedId:"cpc1/cpc1_software",id:"cpc1/cpc1_software",title:"Software",description:"The following software available to download shortly:",source:"@site/docs/cpc1/cpc1_software.mdx",sourceDirName:"cpc1",slug:"/cpc1/cpc1_software",permalink:"/docs/cpc1/cpc1_software",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"cpc1_software",title:"Software",sidebar_label:"Software",sidebar_position:5},sidebar:"tutorialSidebar_cpc1",previous:{title:"Data",permalink:"/docs/cpc1/cpc1_data"},next:{title:"Rules",permalink:"/docs/cpc1/cpc1_rules"}},s={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. Hearing Loss model",id:"c-hearing-loss-model",level:2},{value:"D. Speech Intelligibility model",id:"d-speech-intelligibility-model",level:2},{value:"References",id:"references",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following software available to download shortly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scene generator"),(0,r.kt)("li",{parentName:"ul"},"Hearing aid processor baseline"),(0,r.kt)("li",{parentName:"ul"},"Hearing loss model"),(0,r.kt)("li",{parentName:"ul"},"Speech intelligibility model")),(0,r.kt)("p",null,"The code is a Python package and accompanying unix shell scripts, with the facility to process a single scene or to bulk process the complete Clarity dataset."),(0,r.kt)("h2",{id:"a-scene-generator"},"A. Scene generator"),(0,r.kt)("p",null,"The scene generator is fully open-source python code for generating hearing aid inputs for each scene"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": target and interferer signals, BRIRs, RAVEN project (rpf) files, scene description JSON files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated.")),(0,r.kt)("h2",{id:"b-baseline-hearing-aid-processor"},"B. Baseline hearing aid processor"),(0,r.kt)("p",null,"The baseline hearing aid processor is based on openMHA ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"1"),"]"," but with a Python wrapper. The python code configures openMHA with a Camfit compressive fitting ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"2"),"]"," for a specific listener\u2019s audiogram."),(0,r.kt)("p",null,"This configuration of openMHA includes multiband dynamic compression, non-adaptive differential processing and a softclip plugin. The intention was to produce a basic hearing aid without various aspects of signal processing that are common in high-end hearing aids, but tend to be implemented in proprietary forms so cannot be replicated exactly."),(0,r.kt)("p",null,"The main inputs and outputs for the processor are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": Mixed scene signals for each hearing aid channel, a listener ID drawn from scene-listener pairs identified in \u2018scenes_listeners.json\u2019 and an entry in the listener metadata json file \u2018listeners.json\u2019 for that ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": The stereo hearing aid output signal, ",(0,r.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HA-output.wav"))),(0,r.kt)("h2",{id:"c-hearing-loss-model"},"C. Hearing Loss model"),(0,r.kt)("p",null,"Open-source python implementation of a hearing loss model developed by Brian Moore, Michael Stone and other members of the Auditory Perception Group, University of Cambridge (e.g., ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"3"),"]",")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),": A stereo wav audio signal, e.g., the output of the baseline hearing aid processor, and a set of audiograms (both L and R ears)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),":  The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,r.kt)("inlineCode",{parentName:"li"},"<scene>_<listener>_HL-output.wav"))),(0,r.kt)("h2",{id:"d-speech-intelligibility-model"},"D. Speech Intelligibility model"),(0,r.kt)("p",null,"Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI; ","[",(0,r.kt)("a",{parentName:"p",href:"#refs"},"4"),"]","). This is an experimental baseline tool that is level-independent. Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inputs"),":  HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), (scene metadata)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Outputs"),": predicted intelligibility score")),(0,r.kt)("a",{name:"refs"}),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kayser, H., Herzke, T., Maanen, P., Pavlovic, C. and Hohmann, V., 2019. Open Master Hearing Aid (openMHA): An integrated platform for hearing aid research. Journal of the Acoustical Society of America, 146(4), pp. 2879-2879."),(0,r.kt)("li",{parentName:"ol"},"Moore, B. C. J., Alcantara, J. I., Stone, M. and Glasberg, B. R., 1999. Use of a loudness model for hearing aid fitting: II. Hearing aids with multi-channel compression. British Journal of Audiology, 33(3), pp. 157-170."),(0,r.kt)("li",{parentName:"ol"},"Nejime, Y. and Moore, B. C., 1997. Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. Journal of the Acoustical Society of America, 102(1), pp. 603-615."),(0,r.kt)("li",{parentName:"ol"},"Andersen, A. H., de Haan, J. M., Tan, Z. H. and Jensen, J., 2018. Refinement and validation of the binaural short-time objective intelligibility measure for spatially diverse conditions. Speech Communication, 102, pp. 1-13.")))}d.isMDXComponent=!0}}]);
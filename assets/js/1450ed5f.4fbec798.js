"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[4181],{62004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"cpc1/software/cpc1_software","title":"Core Software","description":"The following software available to download shortly:","source":"@site/docs/cpc1/software/cpc1_software.mdx","sourceDirName":"cpc1/software","slug":"/cpc1/software/cpc1_software","permalink":"/docs/cpc1/software/cpc1_software","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"cpc1_software","title":"Core Software","sidebar_label":"Core Software","sidebar_position":5},"sidebar":"tutorialSidebar_cpc1","previous":{"title":"Baseline System","permalink":"/docs/cpc1/software/cpc1_baseline"},"next":{"title":"Taking Part","permalink":"/docs/category/taking-part-3"}}');var i=t(74848),a=t(28453);t(11470),t(19365);const s={id:"cpc1_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:5},o=void 0,l={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. Hearing Loss model",id:"c-hearing-loss-model",level:2},{value:"D. Speech Intelligibility model",id:"d-speech-intelligibility-model",level:2},{value:"References",id:"references",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The following software available to download shortly:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Scene generator"}),"\n",(0,i.jsx)(n.li,{children:"Hearing aid processor baseline"}),"\n",(0,i.jsx)(n.li,{children:"Hearing loss model"}),"\n",(0,i.jsx)(n.li,{children:"Speech intelligibility model"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The code is a Python package and accompanying unix shell scripts, with the facility to process a single scene or to bulk process the complete Clarity dataset."}),"\n",(0,i.jsx)(n.h2,{id:"a-scene-generator",children:"A. Scene generator"}),"\n",(0,i.jsx)(n.p,{children:"The scene generator is fully open-source python code for generating hearing aid inputs for each scene"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inputs"}),": target and interferer signals, BRIRs, RAVEN project (rpf) files, scene description JSON files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Outputs"}),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"b-baseline-hearing-aid-processor",children:"B. Baseline hearing aid processor"}),"\n",(0,i.jsxs)(n.p,{children:["The baseline hearing aid processor is based on openMHA [",(0,i.jsx)(n.a,{href:"#refs",children:"1"}),"] but with a Python wrapper. The python code configures openMHA with a Camfit compressive fitting [",(0,i.jsx)(n.a,{href:"#refs",children:"2"}),"] for a specific listener\u2019s audiogram."]}),"\n",(0,i.jsx)(n.p,{children:"This configuration of openMHA includes multiband dynamic compression, non-adaptive differential processing and a softclip plugin. The intention was to produce a basic hearing aid without various aspects of signal processing that are common in high-end hearing aids, but tend to be implemented in proprietary forms so cannot be replicated exactly."}),"\n",(0,i.jsx)(n.p,{children:"The main inputs and outputs for the processor are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inputs"}),": Mixed scene signals for each hearing aid channel, a listener ID drawn from scene-listener pairs identified in \u2018scenes_listeners.json\u2019 and an entry in the listener metadata json file \u2018listeners.json\u2019 for that ID"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Outputs"}),": The stereo hearing aid output signal, ",(0,i.jsx)(n.code,{children:"<scene>_<listener>_HA-output.wav"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"c-hearing-loss-model",children:"C. Hearing Loss model"}),"\n",(0,i.jsxs)(n.p,{children:["Open-source python implementation of a hearing loss model developed by Brian Moore, Michael Stone and other members of the Auditory Perception Group, University of Cambridge (e.g., [",(0,i.jsx)(n.a,{href:"#refs",children:"3"}),"])."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inputs"}),": A stereo wav audio signal, e.g., the output of the baseline hearing aid processor, and a set of audiograms (both L and R ears)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Outputs"}),":  The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,i.jsx)(n.code,{children:"<scene>_<listener>_HL-output.wav"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"d-speech-intelligibility-model",children:"D. Speech Intelligibility model"}),"\n",(0,i.jsxs)(n.p,{children:["Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI; [",(0,i.jsx)(n.a,{href:"#refs",children:"4"}),"]). This is an experimental baseline tool that is level-independent. Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inputs"}),":  HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), (scene metadata)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Outputs"}),": predicted intelligibility score"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"refs"}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Kayser, H., Herzke, T., Maanen, P., Pavlovic, C. and Hohmann, V., 2019. Open Master Hearing Aid (openMHA): An integrated platform for hearing aid research. Journal of the Acoustical Society of America, 146(4), pp. 2879-2879."}),"\n",(0,i.jsx)(n.li,{children:"Moore, B. C. J., Alcantara, J. I., Stone, M. and Glasberg, B. R., 1999. Use of a loudness model for hearing aid fitting: II. Hearing aids with multi-channel compression. British Journal of Audiology, 33(3), pp. 157-170."}),"\n",(0,i.jsx)(n.li,{children:"Nejime, Y. and Moore, B. C., 1997. Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. Journal of the Acoustical Society of America, 102(1), pp. 603-615."}),"\n",(0,i.jsx)(n.li,{children:"Andersen, A. H., de Haan, J. M., Tan, Z. H. and Jensen, J., 2018. Refinement and validation of the binaural short-time objective intelligibility measure for spatially diverse conditions. Speech Communication, 102, pp. 1-13."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),i=t(34164),a=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),b=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
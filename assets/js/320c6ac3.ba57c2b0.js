"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[1302],{47351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),a=t(28453);t(11470),t(19365);const i={id:"cec1_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:6},s=void 0,o={id:"cec1/software/cec1_software",title:"Core Software",description:"The following software is available to download:",source:"@site/docs/cec1/software/cec1_software.mdx",sourceDirName:"cec1/software",slug:"/cec1/software/cec1_software",permalink:"/docs/cec1/software/cec1_software",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cec1_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:6},sidebar:"tutorialSidebar_cec1",previous:{title:"Baseline System",permalink:"/docs/cec1/software/cec1_baseline"},next:{title:"Taking Part",permalink:"/docs/category/taking-part-1"}},l={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. Hearing Loss model",id:"c-hearing-loss-model",level:2},{value:"D. Speech Intelligibility model",id:"d-speech-intelligibility-model",level:2}];function u(e){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The following software is available to download:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Scene generator"}),"\n",(0,r.jsx)(n.li,{children:"Hearing aid processor baseline"}),"\n",(0,r.jsx)(n.li,{children:"Hearing loss model"}),"\n",(0,r.jsx)(n.li,{children:"Speech intelligibility model"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The code is a Python package and accompanying unix shell scripts, with the facility to process a single scene or to bulk process the complete Clarity dataset."}),"\n",(0,r.jsx)(n.h2,{id:"a-scene-generator",children:"A. Scene generator"}),"\n",(0,r.jsx)(n.p,{children:"Fully open-source python code for generating hearing aid inputs for each scene"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inputs"}),": target and interferer signals, BRIRs, RAVEN project (rpf) files, scene description JSON files"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Outputs"}),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"b-baseline-hearing-aid-processor",children:"B. Baseline hearing aid processor"}),"\n",(0,r.jsx)(n.p,{children:"The baseline hearing aid processor is based on openMHA. The python code configures openMHA with a Camfit compressive fitting for a specific listener\u2019s audiogram. This includes a python implementation of the Camfit compressive prescription and python code for driving openMHA."}),"\n",(0,r.jsx)(n.p,{children:"This configuration of openMHA includes multiband dynamic compression and non-adaptive differential processing. The intention was to produce a basic hearing aid without various aspects of signal processing that are common in high-end hearing aids, but tend to be implemented in proprietary forms so cannot be replicated exactly."}),"\n",(0,r.jsx)(n.p,{children:"The main inputs and outputs for the processor are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inputs"}),": Mixed scene signals for each hearing aid channel, a listener ID drawn from scene-listener pairs identified in \u2018scenes_listeners.json\u2019 and an entry in the listener metadata json file \u2018listeners.json\u2019 for that ID"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Outputs"}),": The stereo hearing aid output signal, ",(0,r.jsx)(n.code,{children:"<scene>_<listener>_HA-output.wav"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"c-hearing-loss-model",children:"C. Hearing Loss model"}),"\n",(0,r.jsx)(n.p,{children:"Open-source python implementation of the Cambridge Auditory Group Moore/Stone/Baer/Glasberg hearing loss model."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inputs"}),": A stereo wav audio signal, e.g., the output of the baseline hearing aid processor, and a set of audiograms (both L and R ears)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Outputs"}),":  The signal after simulating the hearing loss as specified by the set of audiograms (stereo wav file), ",(0,r.jsx)(n.code,{children:"<scene>_<listener>_HL-output.wav"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"d-speech-intelligibility-model",children:"D. Speech Intelligibility model"}),"\n",(0,r.jsx)(n.p,{children:"Python implementation of a binaural intelligibility model, Modified Binaural Short-Time Objective Intelligibility (MBSTOI). This is an experimental baseline tool that will be used in the stage 1 evaluation of entrants (see Rules). Note that MBSTOI requires signal time-alignment (and alignment within one-third octave bands)."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inputs"}),":  HL-model output signals, audiogram, reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), (scene metadata)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Outputs"}),": predicted intelligibility score"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(18215),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=f({queryString:t,groupId:a}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
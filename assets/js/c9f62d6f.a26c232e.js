"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[3033],{86747:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(85893),s=n(11151);const r={id:"cec2_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:7},a=void 0,o={id:"cec2/software/cec2_core_software",title:"Core Software",description:"The code is provided as a GitHub repository containing individual Python tools and a complete baseline system. Tools will allow the processing of individual scenes or the bulk processing of the complete Clarity dataset.",source:"@site/docs/cec2/software/cec2_core_software.mdx",sourceDirName:"cec2/software",slug:"/cec2/software/cec2_core_software",permalink:"/docs/cec2/software/cec2_core_software",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"cec2_core_software",title:"Core Software",sidebar_label:"Core Software",sidebar_position:7},sidebar:"tutorialSidebar_cec2",previous:{title:"Baseline System",permalink:"/docs/cec2/software/cec2_baseline"},next:{title:"Additional Tools",permalink:"/docs/cec2/software/cec2_additional_tools"}},l={},c=[{value:"A. Scene generator",id:"a-scene-generator",level:2},{value:"B. Baseline hearing aid processor",id:"b-baseline-hearing-aid-processor",level:2},{value:"C. HASPI Speech Intelligibility model",id:"c-haspi-speech-intelligibility-model",level:2},{value:"References",id:"references",level:2}];function d(e){const i={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The code is provided as a ",(0,t.jsx)(i.a,{href:"https://github.com/claritychallenge/clarity",children:"GitHub repository"})," containing individual Python tools and a complete baseline system. Tools will allow the processing of individual scenes or the bulk processing of the complete Clarity dataset.\nThe key elements of the baseline system are the:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Scene generator."}),"\n",(0,t.jsx)(i.li,{children:"Hearing aid processor baseline."}),"\n",(0,t.jsx)(i.li,{children:"HASPI speech intelligibility model."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./cec2_additional_tools",children:"Additional tools"})," are available to use as you see fit. These include a hearing loss model, differentiable source separation and hearing aid amplification modules and an alternative intelligibility model."]}),"\n",(0,t.jsx)(i.h2,{id:"a-scene-generator",children:"A. Scene generator"}),"\n",(0,t.jsx)(i.p,{children:"Fully open-source python code for generating hearing aid inputs for each scene"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Inputs"}),": target and interferer signals, HOA-IRs, RAVEN project (rpf) files, scene description JSON files"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Outputs"}),": Mixed target+interferer signals for each hearing aid channel, direct path (simulating a measurement close to the eardrum). Reverberated pre-mixed signals can also be optionally generated."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"b-baseline-hearing-aid-processor",children:"B. Baseline hearing aid processor"}),"\n",(0,t.jsxs)(i.p,{children:["The baseline hearing aid consists of a NAL-R  fitting amplification stage [",(0,t.jsx)(i.a,{href:"#refs",children:"1"}),"] followed by a simple automatic gain compressor. It produces output signals in 16-bit wav format ready for HASPI or listening test evaluation."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Inputs"}),": Inputs for each hearing aid channel and audiograms to characterise the listeners."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Outputs"}),": Stereo hearing aid (HA) outputs signals."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"c-haspi-speech-intelligibility-model",children:"C. HASPI Speech Intelligibility model"}),"\n",(0,t.jsx)(i.p,{children:"Python implementation of the Hearing Aid Speech Perception Index (HASPI) model which is used for objective intelligibility estimation. This will be used in the stage 1 evaluation of entrants (see Rules)."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Inputs"}),": reference target signal (i.e., the premixed target signal convolved with the BRIR with the reflections \u201cturned off\u201d, specified as \u2018target_anechoic\u2019), HA output signals, audiogram, level reference (level in dB SPL which corresponds to 0 dB FS)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Outputs"}),": predicted intelligibility score\nIt is important to remember that both reference target and HA output signals have to be calibrated to the same dB SPL level before calculating HASPI."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,t.jsx)("a",{name:"refs"}),"\n",(0,t.jsx)(i.p,{children:'[1] Byrne, Denis, and Harvey Dillon. "The National Acoustic Laboratories\'(NAL) new procedure for selecting the gain and frequency response of a hearing aid." Ear and hearing 7.4 (1986): 257-265.'})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
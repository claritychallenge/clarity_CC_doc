"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[4693],{98584:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"icassp2023/software/icassp2023_baseline","title":"Baseline System","description":"Challenge entrants are supplied with a fully functioning baseline system. Figure 1 shows a simplified schematic:","source":"@site/docs/icassp2023/software/icassp2023_baseline.mdx","sourceDirName":"icassp2023/software","slug":"/icassp2023/software/icassp2023_baseline","permalink":"/docs/icassp2023/software/icassp2023_baseline","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"icassp2023_baseline","title":"Baseline System","sidebar_label":"Baseline System","sidebar_position":3},"sidebar":"tutorialSidebar_icassp2023","previous":{"title":"Software","permalink":"/docs/category/software-3"},"next":{"title":"Core Software","permalink":"/docs/icassp2023/software/icassp2023_core_software"}}');var a=n(74848),t=n(28453),r=n(86025);const l={id:"icassp2023_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:3},c=void 0,o={},h=[{value:"Baseline performance",id:"baseline-performance",level:2},{value:"References",id:"references",level:2}];function d(e){const i={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Challenge entrants are supplied with a fully functioning baseline system. ",(0,a.jsx)(i.a,{href:"#fig1",children:"Figure 1"})," shows a simplified schematic:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"A scene generator (blue box) creates speech in noise signals for a set of six hearing aid microphone inputs."}),"\n",(0,a.jsx)(i.li,{children:"The enhancement stage (pink box) takes multichannel hearing aid inputs and attempts to enhance the target speech source, outputting a left and right channel."}),"\n",(0,a.jsx)(i.li,{children:"The hearing aid amplification stage (yellow box) applies listener-specific amplification and compression following a standard hearing aid fitting."}),"\n",(0,a.jsx)(i.li,{children:"Listener characteristics. i.e. an audiogram (green oval) are supplied to both the enhancement and amplification stage."}),"\n",(0,a.jsxs)(i.li,{children:["The hearing aid outputs are then evaluated by computing the mean of the  Hearing-Aid Speech Perception Index (HASPI) [",(0,a.jsx)(i.a,{href:"#refs",children:"1"}),"] and Hearing-Aid Speech Quality Index (HASQI) [",(0,a.jsx)(i.a,{href:"#refs",children:"2"}),"] (orange boxes) which are estimates of intelligibility and quality respectively . Note, HASPI and HASQI are 'intrusive' measures which require a clean speech reference as indicated in the figure."]}),"\n"]}),"\n",(0,a.jsxs)("figure",{id:"fig1",children:[(0,a.jsx)("img",{width:"800",src:(0,r.Ay)("/img/ICASSP2023/pipeline.png")}),(0,a.jsx)("figcaption",{children:"Figure 1, The baseline, for simplicity, not all signal paths are shown."})]}),"\n",(0,a.jsx)(i.p,{children:"Your challenge is to improve what happens in the pink enhancement box. The rest of the baseline is fixed and should not be changed."}),"\n",(0,a.jsxs)(i.p,{children:["More details of the different parts of the baseline appear on the ",(0,a.jsx)(i.a,{href:"./icassp2023_core_software",children:"core software page"}),", see,"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"./icassp2023_core_software#a-scene-generator",children:"Scene Generator"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"./icassp2023_core_software#b-baseeline-hearing-aid-processor",children:"Hearing aid model"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"./icassp2023_core_software#e-speech-intelligibility-model",children:"Speech intelligibility model"})}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["The code for the baseline system, and all supporting Clarity code, is available on ",(0,a.jsx)(i.a,{href:"https://github.com/claritychallenge/clarity",children:"GitHub"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"baseline-performance",children:"Baseline performance"}),"\n",(0,a.jsx)(i.p,{children:"Baseline performance using amplification with no enhancement will appear shortly."}),"\n","\n",(0,a.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,a.jsx)("a",{name:"refs"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Kates, J.M. and Arehart, K.H., 2021. The hearing-aid speech perception index (HASPI) version 2. Speech Communication, 131, pp.35-46."}),"\n",(0,a.jsx)(i.li,{children:'Kates, J.M. and Arehart, K.H., 2014. "The hearing-aid speech quality index (HASQI) version 2". Journal of the Audio Engineering Society. 62 (3): 99\u2013117.'}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(96540);const a={},t=s.createContext(a);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
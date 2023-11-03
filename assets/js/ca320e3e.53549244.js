"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[4747],{43053:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=n(85893),a=n(11151),t=n(44996);const r={id:"icassp2023_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:3},l=void 0,c={id:"icassp2023/software/icassp2023_baseline",title:"Baseline System",description:"Challenge entrants are supplied with a fully functioning baseline system. Figure 1 shows a simplified schematic:",source:"@site/docs/icassp2023/software/icassp2023_baseline.mdx",sourceDirName:"icassp2023/software",slug:"/icassp2023/software/icassp2023_baseline",permalink:"/docs/icassp2023/software/icassp2023_baseline",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"icassp2023_baseline",title:"Baseline System",sidebar_label:"Baseline System",sidebar_position:3},sidebar:"tutorialSidebar_icassp2023",previous:{title:"Software",permalink:"/docs/category/software-3"},next:{title:"Core Software",permalink:"/docs/icassp2023/software/icassp2023_core_software"}},o={},h=[{value:"Baseline performance",id:"baseline-performance",level:2},{value:"References",id:"references",level:2}];function d(e){const i={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Challenge entrants are supplied with a fully functioning baseline system. ",(0,s.jsx)(i.a,{href:"#fig1",children:"Figure 1"})," shows a simplified schematic:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"A scene generator (blue box) creates speech in noise signals for a set of six hearing aid microphone inputs."}),"\n",(0,s.jsx)(i.li,{children:"The enhancement stage (pink box) takes multichannel hearing aid inputs and attempts to enhance the target speech source, outputting a left and right channel."}),"\n",(0,s.jsx)(i.li,{children:"The hearing aid amplification stage (yellow box) applies listener-specific amplification and compression following a standard hearing aid fitting."}),"\n",(0,s.jsx)(i.li,{children:"Listener characteristics. i.e. an audiogram (green oval) are supplied to both the enhancement and amplification stage."}),"\n",(0,s.jsxs)(i.li,{children:["The hearing aid outputs are then evaluated by computing the mean of the  Hearing-Aid Speech Perception Index (HASPI) [",(0,s.jsx)(i.a,{href:"#refs",children:"1"}),"] and Hearing-Aid Speech Quality Index (HASQI) [",(0,s.jsx)(i.a,{href:"#refs",children:"2"}),"] (orange boxes) which are estimates of intelligibility and quality respectively . Note, HASPI and HASQI are 'intrusive' measures which require a clean speech reference as indicated in the figure."]}),"\n"]}),"\n",(0,s.jsxs)("figure",{id:"fig1",children:[(0,s.jsx)("img",{width:"800",src:(0,t.Z)("/img/ICASSP2023/pipeline.png")}),(0,s.jsx)("figcaption",{children:"Figure 1, The baseline, for simplicity, not all signal paths are shown."})]}),"\n",(0,s.jsx)(i.p,{children:"Your challenge is to improve what happens in the pink enhancement box. The rest of the baseline is fixed and should not be changed."}),"\n",(0,s.jsxs)(i.p,{children:["More details of the different parts of the baseline appear on the ",(0,s.jsx)(i.a,{href:"./icassp2023_core_software",children:"core software page"}),", see,"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"./icassp2023_core_software#a-scene-generator",children:"Scene Generator"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"./icassp2023_core_software#b-baseeline-hearing-aid-processor",children:"Hearing aid model"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"./icassp2023_core_software#e-speech-intelligibility-model",children:"Speech intelligibility model"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The code for the baseline system, and all supporting Clarity code, is available on ",(0,s.jsx)(i.a,{href:"https://github.com/claritychallenge/clarity",children:"GitHub"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"baseline-performance",children:"Baseline performance"}),"\n",(0,s.jsx)(i.p,{children:"Baseline performance using amplification with no enhancement will appear shortly."}),"\n","\n",(0,s.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)("a",{name:"refs"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Kates, J.M. and Arehart, K.H., 2021. The hearing-aid speech perception index (HASPI) version 2. Speech Communication, 131, pp.35-46."}),"\n",(0,s.jsx)(i.li,{children:'Kates, J.M. and Arehart, K.H., 2014. "The hearing-aid speech quality index (HASQI) version 2". Journal of the Audio Engineering Society. 62 (3): 99\u2013117.'}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>r});var s=n(67294);const a={},t=s.createContext(a);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);
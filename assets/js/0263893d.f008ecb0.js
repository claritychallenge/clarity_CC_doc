"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[4468],{98693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(74848),i=n(28453);const s={id:"cec3_task2_rules",title:"Task 2 Rules",sidebar_label:"Rules",sidebar_position:30},o=void 0,r={id:"cec3/task_2/cec3_task2_rules",title:"Task 2 Rules",description:"What information can I use?",source:"@site/docs/cec3/task_2/task2_rules.mdx",sourceDirName:"cec3/task_2",slug:"/cec3/task_2/cec3_task2_rules",permalink:"/docs/cec3/task_2/cec3_task2_rules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"cec3_task2_rules",title:"Task 2 Rules",sidebar_label:"Rules",sidebar_position:30},sidebar:"tutorialSidebar_cec3",previous:{title:"Data",permalink:"/docs/cec3/task_2/cec3_task2_data"},next:{title:"Baseline",permalink:"/docs/cec3/task_2/cec3_task2_baseline"}},l={},c=[{value:"What information can I use?",id:"what-information-can-i-use",level:2},{value:"Training and development",id:"training-and-development",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Computational restrictions",id:"computational-restrictions",level:2},{value:"Objective vs Subjective evaluation",id:"objective-vs-subjective-evaluation",level:2}];function u(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-information-can-i-use",children:"What information can I use?"}),"\n",(0,a.jsx)(t.h3,{id:"training-and-development",children:"Training and development"}),"\n",(0,a.jsxs)(t.p,{children:["Teams can expand the training data provided using augmentation or by supplementing it with data from other publicly available sources, excluding datasets that may appear in the evaluation (this prohibits training on any previous Clarity challenge evaluation data, speech from ",(0,a.jsx)(t.a,{href:"https://www.openslr.org/83/",children:"Crowdsourced high-quality UK and Ireland English Dialect speech data set"}),", or music from the ",(0,a.jsx)(t.a,{href:"https://mtg.github.io/mtg-jamendo-dataset/",children:"MTG-Jamendo Dataset"}),"). Any additional data used must be made clear in the technical report. Teams can also use publicly available pre-trained models."]}),"\n",(0,a.jsx)(t.p,{children:"Any of the CEC3 metadata can be used during training and development, but during evaluation, the system will only have access to the hearing aid input signals and the listener audiograms."}),"\n",(0,a.jsx)(t.p,{children:"Teams that augment or extend the training dataset must also submit a version of the system using only the standard dataset. etc"}),"\n",(0,a.jsx)(t.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,a.jsx)(t.p,{children:"The only data that can be used during evaluation are"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The 6-channels hearing aid input signals"}),"\n",(0,a.jsx)(t.li,{children:"The listener characterisation (pure tone air-conduction audiograms and/or digit triple test results)."}),"\n",(0,a.jsx)(t.li,{children:"The provided clean audio examples for the target talker (these will not be the same as any of the target utterances.)"}),"\n",(0,a.jsx)(t.li,{children:"The head-rotation signal (but if used, a version of the system that does not use it should also be prepared for comparison.)"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"computational-restrictions",children:"Computational restrictions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Systems must be causal; the output from the hearing aid at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms)."}),"\n",(0,a.jsx)(t.li,{children:"There is no limit on computational requirements but memory and processing requirements should be clearly stated in the technical reports."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Please see ",(0,a.jsx)(t.a,{href:"https://claritychallenge.org/blog/Latency,%20computation%20time%20and%20real-time%20operation",children:"this blog post"})," for further explanation of these last two rules about latency and computation time."]}),"\n",(0,a.jsx)(t.h2,{id:"objective-vs-subjective-evaluation",children:"Objective vs Subjective evaluation"}),"\n",(0,a.jsx)(t.p,{children:"You can submit two versions of your entry, where one is optimised for HASPI and the other for listening tests if you wish. In this case:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Both systems must be submitted for HASPI evaluation."}),"\n",(0,a.jsx)(t.li,{children:"Both versions must be described in the same technical report and differences between how they have been tuned must be made clear.\nto appear."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
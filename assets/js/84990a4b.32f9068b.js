"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[2542],{33634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(74848),s=t(28453);const a={id:"cec1_rules",title:"Rules",sidebar_label:"Rules",sidebar_position:7},o=void 0,l={id:"cec1/taking_part/cec1_rules",title:"Rules",description:"Teams",source:"@site/docs/cec1/taking_part/cec1_rules.mdx",sourceDirName:"cec1/taking_part",slug:"/cec1/taking_part/cec1_rules",permalink:"/docs/cec1/taking_part/cec1_rules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"cec1_rules",title:"Rules",sidebar_label:"Rules",sidebar_position:7},sidebar:"tutorialSidebar_cec1",previous:{title:"Taking Part",permalink:"/docs/category/taking-part-1"},next:{title:"Listening Tests",permalink:"/docs/cec1/taking_part/cec1_listening_tests"}},r={},c=[{value:"Teams",id:"teams",level:2},{value:"Transparency",id:"transparency",level:2},{value:"Intellectual property",id:"intellectual-property",level:2},{value:"What information can I use?",id:"what-information-can-i-use",level:2},{value:"Training and development",id:"training-and-development",level:3},{value:"Evaluation",id:"evaluation",level:3},{value:"Computational restrictions",id:"computational-restrictions",level:2},{value:"Submitting multiple entries",id:"submitting-multiple-entries",level:2},{value:"Evaluation of systems",id:"evaluation-of-systems",level:2},{value:"Stage 1: Objective evaluation",id:"stage-1-objective-evaluation",level:3},{value:"Stage 2: Listening test evaluation",id:"stage-2-listening-test-evaluation",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"teams",children:"Teams"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Teams must have pre-registered and nominated a contact person."}),"\n",(0,i.jsx)(n.li,{children:"Teams can be from one or more institutions."}),"\n",(0,i.jsx)(n.li,{children:"The organisers may enter the challenge themselves but will not be eligible to win the cash prizes."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"transparency",children:"Transparency"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used."}),"\n",(0,i.jsx)(n.li,{children:"We will publish all technical documents (anonymous or otherwise)."}),"\n",(0,i.jsx)(n.li,{children:"Teams are encouraged \u2013 but not required \u2013 to provide us with access to the system/model and to make their code open source."}),"\n",(0,i.jsx)(n.li,{children:"Anonymous entries are allowed but will not be eligible for cash prizes."}),"\n",(0,i.jsx)(n.li,{children:"All teams will be referred to using anonymous codenames in rank ordering."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"intellectual-property",children:"Intellectual property"}),"\n",(0,i.jsx)(n.p,{children:"The following terms apply to participation in this machine learning challenge (\u201cChallenge\u201d). Entrants may create original solutions, prototypes, datasets, scripts, or other content, materials, discoveries or inventions (a \u201cSubmission\u201d). The Challenge is organised by the Challenge Organiser."}),"\n",(0,i.jsx)(n.p,{children:"Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions."}),"\n",(0,i.jsx)(n.p,{children:"As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission."}),"\n",(0,i.jsx)(n.p,{children:"Entrants provide Submissions on an \u201cAS IS\u201d BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE."}),"\n",(0,i.jsx)(n.h2,{id:"what-information-can-i-use",children:"What information can I use?"}),"\n",(0,i.jsx)(n.h3,{id:"training-and-development",children:"Training and development"}),"\n",(0,i.jsx)(n.p,{children:"There is no limit on the amount of training data that can be generated using our tools.\nTeams can also use their own data for training or expand the training data through simple automated modifications. However, teams that do this must make a second submission using only the official audio files and signal generation tool.\nAny audio or metadata can be used during training and development, but during evaluation the proposed simulated hearing aid or Enhancement Processor will not have access to all of the data (see next section)."}),"\n",(0,i.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,i.jsx)(n.p,{children:"The only data that can be used by the Enhancement Processor during evaluation are"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The audio input signals (the sum of the target and interferer for each hearing aid microphone), and"}),"\n",(0,i.jsx)(n.li,{children:"The listener characterisation (pure tone air-conduction audiograms)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"computational-restrictions",children:"Computational restrictions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Teams may choose to use all or some of the provided baseline models."}),"\n",(0,i.jsx)(n.li,{children:"Systems must be causal; the output at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5 ms)."}),"\n",(0,i.jsx)(n.li,{children:"There is no limit on computational cost."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Please see ",(0,i.jsx)(n.a,{href:"http://claritychallenge.org/latency-computation-time-and-real-time-operation",children:"this blog post"})," for further explanation of these last two rules about latency and computation time."]}),"\n",(0,i.jsx)(n.h2,{id:"submitting-multiple-entries",children:"Submitting multiple entries"}),"\n",(0,i.jsx)(n.p,{children:"If you wish to submit two entries, where one is optimised for MBSTOI and the other, for listening tests,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Both systems must be submitted for MBSTOI evaluation."}),"\n",(0,i.jsx)(n.li,{children:"You must register two teams, submitting each entry as a different team."}),"\n",(0,i.jsx)(n.li,{children:"In your documentation, you must make it clear which has been optimised for listening tests and the relationship between the two entries."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We will assume that if only one of these systems is to go forward to listening tests, your preference is to use the one optimised for listening tests."}),"\n",(0,i.jsx)(n.h2,{id:"evaluation-of-systems",children:"Evaluation of systems"}),"\n",(0,i.jsx)(n.h3,{id:"stage-1-objective-evaluation",children:"Stage 1: Objective evaluation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entries will be ranked according to average Modified Binaural Short-Time Objective Intelligibility (MBSTOI) score across all samples in the evaluation/test dataset (i.e., all signals submitted for the MBSTOI evaluation)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"stage-2-listening-test-evaluation",children:"Stage 2: Listening test evaluation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There is a limit on how many systems can be evaluated by the listener panel."}),"\n",(0,i.jsx)(n.li,{children:"A maximum of two entries can go through to the listener panel from any individual entrant. Furthermore, a second will only be allowed if it is judged by us to use significantly different signal processing approaches."}),"\n",(0,i.jsxs)(n.li,{children:["We will choose which will go to the listener panel based on","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The top N scored using the objective evaluation method."}),"\n",(0,i.jsx)(n.li,{children:"A sample of M others that use contrasting and promising approaches."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[9797],{13302:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(85893),s=n(11151);const r={id:"cpc1_intro",title:"The 1st Clarity Prediction Challenge",sidebar_label:"CPC1 Introduction",sidebar_position:1},a=void 0,l={id:"cpc1/cpc1_intro",title:"The 1st Clarity Prediction Challenge",description:"The 1st Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the Clarity-2022 Workshsop website.",source:"@site/docs/cpc1/cpc1_intro.mdx",sourceDirName:"cpc1",slug:"/cpc1/cpc1_intro",permalink:"/docs/cpc1/cpc1_intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cpc1_intro",title:"The 1st Clarity Prediction Challenge",sidebar_label:"CPC1 Introduction",sidebar_position:1},sidebar:"tutorialSidebar_cpc1",next:{title:"Important Dates",permalink:"/docs/cpc1/cpc1_dates"}},o={},c=[{value:"Key dates (updated 14/01/22)",id:"key-dates-updated-140122",level:2},{value:"More details",id:"more-details",level:2}];function h(e){const i={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.admonition,{type:"info",children:[(0,t.jsxs)(i.p,{children:["The 1st Clarity Prediction Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the ",(0,t.jsx)("b",{children:(0,t.jsx)("a",{href:"https://claritychallenge.org/clarity2022-workshop/",children:"Clarity-2022 Workshsop website"})}),"."]}),(0,t.jsxs)(i.p,{children:["For details of information on forthcoming challenge see ",(0,t.jsx)("b",{children:(0,t.jsx)("a",{href:"https://claritychallenge.org/timeline",children:"here"})}),"."]})]}),"\n",(0,t.jsxs)(i.p,{children:["To allow the development of better hearing aids, we need ways to evaluate the speech intelligibility of audio signals automatically. We need a prediction model that takes the audio produced by a hearing aid and the listener's characteristics (e.g. ",(0,t.jsx)(i.a,{href:"https://www.hear-it.org/Audiogram-",children:"audiogram"}),") and estimates the speech intelligibility score that the listener would achieve in a listening test. Here is a brief introduction to the challenge:"]}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9DY2VOeRU0s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,t.jsx)(i.p,{children:"For the prediction challenge we will provide the following data:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Audio produced by a variety of (simulated) hearing aids for speech-in-noise;"}),"\n",(0,t.jsx)(i.li,{children:"The corresponding clean reference signals (the original speech);"}),"\n",(0,t.jsx)(i.li,{children:"Characteristics of the listeners (pure tone audiogram, etc.); and"}),"\n",(0,t.jsx)(i.li,{children:"The measured speech intelligibility scores from listening tests, where the listener was asked to say what they heard for the speech-in-noise."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The challenge has two separate but related tracks"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"Track 1: Closed-set"})," - i.e, Systems that can make prediction for hearing-aid algorithms and listeners that have been seen in the training data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)("b",{children:"Track 2: Open-set"})," - i.e, Systems that can make predictions for unseen hearing-aid algorithms and/or listeners."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["We have an ",(0,t.jsx)(i.a,{href:"./taking_part/cpc1_faq",children:"extensive FAQ"})," to answer key questions competitors might have. So even if you have never worked on speech intelligibility models for people with hearing loss, you will have the knowledge to take part. This includes seminar recordings on the following topics:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"What hearing loss is;"}),"\n",(0,t.jsx)(i.li,{children:"How it's typically mitigated in hearing aids; and"}),"\n",(0,t.jsx)(i.li,{children:"How speech intelligibility is measured and estimated using metrics."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"key-dates-updated-140122",children:"Key dates (updated 14/01/22)"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"16th November 2021"}),": Launch of challenge, release of data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"23rd November 2021"}),": Webinar to introduce the challenge 15:00-17:00 UK time."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"1st March 2022"}),": Release of evaluation data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"21st March 2022"}),": Submission deadline. All entrants submit their predictions plus a draft of their technical report (details below). Scores will be returned with 24 hours of submission."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"28th March 2022"}),": Deadline for Interspeech paper submission."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"25th April 2022"}),": Deadline by which all entrants must submit two page technical reports to Clarity Prediction Challenge 2022 workshop."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"29th June 2022"}),": Clarity Prediction Challenge 2022 workshop."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Sept 18-22, 2022"}),": Interspeech 2022 Special Session."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"more-details",children:"More details"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./data/cpc1_scenario",children:"Scenario"})," - a description of the listening scenario and how it has been simulated."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./software/cpc1_baseline",children:"Baseline System"})," - a description of the baseline software model."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./data/cpc1_data",children:"Data"})," - the data that can be used to train and evaluate your system during development."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./software/cpc1_software",children:"Software"})," - the software tools that we are providing to help you build and evaluate a challenge entry."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./taking_part/cpc1_rules",children:"Challenge Rules"})," - the rules to which all challenge entries must adhere."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./taking_part/cpc1_submission",children:"Submission"})," - information about how to prepare your submission."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./taking_part/cpc1_prizes",children:"Prizes"})," - information about our prizes."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./cpc1_download",children:"Download"})," - where to go to download the software and challenge data."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"../cec2/taking_part/cec2_find_a_team",children:"Find a team"})," - if you'd like to find collaborators to help you compete."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"./taking_part/cpc1_faq",children:"FAQ"})," - an extensive FAQ answering key questions and providing background knowledge to help you compete."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
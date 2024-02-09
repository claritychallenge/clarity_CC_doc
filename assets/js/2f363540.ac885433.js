"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[3004],{65620:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=a(17624),i=a(4552);const r={slug:"Why use machine learning challenges for hearing aids",title:"Why use machine learning challenges for hearing aids?",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["challenges","CHiME","enhancement","machine learning","prediction"]},o=void 0,s={permalink:"/blog/Why use machine learning challenges for hearing aids",source:"@site/blog/2020-05-06-why-use-machine-learning-challenges.mdx",title:"Why use machine learning challenges for hearing aids?",description:"The Clarity Project is based around the idea that machine learning challenges could improve hearing aid signal processing. After all this has happened in other areas, such as automatic speech recognition (ASR) in the presence of noise. The improvements in ASR have happened because of:",date:"2020-05-06T00:00:00.000Z",formattedDate:"May 6, 2020",tags:[{label:"challenges",permalink:"/blog/tags/challenges"},{label:"CHiME",permalink:"/blog/tags/c-hi-me"},{label:"enhancement",permalink:"/blog/tags/enhancement"},{label:"machine learning",permalink:"/blog/tags/machine-learning"},{label:"prediction",permalink:"/blog/tags/prediction"}],readingTime:2.21,hasTruncateMarker:!1,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"Why use machine learning challenges for hearing aids",title:"Why use machine learning challenges for hearing aids?",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["challenges","CHiME","enhancement","machine learning","prediction"]},unlisted:!1,prevItem:{title:"The speech-in-noise problem",permalink:"/blog/The speech-in-noise problem"},nextItem:{title:"The baseline",permalink:"/blog/The baseline"}},l={authorsImageUrls:[void 0]},c=[{value:"Components of a challenge",id:"components-of-a-challenge",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function h(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Clarity Project is based around the idea that machine learning challenges could improve hearing aid signal processing. After all this has happened in other areas, such as automatic speech recognition (ASR) in the presence of noise. The improvements in ASR have happened because of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Machine learning (ML) at scale \u2013 big data and raw ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Graphics_processing_unit",children:"GPU"})," power."]}),"\n",(0,t.jsx)(n.li,{children:"Benchmarking \u2013 research has developed around community-organised evaluations or challenges."}),"\n",(0,t.jsx)(n.li,{children:"Collaboration has been enabled by these challenges, allowing working across communities such as signal processing, acoustic modelling, language modelling and machine learning"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We\u2019re hoping that these three mechanisms can drive improvements in hearing aids."}),"\n",(0,t.jsx)(n.h2,{id:"components-of-a-challenge",children:"Components of a challenge"}),"\n",(0,t.jsx)(n.p,{children:"There needs to be a common task based on a target application scenario to allow communities to gain from benchmarking and collaboration. Clarity project\u2019s first enhancement challenge will be about hearing speech from a single talker in a typical living room, where there is one source of noise and a little reverberation."}),"\n",(0,t.jsxs)(n.p,{children:["We\u2019re currently working on developing simulation tools to allow us to generate our living room data. The room acoustic will be simulated using ",(0,t.jsx)(n.a,{href:"https://www.semanticscholar.org/paper/RAVEN%3A-A-real-time-framework-for-the-auralization-Schr%C3%B6der-Vorl%C3%A4nder/6977f2c2c1fb4cac2305e7965ee0da8192ced72d?p2df",children:"RAVEN"})," and ",(0,t.jsx)(n.a,{href:"https://uol.de/mediphysik/downloads/hearingdevicehrtfs",children:"the Hearing Device Head-related Transfer Functions will come from Denk\u2019s work"}),". We\u2019re working on getting better, more ecologically valid speech than is often used in speech intelligibility work."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"baseline",src:a(2064).c+"",width:"1536",height:"684"})}),"\n",(0,t.jsx)(n.p,{children:"Entrants are then given training data and development (dev) test data along with a baseline system that represents the current state-of-the-art. You can find a post and video on the current thinking on the baseline here. We\u2019re still working on the rules stipulating what is and what is not allowed (for example, will entrants be allowed to use data from outside the challenge)."}),"\n",(0,t.jsxs)(n.p,{children:["Clarity\u2019s first enhancement challenge is focussed on maximising the speech intelligibility (SI) score. We will evaluate this first through a prediciton model that is based on a hearing loss simulation and an objective metric for speech intellibility. Simulation has been hugely important for generating training data in the ",(0,t.jsx)(n.a,{href:"https://chimechallenge.github.io/chime6/",children:"CHIME challenges"})," and so we intend to use that approach in Clarity. But results from simulated test sets cannot be trusted and hence a second evaluation will come through perceptual tests on hearing impaired subjects. However, one of our current problems is that we can\u2019t bring listeners into our labs because of COVID-19."]}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ll actually be running two challenges in roughly parallel, because we\u2019re also going to task the community to improve our prediction model for speech intelligibility."}),"\n",(0,t.jsx)(n.p,{children:"We\u2019re running a series of challenges over five years. What other scenarios should we consider? What speech? What noise? What environment? Please comment below."}),"\n",(0,t.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,t.jsxs)(n.p,{children:["Much of this text is based on ",(0,t.jsx)(n.a,{href:"http://2020.speech-in-noise.eu/?p=3",children:"Jon Barker\u2019s 2020 SPIN keynote"})]})]})}function g(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2064:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/baseline-1536x684-6a47c3181c95392a5977f1fd51b82c3c.png"},4552:(e,n,a)=>{a.d(n,{I:()=>s,M:()=>o});var t=a(11504);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
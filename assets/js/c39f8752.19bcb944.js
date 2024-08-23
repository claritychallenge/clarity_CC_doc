"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[3058],{94910:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var s=i(74848),n=i(28453);const o={slug:"Hearing loss simulation",title:"Hearing loss simulation",authors:["trevorcox","simonegraetzer"],tags:["baseline","hearing loss simulation"]},a=void 0,r={permalink:"/blog/Hearing loss simulation",source:"@site/blog/2020-06-23-hearing-loss-simulation.mdx",title:"Hearing loss simulation",description:"What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss.",date:"2020-06-23T00:00:00.000Z",tags:[{inline:!0,label:"baseline",permalink:"/blog/tags/baseline"},{inline:!0,label:"hearing loss simulation",permalink:"/blog/tags/hearing-loss-simulation"}],readingTime:3.75,hasTruncateMarker:!0,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",email:"clarity-group@sheffield.ac.uk",socials:{github:"https://github.com/TrevorJCox"},imageURL:"https://avatars.githubusercontent.com/trevorjcox",key:"trevorcox",page:null},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",email:"clarity-group@sheffield.ac.uk",imageURL:"https://avatars.githubusercontent.com/sgraetzer",key:"simonegraetzer",page:null}],frontMatter:{slug:"Hearing loss simulation",title:"Hearing loss simulation",authors:["trevorcox","simonegraetzer"],tags:["baseline","hearing loss simulation"]},unlisted:!1,prevItem:{title:"The speech-in-noise problem part two",permalink:"/blog/The speech-in-noise problem part two"},nextItem:{title:"Sounds for round one",permalink:"/blog/Sounds"}},l={authorsImageUrls:[void 0,void 0]},h=[];function c(e){const t={a:"a",img:"img",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss."}),"\n",(0,s.jsx)(t.p,{children:"Our challenge entrants are going to use machine learning to develop better processing of speech in noise (SPIN) for hearing aids. For a machine learning algorithm to learn new ways of processing audio for the hearing impaired, it needs to estimate how the sound will be degraded by any hearing loss. Hence, we need an algorithm to simulate hearing loss for each of our listeners. The diagram belows shows our draft baseline system that was detailed in a previous blog. The hearing loss simulation is part of the prediction model. The Enhancement Model to the left is effectively the hearing aid and the Prediction Model to the right is estimating how someone will perceive the intelligibility of the speech in noise."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"baseline",src:i(83268).A+"",width:"1536",height:"684"})}),"\n",(0,s.jsx)(t.p,{children:"The draft baseline system (where SPIN is speech in noise, DRC is Dynamic Range Compression, HL is Hearing Loss, SI is Speech Intelligibility and L & R are Left and Right)."}),"\n",(0,s.jsxs)(t.p,{children:["There are different causes of hearing loss, but we\u2019re concentrating on the most common type that happens when you age (",(0,s.jsx)(t.a,{href:"https://www.nhs.uk/conditions/hearing-loss/",children:"presbycusis"}),"). ",(0,s.jsx)(t.a,{href:"https://rnid.org.uk/",children:"RNID"})," (formerly Action on Hearing Loss) estimate that more than 40% of people over the age of 50 have a hearing loss, and this rises to 70% of people who are older than 70."]}),"\n",(0,s.jsx)(t.p,{children:"The aspects of hearing loss we\u2019ve decided to simulate are"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The loss of ability to sense the quietest sounds (increase in absolute threshold)."}),"\n",(0,s.jsx)(t.li,{children:"How as an audible sound increases in level, the perceived increase in loudness is greater than normal (loudness recruitment) (Moore et al. 1996)."}),"\n",(0,s.jsx)(t.li,{children:"How the ear has a poorer ability to discriminate the frequency of sounds (impaired frequency selectivity)."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},83268:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/baseline-1536x684-6a47c3181c95392a5977f1fd51b82c3c.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var s=i(96540);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
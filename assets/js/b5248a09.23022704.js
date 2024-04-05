"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[1082],{22986:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var o=t(74848),s=t(28453);const n={slug:"Hearing loss simulation",title:"Hearing loss simulation",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer"}],tags:["baseline","hearing loss simulation"]},r=void 0,a={permalink:"/blog/Hearing loss simulation",source:"@site/blog/2020-06-23-hearing-loss-simulation.mdx",title:"Hearing loss simulation",description:"What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss.",date:"2020-06-23T00:00:00.000Z",formattedDate:"June 23, 2020",tags:[{label:"baseline",permalink:"/blog/tags/baseline"},{label:"hearing loss simulation",permalink:"/blog/tags/hearing-loss-simulation"}],readingTime:3.75,hasTruncateMarker:!0,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"}],frontMatter:{slug:"Hearing loss simulation",title:"Hearing loss simulation",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"}],tags:["baseline","hearing loss simulation"]},unlisted:!1,prevItem:{title:"The speech-in-noise problem part two",permalink:"/blog/The speech-in-noise problem part two"},nextItem:{title:"Sounds for round one",permalink:"/blog/Sounds"}},l={authorsImageUrls:[void 0,void 0]},h=[{value:"Audio examples of hearing loss",id:"audio-examples-of-hearing-loss",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"References",id:"references",level:2}];function c(e){const i={a:"a",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss."}),"\n",(0,o.jsx)(i.p,{children:"Our challenge entrants are going to use machine learning to develop better processing of speech in noise (SPIN) for hearing aids. For a machine learning algorithm to learn new ways of processing audio for the hearing impaired, it needs to estimate how the sound will be degraded by any hearing loss. Hence, we need an algorithm to simulate hearing loss for each of our listeners. The diagram belows shows our draft baseline system that was detailed in a previous blog. The hearing loss simulation is part of the prediction model. The Enhancement Model to the left is effectively the hearing aid and the Prediction Model to the right is estimating how someone will perceive the intelligibility of the speech in noise."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"baseline",src:t(83268).A+"",width:"1536",height:"684"})}),"\n",(0,o.jsx)(i.p,{children:"The draft baseline system (where SPIN is speech in noise, DRC is Dynamic Range Compression, HL is Hearing Loss, SI is Speech Intelligibility and L & R are Left and Right)."}),"\n",(0,o.jsxs)(i.p,{children:["There are different causes of hearing loss, but we\u2019re concentrating on the most common type that happens when you age (",(0,o.jsx)(i.a,{href:"https://www.nhs.uk/conditions/hearing-loss/",children:"presbycusis"}),"). ",(0,o.jsx)(i.a,{href:"https://rnid.org.uk/",children:"RNID"})," (formerly Action on Hearing Loss) estimate that more than 40% of people over the age of 50 have a hearing loss, and this rises to 70% of people who are older than 70."]}),"\n",(0,o.jsx)(i.p,{children:"The aspects of hearing loss we\u2019ve decided to simulate are"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"The loss of ability to sense the quietest sounds (increase in absolute threshold)."}),"\n",(0,o.jsx)(i.li,{children:"How as an audible sound increases in level, the perceived increase in loudness is greater than normal (loudness recruitment) (Moore et al. 1996)."}),"\n",(0,o.jsx)(i.li,{children:"How the ear has a poorer ability to discriminate the frequency of sounds (impaired frequency selectivity)."}),"\n"]}),"\n","\n",(0,o.jsx)(i.h2,{id:"audio-examples-of-hearing-loss",children:"Audio examples of hearing loss"}),"\n",(0,o.jsx)(i.p,{children:"Here are two samples of speech in noise processed through the simulator. In each audio example there are three versions of the same sentence:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsx)(i.li,{children:"Unimpaired hearing"}),"\n",(0,o.jsx)(i.li,{children:"Mild hearing impairment"}),"\n",(0,o.jsx)(i.li,{children:"Moderate to severe hearing impairment"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"0 dB signal to noise ratio"}),"\n",(0,o.jsxs)("audio",{controls:!0,children:[(0,o.jsx)("source",{src:"/audio/spin_example.wav",type:"audio/wav"}),(0,o.jsx)(i.p,{children:"Your browser does not support the audio element."})]}),"\n",(0,o.jsx)(i.p,{children:"And here is an example where the noise is louder:"}),"\n",(0,o.jsxs)("audio",{controls:!0,children:[(0,o.jsx)("source",{src:"/audio/spin_example-10SNR.wav",type:"audio/wav"}),(0,o.jsx)(i.p,{children:"Your browser does not support the audio element."})]}),"\n",(0,o.jsx)(i.p,{children:"Noisier: -10dB signal to noise ratio"}),"\n",(0,o.jsx)(i.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,o.jsxs)(i.p,{children:["The hearing loss model we\u2019re using was generously supplied by ",(0,o.jsx)(i.a,{href:"https://www.research.manchester.ac.uk/portal/michael.stone.html",children:"Michael Stone at the University of Manchester"})," as MATLAB code and translated by us into Python. The original code was written by members of the Auditory Perception Group at the University of Cambridge, ca. 1991-2013, including Michael Stone, Brian Moore, Brian Glasberg and Thomas Baer. Information about the model can be found primarily in Nejime and Moore (1997), but also in Nejime and Moore (1998), Baer and Moore (1993 and 1994), and Moore and Glasberg (1993)."]}),"\n",(0,o.jsx)(i.p,{children:"The original speech recordings come from the ARU corpus, University of Liverpool (Hopkins et al. 2019). This corpus is freely available at the link in the reference below."}),"\n",(0,o.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["Baer, T., & Moore, B. C. (1993). Effects of spectral smearing on the intelligibility of sentences in noise. ",(0,o.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 94(3), 1229-1241."]}),"\n",(0,o.jsxs)(i.li,{children:["Baer, T., & Moore, B. C. (1994). Effects of spectral smearing on the intelligibility of sentences in the presence of interfering speech. ",(0,o.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 95(4), 2277-2280."]}),"\n",(0,o.jsxs)(i.li,{children:["Hopkins, C., Graetzer, S., & Seiffert, G. (2019). ARU adult British English speaker corpus of IEEE sentences (ARU speech corpus) version 1.0 [data collection]. Acoustics Research Unit, School of Architecture, University of Liverpool, United Kingdom. DOI: 10.17638/datacat.liverpool.ac.uk/681. Retrieved from ",(0,o.jsx)(i.a,{href:"http://datacat.liverpool.ac.uk/681/",children:"http://datacat.liverpool.ac.uk/681/"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:["Moore, B. C., & Glasberg, B. R. (1993). Simulation of the effects of loudness recruitment and threshold elevation on the intelligibility of speech in quiet and in a background of speech. ",(0,o.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 94(4), 2050-2062."]}),"\n",(0,o.jsxs)(i.li,{children:["Moore, B. C., Glasberg, B. R., & Vickers, D. A. (1996). Factors influencing loudness perception in people with cochlear hearing loss. B. Kollmeier, ",(0,o.jsx)(i.em,{children:"World Scientific"}),", Singapore, 7-18."]}),"\n",(0,o.jsxs)(i.li,{children:["Nejime, Y., & Moore, B. C. (1997). Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. ",(0,o.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 102(1), 603-615."]}),"\n",(0,o.jsxs)(i.li,{children:["Nejime, Y., & Moore, B. C. (1998). Evaluation of the effect of speech-rate slowing on speech intelligibility in noise using a simulation of cochlear hearing loss. ",(0,o.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 103(1), 572-576."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},83268:(e,i,t)=>{t.d(i,{A:()=>o});const o=t.p+"assets/images/baseline-1536x684-6a47c3181c95392a5977f1fd51b82c3c.png"},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var o=t(96540);const s={},n=o.createContext(s);function r(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);
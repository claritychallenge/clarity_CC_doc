"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[6606],{96562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(85893),r=n(11151);const i={slug:"The speech-in-noise problem part two",title:"The speech-in-noise problem part two",authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["machine learning","speech-in-noise"]},s=void 0,o={permalink:"/blog/The speech-in-noise problem part two",source:"@site/blog/2020-07-06-the-speech-in-noise-problem-part-2.mdx",title:"The speech-in-noise problem part two",description:"How hearing aids address the problem of speech-in-noise in noisy and quieter places. We\u2019ll also discuss what machine learning techniques are often used for noise reduction, and some promising strategies for hearing aids.",date:"2020-07-06T00:00:00.000Z",formattedDate:"July 6, 2020",tags:[{label:"machine learning",permalink:"/blog/tags/machine-learning"},{label:"speech-in-noise",permalink:"/blog/tags/speech-in-noise"}],readingTime:4.24,hasTruncateMarker:!0,authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"The speech-in-noise problem part two",title:"The speech-in-noise problem part two",authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["machine learning","speech-in-noise"]},unlisted:!1,prevItem:{title:"One approach to our enhancement challenge",permalink:"/blog/One approach to our enhancement challenge"},nextItem:{title:"Hearing loss simulation",permalink:"/blog/Hearing loss simulation"}},h={authorsImageUrls:[void 0,void 0]},c=[];function l(e){const t={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"How hearing aids address the problem of speech-in-noise in noisy and quieter places. We\u2019ll also discuss what machine learning techniques are often used for noise reduction, and some promising strategies for hearing aids."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Tablet user",src:n(90566).Z+"",width:"1536",height:"1024"})}),"\n",(0,a.jsxs)(t.p,{children:["In a previous blog, we set out the problem of using hearing aids to pick out speech in noisy places. When the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Signal-to-noise_ratio",children:"signal-to-noise ratio (SNR)"})," is low, hearing aids can only do so much to improve the intelligibility of the speech."]}),"\n",(0,a.jsx)(t.p,{children:"A solitary hearing aid has various ways of addressing everyday constant noises such as cars, vacuum cleaners and fans. The aids work best when the noise is not too intrusive and SNR is relatively high. Problems arise when the noise is high (low SNRs), because then the hearing aid processing can distort the sound too much. While the hearing aid might have limited success in improving intelligibility in certain cases, they can still make the noise less annoying (e.g., Brons et al., 2014)."}),"\n",(0,a.jsx)(t.p,{children:"Using multiple microphones on each hearing aid can help in noisy conditions. The sound from the microphones is combined in a way that boosts the speech relative to the noise. This technology can be put into larger hearing aids, when there is enough spacing between the front and rear microphones."}),"\n",(0,a.jsxs)(t.p,{children:["One of the reasons why our brains are really good at picking out speech from the hubbub of a restaurant, is that it compares and contrasts the sounds from both ears. Our hearing is ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Binaural",children:"binaural"}),". Similarly, if you have a hearing aids in both ears, they work better if they collaborate on reducing the noise."]}),"\n",(0,a.jsx)(t.p,{children:"Crucial to how our brains locate sound and pick out speech in noise are timing and level cues that come from comparing the sound at both ears. When sound comes from the side:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"interaural time differences occur because the sound arrives at one ear earlier than the other."}),"\n",(0,a.jsx)(t.li,{children:"interaural level differences occur because the sound has to bend around the head to reach the furthest ear."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Binaural hearing aids communicate wirelessly and use noise reduction strategies that preserve these interaural time and level difference cues (e.g., Van den Bogaert et al., 2009). This allows the listener\u2019s brain to better locate the speech and boost this compared to the noise."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},90566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/UoN_HS-08207-1536x1024-c3cb2429eb9f80e07fc15a97b1ede0c1.jpeg"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
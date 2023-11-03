"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[760],{97604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(85893),i=n(11151);const o={slug:"One approach to our enhancement challenge",title:"One approach to our enhancement challenge",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["DNN","enhancement","evaluation","GAN","hearing aid","knowledge distillation"]},r=void 0,l={permalink:"/blog/One approach to our enhancement challenge",source:"@site/blog/2020-07-29-one-approach-to-our-enhancement-challenge.mdx",title:"One approach to our enhancement challenge",description:"Improving hearing aid processing using DNNs blog. A suggested approach to overcome the non-differentiable loss function.",date:"2020-07-29T00:00:00.000Z",formattedDate:"July 29, 2020",tags:[{label:"DNN",permalink:"/blog/tags/dnn"},{label:"enhancement",permalink:"/blog/tags/enhancement"},{label:"evaluation",permalink:"/blog/tags/evaluation"},{label:"GAN",permalink:"/blog/tags/gan"},{label:"hearing aid",permalink:"/blog/tags/hearing-aid"},{label:"knowledge distillation",permalink:"/blog/tags/knowledge-distillation"}],readingTime:3.59,hasTruncateMarker:!0,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"One approach to our enhancement challenge",title:"One approach to our enhancement challenge",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["DNN","enhancement","evaluation","GAN","hearing aid","knowledge distillation"]},unlisted:!1,prevItem:{title:"Clarity Challenge pre-announcement",permalink:"/blog/Clarity Challenge pre-announcement"},nextItem:{title:"The speech-in-noise problem part two",permalink:"/blog/The speech-in-noise problem part two"}},s={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",em:"em",img:"img",p:"p",...(0,i.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Improving hearing aid processing using DNNs blog. A suggested approach to overcome the non-differentiable loss function."}),"\n",(0,a.jsxs)(t.p,{children:["The aim of our Enhancement Challenge is to get people producing new algorithms for processing speech signals through hearing aids. We expect most entries to replace the classic hearing aid processing of Dynamic Range Compressors (DRCs) with ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Deep_learning",children:"deep neural networks (DNN)"})," (although all approaches are welcome!). The first round of the challenge is going to be all about improving speech intelligibility."]}),"\n",(0,a.jsxs)(t.p,{children:["Setting up a DNN structure and training regime for the task is not as straightforward as it might first appear. Figure 1 shows an example of a naive training regime. An audio example of Speech in Noise (SPIN) is randomly created (",(0,a.jsx)(t.em,{children:"audio sample generation"}),", bottom left), and a listener is randomly selected with particular hearing loss characteristics (",(0,a.jsx)(t.em,{children:"random artificial listener generation"}),", top left). The DNN Enhancement model (represented by the bright yellow box) then produces improved speech in noise. (Audio signals in pink are two-channel, left and right because this is for binaural hearing aids.)"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"schematic",src:n(6347).Z+"",width:"1149",height:"446"})}),"\n",(0,a.jsx)(t.p,{children:"Figure 1"}),"\n",(0,a.jsx)(t.p,{children:"Next the improved speech in noise is passed to the Prediction Model in the lime green box, and this gives an estimation of the Speech Intelligibility (SI). Our baseline system will include algorithms for this. We\u2019ve already blogged about the Hearing Loss Simulation. Our current thinking is that the intelligibility model will be using a binaural form of the Short-Time Objective Intelligibility Index (STOI) [1]. The dashed line going back to the enhancement model shows that the DNN will be updated based on the reciprocal of the Speech Intelligibility (SI) score. By minimising (1/SI), the enhancement model will be maximising intelligibility."})]})}function g(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},6347:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clarity_schematic_for_blog-09-6f015d990f75f14a4068ca7ab8295f69.png"},11151:(e,t,n)=>{n.d(t,{ah:()=>o});var a=n(67294);const i=a.createContext({});function o(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
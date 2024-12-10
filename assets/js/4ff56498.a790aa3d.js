"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[4443],{77042:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var a=i(24287),t=i(74848),r=i(28453);const s={slug:"The speech-in-noise problem part two",title:"The speech-in-noise problem part two",authors:["simonegraetzer","trevorcox"],tags:["machine learning","speech-in-noise"]},o=void 0,h={authorsImageUrls:[void 0,void 0]},l=[{value:"Machine learning",id:"machine-learning",level:2},{value:"References",id:"references",level:2},{value:"Credits",id:"credits",level:2}];function c(e){const n={a:"a",em:"em",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"How hearing aids address the problem of speech-in-noise in noisy and quieter places. We\u2019ll also discuss what machine learning techniques are often used for noise reduction, and some promising strategies for hearing aids."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tablet user",src:i(95101).A+"",width:"1536",height:"1024"})}),"\n",(0,t.jsxs)(n.p,{children:["In a previous blog, we set out the problem of using hearing aids to pick out speech in noisy places. When the ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Signal-to-noise_ratio",children:"signal-to-noise ratio (SNR)"})," is low, hearing aids can only do so much to improve the intelligibility of the speech."]}),"\n",(0,t.jsx)(n.p,{children:"A solitary hearing aid has various ways of addressing everyday constant noises such as cars, vacuum cleaners and fans. The aids work best when the noise is not too intrusive and SNR is relatively high. Problems arise when the noise is high (low SNRs), because then the hearing aid processing can distort the sound too much. While the hearing aid might have limited success in improving intelligibility in certain cases, they can still make the noise less annoying (e.g., Brons et al., 2014)."}),"\n",(0,t.jsx)(n.p,{children:"Using multiple microphones on each hearing aid can help in noisy conditions. The sound from the microphones is combined in a way that boosts the speech relative to the noise. This technology can be put into larger hearing aids, when there is enough spacing between the front and rear microphones."}),"\n",(0,t.jsxs)(n.p,{children:["One of the reasons why our brains are really good at picking out speech from the hubbub of a restaurant, is that it compares and contrasts the sounds from both ears. Our hearing is ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Binaural",children:"binaural"}),". Similarly, if you have a hearing aids in both ears, they work better if they collaborate on reducing the noise."]}),"\n",(0,t.jsx)(n.p,{children:"Crucial to how our brains locate sound and pick out speech in noise are timing and level cues that come from comparing the sound at both ears. When sound comes from the side:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"interaural time differences occur because the sound arrives at one ear earlier than the other."}),"\n",(0,t.jsx)(n.li,{children:"interaural level differences occur because the sound has to bend around the head to reach the furthest ear."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Binaural hearing aids communicate wirelessly and use noise reduction strategies that preserve these interaural time and level difference cues (e.g., Van den Bogaert et al., 2009). This allows the listener\u2019s brain to better locate the speech and boost this compared to the noise."}),"\n","\n",(0,t.jsx)(n.h2,{id:"machine-learning",children:"Machine learning"}),"\n",(0,t.jsxs)(n.p,{children:["In recent years, there has been increasing interest in what ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Machine_learning",children:"machine learning"})," methods can do for hearing aids. Machine learning is a branch of artificial intelligence where computers learn directly from example data. One machine learning method is the neural network. This is an algorithm formed from layers of simple computational units connected to each other in a way that is inspired by connections between neurons in the brain. Deep (3+ layer) neural networks are able to learn complex, non-linear mapping functions, which makes them ideal candidates for noise reduction tasks."]}),"\n",(0,t.jsx)(n.p,{children:"We anticipate that machine learning can help tackle the challenge of speech in noise for hearing aids, providing a tailored solution for each individual and listening situation. For example, one thing machine learning could do is to sense the acoustic environment the listener is in, and choose the most suitable processing settings."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Electronic brain",src:i(1522).A+"",width:"400",height:"320"})}),"\n",(0,t.jsxs)(n.p,{children:["Image via ",(0,t.jsx)(n.a,{href:"https://www.vpnsrus.com",children:"www.vpnsrus.com"})]}),"\n",(0,t.jsx)(n.p,{children:"In recent years, a machine learning approach for noise reduction has become popular. Neural networks are used to estimate time-frequency masks (a set of gains for each time-frequency unit that, when multiplied by the signal, produce less noisy speech; see, e.g., Zhao et al., 2018)."}),"\n",(0,t.jsx)(n.p,{children:"Machine learning systems for noise reduction are trained on artificially mixed speech and noise. Some operate on a single channel, i.e., using spectral cues, and some work with multiple channels using spatial cues. We expect that future hearing aids built on machine learning will perform best if they combine the left and right microphones to work binaurally."}),"\n",(0,t.jsx)(n.p,{children:"Most of these noise reduction systems have been designed and evaluated in an off-line mode where they process pre-recorded signals. This isn\u2019t much use for hearing aids that need to work in real-time with low latency (i.e., short delays). One challenge for hearing aids is to redesign off-line approaches to work quickly enough without too much loss of performance."}),"\n",(0,t.jsx)(n.p,{children:"The potential for machine learning to produce better approaches to hearing aid processing is what motivated the Clarity Project. If you\u2019re interested in hearing more as the challenges develop, please sign up."}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Brons, I., Houben, R., and Dreschler, W. A. (2014). Effects of noise reduction on speech intelligibility, perceived listening effort, and personal preference in hearing-impaired listeners. ",(0,t.jsx)(n.em,{children:"Trends in hearing"}),", 18, 1-10."]}),"\n",(0,t.jsxs)(n.li,{children:["Van den Bogaert, T., Doclo, S., Wouters, J., and Moonen, M. (2009). Speech enhancement with multichannel Wiener filter techniques in multimicrophone binaural hearing aids. ",(0,t.jsx)(n.em,{children:"The Journal of the Acoustical Society of America"}),", 125(1), 360-371."]}),"\n",(0,t.jsxs)(n.li,{children:["Zhao, Y., Wang, D., Johnson, E. M., and Healy, E. W. (2018). A deep learning based segregation algorithm to increase speech intelligibility for hearing-impaired listeners in reverberant-noisy conditions. ",(0,t.jsx)(n.em,{children:"The Journal of the Acoustical Society of America"}),", 144(3), 1627-1637."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,t.jsx)(n.p,{children:"Photograph of hearing aid wearer, copyright University of Nottingham."}),"\n",(0,t.jsxs)(n.p,{children:["Image of brain with overlaid circuity made available by ",(0,t.jsx)(n.a,{href:"https://www.vpnsrus.com",children:"www.vpnsrus.com"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},95101:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/UoN_HS-08207-1536x1024-6d25ed2333ce62f5847f0c031a89d19e.jpeg"},1522:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/neural_brain-3ca5f7dc07936baef02ded512c775008.jpeg"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var a=i(96540);const t={},r=a.createContext(t);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(r.Provider,{value:n},e.children)}},24287:e=>{e.exports=JSON.parse('{"permalink":"/blog/The speech-in-noise problem part two","source":"@site/blog/2020-07-06-the-speech-in-noise-problem-part-2.mdx","title":"The speech-in-noise problem part two","description":"How hearing aids address the problem of speech-in-noise in noisy and quieter places. We\u2019ll also discuss what machine learning techniques are often used for noise reduction, and some promising strategies for hearing aids.","date":"2020-07-06T00:00:00.000Z","tags":[{"inline":true,"label":"machine learning","permalink":"/blog/tags/machine-learning"},{"inline":true,"label":"speech-in-noise","permalink":"/blog/tags/speech-in-noise"}],"readingTime":4.24,"hasTruncateMarker":true,"authors":[{"name":"Simone Graetzer","title":"Clarity Team Member","url":"https://www.salford.ac.uk/our-staff/simone-graetzer","email":"clarity-group@sheffield.ac.uk","imageURL":"https://avatars.githubusercontent.com/sgraetzer","key":"simonegraetzer","page":null},{"name":"Trevor Cox","title":"Clarity Team Member","url":"http://trevorcox.me/trevor-cox","email":"clarity-group@sheffield.ac.uk","socials":{"github":"https://github.com/TrevorJCox"},"imageURL":"https://avatars.githubusercontent.com/trevorjcox","key":"trevorcox","page":null}],"frontMatter":{"slug":"The speech-in-noise problem part two","title":"The speech-in-noise problem part two","authors":["simonegraetzer","trevorcox"],"tags":["machine learning","speech-in-noise"]},"unlisted":false,"prevItem":{"title":"One approach to our enhancement challenge","permalink":"/blog/One approach to our enhancement challenge"},"nextItem":{"title":"Hearing loss simulation","permalink":"/blog/Hearing loss simulation"}}')}}]);
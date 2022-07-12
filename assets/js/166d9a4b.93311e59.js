"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[5420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},h),{},{components:n})):r.createElement(g,o({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={slug:"The speech-in-noise problem part two",title:"The speech-in-noise problem part two",authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["machine learning","speech-in-noise"]},o=void 0,s={permalink:"/blog/The speech-in-noise problem part two",source:"@site/blog/2020-07-06-the-speech-in-noise-problem-part-2.md",title:"The speech-in-noise problem part two",description:"How hearing aids address the problem of speech-in-noise in noisy and quieter places. We\u2019ll also discuss what machine learning techniques are often used for noise reduction, and some promising strategies for hearing aids.",date:"2020-07-06T00:00:00.000Z",formattedDate:"July 6, 2020",tags:[{label:"machine learning",permalink:"/blog/tags/machine-learning"},{label:"speech-in-noise",permalink:"/blog/tags/speech-in-noise"}],readingTime:4.24,hasTruncateMarker:!0,authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"The speech-in-noise problem part two",title:"The speech-in-noise problem part two",authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],tags:["machine learning","speech-in-noise"]},prevItem:{title:"One approach to our enhancement challenge",permalink:"/blog/One approach to our enhancement challenge"},nextItem:{title:"Hearing loss simulation",permalink:"/blog/Hearing loss simulation"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Machine learning",id:"machine-learning",level:2},{value:"References",id:"references",level:2},{value:"Credits",id:"credits",level:2}],h={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How hearing aids address the problem of speech-in-noise in noisy and quieter places. We\u2019ll also discuss what machine learning techniques are often used for noise reduction, and some promising strategies for hearing aids."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tablet user",src:n(90566).Z,width:"1536",height:"1024"})),(0,a.kt)("p",null,"In a previous blog, we set out the problem of using hearing aids to pick out speech in noisy places. When the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Signal-to-noise_ratio"},"signal-to-noise ratio (SNR)")," is low, hearing aids can only do so much to improve the intelligibility of the speech."),(0,a.kt)("p",null,"A solitary hearing aid has various ways of addressing everyday constant noises such as cars, vacuum cleaners and fans. The aids work best when the noise is not too intrusive and SNR is relatively high. Problems arise when the noise is high (low SNRs), because then the hearing aid processing can distort the sound too much. While the hearing aid might have limited success in improving intelligibility in certain cases, they can still make the noise less annoying (e.g., Brons et al., 2014)."),(0,a.kt)("p",null,"Using multiple microphones on each hearing aid can help in noisy conditions. The sound from the microphones is combined in a way that boosts the speech relative to the noise. This technology can be put into larger hearing aids, when there is enough spacing between the front and rear microphones."),(0,a.kt)("p",null,"One of the reasons why our brains are really good at picking out speech from the hubbub of a restaurant, is that it compares and contrasts the sounds from both ears. Our hearing is ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Binaural"},"binaural"),". Similarly, if you have a hearing aids in both ears, they work better if they collaborate on reducing the noise."),(0,a.kt)("p",null,"Crucial to how our brains locate sound and pick out speech in noise are timing and level cues that come from comparing the sound at both ears. When sound comes from the side:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interaural time differences occur because the sound arrives at one ear earlier than the other."),(0,a.kt)("li",{parentName:"ul"},"interaural level differences occur because the sound has to bend around the head to reach the furthest ear.")),(0,a.kt)("p",null,"Binaural hearing aids communicate wirelessly and use noise reduction strategies that preserve these interaural time and level difference cues (e.g., Van den Bogaert et al., 2009). This allows the listener\u2019s brain to better locate the speech and boost this compared to the noise."),(0,a.kt)("h2",{id:"machine-learning"},"Machine learning"),(0,a.kt)("p",null,"In recent years, there has been increasing interest in what ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Machine_learning"},"machine learning")," methods can do for hearing aids. Machine learning is a branch of artificial intelligence where computers learn directly from example data. One machine learning method is the neural network. This is an algorithm formed from layers of simple computational units connected to each other in a way that is inspired by connections between neurons in the brain. Deep (3+ layer) neural networks are able to learn complex, non-linear mapping functions, which makes them ideal candidates for noise reduction tasks."),(0,a.kt)("p",null,"We anticipate that machine learning can help tackle the challenge of speech in noise for hearing aids, providing a tailored solution for each individual and listening situation. For example, one thing machine learning could do is to sense the acoustic environment the listener is in, and choose the most suitable processing settings."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Electronic brain",src:n(74609).Z,width:"400",height:"320"})),(0,a.kt)("p",null,"Image via ",(0,a.kt)("a",{parentName:"p",href:"http://www.vpnsrus.com"},"www.vpnsrus.com")),(0,a.kt)("p",null,"In recent years, a machine learning approach for noise reduction has become popular. Neural networks are used to estimate time-frequency masks (a set of gains for each time-frequency unit that, when multiplied by the signal, produce less noisy speech; see, e.g., Zhao et al., 2018)."),(0,a.kt)("p",null,"Machine learning systems for noise reduction are trained on artificially mixed speech and noise. Some operate on a single channel, i.e., using spectral cues, and some work with multiple channels using spatial cues. We expect that future hearing aids built on machine learning will perform best if they combine the left and right microphones to work binaurally."),(0,a.kt)("p",null,"Most of these noise reduction systems have been designed and evaluated in an off-line mode where they process pre-recorded signals. This isn\u2019t much use for hearing aids that need to work in real-time with low latency (i.e., short delays). One challenge for hearing aids is to redesign off-line approaches to work quickly enough without too much loss of performance."),(0,a.kt)("p",null,"The potential for machine learning to produce better approaches to hearing aid processing is what motivated the Clarity Project. If you\u2019re interested in hearing more as the challenges develop, please sign up."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Brons, I., Houben, R., and Dreschler, W. A. (2014). Effects of noise reduction on speech intelligibility, perceived listening effort, and personal preference in hearing-impaired listeners. ",(0,a.kt)("em",{parentName:"li"},"Trends in hearing"),", 18, 1-10."),(0,a.kt)("li",{parentName:"ul"},"Van den Bogaert, T., Doclo, S., Wouters, J., and Moonen, M. (2009). Speech enhancement with multichannel Wiener filter techniques in multimicrophone binaural hearing aids. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 125(1), 360-371."),(0,a.kt)("li",{parentName:"ul"},"Zhao, Y., Wang, D., Johnson, E. M., and Healy, E. W. (2018). A deep learning based segregation algorithm to increase speech intelligibility for hearing-impaired listeners in reverberant-noisy conditions. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 144(3), 1627-1637.")),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,"Photograph of hearing aid wearer, copyright University of Nottingham."),(0,a.kt)("p",null,"Image of brain with overlaid circuity made available by ",(0,a.kt)("a",{parentName:"p",href:"http://www.vpnsrus.com"},"www.vpnsrus.com"),"."))}u.isMDXComponent=!0},90566:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/UoN_HS-08207-1536x1024-c3cb2429eb9f80e07fc15a97b1ede0c1.jpeg"},74609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/neural_brain-5ff559452f28c8fa0d411e6e67baee7a.jpeg"}}]);
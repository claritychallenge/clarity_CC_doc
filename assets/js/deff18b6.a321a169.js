"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,g=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return r?o.createElement(g,n(n({ref:t},u),{},{components:r})):o.createElement(g,n({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const i={slug:"Hearing loss simulation",title:"Hearing loss simulation",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer"}],tags:["baseline","hearing loss simulation"]},n=void 0,s={permalink:"/blog/Hearing loss simulation",source:"@site/blog/2020-06-23-hearing-loss-simulation.md",title:"Hearing loss simulation",description:"What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss.",date:"2020-06-23T00:00:00.000Z",formattedDate:"June 23, 2020",tags:[{label:"baseline",permalink:"/blog/tags/baseline"},{label:"hearing loss simulation",permalink:"/blog/tags/hearing-loss-simulation"}],readingTime:3.75,hasTruncateMarker:!0,authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"}],frontMatter:{slug:"Hearing loss simulation",title:"Hearing loss simulation",authors:[{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"},{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"}],tags:["baseline","hearing loss simulation"]},prevItem:{title:"The speech-in-noise problem part two",permalink:"/blog/The speech-in-noise problem part two"},nextItem:{title:"Sounds for round one",permalink:"/blog/Sounds"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Audio examples of hearing loss",id:"audio-examples-of-hearing-loss",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"References",id:"references",level:2}],u={toc:c};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What our hearing loss algorithms simulate, with audio examples to illustrate hearing loss."),(0,a.kt)("p",null,"Our challenge entrants are going to use machine learning to develop better processing of speech in noise (SPIN) for hearing aids. For a machine learning algorithm to learn new ways of processing audio for the hearing impaired, it needs to estimate how the sound will be degraded by any hearing loss. Hence, we need an algorithm to simulate hearing loss for each of our listeners. The diagram belows shows our draft baseline system that was detailed in a previous blog. The hearing loss simulation is part of the prediction model. The Enhancement Model to the left is effectively the hearing aid and the Prediction Model to the right is estimating how someone will perceive the intelligibility of the speech in noise."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"baseline",src:r(84942).Z,width:"1536",height:"684"})),(0,a.kt)("p",null,"The draft baseline system (where SPIN is speech in noise, DRC is Dynamic Range Compression, HL is Hearing Loss, SI is Speech Intelligibility and L & R are Left and Right)."),(0,a.kt)("p",null,"There are different causes of hearing loss, but we\u2019re concentrating on the most common type that happens when you age (",(0,a.kt)("a",{parentName:"p",href:"https://www.nhs.uk/conditions/hearing-loss/"},"presbycusis"),"). ",(0,a.kt)("a",{parentName:"p",href:"https://rnid.org.uk/"},"RNID")," (formerly Action on Hearing Loss) estimate that more than 40% of people over the age of 50 have a hearing loss, and this rises to 70% of people who are older than 70."),(0,a.kt)("p",null,"The aspects of hearing loss we\u2019ve decided to simulate are"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The loss of ability to sense the quietest sounds (increase in absolute threshold)."),(0,a.kt)("li",{parentName:"ol"},"How as an audible sound increases in level, the perceived increase in loudness is greater than normal (loudness recruitment) (Moore et al. 1996)."),(0,a.kt)("li",{parentName:"ol"},"How the ear has a poorer ability to discriminate the frequency of sounds (impaired frequency selectivity).")),(0,a.kt)("h2",{id:"audio-examples-of-hearing-loss"},"Audio examples of hearing loss"),(0,a.kt)("p",null,"Here are two samples of speech in noise processed through the simulator. In each audio example there are three versions of the same sentence:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unimpaired hearing"),(0,a.kt)("li",{parentName:"ol"},"Mild hearing impairment"),(0,a.kt)("li",{parentName:"ol"},"Moderate to severe hearing impairment")),(0,a.kt)("p",null,"0 dB signal to noise ratio"),(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:"/audio/spin_example.wav",type:"audio/wav"}),"Your browser does not support the audio element."),(0,a.kt)("p",null,"And here is an example where the noise is louder:"),(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:"/audio/spin_example-10SNR.wav",type:"audio/wav"}),"Your browser does not support the audio element."),(0,a.kt)("p",null,"Noisier: -10dB signal to noise ratio"),(0,a.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,a.kt)("p",null,"The hearing loss model we\u2019re using was generously supplied by ",(0,a.kt)("a",{parentName:"p",href:"https://www.research.manchester.ac.uk/portal/michael.stone.html"},"Michael Stone at the University of Manchester")," as MATLAB code and translated by us into Python. The original code was written by members of the Auditory Perception Group at the University of Cambridge, ca. 1991-2013, including Michael Stone, Brian Moore, Brian Glasberg and Thomas Baer. Information about the model can be found primarily in Nejime and Moore (1997), but also in Nejime and Moore (1998), Baer and Moore (1993 and 1994), and Moore and Glasberg (1993)."),(0,a.kt)("p",null,"The original speech recordings come from the ARU corpus, University of Liverpool (Hopkins et al. 2019). This corpus is freely available at the link in the reference below."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Baer, T., & Moore, B. C. (1993). Effects of spectral smearing on the intelligibility of sentences in noise. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 94(3), 1229-1241."),(0,a.kt)("li",{parentName:"ul"},"Baer, T., & Moore, B. C. (1994). Effects of spectral smearing on the intelligibility of sentences in the presence of interfering speech. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 95(4), 2277-2280."),(0,a.kt)("li",{parentName:"ul"},"Hopkins, C., Graetzer, S., & Seiffert, G. (2019). ARU adult British English speaker corpus of IEEE sentences (ARU speech corpus) version 1.0 ","[data collection]",". Acoustics Research Unit, School of Architecture, University of Liverpool, United Kingdom. DOI: 10.17638/datacat.liverpool.ac.uk/681. Retrieved from ",(0,a.kt)("a",{parentName:"li",href:"http://datacat.liverpool.ac.uk/681/"},"http://datacat.liverpool.ac.uk/681/"),"."),(0,a.kt)("li",{parentName:"ul"},"Moore, B. C., & Glasberg, B. R. (1993). Simulation of the effects of loudness recruitment and threshold elevation on the intelligibility of speech in quiet and in a background of speech. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 94(4), 2050-2062."),(0,a.kt)("li",{parentName:"ul"},"Moore, B. C., Glasberg, B. R., & Vickers, D. A. (1996). Factors influencing loudness perception in people with cochlear hearing loss. B. Kollmeier, ",(0,a.kt)("em",{parentName:"li"},"World Scientific"),", Singapore, 7-18."),(0,a.kt)("li",{parentName:"ul"},"Nejime, Y., & Moore, B. C. (1997). Simulation of the effect of threshold elevation and loudness recruitment combined with reduced frequency selectivity on the intelligibility of speech in noise. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 102(1), 603-615."),(0,a.kt)("li",{parentName:"ul"},"Nejime, Y., & Moore, B. C. (1998). Evaluation of the effect of speech-rate slowing on speech intelligibility in noise using a simulation of cochlear hearing loss. ",(0,a.kt)("em",{parentName:"li"},"The Journal of the Acoustical Society of America"),", 103(1), 572-576.")))}h.isMDXComponent=!0},84942:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/baseline-1536x684-b7b4b9fdbaffe5d680f9dc1e0b073d7f.png"}}]);
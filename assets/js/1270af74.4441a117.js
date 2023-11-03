"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[9184],{32698:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(85893),r=t(11151);const a={slug:"The speech-in-noise problem",title:"The speech-in-noise problem",authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox"}],image:"https://i.imgur.com/mErPwqL.png",tags:["cocktail party","hearing","hearing aid","noise","speech"]},s=void 0,o={permalink:"/blog/The speech-in-noise problem",source:"@site/blog/2020-06-18-the-speech-in-noise-problem.mdx",title:"The speech-in-noise problem",description:"People often have problems understanding speech in noise, and this is one of the main deficits of hearing aids that our machine learning challenges will address.",date:"2020-06-18T00:00:00.000Z",formattedDate:"June 18, 2020",tags:[{label:"cocktail party",permalink:"/blog/tags/cocktail-party"},{label:"hearing",permalink:"/blog/tags/hearing"},{label:"hearing aid",permalink:"/blog/tags/hearing-aid"},{label:"noise",permalink:"/blog/tags/noise"},{label:"speech",permalink:"/blog/tags/speech"}],readingTime:3.725,hasTruncateMarker:!0,authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],frontMatter:{slug:"The speech-in-noise problem",title:"The speech-in-noise problem",authors:[{name:"Simone Graetzer",title:"Clarity Team Member",url:"https://www.salford.ac.uk/our-staff/simone-graetzer",image_url:"https://avatars.githubusercontent.com/sgraetzer",imageURL:"https://avatars.githubusercontent.com/sgraetzer"},{name:"Trevor Cox",title:"Clarity Team Member",url:"http://trevorcox.me/trevor-cox",image_url:"https://avatars.githubusercontent.com/trevorjcox",imageURL:"https://avatars.githubusercontent.com/trevorjcox"}],image:"https://i.imgur.com/mErPwqL.png",tags:["cocktail party","hearing","hearing aid","noise","speech"]},unlisted:!1,prevItem:{title:"Sounds for round one",permalink:"/blog/Sounds"},nextItem:{title:"Why use machine learning challenges for hearing aids?",permalink:"/blog/Why use machine learning challenges for hearing aids"}},h={authorsImageUrls:[void 0,void 0]},l=[{value:"References",id:"references",level:2},{value:"Credits",id:"credits",level:2}];function c(e){const i={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"People often have problems understanding speech in noise, and this is one of the main deficits of hearing aids that our machine learning challenges will address."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"cocktail party",src:t(68224).Z+"",width:"800",height:"600"})}),"\n",(0,n.jsx)(i.p,{children:"It\u2019s common for us to hear sounds coming simultaneously from different sources. Our brains then need to separate out what we want to hear (the target speaker) from the other sounds. This is especially difficult when the competing sounds are speech. This has the quaint name, The Cocktail Party Problem (Cherry, 1953). We don\u2019t go to many cocktail parties, but we encounter lots of times where the The Cocktail Party Problem is important. Hearing a conversation in a busy restaurant, trying to understand a loved one while the television is on or hearing the radio in the kitchen when the kettle is boiling, are just a few examples."}),"\n",(0,n.jsx)(i.p,{children:"Difficulty in picking out speech in noise is really common if you have a hearing loss. Indeed, it\u2019s often when people have problems doing this that they realise they have a hearing loss."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"\u201cHearing aids don\u2019t work when there is a lot of background noise. This is when you need them to work.\u201d\n\n-- Statement from a hearing aid wearer (Kochkin, 2000)\n"})}),"\n",(0,n.jsx)(i.p,{children:"Hearing aids are the the most common form of treatment for hearing loss. However, surveys indicate that at least 40% of hearing aids are never or rarely used (Knudsen et al., 2010). A major reason for this is dissatisfaction with performance. Even the best hearing aids perform poorly for speech in noise. This is particularly the case when there are many people talking at the same time, and when the amount of noise is relatively high (i.e., the signal-to-noise ratio (SNR) is low). As hearing ability worsen with age, the ability to understand speech in background noise also reduces (e.g., Akeroyd, 2008)."}),"\n","\n",(0,n.jsx)(i.p,{children:"When an audiologist assesses hearing loss, one thing they measure is the pure tone audiogram. This assesses the quietest sound someone can hear over a range of frequencies. However, an audiogram only partly explains your experience with speech in background noise (Heinrich et al. 2015), because it only measures the quietest sound you can hear. For example, picking out speech from noise is a complex task for the brain to perform, and this cognitive ability isn\u2019t assessed by an audiogram. In addition, there are other factors that are important such as personality, motivation, attitude toward hearing aids and prior hearing aid experience."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Audiogram",src:t(96801).Z+"",width:"768",height:"723"})}),"\n",(0,n.jsx)(i.p,{children:"An audiogram displaying a \u201cski slope\u201d pattern that is a sign of age-related hearing loss (source: Ronan and Barrett, BMJ, 2014).\nSpeech-in-noise tests get closer to the real-life problem a hearing aid is trying to solve. Listeners listen to speech in the presence of noise and write down what words they hear. More words correct show an increase in the ability to understand speech in specific noisy situations when listeners are wearing their hearing aid (aided) relative to when they are not (unaided). Of course, listening conditions in the clinic differ from real-life conditions."}),"\n",(0,n.jsx)(i.p,{children:"Currently, while speech-in-noise test scores can be useful when fine-tuning a hearing aid, even then many users are disappointed about the performance of their hearing aids. Through our challenges, we hope to improve this situation, whether you go to cocktail parties or not."}),"\n",(0,n.jsx)(i.p,{children:"What\u2019s your experience with speech in noise? Please comment below."}),"\n",(0,n.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Akeroyd, M. A. (2008). Are individual differences in speech reception related to individual differences in cognitive ability? A survey of twenty experimental studies with normal and hearing-impaired adults. ",(0,n.jsx)(i.em,{children:"International Journal of Audiology"}),", 47(sup2), S53-S71."]}),"\n",(0,n.jsxs)(i.li,{children:["Cherry, E. C. (1953). Some experiments on the recognition of speech, with one and with two ears. ",(0,n.jsx)(i.em,{children:"The Journal of the Acoustical Society of America"}),", 25(5), 975-979."]}),"\n",(0,n.jsxs)(i.li,{children:["Heinrich, A., Henshaw, H., and Ferguson, M. A. (2015). The relationship of speech intelligibility with hearing sensitivity, cognition, and perceived hearing difficulties varies for different speech perception tests. ",(0,n.jsx)(i.em,{children:"Frontiers in Psychology"}),", 6, 782."]}),"\n",(0,n.jsxs)(i.li,{children:["Vestergaard Knudsen, L., \xd6berg, M., Nielsen, C., Naylor, G., and Kramer, S. E. (2010). Factors influencing help seeking, hearing aid uptake, hearing aid use and satisfaction with hearing aids: A review of the literature. ",(0,n.jsx)(i.em,{children:"Trends in Amplification"}),", 14(3), 127-154."]}),"\n",(0,n.jsxs)(i.li,{children:["Kochkin, S. (2000). MarkeTrak V: \u201cWhy my hearing aids are in the drawer\u201d The consumers\u2019 perspective. ",(0,n.jsx)(i.em,{children:"The Hearing Journal"}),", 53(2), 34-36."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"credits",children:"Credits"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Photo of Cocktail party by Ross CC BY-NC-SA 2.0"}),"\n",(0,n.jsxs)(i.li,{children:["Ronan, N., & Barrett, G. (2014). A 68 year old woman with deteriorating hearing. BMJ, 348, g2984. ",(0,n.jsx)(i.a,{href:"https://www.bmj.com/content/348/bmj.g2984",children:"https://www.bmj.com/content/348/bmj.g2984"})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.ah)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},96801:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/audiogram-50770c7ed479b289ea9fdca8ab2417d4.jpg"},68224:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/cocktail_party-bffe47988f231d9d0811d899c5e6022e.jpeg"},11151:(e,i,t)=>{t.d(i,{ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const i=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}}}]);
"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[2494],{57625:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>n,toc:()=>m});var n=s(96342),t=s(74848),i=s(28453);const l={slug:"Latency, computation time and real-time operation",title:"Latency, computation time and real-time operation",authors:"trevorcox",tags:["challenge","computation","enhancement","latency","real-time"]},r=void 0,h={authorsImageUrls:[void 0]},m=[{value:"The 1st Clarity Enhancement Challenge",id:"the-1st-clarity-enhancement-challenge",level:2},{value:"Why is there no limitation of how long f() takes to compute?",id:"why-is-there-no-limitation-of-how-long-f-takes-to-compute",level:2},{value:"Why haven\u2019t you talked about latency?",id:"why-havent-you-talked-about-latency",level:2},{value:"Do algorithms have to be real-time?",id:"do-algorithms-have-to-be-real-time",level:2}];function c(e){const a={annotation:"annotation",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"An explanation of the time and computational limits for the first round of the enhancement challenge."}),"\n",(0,t.jsx)(a.h2,{id:"the-1st-clarity-enhancement-challenge",children:"The 1st Clarity Enhancement Challenge"}),"\n",(0,t.jsx)(a.p,{children:"For a hearing aid to work well for users, the processing needs to be quick. The output of the hearing aid should be produced with a delay of less than about 10 ms. Many audio processing techniques are non-causal, i.e., the output of the system depends on samples from the future. Such processing is useless for hearing aids and therefore our rules include a restriction on the use of future samples."}),"\n",(0,t.jsx)(a.p,{children:"The rules state the following:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Systems must be causal; the output at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5ms)."}),"\n",(0,t.jsx)(a.li,{children:"There is no limit on computational cost."}),"\n"]}),"\n","\n",(0,t.jsx)(a.p,{children:"Mathematically this is:"}),"\n",(0,t.jsxs)(a.p,{children:["y",(0,t.jsx)("sub",{children:"n"}),"=f(x",(0,t.jsx)("sub",{children:"m"})," , x",(0,t.jsx)("sub",{children:"m+1"})," ... x",(0,t.jsx)("sub",{children:"n+N-1"})," , x",(0,t.jsx)("sub",{children:"n+N"})," , L )"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["where y",(0,t.jsx)("sub",{children:"n"})," is the output from your hearing aid for sample ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mi,{children:"n"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]}),"."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mi,{children:"x"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," is the audio input signal from a hearing aid microphone."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"N"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.005"}),(0,t.jsx)(a.mi,{children:"f"}),(0,t.jsx)(a.mi,{children:"s"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"N = 0.005 fs"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.005"}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})]})]})," where ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"f"}),(0,t.jsx)(a.mi,{children:"s"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"fs"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]})," is the sampling frequency."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mi,{children:"m"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"m"})]})})]})," is a sample number where ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"m"}),(0,t.jsx)(a.mo,{children:"\u2264"}),(0,t.jsx)(a.mi,{children:"n"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"m \\le n"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"\u2264"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})]})]}),"."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mi,{children:"L"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"L"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"L"})]})})]})," is the listener characteristics."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"f"}),(0,t.jsx)(a.mo,{stretchy:"false",children:"("}),(0,t.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"f()"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(a.span,{className:"mopen",children:"("}),(0,t.jsx)(a.span,{className:"mclose",children:")"})]})})]})," is the hearing aid function. There is no limitation on how long this takes to compute."]}),"\n",(0,t.jsxs)(a.li,{children:["You can use multiple microphones; only a single input signal ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsx)(a.mrow,{children:(0,t.jsx)(a.mi,{children:"x"})}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," is shown here just for simplicity."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Here it is illustrated as a diagram."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"latency diagram",src:s(99627).A+"",width:"573",height:"296"})}),"\n",(0,t.jsx)(a.p,{children:"Figure. Example of how the limit of 5 ms is applied to a hearing aid input and output signal.\nWe have a chosen a limit of 5 ms because in a real hearing aid there will be other sources of delay (e.g., analogue-to-digital, digital-to-analogue conversion)."}),"\n",(0,t.jsx)(a.h2,{id:"why-is-there-no-limitation-of-how-long-f-takes-to-compute",children:"Why is there no limitation of how long f() takes to compute?"}),"\n",(0,t.jsx)(a.p,{children:"We\u2019re trying to foster new approaches to hearing aid processing and decided that at this stage we will drive more innovation if we don\u2019t restrict computation time for round one. Such restrictions will be considered in future rounds."}),"\n",(0,t.jsx)(a.h2,{id:"why-havent-you-talked-about-latency",children:"Why haven\u2019t you talked about latency?"}),"\n",(0,t.jsx)(a.p,{children:"In discussions, it is apparent that this term is used in different ways by different people, so to avoid confusion we\u2019re not using it!"}),"\n",(0,t.jsx)(a.h2,{id:"do-algorithms-have-to-be-real-time",children:"Do algorithms have to be real-time?"}),"\n",(0,t.jsx)(a.p,{children:"The above limitations mean that the algorithms could in theory be made real-time if a powerful enough computer was available, but your entry can take as long as it needs to process the signals."})]})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},99627:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/latency_diagram-1-528b50363f33be2b84c6ffd17de1df2f.png"},28453:(e,a,s)=>{s.d(a,{R:()=>l,x:()=>r});var n=s(96540);const t={},i=n.createContext(t);function l(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:a},e.children)}},96342:e=>{e.exports=JSON.parse('{"permalink":"/blog/Latency, computation time and real-time operation","source":"@site/blog/2021-03-05-latency-computation-time-and-real-time-operation.mdx","title":"Latency, computation time and real-time operation","description":"An explanation of the time and computational limits for the first round of the enhancement challenge.","date":"2021-03-05T00:00:00.000Z","tags":[{"inline":true,"label":"challenge","permalink":"/blog/tags/challenge"},{"inline":true,"label":"computation","permalink":"/blog/tags/computation"},{"inline":true,"label":"enhancement","permalink":"/blog/tags/enhancement"},{"inline":true,"label":"latency","permalink":"/blog/tags/latency"},{"inline":true,"label":"real-time","permalink":"/blog/tags/real-time"}],"readingTime":2.125,"hasTruncateMarker":true,"authors":[{"name":"Trevor Cox","title":"Clarity Team Member","url":"http://trevorcox.me/trevor-cox","email":"clarity-group@sheffield.ac.uk","socials":{"github":"https://github.com/TrevorJCox"},"imageURL":"https://avatars.githubusercontent.com/trevorjcox","key":"trevorcox","page":null}],"frontMatter":{"slug":"Latency, computation time and real-time operation","title":"Latency, computation time and real-time operation","authors":"trevorcox","tags":["challenge","computation","enhancement","latency","real-time"]},"unlisted":false,"prevItem":{"title":"Baseline speech intelligibility model in round one","permalink":"/blog/baseline"},"nextItem":{"title":"Clarity Challenge pre-announcement","permalink":"/blog/Clarity Challenge pre-announcement"}}')}}]);
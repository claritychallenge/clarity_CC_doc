"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[5021],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),f=i,d=h["".concat(l,".").concat(f)]||h[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7001:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=n(4996),c=(n(3172),["components"]),l={id:"cec2_intro",title:"The 2nd Clarity Enhancement Challenge",sidebar_label:"CEC2 Introduction",sidebar_position:1},s=void 0,u={unversionedId:"cec2/cec2_intro",id:"cec2/cec2_intro",title:"The 2nd Clarity Enhancement Challenge",description:"\x3c!--",source:"@site/docs/cec2/cec2_intro.md",sourceDirName:"cec2",slug:"/cec2/cec2_intro",permalink:"/docs/cec2/cec2_intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cec2_intro",title:"The 2nd Clarity Enhancement Challenge",sidebar_label:"CEC2 Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Download the data",permalink:"/docs/cec2/cec2_download"}},p={},h=[{value:"Overview of challenge",id:"overview-of-challenge",level:2}],f={toc:h};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"CEC2 Registration now open! ",(0,o.kt)("a",{parentName:"li",href:"/docs/cec2/taking_part/cec2_registration"},"Register Now"),". "),(0,o.kt)("li",{parentName:"ul"},"The Clarity ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/claritychallenge/clarity"},"GitHub repository")," now includes the ",(0,o.kt)("a",{parentName:"li",href:"/docs/cec2/software/cec2_baseline"},"CEC2 baseline system"),"."))),(0,o.kt)("p",null,"This second Clarity Enhancement Challenge (CEC2) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them. A major reason for low uptake and use is the perception that hearing aids perform poorly."),(0,o.kt)("h2",{id:"overview-of-challenge"},"Overview of challenge"),(0,o.kt)("p",null,"We want you to improve speech in the presence of background noise - see ",(0,o.kt)("a",{parentName:"p",href:"#fig1"},"Figure 1"),". On the left there is a person with a quantified hearing loss. They are listening to speech from the target talker on the right. They are both in a living room. There is interfering noise from a number of sources (TV and washing machine in this case). The speech and noise is sensed by microphones on the hearing aids of the listener. Your task is to take these microphone feeds and the listener\u2019s hearing characteristics, to produce signals where the speech is more intelligible. We will evaluate the success of your processing using an objective speech intelligibility metric. Some entrants will also be evaluated by a panel of listeners with a hearing impairment."),(0,o.kt)("figure",{id:"fig1"},(0,o.kt)("img",{src:(0,a.Z)("/img/CEC2/scenario.png")}),(0,o.kt)("figcaption",null,"Figure 1. The scenario involves one talker, a listener who rotates their head, and at least two common sources of unwanted sound.")),(0,o.kt)("p",null,"The scenario has been made more difficult than the first ",(0,o.kt)("a",{parentName:"p",href:"/docs/cec1/cec1_intro"},"Clarity Enhancement Challenge")," by having:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More noise sources"),(0,o.kt)("li",{parentName:"ul"},"More varied noise sources (speech, music, appliances)"),(0,o.kt)("li",{parentName:"ul"},"The listener turns their head during the talking."),(0,o.kt)("li",{parentName:"ul"},"Less predictable target onset timing.")),(0,o.kt)("p",null,"For more details use the contents pane on the left to navigate the CEC2 site."))}d.isMDXComponent=!0}}]);
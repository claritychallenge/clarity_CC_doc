"use strict";(self.webpackChunkclarity_cec_1=self.webpackChunkclarity_cec_1||[]).push([[7918],{37684:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(87462),l=a(67294),r=a(86010),s=a(53438),c=a(48596),i=a(35281),o=a(39960),d=a(44996),m=a(95999);function u(e){return l.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){let{children:t,href:a,isLast:n}=e;const r="breadcrumbs__link";return n?l.createElement("span",{className:r,itemProp:"name"},t):a?l.createElement(o.Z,{className:r,href:a,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function p(e){let{children:t,active:a,index:s,addMicrodata:c}=e;return l.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,l.createElement("meta",{itemProp:"position",content:String(s+1)}))}function h(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},l.createElement(u,{className:v.breadcrumbHomeIcon})))}function g(){const e=(0,s.s1)(),t=(0,c.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map(((t,a)=>{const n=a===e.length-1;return l.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},l.createElement(b,{href:t.href,isLast:n},t.label))})))):null}},91799:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var n=a(67294),l=a(86010),r=a(1944),s=a(87524),c=a(35281),i=a(80049),o=a(23120),d=a(44364),m=a(95999);function u(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function v(e){let{lastUpdatedBy:t}=e;return n.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(u,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(v,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var p=a(66114),h=a(71526);const g="lastUpdated_vbeJ";function E(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(h.Z,e)))}function f(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(p.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",g)},(a||r)&&n.createElement(b,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function L(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:i,lastUpdatedBy:o,tags:d}=a,m=d.length>0,u=!!(r||s||o);return m||u?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(E,{tags:d}),u&&n.createElement(f,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var N=a(39407),Z=a(86043),_=a(93743),k=a(87462);const C="tocCollapsibleButton_TO0P",T="tocCollapsibleButtonExpanded_MG3E";function H(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,k.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",C,!t&&T,a.className)}),n.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const x="tocCollapsible_ETCw",U="tocCollapsibleContent_vkbj",y="tocCollapsibleExpanded_sAul";function A(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:i}=(0,Z.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(x,!c&&y,a)},n.createElement(H,{collapsed:c,onClick:i}),n.createElement(Z.z,{lazy:!0,className:U,collapsed:c},n.createElement(_.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var w=a(92503),I=a(37684),M=a(93548);const B="docItemContainer_Adtb",O="docItemCol_GujU",V="tocMobile_aoJ5";function S(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:c}=a,{keywords:i}=s,{description:o,title:d}=l,m=null!=(t=c.image)?t:s.image;return n.createElement(r.d,{title:d,description:o,keywords:i,image:m})}function P(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:m,hide_table_of_contents:u,toc_min_heading_level:v,toc_max_heading_level:b}=r,{title:p}=a,h=!m&&void 0===t.contentTitle,g=(0,s.i)(),E=!u&&t.toc&&t.toc.length>0,f=E&&("desktop"===g||"ssr"===g);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!u&&O)},n.createElement(o.Z,null),n.createElement("div",{className:B},n.createElement("article",null,n.createElement(I.Z,null),n.createElement(d.Z,null),E&&n.createElement(A,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:(0,l.Z)(c.k.docs.docTocMobile,V)}),n.createElement("div",{className:(0,l.Z)(c.k.docs.docMarkdown,"markdown")},h&&n.createElement("header",null,n.createElement(w.Z,{as:"h1"},p)),n.createElement(M.Z,null,n.createElement(t,null))),n.createElement(L,e)),n.createElement(i.Z,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:b,className:c.k.docs.docTocDesktop})))}function R(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(r.FG,{className:t},n.createElement(S,e),n.createElement(P,e))}},80049:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(95999),s=a(32244);function c(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(s.Z,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(s.Z,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010),r=a(95999),s=a(74477),c=a(35281);function i(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},23120:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(86010),r=a(52263),s=a(39960),c=a(95999),i=a(94104),o=a(60373),d=a(35281),m=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,r.Z)(),{pluginId:c}=(0,i.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,o.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:p}=(0,i.Jo)(c),h=null!=u?u:(g=p).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,l.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:p.label,to:h.path,onClick:()=>m(p.name)})))}function h(e){let{className:t}=e;const a=(0,m.E)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}},66114:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(95999),r=a(35281),s=a(87462),c=a(86010);const i="iconEdit_eYIM";function o(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010),r=a(39960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:c}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},39407:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),r=a(86010),s=a(93743);const c="tableOfContents_bqdL";function i(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),l=a(67294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var c=a(86668);function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e,t){var a;let{anchorTopOffset:n}=t;const l=e.find((e=>i(e).top>=n));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(a=e[e.length-1])?a:null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),a=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),i=o(c,{anchorTopOffset:a.current}),d=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const v=l.memo(u);function b(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const p=(0,c.L)(),h=null!=d?d:p.tableOfContents.minHeadingLevel,g=null!=u?u:p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:h,maxHeadingLevel:g});return m((0,l.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:g}}),[i,o,h,g])),l.createElement(v,(0,n.Z)({toc:E,className:a,linkClassName:i},b))}},13008:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function o(e){let{permalink:t,label:a,count:o}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,o?i:c)},a,o&&n.createElement("span",null,o))}},71526:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010),r=a(95999),s=a(13008);const c="tags_jXut",i="tag_QGVx";function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(s.Z,{label:t,permalink:a}))}))))}}}]);
"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[7235],{57416:(t,e,o)=>{o.d(e,{A:()=>w});var i=o(98587),n=o(58168),a=o(96540),r=o(34164),s=o(64111),h=o(771),l=o(11848);const d=t=>{let e;return e=t<1?5.11916*t**2:4.5*Math.log(t+1)+2,(e/100).toFixed(2)};var c=o(31509),m=o(27553),g=o(17245);function u(t){return(0,g.Ay)("MuiPaper",t)}(0,m.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=o(74848);const p=["className","component","elevation","square","variant"],f=(0,l.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],!o.square&&e.rounded,"elevation"===o.variant&&e[`elevation${o.elevation}`]]}})((({theme:t,ownerState:e})=>{var o;return(0,n.A)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},"outlined"===e.variant&&{border:`1px solid ${(t.vars||t).palette.divider}`},"elevation"===e.variant&&(0,n.A)({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:`linear-gradient(${(0,h.X4)("#fff",d(e.elevation))}, ${(0,h.X4)("#fff",d(e.elevation))})`},t.vars&&{backgroundImage:null==(o=t.vars.overlays)?void 0:o[e.elevation]}))})),w=a.forwardRef((function(t,e){const o=(0,c.A)({props:t,name:"MuiPaper"}),{className:a,component:h="div",elevation:l=1,square:d=!1,variant:m="elevation"}=o,g=(0,i.A)(o,p),w=(0,n.A)({},o,{component:h,elevation:l,square:d,variant:m}),E=(t=>{const{square:e,elevation:o,variant:i,classes:n}=t,a={root:["root",i,!e&&"rounded","elevation"===i&&`elevation${o}`]};return(0,s.A)(a,u,n)})(w);return(0,v.jsx)(f,(0,n.A)({as:h,ownerState:w,className:(0,r.A)(E.root,a),ref:e},g))}))},47859:(t,e,o)=>{o.d(e,{A:()=>S});var i=o(98587),n=o(58168),a=o(96540),r=o(34164),s=o(39599),h=o(64111),l=o(11848),d=o(31509),c=o(28466),m=o(27553),g=o(17245);function u(t){return(0,g.Ay)("MuiTypography",t)}(0,m.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=o(74848);const p=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.variant&&e[o.variant],"inherit"!==o.align&&e[`align${(0,c.A)(o.align)}`],o.noWrap&&e.noWrap,o.gutterBottom&&e.gutterBottom,o.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.A)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},E={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=a.forwardRef((function(t,e){const o=(0,d.A)({props:t,name:"MuiTypography"}),a=(t=>E[t]||t)(o.color),l=(0,s.A)((0,n.A)({},o,{color:a})),{align:m="inherit",className:g,component:S,gutterBottom:b=!1,noWrap:y=!1,paragraph:L=!1,variant:z="body1",variantMapping:A=w}=l,M=(0,i.A)(l,p),I=(0,n.A)({},l,{align:m,color:a,className:g,component:S,gutterBottom:b,noWrap:y,paragraph:L,variant:z,variantMapping:A}),W=S||(L?"p":A[z]||w[z])||"span",C=(t=>{const{align:e,gutterBottom:o,noWrap:i,paragraph:n,variant:a,classes:r}=t,s={root:["root",a,"inherit"!==t.align&&`align${(0,c.A)(e)}`,o&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,h.A)(s,u,r)})(I);return(0,v.jsx)(f,(0,n.A)({as:W,ref:e,ownerState:I,className:(0,r.A)(C.root,g)},M))}))},26393:()=>{},34028:(t,e,o)=>{o.d(e,{A:()=>b});var i=o(96540),n=o(40961);const a=(t,e)=>t===e?.tagName?.toUpperCase?.(),r=t=>a("DIV",t)||a("SPAN",t),s=t=>a("IMG",t),h=t=>t.complete&&0!==t.naturalHeight,l=t=>a("SVG",t),d=({height:t,offset:e,width:o})=>Math.min((window.innerWidth-2*e)/o,(window.innerHeight-2*e)/t),c=({containerHeight:t,containerWidth:e,hasScalableSrc:o,offset:i,targetHeight:n,targetWidth:a})=>t&&e?!o&&n&&a?(({containerHeight:t,containerWidth:e,offset:o,targetHeight:i,targetWidth:n})=>{const a=d({height:i,offset:o,width:n}),r=n>i?n/e:i/t;return a>1?r:a*r})({containerHeight:t,containerWidth:e,offset:i,targetHeight:n,targetWidth:a}):d({height:t,offset:i,width:e}):1,m=/url(?:\(['"]?)(.*?)(?:['"]?\))/,g=t=>{if(t){if(s(t))return t.currentSrc;if(r(t)){const e=window.getComputedStyle(t).backgroundImage;if(e)return m.exec(e)?.[1]}}},u=({position:t,relativeNum:e})=>{const o=parseFloat(t);return t.endsWith("%")?e*o/100:o},v=/\.svg$/i,p=({hasZoomImg:t,imgSrc:e,isSvg:o,isZoomed:i,loadedImgEl:n,offset:a,shouldRefresh:s,targetEl:h})=>{const l=o||"data:image/svg+xml"===e?.slice?.(0,18)||t||!(!e||!v.test(e)),d=h.getBoundingClientRect(),m=window.getComputedStyle(h),g=null!=n&&r(h),p=null!=n&&!g,f=(({containerHeight:t,containerLeft:e,containerTop:o,containerWidth:i,hasScalableSrc:n,offset:a,targetHeight:r,targetWidth:s})=>{const h=c({containerHeight:t,containerWidth:i,hasScalableSrc:n,offset:a,targetHeight:r,targetWidth:s});return{top:o,left:e,width:i*h,height:t*h,transform:`translate(0,0) scale(${1/h})`}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,offset:a,targetHeight:n?.naturalHeight??d.height,targetWidth:n?.naturalWidth??d.width}),w=p?(({containerHeight:t,containerLeft:e,containerTop:o,containerWidth:i,hasScalableSrc:n,objectFit:a,objectPosition:r,offset:s,targetHeight:h,targetWidth:l})=>{if("scale-down"===a&&(a=l<=i&&h<=t?"none":"contain"),"cover"===a||"contain"===a){const d=i/l,m=t/h,g="cover"===a?Math.max(d,m):Math.min(d,m),[v="50%",p="50%"]=r.split(" "),f=u({position:v,relativeNum:i-l*g}),w=u({position:p,relativeNum:t-h*g}),E=c({containerHeight:h*g,containerWidth:l*g,hasScalableSrc:n,offset:s,targetHeight:h,targetWidth:l});return{top:o+w,left:e+f,width:l*g*E,height:h*g*E,transform:`translate(0,0) scale(${1/E})`}}if("none"===a){const[a="50%",d="50%"]=r.split(" "),m=u({position:a,relativeNum:i-l}),g=u({position:d,relativeNum:t-h}),v=c({containerHeight:h,containerWidth:l,hasScalableSrc:n,offset:s,targetHeight:h,targetWidth:l});return{top:o+g,left:e+m,width:l*v,height:h*v,transform:`translate(0,0) scale(${1/v})`}}if("fill"===a){const e=i/l,o=t/h,a=Math.max(e,o),r=c({containerHeight:h*a,containerWidth:l*a,hasScalableSrc:n,offset:s,targetHeight:h,targetWidth:l});return{width:i*r,height:t*r,transform:`translate(0,0) scale(${1/r})`}}return{}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,objectFit:m.objectFit,objectPosition:m.objectPosition,offset:a,targetHeight:n.naturalHeight,targetWidth:n.naturalWidth}):void 0,E=g?(({backgroundPosition:t,backgroundSize:e,containerHeight:o,containerLeft:i,containerTop:n,containerWidth:a,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l})=>{if("cover"===e||"contain"===e){const d=a/l,m=o/h,g="cover"===e?Math.max(d,m):Math.min(d,m),[v="50%",p="50%"]=t.split(" "),f=u({position:v,relativeNum:a-l*g}),w=u({position:p,relativeNum:o-h*g}),E=c({containerHeight:h*g,containerWidth:l*g,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l});return{top:n+w,left:i+f,width:l*g*E,height:h*g*E,transform:`translate(0,0) scale(${1/E})`}}if("auto"===e){const[e="50%",d="50%"]=t.split(" "),m=u({position:e,relativeNum:a-l}),g=u({position:d,relativeNum:o-h}),v=c({containerHeight:h,containerWidth:l,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l});return{top:n+g,left:i+m,width:l*v,height:h*v,transform:`translate(0,0) scale(${1/v})`}}{const[d="50%",m="50%"]=e.split(" "),g=u({position:d,relativeNum:a})/l,v=u({position:m,relativeNum:o})/h,p=Math.min(g,v),[f="50%",w="50%"]=t.split(" "),E=u({position:f,relativeNum:a-l*p}),S=u({position:w,relativeNum:o-h*p}),b=c({containerHeight:h*p,containerWidth:l*p,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l});return{top:n+S,left:i+E,width:l*p*b,height:h*p*b,transform:`translate(0,0) scale(${1/b})`}}})({backgroundPosition:m.backgroundPosition,backgroundSize:m.backgroundSize,containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,offset:a,targetHeight:n.naturalHeight,targetWidth:n.naturalWidth}):void 0,S=Object.assign({},f,w,E);if(i){const t=window.innerWidth/2,e=window.innerHeight/2,o=t-(parseFloat(String(S.left||0))+parseFloat(String(S.width||0))/2),i=e-(parseFloat(String(S.top||0))+parseFloat(String(S.height||0))/2);s&&(S.transitionDuration="0.01ms"),S.transform=`translate(${o}px,${i}px) scale(1)`}return S},f=["img","svg",'[role="img"]',"[data-zoom]"].map((t=>`${t}:not([aria-hidden="true"])`)).join(","),w={overflow:"",width:""};function E(t){return i.createElement(S,{...t})}class S extends i.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1},this.refContent=i.createRef(),this.refDialog=i.createRef(),this.refModalContent=i.createRef(),this.refModalImg=i.createRef(),this.refWrap=i.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=w,this.styleModalImg={},this.getDialogContainer=()=>{let t=document.querySelector("[data-rmiz-portal]");return null==t&&(t=document.createElement("div"),t.setAttribute("data-rmiz-portal",""),document.body.appendChild(t)),t},this.setId=()=>{const t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{const t=this.refContent.current;t&&(this.imgEl=t.querySelector(f),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver((t=>{const e=t[0];e?.target&&(this.imgEl=e.target,this.setState({}))})),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{const{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{const{imgEl:t}=this,e=g(t);if(!e)return;const o=new Image;s(t)&&(o.sizes=t.sizes,o.srcset=t.srcset),o.src=e;const i=()=>{this.setState({loadedImgEl:o})};o.decode().then(i).catch((()=>{h(o)?i():o.onload=i}))},this.handleZoom=()=>{this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogCancel=t=>{t.preventDefault()},this.handleDialogClick=t=>{t.target!==this.refModalContent.current&&t.target!==this.refModalImg.current||this.handleUnzoom()},this.handleKeyDown=t=>{"Escape"!==t.key&&27!==t.keyCode||(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleWheel=t=>{t.ctrlKey||(t.stopPropagation(),queueMicrotask((()=>{this.handleUnzoom()})))},this.handleTouchStart=t=>{t.touches.length>1?this.isScaling=!0:1===t.changedTouches.length&&t.changedTouches[0]&&(this.touchYStart=t.changedTouches[0].screenY)},this.handleTouchMove=t=>{const e=window.visualViewport?.scale??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&e<=1&&null!=this.touchYStart&&t.changedTouches[0]){this.touchYEnd=t.changedTouches[0].screenY;const e=Math.max(this.touchYStart,this.touchYEnd),o=Math.min(this.touchYStart,this.touchYEnd);Math.abs(e-o)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.setState({modalState:"LOADING"}),this.loadZoomImg(),window.addEventListener("wheel",this.handleWheel,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleZoomEnd,{once:!0})},this.handleZoomEnd=()=>{setTimeout((()=>{this.setState({modalState:"LOADED"}),window.addEventListener("resize",this.handleResize,{passive:!0})}),0)},this.unzoom=()=>{this.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleUnzoomEnd,{once:!0})},this.handleUnzoomEnd=()=>{setTimeout((()=>{window.removeEventListener("resize",this.handleResize),this.setState({shouldRefresh:!1,modalState:"UNLOADED"}),this.refDialog.current?.close?.(),this.bodyScrollEnable()}),0)},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const t=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${t}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=w},this.loadZoomImg=()=>{const{props:{zoomImg:t}}=this,e=t?.src;if(e){const o=new Image;o.sizes=t?.sizes??"",o.srcset=t?.srcSet??"",o.src=e;const i=()=>{this.setState({isZoomImgLoaded:!0})};o.decode().then(i).catch((()=>{h(o)?i():o.onload=i}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:t,refModalImg:e,styleModalImg:o}=this;if(l(t)){const i=document.createElement("div");i.innerHTML=t.outerHTML,i.querySelectorAll("mask[id]").forEach((t=>{const e=t.id+"-zoom";i.querySelectorAll(`[mask="url(#${t.id})"]`).forEach((t=>{t.setAttribute("mask",`url(#${e})`)})),t.id=e}));const n=i.firstChild;n.style.width=`${o.width||0}px`,n.style.height=`${o.height||0}px`,n.addEventListener("click",this.handleUnzoom),e.current?.firstChild?.remove?.(),e.current?.appendChild?.(n)}}}render(){const{handleDialogCancel:t,handleDialogClick:e,handleUnzoom:o,handleZoom:a,imgEl:h,props:{a11yNameButtonUnzoom:d,a11yNameButtonZoom:c,children:m,classDialog:u,IconUnzoom:v,IconZoom:f,isZoomed:w,wrapElement:E,ZoomContent:S,zoomImg:b,zoomMargin:y},refContent:L,refDialog:z,refModalContent:A,refModalImg:M,refWrap:I,state:{id:W,isZoomImgLoaded:C,loadedImgEl:T,modalState:D,shouldRefresh:H}}=this,N=`rmiz-modal-${W}`,k=`rmiz-modal-img-${W}`,U=r(h),Z=s(h),x=l(h),R=(t=>{if(t)return s(t)?t.alt??void 0:t.getAttribute("aria-label")??void 0})(h),$=g(h),B=Z?h.sizes:void 0,O=Z?h.srcset:void 0,P=!!b?.src,Y=h&&(T||x)&&"none"!==window.getComputedStyle(h).display,F=R?`${c}: ${R}`:c,q="LOADING"===D||"LOADED"===D,j=Y?"found":"not-found",G="UNLOADED"===D||"UNLOADING"===D?"hidden":"visible",K={visibility:"UNLOADED"===D?"visible":"hidden"},V=(t=>{if(!t)return{};if(l(t)){const e=t.parentElement,o=t.getBoundingClientRect();if(e){const t=e.getBoundingClientRect();return{height:o.height,left:t.left-o.left,top:t.top-o.top,width:o.width}}return{height:o.height,left:o.left,width:o.width,top:o.top}}return{height:t.offsetHeight,left:t.offsetLeft,width:t.offsetWidth,top:t.offsetTop}})(h);this.styleModalImg=Y?p({hasZoomImg:P,imgSrc:$,isSvg:x,isZoomed:w&&q,loadedImgEl:T,offset:y,shouldRefresh:H,targetEl:h}):{};let _=null;if(Y){const t=Z||U?i.createElement("img",{alt:R,sizes:B,src:$,srcSet:O,...C&&"LOADED"===D?b:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:k,ref:M,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):x?i.createElement("div",{"data-rmiz-modal-img":!0,ref:M,style:this.styleModalImg}):null,e=i.createElement("button",{"aria-label":d,"data-rmiz-btn-unzoom":"",onClick:o,type:"button"},i.createElement(v,null));_=S?i.createElement(S,{buttonUnzoom:e,modalState:D,img:t,onUnzoom:o}):i.createElement(i.Fragment,null,t,e)}return i.createElement(E,{"aria-owns":N,"data-rmiz":"",ref:I},i.createElement(E,{"data-rmiz-content":j,ref:L,style:K},m),Y&&i.createElement(E,{"data-rmiz-ghost":"",style:V},i.createElement("button",{"aria-label":F,"data-rmiz-btn-zoom":"",onClick:a,type:"button"},i.createElement(f,null))),Y&&n.createPortal(i.createElement("dialog",{"aria-labelledby":k,"aria-modal":"true",className:u,"data-rmiz-modal":"",id:N,onClick:e,onClose:o,onCancel:t,ref:z,role:"dialog"},i.createElement("div",{"data-rmiz-modal-overlay":G}),i.createElement("div",{"data-rmiz-modal-content":"",ref:A},_)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleZoomEnd),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(t){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}function b(t){const[e,o]=i.useState(!1);return i.createElement(E,{...t,isZoomed:e,onZoomChange:o})}S.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:function(){return i.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return i.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0}}}]);
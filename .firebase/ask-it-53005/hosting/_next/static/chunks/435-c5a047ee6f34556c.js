"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{2988:function(e,t,r){r.d(t,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}},8149:function(e,t,r){r.d(t,{M:function(){return n}});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}},976:function(e,t,r){r.d(t,{B:function(){return a}});var n=r(2265),o=r(8324),l=r(1584),i=r(1538);function a(e){let t=e+"CollectionProvider",[r,a]=(0,o.b)(t),[s,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,a=c(u,r),s=(0,l.e)(t,a.collectionRef);return n.createElement(i.g7,{ref:s},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),l=n.useRef(new Map).current;return n.createElement(s,{scope:t,itemMap:l,collectionRef:o},r)},Slot:d,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:o,...a}=e,s=n.useRef(null),u=(0,l.e)(t,s),d=c(f,r);return n.useEffect(()=>(d.itemMap.set(s,{ref:s,...a}),()=>void d.itemMap.delete(s))),n.createElement(i.g7,{[p]:"",ref:u},o)})},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},1584:function(e,t,r){r.d(t,{F:function(){return o},e:function(){return l}});var n=r(2265);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,n.useCallback)(o(...e),e)}},8324:function(e,t,r){r.d(t,{b:function(){return o}});var n=r(2265);function o(e,t=[]){let r=[],o=()=>{let t=r.map(e=>(0,n.createContext)(e));return function(r){let o=(null==r?void 0:r[e])||t;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let l=(0,n.createContext)(o),i=r.length;function a(t){let{scope:r,children:o,...a}=t,s=(null==r?void 0:r[e][i])||l,c=(0,n.useMemo)(()=>a,Object.values(a));return(0,n.createElement)(s.Provider,{value:c},o)}return r=[...r,o],a.displayName=t+"Provider",[a,function(r,a){let s=(null==a?void 0:a[e][i])||l,c=(0,n.useContext)(s);if(c)return c;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return(0,n.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}},3938:function(e,t,r){let n;r.d(t,{I0:function(){return v},XB:function(){return f},fC:function(){return h}});var o=r(2988),l=r(2265),i=r(8149),a=r(5171),s=r(1584),c=r(5137);let u="dismissableLayer.update",d=(0,l.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,l.forwardRef)((e,t)=>{var r;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:v,onInteractOutside:g,onDismiss:y,...w}=e,x=(0,l.useContext)(d),[E,k]=(0,l.useState)(null),C=null!==(r=null==E?void 0:E.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,S]=(0,l.useState)({}),N=(0,s.e)(t,e=>k(e)),T=Array.from(x.layers),[z]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),O=T.indexOf(z),P=E?T.indexOf(E):-1,M=x.layersWithOutsidePointerEventsDisabled.size>0,j=P>=O,L=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,c.W)(e),n=(0,l.useRef)(!1),o=(0,l.useRef)(()=>{});return(0,l.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function l(){b("dismissableLayer.pointerDownOutside",r,n,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);n.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,r=[...x.branches].some(e=>e.contains(t));!j||r||(null==h||h(e),null==g||g(e),e.defaultPrevented||null==y||y())},C),R=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,c.W)(e),n=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{let e=e=>{e.target&&!n.current&&b("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==v||v(e),null==g||g(e),e.defaultPrevented||null==y||y())},C);return!function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,c.W)(e);(0,l.useEffect)(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[r,t])}(e=>{P!==x.layers.size-1||(null==p||p(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},C),(0,l.useEffect)(()=>{if(E)return f&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(n=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(E)),x.layers.add(E),m(),()=>{f&&1===x.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=n)}},[E,C,f,x]),(0,l.useEffect)(()=>()=>{E&&(x.layers.delete(E),x.layersWithOutsidePointerEventsDisabled.delete(E),m())},[E,x]),(0,l.useEffect)(()=>{let e=()=>S({});return document.addEventListener(u,e),()=>document.removeEventListener(u,e)},[]),(0,l.createElement)(a.WV.div,(0,o.Z)({},w,{ref:N,style:{pointerEvents:M?j?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,R.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,L.onPointerDownCapture)}))}),p=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d),n=(0,l.useRef)(null),i=(0,s.e)(t,n);return(0,l.useEffect)(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,l.createElement)(a.WV.div,(0,o.Z)({},e,{ref:i}))});function m(){let e=new CustomEvent(u);document.dispatchEvent(e)}function b(e,t,r,{discrete:n}){let o=r.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,a.jH)(o,l):o.dispatchEvent(l)}let h=f,v=p},6935:function(e,t,r){r.d(t,{h:function(){return a}});var n=r(2988),o=r(2265),l=r(4887),i=r(5171);let a=(0,o.forwardRef)((e,t)=>{var r;let{container:a=null==globalThis?void 0:null===(r=globalThis.document)||void 0===r?void 0:r.body,...s}=e;return a?l.createPortal((0,o.createElement)(i.WV.div,(0,n.Z)({},s,{ref:t})),a):null})},1383:function(e,t,r){r.d(t,{z:function(){return a}});var n=r(2265),o=r(4887),l=r(1584),i=r(1336);let a=e=>{let{present:t,children:r}=e,a=function(e){var t,r;let[l,a]=(0,n.useState)(),c=(0,n.useRef)({}),u=(0,n.useRef)(e),d=(0,n.useRef)("none"),[f,p]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,n.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return(0,n.useEffect)(()=>{let e=s(c.current);d.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let t=c.current,r=u.current;if(r!==e){let n=d.current,o=s(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):r&&n!==o?p("ANIMATION_OUT"):p("UNMOUNT"),u.current=e}},[e,p]),(0,i.b)(()=>{if(l){let e=e=>{let t=s(c.current).includes(e.animationName);e.target===l&&t&&(0,o.flushSync)(()=>p("ANIMATION_END"))},t=e=>{e.target===l&&(d.current=s(c.current))};return l.addEventListener("animationstart",t),l.addEventListener("animationcancel",e),l.addEventListener("animationend",e),()=>{l.removeEventListener("animationstart",t),l.removeEventListener("animationcancel",e),l.removeEventListener("animationend",e)}}p("ANIMATION_END")},[l,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,n.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),a(e)},[])}}(t),c="function"==typeof r?r({present:a.isPresent}):n.Children.only(r),u=(0,l.e)(a.ref,c.ref);return"function"==typeof r||a.isPresent?(0,n.cloneElement)(c,{ref:u}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},5171:function(e,t,r){r.d(t,{WV:function(){return a},jH:function(){return s}});var n=r(2988),o=r(2265),l=r(4887),i=r(1538);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:l,...a}=e,s=l?i.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(s,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function s(e,t){e&&(0,l.flushSync)(()=>e.dispatchEvent(t))}},1538:function(e,t,r){r.d(t,{g7:function(){return i}});var n=r(2988),o=r(2265),l=r(1584);let i=(0,o.forwardRef)((e,t)=>{let{children:r,...l}=e,i=o.Children.toArray(r),s=i.find(c);if(s){let e=s.props.children,r=i.map(t=>t!==s?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(a,(0,n.Z)({},l,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(a,(0,n.Z)({},l,{ref:t}),r)});i.displayName="Slot";let a=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],l=t[n];/^on[A-Z]/.test(n)?o&&l?r[n]=(...e)=>{l(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...l}:"className"===n&&(r[n]=[o,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,l.F)(t,r.ref):r.ref}):o.Children.count(r)>1?o.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function c(e){return(0,o.isValidElement)(e)&&e.type===s}},5137:function(e,t,r){r.d(t,{W:function(){return o}});var n=r(2265);function o(e){let t=(0,n.useRef)(e);return(0,n.useEffect)(()=>{t.current=e}),(0,n.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}},1715:function(e,t,r){r.d(t,{T:function(){return l}});var n=r(2265),o=r(5137);function l({prop:e,defaultProp:t,onChange:r=()=>{}}){let[l,i]=function({defaultProp:e,onChange:t}){let r=(0,n.useState)(e),[l]=r,i=(0,n.useRef)(l),a=(0,o.W)(t);return(0,n.useEffect)(()=>{i.current!==l&&(a(l),i.current=l)},[l,i,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,s=a?e:l,c=(0,o.W)(r);return[s,(0,n.useCallback)(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&c(r)}else i(t)},[a,e,i,c])]}},1336:function(e,t,r){r.d(t,{b:function(){return o}});var n=r(2265);let o=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{}},2218:function(e,t,r){r.d(t,{j:function(){return l}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n},l=(e,t)=>r=>{var l;if((null==t?void 0:t.variants)==null)return o(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],o=null==a?void 0:a[e];if(null===t)return null;let l=n(t)||n(o);return i[e][l]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return o(e,s,null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...c}[t]):({...a,...c})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},4839:function(e,t,r){r.d(t,{W:function(){return n}});function n(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=t);return n}},9512:function(e,t,r){r.d(t,{F:function(){return c},f:function(){return u}});var n=r(2265),o=["light","dark"],l="(prefers-color-scheme: dark)",i="undefined"==typeof window,a=n.createContext(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(a))?e:s},u=e=>n.useContext(a)?e.children:n.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:c="theme",themes:u=d,defaultTheme:f=i?"system":"light",attribute:v="data-theme",value:g,children:y,nonce:w}=e,[x,E]=n.useState(()=>m(c,f)),[k,C]=n.useState(()=>m(c)),S=g?Object.values(g):u,N=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=h());let n=g?g[t]:t,l=r?b():null,a=document.documentElement;if("class"===v?(a.classList.remove(...S),n&&a.classList.add(n)):n?a.setAttribute(v,n):a.removeAttribute(v),s){let e=o.includes(f)?f:null,r=o.includes(t)?t:e;a.style.colorScheme=r}null==l||l()},[]),T=n.useCallback(e=>{let t="function"==typeof e?e(e):e;E(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),z=n.useCallback(e=>{C(h(e)),"system"===x&&i&&!t&&N("system")},[x,t]);n.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(z),z(e),()=>e.removeListener(z)},[z]),n.useEffect(()=>{let e=e=>{e.key===c&&T(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),n.useEffect(()=>{N(null!=t?t:x)},[t,x]);let O=n.useMemo(()=>({theme:x,setTheme:T,forcedTheme:t,resolvedTheme:"system"===x?k:x,themes:i?[...u,"system"]:u,systemTheme:i?k:void 0}),[x,T,t,k,i,u]);return n.createElement(a.Provider,{value:O},n.createElement(p,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:i,enableColorScheme:s,storageKey:c,themes:u,defaultTheme:f,attribute:v,value:g,children:y,attrs:S,nonce:w}),y)},p=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:i,enableSystem:a,enableColorScheme:s,defaultTheme:c,value:u,attrs:d,nonce:f}=e,p="system"===c,m="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),b=s?(o.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=u?u[e]:e,l=t?e+"|| ''":"'".concat(n,"'"),a="";return s&&r&&!t&&o.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||n?a+="c.add(".concat(l,")"):a+="null":n&&(a+="d[s](n,".concat(l,")")),a},v=t?"!function(){".concat(m).concat(h(t),"}()"):a?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(h("dark"),"}else{").concat(h("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(h(u?"x[e]":"e",!0),"}").concat(p?"":"else{"+h(c,!1,!1)+"}").concat(b,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(h(u?"x[e]":"e",!0),"}else{").concat(h(c,!1,!1),";}").concat(b,"}catch(t){}}();");return n.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:v}})}),m=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},b=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},6164:function(e,t,r){r.d(t,{m6:function(){return A}});let n=/^\[(.+)\]$/;function o(e,t){let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}let l=/\s+/;function i(){let e,t,r=0,n="";for(;r<arguments.length;)(e=arguments[r++])&&(t=function e(t){let r;if("string"==typeof t)return t;let n="";for(let o=0;o<t.length;o++)t[o]&&(r=e(t[o]))&&(n&&(n+=" "),n+=r);return n}(e))&&(n&&(n+=" "),n+=t);return n}function a(e){let t=t=>t[e]||[];return t.isThemeGetter=!0,t}let s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),d=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,p=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,m=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,b=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function h(e){return g(e)||u.has(e)||c.test(e)}function v(e){return M(e,"length",j)}function g(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return M(e,"number",g)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&g(e.slice(0,-1))}function E(e){return s.test(e)}function k(e){return d.test(e)}let C=new Set(["length","size","percentage"]);function S(e){return M(e,C,L)}function N(e){return M(e,"position",L)}let T=new Set(["image","url"]);function z(e){return M(e,T,I)}function O(e){return M(e,"",R)}function P(){return!0}function M(e,t,r){let n=s.exec(e);return!!n&&(n[1]?"string"==typeof t?n[1]===t:t.has(n[1]):r(n[2]))}function j(e){return f.test(e)&&!p.test(e)}function L(){return!1}function R(e){return m.test(e)}function I(e){return b.test(e)}let A=function(e,...t){let r,a,s;let c=function(l){var i;return a=(r={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,n=new Map;function o(o,l){r.set(o,l),++t>e&&(t=0,n=r,r=new Map)}return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=n.get(e))?(o(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):o(e,t)}}}((i=t.reduce((e,t)=>t(e),e())).cacheSize),splitModifiers:function(e){let t=e.separator,r=1===t.length,n=t[0],o=t.length;return function(e){let l;let i=[],a=0,s=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===a){if(u===n&&(r||e.slice(c,c+o)===t)){i.push(e.slice(s,c)),s=c+o;continue}if("/"===u){l=c;continue}}"["===u?a++:"]"===u&&a--}let c=0===i.length?e:e.substring(s),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:l&&l>s?l-s:void 0}}}(i),...function(e){let t=function(e){var t;let{theme:r,prefix:n}=e,l={nextPart:new Map,validators:[]};return(t=Object.entries(e.classGroups),n?t.map(([e,t])=>[e,t.map(e=>"string"==typeof e?n+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[n+e,t])):e)]):t).forEach(([e,t])=>{(function e(t,r,n,l){t.forEach(t=>{if("string"==typeof t){(""===t?r:o(r,t)).classGroupId=n;return}if("function"==typeof t){if(t.isThemeGetter){e(t(l),r,n,l);return}r.validators.push({validator:t,classGroupId:n});return}Object.entries(t).forEach(([t,i])=>{e(i,o(r,t),n,l)})})})(t,l,e,r)}),l}(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:function(e){let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(t,r){if(0===t.length)return r.classGroupId;let n=t[0],o=r.nextPart.get(n),l=o?e(t.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let i=t.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId}(r,t)||function(e){if(n.test(e)){let t=n.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){let n=r[e]||[];return t&&l[e]?[...n,...l[e]]:n}}}(i)}).cache.get,s=r.cache.set,c=u,u(l)};function u(e){let t=a(e);if(t)return t;let n=function(e,t){let{splitModifiers:r,getClassGroupId:n,getConflictingClassGroupIds:o}=t,i=new Set;return e.trim().split(l).map(e=>{let{modifiers:t,hasImportantModifier:o,baseClassName:l,maybePostfixModifierPosition:i}=r(e),a=n(i?l.substring(0,i):l),s=!!i;if(!a){if(!i||!(a=n(l)))return{isTailwindClass:!1,originalClassName:e};s=!1}let c=(function(e){if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t})(t).join(":");return{isTailwindClass:!0,modifierId:o?c+"!":c,classGroupId:a,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:t,classGroupId:r,hasPostfixModifier:n}=e,l=t+r;return!i.has(l)&&(i.add(l),o(r,n).forEach(e=>i.add(t+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,r);return s(e,n),n}return function(){return c(i.apply(null,arguments))}}(function(){let e=a("colors"),t=a("spacing"),r=a("blur"),n=a("brightness"),o=a("borderColor"),l=a("borderRadius"),i=a("borderSpacing"),s=a("borderWidth"),c=a("contrast"),u=a("grayscale"),d=a("hueRotate"),f=a("invert"),p=a("gap"),m=a("gradientColorStops"),b=a("gradientColorStopPositions"),C=a("inset"),T=a("margin"),M=a("opacity"),j=a("padding"),L=a("saturate"),R=a("scale"),I=a("sepia"),A=a("skew"),W=a("space"),D=a("translate"),_=()=>["auto","contain","none"],$=()=>["auto","hidden","clip","visible","scroll"],G=()=>["auto",E,t],U=()=>[E,t],F=()=>["",h,v],V=()=>["auto",g,E],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",E],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[g,y],Q=()=>[g,E];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[h,v],blur:["none","",k,E],brightness:X(),borderColor:[e],borderRadius:["none","","full",k,E],borderSpacing:U(),borderWidth:F(),contrast:X(),grayscale:H(),hueRotate:Q(),invert:H(),gap:U(),gradientColorStops:[e],gradientColorStopPositions:[x,v],inset:G(),margin:G(),opacity:X(),padding:U(),saturate:X(),scale:X(),sepia:H(),skew:Q(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",E]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),E]}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,E]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",E]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",w,E]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",w,E]},E]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[w,E]},E]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",E]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",E]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[j]}],px:[{px:[j]}],py:[{py:[j]}],ps:[{ps:[j]}],pe:[{pe:[j]}],pt:[{pt:[j]}],pr:[{pr:[j]}],pb:[{pb:[j]}],pl:[{pl:[j]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",E,t]}],"min-w":[{"min-w":[E,t,"min","max","fit"]}],"max-w":[{"max-w":[E,t,"none","full","min","max","fit","prose",{screen:[k]},k]}],h:[{h:[E,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[E,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[E,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[E,t,"auto","min","max","fit"]}],"font-size":[{text:["base",k,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",E]}],"line-clamp":[{"line-clamp":["none",g,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",h,E]}],"list-image":[{"list-image":["none",E]}],"list-style-type":[{list:["none","disc","decimal",E]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[M]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",h,v]}],"underline-offset":[{"underline-offset":["auto",h,E]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",E]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",E]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[M]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),N]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",S]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},z]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[M]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[M]}],"divide-style":[{divide:B()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[h,E]}],"outline-w":[{outline:[h,v]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[M]}],"ring-offset-w":[{"ring-offset":[h,v]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",k,O]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[M]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",k,E]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[L]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[M]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",E]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",E]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",E]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[w,E]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",E]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",E]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",E]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[h,v,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);
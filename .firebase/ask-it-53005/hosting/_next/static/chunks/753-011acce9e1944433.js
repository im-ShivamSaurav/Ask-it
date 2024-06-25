"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{9753:function(e,t,r){r.d(t,{xC:function(){return ex},oM:function(){return eM}});var n,o,i=Symbol.for("immer-nothing"),u=Symbol.for("immer-draftable"),c=Symbol.for("immer-state");function a(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var l=Object.getPrototypeOf;function s(e){return!!e&&!!e[c]}function f(e){return!!e&&(d(e)||Array.isArray(e)||!!e[u]||!!e.constructor?.[u]||w(e)||v(e))}var p=Object.prototype.constructor.toString();function d(e){if(!e||"object"!=typeof e)return!1;let t=l(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===p}function y(e,t){0===h(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function h(e){let t=e[c];return t?t.type_:Array.isArray(e)?1:w(e)?2:v(e)?3:0}function _(e,t){return 2===h(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function b(e,t,r){let n=h(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function w(e){return e instanceof Map}function v(e){return e instanceof Set}function g(e){return e.copy_||e.base_}function m(e,t){if(w(e))return new Map(e);if(v(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=d(e);if(!0!==t&&("class_only"!==t||r)){let t=l(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[c];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(l(e),t)}}function O(e,t=!1){return j(e)||s(e)||!f(e)||(h(e)>1&&(e.set=e.add=e.clear=e.delete=E),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>O(t,!0))),e}function E(){a(2)}function j(e){return Object.isFrozen(e)}var P={};function S(e){let t=P[e];return t||a(0,e),t}function T(e,t){t&&(S("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function R(e){A(e),e.drafts_.forEach(C),e.drafts_=null}function A(e){e===o&&(o=e.parent_)}function x(e){return o={drafts_:[],parent_:o,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function C(e){let t=e[c];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function N(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[c].modified_&&(R(t),a(4)),f(e)&&(e=k(t,e),t.parent_||M(t,e)),t.patches_&&S("Patches").generateReplacementPatches_(r[c].base_,e,t.patches_,t.inversePatches_)):e=k(t,r,[]),R(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i?e:void 0}function k(e,t,r){if(j(t))return t;let n=t[c];if(!n)return y(t,(o,i)=>D(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return M(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),y(o,(o,u)=>D(e,n,t,o,u,r,i)),M(e,t,!1),r&&e.patches_&&S("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function D(e,t,r,n,o,i,u){if(s(o)){let u=k(e,o,i&&t&&3!==t.type_&&!_(t.assigned_,n)?i.concat(n):void 0);if(b(r,n,u),!s(u))return;e.canAutoFreeze_=!1}else u&&r.add(o);if(f(o)&&!j(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;k(e,o),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&M(e,o)}}function M(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&O(t,r)}var z={get(e,t){if(t===c)return e;let r=g(e);if(!_(r,t))return function(e,t,r){let n=F(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!f(n)?n:n===$(e.base_,t)?(K(e),e.copy_[t]=U(n,e)):n},has:(e,t)=>t in g(e),ownKeys:e=>Reflect.ownKeys(g(e)),set(e,t,r){let n=F(g(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=$(g(e),t),o=n?.[c];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||_(e.base_,t)))return!0;K(e),W(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==$(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,K(e),W(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=g(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){a(11)},getPrototypeOf:e=>l(e.base_),setPrototypeOf(){a(12)}},I={};function $(e,t){let r=e[c];return(r?g(r):e)[t]}function F(e,t){if(!(t in e))return;let r=l(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=l(r)}}function W(e){!e.modified_&&(e.modified_=!0,e.parent_&&W(e.parent_))}function K(e){e.copy_||(e.copy_=m(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function U(e,t){let r=w(e)?S("MapSet").proxyMap_(e,t):v(e)?S("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:o,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=n,u=z;r&&(i=[n],u=I);let{revoke:c,proxy:a}=Proxy.revocable(i,u);return n.draft_=a,n.revoke_=c,a}(e,t);return(t?t.scope_:o).drafts_.push(r),r}function L(e){return s(e)||a(10,e),function e(t){let r;if(!f(t)||j(t))return t;let n=t[c];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=m(t,n.scope_.immer_.useStrictShallowCopy_)}else r=m(t,!0);return y(r,(t,n)=>{b(r,t,e(n))}),n&&(n.finalized_=!1),r}(e)}y(z,(e,t)=>{I[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),I.deleteProperty=function(e,t){return I.set.call(this,e,t,void 0)},I.set=function(e,t,r){return z.set.call(this,e[0],t,r,e[0])};var X=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&a(6),void 0!==r&&"function"!=typeof r&&a(7),f(e)){let o=x(this),i=U(e,void 0),u=!0;try{n=t(i),u=!1}finally{u?R(o):A(o)}return T(o,r),N(n,o)}if(e&&"object"==typeof e)a(1,e);else{if(void 0===(n=t(e))&&(n=e),n===i&&(n=void 0),this.autoFreeze_&&O(n,!0),r){let t=[],o=[];S("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){f(e)||a(8),s(e)&&(e=L(e));let t=x(this),r=U(e,void 0);return r[c].isManual_=!0,A(t),r}finishDraft(e,t){let r=e&&e[c];r&&r.isManual_||a(9);let{scope_:n}=r;return T(n,t),N(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=S("Patches").applyPatches_;return s(e)?n(e,t):this.produce(e,e=>n(e,t))}},q=X.produce;X.produceWithPatches.bind(X),X.setAutoFreeze.bind(X),X.setUseStrictShallowCopy.bind(X),X.applyPatches.bind(X),X.createDraft.bind(X),X.finishDraft.bind(X);var V=e=>Array.isArray(e)?e:[e],B=0,G=class{revision=B;_value;_lastValue;_isEqual=H;constructor(e,t=H){this._value=this._lastValue=e,this._isEqual=t}get value(){return this._value}set value(e){this.value!==e&&(this._value=e,this.revision=++B)}};function H(e,t){return e===t}function J(e){return e instanceof G||console.warn("Not a valid cell! ",e),e.value}var Q=(e,t)=>!1;function Y(){return function(e,t=H){return new G(null,t)}(0,Q)}var Z=e=>{let t=e.collectionTag;null===t&&(t=e.collectionTag=Y()),J(t)};Symbol();var ee=0,et=Object.getPrototypeOf({}),er=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy(this,en);tag=Y();tags={};children={};collectionTag=null;id=ee++},en={get:(e,t)=>(function(){let{value:r}=e,n=Reflect.get(r,t);if("symbol"==typeof t||t in et)return n;if("object"==typeof n&&null!==n){let r=e.children[t];return void 0===r&&(r=e.children[t]=Array.isArray(n)?new eo(n):new er(n)),r.tag&&J(r.tag),r.proxy}{let r=e.tags[t];return void 0===r&&((r=e.tags[t]=Y()).value=n),J(r),n}})(),ownKeys:e=>(Z(e),Reflect.ownKeys(e.value)),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e.value,t),has:(e,t)=>Reflect.has(e.value,t)},eo=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy([this],ei);tag=Y();tags={};children={};collectionTag=null;id=ee++},ei={get:([e],t)=>("length"===t&&Z(e),en.get(e,t)),ownKeys:([e])=>en.ownKeys(e),getOwnPropertyDescriptor:([e],t)=>en.getOwnPropertyDescriptor(e,t),has:([e],t)=>en.has(e,t)},eu="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function ec(){return{s:0,v:void 0,o:null,p:null}}function ea(e,t={}){let r,n=ec(),{resultEqualityCheck:o}=t,i=0;function u(){let t,u=n,{length:c}=arguments;for(let e=0;e<c;e++){let t=arguments[e];if("function"==typeof t||"object"==typeof t&&null!==t){let e=u.o;null===e&&(u.o=e=new WeakMap);let r=e.get(t);void 0===r?(u=ec(),e.set(t,u)):u=r}else{let e=u.p;null===e&&(u.p=e=new Map);let r=e.get(t);void 0===r?(u=ec(),e.set(t,u)):u=r}}let a=u;if(1===u.s)t=u.v;else if(t=e.apply(null,arguments),i++,o){let e=r?.deref?.()??r;null!=e&&o(e,t)&&(t=e,0!==i&&i--),r="object"==typeof t&&null!==t||"function"==typeof t?new eu(t):t}return a.s=1,a.v=t,t}return u.clearCache=()=>{n=ec(),u.resetResultsCount()},u.resultsCount=()=>i,u.resetResultsCount=()=>{i=0},u}function el(e,...t){let r="function"==typeof e?{memoize:e,memoizeOptions:t}:e,n=(...e)=>{let t,n=0,o=0,i={},u=e.pop();"object"==typeof u&&(i=u,u=e.pop()),function(e,t=`expected a function, instead received ${typeof e}`){if("function"!=typeof e)throw TypeError(t)}(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);let{memoize:c,memoizeOptions:a=[],argsMemoize:l=ea,argsMemoizeOptions:s=[],devModeChecks:f={}}={...r,...i},p=V(a),d=V(s),y=function(e){let t=Array.isArray(e[0])?e[0]:e;return!function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(e=>"function"==typeof e)){let r=e.map(e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e).join(", ");throw TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}(e),h=c(function(){return n++,u.apply(null,arguments)},...p);return Object.assign(l(function(){o++;let e=function(e,t){let r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(y,arguments);return t=h.apply(null,e)},...d),{resultFunc:u,memoizedResultFunc:h,dependencies:y,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>t,recomputations:()=>n,resetRecomputations:()=>{n=0},memoize:c,argsMemoize:l})};return Object.assign(n,{withTypes:()=>n}),n}var es=el(ea),ef=Object.assign((e,t=es)=>{!function(e,t=`expected an object, instead received ${typeof e}`){if("object"!=typeof e)throw TypeError(t)}(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);let r=Object.keys(e);return t(r.map(t=>e[t]),(...e)=>e.reduce((e,t,n)=>(e[r[n]]=t,e),{}))},{withTypes:()=>ef});function ep(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ed="function"==typeof Symbol&&Symbol.observable||"@@observable",ey=()=>Math.random().toString(36).substring(7).split("").join("."),eh={INIT:`@@redux/INIT${ey()}`,REPLACE:`@@redux/REPLACE${ey()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ey()}`};function e_(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function eb(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}function ew(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var ev=ew();r(357),((...e)=>{let t=el(...e),r=Object.assign((...e)=>{let r=t(...e),n=(e,...t)=>r(s(e)?L(e):e,...t);return Object.assign(n,r),n},{withTypes:()=>r})})(ea);var eg="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?eb:eb.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function em(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(eX(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>e_(t)&&"type"in t&&"string"==typeof t.type&&t.type===e,r}var eO=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function eE(e){return f(e)?q(e,()=>{}):e}function ej(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw Error(eX(10));let n=r.insert(t,e);return e.set(t,n),n}var eP=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{},i=new eO;return t&&("boolean"==typeof t?i.push(ev):i.push(ew(t.extraArgument))),i},eS=e=>t=>{setTimeout(t,e)},eT="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:eS(10),eR=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,u=!1,c=new Set,a="tick"===e.type?queueMicrotask:"raf"===e.type?eT:"callback"===e.type?e.queueNotification:eS(e.timeout),l=()=>{u=!1,i&&(i=!1,c.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return c.add(e),()=>{t(),c.delete(e)}},dispatch(e){try{return(i=!(o=!e?.meta?.RTK_autoBatch))&&!u&&(u=!0,a(l)),n.dispatch(e)}finally{o=!0}}})},eA=e=>function(t){let{autoBatch:r=!0}=t??{},n=new eO(e);return r&&n.push(eR("object"==typeof r?r:void 0)),n};function ex(e){let t,r;let n=eP(),{reducer:o,middleware:i,devTools:u=!0,preloadedState:c,enhancers:a}=e||{};if("function"==typeof o)t=o;else if(e_(o))t=function(e){let t;let r=Object.keys(e),n={};for(let t=0;t<r.length;t++){let o=r[t];"function"==typeof e[o]&&(n[o]=e[o])}let o=Object.keys(n);try{!function(e){Object.keys(e).forEach(t=>{let r=e[t];if(void 0===r(void 0,{type:eh.INIT}))throw Error(ep(12));if(void 0===r(void 0,{type:eh.PROBE_UNKNOWN_ACTION()}))throw Error(ep(13))})}(n)}catch(e){t=e}return function(e={},r){if(t)throw t;let i=!1,u={};for(let t=0;t<o.length;t++){let c=o[t],a=n[c],l=e[c],s=a(l,r);if(void 0===s)throw r&&r.type,Error(ep(14));u[c]=s,i=i||s!==l}return(i=i||o.length!==Object.keys(e).length)?u:e}}(o);else throw Error(eX(1));r="function"==typeof i?i(n):n();let l=eb;u&&(l=eg({trace:!1,..."object"==typeof u&&u}));let s=eA(function(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw Error(ep(15))},u={getState:o.getState,dispatch:(e,...t)=>i(e,...t)};return i=eb(...e.map(e=>e(u)))(o.dispatch),{...o,dispatch:i}}}(...r));return function e(t,r,n){if("function"!=typeof t)throw Error(ep(2));if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(ep(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(ep(1));return n(e)(t,r)}let o=t,i=r,u=new Map,c=u,a=0,l=!1;function s(){c===u&&(c=new Map,u.forEach((e,t)=>{c.set(t,e)}))}function f(){if(l)throw Error(ep(3));return i}function p(e){if("function"!=typeof e)throw Error(ep(4));if(l)throw Error(ep(5));let t=!0;s();let r=a++;return c.set(r,e),function(){if(t){if(l)throw Error(ep(6));t=!1,s(),c.delete(r),u=null}}}function d(e){if(!e_(e))throw Error(ep(7));if(void 0===e.type)throw Error(ep(8));if("string"!=typeof e.type)throw Error(ep(17));if(l)throw Error(ep(9));try{l=!0,i=o(i,e)}finally{l=!1}return(u=c).forEach(e=>{e()}),e}return d({type:eh.INIT}),{dispatch:d,subscribe:p,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw Error(ep(10));o=e,d({type:eh.REPLACE})},[ed]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(ep(11));function t(){e.next&&e.next(f())}return t(),{unsubscribe:p(t)}},[ed](){return this}}}}}(t,c,l(..."function"==typeof a?a(s):s()))}function eC(e){let t;let r={},n=[],o={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(eX(28));if(n in r)throw Error(eX(29));return r[n]=t,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(t=e,o)};return e(o),[r,n,t]}var eN=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},ek=Symbol.for("rtk-slice-createasyncthunk"),eD=((n=eD||{}).reducer="reducer",n.reducerWithPrepare="reducerWithPrepare",n.asyncThunk="asyncThunk",n),eM=function({creators:e}={}){let t=e?.asyncThunk?.[ek];return function(e){let r;let{name:n,reducerPath:o=n}=e;if(!n)throw Error(eX(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},u=Object.keys(i),c={},a={},l={},p=[],d={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw Error(eX(12));if(r in a)throw Error(eX(13));return a[r]=t,d},addMatcher:(e,t)=>(p.push({matcher:e,reducer:t}),d),exposeAction:(e,t)=>(l[e]=t,d),exposeCaseReducer:(e,t)=>(c[e]=t,d)};function y(){let[t={},r=[],n]="function"==typeof e.extraReducers?eC(e.extraReducers):[e.extraReducers],o={...t,...a};return function(e,t){let r;let[n,o,i]=eC(t);if("function"==typeof e)r=()=>eE(e());else{let t=eE(e);r=()=>t}function u(e=r(),t){let u=[n[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===u.filter(e=>!!e).length&&(u=[i]),u.reduce((e,r)=>{if(r){if(s(e)){let n=r(e,t);return void 0===n?e:n}if(f(e))return q(e,e=>r(e,t));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error(eX(9))}return n}}return e},e)}return u.getInitialState=r,u}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of p)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)})}u.forEach(r=>{let o=i[r],u={reducerName:r,type:`${n}/${r}`,createNotation:"function"==typeof e.reducers};"asyncThunk"===o._reducerDefinitionType?function({type:e,reducerName:t},r,n,o){if(!o)throw Error(eX(18));let{payloadCreator:i,fulfilled:u,pending:c,rejected:a,settled:l,options:s}=r,f=o(e,i,s);n.exposeAction(t,f),u&&n.addCase(f.fulfilled,u),c&&n.addCase(f.pending,c),a&&n.addCase(f.rejected,a),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:u||ez,pending:c||ez,rejected:a||ez,settled:l||ez})}(u,o,d,t):function({type:e,reducerName:t,createNotation:r},n,o){let i,u;if("reducer"in n){if(r&&"reducerWithPrepare"!==n._reducerDefinitionType)throw Error(eX(17));i=n.reducer,u=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,u?em(e,u):em(e))}(u,o,d)});let h=e=>e,_=new Map;function b(e,t){return r||(r=y()),r(e,t)}function w(){return r||(r=y()),r.getInitialState()}function v(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=w()),n}function o(t=h){let n=ej(_,r,{insert:()=>new WeakMap});return ej(n,t,{insert:()=>{let n={};for(let[o,i]of Object.entries(e.selectors??{}))n[o]=function(e,t,r,n){function o(i,...u){let c=t(i);return void 0===c&&n&&(c=r()),e(c,...u)}return o.unwrapped=e,o}(i,t,w,r);return n}})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}let g={name:n,reducer:b,actions:l,caseReducers:c,getInitialState:w,...v(o),injectInto(e,{reducerPath:t,...r}={}){let n=t??o;return e.inject({reducerPath:n,reducer:b},r),{...g,...v(n,!0)}}};return g}}();function ez(){}var eI=(e,t)=>{if("function"!=typeof e)throw Error(eX(32))},{assign:e$}=Object,eF="listenerMiddleware",eW=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=em(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(o);else throw Error(eX(21));return eI(i,"options.listener"),{predicate:o,type:t,effect:i}},eK=Object.assign(e=>{let{type:t,predicate:r,effect:n}=eW(e);return{id:eN(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(eX(22))}}},{withTypes:()=>eK}),eU=Object.assign(em(`${eF}/add`),{withTypes:()=>eU});em(`${eF}/removeAll`);var eL=Object.assign(em(`${eF}/remove`),{withTypes:()=>eL});function eX(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}Symbol.for("rtk-state-proxy-original")}}]);
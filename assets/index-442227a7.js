function bw(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Lh(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function jh(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Ye(r)?Sw(r):jh(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ye(n))return n;if(Ne(n))return n}}const xw=/;(?![^(]*\))/g,Ew=/:([^]+)/,Tw=/\/\*.*?\*\//gs;function Sw(n){const e={};return n.replace(Tw,"").split(xw).forEach(t=>{if(t){const r=t.split(Ew);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fh(n){let e="";if(Ye(n))e=n;else if(ie(n))for(let t=0;t<n.length;t++){const r=Fh(n[t]);r&&(e+=r+" ")}else if(Ne(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Aw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cw=Lh(Aw);function jg(n){return!!n||n===""}const vn=n=>Ye(n)?n:n==null?"":ie(n)||Ne(n)&&(n.toString===$g||!se(n.toString))?JSON.stringify(n,Fg,2):String(n),Fg=(n,e)=>e&&e.__v_isRef?Fg(n,e.value):qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:Vg(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!ie(e)&&!Bg(e)?String(e):e,Ae={},zi=[],rn=()=>{},kw=()=>!1,Rw=/^on[^a-z]/,qc=n=>Rw.test(n),Vh=n=>n.startsWith("onUpdate:"),St=Object.assign,Uh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dw=Object.prototype.hasOwnProperty,me=(n,e)=>Dw.call(n,e),ie=Array.isArray,qi=n=>Hc(n)==="[object Map]",Vg=n=>Hc(n)==="[object Set]",se=n=>typeof n=="function",Ye=n=>typeof n=="string",$h=n=>typeof n=="symbol",Ne=n=>n!==null&&typeof n=="object",Ug=n=>Ne(n)&&se(n.then)&&se(n.catch),$g=Object.prototype.toString,Hc=n=>$g.call(n),Nw=n=>Hc(n).slice(8,-1),Bg=n=>Hc(n)==="[object Object]",Bh=n=>Ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ka=Lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ow=/-(\w)/g,Tn=Kc(n=>n.replace(Ow,(e,t)=>t?t.toUpperCase():"")),Pw=/\B([A-Z])/g,Is=Kc(n=>n.replace(Pw,"-$1").toLowerCase()),Gc=Kc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yl=Kc(n=>n?`on${Gc(n)}`:""),_o=(n,e)=>!Object.is(n,e),Jl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},lc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Mw=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let tp;const Lw=()=>tp||(tp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Jt;class jw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Jt;try{return Jt=this,e()}finally{Jt=t}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Fw(n,e=Jt){e&&e.active&&e.effects.push(n)}function Vw(){return Jt}const zh=n=>{const e=new Set(n);return e.w=0,e.n=0,e},zg=n=>(n.w&pr)>0,qg=n=>(n.n&pr)>0,Uw=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=pr},$w=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];zg(i)&&!qg(i)?i.delete(n):e[t++]=i,i.w&=~pr,i.n&=~pr}e.length=t}},ku=new WeakMap;let Zs=0,pr=1;const Ru=30;let Zt;const Zr=Symbol(""),Du=Symbol("");class qh{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Fw(this,r)}run(){if(!this.active)return this.fn();let e=Zt,t=ur;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,ur=!0,pr=1<<++Zs,Zs<=Ru?Uw(this):np(this),this.fn()}finally{Zs<=Ru&&$w(this),pr=1<<--Zs,Zt=this.parent,ur=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(np(this),this.onStop&&this.onStop(),this.active=!1)}}function np(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ur=!0;const Hg=[];function _s(){Hg.push(ur),ur=!1}function bs(){const n=Hg.pop();ur=n===void 0?!0:n}function Mt(n,e,t){if(ur&&Zt){let r=ku.get(n);r||ku.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=zh()),Kg(i)}}function Kg(n,e){let t=!1;Zs<=Ru?qg(n)||(n.n|=pr,t=!zg(n)):t=!n.has(Zt),t&&(n.add(Zt),Zt.deps.push(n))}function Vn(n,e,t,r,i,s){const o=ku.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ie(n)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ie(n)?Bh(t)&&a.push(o.get("length")):(a.push(o.get(Zr)),qi(n)&&a.push(o.get(Du)));break;case"delete":ie(n)||(a.push(o.get(Zr)),qi(n)&&a.push(o.get(Du)));break;case"set":qi(n)&&a.push(o.get(Zr));break}if(a.length===1)a[0]&&Nu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Nu(zh(c))}}function Nu(n,e){const t=ie(n)?n:[...n];for(const r of t)r.computed&&rp(r);for(const r of t)r.computed||rp(r)}function rp(n,e){(n!==Zt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Bw=Lh("__proto__,__v_isRef,__isVue"),Gg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($h)),zw=Hh(),qw=Hh(!1,!0),Hw=Hh(!0),ip=Kw();function Kw(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=ve(this);for(let s=0,o=this.length;s<o;s++)Mt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){_s();const r=ve(this)[e].apply(this,t);return bs(),r}}),n}function Gw(n){const e=ve(this);return Mt(e,"has",n),e.hasOwnProperty(n)}function Hh(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?lI:Xg:e?Jg:Yg).get(r))return r;const o=ie(r);if(!n){if(o&&me(ip,i))return Reflect.get(ip,i,s);if(i==="hasOwnProperty")return Gw}const a=Reflect.get(r,i,s);return($h(i)?Gg.has(i):Bw(i))||(n||Mt(r,"get",i),e)?a:gt(a)?o&&Bh(i)?a:a.value:Ne(a)?n?Zg(a):ea(a):a}}const Ww=Wg(),Qw=Wg(!0);function Wg(n=!1){return function(t,r,i,s){let o=t[r];if(Zi(o)&&gt(o)&&!gt(i))return!1;if(!n&&(!uc(i)&&!Zi(i)&&(o=ve(o),i=ve(i)),!ie(t)&&gt(o)&&!gt(i)))return o.value=i,!0;const a=ie(t)&&Bh(r)?Number(r)<t.length:me(t,r),c=Reflect.set(t,r,i,s);return t===ve(s)&&(a?_o(i,o)&&Vn(t,"set",r,i):Vn(t,"add",r,i)),c}}function Yw(n,e){const t=me(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&Vn(n,"delete",e,void 0),r}function Jw(n,e){const t=Reflect.has(n,e);return(!$h(e)||!Gg.has(e))&&Mt(n,"has",e),t}function Xw(n){return Mt(n,"iterate",ie(n)?"length":Zr),Reflect.ownKeys(n)}const Qg={get:zw,set:Ww,deleteProperty:Yw,has:Jw,ownKeys:Xw},Zw={get:Hw,set(n,e){return!0},deleteProperty(n,e){return!0}},eI=St({},Qg,{get:qw,set:Qw}),Kh=n=>n,Wc=n=>Reflect.getPrototypeOf(n);function Ca(n,e,t=!1,r=!1){n=n.__v_raw;const i=ve(n),s=ve(e);t||(e!==s&&Mt(i,"get",e),Mt(i,"get",s));const{has:o}=Wc(i),a=r?Kh:t?Qh:bo;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function ka(n,e=!1){const t=this.__v_raw,r=ve(t),i=ve(n);return e||(n!==i&&Mt(r,"has",n),Mt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Ra(n,e=!1){return n=n.__v_raw,!e&&Mt(ve(n),"iterate",Zr),Reflect.get(n,"size",n)}function sp(n){n=ve(n);const e=ve(this);return Wc(e).has.call(e,n)||(e.add(n),Vn(e,"add",n,n)),this}function op(n,e){e=ve(e);const t=ve(this),{has:r,get:i}=Wc(t);let s=r.call(t,n);s||(n=ve(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?_o(e,o)&&Vn(t,"set",n,e):Vn(t,"add",n,e),this}function ap(n){const e=ve(this),{has:t,get:r}=Wc(e);let i=t.call(e,n);i||(n=ve(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&Vn(e,"delete",n,void 0),s}function cp(){const n=ve(this),e=n.size!==0,t=n.clear();return e&&Vn(n,"clear",void 0,void 0),t}function Da(n,e){return function(r,i){const s=this,o=s.__v_raw,a=ve(o),c=e?Kh:n?Qh:bo;return!n&&Mt(a,"iterate",Zr),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Na(n,e,t){return function(...r){const i=this.__v_raw,s=ve(i),o=qi(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=i[n](...r),u=t?Kh:e?Qh:bo;return!e&&Mt(s,"iterate",c?Du:Zr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Jn(n){return function(...e){return n==="delete"?!1:this}}function tI(){const n={get(s){return Ca(this,s)},get size(){return Ra(this)},has:ka,add:sp,set:op,delete:ap,clear:cp,forEach:Da(!1,!1)},e={get(s){return Ca(this,s,!1,!0)},get size(){return Ra(this)},has:ka,add:sp,set:op,delete:ap,clear:cp,forEach:Da(!1,!0)},t={get(s){return Ca(this,s,!0)},get size(){return Ra(this,!0)},has(s){return ka.call(this,s,!0)},add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear"),forEach:Da(!0,!1)},r={get(s){return Ca(this,s,!0,!0)},get size(){return Ra(this,!0)},has(s){return ka.call(this,s,!0)},add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear"),forEach:Da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Na(s,!1,!1),t[s]=Na(s,!0,!1),e[s]=Na(s,!1,!0),r[s]=Na(s,!0,!0)}),[n,t,e,r]}const[nI,rI,iI,sI]=tI();function Gh(n,e){const t=e?n?sI:iI:n?rI:nI;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(me(t,i)&&i in r?t:r,i,s)}const oI={get:Gh(!1,!1)},aI={get:Gh(!1,!0)},cI={get:Gh(!0,!1)},Yg=new WeakMap,Jg=new WeakMap,Xg=new WeakMap,lI=new WeakMap;function uI(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hI(n){return n.__v_skip||!Object.isExtensible(n)?0:uI(Nw(n))}function ea(n){return Zi(n)?n:Wh(n,!1,Qg,oI,Yg)}function dI(n){return Wh(n,!1,eI,aI,Jg)}function Zg(n){return Wh(n,!0,Zw,cI,Xg)}function Wh(n,e,t,r,i){if(!Ne(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=hI(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function Hi(n){return Zi(n)?Hi(n.__v_raw):!!(n&&n.__v_isReactive)}function Zi(n){return!!(n&&n.__v_isReadonly)}function uc(n){return!!(n&&n.__v_isShallow)}function ey(n){return Hi(n)||Zi(n)}function ve(n){const e=n&&n.__v_raw;return e?ve(e):n}function ty(n){return lc(n,"__v_skip",!0),n}const bo=n=>Ne(n)?ea(n):n,Qh=n=>Ne(n)?Zg(n):n;function ny(n){ur&&Zt&&(n=ve(n),Kg(n.dep||(n.dep=zh())))}function ry(n,e){n=ve(n);const t=n.dep;t&&Nu(t)}function gt(n){return!!(n&&n.__v_isRef===!0)}function fI(n){return iy(n,!1)}function pI(n){return iy(n,!0)}function iy(n,e){return gt(n)?n:new mI(n,e)}class mI{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ve(e),this._value=t?e:bo(e)}get value(){return ny(this),this._value}set value(e){const t=this.__v_isShallow||uc(e)||Zi(e);e=t?e:ve(e),_o(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:bo(e),ry(this))}}function Ki(n){return gt(n)?n.value:n}const gI={get:(n,e,t)=>Ki(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return gt(i)&&!gt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function sy(n){return Hi(n)?n:new Proxy(n,gI)}var oy;class yI{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[oy]=!1,this._dirty=!0,this.effect=new qh(e,()=>{this._dirty||(this._dirty=!0,ry(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ve(this);return ny(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}oy="__v_isReadonly";function vI(n,e,t=!1){let r,i;const s=se(n);return s?(r=n,i=rn):(r=n.get,i=n.set),new yI(r,i,s||!i,t)}function hr(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){Qc(s,e,t)}return i}function sn(n,e,t,r){if(se(n)){const s=hr(n,e,t,r);return s&&Ug(s)&&s.catch(o=>{Qc(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(sn(n[s],e,t,r));return i}function Qc(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){hr(c,null,10,[n,o,a]);return}}wI(n,t,i,r)}function wI(n,e,t,r=!0){console.error(n)}let xo=!1,Ou=!1;const mt=[];let dn=0;const Gi=[];let Nn=null,$r=0;const ay=Promise.resolve();let Yh=null;function cy(n){const e=Yh||ay;return n?e.then(this?n.bind(this):n):e}function II(n){let e=dn+1,t=mt.length;for(;e<t;){const r=e+t>>>1;Eo(mt[r])<n?e=r+1:t=r}return e}function Jh(n){(!mt.length||!mt.includes(n,xo&&n.allowRecurse?dn+1:dn))&&(n.id==null?mt.push(n):mt.splice(II(n.id),0,n),ly())}function ly(){!xo&&!Ou&&(Ou=!0,Yh=ay.then(hy))}function _I(n){const e=mt.indexOf(n);e>dn&&mt.splice(e,1)}function bI(n){ie(n)?Gi.push(...n):(!Nn||!Nn.includes(n,n.allowRecurse?$r+1:$r))&&Gi.push(n),ly()}function lp(n,e=xo?dn+1:0){for(;e<mt.length;e++){const t=mt[e];t&&t.pre&&(mt.splice(e,1),e--,t())}}function uy(n){if(Gi.length){const e=[...new Set(Gi)];if(Gi.length=0,Nn){Nn.push(...e);return}for(Nn=e,Nn.sort((t,r)=>Eo(t)-Eo(r)),$r=0;$r<Nn.length;$r++)Nn[$r]();Nn=null,$r=0}}const Eo=n=>n.id==null?1/0:n.id,xI=(n,e)=>{const t=Eo(n)-Eo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function hy(n){Ou=!1,xo=!0,mt.sort(xI);const e=rn;try{for(dn=0;dn<mt.length;dn++){const t=mt[dn];t&&t.active!==!1&&hr(t,null,14)}}finally{dn=0,mt.length=0,uy(),xo=!1,Yh=null,(mt.length||Gi.length)&&hy()}}function EI(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(i=t.map(f=>Ye(f)?f.trim():f)),h&&(i=t.map(Mw))}let a,c=r[a=Yl(e)]||r[a=Yl(Tn(e))];!c&&s&&(c=r[a=Yl(Is(e))]),c&&sn(c,n,6,i);const l=r[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,sn(l,n,6,i)}}function dy(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!se(n)){const c=l=>{const u=dy(l,e,!0);u&&(a=!0,St(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(Ne(n)&&r.set(n,null),null):(ie(s)?s.forEach(c=>o[c]=null):St(o,s),Ne(n)&&r.set(n,o),o)}function Yc(n,e){return!n||!qc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(n,e[0].toLowerCase()+e.slice(1))||me(n,Is(e))||me(n,e))}let en=null,Jc=null;function hc(n){const e=en;return en=n,Jc=n&&n.type.__scopeId||null,e}function fy(n){Jc=n}function py(){Jc=null}function jr(n,e=en,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&vp(-1);const s=hc(e);let o;try{o=n(...i)}finally{hc(s),r._d&&vp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xl(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:g}=n;let v,w;const b=hc(n);try{if(t.shapeFlag&4){const N=i||r;v=hn(u.call(N,N,h,s,f,d,m)),w=c}else{const N=e;v=hn(N.length>1?N(s,{attrs:c,slots:a,emit:l}):N(s,null)),w=e.props?c:TI(c)}}catch(N){ao.length=0,Qc(N,n,1),v=Ce(oi)}let _=v;if(w&&g!==!1){const N=Object.keys(w),{shapeFlag:z}=_;N.length&&z&7&&(o&&N.some(Vh)&&(w=SI(w,o)),_=es(_,w))}return t.dirs&&(_=es(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),v=_,hc(b),v}const TI=n=>{let e;for(const t in n)(t==="class"||t==="style"||qc(t))&&((e||(e={}))[t]=n[t]);return e},SI=(n,e)=>{const t={};for(const r in n)(!Vh(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function AI(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?up(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Yc(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?up(r,o,l):!0:!!o;return!1}function up(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Yc(t,s))return!0}return!1}function CI({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const kI=n=>n.__isSuspense;function RI(n,e){e&&e.pendingBranch?ie(n)?e.effects.push(...n):e.effects.push(n):bI(n)}function Ga(n,e){if(He){let t=He.provides;const r=He.parent&&He.parent.provides;r===t&&(t=He.provides=Object.create(r)),t[n]=e}}function Ln(n,e,t=!1){const r=He||en;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&se(e)?e.call(r.proxy):e}}const Oa={};function Wa(n,e,t){return my(n,e,t)}function my(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=Ae){const a=Vw()===(He==null?void 0:He.scope)?He:null;let c,l=!1,u=!1;if(gt(n)?(c=()=>n.value,l=uc(n)):Hi(n)?(c=()=>n,r=!0):ie(n)?(u=!0,l=n.some(_=>Hi(_)||uc(_)),c=()=>n.map(_=>{if(gt(_))return _.value;if(Hi(_))return Ui(_);if(se(_))return hr(_,a,2)})):se(n)?e?c=()=>hr(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),sn(n,a,3,[d])}:c=rn,e&&r){const _=c;c=()=>Ui(_())}let h,d=_=>{h=w.onStop=()=>{hr(_,a,4)}},f;if(So)if(d=rn,e?t&&sn(e,a,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const _=S_();f=_.__watcherHandles||(_.__watcherHandles=[])}else return rn;let m=u?new Array(n.length).fill(Oa):Oa;const g=()=>{if(w.active)if(e){const _=w.run();(r||l||(u?_.some((N,z)=>_o(N,m[z])):_o(_,m)))&&(h&&h(),sn(e,a,3,[_,m===Oa?void 0:u&&m[0]===Oa?[]:m,d]),m=_)}else w.run()};g.allowRecurse=!!e;let v;i==="sync"?v=g:i==="post"?v=()=>Ct(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),v=()=>Jh(g));const w=new qh(c,v);e?t?g():m=w.run():i==="post"?Ct(w.run.bind(w),a&&a.suspense):w.run();const b=()=>{w.stop(),a&&a.scope&&Uh(a.scope.effects,w)};return f&&f.push(b),b}function DI(n,e,t){const r=this.proxy,i=Ye(n)?n.includes(".")?gy(r,n):()=>r[n]:n.bind(r,r);let s;se(e)?s=e:(s=e.handler,t=e);const o=He;ts(this);const a=my(i,s.bind(r),t);return o?ts(o):ei(),a}function gy(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function Ui(n,e){if(!Ne(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),gt(n))Ui(n.value,e);else if(ie(n))for(let t=0;t<n.length;t++)Ui(n[t],e);else if(Vg(n)||qi(n))n.forEach(t=>{Ui(t,e)});else if(Bg(n))for(const t in n)Ui(n[t],e);return n}function Xh(n){return se(n)?{setup:n,name:n.name}:n}const Qa=n=>!!n.type.__asyncLoader,yy=n=>n.type.__isKeepAlive;function NI(n,e){vy(n,"a",e)}function OI(n,e){vy(n,"da",e)}function vy(n,e,t=He){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Xc(e,r,t),t){let i=t.parent;for(;i&&i.parent;)yy(i.parent.vnode)&&PI(r,e,t,i),i=i.parent}}function PI(n,e,t,r){const i=Xc(e,n,r,!0);wy(()=>{Uh(r[e],i)},t)}function Xc(n,e,t=He,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;_s(),ts(t);const a=sn(e,t,n,o);return ei(),bs(),a});return r?i.unshift(s):i.push(s),s}}const qn=n=>(e,t=He)=>(!So||n==="sp")&&Xc(n,(...r)=>e(...r),t),MI=qn("bm"),LI=qn("m"),jI=qn("bu"),FI=qn("u"),VI=qn("bum"),wy=qn("um"),UI=qn("sp"),$I=qn("rtg"),BI=qn("rtc");function zI(n,e=He){Xc("ec",n,e)}function Pr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(_s(),sn(c,t,8,[n.el,a,n,e]),bs())}}const Iy="components";function dc(n,e){return HI(Iy,n,!0,e)||n}const qI=Symbol();function HI(n,e,t=!0,r=!1){const i=en||He;if(i){const s=i.type;if(n===Iy){const a=x_(s,!1);if(a&&(a===e||a===Tn(e)||a===Gc(Tn(e))))return s}const o=hp(i[n]||s[n],e)||hp(i.appContext[n],e);return!o&&r?s:o}}function hp(n,e){return n&&(n[e]||n[Tn(e)]||n[Gc(Tn(e))])}function _y(n,e,t,r){let i;const s=t&&t[r];if(ie(n)||Ye(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ne(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(n[l],l,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}const Pu=n=>n?Ny(n)?nd(n)||n.proxy:Pu(n.parent):null,oo=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pu(n.parent),$root:n=>Pu(n.root),$emit:n=>n.emit,$options:n=>Zh(n),$forceUpdate:n=>n.f||(n.f=()=>Jh(n.update)),$nextTick:n=>n.n||(n.n=cy.bind(n.proxy)),$watch:n=>DI.bind(n)}),Zl=(n,e)=>n!==Ae&&!n.__isScriptSetup&&me(n,e),KI={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Zl(r,e))return o[e]=1,r[e];if(i!==Ae&&me(i,e))return o[e]=2,i[e];if((l=n.propsOptions[0])&&me(l,e))return o[e]=3,s[e];if(t!==Ae&&me(t,e))return o[e]=4,t[e];Mu&&(o[e]=0)}}const u=oo[e];let h,d;if(u)return e==="$attrs"&&Mt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ae&&me(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,me(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Zl(i,e)?(i[e]=t,!0):r!==Ae&&me(r,e)?(r[e]=t,!0):me(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==Ae&&me(n,o)||Zl(e,o)||(a=s[0])&&me(a,o)||me(r,o)||me(oo,o)||me(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:me(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Mu=!0;function GI(n){const e=Zh(n),t=n.proxy,r=n.ctx;Mu=!1,e.beforeCreate&&dp(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:g,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:N,render:z,renderTracked:U,renderTriggered:Q,errorCaptured:oe,serverPrefetch:Ke,expose:At,inheritAttrs:wt,components:qt,directives:Rn,filters:Ht}=e;if(l&&WI(l,r,null,n.appContext.config.unwrapInjectedRef),o)for(const ce in o){const he=o[ce];se(he)&&(r[ce]=he.bind(t))}if(i){const ce=i.call(t,t);Ne(ce)&&(n.data=ea(ce))}if(Mu=!0,s)for(const ce in s){const he=s[ce],Ge=se(he)?he.bind(t,t):se(he.get)?he.get.bind(t,t):rn,cn=!se(he)&&se(he.set)?he.set.bind(t):rn,We=Kt({get:Ge,set:cn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>We.value,set:Be=>We.value=Be})}if(a)for(const ce in a)by(a[ce],r,t,ce);if(c){const ce=se(c)?c.call(t):c;Reflect.ownKeys(ce).forEach(he=>{Ga(he,ce[he])})}u&&dp(u,n,"c");function Se(ce,he){ie(he)?he.forEach(Ge=>ce(Ge.bind(t))):he&&ce(he.bind(t))}if(Se(MI,h),Se(LI,d),Se(jI,f),Se(FI,m),Se(NI,g),Se(OI,v),Se(zI,oe),Se(BI,U),Se($I,Q),Se(VI,b),Se(wy,N),Se(UI,Ke),ie(At))if(At.length){const ce=n.exposed||(n.exposed={});At.forEach(he=>{Object.defineProperty(ce,he,{get:()=>t[he],set:Ge=>t[he]=Ge})})}else n.exposed||(n.exposed={});z&&n.render===rn&&(n.render=z),wt!=null&&(n.inheritAttrs=wt),qt&&(n.components=qt),Rn&&(n.directives=Rn)}function WI(n,e,t=rn,r=!1){ie(n)&&(n=Lu(n));for(const i in n){const s=n[i];let o;Ne(s)?"default"in s?o=Ln(s.from||i,s.default,!0):o=Ln(s.from||i):o=Ln(s),gt(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function dp(n,e,t){sn(ie(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function by(n,e,t,r){const i=r.includes(".")?gy(t,r):()=>t[r];if(Ye(n)){const s=e[n];se(s)&&Wa(i,s)}else if(se(n))Wa(i,n.bind(t));else if(Ne(n))if(ie(n))n.forEach(s=>by(s,e,t,r));else{const s=se(n.handler)?n.handler.bind(t):e[n.handler];se(s)&&Wa(i,s,n)}}function Zh(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!t&&!r?c=e:(c={},i.length&&i.forEach(l=>fc(c,l,o,!0)),fc(c,e,o)),Ne(e)&&s.set(e,c),c}function fc(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&fc(n,s,t,!0),i&&i.forEach(o=>fc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=QI[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const QI={data:fp,props:Fr,emits:Fr,methods:Fr,computed:Fr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Fr,directives:Fr,watch:JI,provide:fp,inject:YI};function fp(n,e){return e?n?function(){return St(se(n)?n.call(this,this):n,se(e)?e.call(this,this):e)}:e:n}function YI(n,e){return Fr(Lu(n),Lu(e))}function Lu(n){if(ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Fr(n,e){return n?St(St(Object.create(null),n),e):e}function JI(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const r in e)t[r]=It(n[r],e[r]);return t}function XI(n,e,t,r=!1){const i={},s={};lc(s,el,1),n.propsDefaults=Object.create(null),xy(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:dI(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function ZI(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=ve(i),[c]=n.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Yc(n.emitsOptions,d))continue;const f=e[d];if(c)if(me(s,d))f!==s[d]&&(s[d]=f,l=!0);else{const m=Tn(d);i[m]=ju(c,a,m,f,n,!1)}else f!==s[d]&&(s[d]=f,l=!0)}}}else{xy(n,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Is(h))===h||!me(e,u)))&&(c?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=ju(c,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!me(e,h))&&(delete s[h],l=!0)}l&&Vn(n,"set","$attrs")}function xy(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ka(c))continue;const l=e[c];let u;i&&me(i,u=Tn(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:Yc(n.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=ve(t),l=a||Ae;for(let u=0;u<s.length;u++){const h=s[u];t[h]=ju(i,c,h,l[h],n,!me(l,h))}}return o}function ju(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&se(c)){const{propsDefaults:l}=i;t in l?r=l[t]:(ts(i),r=l[t]=c.call(null,e),ei())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Is(t))&&(r=!0))}return r}function Ey(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let c=!1;if(!se(n)){const u=h=>{c=!0;const[d,f]=Ey(h,e,!0);St(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return Ne(n)&&r.set(n,zi),zi;if(ie(s))for(let u=0;u<s.length;u++){const h=Tn(s[u]);pp(h)&&(o[h]=Ae)}else if(s)for(const u in s){const h=Tn(u);if(pp(h)){const d=s[u],f=o[h]=ie(d)||se(d)?{type:d}:Object.assign({},d);if(f){const m=yp(Boolean,f.type),g=yp(String,f.type);f[0]=m>-1,f[1]=g<0||m<g,(m>-1||me(f,"default"))&&a.push(h)}}}const l=[o,a];return Ne(n)&&r.set(n,l),l}function pp(n){return n[0]!=="$"}function mp(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function gp(n,e){return mp(n)===mp(e)}function yp(n,e){return ie(e)?e.findIndex(t=>gp(t,n)):se(e)&&gp(e,n)?0:-1}const Ty=n=>n[0]==="_"||n==="$stable",ed=n=>ie(n)?n.map(hn):[hn(n)],e_=(n,e,t)=>{if(e._n)return e;const r=jr((...i)=>ed(e(...i)),t);return r._c=!1,r},Sy=(n,e,t)=>{const r=n._ctx;for(const i in n){if(Ty(i))continue;const s=n[i];if(se(s))e[i]=e_(i,s,r);else if(s!=null){const o=ed(s);e[i]=()=>o}}},Ay=(n,e)=>{const t=ed(e);n.slots.default=()=>t},t_=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=ve(e),lc(e,"_",t)):Sy(e,n.slots={})}else n.slots={},e&&Ay(n,e);lc(n.slots,el,1)},n_=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(St(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Sy(e,i)),o=e}else e&&(Ay(n,e),o={default:1});if(s)for(const a in i)!Ty(a)&&!(a in o)&&delete i[a]};function Cy(){return{app:null,config:{isNativeTag:kw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r_=0;function i_(n,e){return function(r,i=null){se(r)||(r=Object.assign({},r)),i!=null&&!Ne(i)&&(i=null);const s=Cy(),o=new Set;let a=!1;const c=s.app={_uid:r_++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:A_,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=Ce(r,i);return d.appContext=s,u&&e?e(d,l):n(d,l,h),a=!0,c._container=l,l.__vue_app__=c,nd(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Fu(n,e,t,r,i=!1){if(ie(n)){n.forEach((d,f)=>Fu(d,e&&(ie(e)?e[f]:e),t,r,i));return}if(Qa(r)&&!i)return;const s=r.shapeFlag&4?nd(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ye(l)?(u[l]=null,me(h,l)&&(h[l]=null)):gt(l)&&(l.value=null)),se(c))hr(c,a,12,[o,u]);else{const d=Ye(c),f=gt(c);if(d||f){const m=()=>{if(n.f){const g=d?me(h,c)?h[c]:u[c]:c.value;i?ie(g)&&Uh(g,s):ie(g)?g.includes(s)||g.push(s):d?(u[c]=[s],me(h,c)&&(h[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else d?(u[c]=o,me(h,c)&&(h[c]=o)):f&&(c.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Ct(m,t)):m()}}}const Ct=RI;function s_(n){return o_(n)}function o_(n,e){const t=Lw();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=rn,insertStaticContent:m}=n,g=(p,y,E,T=null,C=null,P=null,V=!1,O=null,L=!!y.dynamicChildren)=>{if(p===y)return;p&&!$s(p,y)&&(T=F(p),Be(p,C,P,!0),p=null),y.patchFlag===-2&&(L=!1,y.dynamicChildren=null);const{type:R,ref:X,shapeFlag:H}=y;switch(R){case Zc:v(p,y,E,T);break;case oi:w(p,y,E,T);break;case Ya:p==null&&b(y,E,T,V);break;case Xt:qt(p,y,E,T,C,P,V,O,L);break;default:H&1?z(p,y,E,T,C,P,V,O,L):H&6?Rn(p,y,E,T,C,P,V,O,L):(H&64||H&128)&&R.process(p,y,E,T,C,P,V,O,L,pe)}X!=null&&C&&Fu(X,p&&p.ref,P,y||p,!y)},v=(p,y,E,T)=>{if(p==null)r(y.el=a(y.children),E,T);else{const C=y.el=p.el;y.children!==p.children&&l(C,y.children)}},w=(p,y,E,T)=>{p==null?r(y.el=c(y.children||""),E,T):y.el=p.el},b=(p,y,E,T)=>{[p.el,p.anchor]=m(p.children,y,E,T,p.el,p.anchor)},_=({el:p,anchor:y},E,T)=>{let C;for(;p&&p!==y;)C=d(p),r(p,E,T),p=C;r(y,E,T)},N=({el:p,anchor:y})=>{let E;for(;p&&p!==y;)E=d(p),i(p),p=E;i(y)},z=(p,y,E,T,C,P,V,O,L)=>{V=V||y.type==="svg",p==null?U(y,E,T,C,P,V,O,L):Ke(p,y,C,P,V,O,L)},U=(p,y,E,T,C,P,V,O)=>{let L,R;const{type:X,props:H,shapeFlag:Z,transition:te,dirs:le}=p;if(L=p.el=o(p.type,P,H&&H.is,H),Z&8?u(L,p.children):Z&16&&oe(p.children,L,null,T,C,P&&X!=="foreignObject",V,O),le&&Pr(p,null,T,"created"),Q(L,p,p.scopeId,V,T),H){for(const _e in H)_e!=="value"&&!Ka(_e)&&s(L,_e,null,H[_e],P,p.children,T,C,B);"value"in H&&s(L,"value",null,H.value),(R=H.onVnodeBeforeMount)&&un(R,T,p)}le&&Pr(p,null,T,"beforeMount");const xe=(!C||C&&!C.pendingBranch)&&te&&!te.persisted;xe&&te.beforeEnter(L),r(L,y,E),((R=H&&H.onVnodeMounted)||xe||le)&&Ct(()=>{R&&un(R,T,p),xe&&te.enter(L),le&&Pr(p,null,T,"mounted")},C)},Q=(p,y,E,T,C)=>{if(E&&f(p,E),T)for(let P=0;P<T.length;P++)f(p,T[P]);if(C){let P=C.subTree;if(y===P){const V=C.vnode;Q(p,V,V.scopeId,V.slotScopeIds,C.parent)}}},oe=(p,y,E,T,C,P,V,O,L=0)=>{for(let R=L;R<p.length;R++){const X=p[R]=O?ir(p[R]):hn(p[R]);g(null,X,y,E,T,C,P,V,O)}},Ke=(p,y,E,T,C,P,V)=>{const O=y.el=p.el;let{patchFlag:L,dynamicChildren:R,dirs:X}=y;L|=p.patchFlag&16;const H=p.props||Ae,Z=y.props||Ae;let te;E&&Mr(E,!1),(te=Z.onVnodeBeforeUpdate)&&un(te,E,y,p),X&&Pr(y,p,E,"beforeUpdate"),E&&Mr(E,!0);const le=C&&y.type!=="foreignObject";if(R?At(p.dynamicChildren,R,O,E,T,le,P):V||he(p,y,O,null,E,T,le,P,!1),L>0){if(L&16)wt(O,y,H,Z,E,T,C);else if(L&2&&H.class!==Z.class&&s(O,"class",null,Z.class,C),L&4&&s(O,"style",H.style,Z.style,C),L&8){const xe=y.dynamicProps;for(let _e=0;_e<xe.length;_e++){const ze=xe[_e],Yt=H[ze],Di=Z[ze];(Di!==Yt||ze==="value")&&s(O,ze,Yt,Di,C,p.children,E,T,B)}}L&1&&p.children!==y.children&&u(O,y.children)}else!V&&R==null&&wt(O,y,H,Z,E,T,C);((te=Z.onVnodeUpdated)||X)&&Ct(()=>{te&&un(te,E,y,p),X&&Pr(y,p,E,"updated")},T)},At=(p,y,E,T,C,P,V)=>{for(let O=0;O<y.length;O++){const L=p[O],R=y[O],X=L.el&&(L.type===Xt||!$s(L,R)||L.shapeFlag&70)?h(L.el):E;g(L,R,X,null,T,C,P,V,!0)}},wt=(p,y,E,T,C,P,V)=>{if(E!==T){if(E!==Ae)for(const O in E)!Ka(O)&&!(O in T)&&s(p,O,E[O],null,V,y.children,C,P,B);for(const O in T){if(Ka(O))continue;const L=T[O],R=E[O];L!==R&&O!=="value"&&s(p,O,R,L,V,y.children,C,P,B)}"value"in T&&s(p,"value",E.value,T.value)}},qt=(p,y,E,T,C,P,V,O,L)=>{const R=y.el=p?p.el:a(""),X=y.anchor=p?p.anchor:a("");let{patchFlag:H,dynamicChildren:Z,slotScopeIds:te}=y;te&&(O=O?O.concat(te):te),p==null?(r(R,E,T),r(X,E,T),oe(y.children,E,X,C,P,V,O,L)):H>0&&H&64&&Z&&p.dynamicChildren?(At(p.dynamicChildren,Z,E,C,P,V,O),(y.key!=null||C&&y===C.subTree)&&ky(p,y,!0)):he(p,y,E,X,C,P,V,O,L)},Rn=(p,y,E,T,C,P,V,O,L)=>{y.slotScopeIds=O,p==null?y.shapeFlag&512?C.ctx.activate(y,E,T,V,L):Ht(y,E,T,C,P,V,L):Yn(p,y,L)},Ht=(p,y,E,T,C,P,V)=>{const O=p.component=v_(p,T,C);if(yy(p)&&(O.ctx.renderer=pe),w_(O),O.asyncDep){if(C&&C.registerDep(O,Se),!p.el){const L=O.subTree=Ce(oi);w(null,L,y,E)}return}Se(O,p,y,E,C,P,V)},Yn=(p,y,E)=>{const T=y.component=p.component;if(AI(p,y,E))if(T.asyncDep&&!T.asyncResolved){ce(T,y,E);return}else T.next=y,_I(T.update),T.update();else y.el=p.el,T.vnode=y},Se=(p,y,E,T,C,P,V)=>{const O=()=>{if(p.isMounted){let{next:X,bu:H,u:Z,parent:te,vnode:le}=p,xe=X,_e;Mr(p,!1),X?(X.el=le.el,ce(p,X,V)):X=le,H&&Jl(H),(_e=X.props&&X.props.onVnodeBeforeUpdate)&&un(_e,te,X,le),Mr(p,!0);const ze=Xl(p),Yt=p.subTree;p.subTree=ze,g(Yt,ze,h(Yt.el),F(Yt),p,C,P),X.el=ze.el,xe===null&&CI(p,ze.el),Z&&Ct(Z,C),(_e=X.props&&X.props.onVnodeUpdated)&&Ct(()=>un(_e,te,X,le),C)}else{let X;const{el:H,props:Z}=y,{bm:te,m:le,parent:xe}=p,_e=Qa(y);if(Mr(p,!1),te&&Jl(te),!_e&&(X=Z&&Z.onVnodeBeforeMount)&&un(X,xe,y),Mr(p,!0),H&&ae){const ze=()=>{p.subTree=Xl(p),ae(H,p.subTree,p,C,null)};_e?y.type.__asyncLoader().then(()=>!p.isUnmounted&&ze()):ze()}else{const ze=p.subTree=Xl(p);g(null,ze,E,T,p,C,P),y.el=ze.el}if(le&&Ct(le,C),!_e&&(X=Z&&Z.onVnodeMounted)){const ze=y;Ct(()=>un(X,xe,ze),C)}(y.shapeFlag&256||xe&&Qa(xe.vnode)&&xe.vnode.shapeFlag&256)&&p.a&&Ct(p.a,C),p.isMounted=!0,y=E=T=null}},L=p.effect=new qh(O,()=>Jh(R),p.scope),R=p.update=()=>L.run();R.id=p.uid,Mr(p,!0),R()},ce=(p,y,E)=>{y.component=p;const T=p.vnode.props;p.vnode=y,p.next=null,ZI(p,y.props,T,E),n_(p,y.children,E),_s(),lp(),bs()},he=(p,y,E,T,C,P,V,O,L=!1)=>{const R=p&&p.children,X=p?p.shapeFlag:0,H=y.children,{patchFlag:Z,shapeFlag:te}=y;if(Z>0){if(Z&128){cn(R,H,E,T,C,P,V,O,L);return}else if(Z&256){Ge(R,H,E,T,C,P,V,O,L);return}}te&8?(X&16&&B(R,C,P),H!==R&&u(E,H)):X&16?te&16?cn(R,H,E,T,C,P,V,O,L):B(R,C,P,!0):(X&8&&u(E,""),te&16&&oe(H,E,T,C,P,V,O,L))},Ge=(p,y,E,T,C,P,V,O,L)=>{p=p||zi,y=y||zi;const R=p.length,X=y.length,H=Math.min(R,X);let Z;for(Z=0;Z<H;Z++){const te=y[Z]=L?ir(y[Z]):hn(y[Z]);g(p[Z],te,E,null,C,P,V,O,L)}R>X?B(p,C,P,!0,!1,H):oe(y,E,T,C,P,V,O,L,H)},cn=(p,y,E,T,C,P,V,O,L)=>{let R=0;const X=y.length;let H=p.length-1,Z=X-1;for(;R<=H&&R<=Z;){const te=p[R],le=y[R]=L?ir(y[R]):hn(y[R]);if($s(te,le))g(te,le,E,null,C,P,V,O,L);else break;R++}for(;R<=H&&R<=Z;){const te=p[H],le=y[Z]=L?ir(y[Z]):hn(y[Z]);if($s(te,le))g(te,le,E,null,C,P,V,O,L);else break;H--,Z--}if(R>H){if(R<=Z){const te=Z+1,le=te<X?y[te].el:T;for(;R<=Z;)g(null,y[R]=L?ir(y[R]):hn(y[R]),E,le,C,P,V,O,L),R++}}else if(R>Z)for(;R<=H;)Be(p[R],C,P,!0),R++;else{const te=R,le=R,xe=new Map;for(R=le;R<=Z;R++){const Ft=y[R]=L?ir(y[R]):hn(y[R]);Ft.key!=null&&xe.set(Ft.key,R)}let _e,ze=0;const Yt=Z-le+1;let Di=!1,Xf=0;const Us=new Array(Yt);for(R=0;R<Yt;R++)Us[R]=0;for(R=te;R<=H;R++){const Ft=p[R];if(ze>=Yt){Be(Ft,C,P,!0);continue}let ln;if(Ft.key!=null)ln=xe.get(Ft.key);else for(_e=le;_e<=Z;_e++)if(Us[_e-le]===0&&$s(Ft,y[_e])){ln=_e;break}ln===void 0?Be(Ft,C,P,!0):(Us[ln-le]=R+1,ln>=Xf?Xf=ln:Di=!0,g(Ft,y[ln],E,null,C,P,V,O,L),ze++)}const Zf=Di?a_(Us):zi;for(_e=Zf.length-1,R=Yt-1;R>=0;R--){const Ft=le+R,ln=y[Ft],ep=Ft+1<X?y[Ft+1].el:T;Us[R]===0?g(null,ln,E,ep,C,P,V,O,L):Di&&(_e<0||R!==Zf[_e]?We(ln,E,ep,2):_e--)}}},We=(p,y,E,T,C=null)=>{const{el:P,type:V,transition:O,children:L,shapeFlag:R}=p;if(R&6){We(p.component.subTree,y,E,T);return}if(R&128){p.suspense.move(y,E,T);return}if(R&64){V.move(p,y,E,pe);return}if(V===Xt){r(P,y,E);for(let H=0;H<L.length;H++)We(L[H],y,E,T);r(p.anchor,y,E);return}if(V===Ya){_(p,y,E);return}if(T!==2&&R&1&&O)if(T===0)O.beforeEnter(P),r(P,y,E),Ct(()=>O.enter(P),C);else{const{leave:H,delayLeave:Z,afterLeave:te}=O,le=()=>r(P,y,E),xe=()=>{H(P,()=>{le(),te&&te()})};Z?Z(P,le,xe):xe()}else r(P,y,E)},Be=(p,y,E,T=!1,C=!1)=>{const{type:P,props:V,ref:O,children:L,dynamicChildren:R,shapeFlag:X,patchFlag:H,dirs:Z}=p;if(O!=null&&Fu(O,null,E,p,!0),X&256){y.ctx.deactivate(p);return}const te=X&1&&Z,le=!Qa(p);let xe;if(le&&(xe=V&&V.onVnodeBeforeUnmount)&&un(xe,y,p),X&6)S(p.component,E,T);else{if(X&128){p.suspense.unmount(E,T);return}te&&Pr(p,null,y,"beforeUnmount"),X&64?p.type.remove(p,y,E,C,pe,T):R&&(P!==Xt||H>0&&H&64)?B(R,y,E,!1,!0):(P===Xt&&H&384||!C&&X&16)&&B(L,y,E),T&&Qt(p)}(le&&(xe=V&&V.onVnodeUnmounted)||te)&&Ct(()=>{xe&&un(xe,y,p),te&&Pr(p,null,y,"unmounted")},E)},Qt=p=>{const{type:y,el:E,anchor:T,transition:C}=p;if(y===Xt){jt(E,T);return}if(y===Ya){N(p);return}const P=()=>{i(E),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:V,delayLeave:O}=C,L=()=>V(E,P);O?O(p.el,P,L):L()}else P()},jt=(p,y)=>{let E;for(;p!==y;)E=d(p),i(p),p=E;i(y)},S=(p,y,E)=>{const{bum:T,scope:C,update:P,subTree:V,um:O}=p;T&&Jl(T),C.stop(),P&&(P.active=!1,Be(V,p,y,E)),O&&Ct(O,y),Ct(()=>{p.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},B=(p,y,E,T=!1,C=!1,P=0)=>{for(let V=P;V<p.length;V++)Be(p[V],y,E,T,C)},F=p=>p.shapeFlag&6?F(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Y=(p,y,E)=>{p==null?y._vnode&&Be(y._vnode,null,null,!0):g(y._vnode||null,p,y,null,null,null,E),lp(),uy(),y._vnode=p},pe={p:g,um:Be,m:We,r:Qt,mt:Ht,mc:oe,pc:he,pbc:At,n:F,o:n};let Oe,ae;return e&&([Oe,ae]=e(pe)),{render:Y,hydrate:Oe,createApp:i_(Y,Oe)}}function Mr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ky(n,e,t=!1){const r=n.children,i=e.children;if(ie(r)&&ie(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ir(i[s]),a.el=o.el),t||ky(o,a)),a.type===Zc&&(a.el=o.el)}}function a_(n){const e=n.slice(),t=[0];let r,i,s,o,a;const c=n.length;for(r=0;r<c;r++){const l=n[r];if(l!==0){if(i=t[t.length-1],n[i]<l){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const c_=n=>n.__isTeleport,Xt=Symbol(void 0),Zc=Symbol(void 0),oi=Symbol(void 0),Ya=Symbol(void 0),ao=[];let tn=null;function Pt(n=!1){ao.push(tn=n?null:[])}function l_(){ao.pop(),tn=ao[ao.length-1]||null}let To=1;function vp(n){To+=n}function Ry(n){return n.dynamicChildren=To>0?tn||zi:null,l_(),To>0&&tn&&tn.push(n),n}function $t(n,e,t,r,i,s){return Ry(q(n,e,t,r,i,s,!0))}function u_(n,e,t,r,i){return Ry(Ce(n,e,t,r,i,!0))}function Vu(n){return n?n.__v_isVNode===!0:!1}function $s(n,e){return n.type===e.type&&n.key===e.key}const el="__vInternal",Dy=({key:n})=>n??null,Ja=({ref:n,ref_key:e,ref_for:t})=>n!=null?Ye(n)||gt(n)||se(n)?{i:en,r:n,k:e,f:!!t}:n:null;function q(n,e=null,t=null,r=0,i=null,s=n===Xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Dy(e),ref:e&&Ja(e),scopeId:Jc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:en};return a?(td(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=Ye(t)?8:16),To>0&&!o&&tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&tn.push(c),c}const Ce=h_;function h_(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===qI)&&(n=oi),Vu(n)){const a=es(n,e,!0);return t&&td(a,t),To>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(n)]=a:tn.push(a)),a.patchFlag|=-2,a}if(E_(n)&&(n=n.__vccOpts),e){e=d_(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=Fh(a)),Ne(c)&&(ey(c)&&!ie(c)&&(c=St({},c)),e.style=jh(c))}const o=Ye(n)?1:kI(n)?128:c_(n)?64:Ne(n)?4:se(n)?2:0;return q(n,e,t,r,i,o,s,!0)}function d_(n){return n?ey(n)||el in n?St({},n):n:null}function es(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?m_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Dy(a),ref:e&&e.ref?t&&i?ie(i)?i.concat(Ja(e)):[i,Ja(e)]:Ja(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function rr(n=" ",e=0){return Ce(Zc,null,n,e)}function f_(n,e){const t=Ce(Ya,null,n);return t.staticCount=e,t}function p_(n="",e=!1){return e?(Pt(),u_(oi,null,n)):Ce(oi,null,n)}function hn(n){return n==null||typeof n=="boolean"?Ce(oi):ie(n)?Ce(Xt,null,n.slice()):typeof n=="object"?ir(n):Ce(Zc,null,String(n))}function ir(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function td(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ie(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),td(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(el in e)?e._ctx=en:i===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:en},t=32):(e=String(e),r&64?(t=16,e=[rr(e)]):t=8);n.children=e,n.shapeFlag|=t}function m_(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fh([e.class,r.class]));else if(i==="style")e.style=jh([e.style,r.style]);else if(qc(i)){const s=e[i],o=r[i];o&&s!==o&&!(ie(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function un(n,e,t,r=null){sn(n,e,7,[t,r])}const g_=Cy();let y_=0;function v_(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||g_,s={uid:y_++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new jw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ey(r,i),emitsOptions:dy(r,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=EI.bind(null,s),n.ce&&n.ce(s),s}let He=null;const ts=n=>{He=n,n.scope.on()},ei=()=>{He&&He.scope.off(),He=null};function Ny(n){return n.vnode.shapeFlag&4}let So=!1;function w_(n,e=!1){So=e;const{props:t,children:r}=n.vnode,i=Ny(n);XI(n,t,i,e),t_(n,r);const s=i?I_(n,e):void 0;return So=!1,s}function I_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ty(new Proxy(n.ctx,KI));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?b_(n):null;ts(n),_s();const s=hr(r,n,0,[n.props,i]);if(bs(),ei(),Ug(s)){if(s.then(ei,ei),e)return s.then(o=>{wp(n,o,e)}).catch(o=>{Qc(o,n,0)});n.asyncDep=s}else wp(n,s,e)}else Oy(n,e)}function wp(n,e,t){se(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ne(e)&&(n.setupState=sy(e)),Oy(n,t)}let Ip;function Oy(n,e,t){const r=n.type;if(!n.render){if(!e&&Ip&&!r.render){const i=r.template||Zh(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,l=St(St({isCustomElement:s,delimiters:a},o),c);r.render=Ip(i,l)}}n.render=r.render||rn}ts(n),_s(),GI(n),bs(),ei()}function __(n){return new Proxy(n.attrs,{get(e,t){return Mt(n,"get","$attrs"),e[t]}})}function b_(n){const e=r=>{n.exposed=r||{}};let t;return{get attrs(){return t||(t=__(n))},slots:n.slots,emit:n.emit,expose:e}}function nd(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(sy(ty(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in oo)return oo[t](n)},has(e,t){return t in e||t in oo}}))}function x_(n,e=!0){return se(n)?n.displayName||n.name:n.name||e&&n.__name}function E_(n){return se(n)&&"__vccOpts"in n}const Kt=(n,e)=>vI(n,e,So);function pc(n,e,t){const r=arguments.length;return r===2?Ne(e)&&!ie(e)?Vu(e)?Ce(n,null,[e]):Ce(n,e):Ce(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Vu(t)&&(t=[t]),Ce(n,e,t))}const T_=Symbol(""),S_=()=>Ln(T_),A_="3.2.47",C_="http://www.w3.org/2000/svg",Br=typeof document<"u"?document:null,_p=Br&&Br.createElement("template"),k_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?Br.createElementNS(C_,n):Br.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Br.createTextNode(n),createComment:n=>Br.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Br.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{_p.innerHTML=r?`<svg>${n}</svg>`:n;const a=_p.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function R_(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function D_(n,e,t){const r=n.style,i=Ye(t);if(t&&!i){if(e&&!Ye(e))for(const s in e)t[s]==null&&Uu(r,s,"");for(const s in t)Uu(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const bp=/\s*!important$/;function Uu(n,e,t){if(ie(t))t.forEach(r=>Uu(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=N_(n,e);bp.test(t)?n.setProperty(Is(r),t.replace(bp,""),"important"):n[r]=t}}const xp=["Webkit","Moz","ms"],eu={};function N_(n,e){const t=eu[e];if(t)return t;let r=Tn(e);if(r!=="filter"&&r in n)return eu[e]=r;r=Gc(r);for(let i=0;i<xp.length;i++){const s=xp[i]+r;if(s in n)return eu[e]=s}return e}const Ep="http://www.w3.org/1999/xlink";function O_(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Ep,e.slice(6,e.length)):n.setAttributeNS(Ep,e,t);else{const s=Cw(e);t==null||s&&!jg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function P_(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t??"";(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=jg(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function M_(n,e,t,r){n.addEventListener(e,t,r)}function L_(n,e,t,r){n.removeEventListener(e,t,r)}function j_(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=F_(e);if(r){const l=s[e]=$_(r,i);M_(n,a,l,c)}else o&&(L_(n,a,o,c),s[e]=void 0)}}const Tp=/(?:Once|Passive|Capture)$/;function F_(n){let e;if(Tp.test(n)){e={};let r;for(;r=n.match(Tp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Is(n.slice(2)),e]}let tu=0;const V_=Promise.resolve(),U_=()=>tu||(V_.then(()=>tu=0),tu=Date.now());function $_(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;sn(B_(r,t.value),e,5,[r])};return t.value=n,t.attached=U_(),t}function B_(n,e){if(ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Sp=/^on[a-z]/,z_=(n,e,t,r,i=!1,s,o,a,c)=>{e==="class"?R_(n,r,i):e==="style"?D_(n,t,r):qc(e)?Vh(e)||j_(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q_(n,e,r,i))?P_(n,e,r,s,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),O_(n,e,r,i))};function q_(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Sp.test(e)&&se(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Sp.test(e)&&Ye(t)?!1:e in n}const H_=St({patchProp:z_},k_);let Ap;function K_(){return Ap||(Ap=s_(H_))}const G_=(...n)=>{const e=K_().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=W_(r);if(!i)return;const s=e._component;!se(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function W_(n){return Ye(n)?document.querySelector(n):n}var Q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ns={},J_={get exports(){return ns},set exports(n){ns=n}};(function(n,e){(function(r,i){n.exports=i()})(typeof self<"u"?self:Q_,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=r,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},i.r=function(s){Object.defineProperty(s,"__esModule",{value:!0})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=0)}({"./dist/icons.json":function(t){t.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":function(t,r,i){var s,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var a=function(){function c(){}c.prototype=Object.create(null);function l(w,b){for(var _=b.length,N=0;N<_;++N)g(w,b[N])}var u={}.hasOwnProperty;function h(w,b){w[b]=!0}function d(w,b){for(var _ in b)u.call(b,_)&&(w[_]=!!b[_])}var f=/\s+/;function m(w,b){for(var _=b.split(f),N=_.length,z=0;z<N;++z)w[_[z]]=!0}function g(w,b){if(b){var _=typeof b;_==="string"?m(w,b):Array.isArray(b)?l(w,b):_==="object"?d(w,b):_==="number"&&h(w,b)}}function v(){for(var w=arguments.length,b=Array(w),_=0;_<w;_++)b[_]=arguments[_];var N=new c;l(N,b);var z=[];for(var U in N)N[U]&&z.push(U);return z.join(" ")}return v}();typeof t<"u"&&t.exports?t.exports=a:(s=[],o=function(){return a}.apply(r,s),o!==void 0&&(t.exports=o))})()},"./node_modules/core-js/es/array/from.js":function(t,r,i){i("./node_modules/core-js/modules/es.string.iterator.js"),i("./node_modules/core-js/modules/es.array.from.js");var s=i("./node_modules/core-js/internals/path.js");t.exports=s.Array.from},"./node_modules/core-js/internals/a-function.js":function(t,r){t.exports=function(i){if(typeof i!="function")throw TypeError(String(i)+" is not a function");return i}},"./node_modules/core-js/internals/an-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/is-object.js");t.exports=function(o){if(!s(o))throw TypeError(String(o)+" is not an object");return o}},"./node_modules/core-js/internals/array-from.js":function(t,r,i){var s=i("./node_modules/core-js/internals/bind-context.js"),o=i("./node_modules/core-js/internals/to-object.js"),a=i("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),c=i("./node_modules/core-js/internals/is-array-iterator-method.js"),l=i("./node_modules/core-js/internals/to-length.js"),u=i("./node_modules/core-js/internals/create-property.js"),h=i("./node_modules/core-js/internals/get-iterator-method.js");t.exports=function(f){var m=o(f),g=typeof this=="function"?this:Array,v=arguments.length,w=v>1?arguments[1]:void 0,b=w!==void 0,_=0,N=h(m),z,U,Q,oe;if(b&&(w=s(w,v>2?arguments[2]:void 0,2)),N!=null&&!(g==Array&&c(N)))for(oe=N.call(m),U=new g;!(Q=oe.next()).done;_++)u(U,_,b?a(oe,w,[Q.value,_],!0):Q.value);else for(z=l(m.length),U=new g(z);z>_;_++)u(U,_,b?w(m[_],_):m[_]);return U.length=_,U}},"./node_modules/core-js/internals/array-includes.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-indexed-object.js"),o=i("./node_modules/core-js/internals/to-length.js"),a=i("./node_modules/core-js/internals/to-absolute-index.js");t.exports=function(c){return function(l,u,h){var d=s(l),f=o(d.length),m=a(h,f),g;if(c&&u!=u){for(;f>m;)if(g=d[m++],g!=g)return!0}else for(;f>m;m++)if((c||m in d)&&d[m]===u)return c||m||0;return!c&&-1}}},"./node_modules/core-js/internals/bind-context.js":function(t,r,i){var s=i("./node_modules/core-js/internals/a-function.js");t.exports=function(o,a,c){if(s(o),a===void 0)return o;switch(c){case 0:return function(){return o.call(a)};case 1:return function(l){return o.call(a,l)};case 2:return function(l,u){return o.call(a,l,u)};case 3:return function(l,u,h){return o.call(a,l,u,h)}}return function(){return o.apply(a,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(t,r,i){var s=i("./node_modules/core-js/internals/an-object.js");t.exports=function(o,a,c,l){try{return l?a(s(c)[0],c[1]):a(c)}catch(h){var u=o.return;throw u!==void 0&&s(u.call(o)),h}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":function(t,r,i){var s=i("./node_modules/core-js/internals/well-known-symbol.js"),o=s("iterator"),a=!1;try{var c=0,l={next:function(){return{done:!!c++}},return:function(){a=!0}};l[o]=function(){return this},Array.from(l,function(){throw 2})}catch{}t.exports=function(u,h){if(!h&&!a)return!1;var d=!1;try{var f={};f[o]=function(){return{next:function(){return{done:d=!0}}}},u(f)}catch{}return d}},"./node_modules/core-js/internals/classof-raw.js":function(t,r){var i={}.toString;t.exports=function(s){return i.call(s).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":function(t,r,i){var s=i("./node_modules/core-js/internals/classof-raw.js"),o=i("./node_modules/core-js/internals/well-known-symbol.js"),a=o("toStringTag"),c=s(function(){return arguments}())=="Arguments",l=function(u,h){try{return u[h]}catch{}};t.exports=function(u){var h,d,f;return u===void 0?"Undefined":u===null?"Null":typeof(d=l(h=Object(u),a))=="string"?d:c?s(h):(f=s(h))=="Object"&&typeof h.callee=="function"?"Arguments":f}},"./node_modules/core-js/internals/copy-constructor-properties.js":function(t,r,i){var s=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/own-keys.js"),a=i("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),c=i("./node_modules/core-js/internals/object-define-property.js");t.exports=function(l,u){for(var h=o(u),d=c.f,f=a.f,m=0;m<h.length;m++){var g=h[m];s(l,g)||d(l,g,f(u,g))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js");t.exports=!s(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":function(t,r,i){var s=i("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=i("./node_modules/core-js/internals/object-create.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js"),c=i("./node_modules/core-js/internals/set-to-string-tag.js"),l=i("./node_modules/core-js/internals/iterators.js"),u=function(){return this};t.exports=function(h,d,f){var m=d+" Iterator";return h.prototype=o(s,{next:a(1,f)}),c(h,m,!1,!0),l[m]=u,h}},"./node_modules/core-js/internals/create-property-descriptor.js":function(t,r){t.exports=function(i,s){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:s}}},"./node_modules/core-js/internals/create-property.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-primitive.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=function(c,l,u){var h=s(l);h in c?o.f(c,h,a(0,u)):c[h]=u}},"./node_modules/core-js/internals/define-iterator.js":function(t,r,i){var s=i("./node_modules/core-js/internals/export.js"),o=i("./node_modules/core-js/internals/create-iterator-constructor.js"),a=i("./node_modules/core-js/internals/object-get-prototype-of.js"),c=i("./node_modules/core-js/internals/object-set-prototype-of.js"),l=i("./node_modules/core-js/internals/set-to-string-tag.js"),u=i("./node_modules/core-js/internals/hide.js"),h=i("./node_modules/core-js/internals/redefine.js"),d=i("./node_modules/core-js/internals/well-known-symbol.js"),f=i("./node_modules/core-js/internals/is-pure.js"),m=i("./node_modules/core-js/internals/iterators.js"),g=i("./node_modules/core-js/internals/iterators-core.js"),v=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,b=d("iterator"),_="keys",N="values",z="entries",U=function(){return this};t.exports=function(Q,oe,Ke,At,wt,qt,Rn){o(Ke,oe,At);var Ht=function(jt){if(jt===wt&&Ge)return Ge;if(!w&&jt in ce)return ce[jt];switch(jt){case _:return function(){return new Ke(this,jt)};case N:return function(){return new Ke(this,jt)};case z:return function(){return new Ke(this,jt)}}return function(){return new Ke(this)}},Yn=oe+" Iterator",Se=!1,ce=Q.prototype,he=ce[b]||ce["@@iterator"]||wt&&ce[wt],Ge=!w&&he||Ht(wt),cn=oe=="Array"&&ce.entries||he,We,Be,Qt;if(cn&&(We=a(cn.call(new Q)),v!==Object.prototype&&We.next&&(!f&&a(We)!==v&&(c?c(We,v):typeof We[b]!="function"&&u(We,b,U)),l(We,Yn,!0,!0),f&&(m[Yn]=U))),wt==N&&he&&he.name!==N&&(Se=!0,Ge=function(){return he.call(this)}),(!f||Rn)&&ce[b]!==Ge&&u(ce,b,Ge),m[oe]=Ge,wt)if(Be={values:Ht(N),keys:qt?Ge:Ht(_),entries:Ht(z)},Rn)for(Qt in Be)(w||Se||!(Qt in ce))&&h(ce,Qt,Be[Qt]);else s({target:oe,proto:!0,forced:w||Se},Be);return Be}},"./node_modules/core-js/internals/descriptors.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js");t.exports=!s(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/document-create-element.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/is-object.js"),a=s.document,c=o(a)&&o(a.createElement);t.exports=function(l){return c?a.createElement(l):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,a=i("./node_modules/core-js/internals/hide.js"),c=i("./node_modules/core-js/internals/redefine.js"),l=i("./node_modules/core-js/internals/set-global.js"),u=i("./node_modules/core-js/internals/copy-constructor-properties.js"),h=i("./node_modules/core-js/internals/is-forced.js");t.exports=function(d,f){var m=d.target,g=d.global,v=d.stat,w,b,_,N,z,U;if(g?b=s:v?b=s[m]||l(m,{}):b=(s[m]||{}).prototype,b)for(_ in f){if(z=f[_],d.noTargetGet?(U=o(b,_),N=U&&U.value):N=b[_],w=h(g?_:m+(v?".":"#")+_,d.forced),!w&&N!==void 0){if(typeof z==typeof N)continue;u(z,N)}(d.sham||N&&N.sham)&&a(z,"sham",!0),c(b,_,z,d)}}},"./node_modules/core-js/internals/fails.js":function(t,r){t.exports=function(i){try{return!!i()}catch{return!0}}},"./node_modules/core-js/internals/function-to-string.js":function(t,r,i){var s=i("./node_modules/core-js/internals/shared.js");t.exports=s("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":function(t,r,i){var s=i("./node_modules/core-js/internals/classof.js"),o=i("./node_modules/core-js/internals/iterators.js"),a=i("./node_modules/core-js/internals/well-known-symbol.js"),c=a("iterator");t.exports=function(l){if(l!=null)return l[c]||l["@@iterator"]||o[s(l)]}},"./node_modules/core-js/internals/global.js":function(t,r,i){(function(s){var o="object",a=function(c){return c&&c.Math==Math&&c};t.exports=a(typeof globalThis==o&&globalThis)||a(typeof window==o&&window)||a(typeof self==o&&self)||a(typeof s==o&&s)||Function("return this")()}).call(this,i("./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":function(t,r){var i={}.hasOwnProperty;t.exports=function(s,o){return i.call(s,o)}},"./node_modules/core-js/internals/hidden-keys.js":function(t,r){t.exports={}},"./node_modules/core-js/internals/hide.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=s?function(c,l,u){return o.f(c,l,a(1,u))}:function(c,l,u){return c[l]=u,c}},"./node_modules/core-js/internals/html.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=s.document;t.exports=o&&o.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/fails.js"),a=i("./node_modules/core-js/internals/document-create-element.js");t.exports=!s&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/indexed-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js"),o=i("./node_modules/core-js/internals/classof-raw.js"),a="".split;t.exports=s(function(){return!Object("z").propertyIsEnumerable(0)})?function(c){return o(c)=="String"?a.call(c,""):Object(c)}:Object},"./node_modules/core-js/internals/internal-state.js":function(t,r,i){var s=i("./node_modules/core-js/internals/native-weak-map.js"),o=i("./node_modules/core-js/internals/global.js"),a=i("./node_modules/core-js/internals/is-object.js"),c=i("./node_modules/core-js/internals/hide.js"),l=i("./node_modules/core-js/internals/has.js"),u=i("./node_modules/core-js/internals/shared-key.js"),h=i("./node_modules/core-js/internals/hidden-keys.js"),d=o.WeakMap,f,m,g,v=function(Q){return g(Q)?m(Q):f(Q,{})},w=function(Q){return function(oe){var Ke;if(!a(oe)||(Ke=m(oe)).type!==Q)throw TypeError("Incompatible receiver, "+Q+" required");return Ke}};if(s){var b=new d,_=b.get,N=b.has,z=b.set;f=function(Q,oe){return z.call(b,Q,oe),oe},m=function(Q){return _.call(b,Q)||{}},g=function(Q){return N.call(b,Q)}}else{var U=u("state");h[U]=!0,f=function(Q,oe){return c(Q,U,oe),oe},m=function(Q){return l(Q,U)?Q[U]:{}},g=function(Q){return l(Q,U)}}t.exports={set:f,get:m,has:g,enforce:v,getterFor:w}},"./node_modules/core-js/internals/is-array-iterator-method.js":function(t,r,i){var s=i("./node_modules/core-js/internals/well-known-symbol.js"),o=i("./node_modules/core-js/internals/iterators.js"),a=s("iterator"),c=Array.prototype;t.exports=function(l){return l!==void 0&&(o.Array===l||c[a]===l)}},"./node_modules/core-js/internals/is-forced.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,a=function(d,f){var m=l[c(d)];return m==h?!0:m==u?!1:typeof f=="function"?s(f):!!f},c=a.normalize=function(d){return String(d).replace(o,".").toLowerCase()},l=a.data={},u=a.NATIVE="N",h=a.POLYFILL="P";t.exports=a},"./node_modules/core-js/internals/is-object.js":function(t,r){t.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},"./node_modules/core-js/internals/is-pure.js":function(t,r){t.exports=!1},"./node_modules/core-js/internals/iterators-core.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-get-prototype-of.js"),o=i("./node_modules/core-js/internals/hide.js"),a=i("./node_modules/core-js/internals/has.js"),c=i("./node_modules/core-js/internals/well-known-symbol.js"),l=i("./node_modules/core-js/internals/is-pure.js"),u=c("iterator"),h=!1,d=function(){return this},f,m,g;[].keys&&(g=[].keys(),"next"in g?(m=s(s(g)),m!==Object.prototype&&(f=m)):h=!0),f==null&&(f={}),!l&&!a(f,u)&&o(f,u,d),t.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:h}},"./node_modules/core-js/internals/iterators.js":function(t,r){t.exports={}},"./node_modules/core-js/internals/native-symbol.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js");t.exports=!!Object.getOwnPropertySymbols&&!s(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/function-to-string.js"),a=s.WeakMap;t.exports=typeof a=="function"&&/native code/.test(o.call(a))},"./node_modules/core-js/internals/object-create.js":function(t,r,i){var s=i("./node_modules/core-js/internals/an-object.js"),o=i("./node_modules/core-js/internals/object-define-properties.js"),a=i("./node_modules/core-js/internals/enum-bug-keys.js"),c=i("./node_modules/core-js/internals/hidden-keys.js"),l=i("./node_modules/core-js/internals/html.js"),u=i("./node_modules/core-js/internals/document-create-element.js"),h=i("./node_modules/core-js/internals/shared-key.js"),d=h("IE_PROTO"),f="prototype",m=function(){},g=function(){var v=u("iframe"),w=a.length,b="<",_="script",N=">",z="java"+_+":",U;for(v.style.display="none",l.appendChild(v),v.src=String(z),U=v.contentWindow.document,U.open(),U.write(b+_+N+"document.F=Object"+b+"/"+_+N),U.close(),g=U.F;w--;)delete g[f][a[w]];return g()};t.exports=Object.create||function(w,b){var _;return w!==null?(m[f]=s(w),_=new m,m[f]=null,_[d]=w):_=g(),b===void 0?_:o(_,b)},c[d]=!0},"./node_modules/core-js/internals/object-define-properties.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/an-object.js"),c=i("./node_modules/core-js/internals/object-keys.js");t.exports=s?Object.defineProperties:function(u,h){a(u);for(var d=c(h),f=d.length,m=0,g;f>m;)o.f(u,g=d[m++],h[g]);return u}},"./node_modules/core-js/internals/object-define-property.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/ie8-dom-define.js"),a=i("./node_modules/core-js/internals/an-object.js"),c=i("./node_modules/core-js/internals/to-primitive.js"),l=Object.defineProperty;r.f=s?l:function(h,d,f){if(a(h),d=c(d,!0),a(f),o)try{return l(h,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported");return"value"in f&&(h[d]=f.value),h}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-property-is-enumerable.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js"),c=i("./node_modules/core-js/internals/to-indexed-object.js"),l=i("./node_modules/core-js/internals/to-primitive.js"),u=i("./node_modules/core-js/internals/has.js"),h=i("./node_modules/core-js/internals/ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;r.f=s?d:function(m,g){if(m=c(m),g=l(g,!0),h)try{return d(m,g)}catch{}if(u(m,g))return a(!o.f.call(m,g),m[g])}},"./node_modules/core-js/internals/object-get-own-property-names.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-keys-internal.js"),o=i("./node_modules/core-js/internals/enum-bug-keys.js"),a=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(l){return s(l,a)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":function(t,r){r.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":function(t,r,i){var s=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/to-object.js"),a=i("./node_modules/core-js/internals/shared-key.js"),c=i("./node_modules/core-js/internals/correct-prototype-getter.js"),l=a("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(h){return h=o(h),s(h,l)?h[l]:typeof h.constructor=="function"&&h instanceof h.constructor?h.constructor.prototype:h instanceof Object?u:null}},"./node_modules/core-js/internals/object-keys-internal.js":function(t,r,i){var s=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/to-indexed-object.js"),a=i("./node_modules/core-js/internals/array-includes.js"),c=i("./node_modules/core-js/internals/hidden-keys.js"),l=a(!1);t.exports=function(u,h){var d=o(u),f=0,m=[],g;for(g in d)!s(c,g)&&s(d,g)&&m.push(g);for(;h.length>f;)s(d,g=h[f++])&&(~l(m,g)||m.push(g));return m}},"./node_modules/core-js/internals/object-keys.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-keys-internal.js"),o=i("./node_modules/core-js/internals/enum-bug-keys.js");t.exports=Object.keys||function(c){return s(c,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":function(t,r,i){var s={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!s.call({1:2},1);r.f=a?function(l){var u=o(this,l);return!!u&&u.enumerable}:s},"./node_modules/core-js/internals/object-set-prototype-of.js":function(t,r,i){var s=i("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var o=!1,a={},c;try{c=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,c.call(a,[]),o=a instanceof Array}catch{}return function(u,h){return s(u,h),o?c.call(u,h):u.__proto__=h,u}}():void 0)},"./node_modules/core-js/internals/own-keys.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/object-get-own-property-names.js"),a=i("./node_modules/core-js/internals/object-get-own-property-symbols.js"),c=i("./node_modules/core-js/internals/an-object.js"),l=s.Reflect;t.exports=l&&l.ownKeys||function(h){var d=o.f(c(h)),f=a.f;return f?d.concat(f(h)):d}},"./node_modules/core-js/internals/path.js":function(t,r,i){t.exports=i("./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/shared.js"),a=i("./node_modules/core-js/internals/hide.js"),c=i("./node_modules/core-js/internals/has.js"),l=i("./node_modules/core-js/internals/set-global.js"),u=i("./node_modules/core-js/internals/function-to-string.js"),h=i("./node_modules/core-js/internals/internal-state.js"),d=h.get,f=h.enforce,m=String(u).split("toString");o("inspectSource",function(g){return u.call(g)}),(t.exports=function(g,v,w,b){var _=b?!!b.unsafe:!1,N=b?!!b.enumerable:!1,z=b?!!b.noTargetGet:!1;if(typeof w=="function"&&(typeof v=="string"&&!c(w,"name")&&a(w,"name",v),f(w).source=m.join(typeof v=="string"?v:"")),g===s){N?g[v]=w:l(v,w);return}else _?!z&&g[v]&&(N=!0):delete g[v];N?g[v]=w:a(g,v,w)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||u.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":function(t,r){t.exports=function(i){if(i==null)throw TypeError("Can't call method on "+i);return i}},"./node_modules/core-js/internals/set-global.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/hide.js");t.exports=function(a,c){try{o(s,a,c)}catch{s[a]=c}return c}},"./node_modules/core-js/internals/set-to-string-tag.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-define-property.js").f,o=i("./node_modules/core-js/internals/has.js"),a=i("./node_modules/core-js/internals/well-known-symbol.js"),c=a("toStringTag");t.exports=function(l,u,h){l&&!o(l=h?l:l.prototype,c)&&s(l,c,{configurable:!0,value:u})}},"./node_modules/core-js/internals/shared-key.js":function(t,r,i){var s=i("./node_modules/core-js/internals/shared.js"),o=i("./node_modules/core-js/internals/uid.js"),a=s("keys");t.exports=function(c){return a[c]||(a[c]=o(c))}},"./node_modules/core-js/internals/shared.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/set-global.js"),a=i("./node_modules/core-js/internals/is-pure.js"),c="__core-js_shared__",l=s[c]||o(c,{});(t.exports=function(u,h){return l[u]||(l[u]=h!==void 0?h:{})})("versions",[]).push({version:"3.1.3",mode:a?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-integer.js"),o=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(a,c,l){var u=String(o(a)),h=s(c),d=u.length,f,m;return h<0||h>=d?l?"":void 0:(f=u.charCodeAt(h),f<55296||f>56319||h+1===d||(m=u.charCodeAt(h+1))<56320||m>57343?l?u.charAt(h):f:l?u.slice(h,h+2):(f-55296<<10)+(m-56320)+65536)}},"./node_modules/core-js/internals/to-absolute-index.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-integer.js"),o=Math.max,a=Math.min;t.exports=function(c,l){var u=s(c);return u<0?o(u+l,0):a(u,l)}},"./node_modules/core-js/internals/to-indexed-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/indexed-object.js"),o=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(a){return s(o(a))}},"./node_modules/core-js/internals/to-integer.js":function(t,r){var i=Math.ceil,s=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?s:i)(o)}},"./node_modules/core-js/internals/to-length.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-integer.js"),o=Math.min;t.exports=function(a){return a>0?o(s(a),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(o){return Object(s(o))}},"./node_modules/core-js/internals/to-primitive.js":function(t,r,i){var s=i("./node_modules/core-js/internals/is-object.js");t.exports=function(o,a){if(!s(o))return o;var c,l;if(a&&typeof(c=o.toString)=="function"&&!s(l=c.call(o))||typeof(c=o.valueOf)=="function"&&!s(l=c.call(o))||!a&&typeof(c=o.toString)=="function"&&!s(l=c.call(o)))return l;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":function(t,r){var i=0,s=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++i+s).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":function(t,r,i){var s=i("./node_modules/core-js/internals/is-object.js"),o=i("./node_modules/core-js/internals/an-object.js");t.exports=function(a,c){if(o(a),!s(c)&&c!==null)throw TypeError("Can't set "+String(c)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/shared.js"),a=i("./node_modules/core-js/internals/uid.js"),c=i("./node_modules/core-js/internals/native-symbol.js"),l=s.Symbol,u=o("wks");t.exports=function(h){return u[h]||(u[h]=c&&l[h]||(c?l:a)("Symbol."+h))}},"./node_modules/core-js/modules/es.array.from.js":function(t,r,i){var s=i("./node_modules/core-js/internals/export.js"),o=i("./node_modules/core-js/internals/array-from.js"),a=i("./node_modules/core-js/internals/check-correctness-of-iteration.js"),c=!a(function(l){Array.from(l)});s({target:"Array",stat:!0,forced:c},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":function(t,r,i){var s=i("./node_modules/core-js/internals/string-at.js"),o=i("./node_modules/core-js/internals/internal-state.js"),a=i("./node_modules/core-js/internals/define-iterator.js"),c="String Iterator",l=o.set,u=o.getterFor(c);a(String,"String",function(h){l(this,{type:c,string:String(h),index:0})},function(){var d=u(this),f=d.string,m=d.index,g;return m>=f.length?{value:void 0,done:!0}:(g=s(f,m,!0),d.index+=g.length,{value:g,done:!1})})},"./node_modules/webpack/buildin/global.js":function(t,r){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}t.exports=i},"./src/default-attrs.json":function(t){t.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(g){for(var v=1;v<arguments.length;v++){var w=arguments[v];for(var b in w)Object.prototype.hasOwnProperty.call(w,b)&&(g[b]=w[b])}return g},o=function(){function g(v,w){for(var b=0;b<w.length;b++){var _=w[b];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(v,_.key,_)}}return function(v,w,b){return w&&g(v.prototype,w),b&&g(v,b),v}}(),a=i("./node_modules/classnames/dedupe.js"),c=h(a),l=i("./src/default-attrs.json"),u=h(l);function h(g){return g&&g.__esModule?g:{default:g}}function d(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}var f=function(){function g(v,w){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];d(this,g),this.name=v,this.contents=w,this.tags=b,this.attrs=s({},u.default,{class:"feather feather-"+v})}return o(g,[{key:"toSvg",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=s({},this.attrs,w,{class:(0,c.default)(this.attrs.class,w.class)});return"<svg "+m(b)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),g}();function m(g){return Object.keys(g).map(function(v){return v+'="'+g[v]+'"'}).join(" ")}r.default=f},"./src/icons.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i("./src/icon.js"),o=h(s),a=i("./dist/icons.json"),c=h(a),l=i("./src/tags.json"),u=h(l);function h(d){return d&&d.__esModule?d:{default:d}}r.default=Object.keys(c.default).map(function(d){return new o.default(d,c.default[d],u.default[d])}).reduce(function(d,f){return d[f.name]=f,d},{})},"./src/index.js":function(t,r,i){var s=i("./src/icons.js"),o=h(s),a=i("./src/to-svg.js"),c=h(a),l=i("./src/replace.js"),u=h(l);function h(d){return d&&d.__esModule?d:{default:d}}t.exports={icons:o.default,toSvg:c.default,replace:u.default}},"./src/replace.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var v=arguments[g];for(var w in v)Object.prototype.hasOwnProperty.call(v,w)&&(m[w]=v[w])}return m},o=i("./node_modules/classnames/dedupe.js"),a=u(o),c=i("./src/icons.js"),l=u(c);function u(m){return m&&m.__esModule?m:{default:m}}function h(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var g=document.querySelectorAll("[data-feather]");Array.from(g).forEach(function(v){return d(v,m)})}function d(m){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=f(m),w=v["data-feather"];delete v["data-feather"];var b=l.default[w].toSvg(s({},g,v,{class:(0,a.default)(g.class,v.class)})),_=new DOMParser().parseFromString(b,"image/svg+xml"),N=_.querySelector("svg");m.parentNode.replaceChild(N,m)}function f(m){return Array.from(m.attributes).reduce(function(g,v){return g[v.name]=v.value,g},{})}r.default=h},"./src/tags.json":function(t){t.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i("./src/icons.js"),o=a(s);function a(l){return l&&l.__esModule?l:{default:l}}function c(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!l)throw new Error("The required `key` (icon name) parameter is missing.");if(!o.default[l])throw new Error("No icon matching '"+l+"'. See the complete list of icons at https://feathericons.com");return o.default[l].toSvg(u)}r.default=c},0:function(t,r,i){i("./node_modules/core-js/es/array/from.js"),t.exports=i("./src/index.js")}})})})(J_);const rd=Y_(ns),X_=bw({__proto__:null,default:rd},[ns]);const Sr=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t};rd.replace();function Z_(){return!!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}console.log(Z_());const eb={},tb={class:"app"},nb={class:"navbar"};function rb(n,e,t,r,i,s){const o=dc("navbar"),a=dc("router-view");return Pt(),$t("div",tb,[q("div",nb,[Ce(o),Ce(a)])])}const ib=Sr(eb,[["render",rb]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Li=typeof window<"u";function sb(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const we=Object.assign;function nu(n,e){const t={};for(const r in e){const i=e[r];t[r]=on(i)?i.map(n):n(i)}return t}const co=()=>{},on=Array.isArray,ob=/\/$/,ab=n=>n.replace(ob,"");function ru(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=hb(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function cb(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Cp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function lb(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&rs(e.matched[r],t.matched[i])&&Py(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function rs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Py(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ub(n[t],e[t]))return!1;return!0}function ub(n,e){return on(n)?kp(n,e):on(e)?kp(e,n):n===e}function kp(n,e){return on(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function hb(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/");let i=t.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Ao;(function(n){n.pop="pop",n.push="push"})(Ao||(Ao={}));var lo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(lo||(lo={}));function db(n){if(!n)if(Li){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ab(n)}const fb=/^[^#]+#/;function pb(n,e){return n.replace(fb,"#")+e}function mb(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const tl=()=>({left:window.pageXOffset,top:window.pageYOffset});function gb(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=mb(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rp(n,e){return(history.state?history.state.position-e:-1)+n}const $u=new Map;function yb(n,e){$u.set(n,e)}function vb(n){const e=$u.get(n);return $u.delete(n),e}let wb=()=>location.protocol+"//"+location.host;function My(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Cp(c,"")}return Cp(t,n)+r+i}function Ib(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=My(n,location),m=t.value,g=e.value;let v=0;if(d){if(t.value=f,e.value=d,o&&o===m){o=null;return}v=g?d.position-g.position:0}else r(f);i.forEach(w=>{w(t.value,m,{delta:v,type:Ao.pop,direction:v?v>0?lo.forward:lo.back:lo.unknown})})};function c(){o=t.value}function l(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:tl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Dp(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?tl():null}}function _b(n){const{history:e,location:t}=window,r={value:My(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:wb()+n+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function o(c,l){const u=we({},e.state,Dp(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=we({},i.value,e.state,{forward:c,scroll:tl()});s(u.current,u,!0);const h=we({},Dp(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function bb(n){n=db(n);const e=_b(n),t=Ib(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=we({location:"",base:n,go:r,createHref:pb.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function xb(n){return typeof n=="string"||n&&typeof n=="object"}function Ly(n){return typeof n=="string"||typeof n=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jy=Symbol("");var Np;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Np||(Np={}));function is(n,e){return we(new Error,{type:n,[jy]:!0},e)}function Dn(n,e){return n instanceof Error&&jy in n&&(e==null||!!(n.type&e))}const Op="[^/]+?",Eb={sensitive:!1,strict:!1,start:!0,end:!0},Tb=/[.+*?^${}()[\]/\\]/g;function Sb(n,e){const t=we({},Eb,e),r=[];let i=t.start?"^":"";const s=[];for(const l of n){const u=l.length?[]:[90];t.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Tb,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:g,optional:v,regexp:w}=d;s.push({name:m,repeatable:g,optional:v});const b=w||Op;if(b!==Op){f+=10;try{new RegExp(`(${b})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+N.message)}}let _=g?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(_=v&&l.length<2?`(?:/${_})`:"/"+_),v&&(_+="?"),i+=_,f+=20,v&&(f+=-8),g&&(f+=-20),b===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=s[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:g,optional:v}=f,w=m in l?l[m]:"";if(on(w)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=on(w)?w.join("/"):w;if(!b)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function Ab(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cb(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=Ab(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(Pp(r))return 1;if(Pp(i))return-1}return i.length-r.length}function Pp(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const kb={type:0,value:""},Rb=/[a-zA-Z0-9_]/;function Db(n){if(!n)return[[]];if(n==="/")return[[kb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${l}": ${f}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){l&&(t===0?s.push({type:0,value:l}):t===1||t===2||t===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:Rb.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=3:u+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function Nb(n,e,t){const r=Sb(Db(n.path),t),i=we(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ob(n,e){const t=[],r=new Map;e=jp({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,m=Pb(u);m.aliasOf=d&&d.record;const g=jp(e,u),v=[m];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of _)v.push(we({},m,{components:d?d.record.components:m.components,path:N,aliasOf:d?d.record:m}))}let w,b;for(const _ of v){const{path:N}=_;if(h&&N[0]!=="/"){const z=h.record.path,U=z[z.length-1]==="/"?"":"/";_.path=h.record.path+(N&&U+N)}if(w=Nb(_,h,g),d?d.alias.push(w):(b=b||w,b!==w&&b.alias.push(w),f&&u.name&&!Lp(w)&&o(u.name)),m.children){const z=m.children;for(let U=0;U<z.length;U++)s(z[U],w,d&&d.children[U])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return b?()=>{o(b)}:co}function o(u){if(Ly(u)){const h=r.get(u);h&&(r.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function c(u){let h=0;for(;h<t.length&&Cb(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Fy(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Lp(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},m,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw is(1,{location:u});g=d.record.name,f=we(Mp(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Mp(u.params,d.keys.map(b=>b.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=t.find(b=>b.re.test(m)),d&&(f=d.parse(m),g=d.record.name);else{if(d=h.name?r.get(h.name):t.find(b=>b.re.test(h.path)),!d)throw is(1,{location:u,currentLocation:h});g=d.record.name,f=we({},h.params,u.params),m=d.stringify(f)}const v=[];let w=d;for(;w;)v.unshift(w.record),w=w.parent;return{name:g,path:m,params:f,matched:v,meta:Lb(v)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Mp(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function Pb(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Mb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Mb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function Lp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Lb(n){return n.reduce((e,t)=>we(e,t.meta),{})}function jp(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Fy(n,e){return e.children.some(t=>t===n||Fy(n,t))}const Vy=/#/g,jb=/&/g,Fb=/\//g,Vb=/=/g,Ub=/\?/g,Uy=/\+/g,$b=/%5B/g,Bb=/%5D/g,$y=/%5E/g,zb=/%60/g,By=/%7B/g,qb=/%7C/g,zy=/%7D/g,Hb=/%20/g;function id(n){return encodeURI(""+n).replace(qb,"|").replace($b,"[").replace(Bb,"]")}function Kb(n){return id(n).replace(By,"{").replace(zy,"}").replace($y,"^")}function Bu(n){return id(n).replace(Uy,"%2B").replace(Hb,"+").replace(Vy,"%23").replace(jb,"%26").replace(zb,"`").replace(By,"{").replace(zy,"}").replace($y,"^")}function Gb(n){return Bu(n).replace(Vb,"%3D")}function Wb(n){return id(n).replace(Vy,"%23").replace(Ub,"%3F")}function Qb(n){return n==null?"":Wb(n).replace(Fb,"%2F")}function mc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Yb(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Uy," "),o=s.indexOf("="),a=mc(o<0?s:s.slice(0,o)),c=o<0?null:mc(s.slice(o+1));if(a in e){let l=e[a];on(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Fp(n){let e="";for(let t in n){const r=n[t];if(t=Gb(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(on(r)?r.map(s=>s&&Bu(s)):[r&&Bu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Jb(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=on(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const Xb=Symbol(""),Vp=Symbol(""),sd=Symbol(""),qy=Symbol(""),zu=Symbol("");function Bs(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function sr(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(is(4,{from:t,to:e})):h instanceof Error?a(h):xb(h)?a(is(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=n.call(r&&r.instances[i],e,t,c);let u=Promise.resolve(l);n.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function iu(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Zb(a)){const l=(a.__vccOpts||a)[e];l&&i.push(sr(l,t,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=sb(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&sr(d,t,r,s,o)()}))}}return i}function Zb(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Up(n){const e=Ln(sd),t=Ln(qy),r=Kt(()=>e.resolve(Ki(n.to))),i=Kt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(rs.bind(null,u));if(d>-1)return d;const f=$p(c[l-2]);return l>1&&$p(u)===f&&h[h.length-1].path!==f?h.findIndex(rs.bind(null,c[l-2])):d}),s=Kt(()=>i.value>-1&&rx(t.params,r.value.params)),o=Kt(()=>i.value>-1&&i.value===t.matched.length-1&&Py(t.params,r.value.params));function a(c={}){return nx(c)?e[Ki(n.replace)?"replace":"push"](Ki(n.to)).catch(co):Promise.resolve()}return{route:r,href:Kt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const ex=Xh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Up,setup(n,{slots:e}){const t=ea(Up(n)),{options:r}=Ln(sd),i=Kt(()=>({[Bp(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[Bp(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:pc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),tx=ex;function nx(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function rx(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!on(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function $p(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Bp=(n,e,t)=>n??e??t,ix=Xh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Ln(zu),i=Kt(()=>n.route||r.value),s=Ln(Vp,0),o=Kt(()=>{let l=Ki(s);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Kt(()=>i.value.matched[o.value]);Ga(Vp,Kt(()=>o.value+1)),Ga(Xb,a),Ga(zu,i);const c=fI();return Wa(()=>[c.value,a.value,n.name],([l,u,h],[d,f,m])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!rs(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=i.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return zp(t.default,{Component:d,route:l});const f=h.props[u],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,v=pc(d,we({},m,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return zp(t.default,{Component:v,route:l})||v}}});function zp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const sx=ix;function ox(n){const e=Ob(n.routes,n),t=n.parseQuery||Yb,r=n.stringifyQuery||Fp,i=n.history,s=Bs(),o=Bs(),a=Bs(),c=pI(Xn);let l=Xn;Li&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nu.bind(null,S=>""+S),h=nu.bind(null,Qb),d=nu.bind(null,mc);function f(S,B){let F,Y;return Ly(S)?(F=e.getRecordMatcher(S),Y=B):Y=S,e.addRoute(Y,F)}function m(S){const B=e.getRecordMatcher(S);B&&e.removeRoute(B)}function g(){return e.getRoutes().map(S=>S.record)}function v(S){return!!e.getRecordMatcher(S)}function w(S,B){if(B=we({},B||c.value),typeof S=="string"){const p=ru(t,S,B.path),y=e.resolve({path:p.path},B),E=i.createHref(p.fullPath);return we(p,y,{params:d(y.params),hash:mc(p.hash),redirectedFrom:void 0,href:E})}let F;if("path"in S)F=we({},S,{path:ru(t,S.path,B.path).path});else{const p=we({},S.params);for(const y in p)p[y]==null&&delete p[y];F=we({},S,{params:h(S.params)}),B.params=h(B.params)}const Y=e.resolve(F,B),pe=S.hash||"";Y.params=u(d(Y.params));const Oe=cb(r,we({},S,{hash:Kb(pe),path:Y.path})),ae=i.createHref(Oe);return we({fullPath:Oe,hash:pe,query:r===Fp?Jb(S.query):S.query||{}},Y,{redirectedFrom:void 0,href:ae})}function b(S){return typeof S=="string"?ru(t,S,c.value.path):we({},S)}function _(S,B){if(l!==S)return is(8,{from:B,to:S})}function N(S){return Q(S)}function z(S){return N(we(b(S),{replace:!0}))}function U(S){const B=S.matched[S.matched.length-1];if(B&&B.redirect){const{redirect:F}=B;let Y=typeof F=="function"?F(S):F;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=b(Y):{path:Y},Y.params={}),we({query:S.query,hash:S.hash,params:"path"in Y?{}:S.params},Y)}}function Q(S,B){const F=l=w(S),Y=c.value,pe=S.state,Oe=S.force,ae=S.replace===!0,p=U(F);if(p)return Q(we(b(p),{state:typeof p=="object"?we({},pe,p.state):pe,force:Oe,replace:ae}),B||F);const y=F;y.redirectedFrom=B;let E;return!Oe&&lb(r,Y,F)&&(E=is(16,{to:y,from:Y}),cn(Y,Y,!0,!1)),(E?Promise.resolve(E):Ke(y,Y)).catch(T=>Dn(T)?Dn(T,2)?T:Ge(T):ce(T,y,Y)).then(T=>{if(T){if(Dn(T,2))return Q(we({replace:ae},b(T.to),{state:typeof T.to=="object"?we({},pe,T.to.state):pe,force:Oe}),B||y)}else T=wt(y,Y,!0,ae,pe);return At(y,Y,T),T})}function oe(S,B){const F=_(S,B);return F?Promise.reject(F):Promise.resolve()}function Ke(S,B){let F;const[Y,pe,Oe]=ax(S,B);F=iu(Y.reverse(),"beforeRouteLeave",S,B);for(const p of Y)p.leaveGuards.forEach(y=>{F.push(sr(y,S,B))});const ae=oe.bind(null,S,B);return F.push(ae),Ni(F).then(()=>{F=[];for(const p of s.list())F.push(sr(p,S,B));return F.push(ae),Ni(F)}).then(()=>{F=iu(pe,"beforeRouteUpdate",S,B);for(const p of pe)p.updateGuards.forEach(y=>{F.push(sr(y,S,B))});return F.push(ae),Ni(F)}).then(()=>{F=[];for(const p of S.matched)if(p.beforeEnter&&!B.matched.includes(p))if(on(p.beforeEnter))for(const y of p.beforeEnter)F.push(sr(y,S,B));else F.push(sr(p.beforeEnter,S,B));return F.push(ae),Ni(F)}).then(()=>(S.matched.forEach(p=>p.enterCallbacks={}),F=iu(Oe,"beforeRouteEnter",S,B),F.push(ae),Ni(F))).then(()=>{F=[];for(const p of o.list())F.push(sr(p,S,B));return F.push(ae),Ni(F)}).catch(p=>Dn(p,8)?p:Promise.reject(p))}function At(S,B,F){for(const Y of a.list())Y(S,B,F)}function wt(S,B,F,Y,pe){const Oe=_(S,B);if(Oe)return Oe;const ae=B===Xn,p=Li?history.state:{};F&&(Y||ae?i.replace(S.fullPath,we({scroll:ae&&p&&p.scroll},pe)):i.push(S.fullPath,pe)),c.value=S,cn(S,B,F,ae),Ge()}let qt;function Rn(){qt||(qt=i.listen((S,B,F)=>{if(!jt.listening)return;const Y=w(S),pe=U(Y);if(pe){Q(we(pe,{replace:!0}),Y).catch(co);return}l=Y;const Oe=c.value;Li&&yb(Rp(Oe.fullPath,F.delta),tl()),Ke(Y,Oe).catch(ae=>Dn(ae,12)?ae:Dn(ae,2)?(Q(ae.to,Y).then(p=>{Dn(p,20)&&!F.delta&&F.type===Ao.pop&&i.go(-1,!1)}).catch(co),Promise.reject()):(F.delta&&i.go(-F.delta,!1),ce(ae,Y,Oe))).then(ae=>{ae=ae||wt(Y,Oe,!1),ae&&(F.delta&&!Dn(ae,8)?i.go(-F.delta,!1):F.type===Ao.pop&&Dn(ae,20)&&i.go(-1,!1)),At(Y,Oe,ae)}).catch(co)}))}let Ht=Bs(),Yn=Bs(),Se;function ce(S,B,F){Ge(S);const Y=Yn.list();return Y.length?Y.forEach(pe=>pe(S,B,F)):console.error(S),Promise.reject(S)}function he(){return Se&&c.value!==Xn?Promise.resolve():new Promise((S,B)=>{Ht.add([S,B])})}function Ge(S){return Se||(Se=!S,Rn(),Ht.list().forEach(([B,F])=>S?F(S):B()),Ht.reset()),S}function cn(S,B,F,Y){const{scrollBehavior:pe}=n;if(!Li||!pe)return Promise.resolve();const Oe=!F&&vb(Rp(S.fullPath,0))||(Y||!F)&&history.state&&history.state.scroll||null;return cy().then(()=>pe(S,B,Oe)).then(ae=>ae&&gb(ae)).catch(ae=>ce(ae,S,B))}const We=S=>i.go(S);let Be;const Qt=new Set,jt={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:g,resolve:w,options:n,push:N,replace:z,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Yn.add,isReady:he,install(S){const B=this;S.component("RouterLink",tx),S.component("RouterView",sx),S.config.globalProperties.$router=B,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Ki(c)}),Li&&!Be&&c.value===Xn&&(Be=!0,N(i.location).catch(pe=>{}));const F={};for(const pe in Xn)F[pe]=Kt(()=>c.value[pe]);S.provide(sd,B),S.provide(qy,ea(F)),S.provide(zu,c);const Y=S.unmount;Qt.add(S),S.unmount=function(){Qt.delete(S),Qt.size<1&&(l=Xn,qt&&qt(),qt=null,c.value=Xn,Be=!1,Se=!1),Y()}}};return jt}function Ni(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ax(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(l=>rs(l,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(l=>rs(l,c))||i.push(c))}return[t,r,i]}const cx={data(){return{groupPhotoSrc:"groupPhoto.jpg",eventDate:"2023年5月25&26日 (週四/五)",eventTime:"2:00 PM - 5:00 PM",eventLocation:"100台北市中正區南海路56號",eventDescription:"一定要來喔",googleCalendarLink:"待加入",googleMapsLink:"https://goo.gl/maps/kWBUJyyp6iXVHmib8"}}},xs=n=>(fy("data-v-a103fd2b"),n=n(),py(),n),lx={class:"home-page"},ux={class:"group-photo"},hx=["src"],dx={class:"event-info"},fx=xs(()=>q("h1",null,"(這裡要放成發標語)",-1)),px={class:"time-location"},mx={class:"event-time"},gx=xs(()=>q("h2",null,"舉辦時間",-1)),yx={class:"event-time-details"},vx=["href"],wx={class:"event-location"},Ix=xs(()=>q("h2",null,"舉辦地點",-1)),_x={class:"event-location-details"},bx=["href"],xx=xs(()=>q("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0972926964214!2d121.51011581643546!3d25.030772083973787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9483fb05b03%3A0xe2d4710b90afdf1a!2z6Ie65YyX5biC56uL5bu65ZyL6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1680545181231!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),Ex={class:"description"},Tx=xs(()=>q("h2",null,"活動宗旨與簡介",-1)),Sx=xs(()=>q("button",{class:"register-button"},"登記參加",-1));function Ax(n,e,t,r,i,s){return Pt(),$t("div",lx,[q("div",ux,[q("img",{src:i.groupPhotoSrc,alt:"Group Photo"},null,8,hx)]),q("div",dx,[fx,q("div",px,[q("div",mx,[gx,q("div",yx,[q("span",null,vn(i.eventDate)+" | "+vn(i.eventTime),1),q("a",{href:i.googleCalendarLink,target:"_blank",rel:"noopener"},"加入Google Calendar",8,vx)])]),q("div",wx,[Ix,q("div",_x,[q("span",null,vn(i.eventLocation),1),q("a",{href:i.googleMapsLink,target:"_blank",rel:"noopener"},"在Google Maps上查看",8,bx)])])]),xx,q("div",Ex,[Tx,q("p",null,vn(i.eventDescription),1)]),Sx])])}const Cx=Sr(cx,[["render",Ax],["__scopeId","data-v-a103fd2b"]]);const kx={data(){return{themeMeaning:"老實說，這部分不關我的事等公關快點把文案給我。",teammateList:[{id:1,name:"廖乃頡",position:"網管組組長"},{id:2,name:"程朗神",position:"網管組組員1"},{id:3,name:"賴預期",position:"網管組組員2"},{id:4,name:"謝餅神",position:"網管空降支援大隊長"}],musicMVLink:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",invitationLetter:"invitationLetter.png"}}},Es=n=>(fy("data-v-0d4483c9"),n=n(),py(),n),Rx={class:"about-page"},Dx=Es(()=>q("h1",null,"About Us",-1)),Nx={class:"theme"},Ox=Es(()=>q("h2",null,"主題含意",-1)),Px={class:"team"},Mx=Es(()=>q("h2",null,"工作人員名單",-1)),Lx={class:"music-mv"},jx=Es(()=>q("h2",null,"音樂MV",-1)),Fx=["href"],Vx=Es(()=>q("iframe",{width:"640",height:"360",src:"https://www.youtube-nocookie.com/embed/z0jQZxH7NgM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1)),Ux={class:"invitation"},$x=Es(()=>q("h2",null,"邀請函",-1)),Bx=["src"];function zx(n,e,t,r,i,s){return Pt(),$t("div",Rx,[Dx,q("div",Nx,[Ox,q("p",null,vn(i.themeMeaning),1)]),q("div",Px,[Mx,q("ul",null,[(Pt(!0),$t(Xt,null,_y(i.teammateList,o=>(Pt(),$t("li",{key:o.id},vn(o.name)+" - "+vn(o.position),1))),128))])]),q("div",Lx,[jx,q("p",null,[rr(" 快來看看我們最新的成果發表主題曲: "),q("a",{href:i.musicMVLink,target:"_blank"},"點擊我^^",8,Fx),Vx])]),q("div",Ux,[$x,q("img",{src:i.invitationLetter,alt:"Invitation Letter"},null,8,Bx)])])}const qx=Sr(kx,[["render",zx],["__scopeId","data-v-0d4483c9"]]);const Hx={},Kx={class:"categories_bg"},Gx=q("p",null,"Hi! This is the Categories Page",-1),Wx=[Gx];function Qx(n,e){return Pt(),$t("div",Kx,Wx)}const Yx=Sr(Hx,[["render",Qx]]);const Jx={},Xx={class:"works_bg"},Zx=q("p",null,"Hi! This is the Works Page",-1),eE=[Zx];function tE(n,e){return Pt(),$t("div",Xx,eE)}const nE=Sr(Jx,[["render",tE]]);const rE={data(){return{grouplist:[{id:1,mark:"M1",title:"探討三角形邊長與周長關係",time:"13:00~13:30"},{id:2,mark:"M2",title:"地球是圓的還是方的",time:"13:30~13:45"}]}}},iE={class:"schedule_bg"},sE=q("h1",null,"Schedule",-1),oE={class:"day1"},aE=q("tr",null,[q("th",null,"Mark"),q("th",null,"Title"),q("th",null,"Time")],-1);function cE(n,e,t,r,i,s){return Pt(),$t("div",iE,[sE,q("div",oE,[q("table",null,[aE,(Pt(!0),$t(Xt,null,_y(i.grouplist,o=>(Pt(),$t("tr",{key:o.id},[q("td",null,vn(o.mark),1),q("td",null,vn(o.title),1),q("td",null,vn(o.time),1)]))),128))])])])}const lE=Sr(rE,[["render",cE]]);const uE={},hE={class:"contact_bg"},dE=q("h1",null,"Contact Us",-1),fE=q("div",null,[q("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=39thckmsc@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email")],-1),pE=q("div",null,[q("a",{href:"https://instagram.com/luminescence_ckmsc39th_"},"Instagram")],-1),mE=[dE,fE,pE];function gE(n,e){return Pt(),$t("div",hE,mE)}const yE=Sr(uE,[["render",gE]]),vE=[{path:"/",name:"Home",component:Cx},{path:"/about",name:"About",component:qx},{path:"/categories",name:"Categories",component:Yx},{path:"/works",name:"Works",component:nE},{path:"/schedule",name:"Schedule",component:lE},{path:"/contact",name:"Contact",component:yE}],wE=ox({history:bb("./"),routes:vE});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},IE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ky={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hy(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):IE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new _E;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bE=function(n){const e=Hy(n);return Ky.encodeByteArray(e,!0)},gc=function(n){return bE(n).replace(/\./g,"")},Gy=function(n){try{return Ky.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function yc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!xE(t)||(n[t]=yc(n[t],e[t]));return n}function xE(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=()=>EE().__FIREBASE_DEFAULTS__,SE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},AE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gy(n[1]);return e&&JSON.parse(e)},od=()=>{try{return TE()||SE()||AE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},CE=()=>{var n;return(n=od())===null||n===void 0?void 0:n.config},kE=n=>{var e;return(e=od())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[gc(JSON.stringify(t)),gc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function ad(){var n;const e=(n=od())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OE(){return typeof self=="object"&&self.self===self}function Wy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qy(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function PE(){return!ad()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Co(){try{return typeof indexedDB=="object"}catch{return!1}}function ME(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="FirebaseError";class Et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=LE,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,r)}}function jE(n,e){return n.replace(FE,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function VE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qu(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Hp(s)&&Hp(o)){if(!qu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Hp(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $i(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Yy(n,e){const t=new UE(n,e);return t.subscribe.bind(t)}class UE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$E(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=su),i.error===void 0&&(i.error=su),i.complete===void 0&&(i.complete=su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $E(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function su(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n){return n&&n._delegate?n._delegate:n}class Sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new RE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qE(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(n){return n===Vr?void 0:n}function qE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=[];var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const Jy={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},KE=ge.INFO,GE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},WE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=GE[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=KE,this._logHandler=WE,this._userLogHandler=null,ld.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}function QE(n){ld.forEach(e=>{e.setLogLevel(n)})}function YE(n,e){for(const t of ld){let r=null;e&&e.level&&(r=Jy[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:ge[s].toLowerCase(),message:a,args:o,type:i.name})}}}const JE=(n,e)=>e.some(t=>n instanceof t);let Kp,Gp;function XE(){return Kp||(Kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return Gp||(Gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xy=new WeakMap,Hu=new WeakMap,Zy=new WeakMap,ou=new WeakMap,ud=new WeakMap;function eT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(dr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xy.set(t,n)}).catch(()=>{}),ud.set(e,n),e}function tT(n){if(Hu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Hu.set(n,e)}let Ku={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zy.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nT(n){Ku=n(Ku)}function rT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(au(this),e,...t);return Zy.set(r,e.sort?e.sort():[e]),dr(r)}:ZE().includes(n)?function(...e){return n.apply(au(this),e),dr(Xy.get(this))}:function(...e){return dr(n.apply(au(this),e))}}function iT(n){return typeof n=="function"?rT(n):(n instanceof IDBTransaction&&tT(n),JE(n,XE())?new Proxy(n,Ku):n)}function dr(n){if(n instanceof IDBRequest)return eT(n);if(ou.has(n))return ou.get(n);const e=iT(n);return e!==n&&(ou.set(n,e),ud.set(e,n)),e}const au=n=>ud.get(n);function sT(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=dr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dr(o.result),c.oldVersion,c.newVersion,dr(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const oT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],cu=new Map;function Wp(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cu.get(e))return cu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=aT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oT.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return cu.set(e,s),s}nT(n=>({...n,get:(e,t,r)=>Wp(e,t)||n.get(e,t,r),has:(e,t)=>!!Wp(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gu="@firebase/app",Qp="0.9.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new nl("@firebase/app"),uT="@firebase/app-compat",hT="@firebase/analytics-compat",dT="@firebase/analytics",fT="@firebase/app-check-compat",pT="@firebase/app-check",mT="@firebase/auth",gT="@firebase/auth-compat",yT="@firebase/database",vT="@firebase/database-compat",wT="@firebase/functions",IT="@firebase/functions-compat",_T="@firebase/installations",bT="@firebase/installations-compat",xT="@firebase/messaging",ET="@firebase/messaging-compat",TT="@firebase/performance",ST="@firebase/performance-compat",AT="@firebase/remote-config",CT="@firebase/remote-config-compat",kT="@firebase/storage",RT="@firebase/storage-compat",DT="@firebase/firestore",NT="@firebase/firestore-compat",OT="firebase",PT="9.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="[DEFAULT]",MT={[Gu]:"fire-core",[uT]:"fire-core-compat",[dT]:"fire-analytics",[hT]:"fire-analytics-compat",[pT]:"fire-app-check",[fT]:"fire-app-check-compat",[mT]:"fire-auth",[gT]:"fire-auth-compat",[yT]:"fire-rtdb",[vT]:"fire-rtdb-compat",[wT]:"fire-fn",[IT]:"fire-fn-compat",[_T]:"fire-iid",[bT]:"fire-iid-compat",[xT]:"fire-fcm",[ET]:"fire-fcm-compat",[TT]:"fire-perf",[ST]:"fire-perf-compat",[AT]:"fire-rc",[CT]:"fire-rc-compat",[kT]:"fire-gcs",[RT]:"fire-gcs-compat",[DT]:"fire-fst",[NT]:"fire-fst-compat","fire-js":"fire-js",[OT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,ko=new Map;function vc(n,e){try{n.container.addComponent(e)}catch(t){ai.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function e1(n,e){n.container.addOrOverwriteComponent(e)}function yr(n){const e=n.name;if(ko.has(e))return ai.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,n);for(const t of gr.values())vc(t,n);return!0}function t1(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function LT(n,e,t=mr){t1(n,e).clearInstance(t)}function jT(){ko.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new _i("app","Firebase",FT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VT=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=PT;function hd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(t||(t=CE()),!t)throw jn.create("no-options");const s=gr.get(i);if(s){if(qu(t,s.options)&&qu(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new HE(i);for(const c of ko.values())o.addComponent(c);const a=new VT(t,r,o);return gr.set(i,a),a}function UT(n=mr){const e=gr.get(n);if(!e&&n===mr)return hd();if(!e)throw jn.create("no-app",{appName:n});return e}function $T(){return Array.from(gr.values())}async function n1(n){const e=n.name;gr.has(e)&&(gr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function bn(n,e,t){var r;let i=(r=MT[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ai.warn(a.join(" "));return}yr(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function r1(n,e){if(n!==null&&typeof n!="function")throw jn.create("invalid-log-argument");YE(n,e)}function i1(n){QE(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="firebase-heartbeat-database",zT=1,Ro="firebase-heartbeat-store";let lu=null;function s1(){return lu||(lu=sT(BT,zT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ro)}}}).catch(n=>{throw jn.create("idb-open",{originalErrorMessage:n.message})})),lu}async function qT(n){try{return(await s1()).transaction(Ro).objectStore(Ro).get(o1(n))}catch(e){if(e instanceof Et)ai.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ai.warn(t.message)}}}async function Yp(n,e){try{const r=(await s1()).transaction(Ro,"readwrite");return await r.objectStore(Ro).put(e,o1(n)),r.done}catch(t){if(t instanceof Et)ai.warn(t.message);else{const r=jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ai.warn(r.message)}}}function o1(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=1024,KT=30*24*60*60*1e3;class GT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=KT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jp(),{heartbeatsToSend:t,unsentEntries:r}=WT(this._heartbeatsCache.heartbeats),i=gc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jp(){return new Date().toISOString().substring(0,10)}function WT(n,e=HT){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xp(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xp(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class QT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Co()?ME().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xp(n){return gc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){yr(new Sn("platform-logger",e=>new cT(e),"PRIVATE")),yr(new Sn("heartbeat",e=>new GT(e),"PRIVATE")),bn(Gu,Qp,n),bn(Gu,Qp,"esm2017"),bn("fire-js","")}YT("");const JT=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Et,SDK_VERSION:bi,_DEFAULT_ENTRY_NAME:mr,_addComponent:vc,_addOrOverwriteComponent:e1,_apps:gr,_clearComponents:jT,_components:ko,_getProvider:t1,_registerComponent:yr,_removeServiceInstance:LT,deleteApp:n1,getApp:UT,getApps:$T,initializeApp:hd,onLog:r1,registerVersion:bn,setLogLevel:i1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t){this._delegate=e,this.firebase=t,vc(e,new Sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),n1(this._delegate)))}_getService(e,t=mr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=mr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){vc(this._delegate,e)}_addOrOverwriteComponent(e){e1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Zp=new _i("app-compat","Firebase",ZT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:bn,setLogLevel:i1,onLog:r1,apps:null,SDK_VERSION:bi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:JT}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||mr,!qp(e,l))throw Zp.create("no-app",{appName:l});return e[l]}i.App=n;function s(l,u={}){const h=hd(l,u);if(qp(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(yr(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Zp.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&yc(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(){const n=eS(XT);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:a1,extendNamespace:e,createSubscribe:Yy,ErrorFactory:_i,deepExtend:yc});function e(t){yc(n,t)}return n}const tS=a1();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new nl("@firebase/app-compat"),nS="@firebase/app-compat",rS="0.2.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(n){bn(nS,rS,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(OE()&&self.firebase!==void 0){em.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&em.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const xi=tS;iS();var sS="firebase",oS="9.19.1-20230331192943";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.registerVersion(sS,oS,"app-compat");function dd(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const zs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Oi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function c1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cS=aS,lS=c1,l1=new _i("auth","Firebase",c1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=new nl("@firebase/auth");function Xa(n,...e){tm.logLevel<=ge.ERROR&&tm.error(`Auth (${bi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw fd(n,...e)}function lt(n,...e){return fd(n,...e)}function u1(n,e,t){const r=Object.assign(Object.assign({},lS()),{[e]:t});return new _i("auth","Firebase",r).create(e,{appName:n.name})}function Ss(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(n,"argument-error"),u1(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return l1.create(n,...e)}function D(n,e,...t){if(!n)throw fd(e,...t)}function wn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xa(e),new Error(e)}function an(n,e){n||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;function Ut(n){an(n instanceof Function,"Expected a class definition");let e=nm.get(n);return e?(an(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nm.set(n,e),e)}function uS(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ut);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pd(){return rm()==="http:"||rm()==="https:"}function rm(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pd()||Wy()||"connection"in navigator)?navigator.onLine:!0}function dS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.shortDelay=e,this.longDelay=t,an(t>e,"Short delay should be less than long delay!"),this.isMobile=NE()||cd()}get(){return hS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,e){an(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new ta(3e4,6e4);function Xe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function it(n,e,t,r,i={}){return d1(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ts(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),h1.fetch()(f1(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function d1(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fS),e);try{const i=new mS(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw to(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw to(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw to(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw u1(n,u,l);ht(n,u)}}catch(i){if(i instanceof Et)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function Hn(n,e,t,r,i={}){const s=await it(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}function f1(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?md(n.config,i):`${n.config.apiScheme}://${i}`}class mS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),pS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=lt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(n,e){return it(n,"POST","/v1/accounts:delete",e)}async function yS(n,e){return it(n,"POST","/v1/accounts:update",e)}async function vS(n,e){return it(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wS(n,e=!1){const t=J(n),r=await t.getIdToken(e),i=rl(r);D(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:uo(uu(i.auth_time)),issuedAtTime:uo(uu(i.iat)),expirationTime:uo(uu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uu(n){return Number(n)*1e3}function rl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gy(t);return i?JSON.parse(i):(Xa("Failed to decode base64 JWT payload"),null)}catch(i){return Xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function IS(n){const e=rl(n);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Et&&_S(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _S({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Un(n,vS(t,{idToken:r}));D(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TS(s.providerUserInfo):[],a=ES(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new p1(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function xS(n){const e=J(n);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ES(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TS(n){return n.map(e=>{var{providerId:t}=e,r=dd(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(n,e){const t=await d1(n,{},async()=>{const r=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=f1(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await SS(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Oo;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n,e){D(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new p1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Un(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wS(this,e)}reload(){return xS(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Un(this,gS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=t.createdAt)!==null&&l!==void 0?l:void 0,b=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:N,isAnonymous:z,providerData:U,stsTokenManager:Q}=t;D(_&&Q,e,"internal-error");const oe=Oo.fromJSON(this.name,Q);D(typeof _=="string",e,"internal-error"),Zn(h,e.name),Zn(d,e.name),D(typeof N=="boolean",e,"internal-error"),D(typeof z=="boolean",e,"internal-error"),Zn(f,e.name),Zn(m,e.name),Zn(g,e.name),Zn(v,e.name),Zn(w,e.name),Zn(b,e.name);const Ke=new ti({uid:_,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:z,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:oe,createdAt:w,lastLoginAt:b});return U&&Array.isArray(U)&&(Ke.providerData=U.map(At=>Object.assign({},At))),v&&(Ke._redirectEventId=v),Ke}static async _fromIdTokenResponse(e,t,r=!1){const i=new Oo;i.updateFromServerResponse(t);const s=new ti({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await No(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}m1.type="NONE";const ss=m1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n,e,t){return`firebase:${n}:${e}:${t}`}class Wi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ni(this.userKey,i.apiKey,s),this.fullPersistenceKey=ni("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wi(Ut(ss),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ut(ss);const o=ni(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=ti._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Wi(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w1(e))return"Blackberry";if(I1(e))return"Webos";if(gd(e))return"Safari";if((e.includes("chrome/")||y1(e))&&!e.includes("edge/"))return"Chrome";if(na(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g1(n=Pe()){return/firefox\//i.test(n)}function gd(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y1(n=Pe()){return/crios\//i.test(n)}function v1(n=Pe()){return/iemobile/i.test(n)}function na(n=Pe()){return/android/i.test(n)}function w1(n=Pe()){return/blackberry/i.test(n)}function I1(n=Pe()){return/webos/i.test(n)}function As(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function AS(n=Pe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function CS(n=Pe()){var e;return As(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kS(){return Qy()&&document.documentMode===10}function _1(n=Pe()){return As(n)||na(n)||I1(n)||w1(n)||/windows phone/i.test(n)||v1(n)}function RS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n,e=[]){let t;switch(n){case"Browser":t=im(Pe());break;case"Worker":t=`${im(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new DS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ut(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ut(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[Ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function nt(n){return J(n)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yy(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OS(n,e,t){const r=nt(n);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=x1(e),{host:o,port:a}=PS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MS()}function x1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PS(n){const e=x1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:om(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:om(o)}}}function om(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,t){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(n,e){return it(n,"POST","/v1/accounts:resetPassword",Xe(n,e))}async function T1(n,e){return it(n,"POST","/v1/accounts:update",e)}async function LS(n,e){return it(n,"POST","/v1/accounts:update",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(n,e){return Hn(n,"POST","/v1/accounts:signInWithPassword",Xe(n,e))}async function il(n,e){return it(n,"POST","/v1/accounts:sendOobCode",Xe(n,e))}async function FS(n,e){return il(n,e)}async function VS(n,e){return il(n,e)}async function US(n,e){return il(n,e)}async function $S(n,e){return il(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n,e){return Hn(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}async function zS(n,e){return Hn(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Cs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Po(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Po(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return jS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BS(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return T1(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zS(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n,e){return Hn(n,"POST","/v1/accounts:signInWithIdp",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="http://localhost";class An extends Cs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=dd(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new An(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fn(e,t)}buildRequest(){const e={requestUri:qS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ts(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(n,e){return it(n,"POST","/v1/accounts:sendVerificationCode",Xe(n,e))}async function KS(n,e){return Hn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e))}async function GS(n,e){const t=await Hn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e));if(t.temporaryProof)throw to(n,"account-exists-with-different-credential",t);return t}const WS={USER_NOT_FOUND:"user-not-found"};async function QS(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Hn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,t),WS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Cs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ri({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ri({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return KS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return GS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return QS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new ri({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JS(n){const e=$i(eo(n)).link,t=e?$i(eo(e)).deep_link_id:null,r=$i(eo(n)).deep_link_id;return(r?$i(eo(r)).link:null)||r||t||e||n}class sl{constructor(e){var t,r,i,s,o,a;const c=$i(eo(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=YS((i=c.mode)!==null&&i!==void 0?i:null);D(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=JS(e);try{return new sl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.providerId=Ar.PROVIDER_ID}static credential(e,t){return Po._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=sl.parseLink(t);return D(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}Ar.PROVIDER_ID="password";Ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qi extends ks{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return D("providerId"in t&&"signInMethod"in t,"argument-error"),An._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),An._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Qi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Qi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Qi(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ks{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return An._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ks{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="http://localhost";class os extends Cs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new os(r,s)}static _create(e,t){return new os(e,t)}buildRequest(){return{requestUri:XS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="saml.";class wc extends Kn{constructor(e){D(e.startsWith(ZS),"argument-error"),super(e)}static credentialFromResult(e){return wc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=os.fromJSON(e);return D(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return os._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ks{constructor(){super("twitter.com")}static credential(e,t){return An._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gn.credential(t,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(n,e){return Hn(n,"POST","/v1/accounts:signUp",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ti._fromIdTokenResponse(e,r,i),o=am(r);return new Wt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=am(r);return new Wt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function am(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(n){var e;const t=nt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Wt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await S1(t,{returnSecureToken:!0}),i=await Wt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Et{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ic.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ic(e,t,r,i)}}function A1(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(n,e){const t=J(n);await ol(!0,t,e);const{providerUserInfo:r}=await yS(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=C1(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function yd(n,e,t=!1){const r=await Un(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Wt._forOperation(n,"link",r)}async function ol(n,e,t){await No(e);const r=C1(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";D(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Un(n,A1(r,i,e,n),t);D(s.idToken,r,"internal-error");const o=rl(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(n.uid===a,r,"user-mismatch"),Wt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e,t=!1){const r="signIn",i=await A1(n,r,e),s=await Wt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function al(n,e){return R1(nt(n),e)}async function D1(n,e){const t=J(n);return await ol(!1,t,e.providerId),yd(t,e)}async function N1(n,e){return k1(J(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(n,e){return Hn(n,"POST","/v1/accounts:signInWithCustomToken",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(n,e){const t=nt(n),r=await nA(t,{token:e,returnSecureToken:!0}),i=await Wt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?vd._fromServerResponse(e,t):"totpInfo"in t?wd._fromServerResponse(e,t):ht(e,"internal-error")}}class vd extends ra{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new vd(t)}}class wd extends ra{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new wd(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e,t){var r;D(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),D(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(D(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(D(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(n,e,t){const r=J(n),i={requestType:"PASSWORD_RESET",email:e};t&&cl(r,i,t),await VS(r,i)}async function sA(n,e,t){await E1(J(n),{oobCode:e,newPassword:t})}async function oA(n,e){await LS(J(n),{oobCode:e})}async function O1(n,e){const t=J(n),r=await E1(t,{oobCode:e}),i=r.requestType;switch(D(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,t,"internal-error");default:D(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ra._fromServerResponse(nt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function aA(n,e){const{data:t}=await O1(J(n),e);return t.email}async function cA(n,e,t){const r=nt(n),i=await S1(r,{returnSecureToken:!0,email:e,password:t}),s=await Wt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function lA(n,e,t){return al(J(n),Ar.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(n,e,t){const r=J(n),i={requestType:"EMAIL_SIGNIN",email:e};D(t.handleCodeInApp,r,"argument-error"),t&&cl(r,i,t),await US(r,i)}function hA(n,e){const t=sl.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function dA(n,e,t){const r=J(n),i=Ar.credentialWithLink(e,t||Do());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),al(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,e){return it(n,"POST","/v1/accounts:createAuthUri",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(n,e){const t=pd()?Do():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await fA(J(n),r);return i||[]}async function mA(n,e){const t=J(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&cl(t.auth,i,e);const{email:s}=await FS(t.auth,i);s!==n.email&&await n.reload()}async function gA(n,e,t){const r=J(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&cl(r.auth,s,t);const{email:o}=await $S(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(n,e){return it(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=J(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Un(r,yA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wA(n,e){return P1(J(n),e,null)}function IA(n,e){return P1(J(n),null,e)}async function P1(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Un(n,T1(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=rl(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Yi(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new bA(s,i);case"github.com":return new xA(s,i);case"google.com":return new EA(s,i);case"twitter.com":return new TA(s,i,n.screenName||null);case"custom":case"anonymous":return new Yi(s,null);default:return new Yi(s,r,i)}}class Yi{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class M1 extends Yi{constructor(e,t,r,i){super(e,t,r),this.username=i}}class bA extends Yi{constructor(e,t){super(e,"facebook.com",t)}}class xA extends M1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class EA extends Yi{constructor(e,t){super(e,"google.com",t)}}class TA extends M1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function SA(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:_A(t)}class Wr{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new Wr("enroll",e,t)}static _fromMfaPendingCredential(e){return new Wr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Wr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Wr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=nt(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ra._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=Wr._fromMfaPendingCredential(i.mfaPendingCredential);return new Id(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Wt._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return D(t.user,r,"internal-error"),Wt._forOperation(t.user,t.operationType,l);default:ht(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function AA(n,e){var t;const r=J(n),i=e;return D(e.customData.operationType,r,"argument-error"),D((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Id._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n,e){return it(n,"POST","/v2/accounts/mfaEnrollment:start",Xe(n,e))}function kA(n,e){return it(n,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(n,e))}function RA(n,e){return it(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(n,e))}class _d{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ra._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new _d(e)}async getSession(){return Wr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Un(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Un(this.user,RA(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const hu=new WeakMap;function DA(n){const e=J(n);return hu.has(e)||hu.set(e,_d._fromUser(e)),hu.get(e)}const _c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){const n=Pe();return gd(n)||As(n)}const OA=1e3,PA=10;class j1 extends L1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NA()&&RS(),this.fallbackToPolling=_1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PA):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}j1.type="LOCAL";const bd=j1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1 extends L1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}F1.type="SESSION";const ci=F1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ll(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await MA(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ll.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ia("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function jA(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function FA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function UA(){return xd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="firebaseLocalStorageDb",$A=1,bc="firebaseLocalStorage",U1="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ul(n,e){return n.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function BA(){const n=indexedDB.deleteDatabase(V1);return new sa(n).toPromise()}function Wu(){const n=indexedDB.open(V1,$A);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bc,{keyPath:U1})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bc)?e(r):(r.close(),await BA(),e(await Wu()))})})}async function cm(n,e,t){const r=ul(n,!0).put({[U1]:e,value:t});return new sa(r).toPromise()}async function zA(n,e){const t=ul(n,!1).get(e),r=await new sa(t).toPromise();return r===void 0?null:r.value}function lm(n,e){const t=ul(n,!0).delete(e);return new sa(t).toPromise()}const qA=800,HA=3;class $1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>HA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ll._getInstance(UA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wu();return await cm(e,_c,"1"),await lm(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ul(i,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$1.type="LOCAL";const Mo=$1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n,e){return it(n,"POST","/v2/accounts/mfaSignIn:start",Xe(n,e))}function GA(n,e){return it(n,"POST","/v2/accounts/mfaSignIn:finalize",Xe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n){return(await it(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function B1(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=lt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",QA().appendChild(r)})}function z1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=500,JA=6e4,Pa=1e12;class XA{constructor(e){this.auth=e,this.counter=Pa,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new ZA(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Pa;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Pa;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Pa;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class ZA{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},JA)},YA))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eC(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=z1("rcb"),tC=new ta(3e4,6e4),nC="https://www.google.com/recaptcha/api.js?";class rC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return D(iC(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Qe().grecaptcha):new Promise((r,i)=>{const s=Qe().setTimeout(()=>{i(lt(e,"network-request-failed"))},tC.get());Qe()[du]=()=>{Qe().clearTimeout(s),delete Qe()[du];const a=Qe().grecaptcha;if(!a){i(lt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${nC}?${Ts({onload:du,render:"explicit",hl:t})}`;B1(o).catch(()=>{clearTimeout(s),i(lt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Qe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iC(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class sC{async load(e){return new XA(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="recaptcha",oC={theme:"light",type:"image"};let aC=class{constructor(e,t=Object.assign({},oC),r){this.parameters=t,this.type=q1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=nt(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sC:new rC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Qe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(pd()&&!xd(),this.auth,"internal-error"),await cC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await WA(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function cC(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ri._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function lC(n,e,t){const r=nt(n),i=await hl(r,e,J(t));return new Ed(i,s=>al(r,s))}async function uC(n,e,t){const r=J(n);await ol(!1,r,"phone");const i=await hl(r.auth,e,J(t));return new Ed(i,s=>D1(r,s))}async function hC(n,e,t){const r=J(n),i=await hl(r.auth,e,J(t));return new Ed(i,s=>N1(r,s))}async function hl(n,e,t){var r;const i=await t.verify();try{D(typeof i=="string",n,"argument-error"),D(t.type===q1,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",n,"internal-error"),(await CA(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,n,"missing-multi-factor-info"),(await KA(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await HS(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function dC(n,e){await yd(J(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li=class Za{constructor(e){this.providerId=Za.PROVIDER_ID,this.auth=nt(e)}verifyPhoneNumber(e,t){return hl(this.auth,e,J(t))}static credential(e,t){return ri._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Za.credentialFromTaggedObject(t)}static credentialFromError(e){return Za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?ri._fromTokenResponse(t,r):null}};li.PROVIDER_ID="phone";li.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,e){return e?Ut(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends Cs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fC(n){return R1(n.auth,new Td(n),n.bypassAuthState)}function pC(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),k1(t,new Td(n),n.bypassAuthState)}async function mC(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),yd(t,new Td(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return mC;case"reauthViaPopup":case"reauthViaRedirect":return pC;default:ht(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new ta(2e3,1e4);async function yC(n,e,t){const r=nt(n);Ss(n,e,Kn);const i=Ei(r,t);return new On(r,"signInViaPopup",e,i).executeNotNull()}async function vC(n,e,t){const r=J(n);Ss(r.auth,e,Kn);const i=Ei(r.auth,t);return new On(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function wC(n,e,t){const r=J(n);Ss(r.auth,e,Kn);const i=Ei(r.auth,t);return new On(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class On extends H1{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gC.get())};e()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="pendingRedirect",ho=new Map;class _C extends H1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await bC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bC(n,e){const t=G1(e),r=K1(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Sd(n,e){return K1(n)._set(G1(e),"true")}function xC(){ho.clear()}function Ad(n,e){ho.set(n._key(),e)}function K1(n){return Ut(n._redirectPersistence)}function G1(n){return ni(IC,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(n,e,t){return TC(n,e,t)}async function TC(n,e,t){const r=nt(n);Ss(n,e,Kn),await r._initializationPromise;const i=Ei(r,t);return await Sd(i,r),i._openRedirect(r,e,"signInViaRedirect")}function SC(n,e,t){return AC(n,e,t)}async function AC(n,e,t){const r=J(n);Ss(r.auth,e,Kn),await r.auth._initializationPromise;const i=Ei(r.auth,t);await Sd(i,r.auth);const s=await W1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function CC(n,e,t){return kC(n,e,t)}async function kC(n,e,t){const r=J(n);Ss(r.auth,e,Kn),await r.auth._initializationPromise;const i=Ei(r.auth,t);await ol(!1,r,e.providerId),await Sd(i,r.auth);const s=await W1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function RC(n,e){return await nt(n)._initializationPromise,dl(n,e,!1)}async function dl(n,e,t=!1){const r=nt(n),i=Ei(r,e),o=await new _C(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function W1(n){const e=ia(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=10*60*1e3;class Q1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Y1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(lt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DC&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Y1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Y1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(n,e={}){return it(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PC=/^https?/;async function MC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await J1(n);for(const t of e)try{if(LC(t))return}catch{}ht(n,"unauthorized-domain")}function LC(n){const e=Do(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!PC.test(t))return!1;if(OC.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new ta(3e4,6e4);function hm(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function FC(n){return new Promise((e,t)=>{var r,i,s;function o(){hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hm(),t(lt(n,"network-request-failed"))},timeout:jC.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=z1("iframefcb");return Qe()[a]=()=>{gapi.load?o():t(lt(n,"network-request-failed"))},B1(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ec=null,e})}let ec=null;function VC(n){return ec=ec||FC(n),ec}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new ta(5e3,15e3),$C="__/auth/iframe",BC="emulator/auth/iframe",zC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HC(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?md(e,BC):`https://${n.config.authDomain}/${$C}`,r={apiKey:e.apiKey,appName:n.name,v:bi},i=qC.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ts(r).slice(1)}`}async function KC(n){const e=await VC(n),t=Qe().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:HC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=lt(n,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},UC.get());function c(){Qe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WC=500,QC=600,YC="_blank",JC="http://localhost";class dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XC(n,e,t,r=WC,i=QC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},GC),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Pe().toLowerCase();t&&(a=y1(l)?YC:t),g1(l)&&(e=e||JC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(CS(l)&&a!=="_self")return ZC(e||"",a),new dm(null);const h=window.open(e||"",a,u);D(h,n,"popup-blocked");try{h.focus()}catch{}return new dm(h)}function ZC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek="__/auth/handler",tk="emulator/auth/handler";function Qu(n,e,t,r,i,s){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bi,eventId:i};if(e instanceof Kn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",VE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof ks){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${nk(n)}?${Ts(a).slice(1)}`}function nk({config:n}){return n.emulator?md(n,tk):`https://${n.authDomain}/${ek}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="webStorageSupport";class rk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ci,this._completeRedirectFn=dl,this._overrideRedirectResult=Ad}async _openPopup(e,t,r,i){var s;an((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Qu(e,t,r,Do(),i);return XC(e,o,ia())}async _openRedirect(e,t,r,i){return await this._originValidation(e),jA(Qu(e,t,r,Do(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(an(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await KC(e),r=new Q1(e);return t.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fu,{type:fu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fu];o!==void 0&&t(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _1()||gd()||As()}}const ik=rk;class sk{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return wn("unexpected MultiFactorSessionType")}}}class Cd extends sk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Cd(e)}_finalizeEnroll(e,t,r){return kA(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return GA(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class X1{constructor(){}static assertion(e){return Cd._fromCredential(e)}}X1.FACTOR_ID="phone";var fm="@firebase/auth",pm="0.22.0-20230331192943";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ck(n){yr(new Sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b1(n)},u=new NS(a,c,l);return uS(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Sn("auth-internal",e=>{const t=nt(e.getProvider("auth").getImmediate());return(r=>new ok(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(fm,pm,ak(n)),bn(fm,pm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=5*60;kE("authIdTokenMaxAge");ck("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=2e3;async function hk(n,e,t){var r;const{BuildInfo:i}=ui();an(e.sessionId,"AuthEvent did not contain a session ID");const s=await gk(e.sessionId),o={};return As()?o.ibi=i.packageName:na()?o.apn=i.packageName:ht(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Qu(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function dk(n){const{BuildInfo:e}=ui(),t={};As()?t.iosBundleId=e.packageName:na()?t.androidPackageName=e.packageName:ht(n,"operation-not-supported-in-this-environment"),await J1(n,t)}function fk(n){const{cordova:e}=ui();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,AS()?"_blank":"_system","location=yes"),t(i)})})}async function pk(n,e,t){const{cordova:r}=ui();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(lt(n,"redirect-cancelled-by-user"))},uk))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),na()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function mk(n){var e,t,r,i,s,o,a,c,l,u;const h=ui();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function gk(n){const e=yk(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function yk(n){if(an(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=20;class wk extends Q1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Ik(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:xk(),postBody:null,tenantId:n.tenantId,error:lt(n,"no-auth-event")}}function _k(n,e){return Yu()._set(Ju(n),e)}async function mm(n){const e=await Yu()._get(Ju(n));return e&&await Yu()._remove(Ju(n)),e}function bk(n,e){var t,r;const i=Tk(e);if(i.includes("/__/auth/callback")){const s=tc(i),o=s.firebaseError?Ek(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?lt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function xk(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<vk;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Yu(){return Ut(bd)}function Ju(n){return ni("authEvent",n.config.apiKey,n.name)}function Ek(n){try{return JSON.parse(n)}catch{return null}}function Tk(n){const e=tc(n),t=e.link?decodeURIComponent(e.link):void 0,r=tc(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return tc(i).link||i||r||t||n}function tc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return $i(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=500;class Ak{constructor(){this._redirectPersistence=ci,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=dl,this._overrideRedirectResult=Ad}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new wk(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){mk(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),xC(),await this._originValidation(e);const o=Ik(e,r,i);await _k(e,o);const a=await hk(e,o,t),c=await fk(a);return pk(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dk(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ui(),o=setTimeout(async()=>{await mm(e),t.onEvent(gm())},Sk),a=async u=>{clearTimeout(o);const h=await mm(e);let d=null;h&&(u!=null&&u.url)&&(d=bk(h,u.url)),t.onEvent(d||gm())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,l=`${s.packageName.toLowerCase()}://`;ui().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const Ck=Ak;function gm(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:lt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(n,e){nt(n)._logFramework(e)}var Rk="@firebase/auth-compat",Dk="0.3.7-20230331192943";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=1e3;function fo(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function Ok(){return fo()==="http:"||fo()==="https:"}function Z1(n=Pe()){return!!((fo()==="file:"||fo()==="ionic:"||fo()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Pk(){return cd()||ad()}function Mk(){return Qy()&&(document==null?void 0:document.documentMode)===11}function Lk(n=Pe()){return/Edge\/\d+/.test(n)}function jk(n=Pe()){return Mk()||Lk(n)}function ev(){try{const n=self.localStorage,e=ia();if(n)return n.setItem(e,"1"),n.removeItem(e),jk()?Co():!0}catch{return kd()&&Co()}return!1}function kd(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function pu(){return(Ok()||Wy()||Z1())&&!Pk()&&ev()&&!kd()}function tv(){return Z1()&&typeof document<"u"}async function Fk(){return tv()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},Nk);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function Vk(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt={LOCAL:"local",NONE:"none",SESSION:"session"},qs=D,nv="persistence";function Uk(n,e){if(qs(Object.values(Vt).includes(e),n,"invalid-persistence-type"),cd()){qs(e!==Vt.SESSION,n,"unsupported-persistence-type");return}if(ad()){qs(e===Vt.NONE,n,"unsupported-persistence-type");return}if(kd()){qs(e===Vt.NONE||e===Vt.LOCAL&&Co(),n,"unsupported-persistence-type");return}qs(e===Vt.NONE||ev(),n,"unsupported-persistence-type")}async function Xu(n){await n._initializationPromise;const e=rv(),t=ni(nv,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function $k(n,e){const t=rv();if(!t)return[];const r=ni(nv,n,e);switch(t.getItem(r)){case Vt.NONE:return[ss];case Vt.LOCAL:return[Mo,ci];case Vt.SESSION:return[ci];default:return[]}}function rv(){var n;try{return((n=Vk())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=D;class cr{constructor(){this.browserResolver=Ut(ik),this.cordovaResolver=Ut(Ck),this.underlyingResolver=null,this._redirectPersistence=ci,this._completeRedirectFn=dl,this._overrideRedirectResult=Ad}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return tv()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Bk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Fk();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){return n.unwrap()}function zk(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){return sv(n)}function Hk(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Kk(n,AA(n,e))}else if(r){const i=sv(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function sv(n){const{_tokenResponse:e}=n instanceof Et?n.customData:n;if(!e)return null;if(!(n instanceof Et)&&"temporaryProof"in e&&"phoneNumber"in e)return li.credentialFromResult(n);const t=e.providerId;if(!t||t===zs.PASSWORD)return null;let r;switch(t){case zs.GOOGLE:r=pn;break;case zs.FACEBOOK:r=fn;break;case zs.GITHUB:r=mn;break;case zs.TWITTER:r=gn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?os._create(t,a):An._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Qi(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Et?r.credentialFromError(n):r.credentialFromResult(n)}function kt(n,e){return e.catch(t=>{throw t instanceof Et&&Hk(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:qk(t),additionalUserInfo:SA(t),user:Pn.getOrCreate(i)}})}async function Zu(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>kt(n,t.confirm(r))}}class Kk{constructor(e,t){this.resolver=t,this.auth=zk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return kt(iv(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._delegate=e,this.multiFactor=DA(e)}static getOrCreate(e){return Pn.USER_MAP.has(e)||Pn.USER_MAP.set(e,new Pn(e)),Pn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return kt(this.auth,D1(this._delegate,e))}async linkWithPhoneNumber(e,t){return Zu(this.auth,uC(this._delegate,e,t))}async linkWithPopup(e){return kt(this.auth,wC(this._delegate,e,cr))}async linkWithRedirect(e){return await Xu(nt(this.auth)),CC(this._delegate,e,cr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return kt(this.auth,N1(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Zu(this.auth,hC(this._delegate,e,t))}reauthenticateWithPopup(e){return kt(this.auth,vC(this._delegate,e,cr))}async reauthenticateWithRedirect(e){return await Xu(nt(this.auth)),SC(this._delegate,e,cr)}sendEmailVerification(e){return mA(this._delegate,e)}async unlink(e){return await tA(this._delegate,e),this}updateEmail(e){return wA(this._delegate,e)}updatePassword(e){return IA(this._delegate,e)}updatePhoneNumber(e){return dC(this._delegate,e)}updateProfile(e){return vA(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return gA(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Pn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=D;class eh{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Hs(r,"invalid-api-key",{appName:e.name}),Hs(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?cr:void 0;this._delegate=t.initialize({options:{persistence:Gk(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(cS),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Pn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){OS(this._delegate,e,t)}applyActionCode(e){return oA(this._delegate,e)}checkActionCode(e){return O1(this._delegate,e)}confirmPasswordReset(e,t){return sA(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return kt(this._delegate,cA(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return pA(this._delegate,e)}isSignInWithEmailLink(e){return hA(this._delegate,e)}async getRedirectResult(){Hs(pu(),this._delegate,"operation-not-supported-in-this-environment");const e=await RC(this._delegate,cr);return e?kt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){kk(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=ym(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=ym(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return uA(this._delegate,e,t)}sendPasswordResetEmail(e,t){return iA(this._delegate,e,t||void 0)}async setPersistence(e){Uk(this._delegate,e);let t;switch(e){case Vt.SESSION:t=ci;break;case Vt.LOCAL:t=await Ut(Mo)._isAvailable()?Mo:bd;break;case Vt.NONE:t=ss;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return kt(this._delegate,eA(this._delegate))}signInWithCredential(e){return kt(this._delegate,al(this._delegate,e))}signInWithCustomToken(e){return kt(this._delegate,rA(this._delegate,e))}signInWithEmailAndPassword(e,t){return kt(this._delegate,lA(this._delegate,e,t))}signInWithEmailLink(e,t){return kt(this._delegate,dA(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Zu(this._delegate,lC(this._delegate,e,t))}async signInWithPopup(e){return Hs(pu(),this._delegate,"operation-not-supported-in-this-environment"),kt(this._delegate,yC(this._delegate,e,cr))}async signInWithRedirect(e){return Hs(pu(),this._delegate,"operation-not-supported-in-this-environment"),await Xu(this._delegate),EC(this._delegate,e,cr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return aA(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}eh.Persistence=Vt;function ym(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Pn.getOrCreate(o)),error:e,complete:t}}function Gk(n,e){const t=$k(n,e);if(typeof self<"u"&&!t.includes(Mo)&&t.push(Mo),typeof window<"u")for(const r of[bd,ci])t.includes(r)||t.push(r);return t.includes(ss)||t.push(ss),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.providerId="phone",this._delegate=new li(iv(xi.auth()))}static credential(e,t){return li.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Rd.PHONE_SIGN_IN_METHOD=li.PHONE_SIGN_IN_METHOD;Rd.PROVIDER_ID=li.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=D;class Qk{constructor(e,t,r=xi.app()){var i;Wk((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aC(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="auth-compat";function Jk(n){n.INTERNAL.registerComponent(new Sn(Yk,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new eh(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Oi.EMAIL_SIGNIN,PASSWORD_RESET:Oi.PASSWORD_RESET,RECOVER_EMAIL:Oi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Oi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Oi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Oi.VERIFY_EMAIL}},EmailAuthProvider:Ar,FacebookAuthProvider:fn,GithubAuthProvider:mn,GoogleAuthProvider:pn,OAuthProvider:Qi,SAMLAuthProvider:wc,PhoneAuthProvider:Rd,PhoneMultiFactorGenerator:X1,RecaptchaVerifier:Qk,TwitterAuthProvider:gn,Auth:eh,AuthCredential:Cs,Error:Et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(Rk,Dk)}Jk(xi);rd.replace();const Xk={name:"navbar",data(){return{email:"",password:"",loggingIn:!1,showingLogin:!1}},methods:{async login(){this.loggingIn=!0;try{const n=await xi.auth().signInWithEmailAndPassword(this.email,this.password);this.$router.push("/")}catch(n){console.error(n)}this.loggingIn=!1},showLogin(){this.showingLogin=!0},hideLogin(){this.showingLogin=!1}}},Zk={class:"navbar"},eR={class:"flex items-center gap-1"},tR={class:"flex items-center gap-1 pr-20"},nR={class:"flex items-center gap-1"},rR={key:0,class:"login-overlay"},iR={class:"login-container"},sR=f_('<h2 data-v-bf38e857>Login</h2><form data-v-bf38e857><div class="form-group" data-v-bf38e857><label for="email" data-v-bf38e857>Email</label><input type="email" id="email" name="email" placeholder="Enter your email" data-v-bf38e857></div><div class="form-group" data-v-bf38e857><label for="password" data-v-bf38e857>Password</label><input type="password" id="password" name="password" placeholder="Enter your password" data-v-bf38e857></div><button type="submit" data-v-bf38e857>Log in</button></form>',2),oR={href:"https://www.youtube.com/@ckmsc39th_luminescence",target:"_blank",rel:"noopener noreferrer",class:"icon"},aR={href:"https://instagram.com/luminescence_ckmsc39th_",target:"_blank",rel:"noopener noreferrer",class:"icon"};function cR(n,e,t,r,i,s){const o=dc("router-link"),a=dc("vue-feather");return Pt(),$t("nav",Zk,[q("div",eR,[Ce(o,{to:{name:"Home"},class:"homelink"},{default:jr(()=>[rr("Luminescence")]),_:1})]),q("div",tR,[Ce(o,{to:{name:"About"},class:"link"},{default:jr(()=>[rr("About")]),_:1}),Ce(o,{to:{name:"Categories"},class:"link"},{default:jr(()=>[rr("Categories")]),_:1}),Ce(o,{to:{name:"Works"},class:"link"},{default:jr(()=>[rr("Works")]),_:1}),Ce(o,{to:{name:"Schedule"},class:"link"},{default:jr(()=>[rr("Schedule")]),_:1}),Ce(o,{to:{name:"Contact"},class:"link"},{default:jr(()=>[rr("Contact")]),_:1})]),q("div",nR,[q("button",{class:"login-button",onClick:e[0]||(e[0]=(...c)=>s.showLogin&&s.showLogin(...c))},"Login"),i.showingLogin?(Pt(),$t("div",rR,[q("div",iR,[sR,q("button",{class:"close-button",onClick:e[1]||(e[1]=(...c)=>s.hideLogin&&s.hideLogin(...c))},"Close")])])):p_("",!0),q("a",oR,[Ce(a,{type:"youtube",size:"25"})]),q("a",aR,[Ce(a,{type:"instagram",size:"25"})])])])}const lR=Sr(Xk,[["render",cR],["__scopeId","data-v-bf38e857"]]);/*! vue-feather v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */var mu=Xh({name:"VueFeather",props:{animation:{type:String,default:void 0},animationSpeed:{type:String,default:void 0},fill:{type:String,default:"none"},size:{type:[Number,String],default:24},stroke:{type:String,default:"currentColor"},strokeLinecap:{type:String,default:"round"},strokeLinejoin:{type:String,default:"round"},strokeWidth:{type:[Number,String],default:2},tag:{type:String,default:"i"},type:{type:String,default:"feather",validator(n){if(!X_)throw new Error("The Feather icons is required.");if(!ns.icons[n])throw new Error(`"${n}" is not an available icon type.`);return!0}}},computed:{isRemSize(){return typeof this.size=="string"&&this.size.endsWith("rem")}},render(){const{animation:n,animationSpeed:e,isRemSize:t,size:r,type:i}=this,s=ns.icons[i];return pc(this.tag,{...this.$attrs,"data-name":i,"data-tags":s.tags,"data-type":i,class:{"vue-feather":!0,[`vue-feather--${i}`]:i,[`vue-feather--${n}`]:n,[`vue-feather--${e}`]:e},style:t?{height:r,width:r}:void 0},[pc("svg",{...s.attrs,fill:this.fill,height:t?void 0:r,stroke:this.stroke,"stroke-linecap":this.strokeLinecap,"stroke-linejoin":this.strokeLinejoin,"stroke-width":this.strokeWidth,width:t?void 0:r,class:[s.attrs.class,"vue-feather__content"],innerHTML:s.contents})])}});function uR(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var hR="@keyframes vue-feather--spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.vue-feather{display:inline-block;overflow:hidden}.vue-feather--spin{animation:vue-feather--spin 2s linear infinite}.vue-feather--pulse{animation:vue-feather--spin 2s steps(8) infinite}.vue-feather--slow{animation-duration:3s}.vue-feather--fast{animation-duration:1s}.vue-feather__content{display:block;height:inherit;width:inherit}";uR(hR);var dR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,Dd=Dd||{},ee=dR||self;function xc(){}function fl(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function oa(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function fR(n){return Object.prototype.hasOwnProperty.call(n,gu)&&n[gu]||(n[gu]=++pR)}var gu="closure_uid_"+(1e9*Math.random()>>>0),pR=0;function mR(n,e,t){return n.call.apply(n.bind,arguments)}function gR(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function yt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=mR:yt=gR,yt.apply(null,arguments)}function Ma(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ft(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Cr(){this.s=this.s,this.o=this.o}var yR=0;Cr.prototype.s=!1;Cr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),yR!=0)&&fR(this)};Cr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ov=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Nd(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function vm(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(fl(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function vt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var vR=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ee.addEventListener("test",xc,e),ee.removeEventListener("test",xc,e)}catch{}return n}();function Ec(n){return/^[\s\xa0]*$/.test(n)}var wm=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function yu(n,e){return n<e?-1:n>e?1:0}function pl(){var n=ee.navigator;return n&&(n=n.userAgent)?n:""}function yn(n){return pl().indexOf(n)!=-1}function Od(n){return Od[" "](n),n}Od[" "]=xc;function wR(n){var e=bR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var IR=yn("Opera"),as=yn("Trident")||yn("MSIE"),av=yn("Edge"),th=av||as,cv=yn("Gecko")&&!(pl().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),_R=pl().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function lv(){var n=ee.document;return n?n.documentMode:void 0}var Tc;e:{var vu="",wu=function(){var n=pl();if(cv)return/rv:([^\);]+)(\)|;)/.exec(n);if(av)return/Edge\/([\d\.]+)/.exec(n);if(as)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(_R)return/WebKit\/(\S+)/.exec(n);if(IR)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(wu&&(vu=wu?wu[1]:""),as){var Iu=lv();if(Iu!=null&&Iu>parseFloat(vu)){Tc=String(Iu);break e}}Tc=vu}var bR={};function xR(){return wR(function(){let n=0;const e=wm(String(Tc)).split("."),t=wm("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=yu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||yu(i[2].length==0,s[2].length==0)||yu(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var nh;if(ee.document&&as){var Im=lv();nh=Im||parseInt(Tc,10)||void 0}else nh=void 0;var ER=nh;function Lo(n,e){if(vt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(cv){e:{try{Od(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:TR[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Lo.X.h.call(this)}}ft(Lo,vt);var TR={2:"touch",3:"pen",4:"mouse"};Lo.prototype.h=function(){Lo.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var aa="closure_listenable_"+(1e6*Math.random()|0),SR=0;function AR(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++SR,this.ba=this.ea=!1}function ml(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Pd(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function uv(n){const e={};for(const t in n)e[t]=n[t];return e}const _m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hv(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<_m.length;s++)t=_m[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function gl(n){this.src=n,this.g={},this.h=0}gl.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ih(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new AR(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function rh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=ov(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ml(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ih(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var Md="closure_lm_"+(1e6*Math.random()|0),_u={};function dv(n,e,t,r,i){if(r&&r.once)return pv(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dv(n,e[s],t,r,i);return null}return t=Fd(t),n&&n[aa]?n.N(e,t,oa(r)?!!r.capture:!!r,i):fv(n,e,t,!1,r,i)}function fv(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=oa(i)?!!i.capture:!!i,a=jd(n);if(a||(n[Md]=a=new gl(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=CR(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)vR||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(gv(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function CR(){function n(t){return e.call(n.src,n.listener,t)}const e=kR;return n}function pv(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pv(n,e[s],t,r,i);return null}return t=Fd(t),n&&n[aa]?n.O(e,t,oa(r)?!!r.capture:!!r,i):fv(n,e,t,!0,r,i)}function mv(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mv(n,e[s],t,r,i);else r=oa(r)?!!r.capture:!!r,t=Fd(t),n&&n[aa]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ih(s,t,r,i),-1<t&&(ml(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=jd(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ih(e,t,r,i)),(t=-1<n?e[n]:null)&&Ld(t))}function Ld(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[aa])rh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(gv(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=jd(e))?(rh(t,n),t.h==0&&(t.src=null,e[Md]=null)):ml(n)}}}function gv(n){return n in _u?_u[n]:_u[n]="on"+n}function kR(n,e){if(n.ba)n=!0;else{e=new Lo(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&Ld(n),n=t.call(r,e)}return n}function jd(n){return n=n[Md],n instanceof gl?n:null}var bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fd(n){return typeof n=="function"?n:(n[bu]||(n[bu]=function(e){return n.handleEvent(e)}),n[bu])}function rt(){Cr.call(this),this.i=new gl(this),this.P=this,this.I=null}ft(rt,Cr);rt.prototype[aa]=!0;rt.prototype.removeEventListener=function(n,e,t,r){mv(this,n,e,t,r)};function ut(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new vt(e,n);else if(e instanceof vt)e.target=e.target||n;else{var i=e;e=new vt(r,n),hv(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=La(o,r,!0,e)&&i}if(o=e.g=n,i=La(o,r,!0,e)&&i,i=La(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=La(o,r,!1,e)&&i}rt.prototype.M=function(){if(rt.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ml(t[r]);delete n.g[e],n.h--}}this.I=null};rt.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};rt.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function La(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&rh(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vd=ee.JSON.stringify;function RR(){var n=wv;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class DR{constructor(){this.h=this.g=null}add(e,t){const r=yv.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var yv=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new NR,n=>n.reset());class NR{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function OR(n){ee.setTimeout(()=>{throw n},0)}function vv(n,e){sh||PR(),oh||(sh(),oh=!0),wv.add(n,e)}var sh;function PR(){var n=ee.Promise.resolve(void 0);sh=function(){n.then(MR)}}var oh=!1,wv=new DR;function MR(){for(var n;n=RR();){try{n.h.call(n.g)}catch(t){OR(t)}var e=yv;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}oh=!1}function yl(n,e){rt.call(this),this.h=n||1,this.g=e||ee,this.j=yt(this.lb,this),this.l=Date.now()}ft(yl,rt);K=yl.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(Ud(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ud(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}K.M=function(){yl.X.M.call(this),Ud(this),delete this.g};function $d(n,e,t){if(typeof n=="function")t&&(n=yt(n,t));else if(n&&typeof n.handleEvent=="function")n=yt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(n,e||0)}function Iv(n){n.g=$d(()=>{n.g=null,n.i&&(n.i=!1,Iv(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class LR extends Cr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Iv(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jo(n){Cr.call(this),this.h=n,this.g={}}ft(jo,Cr);var bm=[];function _v(n,e,t,r){Array.isArray(t)||(t&&(bm[0]=t.toString()),t=bm);for(var i=0;i<t.length;i++){var s=dv(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function bv(n){Pd(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ld(e)},n),n.g={}}jo.prototype.M=function(){jo.X.M.call(this),bv(this)};jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vl(){this.g=!0}vl.prototype.Aa=function(){this.g=!1};function jR(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function FR(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Bi(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+UR(n,t)+(r?" "+r:"")})}function VR(n,e){n.info(function(){return"TIMEOUT: "+e})}vl.prototype.info=function(){};function UR(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vd(t)}catch{return e}}var Ti={},xm=null;function wl(){return xm=xm||new rt}Ti.Pa="serverreachability";function xv(n){vt.call(this,Ti.Pa,n)}ft(xv,vt);function Fo(n){const e=wl();ut(e,new xv(e))}Ti.STAT_EVENT="statevent";function Ev(n,e){vt.call(this,Ti.STAT_EVENT,n),this.stat=e}ft(Ev,vt);function xt(n){const e=wl();ut(e,new Ev(e,n))}Ti.Qa="timingevent";function Tv(n,e){vt.call(this,Ti.Qa,n),this.size=e}ft(Tv,vt);function ca(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){n()},e)}var Il={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Sv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bd(){}Bd.prototype.h=null;function Em(n){return n.h||(n.h=n.i())}function Av(){}var la={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function zd(){vt.call(this,"d")}ft(zd,vt);function qd(){vt.call(this,"c")}ft(qd,vt);var ah;function _l(){}ft(_l,Bd);_l.prototype.g=function(){return new XMLHttpRequest};_l.prototype.i=function(){return{}};ah=new _l;function ua(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new jo(this),this.O=$R,n=th?125:void 0,this.T=new yl(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cv}function Cv(){this.i=null,this.g="",this.h=!1}var $R=45e3,ch={},Sc={};K=ua.prototype;K.setTimeout=function(n){this.O=n};function lh(n,e,t){n.K=1,n.v=xl($n(e)),n.s=t,n.P=!0,kv(n,null)}function kv(n,e){n.F=Date.now(),ha(n),n.A=$n(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),jv(t.i,"t",r),n.C=0,t=n.l.H,n.h=new Cv,n.g=i0(n.l,t?e:null,!n.s),0<n.N&&(n.L=new LR(yt(n.La,n,n.g),n.N)),_v(n.S,n.g,"readystatechange",n.ib),e=n.H?uv(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Fo(),jR(n.j,n.u,n.A,n.m,n.U,n.s)}K.ib=function(n){n=n.target;const e=this.L;e&&Mn(n)==3?e.l():this.La(n)};K.La=function(n){try{if(n==this.g)e:{const u=Mn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||th||this.g&&(this.h.h||this.g.fa()||Cm(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Fo(3):Fo(2)),bl(this);var t=this.g.aa();this.Y=t;t:if(Rv(this)){var r=Cm(this.g);n="";var i=r.length,s=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),po(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,FR(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ec(a)){var l=a;break t}}l=null}if(t=l)Bi(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uh(this,t);else{this.i=!1,this.o=3,xt(12),Qr(this),po(this);break e}}this.P?(Dv(this,u,o),th&&this.i&&u==3&&(_v(this.S,this.T,"tick",this.hb),this.T.start())):(Bi(this.j,this.m,o,null),uh(this,o)),u==4&&Qr(this),this.i&&!this.I&&(u==4?e0(this.l,this):(this.i=!1,ha(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),Qr(this),po(this)}}}catch{}finally{}};function Rv(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Dv(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=BR(n,t),i==Sc){e==4&&(n.o=4,xt(14),r=!1),Bi(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ch){n.o=4,xt(15),Bi(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Bi(n.j,n.m,i,null),uh(n,i);Rv(n)&&i!=Sc&&i!=ch&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,xt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Jd(e),e.K=!0,xt(11))):(Bi(n.j,n.m,t,"[Invalid Chunked Response]"),Qr(n),po(n))}K.hb=function(){if(this.g){var n=Mn(this.g),e=this.g.fa();this.C<e.length&&(bl(this),Dv(this,n,e),this.i&&n!=4&&ha(this))}};function BR(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Sc:(t=Number(e.substring(t,r)),isNaN(t)?ch:(r+=1,r+t>e.length?Sc:(e=e.substr(r,t),n.C=r+t,e)))}K.cancel=function(){this.I=!0,Qr(this)};function ha(n){n.V=Date.now()+n.O,Nv(n,n.O)}function Nv(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ca(yt(n.gb,n),e)}function bl(n){n.B&&(ee.clearTimeout(n.B),n.B=null)}K.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(VR(this.j,this.A),this.K!=2&&(Fo(),xt(17)),Qr(this),this.o=2,po(this)):Nv(this,this.V-n)};function po(n){n.l.G==0||n.I||e0(n.l,n)}function Qr(n){bl(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Ud(n.T),bv(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function uh(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||hh(t.h,n))){if(!n.J&&hh(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)kc(t),Sl(t);else break e;Yd(t),xt(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=ca(yt(t.cb,t),6e3));if(1>=Uv(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else Yr(t,11)}else if((n.J||t.g==n)&&kc(t),!Ec(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Hd(s,s.h),s.h=null))}if(r.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.za=g,ke(r.F,r.D,g))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=r0(r,r.H?r.ka:null,r.V),o.J){$v(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(bl(a),ha(a)),r.g=o}else Xv(r);0<t.i.length&&Al(t)}else l[0]!="stop"&&l[0]!="close"||Yr(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Yr(t,7):Qd(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}Fo(4)}catch{}}function zR(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(fl(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function qR(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(fl(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Ov(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(fl(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=qR(n),r=zR(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Pv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HR(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ii(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ii){this.h=e!==void 0?e:n.h,Ac(this,n.j),this.s=n.s,this.g=n.g,Cc(this,n.m),this.l=n.l,e=n.i;var t=new Vo;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Tm(this,t),this.o=n.o}else n&&(t=String(n).match(Pv))?(this.h=!!e,Ac(this,t[1]||"",!0),this.s=no(t[2]||""),this.g=no(t[3]||"",!0),Cc(this,t[4]),this.l=no(t[5]||"",!0),Tm(this,t[6]||"",!0),this.o=no(t[7]||"")):(this.h=!!e,this.i=new Vo(null,this.h))}ii.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ro(e,Sm,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ro(e,Sm,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ro(t,t.charAt(0)=="/"?WR:GR,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ro(t,YR)),n.join("")};function $n(n){return new ii(n)}function Ac(n,e,t){n.j=t?no(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Cc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Tm(n,e,t){e instanceof Vo?(n.i=e,JR(n.i,n.h)):(t||(e=ro(e,QR)),n.i=new Vo(e,n.h))}function ke(n,e,t){n.i.set(e,t)}function xl(n){return ke(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function no(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ro(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,KR),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function KR(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Sm=/[#\/\?@]/g,GR=/[#\?:]/g,WR=/[#\?]/g,QR=/[#\?@]/g,YR=/#/g;function Vo(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function kr(n){n.g||(n.g=new Map,n.h=0,n.i&&HR(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}K=Vo.prototype;K.add=function(n,e){kr(this),this.i=null,n=Rs(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Mv(n,e){kr(n),e=Rs(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Lv(n,e){return kr(n),e=Rs(n,e),n.g.has(e)}K.forEach=function(n,e){kr(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};K.oa=function(){kr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};K.W=function(n){kr(this);let e=[];if(typeof n=="string")Lv(this,n)&&(e=e.concat(this.g.get(Rs(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};K.set=function(n,e){return kr(this),this.i=null,n=Rs(this,n),Lv(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};K.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function jv(n,e,t){Mv(n,e),0<t.length&&(n.i=null,n.g.set(Rs(n,e),Nd(t)),n.h+=t.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Rs(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function JR(n,e){e&&!n.j&&(kr(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Mv(this,r),jv(this,i,t))},n)),n.j=e}var XR=class{constructor(e,t){this.h=e,this.g=t}};function Fv(n){this.l=n||ZR,ee.PerformanceNavigationTiming?(n=ee.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZR=10;function Vv(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Uv(n){return n.h?1:n.g?n.g.size:0}function hh(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Hd(n,e){n.g?n.g.add(e):n.h=e}function $v(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Fv.prototype.cancel=function(){if(this.i=Bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Bv(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Nd(n.i)}function Kd(){}Kd.prototype.stringify=function(n){return ee.JSON.stringify(n,void 0)};Kd.prototype.parse=function(n){return ee.JSON.parse(n,void 0)};function eD(){this.g=new Kd}function tD(n,e,t){const r=t||"";try{Ov(n,function(i,s){let o=i;oa(i)&&(o=Vd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function nD(n,e){const t=new vl;if(ee.Image){const r=new Image;r.onload=Ma(ja,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Ma(ja,t,r,"TestLoadImage: error",!1,e),r.onabort=Ma(ja,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ma(ja,t,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function ja(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function da(n){this.l=n.ac||null,this.j=n.jb||!1}ft(da,Bd);da.prototype.g=function(){return new El(this.l,this.j)};da.prototype.i=function(n){return function(){return n}}({});function El(n,e){rt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Gd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(El,rt);var Gd=0;K=El.prototype;K.open=function(n,e){if(this.readyState!=Gd)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Uo(this)};K.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fa(this)),this.readyState=Gd};K.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Uo(this)),this.g&&(this.readyState=3,Uo(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zv(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function zv(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}K.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?fa(this):Uo(this),this.readyState==3&&zv(this)}};K.Va=function(n){this.g&&(this.response=this.responseText=n,fa(this))};K.Ua=function(n){this.g&&(this.response=n,fa(this))};K.ga=function(){this.g&&fa(this)};function fa(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Uo(n)}K.setRequestHeader=function(n,e){this.v.append(n,e)};K.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Uo(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var rD=ee.JSON.parse;function Le(n){rt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qv,this.K=this.L=!1}ft(Le,rt);var qv="",iD=/^https?$/i,sD=["POST","PUT"];K=Le.prototype;K.Ka=function(n){this.L=n};K.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ah.g(),this.C=this.u?Em(this.u):Em(ah),this.g.onreadystatechange=yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){Am(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=ee.FormData&&n instanceof ee.FormData,!(0<=ov(sD,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gv(this),0<this.B&&((this.K=oD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.qa,this)):this.A=$d(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Am(this,s)}};function oD(n){return as&&xR()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}K.qa=function(){typeof Dd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Am(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Hv(n),Tl(n)}function Hv(n){n.D||(n.D=!0,ut(n,"complete"),ut(n,"error"))}K.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ut(this,"complete"),ut(this,"abort"),Tl(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tl(this,!0)),Le.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?Kv(this):this.fb())};K.fb=function(){Kv(this)};function Kv(n){if(n.h&&typeof Dd<"u"&&(!n.C[1]||Mn(n)!=4||n.aa()!=2)){if(n.v&&Mn(n)==4)$d(n.Ha,0,n);else if(ut(n,"readystatechange"),Mn(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(Pv)[1]||null;if(!i&&ee.self&&ee.self.location){var s=ee.self.location.protocol;i=s.substr(0,s.length-1)}r=!iD.test(i?i.toLowerCase():"")}t=r}if(t)ut(n,"complete"),ut(n,"success");else{n.m=6;try{var o=2<Mn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Hv(n)}}finally{Tl(n)}}}}function Tl(n,e){if(n.g){Gv(n);const t=n.g,r=n.C[0]?xc:null;n.g=null,n.C=null,e||ut(n,"ready");try{t.onreadystatechange=r}catch{}}}function Gv(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ee.clearTimeout(n.A),n.A=null)}function Mn(n){return n.g?n.g.readyState:0}K.aa=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),rD(e)}};function Cm(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case qv:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wv(n){let e="";return Pd(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Wd(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Wv(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):ke(n,e,t))}function Ks(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Qv(n){this.Ca=0,this.i=[],this.j=new vl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ks("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ks("baseRetryDelayMs",5e3,n),this.bb=Ks("retryDelaySeedMs",1e4,n),this.$a=Ks("forwardChannelMaxRetries",2,n),this.ta=Ks("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Fv(n&&n.concurrentRequestLimit),this.Fa=new eD,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=Qv.prototype;K.ma=8;K.G=1;function Qd(n){if(Yv(n),n.G==3){var e=n.U++,t=$n(n.F);ke(t,"SID",n.I),ke(t,"RID",e),ke(t,"TYPE","terminate"),pa(n,t),e=new ua(n,n.j,e,void 0),e.K=2,e.v=xl($n(t)),t=!1,ee.navigator&&ee.navigator.sendBeacon&&(t=ee.navigator.sendBeacon(e.v.toString(),"")),!t&&ee.Image&&(new Image().src=e.v,t=!0),t||(e.g=i0(e.l,null),e.g.da(e.v)),e.F=Date.now(),ha(e)}n0(n)}function Sl(n){n.g&&(Jd(n),n.g.cancel(),n.g=null)}function Yv(n){Sl(n),n.u&&(ee.clearTimeout(n.u),n.u=null),kc(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&ee.clearTimeout(n.m),n.m=null)}function Al(n){Vv(n.h)||n.m||(n.m=!0,vv(n.Ja,n),n.C=0)}function aD(n,e){return Uv(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=ca(yt(n.Ja,n,e),t0(n,n.C)),n.C++,!0)}K.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new ua(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=uv(s),hv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Jv(this,i,e),t=$n(this.F),ke(t,"RID",n),ke(t,"CVER",22),this.D&&ke(t,"X-HTTP-Session-Id",this.D),pa(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Wv(s)))+"&"+e:this.o&&Wd(t,this.o,s)),Hd(this.h,i),this.Ya&&ke(t,"TYPE","init"),this.O?(ke(t,"$req",e),ke(t,"SID","null"),i.Z=!0,lh(i,t,null)):lh(i,t,e),this.G=2}}else this.G==3&&(n?km(this,n):this.i.length==0||Vv(this.h)||km(this))};function km(n,e){var t;e?t=e.m:t=n.U++;const r=$n(n.F);ke(r,"SID",n.I),ke(r,"RID",t),ke(r,"AID",n.T),pa(n,r),n.o&&n.s&&Wd(r,n.o,n.s),t=new ua(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Jv(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Hd(n.h,t),lh(t,r,e)}function pa(n,e){n.ia&&Pd(n.ia,function(t,r){ke(e,r,t)}),n.l&&Ov({},function(t,r){ke(e,r,t)})}function Jv(n,e,t){t=Math.min(n.i.length,t);var r=n.l?yt(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{tD(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Xv(n){n.g||n.u||(n.Z=1,vv(n.Ia,n),n.A=0)}function Yd(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=ca(yt(n.Ia,n),t0(n,n.A)),n.A++,!0)}K.Ia=function(){if(this.u=null,Zv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=ca(yt(this.eb,this),n)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,xt(10),Sl(this),Zv(this))};function Jd(n){n.B!=null&&(ee.clearTimeout(n.B),n.B=null)}function Zv(n){n.g=new ua(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=$n(n.sa);ke(e,"RID","rpc"),ke(e,"SID",n.I),ke(e,"CI",n.L?"0":"1"),ke(e,"AID",n.T),ke(e,"TYPE","xmlhttp"),pa(n,e),n.o&&n.s&&Wd(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=xl($n(e)),t.s=null,t.P=!0,kv(t,n)}K.cb=function(){this.v!=null&&(this.v=null,Sl(this),Yd(this),xt(19))};function kc(n){n.v!=null&&(ee.clearTimeout(n.v),n.v=null)}function e0(n,e){var t=null;if(n.g==e){kc(n),Jd(n),n.g=null;var r=2}else if(hh(n.h,e))t=e.D,$v(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=wl(),ut(r,new Tv(r,t)),Al(n)}else Xv(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&aD(n,e)||r==2&&Yd(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:Yr(n,5);break;case 4:Yr(n,10);break;case 3:Yr(n,6);break;default:Yr(n,2)}}}function t0(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function Yr(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=yt(n.kb,n);t||(t=new ii("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Ac(t,"https"),xl(t)),nD(t.toString(),r)}else xt(2);n.G=0,n.l&&n.l.va(e),n0(n),Yv(n)}K.kb=function(n){n?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function n0(n){if(n.G=0,n.la=[],n.l){const e=Bv(n.h);(e.length!=0||n.i.length!=0)&&(vm(n.la,e),vm(n.la,n.i),n.h.i.length=0,Nd(n.i),n.i.length=0),n.l.ua()}}function r0(n,e,t){var r=t instanceof ii?$n(t):new ii(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Cc(r,r.m);else{var i=ee.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ii(null,void 0);r&&Ac(s,r),e&&(s.g=e),i&&Cc(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&ke(r,t,e),ke(r,"VER",n.ma),pa(n,r),r}function i0(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Le(new da({jb:!0})):new Le(n.ra),e.Ka(n.H),e}function s0(){}K=s0.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function Rc(){if(as&&!(10<=Number(ER)))throw Error("Environmental error: no available transport.")}Rc.prototype.g=function(n,e){return new Bt(n,e)};function Bt(n,e){rt.call(this),this.g=new Qv(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Ec(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ec(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ds(this)}ft(Bt,rt);Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;xt(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=r0(n,null,n.V),Al(n)};Bt.prototype.close=function(){Qd(this.g)};Bt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Vd(n),n=t);e.i.push(new XR(e.ab++,n)),e.G==3&&Al(e)};Bt.prototype.M=function(){this.g.l=null,delete this.j,Qd(this.g),delete this.g,Bt.X.M.call(this)};function o0(n){zd.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ft(o0,zd);function a0(){qd.call(this),this.status=1}ft(a0,qd);function Ds(n){this.g=n}ft(Ds,s0);Ds.prototype.xa=function(){ut(this.g,"a")};Ds.prototype.wa=function(n){ut(this.g,new o0(n))};Ds.prototype.va=function(n){ut(this.g,new a0)};Ds.prototype.ua=function(){ut(this.g,"b")};Rc.prototype.createWebChannel=Rc.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Il.NO_ERROR=0;Il.TIMEOUT=8;Il.HTTP_ERROR=6;Sv.COMPLETE="complete";Av.EventType=la;la.OPEN="a";la.CLOSE="b";la.ERROR="c";la.MESSAGE="d";rt.prototype.listen=rt.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var cD=function(){return new Rc},lD=function(){return wl()},xu=Il,uD=Sv,hD=Ti,Rm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},dD=da,Fa=Av,fD=Le;const Dm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new nl("@firebase/firestore");function dh(){return vr.logLevel}function pD(n){vr.setLogLevel(n)}function k(n,...e){if(vr.logLevel<=ge.DEBUG){const t=e.map(Xd);vr.debug(`Firestore (${Ns}): ${n}`,...t)}}function Ve(n,...e){if(vr.logLevel<=ge.ERROR){const t=e.map(Xd);vr.error(`Firestore (${Ns}): ${n}`,...t)}}function Bn(n,...e){if(vr.logLevel<=ge.WARN){const t=e.map(Xd);vr.warn(`Firestore (${Ns}): ${n}`,...t)}}function Xd(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+n;throw Ve(e),new Error(e)}function G(n,e){n||$()}function mD(n,e){n||$()}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class yD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vD{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new c0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new et(e)}}class wD{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ID{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new wD(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.T=t.token,new _D(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function cs(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function u0(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new A(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new A(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new A(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new De(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new De(0,0))}static max(){return new W(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $o.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $o?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fe extends $o{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const ED=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends $o{construct(e,t,r){return new Ue(e,t,r)}static isValidIdentifier(e){return ED.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(t)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(fe.fromString(e))}static fromName(e){return new M(fe.fromString(e).popFirst(5))}static empty(){return new M(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function fh(n){return n.fields.find(e=>e.kind===2)}function Ur(n){return n.fields.filter(e=>e.kind!==2)}h0.UNKNOWN_ID=-1;class TD{constructor(e,t){this.fieldPath=e,this.kind=t}}class Dc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Dc(0,zt.min())}}function d0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new De(t+1,0):new De(t,r));return new zt(i,M.empty(),e)}function f0(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zt(W.min(),M.empty(),-1)}static max(){return new zt(W.max(),M.empty(),-1)}}function Zd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==p0)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof I?t:I.resolve(t)}catch(t){return I.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):I.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):I.reject(t)}static resolve(e){return new I((t,r)=>{t(e)})}static reject(e){return new I((t,r)=>{r(e)})}static waitFor(e){return new I((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=I.resolve(!1);for(const r of e)t=t.next(i=>i?I.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new I((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new tt,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new mo(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=ef(r.target.error);this.R.reject(new mo(e,i))}}static open(e,t,r,i){try{return new Cl(t,e.transaction(i,r))}catch(s){throw new mo(t,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(k("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new AD(t)}}class nn{constructor(e,t,r){this.name=e,this.version=t,this.V=r,nn.S(Pe())===12.2&&Ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return k("SimpleDb","Removing database:",e),zr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Co())return!1;if(nn.C())return!0;const e=Pe(),t=nn.S(e),r=0<t&&t<10,i=nn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new mo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new mo(e,o))},i.onupgradeneeded=s=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.M(o,i.transaction,s.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Cl.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(l=>(a.P(),l)).catch(l=>(a.abort(l),I.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class SD{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return zr(this.L.delete())}}class mo extends A{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Dr(n){return n.name==="IndexedDbTransactionError"}class AD{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(k("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),zr(r)}add(e){return k("SimpleDb","ADD",this.store.name,e,e),zr(this.store.add(e))}get(e){return zr(this.store.get(e)).next(t=>(t===void 0&&(t=null),k("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return k("SimpleDb","DELETE",this.store.name,e),zr(this.store.delete(e))}count(){return k("SimpleDb","COUNT",this.store.name),zr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new I((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){k("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}X(e){const t=this.cursor({});return new I((r,i)=>{t.onerror=s=>{const o=ef(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new SD(a),l=t(a.primaryKey,a.value,c);if(l instanceof I){const u=l.catch(h=>(c.done(),I.reject(h)));r.push(u)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>I.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function zr(n){return new I((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=ef(r.target.error);t(i)}})}let Nm=!1;function ef(n){const e=nn.S(Pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nm||(Nm=!0,setTimeout(()=>{throw r},0)),r}}return n}class CD{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){k("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{k("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Dr(t)?k("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Rr(t)}await this.et(6e4)})}}class kD{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return k("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(k("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=f0(s);Zd(o,r)>0&&(r=o)}),new zt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Dt.ct=-1;function ma(n){return n==null}function Bo(n){return n===0&&1/n==-1/0}function g0(n){return typeof n=="number"&&Number.isInteger(n)&&!Bo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Om(e)),e=RD(n.get(t),e);return Om(e)}function RD(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Om(n){return n+""}function In(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),fe.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&$(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:$()}s=o+2}return new fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n,e){return[n,Tt(e)]}function y0(n,e,t){return[n,Tt(e),t]}const DD={},ND=["prefixPath","collectionGroup","readTime","documentId"],OD=["prefixPath","collectionGroup","documentId"],PD=["collectionGroup","readTime","prefixPath","documentId"],MD=["canonicalId","targetId"],LD=["targetId","path"],jD=["path","targetId"],FD=["collectionId","parent"],VD=["indexId","uid"],UD=["uid","sequenceNumber"],$D=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],BD=["indexId","uid","orderedDocumentKey"],zD=["userId","collectionPath","documentId"],qD=["userId","collectionPath","largestBatchId"],HD=["userId","collectionGroup","largestBatchId"],v0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KD=[...v0,"documentOverlays"],w0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],I0=w0,GD=[...I0,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends m0{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function st(n,e){const t=j(n);return nn.O(t.at,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Si(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new at(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(n,e,t,r,i){return this}insert(n,e,t){return new at(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Lm(this.data.getIterator())}getIteratorFrom(e){return new Lm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Lm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Pi(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new be(Ue.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new WD("Invalid base64 string: "+i):i}}(e);return new Je(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const YD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(n){if(G(!!n),typeof n=="string"){let e=0;const t=YD.exec(n);if(G(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hi(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function b0(n){const e=n.mapValue.fields.__previous_value__;return tf(e)?b0(e):e}function zo(n){const e=wr(n.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ir{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rc={nullValue:"NULL_VALUE"};function di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?tf(n)?4:x0(n)?9007199254740991:10:$()}function Cn(n,e){if(n===e)return!0;const t=di(n);if(t!==di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zo(n).isEqual(zo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wr(r.timestampValue),o=wr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return hi(r.bytesValue).isEqual(hi(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Me(r.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(r.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Me(r.integerValue)===Me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Me(r.doubleValue),o=Me(i.doubleValue);return s===o?Bo(s)===Bo(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return cs(n.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Mm(s)!==Mm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Cn(s[a],o[a])))return!1;return!0}(n,e);default:return $()}}function qo(n,e){return(n.values||[]).find(t=>Cn(t,e))!==void 0}function _r(n,e){if(n===e)return 0;const t=di(n),r=di(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Me(i.integerValue||i.doubleValue),a=Me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return jm(n.timestampValue,e.timestampValue);case 4:return jm(zo(n),zo(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,s){const o=hi(i),a=hi(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(Me(i.latitude),Me(s.latitude));return o!==0?o:ne(Me(i.longitude),Me(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=_r(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===lr.mapValue&&s===lr.mapValue)return 0;if(i===lr.mapValue)return 1;if(s===lr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=_r(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(n.mapValue,e.mapValue);default:throw $()}}function jm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=wr(n),r=wr(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function ls(n){return mh(n)}function mh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=wr(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?hi(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,M.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mh(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mh(r.fields[a])}`;return s+"}"}(n.mapValue):$();var e,t}function fi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gh(n){return!!n&&"integerValue"in n}function Ho(n){return!!n&&"arrayValue"in n}function Fm(n){return!!n&&"nullValue"in n}function Vm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ic(n){return!!n&&"mapValue"in n}function go(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Si(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=go(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=go(n.arrayValue.values[t]);return e}return Object.assign({},n)}function x0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function XD(n){return"nullValue"in n?rc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?fi(Ir.empty(),M.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:$()}function ZD(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?fi(Ir.empty(),M.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?lr:$()}function Um(n,e){const t=_r(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function $m(n,e){const t=_r(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(t)}setAll(e){let t=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=go(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Si(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(go(this.value))}}function E0(n){const e=[];return Si(n.fields,(t,r)=>{const i=new Ue([t]);if(ic(r)){const s=E0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,W.min(),W.min(),W.min(),ct.empty(),0)}static newFoundDocument(e,t,r,i){return new Ee(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,W.min(),W.min(),ct.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,W.min(),W.min(),ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){this.position=e,this.inclusive=t}}function Bm(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),t.key):r=_r(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Cn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function eN(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{}class ue extends T0{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tN(e,t,r):t==="array-contains"?new iN(e,r):t==="in"?new D0(e,r):t==="not-in"?new sN(e,r):t==="array-contains-any"?new oN(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nN(e,r):new rN(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_r(t,this.value)):t!==null&&di(this.value)===di(t)&&this.matchesComparison(_r(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ie extends T0{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Ie(e,t)}matches(e){return us(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function us(n){return n.op==="and"}function yh(n){return n.op==="or"}function nf(n){return S0(n)&&us(n)}function S0(n){for(const e of n.filters)if(e instanceof Ie)return!1;return!0}function vh(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+ls(n.value);if(nf(n))return n.filters.map(e=>vh(e)).join(",");{const e=n.filters.map(t=>vh(t)).join(",");return`${n.op}(${e})`}}function A0(n,e){return n instanceof ue?function(t,r){return r instanceof ue&&t.op===r.op&&t.field.isEqual(r.field)&&Cn(t.value,r.value)}(n,e):n instanceof Ie?function(t,r){return r instanceof Ie&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&A0(s,r.filters[o]),!0):!1}(n,e):void $()}function C0(n,e){const t=n.filters.concat(e);return Ie.create(t,n.op)}function k0(n){return n instanceof ue?function(e){return`${e.field.canonicalString()} ${e.op} ${ls(e.value)}`}(n):n instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(k0).join(" ,")+"}"}(n):"Filter"}class tN extends ue{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class nN extends ue{constructor(e,t){super(e,"in",t),this.keys=R0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rN extends ue{constructor(e,t){super(e,"not-in",t),this.keys=R0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function R0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class iN extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ho(t)&&qo(t.arrayValue,this.value)}}class D0 extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qo(this.value.arrayValue,t)}}class sN extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qo(this.value.arrayValue,t)}}class oN extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function wh(n,e=null,t=[],r=[],i=null,s=null,o=null){return new aN(n,e,t,r,i,s,o)}function pi(n){const e=j(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ma(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ls(r)).join(",")),e.ft=t}return e.ft}function ga(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eN(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!A0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!zm(n.startAt,e.startAt)&&zm(n.endAt,e.endAt)}function Nc(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Oc(n,e){return n.filters.filter(t=>t instanceof ue&&t.field.isEqual(e))}function qm(n,e,t){let r=rc,i=!0;for(const s of Oc(n,e)){let o=rc,a=!0;switch(s.op){case"<":case"<=":o=XD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=rc}Um({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Um({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Hm(n,e,t){let r=lr,i=!0;for(const s of Oc(n,e)){let o=lr,a=!0;switch(s.op){case">=":case">":o=ZD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=lr}$m({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];$m({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function N0(n,e,t,r,i,s,o,a){return new Gn(n,e,t,r,i,s,o,a)}function Os(n){return new Gn(n)}function Km(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function kl(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function sf(n){return n.collectionGroup!==null}function si(n){const e=j(n);if(e.dt===null){e.dt=[];const t=kl(e),r=rf(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new Ji(t)),e.dt.push(new Ji(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ji(Ue.keyField(),s))}}}return e.dt}function Lt(n){const e=j(n);if(!e.wt)if(e.limitType==="F")e.wt=wh(e.path,e.collectionGroup,si(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of si(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Ji(s.field,o))}const r=e.endAt?new br(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new br(e.startAt.position,e.startAt.inclusive):null;e.wt=wh(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.wt}function Ih(n,e){e.getFirstInequalityField(),kl(n);const t=n.filters.concat([e]);return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Pc(n,e,t){return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ya(n,e){return ga(Lt(n),Lt(e))&&n.limitType===e.limitType}function O0(n){return`${pi(Lt(n))}|lt:${n.limitType}`}function _h(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>k0(r)).join(", ")}]`),ma(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ls(r)).join(",")),`Target(${t})`}(Lt(n))}; limitType=${n.limitType})`}function va(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):M.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of si(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Bm(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,si(t),r)||t.endAt&&!function(i,s,o){const a=Bm(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,si(t),r))}(n,e)}function P0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function M0(n){return(e,t)=>{let r=!1;for(const i of si(n)){const s=cN(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cN(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?_r(a,c):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=new je(M.comparator);function Ot(){return lN}const L0=new je(M.comparator);function io(...n){let e=L0;for(const t of n)e=e.insert(t.key,t);return e}function j0(n){let e=L0;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function _n(){return yo()}function F0(){return yo()}function yo(){return new Nr(n=>n.toString(),(n,e)=>n.isEqual(e))}const uN=new je(M.comparator),hN=new be(M.comparator);function re(...n){let e=hN;for(const t of n)e=e.add(t);return e}const dN=new be(ne);function Rl(){return dN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function U0(n){return{integerValue:""+n}}function $0(n,e){return g0(e)?U0(e):V0(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this._=void 0}}function fN(n,e,t){return n instanceof hs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof mi?z0(n,e):n instanceof gi?q0(n,e):function(r,i){const s=B0(r,i),o=Gm(s)+Gm(r._t);return gh(s)&&gh(r._t)?U0(o):V0(r.serializer,o)}(n,e)}function pN(n,e,t){return n instanceof mi?z0(n,e):n instanceof gi?q0(n,e):t}function B0(n,e){return n instanceof ds?gh(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class hs extends Dl{}class mi extends Dl{constructor(e){super(),this.elements=e}}function z0(n,e){const t=H0(e);for(const r of n.elements)t.some(i=>Cn(i,r))||t.push(r);return{arrayValue:{values:t}}}class gi extends Dl{constructor(e){super(),this.elements=e}}function q0(n,e){let t=H0(e);for(const r of n.elements)t=t.filter(i=>!Cn(i,r));return{arrayValue:{values:t}}}class ds extends Dl{constructor(e,t){super(),this.serializer=e,this._t=t}}function Gm(n){return Me(n.integerValue||n.doubleValue)}function H0(n){return Ho(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.field=e,this.transform=t}}function mN(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof mi&&r instanceof mi||t instanceof gi&&r instanceof gi?cs(t.elements,r.elements,Cn):t instanceof ds&&r instanceof ds?Cn(t._t,r._t):t instanceof hs&&r instanceof hs}(n.transform,e.transform)}class gN{constructor(e,t){this.version=e,this.transformResults=t}}class Re{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Nl{}function K0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ms(n.key,Re.none()):new Ps(n.key,n.data,Re.none());{const t=n.data,r=ct.empty();let i=new be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wn(n.key,r,new Nt(i.toArray()),Re.none())}}function yN(n,e,t){n instanceof Ps?function(r,i,s){const o=r.value.clone(),a=Qm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Wn?function(r,i,s){if(!sc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Qm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(G0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function vo(n,e,t,r){return n instanceof Ps?function(i,s,o,a){if(!sc(i.precondition,s))return o;const c=i.value.clone(),l=Ym(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Wn?function(i,s,o,a){if(!sc(i.precondition,s))return o;const c=Ym(i.fieldTransforms,a,s),l=s.data;return l.setAll(G0(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(i,s,o){return sc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function vN(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=B0(r.transform,i||null);s!=null&&(t===null&&(t=ct.empty()),t.set(r.field,s))}return t||null}function Wm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&cs(t,r,(i,s)=>mN(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ps extends Nl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wn extends Nl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function G0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qm(n,e,t){const r=new Map;G(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pN(o,a,t[i]))}return r}function Ym(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,fN(s,o,e))}return r}class Ms extends Nl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class of extends Nl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yN(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=F0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=K0(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),re())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(t,r)=>Wm(t,r))&&cs(this.baseMutations,e.baseMutations,(t,r)=>Wm(t,r))}}class cf{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length);let i=uN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cf(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,de;function W0(n){switch(n){default:return $();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Q0(n){if(n===void 0)return Ve("GRPC error has no .code"),x.UNKNOWN;switch(n){case qe.OK:return x.OK;case qe.CANCELLED:return x.CANCELLED;case qe.UNKNOWN:return x.UNKNOWN;case qe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case qe.INTERNAL:return x.INTERNAL;case qe.UNAVAILABLE:return x.UNAVAILABLE;case qe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case qe.NOT_FOUND:return x.NOT_FOUND;case qe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case qe.ABORTED:return x.ABORTED;case qe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case qe.DATA_LOSS:return x.DATA_LOSS;default:return $()}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ua}static getOrCreateInstance(){return Ua===null&&(Ua=new uf),Ua}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ua=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ia(W.min(),i,Rl(),Ot(),re())}}class _a{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _a(r,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,r,i){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=i}}class Y0{constructor(e,t){this.targetId=e,this.Et=t}}class J0{constructor(e,t,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Jm{constructor(){this.At=0,this.Rt=Zm(),this.vt=Je.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=re(),t=re(),r=re();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:$()}}),new _a(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=Zm()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class IN{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ot(),this.qt=Xm(),this.Ut=new be(ne)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,i)=>{this.Wt(i)&&t(i)})}Jt(e){var t;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Nc(o))if(i===0){const a=new M(o.path);this.Qt(r,a,Ee.newNoDocument(a,W.min()))}else G(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=uf.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Nc(a.target)){const c=new M(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ee.newNoDocument(c,e))}s.St&&(t.set(o,s.Ct()),s.xt())}});let r=re();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Ia(e,t,this.Ut,this.Lt,r);return this.Lt=Ot(),this.qt=Xm(),this.Ut=new be(ne),i}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Jm,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new be(ne),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||k("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Jm),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Xm(){return new je(M.comparator)}function Zm(){return new je(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xN=(()=>({and:"AND",or:"OR"}))();class EN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TN(n,e){return fs(n,e.toTimestamp())}function $e(n){return G(!!n),W.fromTimestamp(function(e){const t=wr(e);return new De(t.seconds,t.nanos)}(n))}function hf(n,e){return function(t){return new fe(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Z0(n){const e=fe.fromString(n);return G(c2(e)),e}function Ko(n,e){return hf(n.databaseId,e.path)}function xn(n,e){const t=Z0(e);if(t.get(1)!==n.databaseId.projectId)throw new A(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new A(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(t2(t))}function bh(n,e){return hf(n.databaseId,e)}function e2(n){const e=Z0(n);return e.length===4?fe.emptyPath():t2(e)}function Go(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function t2(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function eg(n,e,t){return{name:Ko(n,e),fields:t.value.mapValue.fields}}function n2(n,e,t){const r=xn(n,e.name),i=$e(e.updateTime),s=e.createTime?$e(e.createTime):W.min(),o=new ct({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function SN(n,e){return"found"in e?function(t,r){G(!!r.found),r.found.name,r.found.updateTime;const i=xn(t,r.found.name),s=$e(r.found.updateTime),o=r.found.createTime?$e(r.found.createTime):W.min(),a=new ct({mapValue:{fields:r.found.fields}});return Ee.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){G(!!r.missing),G(!!r.readTime);const i=xn(t,r.missing),s=$e(r.readTime);return Ee.newNoDocument(i,s)}(n,e):$()}function AN(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(G(l===void 0||typeof l=="string"),Je.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),Je.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?x.UNKNOWN:Q0(c.code);return new A(l,c.message||"")}(o);t=new J0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xn(n,r.document.name),s=$e(r.document.updateTime),o=r.document.createTime?$e(r.document.createTime):W.min(),a=new ct({mapValue:{fields:r.document.fields}}),c=Ee.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new oc(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xn(n,r.document),s=r.readTime?$e(r.readTime):W.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];t=new oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xn(n,r.document),s=r.removedTargetIds||[];t=new oc([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new wN(i),o=r.targetId;t=new Y0(o,s)}}return t}function Wo(n,e){let t;if(e instanceof Ps)t={update:eg(n,e.key,e.value)};else if(e instanceof Ms)t={delete:Ko(n,e.key)};else if(e instanceof Wn)t={update:eg(n,e.key,e.data),updateMask:ON(e.fieldMask)};else{if(!(e instanceof of))return $();t={verify:Ko(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof hs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ds)return{fieldPath:s.field.canonicalString(),increment:o._t};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:TN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(n,e.precondition)),t}function xh(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Re.updateTime($e(i.updateTime)):i.exists!==void 0?Re.exists(i.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)G(o.setToServerValue==="REQUEST_TIME"),a=new hs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new mi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new gi(l)}else"increment"in o?a=new ds(s,o.increment):$();const c=Ue.fromServerFormat(o.fieldPath);return new wa(c,a)}(n,i)):[];if(e.update){e.update.name;const i=xn(n,e.update.name),s=new ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Nt(c.map(l=>Ue.fromServerFormat(l)))}(e.updateMask);return new Wn(i,s,o,t,r)}return new Ps(i,s,t,r)}if(e.delete){const i=xn(n,e.delete);return new Ms(i,t)}if(e.verify){const i=xn(n,e.verify);return new of(i,t)}return $()}function CN(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?$e(r.updateTime):$e(i);return s.isEqual(W.min())&&(s=$e(i)),new gN(s,r.transformResults||[])}(t,e))):[]}function r2(n,e){return{documents:[bh(n,e.path)]}}function i2(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=bh(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=bh(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return a2(Ie.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ji(u.field),direction:RN(u.dir)}}(l))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,l){return c.useProto3Json||ma(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function s2(n){let e=e2(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(u){const h=o2(u);return h instanceof Ie&&nf(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Ji(Fi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ma(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new br(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new br(d,h)}(t.endAt)),N0(e,i,o,s,a,"F",c,l)}function kN(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function o2(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fi(e.unaryFilter.field);return ue.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Fi(e.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fi(e.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fi(e.unaryFilter.field);return ue.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return ue.create(Fi(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(t=>o2(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function RN(n){return _N[n]}function DN(n){return bN[n]}function NN(n){return xN[n]}function ji(n){return{fieldPath:n.canonicalString()}}function Fi(n){return Ue.fromServerFormat(n.fieldPath)}function a2(n){return n instanceof ue?function(e){if(e.op==="=="){if(Vm(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NAN"}};if(Fm(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vm(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NAN"}};if(Fm(e.value))return{unaryFilter:{field:ji(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(e.field),op:DN(e.op),value:e.value}}}(n):n instanceof Ie?function(e){const t=e.getFilters().map(r=>a2(r));return t.length===1?t[0]:{compositeFilter:{op:NN(e.op),filters:t}}}(n):$()}function ON(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function c2(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,r,i,s=W.min(),o=W.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.se=e}}function PN(n,e){let t;if(e.document)t=n2(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=M.fromSegments(e.noDocument.path),i=vi(e.noDocument.readTime);t=Ee.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=M.fromSegments(e.unknownDocument.path),i=vi(e.unknownDocument.version);t=Ee.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new De(r[0],r[1]);return W.fromTimestamp(i)}(e.readTime)),t}function tg(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Mc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Ko(i,s.key),fields:s.data.value.mapValue.fields,updateTime:fs(i,s.version.toTimestamp()),createTime:fs(i,s.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:yi(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:t.path.toArray(),version:yi(e.version)}}return r}function Mc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function yi(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vi(n){const e=new De(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function qr(n,e){const t=(e.baseMutations||[]).map(s=>xh(n.se,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>xh(n.se,s)),i=De.fromMillis(e.localWriteTimeMs);return new af(e.batchId,i,t,r)}function so(n){const e=vi(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?vi(n.lastLimboFreeSnapshotVersion):W.min();let r;var i;return n.query.documents!==void 0?(G((i=n.query).documents.length===1),r=Lt(Os(e2(i.documents[0])))):r=function(s){return Lt(s2(s))}(n.query),new fr(r,n.targetId,0,n.lastListenSequenceNumber,e,t,Je.fromBase64String(n.resumeToken))}function u2(n,e){const t=yi(e.snapshotVersion),r=yi(e.lastLimboFreeSnapshotVersion);let i;i=Nc(e.target)?r2(n.se,e.target):i2(n.se,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function df(n){const e=s2({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pc(e,e.limit,"L"):e}function Eu(n,e){return new lf(e.largestBatchId,xh(n.se,e.overlayMutation))}function ng(n,e){const t=e.path.lastSegment();return[n,Tt(e.path.popLast()),t]}function rg(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:yi(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{getBundleMetadata(e,t){return ig(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:vi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return ig(e).put({bundleId:(r=t).id,createTime:yi($e(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return sg(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:df(i.bundledQuery),readTime:vi(i.readTime)};var i})}saveNamedQuery(e,t){return sg(e).put(function(r){return{name:r.name,readTime:yi($e(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function ig(n){return st(n,"bundles")}function sg(n){return st(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new Ol(e,r)}getOverlay(e,t){return Gs(e).get(ng(this.userId,t)).next(r=>r?Eu(this.serializer,r):null)}getOverlays(e,t){const r=_n();return I.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new lf(t,o);i.push(this.re(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Gs(e).J("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,t,r){const i=_n(),s=Tt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Gs(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=Eu(this.serializer,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=_n();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Gs(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=Eu(this.serializer,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>s)}re(e,t){return Gs(e).put(function(r,i,s){const[o,a,c]=ng(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Wo(r.se,s.mutation)}}(this.serializer,this.userId,t))}}function Gs(n){return st(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),Bo(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(hi(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?x0(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):$()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const i of Object.keys(r))this.fe(i,t),this.ue(r[i],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const i of r)this.ue(i,t)}_e(e,t){this.ae(t,37),M.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}Hr.pe=new Hr;function LN(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function og(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=LN(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class jN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const i=t.codePointAt(0);this.Te(240|i>>>18),this.Te(128|63&i>>>12),this.Te(128|63&i>>>6),this.Te(128|63&i)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=t.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.ve()}Ve(e){const t=this.Se(e),r=og(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ce(e){const t=this.Se(e),r=og(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class FN{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class VN{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Ws{constructor(){this.Me=new jN,this.Fe=new FN(this.Me),this.Be=new VN(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Kr(this.indexId,this.documentKey,this.arrayValue,r)}}function er(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ag(n.arrayValue,e.arrayValue),t!==0?t:(t=ag(n.directionalValue,e.directionalValue),t!==0?t:M.comparator(n.documentKey,e.documentKey)))}function ag(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){G(e.collectionGroup===this.collectionId);const t=fh(e);if(t!==void 0&&!this.ze(t))return!1;const r=Ur(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.Ge!==void 0){const o=r[i];if(!this.je(this.Ge,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(n){var e,t;if(G(n instanceof ue||n instanceof Ie),n instanceof ue){if(n instanceof D0){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ue.create(n.field,"==",s)))||[];return Ie.create(i,"or")}return n}const r=n.filters.map(i=>h2(i));return Ie.create(r,n.op)}function $N(n){if(n.getFilters().length===0)return[];const e=Sh(h2(n));return G(d2(e)),Eh(e)||Th(e)?[e]:e.getFilters()}function Eh(n){return n instanceof ue}function Th(n){return n instanceof Ie&&nf(n)}function d2(n){return Eh(n)||Th(n)||function(e){if(e instanceof Ie&&yh(e)){for(const t of e.getFilters())if(!Eh(t)&&!Th(t))return!1;return!0}return!1}(n)}function Sh(n){if(G(n instanceof ue||n instanceof Ie),n instanceof ue)return n;if(n.filters.length===1)return Sh(n.filters[0]);const e=n.filters.map(r=>Sh(r));let t=Ie.create(e,n.op);return t=Lc(t),d2(t)?t:(G(t instanceof Ie),G(us(t)),G(t.filters.length>1),t.filters.reduce((r,i)=>ff(r,i)))}function ff(n,e){let t;return G(n instanceof ue||n instanceof Ie),G(e instanceof ue||e instanceof Ie),t=n instanceof ue?e instanceof ue?function(r,i){return Ie.create([r,i],"and")}(n,e):cg(n,e):e instanceof ue?cg(e,n):function(r,i){if(G(r.filters.length>0&&i.filters.length>0),us(r)&&us(i))return C0(r,i.getFilters());const s=yh(r)?r:i,o=yh(r)?i:r,a=s.filters.map(c=>ff(c,o));return Ie.create(a,"or")}(n,e),Lc(t)}function cg(n,e){if(us(e))return C0(e,n.getFilters());{const t=e.filters.map(r=>ff(n,r));return Ie.create(t,"or")}}function Lc(n){if(G(n instanceof ue||n instanceof Ie),n instanceof ue)return n;const e=n.getFilters();if(e.length===1)return Lc(e[0]);if(S0(n))return n;const t=e.map(i=>Lc(i)),r=[];return t.forEach(i=>{i instanceof ue?r.push(i):i instanceof Ie&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ie.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.He=new pf}addToCollectionParentIndex(e,t){return this.He.add(t),I.resolve()}getCollectionParents(e,t){return I.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return I.resolve()}deleteFieldIndex(e,t){return I.resolve()}getDocumentsMatchingTarget(e,t){return I.resolve(null)}getIndexType(e,t){return I.resolve(0)}getFieldIndexes(e,t){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,t){return I.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return I.resolve(zt.min())}updateCollectionGroup(e,t,r){return I.resolve()}updateIndexEntries(e,t){return I.resolve()}}class pf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new be(fe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Uint8Array(0);class zN{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new pf,this.Ye=new Nr(r=>pi(r),(r,i)=>ga(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const s={collectionId:r,parent:Tt(i)};return lg(e).put(s)}return I.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[u0(t),""],!1,!0);return lg(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(In(o.parent))}return r})}addFieldIndex(e,t){const r=Ba(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Ys(e);return s.next(a=>{o.put(rg(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Ba(e),i=Ys(e),s=Qs(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Qs(e);let i=!0;const s=new Map;return I.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=re();const a=[];return I.forEach(s,(c,l)=>{var u;k("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`} to execute ${pi(t)}`);const h=function(_,N){const z=fh(N);if(z===void 0)return null;for(const U of Oc(_,z.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(l,c),d=function(_,N){const z=new Map;for(const U of Ur(N))for(const Q of Oc(_,U.fieldPath))switch(Q.op){case"==":case"in":z.set(U.fieldPath.canonicalString(),Q.value);break;case"not-in":case"!=":return z.set(U.fieldPath.canonicalString(),Q.value),Array.from(z.values())}return null}(l,c),f=function(_,N){const z=[];let U=!0;for(const Q of Ur(N)){const oe=Q.kind===0?qm(_,Q.fieldPath,_.startAt):Hm(_,Q.fieldPath,_.startAt);z.push(oe.value),U&&(U=oe.inclusive)}return new br(z,U)}(l,c),m=function(_,N){const z=[];let U=!0;for(const Q of Ur(N)){const oe=Q.kind===0?Hm(_,Q.fieldPath,_.endAt):qm(_,Q.fieldPath,_.endAt);z.push(oe.value),U&&(U=oe.inclusive)}return new br(z,U)}(l,c),g=this.tn(c,l,f),v=this.tn(c,l,m),w=this.en(c,l,d),b=this.nn(c.indexId,h,g,f.inclusive,v,m.inclusive,w);return I.forEach(b,_=>r.H(_,t.limit).next(N=>{N.forEach(z=>{const U=M.fromSegments(z.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return I.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=$N(Ie.create(e.filters,"and")).map(r=>wh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.sn(t[h/l]):$a,f=this.rn(e,d,r[h%l],i),m=this.on(e,d,s[h%l],o),g=a.map(v=>this.rn(e,d,v,!0));u.push(...this.createRange(f,m,g))}return u}rn(e,t,r,i){const s=new Kr(e,M.empty(),t,r);return i?s:s.qe()}on(e,t,r,i){const s=new Kr(e,M.empty(),t,r);return i?s.qe():s}Xe(e,t){const r=new UN(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Ze(t);return I.forEach(i,s=>this.Xe(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new be(Ue.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}un(e,t){const r=new Ws;for(const i of Ur(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Le(i.kind);Hr.pe.oe(s,o)}return r.$e()}sn(e){const t=new Ws;return Hr.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new Ws;return Hr.pe.oe(fi(this.databaseId,t),r.Le(function(i){const s=Ur(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let i=[];i.push(new Ws);let s=0;for(const o of Ur(e)){const a=r[s++];for(const c of i)if(this.an(t,o.fieldPath)&&Ho(a))i=this.hn(i,o,a);else{const l=c.Le(o.kind);Hr.pe.oe(a,l)}}return this.ln(i)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Ws;c.seed(a.$e()),Hr.pe.oe(o,c.Le(t.kind)),s.push(c)}return s}an(e,t){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Ba(e),i=Ys(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Dc(u.sequenceNumber,new zt(vi(u.readTime),new M(In(u.documentKey)),u.largestBatchId)):Dc.empty(),d=l.fields.map(([f,m])=>new TD(Ue.fromServerFormat(f),m));return new h0(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Ba(e),s=Ys(e);return this.fn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>I.forEach(a,c=>s.put(rg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return I.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,c=>this.dn(e,i,c).next(l=>{const u=this.wn(s,c);return l.isEqual(u)?I.resolve():this._n(e,s,c,l,u)}))))})}mn(e,t,r,i){return Qs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,i){return Qs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const i=Qs(e);let s=new be(er);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{s=s.add(new Kr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new be(er);const i=this.un(t,e);if(i==null)return r;const s=fh(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ho(o))for(const a of o.arrayValue.values||[])r=r.add(new Kr(t.indexId,e.key,this.sn(a),i))}else r=r.add(new Kr(t.indexId,e.key,$a,i));return r}_n(e,t,r,i,s){k("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let m=Pi(d),g=Pi(f);for(;m||g;){let v=!1,w=!1;if(m&&g){const b=l(m,g);b<0?w=!0:b>0&&(v=!0)}else m!=null?w=!0:v=!0;v?(u(g),g=Pi(f)):w?(h(m),m=Pi(d)):(m=Pi(d),g=Pi(f))}}(i,s,er,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),I.waitFor(o)}fn(e){let t=1;return Ys(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>er(o,a)).filter((o,a,c)=>!a||er(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=er(o,e),c=er(o,t);if(a===0)i[0]=e.qe();else if(a>0&&c<0)i.push(o),i.push(o.qe());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.yn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$a,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$a,[]];s.push(IDBKeyRange.bound(a,c))}return s}yn(e,t){return er(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ug)}getMinOffset(e,t){return I.mapArray(this.Ze(t),r=>this.Xe(e,r).next(i=>i||$())).next(ug)}}function lg(n){return st(n,"collectionParents")}function Qs(n){return st(n,"indexEntries")}function Ba(n){return st(n,"indexConfiguration")}function Ys(n){return st(n,"indexState")}function ug(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Zd(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new zt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Rt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(u,h,d)=>(a++,d.delete()));s.push(c.next(()=>{G(a===1)}));const l=[];for(const u of t.mutations){const h=y0(e,u.key.path,t.batchId);s.push(i.delete(h)),l.push(u.key)}return I.waitFor(s).next(()=>l)}function jc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw $();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(41943040,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);class Pl{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.pn={}}static ie(e,t,r,i){G(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Pl(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return tr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Vi(e),o=tr(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new af(a,t,r,i),l=function(d,f,m){const g=m.baseMutations.map(w=>Wo(d.se,w)),v=m.mutations.map(w=>Wo(d.se,w));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:g,mutations:v}}(this.serializer,this.userId,c),u=[];let h=new be((d,f)=>ne(d.canonicalString(),f.canonicalString()));for(const d of i){const f=y0(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(s.put(f,DD))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),I.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return tr(e).get(t).next(r=>r?(G(r.userId===this.userId),qr(this.serializer,r)):null)}In(e,t){return this.pn[t]?I.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.pn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return tr(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=r),s=qr(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return tr(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return tr(e).j("userMutationsIndex",t).next(r=>r.map(i=>qr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=nc(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Vi(e).Z({range:i},(o,a,c)=>{const[l,u,h]=o,d=In(u);if(l===this.userId&&t.path.isEqual(d))return tr(e).get(h).next(f=>{if(!f)throw $();G(f.userId===this.userId),s.push(qr(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(ne);const i=[];return t.forEach(s=>{const o=nc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Vi(e).Z({range:a},(l,u,h)=>{const[d,f,m]=l,g=In(f);d===this.userId&&s.path.isEqual(g)?r=r.add(m):h.done()});i.push(c)}),I.waitFor(i).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=nc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new be(ne);return Vi(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,m=In(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):u.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(tr(e).get(s).next(o=>{if(o===null)throw $();G(o.userId===this.userId),r.push(qr(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return f2(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return I.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Vi(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=In(s[1]);i.push(c)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,t){return p2(e,this.userId,t)}An(e){return m2(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function p2(n,e,t){const r=nc(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vi(n).Z({range:s,Y:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function tr(n){return st(n,"mutations")}function Vi(n){return st(n,"documentMutations")}function m2(n){return st(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new wi(0)}static bn(){return new wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new wi(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>W.fromTimestamp(new De(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Vn(e,i)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Mi(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Mi(e).Z((o,a)=>{const c=so(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Mi(e).Z((r,i)=>{const s=so(i);t(s)})}Pn(e){return dg(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Vn(e,t){return dg(e).put("targetGlobalKey",t)}Sn(e,t){return Mi(e).put(u2(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=pi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Mi(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=so(a);ga(t,l.target)&&(s=l,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=or(e);return t.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,t,r){const i=or(e);return I.forEach(t,s=>{const o=Tt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=or(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=or(e);let s=re();return i.Z({range:r,Y:!0},(o,a,c)=>{const l=In(o[1]),u=new M(l);s=s.add(u)}).next(()=>s)}containsKey(e,t){const r=Tt(t.path),i=IDBKeyRange.bound([r],[u0(r)],!1,!0);let s=0;return or(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ne(e,t){return Mi(e).get(t).next(r=>r?so(r):null)}}function Mi(n){return st(n,"targets")}function dg(n){return st(n,"targetGlobal")}function or(n){return st(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg([n,e],[t,r]){const i=ne(n,t);return i===0?ne(e,r):i}class HN{constructor(e){this.Cn=e,this.buffer=new be(fg),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();fg(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KN{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){k("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dr(t)?k("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rr(t)}await this.$n(3e5)})}}class GN{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return I.resolve(Dt.ct);const r=new HN(t);return this.Mn.forEachTarget(e,i=>r.kn(i.sequenceNumber)).next(()=>this.Mn.Bn(e,i=>r.kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(hg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hg):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,i,s,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),dh()<=ge.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new GN(r,i)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,i)=>t(i))}addReference(e,t,r){return za(e,r)}removeReference(e,t,r){return za(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return za(e,t)}Kn(e,t){return function(r,i){let s=!1;return m2(r).X(o=>p2(r,o,i).next(a=>(a&&(s=!0),I.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Un(e,(o,a)=>{if(a<=t){const c=this.Kn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),or(e).delete([0,Tt(o.path)])))});i.push(c)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return za(e,t)}Un(e,t){const r=or(e);let i,s=Dt.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(s!==Dt.ct&&t(new M(In(i)),s),s=l,i=c):s=Dt.ct}).next(()=>{s!==Dt.ct&&t(new M(In(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function za(n,e){return or(n).put(function(t,r){return{targetId:0,path:Tt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(){this.changes=new Nr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?I.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Lr(e).put(r)}removeEntry(e,t,r){return Lr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Mc(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=Ee.newInvalidDocument(t);return Lr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Js(t))},(i,s)=>{r=this.Qn(t,s)}).next(()=>r)}zn(e,t){let r={size:0,document:Ee.newInvalidDocument(t)};return Lr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Js(t))},(i,s)=>{r={document:this.Qn(t,s),size:jc(s)}}).next(()=>r)}getEntries(e,t){let r=Ot();return this.jn(e,t,(i,s)=>{const o=this.Qn(i,s);r=r.insert(i,o)}).next(()=>r)}Wn(e,t){let r=Ot(),i=new je(M.comparator);return this.jn(e,t,(s,o)=>{const a=this.Qn(s,o);r=r.insert(s,a),i=i.insert(s,jc(o))}).next(()=>({documents:r,Hn:i}))}jn(e,t,r){if(t.isEmpty())return I.resolve();let i=new be(gg);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Js(i.first()),Js(i.last())),o=i.getIterator();let a=o.getNext();return Lr(e).Z({index:"documentKeyIndex",range:s},(c,l,u)=>{const h=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&gg(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?u.G(Js(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Mc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Lr(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=Ot();for(const u of c){const h=this.Qn(M.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(va(t,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,r,i){let s=Ot();const o=mg(t,r),a=mg(t,zt.max());return Lr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.Qn(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&u.done()}).next(()=>s)}newChangeBuffer(e){return new YN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return pg(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}Gn(e,t){return pg(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=PN(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Ee.newInvalidDocument(e)}}function y2(n){return new QN(n)}class YN extends g2{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new Nr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new be((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Yn.get(s);if(t.push(this.Jn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=tg(this.Jn.serializer,o);i=i.add(s.path.popLast());const l=jc(c);r+=l-a.size,t.push(this.Jn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=tg(this.Jn.serializer,o.convertToNoDocument(W.min()));t.push(this.Jn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Jn.updateMetadata(e,r)),I.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:i})=>(i.forEach((s,o)=>{this.Yn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function pg(n){return st(n,"remoteDocumentGlobal")}function Lr(n){return st(n,"remoteDocumentsV14")}function Js(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function mg(n,e){const t=e.documentKey.path.toArray();return[n,Mc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function gg(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ne(t[s],r[s]),i)return i;return i=ne(t.length,r.length),i||(i=ne(t[t.length-2],r[r.length-2]),i||ne(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&vo(r.mutation,i,Nt.empty(),De.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,t,r=re()){const i=_n();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=io();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=_n();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,re()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ot();const o=yo(),a=yo();return t.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Wn)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),vo(u.mutation,l,u.mutation.getFieldMask(),De.now())):o.set(l.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new JN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=yo();let i=new je((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||Nt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||re()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=F0();u.forEach(d=>{if(!s.has(d)){const f=K0(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):I.resolve(_n());let a=-1,c=s;return o.next(l=>I.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?I.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:j0(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=io();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const c=function(l,u){return new Gn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,Ee.newInvalidDocument(l)))});let o=io();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&vo(l.mutation,c,Nt.empty(),De.now()),va(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return I.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:$e(r.createTime)}),I.resolve()}getNamedQuery(e,t){return I.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:df(r.bundledQuery),readTime:$e(r.readTime)}}(t)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.overlays=new je(M.comparator),this.ts=new Map}getOverlay(e,t){return I.resolve(this.overlays.get(t))}getOverlays(e,t){const r=_n();return I.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.re(e,t,s)}),I.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),I.resolve()}getOverlaysForCollection(e,t,r){const i=_n(),s=t.length+1,o=new M(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return I.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=_n(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=_n(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return I.resolve(a)}re(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lf(t,r));let s=this.ts.get(t);s===void 0&&(s=re(),this.ts.set(t,s)),this.ts.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.es=new be(Ze.ns),this.ss=new be(Ze.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new Ze(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new Ze(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new M(new fe([])),r=new Ze(t,e),i=new Ze(t,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new M(new fe([])),r=new Ze(t,e),i=new Ze(t,e+1);let s=re();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ze(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return M.comparator(e.key,t.key)||ne(e.ds,t.ds)}static rs(e,t){return ne(e.ds,t.ds)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new be(Ze.ns)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new af(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,t){return I.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ys(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ze(t,0),i=new Ze(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(ne);return t.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),I.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new M(s),0);let a=new be(ne);return this._s.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ds)),!0)},o),I.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return I.forEach(t.mutations,i=>{const s=new Ze(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new Ze(t,0),i=this._s.firstAfterOrEqual(r);return I.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.Ts=e,this.docs=new je(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return I.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ot();const o=t.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Zd(f0(u),r)<=0||(i.has(u.key)||va(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,t,r,i){$()}Es(e,t){return I.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nO(this)}getSize(e){return I.resolve(this.size)}}class nO extends g2{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),I.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.persistence=e,this.As=new Nr(t=>pi(t),ga),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Rs=0,this.vs=new mf,this.targetCount=0,this.bs=wi.vn()}forEachTarget(e,t){return this.As.forEach((r,i)=>t(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),I.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new wi(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,I.resolve()}updateTargetData(e,t){return this.Sn(t),I.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return I.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),I.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),I.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return I.resolve(r)}containsKey(e,t){return I.resolve(this.vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Dt(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new rO(this),this.indexManager=new BN,this.remoteDocumentCache=function(r){return new tO(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new l2(t),this.xs=new XN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new eO(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);const i=new iO(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,t){return I.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class iO extends m0{constructor(e){super(),this.currentSequenceNumber=e}}class Ml{constructor(e){this.persistence=e,this.$s=new mf,this.Ms=null}static Fs(e){return new Ml(e)}get Bs(){if(this.Ms)return this.Ms;throw $()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),I.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),I.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Bs,r=>{const i=M.fromPath(r);return this.Ls(e,i).next(s=>{s||t.removeEntry(i,W.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return I.or([()=>I.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.serializer=e}M(e,t,r,i){const s=new Cl("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pm,{unique:!0}),a.createObjectStore("documentMutations")}(e),yg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),yg(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pm,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(s)))),r<7&&i>=7&&(o=o.next(()=>this.Ks(s))),r<8&&i>=8&&(o=o.next(()=>this.Gs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Qs(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:zD});c.createIndex("collectionPathOverlayIndex",qD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",HD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:ND});c.createIndex("documentKeyIndex",OD),c.createIndex("collectionGroupIndex",PD)}(e)).next(()=>this.zs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:VD}).createIndex("sequenceNumberIndex",UD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:$D}).createIndex("documentKeyIndex",BD,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=jc(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>I.forEach(a,c=>{G(c.userId===s.userId);const l=qr(this.serializer,c);return f2(e,s.userId,l).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new fe(o),l=function(u){return[0,Tt(u)]}(c);s.push(t.get(l).next(u=>u?I.resolve():(h=>t.put({targetId:0,path:Tt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>I.waitFor(s))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:FD});const r=t.store("collectionParents"),i=new pf,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Tt(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new fe(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],l)=>{const u=In(a);return s(u.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,i)=>{const s=so(i),o=u2(this.serializer,s);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new M(fe.fromString(l.document.name).popFirst(5)):l.noDocument?M.fromSegments(l.noDocument.path):l.unknownDocument?M.fromSegments(l.unknownDocument.path):$()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}js(e,t){const r=t.store("mutations"),i=y2(this.serializer),s=new w2(Ml.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:re();qr(this.serializer,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),I.forEach(a,(c,l)=>{const u=new et(l),h=Ol.ie(this.serializer,u),d=s.getIndexManager(u),f=Pl.ie(u,this.serializer,d,s.referenceDelegate);return new v2(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ph(t,Dt.ct),c).next()})})}}function yg(n){n.createObjectStore("targetDocuments",{keyPath:LD}).createIndex("documentTargetsIndex",jD,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MD,{unique:!0}),n.createObjectStore("targetGlobal")}const Tu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class gf{constructor(e,t,r,i,s,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=s,this.window=o,this.document=a,this.Hs=l,this.Js=u,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!gf.D())throw new A(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WN(this,i),this.si=t+"main",this.serializer=new l2(c),this.ii=new nn(this.si,this.Ys,new sO(this.serializer)),this.Ds=new qN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=y2(this.serializer),this.xs=new MN,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,u===!1&&Ve("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(x.FAILED_PRECONDITION,Tu);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Dt(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>qa(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Dr(e))return k("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return k("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return Xs(e).get("owner").next(t=>I.resolve(this._i(t)))}mi(e){return qa(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=st(t,"clientMetadata");return r.j().next(i=>{const s=this.pi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?I.resolve(!0):Xs(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new A(x.FAILED_PRECONDITION,Tu);return!1}}return!(!this.networkEnabled||!this.inForeground)||qa(e).j().next(r=>this.pi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&k("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ph(e,Dt.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>qa(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return Pl.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zN(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Ol.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){k("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.Ys)===15?GD:o===14?I0:o===13?w0:o===12?KD:o===11?v0:void $();var o;let a;return this.ii.runTransaction(e,i,s,c=>(a=new ph(c,this.Vs?this.Vs.next():Dt.ct),t==="readwrite-primary"?this.li(a).next(l=>!!l||this.fi(a)).next(l=>{if(!l)throw Ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new A(x.FAILED_PRECONDITION,p0);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return Xs(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new A(x.FAILED_PRECONDITION,Tu)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xs(e).put("owner",t)}static D(){return nn.D()}di(e){const t=Xs(e);return t.get("owner").next(r=>this._i(r)?(k("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):I.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ve(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;PE()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return k("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ve("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){Ve("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xs(n){return st(n,"owner")}function qa(n){return st(n,"clientMetadata")}function yf(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=i}static Di(e,t){let r=re(),i=re();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vf(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ni(e,t).next(s=>s||this.ki(e,t,i,r)).next(s=>s||this.Oi(e,t))}Ni(e,t){if(Km(t))return I.resolve(null);let r=Lt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Pc(t,null,"F"),r=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.$i(t,a);return this.Mi(t,l,o,c.readTime)?this.Ni(e,Pc(t,null,"F")):this.Fi(e,l,t,c)}))})))}ki(e,t,r,i){return Km(t)||i.isEqual(W.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(t,s);return this.Mi(t,o,r,i)?this.Oi(e,t):(dh()<=ge.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_h(t)),this.Fi(e,o,t,d0(i,-1)))})}$i(e,t){let r=new be(M0(e));return t.forEach((i,s)=>{va(e,s)&&(r=r.add(s))}),r}Mi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return dh()<=ge.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",_h(t)),this.xi.getDocumentsMatchingQuery(e,t,zt.min())}Fi(e,t,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t,r,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new je(ne),this.qi=new Nr(s=>pi(s),ga),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v2(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function _2(n,e,t,r){return new oO(n,e,t,r)}async function b2(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=re();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function aO(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=I.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(m=>{const g=c.docVersions.get(f);G(g!==null),m.version.compareTo(g)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function x2(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function cO(n,e){const t=j(n),r=e.snapshotVersion;let i=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});i=t.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Je.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(m,g,v){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,u)&&a.push(t.Ds.updateTargetData(s,f))});let c=Ot(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(E2(s,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!r.isEqual(W.min())){const u=t.Ds.getLastRemoteSnapshotVersion(s).next(h=>t.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.Li=i,s))}function E2(n,e,t){let r=re(),i=re();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ot();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:i}})}function lO(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ps(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ds.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):t.Ds.allocateTargetId(r).next(o=>(i=new fr(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function ms(n,e,t){const r=j(n),i=r.Li.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Dr(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Fc(n,e,t){const r=j(n);let i=W.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=j(a),h=u.qi.get(l);return h!==void 0?I.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(r,o,Lt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?i:W.min(),t?s:re())).next(a=>(A2(r,P0(e),a),{documents:a,Wi:s})))}function T2(n,e){const t=j(n),r=j(t.Ds),i=t.Li.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function S2(n,e){const t=j(n),r=t.Ui.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Ki.getAllFromCollectionGroup(i,e,d0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(A2(t,e,i),i))}function A2(n,e,t){let r=n.Ui.get(e)||W.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ui.set(e,r)}async function uO(n,e,t,r){const i=j(n);let s=re(),o=Ot();for(const l of t){const u=e.Hi(l.metadata.name);l.document&&(s=s.add(u));const h=e.Ji(l);h.setReadTime(e.Yi(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),c=await ps(i,function(l){return Lt(Os(fe.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>E2(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Ds.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Ds.addMatchingKeys(l,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.zi,u.ji)).next(()=>u.zi)))}async function hO(n,e,t=re()){const r=await ps(n,Lt(df(e.bundledQuery))),i=j(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=$e(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.xs.saveNamedQuery(s,e);const a=r.withResumeToken(Je.EMPTY_BYTE_STRING,o);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(s,a).next(()=>i.Ds.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ds.addMatchingKeys(s,t,r.targetId)).next(()=>i.xs.saveNamedQuery(s,e))})}function vg(n,e){return`firestore_clients_${n}_${e}`}function wg(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Su(n,e){return`firestore_targets_${n}_${e}`}class Vc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Zi(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new Vc(e,t,i.state,s):(Ve("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new wo(e,r.state,i):(Ve("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Uc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Rl();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=g0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Uc(e,s):(Ve("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class wf{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new wf(t.clientId,t.onlineState):(Ve("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ah{constructor(){this.activeTargetIds=Rl()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Au{constructor(e,t,r,i,s){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new je(ne),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.cr=vg(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Ah),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const i=this.getItem(vg(this.persistenceKey,r));if(i){const s=Uc.Zi(r,i);s&&(this.rr=this.rr.insert(s.clientId,s))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Su(this.persistenceKey,e));if(r){const i=wo.Zi(e,r);i&&(t=i.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Su(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Tr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return k("SharedClientState","READ",e,t),t}setItem(e,t){k("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){k("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(k("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void Ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(i){let s=Dt.ct;if(i!=null)try{const o=JSON.parse(i);G(typeof o=="number"),s=o}catch(o){Ve("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Dt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const i=new Vc(this.currentUser,e,t,r),s=wg(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Xi())}Tr(e){const t=wg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const i=Su(this.persistenceKey,e),s=new wo(e,t,r);this.setItem(i,s.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return Uc.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Vc.Zi(new et(s),i,t)}Cr(e,t){const r=this.dr.exec(e),i=Number(r[1]);return wo.Zi(i,t)}gr(e){return wf.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);k("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),i=this.pr(this.rr),s=this.pr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Rl();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class C2{constructor(){this.Br=new Ah,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Ah,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=null;function Cu(){return Ha===null?Ha=268435456+Math.round(2147483648*Math.random()):Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class mO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,i,s){const o=Cu(),a=this.ao(e,t);k("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,i,s),this.lo(e,a,c,r).then(l=>(k("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Bn("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}fo(e,t,r,i,s,o){return this.co(e,t,r,i,s)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,t){const r=fO[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,i){const s=Cu();return new Promise((o,a)=>{const c=new fD;c.setWithCredentials(!0),c.listenOnce(uD.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xu.NO_ERROR:const u=c.getResponseJson();k(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case xu.TIMEOUT:k(pt,`RPC '${e}' ${s} timed out`),a(new A(x.DEADLINE_EXCEEDED,"Request time out"));break;case xu.HTTP_ERROR:const h=c.getStatus();if(k(pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(v)>=0?v:x.UNKNOWN}(f.status);a(new A(m,f.message))}else a(new A(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new A(x.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{k(pt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);k(pt,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",l,r,15)})}wo(e,t,r){const i=Cu(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cD(),a=lD(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new dD({})),this.ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");k(pt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const f=new pO({Wr:g=>{d?k(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(h||(k(pt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),k(pt,`RPC '${e}' stream ${i} sending:`,g),u.send(g))},Hr:()=>u.close()}),m=(g,v,w)=>{g.listen(v,b=>{try{w(b)}catch(_){setTimeout(()=>{throw _},0)}})};return m(u,Fa.EventType.OPEN,()=>{d||k(pt,`RPC '${e}' stream ${i} transport opened.`)}),m(u,Fa.EventType.CLOSE,()=>{d||(d=!0,k(pt,`RPC '${e}' stream ${i} transport closed`),f.so())}),m(u,Fa.EventType.ERROR,g=>{d||(d=!0,Bn(pt,`RPC '${e}' stream ${i} transport errored:`,g),f.so(new A(x.UNAVAILABLE,"The operation could not be completed")))}),m(u,Fa.EventType.MESSAGE,g=>{var v;if(!d){const w=g.data[0];G(!!w);const b=w,_=b.error||((v=b[0])===null||v===void 0?void 0:v.error);if(_){k(pt,`RPC '${e}' stream ${i} received error:`,_);const N=_.status;let z=function(Q){const oe=qe[Q];if(oe!==void 0)return Q0(oe)}(N),U=_.message;z===void 0&&(z=x.INTERNAL,U="Unknown error status: "+N+" with message "+_.message),d=!0,f.so(new A(z,U)),u.close()}else k(pt,`RPC '${e}' stream ${i} received:`,w),f.io(w)}}),m(a,hD.STAT_EVENT,g=>{g.stat===Rm.PROXY?k(pt,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===Rm.NOPROXY&&k(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(){return typeof window<"u"?window:null}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n){return new EN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,t-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,t,r,i,s,o,a,c){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new If(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Ve(t.toString()),Ve("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===t&&this.Ko(r,i)},r=>{e(()=>{const i=new A(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gO extends R2{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=AN(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?$e(s.readTime):W.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=Go(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;return o=Nc(a)?{documents:r2(i,a)}:{query:i2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=X0(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=fs(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=kN(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=Go(this.serializer),t.removeTarget=e,this.Fo(t)}}class yO extends R2{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=CN(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.Zo(r,t)}return G(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Go(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Wo(this.serializer,r))};this.Fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new A(x.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(x.UNKNOWN,i.toString())})}fo(e,t,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(x.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class wO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ve(t),this.ru=!1):k("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Or(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=j(a);c.du.add(4),await Ls(c),c.mu.set("Unknown"),c.du.delete(4),await xa(c)}(this))})}),this.mu=new wO(r,i)}}async function xa(n){if(Or(n))for(const e of n.wu)await e(!0)}async function Ls(n){for(const e of n.wu)await e(!1)}function Ll(n,e){const t=j(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),xf(t)?bf(t):Fs(t).No()&&_f(t,e))}function Qo(n,e){const t=j(n),r=Fs(t);t.fu.delete(e),r.No()&&D2(t,e),t.fu.size===0&&(r.No()?r.$o():Or(t)&&t.mu.set("Unknown"))}function _f(n,e){n.gu.Ot(e.targetId),Fs(n).jo(e)}function D2(n,e){n.gu.Ot(e),Fs(n).Wo(e)}function bf(n){n.gu=new IN({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Fs(n).start(),n.mu.ou()}function xf(n){return Or(n)&&!Fs(n).xo()&&n.fu.size>0}function Or(n){return j(n).du.size===0}function N2(n){n.gu=void 0}async function _O(n){n.fu.forEach((e,t)=>{_f(n,e)})}async function bO(n,e){N2(n),xf(n)?(n.mu.au(e),bf(n)):n.mu.set("Unknown")}async function xO(n,e,t){if(n.mu.set("Online"),e instanceof J0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $c(n,r)}else if(e instanceof oc?n.gu.Kt(e):e instanceof Y0?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(W.min()))try{const r=await x2(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(c);l&&i.fu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),D2(i,a);const l=new fr(c.target,a,1,c.sequenceNumber);_f(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await $c(n,r)}}async function $c(n,e,t){if(!Dr(e))throw e;n.du.add(1),await Ls(n),n.mu.set("Offline"),t||(t=()=>x2(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await xa(n)})}function O2(n,e){return e().catch(t=>$c(n,t,e))}async function js(n){const e=j(n),t=xr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;EO(e);)try{const i=await lO(e.localStore,r);if(i===null){e.lu.length===0&&t.$o();break}r=i.batchId,TO(e,i)}catch(i){await $c(e,i)}P2(e)&&M2(e)}function EO(n){return Or(n)&&n.lu.length<10}function TO(n,e){n.lu.push(e);const t=xr(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function P2(n){return Or(n)&&!xr(n).xo()&&n.lu.length>0}function M2(n){xr(n).start()}async function SO(n){xr(n).tu()}async function AO(n){const e=xr(n);for(const t of n.lu)e.Yo(t.mutations)}async function CO(n,e,t){const r=n.lu.shift(),i=cf.from(r,e,t);await O2(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await js(n)}async function kO(n,e){e&&xr(n).Jo&&await async function(t,r){if(i=r.code,W0(i)&&i!==x.ABORTED){const s=t.lu.shift();xr(t).Oo(),await O2(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await js(t)}var i}(n,e),P2(n)&&M2(n)}async function _g(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=Or(t);t.du.add(3),await Ls(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await xa(t)}async function Ch(n,e){const t=j(n);e?(t.du.delete(2),await xa(t)):e||(t.du.add(2),await Ls(t),t.mu.set("Unknown"))}function Fs(n){return n.yu||(n.yu=function(e,t,r){const i=j(e);return i.nu(),new gO(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:_O.bind(null,n),Zr:bO.bind(null,n),zo:xO.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),xf(n)?bf(n):n.mu.set("Unknown")):(await n.yu.stop(),N2(n))})),n.yu}function xr(n){return n.pu||(n.pu=function(e,t,r){const i=j(e);return i.nu(),new yO(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:SO.bind(null,n),Zr:kO.bind(null,n),Xo:AO.bind(null,n),Zo:CO.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await js(n)):(await n.pu.stop(),n.lu.length>0&&(k("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ef(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vs(n,e){if(Ve("AsyncQueue",`${e}: ${n}`),Dr(n))return new A(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=io(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Iu=new je(M.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):$():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class gs{constructor(e,t,r,i,s,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new gs(e,t,Xi.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.Eu=void 0,this.listeners=[]}}class DO{constructor(){this.queries=new Nr(e=>O0(e),ya),this.onlineState="Unknown",this.Au=new Set}}async function Tf(n,e){const t=j(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new RO),i)try{s.Eu=await t.onListen(r)}catch(o){const a=Vs(o,`Initialization of query '${_h(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Ru(t.onlineState),s.Eu&&e.vu(s.Eu)&&Af(t)}async function Sf(n,e){const t=j(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function NO(n,e){const t=j(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Af(t)}function OO(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Af(n){n.Au.forEach(e=>{e.next()})}class Cf{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.serializer=e}Hi(e){return xn(this.serializer,e)}Ji(e){return e.metadata.exists?n2(this.serializer,e.document,!1):Ee.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return $e(e)}}class MO{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=L2(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=fe.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new xg(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Hi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||re()).add(s);t.set(o,a)}}return t}async complete(){const e=await uO(this.localStore,new xg(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await hO(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function L2(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.key=e}}class F2{constructor(e){this.key=e}}class V2{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=re(),this.mutatedKeys=re(),this.Ku=M0(e),this.Gu=new Xi(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new bg,i=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=va(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==g&&(r.track({type:3,doc:f}),v=!0):this.Wu(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this.Ku(f,c)>0||l&&this.Ku(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return f(h)-f(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new gs(this.query,e.Gu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new bg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=re(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new F2(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new j2(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=re();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return gs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class LO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class jO{constructor(e){this.key=e,this.ec=!1}}class FO{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Nr(a=>O0(a),ya),this.ic=new Map,this.rc=new Set,this.oc=new je(M.comparator),this.uc=new Map,this.cc=new mf,this.ac={},this.hc=new Map,this.lc=wi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function VO(n,e){const t=Of(n);let r,i;const s=t.sc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await ps(t.localStore,Lt(e));t.isPrimaryClient&&Ll(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await kf(t,e,r,a==="current",o.resumeToken)}return i}async function kf(n,e,t,r,i){n.dc=(h,d,f)=>async function(m,g,v,w){let b=g.view.zu(v);b.Mi&&(b=await Fc(m.localStore,g.query,!1).then(({documents:z})=>g.view.zu(z,b)));const _=w&&w.targetChanges.get(g.targetId),N=g.view.applyChanges(b,m.isPrimaryClient,_);return kh(m,g.targetId,N.Yu),N.snapshot}(n,h,d,f);const s=await Fc(n.localStore,e,!0),o=new V2(e,s.Wi),a=o.zu(s.documents),c=_a.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);kh(n,t,l.Yu);const u=new LO(e,t,o);return n.sc.set(e,u),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),l.snapshot}async function UO(n,e){const t=j(n),r=t.sc.get(e),i=t.ic.get(r.targetId);if(i.length>1)return t.ic.set(r.targetId,i.filter(s=>!ya(s,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await ms(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Qo(t.remoteStore,r.targetId),ys(t,r.targetId)}).catch(Rr)):(ys(t,r.targetId),await ms(t.localStore,r.targetId,!0))}async function $O(n,e,t){const r=Pf(n);try{const i=await function(s,o){const a=j(s),c=De.now(),l=o.reduce((d,f)=>d.add(f.key),re());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ot(),m=re();return a.Ki.getEntries(d,l).next(g=>{f=g,f.forEach((v,w)=>{w.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{u=g;const v=[];for(const w of o){const b=vN(w,u.get(w.key).overlayedDocument);b!=null&&v.push(new Wn(w.key,b,E0(b.value.mapValue),Re.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,v,o)}).next(g=>{h=g;const v=g.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,g.batchId,v)})}).then(()=>({batchId:h.batchId,changes:j0(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new je(ne)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(r,i.batchId,t),await Qn(r,i.changes),await js(r.remoteStore)}catch(i){const s=Vs(i,"Failed to persist write");t.reject(s)}}async function U2(n,e){const t=j(n);try{const r=await cO(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.uc.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?G(o.ec):i.removedDocuments.size>0&&(G(o.ec),o.ec=!1))}),await Qn(t,r,e)}catch(r){await Rr(r)}}function Eg(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Af(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BO(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new je(M.comparator);o=o.insert(s,Ee.newNoDocument(s,W.min()));const a=re().add(s),c=new Ia(W.min(),new Map,new be(ne),o,a);await U2(r,c),r.oc=r.oc.remove(s),r.uc.delete(e),Nf(r)}else await ms(r.localStore,e,!1).then(()=>ys(r,e,t)).catch(Rr)}async function zO(n,e){const t=j(n),r=e.batch.batchId;try{const i=await aO(t.localStore,e);Df(t,r,null),Rf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qn(t,i)}catch(i){await Rr(i)}}async function qO(n,e,t){const r=j(n);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(G(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Df(r,e,t),Rf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qn(r,i)}catch(i){await Rr(i)}}async function HO(n,e){const t=j(n);Or(t.remoteStore)||k("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=j(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.hc.get(r)||[];i.push(e),t.hc.set(r,i)}catch(r){const i=Vs(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Rf(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Df(n,e,t){const r=j(n);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function ys(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||$2(n,r)})}function $2(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(Qo(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Nf(n))}function kh(n,e,t){for(const r of t)r instanceof j2?(n.cc.addReference(r.key,e),KO(n,r)):r instanceof F2?(k("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||$2(n,r.key)):$()}function KO(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(k("SyncEngine","New document in limbo: "+t),n.rc.add(r),Nf(n))}function Nf(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new M(fe.fromString(e)),r=n.lc.next();n.uc.set(r,new jO(t)),n.oc=n.oc.insert(t,r),Ll(n.remoteStore,new fr(Lt(Os(t.path)),r,2,Dt.ct))}}async function Qn(n,e,t){const r=j(n),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=vf.Di(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,c){const l=j(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>I.forEach(c,h=>I.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Dr(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);l.Li=l.Li.insert(h,m)}}}(r.localStore,s))}async function GO(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await b2(t.localStore,e);t.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new A(x.CANCELLED,s))})}),i.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qn(t,r.Qi)}}function WO(n,e){const t=j(n),r=t.uc.get(e);if(r&&r.ec)return re().add(r.key);{let i=re();const s=t.ic.get(e);if(!s)return i;for(const o of s){const a=t.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function QO(n,e){const t=j(n),r=await Fc(t.localStore,e.query,!0),i=e.view.Xu(r);return t.isPrimaryClient&&kh(t,e.targetId,i.Yu),i}async function YO(n,e){const t=j(n);return S2(t.localStore,e).then(r=>Qn(t,r))}async function JO(n,e,t,r){const i=j(n),s=await function(o,a){const c=j(o),l=j(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.In(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):I.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await js(i.remoteStore):t==="acknowledged"||t==="rejected"?(Df(i,e,r||null),Rf(i,e),function(o,a){j(j(o).mutationQueue).En(a)}(i.localStore,e)):$(),await Qn(i,s)):k("SyncEngine","Cannot apply mutation batch with id: "+e)}async function XO(n,e){const t=j(n);if(Of(t),Pf(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Tg(t,r.toArray());t.fc=!0,await Ch(t.remoteStore,!0);for(const s of i)Ll(t.remoteStore,s)}else if(e===!1&&t.fc!==!1){const r=[];let i=Promise.resolve();t.ic.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ys(t,o),ms(t.localStore,o,!0))),Qo(t.remoteStore,o)}),await i,await Tg(t,r),function(s){const o=j(s);o.uc.forEach((a,c)=>{Qo(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new je(M.comparator)}(t),t.fc=!1,await Ch(t.remoteStore,!1)}}async function Tg(n,e,t){const r=j(n),i=[],s=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await ps(r.localStore,Lt(c[0]));for(const l of c){const u=r.sc.get(l),h=await QO(r,u);h.snapshot&&s.push(h.snapshot)}}else{const l=await T2(r.localStore,o);a=await ps(r.localStore,l),await kf(r,B2(l),o,!1,a.resumeToken)}i.push(a)}return r.nc.zo(s),i}function B2(n){return N0(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function ZO(n){const e=j(n);return j(j(e.localStore).persistence).bi()}async function eP(n,e,t,r){const i=j(n);if(i.fc)return void k("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await S2(i.localStore,P0(s[0])),a=Ia.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Je.EMPTY_BYTE_STRING);await Qn(i,o,a);break}case"rejected":await ms(i.localStore,e,!0),ys(i,e,r);break;default:$()}}async function tP(n,e,t){const r=Of(n);if(r.fc){for(const i of e){if(r.ic.has(i)){k("SyncEngine","Adding an already active target "+i);continue}const s=await T2(r.localStore,i),o=await ps(r.localStore,s);await kf(r,B2(s),o.targetId,!1,o.resumeToken),Ll(r.remoteStore,o)}for(const i of t)r.ic.has(i)&&await ms(r.localStore,i,!1).then(()=>{Qo(r.remoteStore,i),ys(r,i)}).catch(Rr)}}function Of(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=U2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BO.bind(null,e),e.nc.zo=NO.bind(null,e.eventManager),e.nc.wc=OO.bind(null,e.eventManager),e}function Pf(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qO.bind(null,e),e}function nP(n,e,t){const r=j(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=j(h),m=$e(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.xs.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(L2(a));const c=new MO(a,i.localStore,s.serializer);let l=await s._c();for(;l;){const h=await c.$u(l);h&&o._updateProgress(h),l=await s._c()}const u=await c.complete();return await Qn(i,u.Bu,void 0),await function(h,d){const f=j(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.xs.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Fu)}catch(a){return Bn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Rh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ba(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return _2(this.persistence,new I2,e.initialUser,this.serializer)}createPersistence(e){return new w2(Ml.Fs,this.serializer)}createSharedClientState(e){return new C2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class z2 extends Rh{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await Pf(this.mc.syncEngine),await js(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return _2(this.persistence,new I2,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new KN(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new kD(t,this.persistence);return new CD(e.asyncQueue,r)}createPersistence(e){const t=yf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new gf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,k2(),ac(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new C2}}class rP extends z2{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof Au&&(this.sharedClientState.syncEngine={$r:JO.bind(null,t),Mr:eP.bind(null,t),Fr:tP.bind(null,t),bi:ZO.bind(null,t),Or:YO.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await XO(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=k2();if(!Au.D(t))throw new A(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=yf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Au(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Mf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Eg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GO.bind(null,this.syncEngine),await Ch(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new DO}createDatastore(e){const t=ba(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new mO(i));var i;return function(s,o,a,c){return new vO(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Eg(this.syncEngine,a,0),o=Ig.D()?new Ig:new dO,new IO(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,l){const u=new FO(r,i,s,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=j(e);k("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Ls(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Ve("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new tt,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const i=await this.vc(r);return new PO(JSON.parse(i),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=j(r),o=Go(s.serializer)+"/documents",a={documents:i.map(h=>Ko(s.serializer,h))},c=await s.fo("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=SN(s.serializer,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());G(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ms(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=M.fromPath(r);this.mutations.push(new of(i,this.precondition(i)))}),await async function(t,r){const i=j(t),s=Go(i.serializer)+"/documents",o={writes:r.map(a=>Wo(i.serializer,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw $();t=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new A(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(W.min())?Re.exists(!1):Re.updateTime(t):Re.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(W.min()))throw new A(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(t)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Vc=r.maxAttempts,this.Co=new If(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new sP(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Cc(i)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!ma(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!W0(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=l0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vs(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cc(n,e){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await b2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Dh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Lf(n);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>_g(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>_g(e.remoteStore,s)),n._onlineComponents=e}function q2(n){return n.name==="FirebaseError"?n.code===x.FAILED_PRECONDITION||n.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Lf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await cc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!q2(t))throw t;Bn("Error using user provided cache. Falling back to memory cache: "+t),await cc(n,new Rh)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await cc(n,new Rh);return n._offlineComponents}async function Fl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Dh(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Dh(n,new Mf))),n._onlineComponents}function H2(n){return Lf(n).then(e=>e.persistence)}function jf(n){return Lf(n).then(e=>e.localStore)}function K2(n){return Fl(n).then(e=>e.remoteStore)}function Ff(n){return Fl(n).then(e=>e.syncEngine)}function cP(n){return Fl(n).then(e=>e.datastore)}async function vs(n){const e=await Fl(n),t=e.eventManager;return t.onListen=VO.bind(null,e.syncEngine),t.onUnlisten=UO.bind(null,e.syncEngine),t}function lP(n){return n.asyncQueue.enqueue(async()=>{const e=await H2(n),t=await K2(n);return e.setNetworkEnabled(!0),function(r){const i=j(r);return i.du.delete(0),xa(i)}(t)})}function uP(n){return n.asyncQueue.enqueue(async()=>{const e=await H2(n),t=await K2(n);return e.setNetworkEnabled(!1),async function(r){const i=j(r);i.du.add(0),await Ls(i),i.mu.set("Offline")}(t)})}function hP(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const l=j(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new A(x.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Vs(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await jf(n),e,t)),t.promise}function G2(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new jl({next:h=>{s.enqueueAndForget(()=>Sf(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(x.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Cf(Os(o.path),l,{includeMetadataChanges:!0,xu:!0});return Tf(i,u)}(await vs(n),n.asyncQueue,e,t,r)),r.promise}function dP(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Fc(r,i,!0),a=new V2(i,o.Wi),c=a.zu(o.documents),l=a.applyChanges(c,!1);s.resolve(l.snapshot)}catch(o){const a=Vs(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await jf(n),e,t)),t.promise}function W2(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new jl({next:h=>{s.enqueueAndForget(()=>Sf(i,u)),h.fromCache&&a.source==="server"?c.reject(new A(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Cf(o,l,{includeMetadataChanges:!0,xu:!0});return Tf(i,u)}(await vs(n),n.asyncQueue,e,t,r)),r.promise}function fP(n,e){const t=new jl(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){j(r).Au.add(i),i.next()}(await vs(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){j(r).Au.delete(i)}(await vs(n),t))}}function pP(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,l){return new iP(c,l)}(function(c,l){if(c instanceof Uint8Array)return Sg(c,l);if(c instanceof ArrayBuffer)return Sg(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ba(e));n.asyncQueue.enqueueAndForget(async()=>{nP(await Ff(n),i,r)})}function mP(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=j(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.xs.getNamedQuery(s,r))}(await jf(n),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n,e,t){if(!t)throw new A(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Q2(n,e,t,r){if(e===!0&&r===!0)throw new A(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cg(n){if(!M.isDocumentKey(n))throw new A(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function kg(n){if(M.isDocumentKey(n))throw new A(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new A(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vl(n);throw new A(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Y2(n,e){if(e<=0)throw new A(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new A(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Q2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rg(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new gD;switch(t.type){case"firstParty":return new ID(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new A(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ag.get(e);t&&(k("ComponentProvider","Removing Datastore"),Ag.delete(e),t.terminate())}(this),Promise.resolve()}}function gP(n,e,t,r={}){var i;const s=(n=ye(n,Ea))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Bn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=et.MOCK_USER;else{o=DE(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new A(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}n._authCredentials=new yD(new c0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class dt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dt(this.firestore,e,this._query)}}class En extends dt{constructor(e,t,r){super(e,t,Os(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new M(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function J2(n,e,...t){if(n=J(n),Vf("collection","path",e),n instanceof Ea){const r=fe.fromString(e,...t);return kg(r),new En(n,null,r)}{if(!(n instanceof Te||n instanceof En))throw new A(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return kg(r),new En(n.firestore,null,r)}}function yP(n,e){if(n=ye(n,Ea),Vf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new dt(n,null,function(t){return new Gn(fe.emptyPath(),t)}(e))}function Bc(n,e,...t){if(n=J(n),arguments.length===1&&(e=l0.A()),Vf("doc","path",e),n instanceof Ea){const r=fe.fromString(e,...t);return Cg(r),new Te(n,null,new M(r))}{if(!(n instanceof Te||n instanceof En))throw new A(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Cg(r),new Te(n.firestore,n instanceof En?n.converter:null,new M(r))}}function X2(n,e){return n=J(n),e=J(e),(n instanceof Te||n instanceof En)&&(e instanceof Te||e instanceof En)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Z2(n,e){return n=J(n),e=J(e),n instanceof dt&&e instanceof dt&&n.firestore===e.firestore&&ya(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new If(this,"async_queue_retry"),this.qc=()=>{const t=ac();t&&k("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=ac();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new tt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Dr(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ve("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=Ef.createAndSchedule(this,e,t,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&$()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Nh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class wP{constructor(){this._progressObserver={},this._taskCompletionResolver=new tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=-1;class Fe extends Ea{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new vP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ew(this),this._firestoreClient.terminate()}}function ot(n){return n._firestoreClient||ew(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ew(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,l){return new JD(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new aP(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function _P(n,e){nw(n=ye(n,Fe));const t=ot(n);if(t._uninitializedComponentsProvider)throw new A(x.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Mf;return tw(t,i,new z2(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function bP(n){nw(n=ye(n,Fe));const e=ot(n);if(e._uninitializedComponentsProvider)throw new A(x.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Mf;return tw(e,r,new rP(r,t.cacheSizeBytes))}function tw(n,e,t){const r=new tt;return n.asyncQueue.enqueue(async()=>{try{await cc(n,t),await Dh(n,e),r.resolve()}catch(i){const s=i;if(!q2(s))throw s;Bn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function xP(n){if(n._initialized&&!n._terminated)throw new A(x.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new tt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!nn.D())return Promise.resolve();const r=t+"main";await nn.delete(r)}(yf(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function EP(n){return function(e){const t=new tt;return e.asyncQueue.enqueueAndForget(async()=>HO(await Ff(e),t)),t.promise}(ot(n=ye(n,Fe)))}function TP(n){return lP(ot(n=ye(n,Fe)))}function SP(n){return uP(ot(n=ye(n,Fe)))}function AP(n,e){const t=ot(n=ye(n,Fe)),r=new wP;return pP(t,n._databaseId,e,r),r}function CP(n,e){return mP(ot(n=ye(n,Fe)),e).then(t=>t?new dt(n,null,t.query):null)}function nw(n){if(n._initialized||n._terminated)throw new A(x.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kn(Je.fromBase64String(e))}catch(t){throw new A(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kn(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new A(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new A(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new A(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=/^__.*__$/;class RP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ps(e,this.data,t,this.fieldTransforms)}}class rw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class $l{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new $l(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return zc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(iw(this.Yc)&&kP.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class DP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ba(e)}ua(e,t,r,i=!1){return new $l({Yc:e,methodName:t,oa:r,path:Ue.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ci(n){const e=n._freezeSettings(),t=ba(n._databaseId);return new DP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bl(n,e,t,r,i,s={}){const o=n.ua(s.merge||s.mergeFields?2:0,e,t,i);zf("Data must be an object, but it was:",o,r);const a=aw(r,o);let c,l;if(s.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Oh(e,h,t);if(!o.contains(d))throw new A(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lw(u,d)||u.push(d)}c=new Nt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new RP(new ct(a),c,l)}class Ta extends Ai{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ta}}function sw(n,e,t){return new $l({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Uf extends Ai{_toFieldTransform(e){return new wa(e.path,new hs)}isEqual(e){return e instanceof Uf}}class NP extends Ai{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=sw(this,e,!0),r=this.ca.map(s=>ki(s,t)),i=new mi(r);return new wa(e.path,i)}isEqual(e){return this===e}}class OP extends Ai{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=sw(this,e,!0),r=this.ca.map(s=>ki(s,t)),i=new gi(r);return new wa(e.path,i)}isEqual(e){return this===e}}class PP extends Ai{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new ds(e.serializer,$0(e.serializer,this.aa));return new wa(e.path,t)}isEqual(e){return this===e}}function $f(n,e,t,r){const i=n.ua(1,e,t);zf("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();Si(r,(c,l)=>{const u=qf(e,c,t);l=J(l);const h=i.na(u);if(l instanceof Ta)s.push(u);else{const d=ki(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Nt(s);return new rw(o,a,i.fieldTransforms)}function Bf(n,e,t,r,i,s){const o=n.ua(1,e,t),a=[Oh(e,r,t)],c=[i];if(s.length%2!=0)throw new A(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Oh(e,s[d])),c.push(s[d+1]);const l=[],u=ct.empty();for(let d=a.length-1;d>=0;--d)if(!lw(l,a[d])){const f=a[d];let m=c[d];m=J(m);const g=o.na(f);if(m instanceof Ta)l.push(f);else{const v=ki(m,g);v!=null&&(l.push(f),u.set(f,v))}}const h=new Nt(l);return new rw(u,h,o.fieldTransforms)}function ow(n,e,t,r=!1){return ki(t,n.ua(r?4:3,e))}function ki(n,e){if(cw(n=J(n)))return zf("Unsupported field value:",e,n),aw(n,e);if(n instanceof Ai)return function(t,r){if(!iw(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=ki(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=J(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return $0(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=De.fromDate(t);return{timestampValue:fs(r.serializer,i)}}if(t instanceof De){const i=new De(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fs(r.serializer,i)}}if(t instanceof Ul)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof kn)return{bytesValue:X0(r.serializer,t._byteString)};if(t instanceof Te){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hf(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${Vl(t)}`)}(n,e)}function aw(n,e){const t={};return _0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(n,(r,i)=>{const s=ki(i,e.Xc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function cw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof De||n instanceof Ul||n instanceof kn||n instanceof Te||n instanceof Ai)}function zf(n,e,t){if(!cw(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Vl(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function Oh(n,e,t){if((e=J(e))instanceof Er)return e._internalPath;if(typeof e=="string")return qf(n,e);throw zc("Field path arguments must be of type string or ",n,!1,void 0,t)}const MP=new RegExp("[~\\*/\\[\\]]");function qf(n,e,t){if(e.search(MP)>=0)throw zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Er(...e.split("."))._internalPath}catch{throw zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zc(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new A(x.INVALID_ARGUMENT,a+n+c)}function lw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class LP extends Yo{data(){return super.data()}}function zl(n,e){return typeof e=="string"?qf(n,e):e instanceof Er?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new A(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hf{}class Sa extends Hf{}function nr(n,e,...t){let r=[];e instanceof Hf&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Kf).length,o=i.filter(a=>a instanceof ql).length;if(s>1||s>0&&o>0)throw new A(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ql extends Sa{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ql(e,t,r)}_apply(e){const t=this._parse(e);return dw(e._query,t),new dt(e.firestore,e.converter,Ih(e._query,t))}_parse(e){const t=Ci(e.firestore);return function(i,s,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ng(u,l);const d=[];for(const f of u)d.push(Dg(a,i,f));h={arrayValue:{values:d}}}else h=Dg(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ng(u,l),h=ow(o,s,u,l==="in"||l==="not-in");return ue.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function jP(n,e,t){const r=e,i=zl("where",n);return ql._create(i,r,t)}class Kf extends Hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ie.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)dw(s,a),s=Ih(s,a)}(e._query,t),new dt(e.firestore,e.converter,Ih(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gf extends Sa{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gf(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new A(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ji(i,s);return function(a,c){if(rf(a)===null){const l=kl(a);l!==null&&fw(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new dt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Gn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function FP(n,e="asc"){const t=e,r=zl("orderBy",n);return Gf._create(r,t)}class Hl extends Sa{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Hl(e,t,r)}_apply(e){return new dt(e.firestore,e.converter,Pc(e._query,this._limit,this._limitType))}}function VP(n){return Y2("limit",n),Hl._create("limit",n,"F")}function UP(n){return Y2("limitToLast",n),Hl._create("limitToLast",n,"L")}class Kl extends Sa{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Kl(e,t,r)}_apply(e){const t=hw(e,this.type,this._docOrFields,this._inclusive);return new dt(e.firestore,e.converter,function(r,i){return new Gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function $P(...n){return Kl._create("startAt",n,!0)}function BP(...n){return Kl._create("startAfter",n,!1)}class Gl extends Sa{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Gl(e,t,r)}_apply(e){const t=hw(e,this.type,this._docOrFields,this._inclusive);return new dt(e.firestore,e.converter,function(r,i){return new Gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function zP(...n){return Gl._create("endBefore",n,!1)}function qP(...n){return Gl._create("endAt",n,!0)}function hw(n,e,t,r){if(t[0]=J(t[0]),t[0]instanceof Yo)return function(i,s,o,a,c){if(!a)throw new A(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of si(i))if(u.field.isKeyField())l.push(fi(s,a.key));else{const h=a.data.field(u.field);if(tf(h))throw new A(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new A(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new br(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Ci(n.firestore);return function(s,o,a,c,l,u){const h=s.explicitOrderBy;if(l.length>h.length)throw new A(x.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const m=l[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new A(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!sf(s)&&m.indexOf("/")!==-1)throw new A(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const g=s.path.child(fe.fromString(m));if(!M.isDocumentKey(g))throw new A(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const v=new M(g);d.push(fi(o,v))}else{const g=ow(a,c,m);d.push(g)}}return new br(d,u)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Dg(n,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new A(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sf(e)&&t.indexOf("/")!==-1)throw new A(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!M.isDocumentKey(r))throw new A(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fi(n,new M(r))}if(t instanceof Te)return fi(n,t._key);throw new A(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vl(t)}.`)}function Ng(n,e){if(!Array.isArray(n)||n.length===0)throw new A(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dw(n,e){if(e.isInequality()){const r=kl(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=rf(n);s!==null&&fw(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new A(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function fw(n,e,t){if(!t.isEqual(e))throw new A(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Wf{convertValue(e,t="none"){switch(di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw $()}}convertObject(e,t){const r={};return Si(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ul(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=b0(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const t=wr(e);return new De(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);G(c2(r));const i=new Ir(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(t)||Ve(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class HP extends Wf{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zn extends Yo{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Io extends zn{data(e={}){return super.data(e)}}class Tr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Io(this._firestore,this._userDataWriter,r.key,r,new Jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new A(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Io(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Io(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:KP(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function KP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function pw(n,e){return n instanceof zn&&e instanceof zn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Tr&&e instanceof Tr&&n._firestore===e._firestore&&Z2(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(n){n=ye(n,Te);const e=ye(n.firestore,Fe);return G2(ot(e),n._key).then(t=>Qf(e,n,t))}class Ri extends Wf{constructor(e){super(),this.firestore=e}convertBytes(e){return new kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function WP(n){n=ye(n,Te);const e=ye(n.firestore,Fe),t=ot(e),r=new Ri(e);return hP(t,n._key).then(i=>new zn(e,r,n._key,i,new Jr(i!==null&&i.hasLocalMutations,!0),n.converter))}function QP(n){n=ye(n,Te);const e=ye(n.firestore,Fe);return G2(ot(e),n._key,{source:"server"}).then(t=>Qf(e,n,t))}function YP(n){n=ye(n,dt);const e=ye(n.firestore,Fe),t=ot(e),r=new Ri(e);return uw(n._query),W2(t,n._query).then(i=>new Tr(e,r,n,i))}function JP(n){n=ye(n,dt);const e=ye(n.firestore,Fe),t=ot(e),r=new Ri(e);return dP(t,n._query).then(i=>new Tr(e,r,n,i))}function XP(n){n=ye(n,dt);const e=ye(n.firestore,Fe),t=ot(e),r=new Ri(e);return W2(t,n._query,{source:"server"}).then(i=>new Tr(e,r,n,i))}function Og(n,e,t){n=ye(n,Te);const r=ye(n.firestore,Fe),i=Wl(n.converter,e,t);return Aa(r,[Bl(Ci(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Re.none())])}function Pg(n,e,t,...r){n=ye(n,Te);const i=ye(n.firestore,Fe),s=Ci(i);let o;return o=typeof(e=J(e))=="string"||e instanceof Er?Bf(s,"updateDoc",n._key,e,t,r):$f(s,"updateDoc",n._key,e),Aa(i,[o.toMutation(n._key,Re.exists(!0))])}function ZP(n){return Aa(ye(n.firestore,Fe),[new Ms(n._key,Re.none())])}function eM(n,e){const t=ye(n.firestore,Fe),r=Bc(n),i=Wl(n.converter,e);return Aa(t,[Bl(Ci(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function mw(n,...e){var t,r,i;n=J(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nh(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof Te)l=ye(n.firestore,Fe),u=Os(n._key.path),c={next:h=>{e[o]&&e[o](Qf(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ye(n,dt);l=ye(h.firestore,Fe),u=h._query;const d=new Ri(l);c={next:f=>{e[o]&&e[o](new Tr(l,d,h,f))},error:e[o+1],complete:e[o+2]},uw(n._query)}return function(h,d,f,m){const g=new jl(m),v=new Cf(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>Tf(await vs(h),v)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>Sf(await vs(h),v))}}(ot(l),u,a,c)}function tM(n,e){return fP(ot(n=ye(n,Fe)),Nh(e)?e:{next:e})}function Aa(n,e){return function(t,r){const i=new tt;return t.asyncQueue.enqueueAndForget(async()=>$O(await Ff(t),r,i)),i.promise}(ot(n),e)}function Qf(n,e,t){const r=t.docs.get(e._key),i=new Ri(n);return new zn(n,i,e._key,r,new Jr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ci(e)}set(e,t,r){this._verifyNotCommitted();const i=ar(e,this._firestore),s=Wl(i.converter,t,r),o=Bl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=ar(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof Er?Bf(this._dataReader,"WriteBatch.update",s._key,t,r,i):$f(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ar(e,this._firestore);return this._mutations=this._mutations.concat(new Ms(t._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ar(n,e){if((n=J(n)).firestore!==e)throw new A(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ci(e)}get(e){const t=ar(e,this._firestore),r=new HP(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new Yo(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Yo(this._firestore,r,t._key,null,t.converter);throw $()})}set(e,t,r){const i=ar(e,this._firestore),s=Wl(i.converter,t,r),o=Bl(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=ar(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof Er?Bf(this._dataReader,"Transaction.update",s._key,t,r,i):$f(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=ar(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ar(e,this._firestore),r=new Ri(this._firestore);return super.get(e).then(i=>new zn(this._firestore,r,t._key,i._document,new Jr(!1,!1),t.converter))}}function sM(n,e,t){n=ye(n,Fe);const r=Object.assign(Object.assign({},nM),t);return function(i){if(i.maxAttempts<1)throw new A(x.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new tt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await cP(i);new oP(i.asyncQueue,c,o,s,a).run()}),a.promise}(ot(n),i=>e(new iM(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(){return new Ta("deleteField")}function aM(){return new Uf("serverTimestamp")}function cM(...n){return new NP("arrayUnion",n)}function lM(...n){return new OP("arrayRemove",n)}function uM(n){return new PP("increment",n)}(function(n,e=!0){(function(t){Ns=t})(bi),yr(new Sn("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new Fe(new vD(t.getProvider("auth-internal")),new bD(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ir(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),bn(Dm,"3.10.0",n),bn(Dm,"3.10.0","esm2017")})();const hM="@firebase/firestore-compat",dM="0.3.6";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function Lg(){if(!QD())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Jo{constructor(e){this._delegate=e}static fromBase64String(e){return Lg(),new Jo(kn.fromBase64String(e))}static fromUint8Array(e){return Mg(),new Jo(kn.fromUint8Array(e))}toBase64(){return Lg(),this._delegate.toBase64()}toUint8Array(){return Mg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){return fM(n,["next","error","complete"])}function fM(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{enableIndexedDbPersistence(e,t){return _P(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return bP(e._delegate)}clearIndexedDbPersistence(e){return xP(e._delegate)}}class gw{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ir||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Bn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){gP(this._delegate,e,t,r)}enableNetwork(){return TP(this._delegate)}disableNetwork(){return SP(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Q2("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return EP(this._delegate)}onSnapshotsInSync(e){return tM(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ws(this,J2(this._delegate,e))}catch(t){throw bt(t,"collection()","Firestore.collection()")}}doc(e){try{return new Gt(this,Bc(this._delegate,e))}catch(t){throw bt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new _t(this,yP(this._delegate,e))}catch(t){throw bt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return sM(this._delegate,t=>e(new yw(this,t)))}batch(){return ot(this._delegate),new vw(new rM(this._delegate,e=>Aa(this._delegate,e)))}loadBundle(e){return AP(this._delegate,e)}namedQuery(e){return CP(this._delegate,e).then(t=>t?new _t(this,t):null)}}class Ql extends Wf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jo(new kn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Gt.forKey(t,this.firestore,null)}}function mM(n){pD(n)}class yw{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ql(e)}get(e){const t=Xr(e);return this._delegate.get(t).then(r=>new Xo(this._firestore,new zn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Xr(e);return r?(Yf("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Xr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Xr(e);return this._delegate.delete(t),this}}class vw{constructor(e){this._delegate=e}set(e,t,r){const i=Xr(e);return r?(Yf("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Xr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Xr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ii{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Io(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Zo(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ii.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Ii(e,new Ql(e),t),i.set(t,s)),s}}Ii.INSTANCES=new WeakMap;class Gt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ql(e)}static forPath(e,t,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Gt(t,new Te(t._delegate,r,new M(e)))}static forKey(e,t,r){return new Gt(t,new Te(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ws(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ws(this.firestore,J2(this._delegate,e))}catch(t){throw bt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof Te?X2(this._delegate,e):!1}set(e,t){t=Yf("DocumentReference.set",t);try{return t?Og(this._delegate,e,t):Og(this._delegate,e)}catch(r){throw bt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Pg(this._delegate,e):Pg(this._delegate,e,t,...r)}catch(i){throw bt(i,"updateDoc()","DocumentReference.update()")}}delete(){return ZP(this._delegate)}onSnapshot(...e){const t=ww(e),r=Iw(e,i=>new Xo(this.firestore,new zn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return mw(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=WP(this._delegate):(e==null?void 0:e.source)==="server"?t=QP(this._delegate):t=GP(this._delegate),t.then(r=>new Xo(this.firestore,new zn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Gt(this.firestore,e?this._delegate.withConverter(Ii.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bt(n,e,t){return n.message=n.message.replace(e,t),n}function ww(n){for(const e of n)if(typeof e=="object"&&!Ph(e))return e;return{}}function Iw(n,e){var t,r;let i;return Ph(n[0])?i=n[0]:Ph(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Xo{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Gt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return pw(this._delegate,e._delegate)}}class Zo extends Xo{data(e){const t=this._delegate.data(e);return mD(t!==void 0),t}}class _t{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ql(e)}where(e,t,r){try{return new _t(this.firestore,nr(this._delegate,jP(e,t,r)))}catch(i){throw bt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new _t(this.firestore,nr(this._delegate,FP(e,t)))}catch(r){throw bt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new _t(this.firestore,nr(this._delegate,VP(e)))}catch(t){throw bt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new _t(this.firestore,nr(this._delegate,UP(e)))}catch(t){throw bt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new _t(this.firestore,nr(this._delegate,$P(...e)))}catch(t){throw bt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new _t(this.firestore,nr(this._delegate,BP(...e)))}catch(t){throw bt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new _t(this.firestore,nr(this._delegate,zP(...e)))}catch(t){throw bt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new _t(this.firestore,nr(this._delegate,qP(...e)))}catch(t){throw bt(t,"endAt()","Query.endAt()")}}isEqual(e){return Z2(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=JP(this._delegate):(e==null?void 0:e.source)==="server"?t=XP(this._delegate):t=YP(this._delegate),t.then(r=>new Mh(this.firestore,new Tr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=ww(e),r=Iw(e,i=>new Mh(this.firestore,new Tr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return mw(this._delegate,t,r)}withConverter(e){return new _t(this.firestore,e?this._delegate.withConverter(Ii.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class gM{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Zo(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mh{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new _t(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Zo(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new gM(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Zo(this._firestore,r))})}isEqual(e){return pw(this._delegate,e._delegate)}}class ws extends _t{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Gt(this.firestore,e):null}doc(e){try{return e===void 0?new Gt(this.firestore,Bc(this._delegate)):new Gt(this.firestore,Bc(this._delegate,e))}catch(t){throw bt(t,"doc()","CollectionReference.doc()")}}add(e){return eM(this._delegate,e).then(t=>new Gt(this.firestore,t))}isEqual(e){return X2(this._delegate,e._delegate)}withConverter(e){return new ws(this.firestore,e?this._delegate.withConverter(Ii.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Xr(n){return ye(n,Te)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(...e){this._delegate=new Er(...e)}static documentId(){return new Jf(Ue.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof Er?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._delegate=e}static serverTimestamp(){const e=aM();return e._methodName="FieldValue.serverTimestamp",new Gr(e)}static delete(){const e=oM();return e._methodName="FieldValue.delete",new Gr(e)}static arrayUnion(...e){const t=cM(...e);return t._methodName="FieldValue.arrayUnion",new Gr(t)}static arrayRemove(...e){const t=lM(...e);return t._methodName="FieldValue.arrayRemove",new Gr(t)}static increment(e){const t=uM(e);return t._methodName="FieldValue.increment",new Gr(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM={Firestore:gw,GeoPoint:Ul,Timestamp:De,Blob:Jo,Transaction:yw,WriteBatch:vw,DocumentReference:Gt,DocumentSnapshot:Xo,Query:_t,QueryDocumentSnapshot:Zo,QuerySnapshot:Mh,CollectionReference:ws,FieldPath:Jf,FieldValue:Gr,setLogLevel:mM,CACHE_SIZE_UNLIMITED:IP};function vM(n,e){n.INTERNAL.registerComponent(new Sn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},yM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wM(n){vM(n,(e,t)=>new gw(e,t,new pM)),n.registerVersion(hM,dM)}wM(xi);const IM={apiKey:"AIzaSyDWG12tWu3p3n5xFIPaH-UV7835WoUuhbA",authDomain:"luminescenceckmsc39th.firebaseapp.com",projectId:"luminescenceckmsc39th",storageBucket:"luminescenceckmsc39th.appspot.com",messagingSenderId:"815292617893",appId:"1:815292617893:web:b1baa918336aaf5187294c",measurementId:"G-B9551N51HL"},_w=xi.initializeApp(IM);_w.auth();_w.firestore();G_(ib).use(wE,mu).component("navbar",lR).component(mu.name,mu).mount("#app");

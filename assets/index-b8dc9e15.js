function zb(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Kd(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Wd(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=nt(r)?Kb(r):Wd(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(nt(n))return n;if(je(n))return n}}const qb=/;(?![^(]*\))/g,Hb=/:([^]+)/,Gb=/\/\*.*?\*\//gs;function Kb(n){const e={};return n.replace(Gb,"").split(qb).forEach(t=>{if(t){const r=t.split(Hb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qd(n){let e="";if(nt(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=Qd(n[t]);r&&(e+=r+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Wb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qb=Kd(Wb);function E1(n){return!!n||n===""}const Me=n=>nt(n)?n:n==null?"":re(n)||je(n)&&(n.toString===C1||!oe(n.toString))?JSON.stringify(n,T1,2):String(n),T1=(n,e)=>e&&e.__v_isRef?T1(n,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:S1(e)?{[`Set(${e.size})`]:[...e.values()]}:je(e)&&!re(e)&&!k1(e)?String(e):e,ke={},es=[],hn=()=>{},Yb=()=>!1,Jb=/^on[^a-z]/,Rc=n=>Jb.test(n),Yd=n=>n.startsWith("onUpdate:"),Lt=Object.assign,Jd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xb=Object.prototype.hasOwnProperty,me=(n,e)=>Xb.call(n,e),re=Array.isArray,ts=n=>Oc(n)==="[object Map]",S1=n=>Oc(n)==="[object Set]",oe=n=>typeof n=="function",nt=n=>typeof n=="string",Xd=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",A1=n=>je(n)&&oe(n.then)&&oe(n.catch),C1=Object.prototype.toString,Oc=n=>C1.call(n),Zb=n=>Oc(n).slice(8,-1),k1=n=>Oc(n)==="[object Object]",Zd=n=>nt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tl=Kd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},eI=/-(\w)/g,Nn=Dc(n=>n.replace(eI,(e,t)=>t?t.toUpperCase():"")),tI=/\B([A-Z])/g,Ns=Dc(n=>n.replace(tI,"-$1").toLowerCase()),Pc=Dc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bu=Dc(n=>n?`on${Pc(n)}`:""),jo=(n,e)=>!Object.is(n,e),Sl=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Hl=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Eh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Im;const nI=()=>Im||(Im=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let on;class rI{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function iI(n,e=on){e&&e.active&&e.effects.push(n)}function sI(){return on}const ef=n=>{const e=new Set(n);return e.w=0,e.n=0,e},R1=n=>(n.w&Er)>0,O1=n=>(n.n&Er)>0,oI=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Er},aI=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];R1(i)&&!O1(i)?i.delete(n):e[t++]=i,i.w&=~Er,i.n&=~Er}e.length=t}},Th=new WeakMap;let go=0,Er=1;const Sh=30;let an;const li=Symbol(""),Ah=Symbol("");class tf{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,iI(this,r)}run(){if(!this.active)return this.fn();let e=an,t=_r;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,_r=!0,Er=1<<++go,go<=Sh?oI(this):xm(this),this.fn()}finally{go<=Sh&&aI(this),Er=1<<--go,an=this.parent,_r=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(xm(this),this.onStop&&this.onStop(),this.active=!1)}}function xm(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let _r=!0;const D1=[];function Ms(){D1.push(_r),_r=!1}function Ls(){const n=D1.pop();_r=n===void 0?!0:n}function zt(n,e,t){if(_r&&an){let r=Th.get(n);r||Th.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=ef()),P1(i)}}function P1(n,e){let t=!1;go<=Sh?O1(n)||(n.n|=Er,t=!R1(n)):t=!n.has(an),t&&(n.add(an),an.deps.push(n))}function Wn(n,e,t,r,i,s){const o=Th.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&re(n)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":re(n)?Zd(t)&&a.push(o.get("length")):(a.push(o.get(li)),ts(n)&&a.push(o.get(Ah)));break;case"delete":re(n)||(a.push(o.get(li)),ts(n)&&a.push(o.get(Ah)));break;case"set":ts(n)&&a.push(o.get(li));break}if(a.length===1)a[0]&&Ch(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ch(ef(l))}}function Ch(n,e){const t=re(n)?n:[...n];for(const r of t)r.computed&&Em(r);for(const r of t)r.computed||Em(r)}function Em(n,e){(n!==an||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const lI=Kd("__proto__,__v_isRef,__isVue"),N1=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xd)),cI=nf(),uI=nf(!1,!0),hI=nf(!0),Tm=dI();function dI(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=we(this);for(let s=0,o=this.length;s<o;s++)zt(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ms();const r=we(this)[e].apply(this,t);return Ls(),r}}),n}function fI(n){const e=we(this);return zt(e,"has",n),e.hasOwnProperty(n)}function nf(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?kI:$1:e?F1:j1).get(r))return r;const o=re(r);if(!n){if(o&&me(Tm,i))return Reflect.get(Tm,i,s);if(i==="hasOwnProperty")return fI}const a=Reflect.get(r,i,s);return(Xd(i)?N1.has(i):lI(i))||(n||zt(r,"get",i),e)?a:Tt(a)?o&&Zd(i)?a:a.value:je(a)?n?U1(a):Ia(a):a}}const pI=M1(),mI=M1(!0);function M1(n=!1){return function(t,r,i,s){let o=t[r];if(us(o)&&Tt(o)&&!Tt(i))return!1;if(!n&&(!Gl(i)&&!us(i)&&(o=we(o),i=we(i)),!re(t)&&Tt(o)&&!Tt(i)))return o.value=i,!0;const a=re(t)&&Zd(r)?Number(r)<t.length:me(t,r),l=Reflect.set(t,r,i,s);return t===we(s)&&(a?jo(i,o)&&Wn(t,"set",r,i):Wn(t,"add",r,i)),l}}function gI(n,e){const t=me(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&Wn(n,"delete",e,void 0),r}function yI(n,e){const t=Reflect.has(n,e);return(!Xd(e)||!N1.has(e))&&zt(n,"has",e),t}function vI(n){return zt(n,"iterate",re(n)?"length":li),Reflect.ownKeys(n)}const L1={get:cI,set:pI,deleteProperty:gI,has:yI,ownKeys:vI},wI={get:hI,set(n,e){return!0},deleteProperty(n,e){return!0}},_I=Lt({},L1,{get:uI,set:mI}),rf=n=>n,Nc=n=>Reflect.getPrototypeOf(n);function Xa(n,e,t=!1,r=!1){n=n.__v_raw;const i=we(n),s=we(e);t||(e!==s&&zt(i,"get",e),zt(i,"get",s));const{has:o}=Nc(i),a=r?rf:t?af:Fo;if(o.call(i,e))return a(n.get(e));if(o.call(i,s))return a(n.get(s));n!==i&&n.get(e)}function Za(n,e=!1){const t=this.__v_raw,r=we(t),i=we(n);return e||(n!==i&&zt(r,"has",n),zt(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function el(n,e=!1){return n=n.__v_raw,!e&&zt(we(n),"iterate",li),Reflect.get(n,"size",n)}function Sm(n){n=we(n);const e=we(this);return Nc(e).has.call(e,n)||(e.add(n),Wn(e,"add",n,n)),this}function Am(n,e){e=we(e);const t=we(this),{has:r,get:i}=Nc(t);let s=r.call(t,n);s||(n=we(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?jo(e,o)&&Wn(t,"set",n,e):Wn(t,"add",n,e),this}function Cm(n){const e=we(this),{has:t,get:r}=Nc(e);let i=t.call(e,n);i||(n=we(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&Wn(e,"delete",n,void 0),s}function km(){const n=we(this),e=n.size!==0,t=n.clear();return e&&Wn(n,"clear",void 0,void 0),t}function tl(n,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),l=e?rf:n?af:Fo;return!n&&zt(a,"iterate",li),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function nl(n,e,t){return function(...r){const i=this.__v_raw,s=we(i),o=ts(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=i[n](...r),u=t?rf:e?af:Fo;return!e&&zt(s,"iterate",l?Ah:li),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function lr(n){return function(...e){return n==="delete"?!1:this}}function bI(){const n={get(s){return Xa(this,s)},get size(){return el(this)},has:Za,add:Sm,set:Am,delete:Cm,clear:km,forEach:tl(!1,!1)},e={get(s){return Xa(this,s,!1,!0)},get size(){return el(this)},has:Za,add:Sm,set:Am,delete:Cm,clear:km,forEach:tl(!1,!0)},t={get(s){return Xa(this,s,!0)},get size(){return el(this,!0)},has(s){return Za.call(this,s,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:tl(!0,!1)},r={get(s){return Xa(this,s,!0,!0)},get size(){return el(this,!0)},has(s){return Za.call(this,s,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:tl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nl(s,!1,!1),t[s]=nl(s,!0,!1),e[s]=nl(s,!1,!0),r[s]=nl(s,!0,!0)}),[n,t,e,r]}const[II,xI,EI,TI]=bI();function sf(n,e){const t=e?n?TI:EI:n?xI:II;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(me(t,i)&&i in r?t:r,i,s)}const SI={get:sf(!1,!1)},AI={get:sf(!1,!0)},CI={get:sf(!0,!1)},j1=new WeakMap,F1=new WeakMap,$1=new WeakMap,kI=new WeakMap;function RI(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function OI(n){return n.__v_skip||!Object.isExtensible(n)?0:RI(Zb(n))}function Ia(n){return us(n)?n:of(n,!1,L1,SI,j1)}function DI(n){return of(n,!1,_I,AI,F1)}function U1(n){return of(n,!0,wI,CI,$1)}function of(n,e,t,r,i){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=OI(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return i.set(n,a),a}function ns(n){return us(n)?ns(n.__v_raw):!!(n&&n.__v_isReactive)}function us(n){return!!(n&&n.__v_isReadonly)}function Gl(n){return!!(n&&n.__v_isShallow)}function V1(n){return ns(n)||us(n)}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function B1(n){return Hl(n,"__v_skip",!0),n}const Fo=n=>je(n)?Ia(n):n,af=n=>je(n)?U1(n):n;function z1(n){_r&&an&&(n=we(n),P1(n.dep||(n.dep=ef())))}function q1(n,e){n=we(n);const t=n.dep;t&&Ch(t)}function Tt(n){return!!(n&&n.__v_isRef===!0)}function ln(n){return H1(n,!1)}function PI(n){return H1(n,!0)}function H1(n,e){return Tt(n)?n:new NI(n,e)}class NI{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:we(e),this._value=t?e:Fo(e)}get value(){return z1(this),this._value}set value(e){const t=this.__v_isShallow||Gl(e)||us(e);e=t?e:we(e),jo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Fo(e),q1(this))}}function rs(n){return Tt(n)?n.value:n}const MI={get:(n,e,t)=>rs(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return Tt(i)&&!Tt(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function G1(n){return ns(n)?n:new Proxy(n,MI)}var K1;class LI{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[K1]=!1,this._dirty=!0,this.effect=new tf(e,()=>{this._dirty||(this._dirty=!0,q1(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return z1(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}K1="__v_isReadonly";function jI(n,e,t=!1){let r,i;const s=oe(n);return s?(r=n,i=hn):(r=n.get,i=n.set),new LI(r,i,s||!i,t)}function br(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){Mc(s,e,t)}return i}function dn(n,e,t,r){if(oe(n)){const s=br(n,e,t,r);return s&&A1(s)&&s.catch(o=>{Mc(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(dn(n[s],e,t,r));return i}function Mc(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){br(l,null,10,[n,o,a]);return}}FI(n,t,i,r)}function FI(n,e,t,r=!0){console.error(n)}let $o=!1,kh=!1;const Et=[];let In=0;const is=[];let Vn=null,Qr=0;const W1=Promise.resolve();let lf=null;function Q1(n){const e=lf||W1;return n?e.then(this?n.bind(this):n):e}function $I(n){let e=In+1,t=Et.length;for(;e<t;){const r=e+t>>>1;Uo(Et[r])<n?e=r+1:t=r}return e}function cf(n){(!Et.length||!Et.includes(n,$o&&n.allowRecurse?In+1:In))&&(n.id==null?Et.push(n):Et.splice($I(n.id),0,n),Y1())}function Y1(){!$o&&!kh&&(kh=!0,lf=W1.then(X1))}function UI(n){const e=Et.indexOf(n);e>In&&Et.splice(e,1)}function VI(n){re(n)?is.push(...n):(!Vn||!Vn.includes(n,n.allowRecurse?Qr+1:Qr))&&is.push(n),Y1()}function Rm(n,e=$o?In+1:0){for(;e<Et.length;e++){const t=Et[e];t&&t.pre&&(Et.splice(e,1),e--,t())}}function J1(n){if(is.length){const e=[...new Set(is)];if(is.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vn.sort((t,r)=>Uo(t)-Uo(r)),Qr=0;Qr<Vn.length;Qr++)Vn[Qr]();Vn=null,Qr=0}}const Uo=n=>n.id==null?1/0:n.id,BI=(n,e)=>{const t=Uo(n)-Uo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function X1(n){kh=!1,$o=!0,Et.sort(BI);const e=hn;try{for(In=0;In<Et.length;In++){const t=Et[In];t&&t.active!==!1&&br(t,null,14)}}finally{In=0,Et.length=0,J1(),$o=!1,lf=null,(Et.length||is.length)&&X1()}}function zI(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ke;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||ke;d&&(i=t.map(f=>nt(f)?f.trim():f)),h&&(i=t.map(Eh))}let a,l=r[a=Bu(e)]||r[a=Bu(Nn(e))];!l&&s&&(l=r[a=Bu(Ns(e))]),l&&dn(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,dn(c,n,6,i)}}function Z1(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!oe(n)){const l=c=>{const u=Z1(c,e,!0);u&&(a=!0,Lt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(je(n)&&r.set(n,null),null):(re(s)?s.forEach(l=>o[l]=null):Lt(o,s),je(n)&&r.set(n,o),o)}function Lc(n,e){return!n||!Rc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(n,e[0].toLowerCase()+e.slice(1))||me(n,Ns(e))||me(n,e))}let en=null,jc=null;function Kl(n){const e=en;return en=n,jc=n&&n.type.__scopeId||null,e}function uf(n){jc=n}function hf(){jc=null}function Dt(n,e=en,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&$m(-1);const s=Kl(e);let o;try{o=n(...i)}finally{Kl(s),r._d&&$m(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zu(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=n;let y,w;const I=Kl(n);try{if(t.shapeFlag&4){const P=i||r;y=bn(u.call(P,P,h,s,f,d,p)),w=l}else{const P=e;y=bn(P.length>1?P(s,{attrs:l,slots:a,emit:c}):P(s,null)),w=e.props?l:qI(l)}}catch(P){Eo.length=0,Mc(P,n,1),y=ve(mi)}let _=y;if(w&&g!==!1){const P=Object.keys(w),{shapeFlag:B}=_;P.length&&B&7&&(o&&P.some(Yd)&&(w=HI(w,o)),_=hs(_,w))}return t.dirs&&(_=hs(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),y=_,Kl(I),y}const qI=n=>{let e;for(const t in n)(t==="class"||t==="style"||Rc(t))&&((e||(e={}))[t]=n[t]);return e},HI=(n,e)=>{const t={};for(const r in n)(!Yd(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function GI(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Om(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Lc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Om(r,o,c):!0:!!o;return!1}function Om(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Lc(t,s))return!0}return!1}function KI({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const WI=n=>n.__isSuspense;function QI(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):VI(n)}function Al(n,e){if(Xe){let t=Xe.provides;const r=Xe.parent&&Xe.parent.provides;r===t&&(t=Xe.provides=Object.create(r)),t[n]=e}}function Hn(n,e,t=!1){const r=Xe||en;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&oe(e)?e.call(r.proxy):e}}const rl={};function Cl(n,e,t){return e0(n,e,t)}function e0(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=ke){const a=sI()===(Xe==null?void 0:Xe.scope)?Xe:null;let l,c=!1,u=!1;if(Tt(n)?(l=()=>n.value,c=Gl(n)):ns(n)?(l=()=>n,r=!0):re(n)?(u=!0,c=n.some(_=>ns(_)||Gl(_)),l=()=>n.map(_=>{if(Tt(_))return _.value;if(ns(_))return ni(_);if(oe(_))return br(_,a,2)})):oe(n)?e?l=()=>br(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),dn(n,a,3,[d])}:l=hn,e&&r){const _=l;l=()=>ni(_())}let h,d=_=>{h=w.onStop=()=>{br(_,a,4)}},f;if(zo)if(d=hn,e?t&&dn(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const _=qx();f=_.__watcherHandles||(_.__watcherHandles=[])}else return hn;let p=u?new Array(n.length).fill(rl):rl;const g=()=>{if(w.active)if(e){const _=w.run();(r||c||(u?_.some((P,B)=>jo(P,p[B])):jo(_,p)))&&(h&&h(),dn(e,a,3,[_,p===rl?void 0:u&&p[0]===rl?[]:p,d]),p=_)}else w.run()};g.allowRecurse=!!e;let y;i==="sync"?y=g:i==="post"?y=()=>jt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),y=()=>cf(g));const w=new tf(l,y);e?t?g():p=w.run():i==="post"?jt(w.run.bind(w),a&&a.suspense):w.run();const I=()=>{w.stop(),a&&a.scope&&Jd(a.scope.effects,w)};return f&&f.push(I),I}function YI(n,e,t){const r=this.proxy,i=nt(n)?n.includes(".")?t0(r,n):()=>r[n]:n.bind(r,r);let s;oe(e)?s=e:(s=e.handler,t=e);const o=Xe;ds(this);const a=e0(i,s.bind(r),t);return o?ds(o):ci(),a}function t0(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function ni(n,e){if(!je(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Tt(n))ni(n.value,e);else if(re(n))for(let t=0;t<n.length;t++)ni(n[t],e);else if(S1(n)||ts(n))n.forEach(t=>{ni(t,e)});else if(k1(n))for(const t in n)ni(n[t],e);return n}function df(n){return oe(n)?{setup:n,name:n.name}:n}const kl=n=>!!n.type.__asyncLoader,n0=n=>n.type.__isKeepAlive;function JI(n,e){r0(n,"a",e)}function XI(n,e){r0(n,"da",e)}function r0(n,e,t=Xe){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(Fc(e,r,t),t){let i=t.parent;for(;i&&i.parent;)n0(i.parent.vnode)&&ZI(r,e,t,i),i=i.parent}}function ZI(n,e,t,r){const i=Fc(e,n,r,!0);i0(()=>{Jd(r[e],i)},t)}function Fc(n,e,t=Xe,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ms(),ds(t);const a=dn(e,t,n,o);return ci(),Ls(),a});return r?i.unshift(s):i.push(s),s}}const tr=n=>(e,t=Xe)=>(!zo||n==="sp")&&Fc(n,(...r)=>e(...r),t),ex=tr("bm"),tx=tr("m"),nx=tr("bu"),rx=tr("u"),ix=tr("bum"),i0=tr("um"),sx=tr("sp"),ox=tr("rtg"),ax=tr("rtc");function lx(n,e=Xe){Fc("ec",n,e)}function Vo(n,e){const t=en;if(t===null)return n;const r=Vc(t)||t.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ke]=e[s];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&ni(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function zr(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Ms(),dn(l,t,8,[n.el,a,n,e]),Ls())}}const s0="components";function Qn(n,e){return ux(s0,n,!0,e)||n}const cx=Symbol();function ux(n,e,t=!0,r=!1){const i=en||Xe;if(i){const s=i.type;if(n===s0){const a=Vx(s,!1);if(a&&(a===e||a===Nn(e)||a===Pc(Nn(e))))return s}const o=Dm(i[n]||s[n],e)||Dm(i.appContext[n],e);return!o&&r?s:o}}function Dm(n,e){return n&&(n[e]||n[Nn(e)]||n[Pc(Nn(e))])}function js(n,e,t,r){let i;const s=t&&t[r];if(re(n)||nt(n)){i=new Array(n.length);for(let o=0,a=n.length;o<a;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(je(n))if(n[Symbol.iterator])i=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(n[c],c,a,s&&s[a])}}else i=[];return t&&(t[r]=i),i}const Rh=n=>n?y0(n)?Vc(n)||n.proxy:Rh(n.parent):null,xo=Lt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Rh(n.parent),$root:n=>Rh(n.root),$emit:n=>n.emit,$options:n=>ff(n),$forceUpdate:n=>n.f||(n.f=()=>cf(n.update)),$nextTick:n=>n.n||(n.n=Q1.bind(n.proxy)),$watch:n=>YI.bind(n)}),qu=(n,e)=>n!==ke&&!n.__isScriptSetup&&me(n,e),hx={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(qu(r,e))return o[e]=1,r[e];if(i!==ke&&me(i,e))return o[e]=2,i[e];if((c=n.propsOptions[0])&&me(c,e))return o[e]=3,s[e];if(t!==ke&&me(t,e))return o[e]=4,t[e];Oh&&(o[e]=0)}}const u=xo[e];let h,d;if(u)return e==="$attrs"&&zt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ke&&me(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,me(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return qu(i,e)?(i[e]=t,!0):r!==ke&&me(r,e)?(r[e]=t,!0):me(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!t[o]||n!==ke&&me(n,o)||qu(e,o)||(a=s[0])&&me(a,o)||me(r,o)||me(xo,o)||me(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:me(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Oh=!0;function dx(n){const e=ff(n),t=n.proxy,r=n.ctx;Oh=!1,e.beforeCreate&&Pm(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:g,deactivated:y,beforeDestroy:w,beforeUnmount:I,destroyed:_,unmounted:P,render:B,renderTracked:U,renderTriggered:Q,errorCaptured:ee,serverPrefetch:$e,expose:ft,inheritAttrs:Ct,components:Jt,directives:$n,filters:Xt}=e;if(c&&fx(c,r,null,n.appContext.config.unwrapInjectedRef),o)for(const le in o){const he=o[le];oe(he)&&(r[le]=he.bind(t))}if(i){const le=i.call(t,t);je(le)&&(n.data=Ia(le))}if(Oh=!0,s)for(const le in s){const he=s[le],Ze=oe(he)?he.bind(t,t):oe(he.get)?he.get.bind(t,t):hn,yn=!oe(he)&&oe(he.set)?he.set.bind(t):hn,et=Zt({get:Ze,set:yn});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>et.value,set:Qe=>et.value=Qe})}if(a)for(const le in a)o0(a[le],r,t,le);if(l){const le=oe(l)?l.call(t):l;Reflect.ownKeys(le).forEach(he=>{Al(he,le[he])})}u&&Pm(u,n,"c");function De(le,he){re(he)?he.forEach(Ze=>le(Ze.bind(t))):he&&le(he.bind(t))}if(De(ex,h),De(tx,d),De(nx,f),De(rx,p),De(JI,g),De(XI,y),De(lx,ee),De(ax,U),De(ox,Q),De(ix,I),De(i0,P),De(sx,$e),re(ft))if(ft.length){const le=n.exposed||(n.exposed={});ft.forEach(he=>{Object.defineProperty(le,he,{get:()=>t[he],set:Ze=>t[he]=Ze})})}else n.exposed||(n.exposed={});B&&n.render===hn&&(n.render=B),Ct!=null&&(n.inheritAttrs=Ct),Jt&&(n.components=Jt),$n&&(n.directives=$n)}function fx(n,e,t=hn,r=!1){re(n)&&(n=Dh(n));for(const i in n){const s=n[i];let o;je(s)?"default"in s?o=Hn(s.from||i,s.default,!0):o=Hn(s.from||i):o=Hn(s),Tt(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Pm(n,e,t){dn(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function o0(n,e,t,r){const i=r.includes(".")?t0(t,r):()=>t[r];if(nt(n)){const s=e[n];oe(s)&&Cl(i,s)}else if(oe(n))Cl(i,n.bind(t));else if(je(n))if(re(n))n.forEach(s=>o0(s,e,t,r));else{const s=oe(n.handler)?n.handler.bind(t):e[n.handler];oe(s)&&Cl(i,s,n)}}function ff(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>Wl(l,c,o,!0)),Wl(l,e,o)),je(e)&&s.set(e,l),l}function Wl(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Wl(n,s,t,!0),i&&i.forEach(o=>Wl(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=px[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const px={data:Nm,props:Gr,emits:Gr,methods:Gr,computed:Gr,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Gr,directives:Gr,watch:gx,provide:Nm,inject:mx};function Nm(n,e){return e?n?function(){return Lt(oe(n)?n.call(this,this):n,oe(e)?e.call(this,this):e)}:e:n}function mx(n,e){return Gr(Dh(n),Dh(e))}function Dh(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?Lt(Lt(Object.create(null),n),e):e}function gx(n,e){if(!n)return e;if(!e)return n;const t=Lt(Object.create(null),n);for(const r in e)t[r]=kt(n[r],e[r]);return t}function yx(n,e,t,r=!1){const i={},s={};Hl(s,Uc,1),n.propsDefaults=Object.create(null),a0(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:DI(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function vx(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=we(i),[l]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Lc(n.emitsOptions,d))continue;const f=e[d];if(l)if(me(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const p=Nn(d);i[p]=Ph(l,a,p,f,n,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{a0(n,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Ns(h))===h||!me(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Ph(l,a,h,void 0,n,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!me(e,h))&&(delete s[h],c=!0)}c&&Wn(n,"set","$attrs")}function a0(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Tl(l))continue;const c=e[l];let u;i&&me(i,u=Nn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Lc(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=we(t),c=a||ke;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Ph(i,l,h,c[h],n,!me(c,h))}}return o}function Ph(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&oe(l)){const{propsDefaults:c}=i;t in c?r=c[t]:(ds(i),r=c[t]=l.call(null,e),ci())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Ns(t))&&(r=!0))}return r}function l0(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let l=!1;if(!oe(n)){const u=h=>{l=!0;const[d,f]=l0(h,e,!0);Lt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return je(n)&&r.set(n,es),es;if(re(s))for(let u=0;u<s.length;u++){const h=Nn(s[u]);Mm(h)&&(o[h]=ke)}else if(s)for(const u in s){const h=Nn(u);if(Mm(h)){const d=s[u],f=o[h]=re(d)||oe(d)?{type:d}:Object.assign({},d);if(f){const p=Fm(Boolean,f.type),g=Fm(String,f.type);f[0]=p>-1,f[1]=g<0||p<g,(p>-1||me(f,"default"))&&a.push(h)}}}const c=[o,a];return je(n)&&r.set(n,c),c}function Mm(n){return n[0]!=="$"}function Lm(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function jm(n,e){return Lm(n)===Lm(e)}function Fm(n,e){return re(e)?e.findIndex(t=>jm(t,n)):oe(e)&&jm(e,n)?0:-1}const c0=n=>n[0]==="_"||n==="$stable",pf=n=>re(n)?n.map(bn):[bn(n)],wx=(n,e,t)=>{if(e._n)return e;const r=Dt((...i)=>pf(e(...i)),t);return r._c=!1,r},u0=(n,e,t)=>{const r=n._ctx;for(const i in n){if(c0(i))continue;const s=n[i];if(oe(s))e[i]=wx(i,s,r);else if(s!=null){const o=pf(s);e[i]=()=>o}}},h0=(n,e)=>{const t=pf(e);n.slots.default=()=>t},_x=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=we(e),Hl(e,"_",t)):u0(e,n.slots={})}else n.slots={},e&&h0(n,e);Hl(n.slots,Uc,1)},bx=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=ke;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Lt(i,e),!t&&a===1&&delete i._):(s=!e.$stable,u0(e,i)),o=e}else e&&(h0(n,e),o={default:1});if(s)for(const a in i)!c0(a)&&!(a in o)&&delete i[a]};function d0(){return{app:null,config:{isNativeTag:Yb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ix=0;function xx(n,e){return function(r,i=null){oe(r)||(r=Object.assign({},r)),i!=null&&!je(i)&&(i=null);const s=d0(),o=new Set;let a=!1;const l=s.app={_uid:Ix++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Hx,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&oe(c.install)?(o.add(c),c.install(l,...u)):oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=ve(r,i);return d.appContext=s,u&&e?e(d,c):n(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Vc(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Nh(n,e,t,r,i=!1){if(re(n)){n.forEach((d,f)=>Nh(d,e&&(re(e)?e[f]:e),t,r,i));return}if(kl(r)&&!i)return;const s=r.shapeFlag&4?Vc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,me(h,c)&&(h[c]=null)):Tt(c)&&(c.value=null)),oe(l))br(l,a,12,[o,u]);else{const d=nt(l),f=Tt(l);if(d||f){const p=()=>{if(n.f){const g=d?me(h,l)?h[l]:u[l]:l.value;i?re(g)&&Jd(g,s):re(g)?g.includes(s)||g.push(s):d?(u[l]=[s],me(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,me(h,l)&&(h[l]=o)):f&&(l.value=o,n.k&&(u[n.k]=o))};o?(p.id=-1,jt(p,t)):p()}}}const jt=QI;function Ex(n){return Tx(n)}function Tx(n,e){const t=nI();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=hn,insertStaticContent:p}=n,g=(m,v,T,S=null,k=null,M=null,V=!1,N=null,j=!!v.dynamicChildren)=>{if(m===v)return;m&&!to(m,v)&&(S=$(m),Qe(m,k,M,!0),m=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:O,ref:X,shapeFlag:H}=v;switch(O){case $c:y(m,v,T,S);break;case mi:w(m,v,T,S);break;case Rl:m==null&&I(v,T,S,V);break;case It:Jt(m,v,T,S,k,M,V,N,j);break;default:H&1?B(m,v,T,S,k,M,V,N,j):H&6?$n(m,v,T,S,k,M,V,N,j):(H&64||H&128)&&O.process(m,v,T,S,k,M,V,N,j,pe)}X!=null&&k&&Nh(X,m&&m.ref,M,v||m,!v)},y=(m,v,T,S)=>{if(m==null)r(v.el=a(v.children),T,S);else{const k=v.el=m.el;v.children!==m.children&&c(k,v.children)}},w=(m,v,T,S)=>{m==null?r(v.el=l(v.children||""),T,S):v.el=m.el},I=(m,v,T,S)=>{[m.el,m.anchor]=p(m.children,v,T,S,m.el,m.anchor)},_=({el:m,anchor:v},T,S)=>{let k;for(;m&&m!==v;)k=d(m),r(m,T,S),m=k;r(v,T,S)},P=({el:m,anchor:v})=>{let T;for(;m&&m!==v;)T=d(m),i(m),m=T;i(v)},B=(m,v,T,S,k,M,V,N,j)=>{V=V||v.type==="svg",m==null?U(v,T,S,k,M,V,N,j):$e(m,v,k,M,V,N,j)},U=(m,v,T,S,k,M,V,N)=>{let j,O;const{type:X,props:H,shapeFlag:Z,transition:ne,dirs:ce}=m;if(j=m.el=o(m.type,M,H&&H.is,H),Z&8?u(j,m.children):Z&16&&ee(m.children,j,null,S,k,M&&X!=="foreignObject",V,N),ce&&zr(m,null,S,"created"),Q(j,m,m.scopeId,V,S),H){for(const xe in H)xe!=="value"&&!Tl(xe)&&s(j,xe,null,H[xe],M,m.children,S,k,q);"value"in H&&s(j,"value",null,H.value),(O=H.onVnodeBeforeMount)&&wn(O,S,m)}ce&&zr(m,null,S,"beforeMount");const Ae=(!k||k&&!k.pendingBranch)&&ne&&!ne.persisted;Ae&&ne.beforeEnter(j),r(j,v,T),((O=H&&H.onVnodeMounted)||Ae||ce)&&jt(()=>{O&&wn(O,S,m),Ae&&ne.enter(j),ce&&zr(m,null,S,"mounted")},k)},Q=(m,v,T,S,k)=>{if(T&&f(m,T),S)for(let M=0;M<S.length;M++)f(m,S[M]);if(k){let M=k.subTree;if(v===M){const V=k.vnode;Q(m,V,V.scopeId,V.slotScopeIds,k.parent)}}},ee=(m,v,T,S,k,M,V,N,j=0)=>{for(let O=j;O<m.length;O++){const X=m[O]=N?pr(m[O]):bn(m[O]);g(null,X,v,T,S,k,M,V,N)}},$e=(m,v,T,S,k,M,V)=>{const N=v.el=m.el;let{patchFlag:j,dynamicChildren:O,dirs:X}=v;j|=m.patchFlag&16;const H=m.props||ke,Z=v.props||ke;let ne;T&&qr(T,!1),(ne=Z.onVnodeBeforeUpdate)&&wn(ne,T,v,m),X&&zr(v,m,T,"beforeUpdate"),T&&qr(T,!0);const ce=k&&v.type!=="foreignObject";if(O?ft(m.dynamicChildren,O,N,T,S,ce,M):V||he(m,v,N,null,T,S,ce,M,!1),j>0){if(j&16)Ct(N,v,H,Z,T,S,k);else if(j&2&&H.class!==Z.class&&s(N,"class",null,Z.class,k),j&4&&s(N,"style",H.style,Z.style,k),j&8){const Ae=v.dynamicProps;for(let xe=0;xe<Ae.length;xe++){const Ye=Ae[xe],sn=H[Ye],Bi=Z[Ye];(Bi!==sn||Ye==="value")&&s(N,Ye,sn,Bi,k,m.children,T,S,q)}}j&1&&m.children!==v.children&&u(N,v.children)}else!V&&O==null&&Ct(N,v,H,Z,T,S,k);((ne=Z.onVnodeUpdated)||X)&&jt(()=>{ne&&wn(ne,T,v,m),X&&zr(v,m,T,"updated")},S)},ft=(m,v,T,S,k,M,V)=>{for(let N=0;N<v.length;N++){const j=m[N],O=v[N],X=j.el&&(j.type===It||!to(j,O)||j.shapeFlag&70)?h(j.el):T;g(j,O,X,null,S,k,M,V,!0)}},Ct=(m,v,T,S,k,M,V)=>{if(T!==S){if(T!==ke)for(const N in T)!Tl(N)&&!(N in S)&&s(m,N,T[N],null,V,v.children,k,M,q);for(const N in S){if(Tl(N))continue;const j=S[N],O=T[N];j!==O&&N!=="value"&&s(m,N,O,j,V,v.children,k,M,q)}"value"in S&&s(m,"value",T.value,S.value)}},Jt=(m,v,T,S,k,M,V,N,j)=>{const O=v.el=m?m.el:a(""),X=v.anchor=m?m.anchor:a("");let{patchFlag:H,dynamicChildren:Z,slotScopeIds:ne}=v;ne&&(N=N?N.concat(ne):ne),m==null?(r(O,T,S),r(X,T,S),ee(v.children,T,X,k,M,V,N,j)):H>0&&H&64&&Z&&m.dynamicChildren?(ft(m.dynamicChildren,Z,T,k,M,V,N),(v.key!=null||k&&v===k.subTree)&&f0(m,v,!0)):he(m,v,T,X,k,M,V,N,j)},$n=(m,v,T,S,k,M,V,N,j)=>{v.slotScopeIds=N,m==null?v.shapeFlag&512?k.ctx.activate(v,T,S,V,j):Xt(v,T,S,k,M,V,j):ar(m,v,j)},Xt=(m,v,T,S,k,M,V)=>{const N=m.component=Lx(m,S,k);if(n0(m)&&(N.ctx.renderer=pe),jx(N),N.asyncDep){if(k&&k.registerDep(N,De),!m.el){const j=N.subTree=ve(mi);w(null,j,v,T)}return}De(N,m,v,T,k,M,V)},ar=(m,v,T)=>{const S=v.component=m.component;if(GI(m,v,T))if(S.asyncDep&&!S.asyncResolved){le(S,v,T);return}else S.next=v,UI(S.update),S.update();else v.el=m.el,S.vnode=v},De=(m,v,T,S,k,M,V)=>{const N=()=>{if(m.isMounted){let{next:X,bu:H,u:Z,parent:ne,vnode:ce}=m,Ae=X,xe;qr(m,!1),X?(X.el=ce.el,le(m,X,V)):X=ce,H&&Sl(H),(xe=X.props&&X.props.onVnodeBeforeUpdate)&&wn(xe,ne,X,ce),qr(m,!0);const Ye=zu(m),sn=m.subTree;m.subTree=Ye,g(sn,Ye,h(sn.el),$(sn),m,k,M),X.el=Ye.el,Ae===null&&KI(m,Ye.el),Z&&jt(Z,k),(xe=X.props&&X.props.onVnodeUpdated)&&jt(()=>wn(xe,ne,X,ce),k)}else{let X;const{el:H,props:Z}=v,{bm:ne,m:ce,parent:Ae}=m,xe=kl(v);if(qr(m,!1),ne&&Sl(ne),!xe&&(X=Z&&Z.onVnodeBeforeMount)&&wn(X,Ae,v),qr(m,!0),H&&ae){const Ye=()=>{m.subTree=zu(m),ae(H,m.subTree,m,k,null)};xe?v.type.__asyncLoader().then(()=>!m.isUnmounted&&Ye()):Ye()}else{const Ye=m.subTree=zu(m);g(null,Ye,T,S,m,k,M),v.el=Ye.el}if(ce&&jt(ce,k),!xe&&(X=Z&&Z.onVnodeMounted)){const Ye=v;jt(()=>wn(X,Ae,Ye),k)}(v.shapeFlag&256||Ae&&kl(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&m.a&&jt(m.a,k),m.isMounted=!0,v=T=S=null}},j=m.effect=new tf(N,()=>cf(O),m.scope),O=m.update=()=>j.run();O.id=m.uid,qr(m,!0),O()},le=(m,v,T)=>{v.component=m;const S=m.vnode.props;m.vnode=v,m.next=null,vx(m,v.props,S,T),bx(m,v.children,T),Ms(),Rm(),Ls()},he=(m,v,T,S,k,M,V,N,j=!1)=>{const O=m&&m.children,X=m?m.shapeFlag:0,H=v.children,{patchFlag:Z,shapeFlag:ne}=v;if(Z>0){if(Z&128){yn(O,H,T,S,k,M,V,N,j);return}else if(Z&256){Ze(O,H,T,S,k,M,V,N,j);return}}ne&8?(X&16&&q(O,k,M),H!==O&&u(T,H)):X&16?ne&16?yn(O,H,T,S,k,M,V,N,j):q(O,k,M,!0):(X&8&&u(T,""),ne&16&&ee(H,T,S,k,M,V,N,j))},Ze=(m,v,T,S,k,M,V,N,j)=>{m=m||es,v=v||es;const O=m.length,X=v.length,H=Math.min(O,X);let Z;for(Z=0;Z<H;Z++){const ne=v[Z]=j?pr(v[Z]):bn(v[Z]);g(m[Z],ne,T,null,k,M,V,N,j)}O>X?q(m,k,M,!0,!1,H):ee(v,T,S,k,M,V,N,j,H)},yn=(m,v,T,S,k,M,V,N,j)=>{let O=0;const X=v.length;let H=m.length-1,Z=X-1;for(;O<=H&&O<=Z;){const ne=m[O],ce=v[O]=j?pr(v[O]):bn(v[O]);if(to(ne,ce))g(ne,ce,T,null,k,M,V,N,j);else break;O++}for(;O<=H&&O<=Z;){const ne=m[H],ce=v[Z]=j?pr(v[Z]):bn(v[Z]);if(to(ne,ce))g(ne,ce,T,null,k,M,V,N,j);else break;H--,Z--}if(O>H){if(O<=Z){const ne=Z+1,ce=ne<X?v[ne].el:S;for(;O<=Z;)g(null,v[O]=j?pr(v[O]):bn(v[O]),T,ce,k,M,V,N,j),O++}}else if(O>Z)for(;O<=H;)Qe(m[O],k,M,!0),O++;else{const ne=O,ce=O,Ae=new Map;for(O=ce;O<=Z;O++){const Gt=v[O]=j?pr(v[O]):bn(v[O]);Gt.key!=null&&Ae.set(Gt.key,O)}let xe,Ye=0;const sn=Z-ce+1;let Bi=!1,wm=0;const eo=new Array(sn);for(O=0;O<sn;O++)eo[O]=0;for(O=ne;O<=H;O++){const Gt=m[O];if(Ye>=sn){Qe(Gt,k,M,!0);continue}let vn;if(Gt.key!=null)vn=Ae.get(Gt.key);else for(xe=ce;xe<=Z;xe++)if(eo[xe-ce]===0&&to(Gt,v[xe])){vn=xe;break}vn===void 0?Qe(Gt,k,M,!0):(eo[vn-ce]=O+1,vn>=wm?wm=vn:Bi=!0,g(Gt,v[vn],T,null,k,M,V,N,j),Ye++)}const _m=Bi?Sx(eo):es;for(xe=_m.length-1,O=sn-1;O>=0;O--){const Gt=ce+O,vn=v[Gt],bm=Gt+1<X?v[Gt+1].el:S;eo[O]===0?g(null,vn,T,bm,k,M,V,N,j):Bi&&(xe<0||O!==_m[xe]?et(vn,T,bm,2):xe--)}}},et=(m,v,T,S,k=null)=>{const{el:M,type:V,transition:N,children:j,shapeFlag:O}=m;if(O&6){et(m.component.subTree,v,T,S);return}if(O&128){m.suspense.move(v,T,S);return}if(O&64){V.move(m,v,T,pe);return}if(V===It){r(M,v,T);for(let H=0;H<j.length;H++)et(j[H],v,T,S);r(m.anchor,v,T);return}if(V===Rl){_(m,v,T);return}if(S!==2&&O&1&&N)if(S===0)N.beforeEnter(M),r(M,v,T),jt(()=>N.enter(M),k);else{const{leave:H,delayLeave:Z,afterLeave:ne}=N,ce=()=>r(M,v,T),Ae=()=>{H(M,()=>{ce(),ne&&ne()})};Z?Z(M,ce,Ae):Ae()}else r(M,v,T)},Qe=(m,v,T,S=!1,k=!1)=>{const{type:M,props:V,ref:N,children:j,dynamicChildren:O,shapeFlag:X,patchFlag:H,dirs:Z}=m;if(N!=null&&Nh(N,null,T,m,!0),X&256){v.ctx.deactivate(m);return}const ne=X&1&&Z,ce=!kl(m);let Ae;if(ce&&(Ae=V&&V.onVnodeBeforeUnmount)&&wn(Ae,v,m),X&6)A(m.component,T,S);else{if(X&128){m.suspense.unmount(T,S);return}ne&&zr(m,null,v,"beforeUnmount"),X&64?m.type.remove(m,v,T,k,pe,S):O&&(M!==It||H>0&&H&64)?q(O,v,T,!1,!0):(M===It&&H&384||!k&&X&16)&&q(j,v,T),S&&rn(m)}(ce&&(Ae=V&&V.onVnodeUnmounted)||ne)&&jt(()=>{Ae&&wn(Ae,v,m),ne&&zr(m,null,v,"unmounted")},T)},rn=m=>{const{type:v,el:T,anchor:S,transition:k}=m;if(v===It){Ht(T,S);return}if(v===Rl){P(m);return}const M=()=>{i(T),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:V,delayLeave:N}=k,j=()=>V(T,M);N?N(m.el,M,j):j()}else M()},Ht=(m,v)=>{let T;for(;m!==v;)T=d(m),i(m),m=T;i(v)},A=(m,v,T)=>{const{bum:S,scope:k,update:M,subTree:V,um:N}=m;S&&Sl(S),k.stop(),M&&(M.active=!1,Qe(V,m,v,T)),N&&jt(N,v),jt(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},q=(m,v,T,S=!1,k=!1,M=0)=>{for(let V=M;V<m.length;V++)Qe(m[V],v,T,S,k)},$=m=>m.shapeFlag&6?$(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),Y=(m,v,T)=>{m==null?v._vnode&&Qe(v._vnode,null,null,!0):g(v._vnode||null,m,v,null,null,null,T),Rm(),J1(),v._vnode=m},pe={p:g,um:Qe,m:et,r:rn,mt:Xt,mc:ee,pc:he,pbc:ft,n:$,o:n};let Ue,ae;return e&&([Ue,ae]=e(pe)),{render:Y,hydrate:Ue,createApp:xx(Y,Ue)}}function qr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function f0(n,e,t=!1){const r=n.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=pr(i[s]),a.el=o.el),t||f0(o,a)),a.type===$c&&(a.el=o.el)}}function Sx(n){const e=n.slice(),t=[0];let r,i,s,o,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Ax=n=>n.__isTeleport,It=Symbol(void 0),$c=Symbol(void 0),mi=Symbol(void 0),Rl=Symbol(void 0),Eo=[];let cn=null;function Ee(n=!1){Eo.push(cn=n?null:[])}function Cx(){Eo.pop(),cn=Eo[Eo.length-1]||null}let Bo=1;function $m(n){Bo+=n}function p0(n){return n.dynamicChildren=Bo>0?cn||es:null,Cx(),Bo>0&&cn&&cn.push(n),n}function Se(n,e,t,r,i,s){return p0(E(n,e,t,r,i,s,!0))}function kx(n,e,t,r,i){return p0(ve(n,e,t,r,i,!0))}function Mh(n){return n?n.__v_isVNode===!0:!1}function to(n,e){return n.type===e.type&&n.key===e.key}const Uc="__vInternal",m0=({key:n})=>n??null,Ol=({ref:n,ref_key:e,ref_for:t})=>n!=null?nt(n)||Tt(n)||oe(n)?{i:en,r:n,k:e,f:!!t}:n:null;function E(n,e=null,t=null,r=0,i=null,s=n===It?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&m0(e),ref:e&&Ol(e),scopeId:jc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:en};return a?(mf(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=nt(t)?8:16),Bo>0&&!o&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const ve=Rx;function Rx(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===cx)&&(n=mi),Mh(n)){const a=hs(n,e,!0);return t&&mf(a,t),Bo>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(n)]=a:cn.push(a)),a.patchFlag|=-2,a}if(Bx(n)&&(n=n.__vccOpts),e){e=Ox(e);let{class:a,style:l}=e;a&&!nt(a)&&(e.class=Qd(a)),je(l)&&(V1(l)&&!re(l)&&(l=Lt({},l)),e.style=Wd(l))}const o=nt(n)?1:WI(n)?128:Ax(n)?64:je(n)?4:oe(n)?2:0;return E(n,e,t,r,i,o,s,!0)}function Ox(n){return n?V1(n)||Uc in n?Lt({},n):n:null}function hs(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,a=e?Px(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&m0(a),ref:e&&e.ref?t&&i?re(i)?i.concat(Ol(e)):[i,Ol(e)]:Ol(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==It?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hs(n.ssContent),ssFallback:n.ssFallback&&hs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function xt(n=" ",e=0){return ve($c,null,n,e)}function Dx(n,e){const t=ve(Rl,null,n);return t.staticCount=e,t}function g0(n="",e=!1){return e?(Ee(),kx(mi,null,n)):ve(mi,null,n)}function bn(n){return n==null||typeof n=="boolean"?ve(mi):re(n)?ve(It,null,n.slice()):typeof n=="object"?pr(n):ve($c,null,String(n))}function pr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hs(n)}function mf(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),mf(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Uc in e)?e._ctx=en:i===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:en},t=32):(e=String(e),r&64?(t=16,e=[xt(e)]):t=8);n.children=e,n.shapeFlag|=t}function Px(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Qd([e.class,r.class]));else if(i==="style")e.style=Wd([e.style,r.style]);else if(Rc(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function wn(n,e,t,r=null){dn(n,e,7,[t,r])}const Nx=d0();let Mx=0;function Lx(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||Nx,s={uid:Mx++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new rI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:l0(r,i),emitsOptions:Z1(r,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zI.bind(null,s),n.ce&&n.ce(s),s}let Xe=null;const ds=n=>{Xe=n,n.scope.on()},ci=()=>{Xe&&Xe.scope.off(),Xe=null};function y0(n){return n.vnode.shapeFlag&4}let zo=!1;function jx(n,e=!1){zo=e;const{props:t,children:r}=n.vnode,i=y0(n);yx(n,t,i,e),_x(n,r);const s=i?Fx(n,e):void 0;return zo=!1,s}function Fx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=B1(new Proxy(n.ctx,hx));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?Ux(n):null;ds(n),Ms();const s=br(r,n,0,[n.props,i]);if(Ls(),ci(),A1(s)){if(s.then(ci,ci),e)return s.then(o=>{Um(n,o,e)}).catch(o=>{Mc(o,n,0)});n.asyncDep=s}else Um(n,s,e)}else v0(n,e)}function Um(n,e,t){oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=G1(e)),v0(n,t)}let Vm;function v0(n,e,t){const r=n.type;if(!n.render){if(!e&&Vm&&!r.render){const i=r.template||ff(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Lt(Lt({isCustomElement:s,delimiters:a},o),l);r.render=Vm(i,c)}}n.render=r.render||hn}ds(n),Ms(),dx(n),Ls(),ci()}function $x(n){return new Proxy(n.attrs,{get(e,t){return zt(n,"get","$attrs"),e[t]}})}function Ux(n){const e=r=>{n.exposed=r||{}};let t;return{get attrs(){return t||(t=$x(n))},slots:n.slots,emit:n.emit,expose:e}}function Vc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(G1(B1(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xo)return xo[t](n)},has(e,t){return t in e||t in xo}}))}function Vx(n,e=!0){return oe(n)?n.displayName||n.name:n.name||e&&n.__name}function Bx(n){return oe(n)&&"__vccOpts"in n}const Zt=(n,e)=>jI(n,e,zo);function Ql(n,e,t){const r=arguments.length;return r===2?je(e)&&!re(e)?Mh(e)?ve(n,null,[e]):ve(n,e):ve(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Mh(t)&&(t=[t]),ve(n,e,t))}const zx=Symbol(""),qx=()=>Hn(zx),Hx="3.2.47",Gx="http://www.w3.org/2000/svg",Yr=typeof document<"u"?document:null,Bm=Yr&&Yr.createElement("template"),Kx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?Yr.createElementNS(Gx,n):Yr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Yr.createTextNode(n),createComment:n=>Yr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Bm.innerHTML=r?`<svg>${n}</svg>`:n;const a=Bm.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Wx(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Qx(n,e,t){const r=n.style,i=nt(t);if(t&&!i){if(e&&!nt(e))for(const s in e)t[s]==null&&Lh(r,s,"");for(const s in t)Lh(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const zm=/\s*!important$/;function Lh(n,e,t){if(re(t))t.forEach(r=>Lh(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Yx(n,e);zm.test(t)?n.setProperty(Ns(r),t.replace(zm,""),"important"):n[r]=t}}const qm=["Webkit","Moz","ms"],Hu={};function Yx(n,e){const t=Hu[e];if(t)return t;let r=Nn(e);if(r!=="filter"&&r in n)return Hu[e]=r;r=Pc(r);for(let i=0;i<qm.length;i++){const s=qm[i]+r;if(s in n)return Hu[e]=s}return e}const Hm="http://www.w3.org/1999/xlink";function Jx(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Hm,e.slice(6,e.length)):n.setAttributeNS(Hm,e,t);else{const s=Qb(e);t==null||s&&!E1(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Xx(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=E1(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Ki(n,e,t,r){n.addEventListener(e,t,r)}function Zx(n,e,t,r){n.removeEventListener(e,t,r)}function eE(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=tE(e);if(r){const c=s[e]=iE(r,i);Ki(n,a,c,l)}else o&&(Zx(n,a,o,l),s[e]=void 0)}}const Gm=/(?:Once|Passive|Capture)$/;function tE(n){let e;if(Gm.test(n)){e={};let r;for(;r=n.match(Gm);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ns(n.slice(2)),e]}let Gu=0;const nE=Promise.resolve(),rE=()=>Gu||(nE.then(()=>Gu=0),Gu=Date.now());function iE(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;dn(sE(r,t.value),e,5,[r])};return t.value=n,t.attached=rE(),t}function sE(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Km=/^on[a-z]/,oE=(n,e,t,r,i=!1,s,o,a,l)=>{e==="class"?Wx(n,r,i):e==="style"?Qx(n,t,r):Rc(e)?Yd(e)||eE(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aE(n,e,r,i))?Xx(n,e,r,s,o,a,l):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Jx(n,e,r,i))};function aE(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Km.test(e)&&oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Km.test(e)&&nt(t)?!1:e in n}const Wm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>Sl(e,t):e};function lE(n){n.target.composing=!0}function Qm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qo={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n._assign=Wm(i);const s=r||i.props&&i.props.type==="number";Ki(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Eh(a)),n._assign(a)}),t&&Ki(n,"change",()=>{n.value=n.value.trim()}),e||(Ki(n,"compositionstart",lE),Ki(n,"compositionend",Qm),Ki(n,"change",Qm))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:i}},s){if(n._assign=Wm(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(i||n.type==="number")&&Eh(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},cE=Lt({patchProp:oE},Kx);let Ym;function uE(){return Ym||(Ym=Ex(cE))}const hE=(...n)=>{const e=uE().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=dE(r);if(!i)return;const s=e._component;!oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function dE(n){return nt(n)?document.querySelector(n):n}var fE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function mE(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var fs={},gE={get exports(){return fs},set exports(n){fs=n}};(function(n,e){(function(r,i){n.exports=i()})(typeof self<"u"?self:fE,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=r,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},i.r=function(s){Object.defineProperty(s,"__esModule",{value:!0})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=0)}({"./dist/icons.json":function(t){t.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":function(t,r,i){var s,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var a=function(){function l(){}l.prototype=Object.create(null);function c(w,I){for(var _=I.length,P=0;P<_;++P)g(w,I[P])}var u={}.hasOwnProperty;function h(w,I){w[I]=!0}function d(w,I){for(var _ in I)u.call(I,_)&&(w[_]=!!I[_])}var f=/\s+/;function p(w,I){for(var _=I.split(f),P=_.length,B=0;B<P;++B)w[_[B]]=!0}function g(w,I){if(I){var _=typeof I;_==="string"?p(w,I):Array.isArray(I)?c(w,I):_==="object"?d(w,I):_==="number"&&h(w,I)}}function y(){for(var w=arguments.length,I=Array(w),_=0;_<w;_++)I[_]=arguments[_];var P=new l;c(P,I);var B=[];for(var U in P)P[U]&&B.push(U);return B.join(" ")}return y}();typeof t<"u"&&t.exports?t.exports=a:(s=[],o=function(){return a}.apply(r,s),o!==void 0&&(t.exports=o))})()},"./node_modules/core-js/es/array/from.js":function(t,r,i){i("./node_modules/core-js/modules/es.string.iterator.js"),i("./node_modules/core-js/modules/es.array.from.js");var s=i("./node_modules/core-js/internals/path.js");t.exports=s.Array.from},"./node_modules/core-js/internals/a-function.js":function(t,r){t.exports=function(i){if(typeof i!="function")throw TypeError(String(i)+" is not a function");return i}},"./node_modules/core-js/internals/an-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/is-object.js");t.exports=function(o){if(!s(o))throw TypeError(String(o)+" is not an object");return o}},"./node_modules/core-js/internals/array-from.js":function(t,r,i){var s=i("./node_modules/core-js/internals/bind-context.js"),o=i("./node_modules/core-js/internals/to-object.js"),a=i("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),l=i("./node_modules/core-js/internals/is-array-iterator-method.js"),c=i("./node_modules/core-js/internals/to-length.js"),u=i("./node_modules/core-js/internals/create-property.js"),h=i("./node_modules/core-js/internals/get-iterator-method.js");t.exports=function(f){var p=o(f),g=typeof this=="function"?this:Array,y=arguments.length,w=y>1?arguments[1]:void 0,I=w!==void 0,_=0,P=h(p),B,U,Q,ee;if(I&&(w=s(w,y>2?arguments[2]:void 0,2)),P!=null&&!(g==Array&&l(P)))for(ee=P.call(p),U=new g;!(Q=ee.next()).done;_++)u(U,_,I?a(ee,w,[Q.value,_],!0):Q.value);else for(B=c(p.length),U=new g(B);B>_;_++)u(U,_,I?w(p[_],_):p[_]);return U.length=_,U}},"./node_modules/core-js/internals/array-includes.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-indexed-object.js"),o=i("./node_modules/core-js/internals/to-length.js"),a=i("./node_modules/core-js/internals/to-absolute-index.js");t.exports=function(l){return function(c,u,h){var d=s(c),f=o(d.length),p=a(h,f),g;if(l&&u!=u){for(;f>p;)if(g=d[p++],g!=g)return!0}else for(;f>p;p++)if((l||p in d)&&d[p]===u)return l||p||0;return!l&&-1}}},"./node_modules/core-js/internals/bind-context.js":function(t,r,i){var s=i("./node_modules/core-js/internals/a-function.js");t.exports=function(o,a,l){if(s(o),a===void 0)return o;switch(l){case 0:return function(){return o.call(a)};case 1:return function(c){return o.call(a,c)};case 2:return function(c,u){return o.call(a,c,u)};case 3:return function(c,u,h){return o.call(a,c,u,h)}}return function(){return o.apply(a,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":function(t,r,i){var s=i("./node_modules/core-js/internals/an-object.js");t.exports=function(o,a,l,c){try{return c?a(s(l)[0],l[1]):a(l)}catch(h){var u=o.return;throw u!==void 0&&s(u.call(o)),h}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":function(t,r,i){var s=i("./node_modules/core-js/internals/well-known-symbol.js"),o=s("iterator"),a=!1;try{var l=0,c={next:function(){return{done:!!l++}},return:function(){a=!0}};c[o]=function(){return this},Array.from(c,function(){throw 2})}catch{}t.exports=function(u,h){if(!h&&!a)return!1;var d=!1;try{var f={};f[o]=function(){return{next:function(){return{done:d=!0}}}},u(f)}catch{}return d}},"./node_modules/core-js/internals/classof-raw.js":function(t,r){var i={}.toString;t.exports=function(s){return i.call(s).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":function(t,r,i){var s=i("./node_modules/core-js/internals/classof-raw.js"),o=i("./node_modules/core-js/internals/well-known-symbol.js"),a=o("toStringTag"),l=s(function(){return arguments}())=="Arguments",c=function(u,h){try{return u[h]}catch{}};t.exports=function(u){var h,d,f;return u===void 0?"Undefined":u===null?"Null":typeof(d=c(h=Object(u),a))=="string"?d:l?s(h):(f=s(h))=="Object"&&typeof h.callee=="function"?"Arguments":f}},"./node_modules/core-js/internals/copy-constructor-properties.js":function(t,r,i){var s=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/own-keys.js"),a=i("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),l=i("./node_modules/core-js/internals/object-define-property.js");t.exports=function(c,u){for(var h=o(u),d=l.f,f=a.f,p=0;p<h.length;p++){var g=h[p];s(c,g)||d(c,g,f(u,g))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js");t.exports=!s(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":function(t,r,i){var s=i("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,o=i("./node_modules/core-js/internals/object-create.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js"),l=i("./node_modules/core-js/internals/set-to-string-tag.js"),c=i("./node_modules/core-js/internals/iterators.js"),u=function(){return this};t.exports=function(h,d,f){var p=d+" Iterator";return h.prototype=o(s,{next:a(1,f)}),l(h,p,!1,!0),c[p]=u,h}},"./node_modules/core-js/internals/create-property-descriptor.js":function(t,r){t.exports=function(i,s){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:s}}},"./node_modules/core-js/internals/create-property.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-primitive.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=function(l,c,u){var h=s(c);h in l?o.f(l,h,a(0,u)):l[h]=u}},"./node_modules/core-js/internals/define-iterator.js":function(t,r,i){var s=i("./node_modules/core-js/internals/export.js"),o=i("./node_modules/core-js/internals/create-iterator-constructor.js"),a=i("./node_modules/core-js/internals/object-get-prototype-of.js"),l=i("./node_modules/core-js/internals/object-set-prototype-of.js"),c=i("./node_modules/core-js/internals/set-to-string-tag.js"),u=i("./node_modules/core-js/internals/hide.js"),h=i("./node_modules/core-js/internals/redefine.js"),d=i("./node_modules/core-js/internals/well-known-symbol.js"),f=i("./node_modules/core-js/internals/is-pure.js"),p=i("./node_modules/core-js/internals/iterators.js"),g=i("./node_modules/core-js/internals/iterators-core.js"),y=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,I=d("iterator"),_="keys",P="values",B="entries",U=function(){return this};t.exports=function(Q,ee,$e,ft,Ct,Jt,$n){o($e,ee,ft);var Xt=function(Ht){if(Ht===Ct&&Ze)return Ze;if(!w&&Ht in le)return le[Ht];switch(Ht){case _:return function(){return new $e(this,Ht)};case P:return function(){return new $e(this,Ht)};case B:return function(){return new $e(this,Ht)}}return function(){return new $e(this)}},ar=ee+" Iterator",De=!1,le=Q.prototype,he=le[I]||le["@@iterator"]||Ct&&le[Ct],Ze=!w&&he||Xt(Ct),yn=ee=="Array"&&le.entries||he,et,Qe,rn;if(yn&&(et=a(yn.call(new Q)),y!==Object.prototype&&et.next&&(!f&&a(et)!==y&&(l?l(et,y):typeof et[I]!="function"&&u(et,I,U)),c(et,ar,!0,!0),f&&(p[ar]=U))),Ct==P&&he&&he.name!==P&&(De=!0,Ze=function(){return he.call(this)}),(!f||$n)&&le[I]!==Ze&&u(le,I,Ze),p[ee]=Ze,Ct)if(Qe={values:Xt(P),keys:Jt?Ze:Xt(_),entries:Xt(B)},$n)for(rn in Qe)(w||De||!(rn in le))&&h(le,rn,Qe[rn]);else s({target:ee,proto:!0,forced:w||De},Qe);return Qe}},"./node_modules/core-js/internals/descriptors.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js");t.exports=!s(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/document-create-element.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/is-object.js"),a=s.document,l=o(a)&&o(a.createElement);t.exports=function(c){return l?a.createElement(c):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,a=i("./node_modules/core-js/internals/hide.js"),l=i("./node_modules/core-js/internals/redefine.js"),c=i("./node_modules/core-js/internals/set-global.js"),u=i("./node_modules/core-js/internals/copy-constructor-properties.js"),h=i("./node_modules/core-js/internals/is-forced.js");t.exports=function(d,f){var p=d.target,g=d.global,y=d.stat,w,I,_,P,B,U;if(g?I=s:y?I=s[p]||c(p,{}):I=(s[p]||{}).prototype,I)for(_ in f){if(B=f[_],d.noTargetGet?(U=o(I,_),P=U&&U.value):P=I[_],w=h(g?_:p+(y?".":"#")+_,d.forced),!w&&P!==void 0){if(typeof B==typeof P)continue;u(B,P)}(d.sham||P&&P.sham)&&a(B,"sham",!0),l(I,_,B,d)}}},"./node_modules/core-js/internals/fails.js":function(t,r){t.exports=function(i){try{return!!i()}catch{return!0}}},"./node_modules/core-js/internals/function-to-string.js":function(t,r,i){var s=i("./node_modules/core-js/internals/shared.js");t.exports=s("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":function(t,r,i){var s=i("./node_modules/core-js/internals/classof.js"),o=i("./node_modules/core-js/internals/iterators.js"),a=i("./node_modules/core-js/internals/well-known-symbol.js"),l=a("iterator");t.exports=function(c){if(c!=null)return c[l]||c["@@iterator"]||o[s(c)]}},"./node_modules/core-js/internals/global.js":function(t,r,i){(function(s){var o="object",a=function(l){return l&&l.Math==Math&&l};t.exports=a(typeof globalThis==o&&globalThis)||a(typeof window==o&&window)||a(typeof self==o&&self)||a(typeof s==o&&s)||Function("return this")()}).call(this,i("./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":function(t,r){var i={}.hasOwnProperty;t.exports=function(s,o){return i.call(s,o)}},"./node_modules/core-js/internals/hidden-keys.js":function(t,r){t.exports={}},"./node_modules/core-js/internals/hide.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js");t.exports=s?function(l,c,u){return o.f(l,c,a(1,u))}:function(l,c,u){return l[c]=u,l}},"./node_modules/core-js/internals/html.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=s.document;t.exports=o&&o.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/fails.js"),a=i("./node_modules/core-js/internals/document-create-element.js");t.exports=!s&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},"./node_modules/core-js/internals/indexed-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js"),o=i("./node_modules/core-js/internals/classof-raw.js"),a="".split;t.exports=s(function(){return!Object("z").propertyIsEnumerable(0)})?function(l){return o(l)=="String"?a.call(l,""):Object(l)}:Object},"./node_modules/core-js/internals/internal-state.js":function(t,r,i){var s=i("./node_modules/core-js/internals/native-weak-map.js"),o=i("./node_modules/core-js/internals/global.js"),a=i("./node_modules/core-js/internals/is-object.js"),l=i("./node_modules/core-js/internals/hide.js"),c=i("./node_modules/core-js/internals/has.js"),u=i("./node_modules/core-js/internals/shared-key.js"),h=i("./node_modules/core-js/internals/hidden-keys.js"),d=o.WeakMap,f,p,g,y=function(Q){return g(Q)?p(Q):f(Q,{})},w=function(Q){return function(ee){var $e;if(!a(ee)||($e=p(ee)).type!==Q)throw TypeError("Incompatible receiver, "+Q+" required");return $e}};if(s){var I=new d,_=I.get,P=I.has,B=I.set;f=function(Q,ee){return B.call(I,Q,ee),ee},p=function(Q){return _.call(I,Q)||{}},g=function(Q){return P.call(I,Q)}}else{var U=u("state");h[U]=!0,f=function(Q,ee){return l(Q,U,ee),ee},p=function(Q){return c(Q,U)?Q[U]:{}},g=function(Q){return c(Q,U)}}t.exports={set:f,get:p,has:g,enforce:y,getterFor:w}},"./node_modules/core-js/internals/is-array-iterator-method.js":function(t,r,i){var s=i("./node_modules/core-js/internals/well-known-symbol.js"),o=i("./node_modules/core-js/internals/iterators.js"),a=s("iterator"),l=Array.prototype;t.exports=function(c){return c!==void 0&&(o.Array===c||l[a]===c)}},"./node_modules/core-js/internals/is-forced.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js"),o=/#|\.prototype\./,a=function(d,f){var p=c[l(d)];return p==h?!0:p==u?!1:typeof f=="function"?s(f):!!f},l=a.normalize=function(d){return String(d).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",h=a.POLYFILL="P";t.exports=a},"./node_modules/core-js/internals/is-object.js":function(t,r){t.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},"./node_modules/core-js/internals/is-pure.js":function(t,r){t.exports=!1},"./node_modules/core-js/internals/iterators-core.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-get-prototype-of.js"),o=i("./node_modules/core-js/internals/hide.js"),a=i("./node_modules/core-js/internals/has.js"),l=i("./node_modules/core-js/internals/well-known-symbol.js"),c=i("./node_modules/core-js/internals/is-pure.js"),u=l("iterator"),h=!1,d=function(){return this},f,p,g;[].keys&&(g=[].keys(),"next"in g?(p=s(s(g)),p!==Object.prototype&&(f=p)):h=!0),f==null&&(f={}),!c&&!a(f,u)&&o(f,u,d),t.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:h}},"./node_modules/core-js/internals/iterators.js":function(t,r){t.exports={}},"./node_modules/core-js/internals/native-symbol.js":function(t,r,i){var s=i("./node_modules/core-js/internals/fails.js");t.exports=!!Object.getOwnPropertySymbols&&!s(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/function-to-string.js"),a=s.WeakMap;t.exports=typeof a=="function"&&/native code/.test(o.call(a))},"./node_modules/core-js/internals/object-create.js":function(t,r,i){var s=i("./node_modules/core-js/internals/an-object.js"),o=i("./node_modules/core-js/internals/object-define-properties.js"),a=i("./node_modules/core-js/internals/enum-bug-keys.js"),l=i("./node_modules/core-js/internals/hidden-keys.js"),c=i("./node_modules/core-js/internals/html.js"),u=i("./node_modules/core-js/internals/document-create-element.js"),h=i("./node_modules/core-js/internals/shared-key.js"),d=h("IE_PROTO"),f="prototype",p=function(){},g=function(){var y=u("iframe"),w=a.length,I="<",_="script",P=">",B="java"+_+":",U;for(y.style.display="none",c.appendChild(y),y.src=String(B),U=y.contentWindow.document,U.open(),U.write(I+_+P+"document.F=Object"+I+"/"+_+P),U.close(),g=U.F;w--;)delete g[f][a[w]];return g()};t.exports=Object.create||function(w,I){var _;return w!==null?(p[f]=s(w),_=new p,p[f]=null,_[d]=w):_=g(),I===void 0?_:o(_,I)},l[d]=!0},"./node_modules/core-js/internals/object-define-properties.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-define-property.js"),a=i("./node_modules/core-js/internals/an-object.js"),l=i("./node_modules/core-js/internals/object-keys.js");t.exports=s?Object.defineProperties:function(u,h){a(u);for(var d=l(h),f=d.length,p=0,g;f>p;)o.f(u,g=d[p++],h[g]);return u}},"./node_modules/core-js/internals/object-define-property.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/ie8-dom-define.js"),a=i("./node_modules/core-js/internals/an-object.js"),l=i("./node_modules/core-js/internals/to-primitive.js"),c=Object.defineProperty;r.f=s?c:function(h,d,f){if(a(h),d=l(d,!0),a(f),o)try{return c(h,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported");return"value"in f&&(h[d]=f.value),h}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":function(t,r,i){var s=i("./node_modules/core-js/internals/descriptors.js"),o=i("./node_modules/core-js/internals/object-property-is-enumerable.js"),a=i("./node_modules/core-js/internals/create-property-descriptor.js"),l=i("./node_modules/core-js/internals/to-indexed-object.js"),c=i("./node_modules/core-js/internals/to-primitive.js"),u=i("./node_modules/core-js/internals/has.js"),h=i("./node_modules/core-js/internals/ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;r.f=s?d:function(p,g){if(p=l(p),g=c(g,!0),h)try{return d(p,g)}catch{}if(u(p,g))return a(!o.f.call(p,g),p[g])}},"./node_modules/core-js/internals/object-get-own-property-names.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-keys-internal.js"),o=i("./node_modules/core-js/internals/enum-bug-keys.js"),a=o.concat("length","prototype");r.f=Object.getOwnPropertyNames||function(c){return s(c,a)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":function(t,r){r.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":function(t,r,i){var s=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/to-object.js"),a=i("./node_modules/core-js/internals/shared-key.js"),l=i("./node_modules/core-js/internals/correct-prototype-getter.js"),c=a("IE_PROTO"),u=Object.prototype;t.exports=l?Object.getPrototypeOf:function(h){return h=o(h),s(h,c)?h[c]:typeof h.constructor=="function"&&h instanceof h.constructor?h.constructor.prototype:h instanceof Object?u:null}},"./node_modules/core-js/internals/object-keys-internal.js":function(t,r,i){var s=i("./node_modules/core-js/internals/has.js"),o=i("./node_modules/core-js/internals/to-indexed-object.js"),a=i("./node_modules/core-js/internals/array-includes.js"),l=i("./node_modules/core-js/internals/hidden-keys.js"),c=a(!1);t.exports=function(u,h){var d=o(u),f=0,p=[],g;for(g in d)!s(l,g)&&s(d,g)&&p.push(g);for(;h.length>f;)s(d,g=h[f++])&&(~c(p,g)||p.push(g));return p}},"./node_modules/core-js/internals/object-keys.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-keys-internal.js"),o=i("./node_modules/core-js/internals/enum-bug-keys.js");t.exports=Object.keys||function(l){return s(l,o)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":function(t,r,i){var s={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!s.call({1:2},1);r.f=a?function(c){var u=o(this,c);return!!u&&u.enumerable}:s},"./node_modules/core-js/internals/object-set-prototype-of.js":function(t,r,i){var s=i("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var o=!1,a={},l;try{l=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,l.call(a,[]),o=a instanceof Array}catch{}return function(u,h){return s(u,h),o?l.call(u,h):u.__proto__=h,u}}():void 0)},"./node_modules/core-js/internals/own-keys.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/object-get-own-property-names.js"),a=i("./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=i("./node_modules/core-js/internals/an-object.js"),c=s.Reflect;t.exports=c&&c.ownKeys||function(h){var d=o.f(l(h)),f=a.f;return f?d.concat(f(h)):d}},"./node_modules/core-js/internals/path.js":function(t,r,i){t.exports=i("./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/shared.js"),a=i("./node_modules/core-js/internals/hide.js"),l=i("./node_modules/core-js/internals/has.js"),c=i("./node_modules/core-js/internals/set-global.js"),u=i("./node_modules/core-js/internals/function-to-string.js"),h=i("./node_modules/core-js/internals/internal-state.js"),d=h.get,f=h.enforce,p=String(u).split("toString");o("inspectSource",function(g){return u.call(g)}),(t.exports=function(g,y,w,I){var _=I?!!I.unsafe:!1,P=I?!!I.enumerable:!1,B=I?!!I.noTargetGet:!1;if(typeof w=="function"&&(typeof y=="string"&&!l(w,"name")&&a(w,"name",y),f(w).source=p.join(typeof y=="string"?y:"")),g===s){P?g[y]=w:c(y,w);return}else _?!B&&g[y]&&(P=!0):delete g[y];P?g[y]=w:a(g,y,w)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||u.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":function(t,r){t.exports=function(i){if(i==null)throw TypeError("Can't call method on "+i);return i}},"./node_modules/core-js/internals/set-global.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/hide.js");t.exports=function(a,l){try{o(s,a,l)}catch{s[a]=l}return l}},"./node_modules/core-js/internals/set-to-string-tag.js":function(t,r,i){var s=i("./node_modules/core-js/internals/object-define-property.js").f,o=i("./node_modules/core-js/internals/has.js"),a=i("./node_modules/core-js/internals/well-known-symbol.js"),l=a("toStringTag");t.exports=function(c,u,h){c&&!o(c=h?c:c.prototype,l)&&s(c,l,{configurable:!0,value:u})}},"./node_modules/core-js/internals/shared-key.js":function(t,r,i){var s=i("./node_modules/core-js/internals/shared.js"),o=i("./node_modules/core-js/internals/uid.js"),a=s("keys");t.exports=function(l){return a[l]||(a[l]=o(l))}},"./node_modules/core-js/internals/shared.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/set-global.js"),a=i("./node_modules/core-js/internals/is-pure.js"),l="__core-js_shared__",c=s[l]||o(l,{});(t.exports=function(u,h){return c[u]||(c[u]=h!==void 0?h:{})})("versions",[]).push({version:"3.1.3",mode:a?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-integer.js"),o=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(a,l,c){var u=String(o(a)),h=s(l),d=u.length,f,p;return h<0||h>=d?c?"":void 0:(f=u.charCodeAt(h),f<55296||f>56319||h+1===d||(p=u.charCodeAt(h+1))<56320||p>57343?c?u.charAt(h):f:c?u.slice(h,h+2):(f-55296<<10)+(p-56320)+65536)}},"./node_modules/core-js/internals/to-absolute-index.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-integer.js"),o=Math.max,a=Math.min;t.exports=function(l,c){var u=s(l);return u<0?o(u+c,0):a(u,c)}},"./node_modules/core-js/internals/to-indexed-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/indexed-object.js"),o=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(a){return s(o(a))}},"./node_modules/core-js/internals/to-integer.js":function(t,r){var i=Math.ceil,s=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?s:i)(o)}},"./node_modules/core-js/internals/to-length.js":function(t,r,i){var s=i("./node_modules/core-js/internals/to-integer.js"),o=Math.min;t.exports=function(a){return a>0?o(s(a),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":function(t,r,i){var s=i("./node_modules/core-js/internals/require-object-coercible.js");t.exports=function(o){return Object(s(o))}},"./node_modules/core-js/internals/to-primitive.js":function(t,r,i){var s=i("./node_modules/core-js/internals/is-object.js");t.exports=function(o,a){if(!s(o))return o;var l,c;if(a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o))||typeof(l=o.valueOf)=="function"&&!s(c=l.call(o))||!a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o)))return c;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":function(t,r){var i=0,s=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++i+s).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":function(t,r,i){var s=i("./node_modules/core-js/internals/is-object.js"),o=i("./node_modules/core-js/internals/an-object.js");t.exports=function(a,l){if(o(a),!s(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":function(t,r,i){var s=i("./node_modules/core-js/internals/global.js"),o=i("./node_modules/core-js/internals/shared.js"),a=i("./node_modules/core-js/internals/uid.js"),l=i("./node_modules/core-js/internals/native-symbol.js"),c=s.Symbol,u=o("wks");t.exports=function(h){return u[h]||(u[h]=l&&c[h]||(l?c:a)("Symbol."+h))}},"./node_modules/core-js/modules/es.array.from.js":function(t,r,i){var s=i("./node_modules/core-js/internals/export.js"),o=i("./node_modules/core-js/internals/array-from.js"),a=i("./node_modules/core-js/internals/check-correctness-of-iteration.js"),l=!a(function(c){Array.from(c)});s({target:"Array",stat:!0,forced:l},{from:o})},"./node_modules/core-js/modules/es.string.iterator.js":function(t,r,i){var s=i("./node_modules/core-js/internals/string-at.js"),o=i("./node_modules/core-js/internals/internal-state.js"),a=i("./node_modules/core-js/internals/define-iterator.js"),l="String Iterator",c=o.set,u=o.getterFor(l);a(String,"String",function(h){c(this,{type:l,string:String(h),index:0})},function(){var d=u(this),f=d.string,p=d.index,g;return p>=f.length?{value:void 0,done:!0}:(g=s(f,p,!0),d.index+=g.length,{value:g,done:!1})})},"./node_modules/webpack/buildin/global.js":function(t,r){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}t.exports=i},"./src/default-attrs.json":function(t){t.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(g){for(var y=1;y<arguments.length;y++){var w=arguments[y];for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&(g[I]=w[I])}return g},o=function(){function g(y,w){for(var I=0;I<w.length;I++){var _=w[I];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(y,_.key,_)}}return function(y,w,I){return w&&g(y.prototype,w),I&&g(y,I),y}}(),a=i("./node_modules/classnames/dedupe.js"),l=h(a),c=i("./src/default-attrs.json"),u=h(c);function h(g){return g&&g.__esModule?g:{default:g}}function d(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}var f=function(){function g(y,w){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];d(this,g),this.name=y,this.contents=w,this.tags=I,this.attrs=s({},u.default,{class:"feather feather-"+y})}return o(g,[{key:"toSvg",value:function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=s({},this.attrs,w,{class:(0,l.default)(this.attrs.class,w.class)});return"<svg "+p(I)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),g}();function p(g){return Object.keys(g).map(function(y){return y+'="'+g[y]+'"'}).join(" ")}r.default=f},"./src/icons.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i("./src/icon.js"),o=h(s),a=i("./dist/icons.json"),l=h(a),c=i("./src/tags.json"),u=h(c);function h(d){return d&&d.__esModule?d:{default:d}}r.default=Object.keys(l.default).map(function(d){return new o.default(d,l.default[d],u.default[d])}).reduce(function(d,f){return d[f.name]=f,d},{})},"./src/index.js":function(t,r,i){var s=i("./src/icons.js"),o=h(s),a=i("./src/to-svg.js"),l=h(a),c=i("./src/replace.js"),u=h(c);function h(d){return d&&d.__esModule?d:{default:d}}t.exports={icons:o.default,toSvg:l.default,replace:u.default}},"./src/replace.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(p){for(var g=1;g<arguments.length;g++){var y=arguments[g];for(var w in y)Object.prototype.hasOwnProperty.call(y,w)&&(p[w]=y[w])}return p},o=i("./node_modules/classnames/dedupe.js"),a=u(o),l=i("./src/icons.js"),c=u(l);function u(p){return p&&p.__esModule?p:{default:p}}function h(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var g=document.querySelectorAll("[data-feather]");Array.from(g).forEach(function(y){return d(y,p)})}function d(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=f(p),w=y["data-feather"];delete y["data-feather"];var I=c.default[w].toSvg(s({},g,y,{class:(0,a.default)(g.class,y.class)})),_=new DOMParser().parseFromString(I,"image/svg+xml"),P=_.querySelector("svg");p.parentNode.replaceChild(P,p)}function f(p){return Array.from(p.attributes).reduce(function(g,y){return g[y.name]=y.value,g},{})}r.default=h},"./src/tags.json":function(t){t.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-bouy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i("./src/icons.js"),o=a(s);function a(c){return c&&c.__esModule?c:{default:c}}function l(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!c)throw new Error("The required `key` (icon name) parameter is missing.");if(!o.default[c])throw new Error("No icon matching '"+c+"'. See the complete list of icons at https://feathericons.com");return o.default[c].toSvg(u)}r.default=l},0:function(t,r,i){i("./node_modules/core-js/es/array/from.js"),t.exports=i("./src/index.js")}})})})(gE);const gf=pE(fs),yE=zb({__proto__:null,default:gf},[fs]);const vE={class:"app"},wE={class:"navbar"},_E={__name:"App",setup(n){return gf.replace(),(e,t)=>{const r=Qn("navbar"),i=Qn("router-view");return Ee(),Se("div",vE,[E("div",wE,[ve(r),ve(i)])])}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wi=typeof window<"u";function bE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Ku(n,e){const t={};for(const r in e){const i=e[r];t[r]=fn(i)?i.map(n):n(i)}return t}const To=()=>{},fn=Array.isArray,IE=/\/$/,xE=n=>n.replace(IE,"");function Wu(n,e,t="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=n(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=AE(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function EE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Jm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function TE(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&ps(e.matched[r],t.matched[i])&&w0(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ps(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function w0(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!SE(n[t],e[t]))return!1;return!0}function SE(n,e){return fn(n)?Xm(n,e):fn(e)?Xm(e,n):n===e}function Xm(n,e){return fn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function AE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/");let i=t.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Ho;(function(n){n.pop="pop",n.push="push"})(Ho||(Ho={}));var So;(function(n){n.back="back",n.forward="forward",n.unknown=""})(So||(So={}));function CE(n){if(!n)if(Wi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),xE(n)}const kE=/^[^#]+#/;function RE(n,e){return n.replace(kE,"#")+e}function OE(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Bc=()=>({left:window.pageXOffset,top:window.pageYOffset});function DE(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=OE(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Zm(n,e){return(history.state?history.state.position-e:-1)+n}const jh=new Map;function PE(n,e){jh.set(n,e)}function NE(n){const e=jh.get(n);return jh.delete(n),e}let ME=()=>location.protocol+"//"+location.host;function _0(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let a=i.includes(n.slice(s))?n.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Jm(l,"")}return Jm(t,n)+r+i}function LE(n,e,t,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=_0(n,location),p=t.value,g=e.value;let y=0;if(d){if(t.value=f,e.value=d,o&&o===p){o=null;return}y=g?d.position-g.position:0}else r(f);i.forEach(w=>{w(t.value,p,{delta:y,type:Ho.pop,direction:y?y>0?So.forward:So.back:So.unknown})})};function l(){o=t.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:Bc()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function eg(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?Bc():null}}function jE(n){const{history:e,location:t}=window,r={value:_0(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:ME()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function o(l,c){const u=_e({},e.state,eg(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=_e({},i.value,e.state,{forward:l,scroll:Bc()});s(u.current,u,!0);const h=_e({},eg(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function FE(n){n=CE(n);const e=jE(n),t=LE(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=_e({location:"",base:n,go:r,createHref:RE.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function $E(n){return typeof n=="string"||n&&typeof n=="object"}function b0(n){return typeof n=="string"||typeof n=="symbol"}const cr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},I0=Symbol("");var tg;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(tg||(tg={}));function ms(n,e){return _e(new Error,{type:n,[I0]:!0},e)}function Un(n,e){return n instanceof Error&&I0 in n&&(e==null||!!(n.type&e))}const ng="[^/]+?",UE={sensitive:!1,strict:!1,start:!0,end:!0},VE=/[.+*?^${}()[\]/\\]/g;function BE(n,e){const t=_e({},UE,e),r=[];let i=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(VE,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:g,optional:y,regexp:w}=d;s.push({name:p,repeatable:g,optional:y});const I=w||ng;if(I!==ng){f+=10;try{new RegExp(`(${I})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${p}" (${I}): `+P.message)}}let _=g?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(_=y&&c.length<2?`(?:/${_})`:"/"+_),y&&(_+="?"),i+=_,f+=20,y&&(f+=-8),g&&(f+=-20),I===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(t.strict&&t.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:g,optional:y}=f,w=p in c?c[p]:"";if(fn(w)&&!g)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const I=fn(w)?w.join("/"):w;if(!I)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function zE(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qE(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=zE(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(rg(r))return 1;if(rg(i))return-1}return i.length-r.length}function rg(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const HE={type:0,value:""},GE=/[a-zA-Z0-9_]/;function KE(n){if(!n)return[[]];if(n==="/")return[[HE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:l==="("?t=2:GE.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function WE(n,e,t){const r=BE(KE(n.path),t),i=_e(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function QE(n,e){const t=[],r=new Map;e=og({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,p=YE(u);p.aliasOf=d&&d.record;const g=og(e,u),y=[p];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of _)y.push(_e({},p,{components:d?d.record.components:p.components,path:P,aliasOf:d?d.record:p}))}let w,I;for(const _ of y){const{path:P}=_;if(h&&P[0]!=="/"){const B=h.record.path,U=B[B.length-1]==="/"?"":"/";_.path=h.record.path+(P&&U+P)}if(w=WE(_,h,g),d?d.alias.push(w):(I=I||w,I!==w&&I.alias.push(w),f&&u.name&&!sg(w)&&o(u.name)),p.children){const B=p.children;for(let U=0;U<B.length;U++)s(B[U],w,d&&d.children[U])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return I?()=>{o(I)}:To}function o(u){if(b0(u)){const h=r.get(u);h&&(r.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&qE(u,t[h])>=0&&(u.record.path!==t[h].record.path||!x0(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!sg(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,g;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ms(1,{location:u});g=d.record.name,f=_e(ig(h.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&ig(u.params,d.keys.map(I=>I.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=t.find(I=>I.re.test(p)),d&&(f=d.parse(p),g=d.record.name);else{if(d=h.name?r.get(h.name):t.find(I=>I.re.test(h.path)),!d)throw ms(1,{location:u,currentLocation:h});g=d.record.name,f=_e({},h.params,u.params),p=d.stringify(f)}const y=[];let w=d;for(;w;)y.unshift(w.record),w=w.parent;return{name:g,path:p,params:f,matched:y,meta:XE(y)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ig(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function YE(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:JE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function JE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function sg(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function XE(n){return n.reduce((e,t)=>_e(e,t.meta),{})}function og(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function x0(n,e){return e.children.some(t=>t===n||x0(n,t))}const E0=/#/g,ZE=/&/g,eT=/\//g,tT=/=/g,nT=/\?/g,T0=/\+/g,rT=/%5B/g,iT=/%5D/g,S0=/%5E/g,sT=/%60/g,A0=/%7B/g,oT=/%7C/g,C0=/%7D/g,aT=/%20/g;function yf(n){return encodeURI(""+n).replace(oT,"|").replace(rT,"[").replace(iT,"]")}function lT(n){return yf(n).replace(A0,"{").replace(C0,"}").replace(S0,"^")}function Fh(n){return yf(n).replace(T0,"%2B").replace(aT,"+").replace(E0,"%23").replace(ZE,"%26").replace(sT,"`").replace(A0,"{").replace(C0,"}").replace(S0,"^")}function cT(n){return Fh(n).replace(tT,"%3D")}function uT(n){return yf(n).replace(E0,"%23").replace(nT,"%3F")}function hT(n){return n==null?"":uT(n).replace(eT,"%2F")}function Yl(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function dT(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(T0," "),o=s.indexOf("="),a=Yl(o<0?s:s.slice(0,o)),l=o<0?null:Yl(s.slice(o+1));if(a in e){let c=e[a];fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ag(n){let e="";for(let t in n){const r=n[t];if(t=cT(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(fn(r)?r.map(s=>s&&Fh(s)):[r&&Fh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function fT(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=fn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const pT=Symbol(""),lg=Symbol(""),vf=Symbol(""),k0=Symbol(""),$h=Symbol("");function no(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function mr(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ms(4,{from:t,to:e})):h instanceof Error?a(h):$E(h)?a(ms(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=n.call(r&&r.instances[i],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Qu(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(mT(a)){const c=(a.__vccOpts||a)[e];c&&i.push(mr(c,t,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=bE(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&mr(d,t,r,s,o)()}))}}return i}function mT(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function cg(n){const e=Hn(vf),t=Hn(k0),r=Zt(()=>e.resolve(rs(n.to))),i=Zt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(ps.bind(null,u));if(d>-1)return d;const f=ug(l[c-2]);return c>1&&ug(u)===f&&h[h.length-1].path!==f?h.findIndex(ps.bind(null,l[c-2])):d}),s=Zt(()=>i.value>-1&&wT(t.params,r.value.params)),o=Zt(()=>i.value>-1&&i.value===t.matched.length-1&&w0(t.params,r.value.params));function a(l={}){return vT(l)?e[rs(n.replace)?"replace":"push"](rs(n.to)).catch(To):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const gT=df({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cg,setup(n,{slots:e}){const t=Ia(cg(n)),{options:r}=Hn(vf),i=Zt(()=>({[hg(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[hg(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Ql("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),yT=gT;function vT(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function wT(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!fn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ug(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const hg=(n,e,t)=>n??e??t,_T=df({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Hn($h),i=Zt(()=>n.route||r.value),s=Hn(lg,0),o=Zt(()=>{let c=rs(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Zt(()=>i.value.matched[o.value]);Al(lg,Zt(()=>o.value+1)),Al(pT,a),Al($h,i);const l=ln();return Cl(()=>[l.value,a.value,n.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ps(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=n.name,h=a.value,d=h&&h.components[u];if(!d)return dg(t.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=Ql(d,_e({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return dg(t.default,{Component:y,route:c})||y}}});function dg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const bT=_T;function IT(n){const e=QE(n.routes,n),t=n.parseQuery||dT,r=n.stringifyQuery||ag,i=n.history,s=no(),o=no(),a=no(),l=PI(cr);let c=cr;Wi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ku.bind(null,A=>""+A),h=Ku.bind(null,hT),d=Ku.bind(null,Yl);function f(A,q){let $,Y;return b0(A)?($=e.getRecordMatcher(A),Y=q):Y=A,e.addRoute(Y,$)}function p(A){const q=e.getRecordMatcher(A);q&&e.removeRoute(q)}function g(){return e.getRoutes().map(A=>A.record)}function y(A){return!!e.getRecordMatcher(A)}function w(A,q){if(q=_e({},q||l.value),typeof A=="string"){const m=Wu(t,A,q.path),v=e.resolve({path:m.path},q),T=i.createHref(m.fullPath);return _e(m,v,{params:d(v.params),hash:Yl(m.hash),redirectedFrom:void 0,href:T})}let $;if("path"in A)$=_e({},A,{path:Wu(t,A.path,q.path).path});else{const m=_e({},A.params);for(const v in m)m[v]==null&&delete m[v];$=_e({},A,{params:h(A.params)}),q.params=h(q.params)}const Y=e.resolve($,q),pe=A.hash||"";Y.params=u(d(Y.params));const Ue=EE(r,_e({},A,{hash:lT(pe),path:Y.path})),ae=i.createHref(Ue);return _e({fullPath:Ue,hash:pe,query:r===ag?fT(A.query):A.query||{}},Y,{redirectedFrom:void 0,href:ae})}function I(A){return typeof A=="string"?Wu(t,A,l.value.path):_e({},A)}function _(A,q){if(c!==A)return ms(8,{from:q,to:A})}function P(A){return Q(A)}function B(A){return P(_e(I(A),{replace:!0}))}function U(A){const q=A.matched[A.matched.length-1];if(q&&q.redirect){const{redirect:$}=q;let Y=typeof $=="function"?$(A):$;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=I(Y):{path:Y},Y.params={}),_e({query:A.query,hash:A.hash,params:"path"in Y?{}:A.params},Y)}}function Q(A,q){const $=c=w(A),Y=l.value,pe=A.state,Ue=A.force,ae=A.replace===!0,m=U($);if(m)return Q(_e(I(m),{state:typeof m=="object"?_e({},pe,m.state):pe,force:Ue,replace:ae}),q||$);const v=$;v.redirectedFrom=q;let T;return!Ue&&TE(r,Y,$)&&(T=ms(16,{to:v,from:Y}),yn(Y,Y,!0,!1)),(T?Promise.resolve(T):$e(v,Y)).catch(S=>Un(S)?Un(S,2)?S:Ze(S):le(S,v,Y)).then(S=>{if(S){if(Un(S,2))return Q(_e({replace:ae},I(S.to),{state:typeof S.to=="object"?_e({},pe,S.to.state):pe,force:Ue}),q||v)}else S=Ct(v,Y,!0,ae,pe);return ft(v,Y,S),S})}function ee(A,q){const $=_(A,q);return $?Promise.reject($):Promise.resolve()}function $e(A,q){let $;const[Y,pe,Ue]=xT(A,q);$=Qu(Y.reverse(),"beforeRouteLeave",A,q);for(const m of Y)m.leaveGuards.forEach(v=>{$.push(mr(v,A,q))});const ae=ee.bind(null,A,q);return $.push(ae),zi($).then(()=>{$=[];for(const m of s.list())$.push(mr(m,A,q));return $.push(ae),zi($)}).then(()=>{$=Qu(pe,"beforeRouteUpdate",A,q);for(const m of pe)m.updateGuards.forEach(v=>{$.push(mr(v,A,q))});return $.push(ae),zi($)}).then(()=>{$=[];for(const m of A.matched)if(m.beforeEnter&&!q.matched.includes(m))if(fn(m.beforeEnter))for(const v of m.beforeEnter)$.push(mr(v,A,q));else $.push(mr(m.beforeEnter,A,q));return $.push(ae),zi($)}).then(()=>(A.matched.forEach(m=>m.enterCallbacks={}),$=Qu(Ue,"beforeRouteEnter",A,q),$.push(ae),zi($))).then(()=>{$=[];for(const m of o.list())$.push(mr(m,A,q));return $.push(ae),zi($)}).catch(m=>Un(m,8)?m:Promise.reject(m))}function ft(A,q,$){for(const Y of a.list())Y(A,q,$)}function Ct(A,q,$,Y,pe){const Ue=_(A,q);if(Ue)return Ue;const ae=q===cr,m=Wi?history.state:{};$&&(Y||ae?i.replace(A.fullPath,_e({scroll:ae&&m&&m.scroll},pe)):i.push(A.fullPath,pe)),l.value=A,yn(A,q,$,ae),Ze()}let Jt;function $n(){Jt||(Jt=i.listen((A,q,$)=>{if(!Ht.listening)return;const Y=w(A),pe=U(Y);if(pe){Q(_e(pe,{replace:!0}),Y).catch(To);return}c=Y;const Ue=l.value;Wi&&PE(Zm(Ue.fullPath,$.delta),Bc()),$e(Y,Ue).catch(ae=>Un(ae,12)?ae:Un(ae,2)?(Q(ae.to,Y).then(m=>{Un(m,20)&&!$.delta&&$.type===Ho.pop&&i.go(-1,!1)}).catch(To),Promise.reject()):($.delta&&i.go(-$.delta,!1),le(ae,Y,Ue))).then(ae=>{ae=ae||Ct(Y,Ue,!1),ae&&($.delta&&!Un(ae,8)?i.go(-$.delta,!1):$.type===Ho.pop&&Un(ae,20)&&i.go(-1,!1)),ft(Y,Ue,ae)}).catch(To)}))}let Xt=no(),ar=no(),De;function le(A,q,$){Ze(A);const Y=ar.list();return Y.length?Y.forEach(pe=>pe(A,q,$)):console.error(A),Promise.reject(A)}function he(){return De&&l.value!==cr?Promise.resolve():new Promise((A,q)=>{Xt.add([A,q])})}function Ze(A){return De||(De=!A,$n(),Xt.list().forEach(([q,$])=>A?$(A):q()),Xt.reset()),A}function yn(A,q,$,Y){const{scrollBehavior:pe}=n;if(!Wi||!pe)return Promise.resolve();const Ue=!$&&NE(Zm(A.fullPath,0))||(Y||!$)&&history.state&&history.state.scroll||null;return Q1().then(()=>pe(A,q,Ue)).then(ae=>ae&&DE(ae)).catch(ae=>le(ae,A,q))}const et=A=>i.go(A);let Qe;const rn=new Set,Ht={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:y,getRoutes:g,resolve:w,options:n,push:P,replace:B,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ar.add,isReady:he,install(A){const q=this;A.component("RouterLink",yT),A.component("RouterView",bT),A.config.globalProperties.$router=q,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),Wi&&!Qe&&l.value===cr&&(Qe=!0,P(i.location).catch(pe=>{}));const $={};for(const pe in cr)$[pe]=Zt(()=>l.value[pe]);A.provide(vf,q),A.provide(k0,Ia($)),A.provide($h,l);const Y=A.unmount;rn.add(A),A.unmount=function(){rn.delete(A),rn.size<1&&(c=cr,Jt&&Jt(),Jt=null,l.value=cr,Qe=!1,De=!1),Y()}}};return Ht}function zi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function xT(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ps(c,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ps(c,l))||i.push(l))}return[t,r,i]}var Jl={},ET={get exports(){return Jl},set exports(n){Jl=n}},Ce=String,R0=function(){return{isColorSupported:!1,reset:Ce,bold:Ce,dim:Ce,italic:Ce,underline:Ce,inverse:Ce,hidden:Ce,strikethrough:Ce,black:Ce,red:Ce,green:Ce,yellow:Ce,blue:Ce,magenta:Ce,cyan:Ce,white:Ce,gray:Ce,bgBlack:Ce,bgRed:Ce,bgGreen:Ce,bgYellow:Ce,bgBlue:Ce,bgMagenta:Ce,bgCyan:Ce,bgWhite:Ce}};ET.exports=R0();Jl.createColors=R0;const TT={},ST=Object.freeze(Object.defineProperty({__proto__:null,default:TT},Symbol.toStringTag,{value:"Module"})),mn=mE(ST);let fg=Jl,pg=mn,Uh=class O0 extends Error{constructor(e,t,r,i,s,o){super(e),this.name="CssSyntaxError",this.reason=e,s&&(this.file=s),i&&(this.source=i),o&&(this.plugin=o),typeof t<"u"&&typeof r<"u"&&(typeof t=="number"?(this.line=t,this.column=r):(this.line=t.line,this.column=t.column,this.endLine=r.line,this.endColumn=r.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,O0)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let t=this.source;e==null&&(e=fg.isColorSupported),pg&&e&&(t=pg(t));let r=t.split(/\r?\n/),i=Math.max(this.line-3,0),s=Math.min(this.line+2,r.length),o=String(s).length,a,l;if(e){let{bold:c,red:u,gray:h}=fg.createColors(!0);a=d=>c(u(d)),l=d=>h(d)}else a=l=c=>c;return r.slice(i,s).map((c,u)=>{let h=i+1+u,d=" "+(" "+h).slice(-o)+" | ";if(h===this.line){let f=l(d.replace(/\d/g," "))+c.slice(0,this.column-1).replace(/[^\t]/g," ");return a(">")+l(d)+c+`
 `+f+a("^")}return" "+l(d)+c}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};var wf=Uh;Uh.default=Uh;var xa={};xa.isClean=Symbol("isClean");xa.my=Symbol("my");const mg={colon:": ",indent:"    ",beforeDecl:`
`,beforeRule:`
`,beforeOpen:" ",beforeClose:`
`,beforeComment:`
`,after:`
`,emptyBody:"",commentLeft:" ",commentRight:" ",semicolon:!1};function AT(n){return n[0].toUpperCase()+n.slice(1)}let Vh=class{constructor(e){this.builder=e}stringify(e,t){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,t)}document(e){this.body(e)}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}comment(e){let t=this.raw(e,"left","commentLeft"),r=this.raw(e,"right","commentRight");this.builder("/*"+t+e.text+r+"*/",e)}decl(e,t){let r=this.raw(e,"between","colon"),i=e.prop+r+this.rawValue(e,"value");e.important&&(i+=e.raws.important||" !important"),t&&(i+=";"),this.builder(i,e)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}atrule(e,t){let r="@"+e.name,i=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?r+=e.raws.afterName:i&&(r+=" "),e.nodes)this.block(e,r+i);else{let s=(e.raws.between||"")+(t?";":"");this.builder(r+i+s,e)}}body(e){let t=e.nodes.length-1;for(;t>0&&e.nodes[t].type==="comment";)t-=1;let r=this.raw(e,"semicolon");for(let i=0;i<e.nodes.length;i++){let s=e.nodes[i],o=this.raw(s,"before");o&&this.builder(o),this.stringify(s,t!==i||r)}}block(e,t){let r=this.raw(e,"between","beforeOpen");this.builder(t+r+"{",e,"start");let i;e.nodes&&e.nodes.length?(this.body(e),i=this.raw(e,"after")):i=this.raw(e,"after","emptyBody"),i&&this.builder(i),this.builder("}",e,"end")}raw(e,t,r){let i;if(r||(r=t),t&&(i=e.raws[t],typeof i<"u"))return i;let s=e.parent;if(r==="before"&&(!s||s.type==="root"&&s.first===e||s&&s.type==="document"))return"";if(!s)return mg[r];let o=e.root();if(o.rawCache||(o.rawCache={}),typeof o.rawCache[r]<"u")return o.rawCache[r];if(r==="before"||r==="after")return this.beforeAfter(e,r);{let a="raw"+AT(r);this[a]?i=this[a](o,e):o.walk(l=>{if(i=l.raws[t],typeof i<"u")return!1})}return typeof i>"u"&&(i=mg[r]),o.rawCache[r]=i,i}rawSemicolon(e){let t;return e.walk(r=>{if(r.nodes&&r.nodes.length&&r.last.type==="decl"&&(t=r.raws.semicolon,typeof t<"u"))return!1}),t}rawEmptyBody(e){let t;return e.walk(r=>{if(r.nodes&&r.nodes.length===0&&(t=r.raws.after,typeof t<"u"))return!1}),t}rawIndent(e){if(e.raws.indent)return e.raws.indent;let t;return e.walk(r=>{let i=r.parent;if(i&&i!==e&&i.parent&&i.parent===e&&typeof r.raws.before<"u"){let s=r.raws.before.split(`
`);return t=s[s.length-1],t=t.replace(/\S/g,""),!1}}),t}rawBeforeComment(e,t){let r;return e.walkComments(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(t,null,"beforeDecl"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeDecl(e,t){let r;return e.walkDecls(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(t,null,"beforeRule"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeRule(e){let t;return e.walk(r=>{if(r.nodes&&(r.parent!==e||e.first!==r)&&typeof r.raws.before<"u")return t=r.raws.before,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeClose(e){let t;return e.walk(r=>{if(r.nodes&&r.nodes.length>0&&typeof r.raws.after<"u")return t=r.raws.after,t.includes(`
`)&&(t=t.replace(/[^\n]+$/,"")),!1}),t&&(t=t.replace(/\S/g,"")),t}rawBeforeOpen(e){let t;return e.walk(r=>{if(r.type!=="decl"&&(t=r.raws.between,typeof t<"u"))return!1}),t}rawColon(e){let t;return e.walkDecls(r=>{if(typeof r.raws.between<"u")return t=r.raws.between.replace(/[^\s:]/g,""),!1}),t}beforeAfter(e,t){let r;e.type==="decl"?r=this.raw(e,null,"beforeDecl"):e.type==="comment"?r=this.raw(e,null,"beforeComment"):t==="before"?r=this.raw(e,null,"beforeRule"):r=this.raw(e,null,"beforeClose");let i=e.parent,s=0;for(;i&&i.type!=="root";)s+=1,i=i.parent;if(r.includes(`
`)){let o=this.raw(e,null,"indent");if(o.length)for(let a=0;a<s;a++)r+=o}return r}rawValue(e,t){let r=e[t],i=e.raws[t];return i&&i.value===r?i.raw:r}};var D0=Vh;Vh.default=Vh;let CT=D0;function Bh(n,e){new CT(e).stringify(n)}var zc=Bh;Bh.default=Bh;let{isClean:il,my:kT}=xa,RT=wf,OT=D0,DT=zc;function zh(n,e){let t=new n.constructor;for(let r in n){if(!Object.prototype.hasOwnProperty.call(n,r)||r==="proxyCache")continue;let i=n[r],s=typeof i;r==="parent"&&s==="object"?e&&(t[r]=e):r==="source"?t[r]=i:Array.isArray(i)?t[r]=i.map(o=>zh(o,t)):(s==="object"&&i!==null&&(i=zh(i)),t[r]=i)}return t}let qh=class{constructor(e={}){this.raws={},this[il]=!1,this[kT]=!0;for(let t in e)if(t==="nodes"){this.nodes=[];for(let r of e[t])typeof r.clone=="function"?this.append(r.clone()):this.append(r)}else this[t]=e[t]}error(e,t={}){if(this.source){let{start:r,end:i}=this.rangeBy(t);return this.source.input.error(e,{line:r.line,column:r.column},{line:i.line,column:i.column},t)}return new RT(e)}warn(e,t,r){let i={node:this};for(let s in r)i[s]=r[s];return e.warn(t,i)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}toString(e=DT){e.stringify&&(e=e.stringify);let t="";return e(this,r=>{t+=r}),t}assign(e={}){for(let t in e)this[t]=e[t];return this}clone(e={}){let t=zh(this);for(let r in e)t[r]=e[r];return t}cloneBefore(e={}){let t=this.clone(e);return this.parent.insertBefore(this,t),t}cloneAfter(e={}){let t=this.clone(e);return this.parent.insertAfter(this,t),t}replaceWith(...e){if(this.parent){let t=this,r=!1;for(let i of e)i===this?r=!0:r?(this.parent.insertAfter(t,i),t=i):this.parent.insertBefore(t,i);r||this.remove()}return this}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}before(e){return this.parent.insertBefore(this,e),this}after(e){return this.parent.insertAfter(this,e),this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}raw(e,t){return new OT().raw(this,e,t)}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}toJSON(e,t){let r={},i=t==null;t=t||new Map;let s=0;for(let o in this){if(!Object.prototype.hasOwnProperty.call(this,o)||o==="parent"||o==="proxyCache")continue;let a=this[o];if(Array.isArray(a))r[o]=a.map(l=>typeof l=="object"&&l.toJSON?l.toJSON(null,t):l);else if(typeof a=="object"&&a.toJSON)r[o]=a.toJSON(null,t);else if(o==="source"){let l=t.get(a.input);l==null&&(l=s,t.set(a.input,s),s++),r[o]={inputId:l,start:a.start,end:a.end}}else r[o]=a}return i&&(r.inputs=[...t.keys()].map(o=>o.toJSON())),r}positionInside(e){let t=this.toString(),r=this.source.start.column,i=this.source.start.line;for(let s=0;s<e;s++)t[s]===`
`?(r=1,i+=1):r+=1;return{line:i,column:r}}positionBy(e){let t=this.source.start;if(e.index)t=this.positionInside(e.index);else if(e.word){let r=this.toString().indexOf(e.word);r!==-1&&(t=this.positionInside(r))}return t}rangeBy(e){let t={line:this.source.start.line,column:this.source.start.column},r=this.source.end?{line:this.source.end.line,column:this.source.end.column+1}:{line:t.line,column:t.column+1};if(e.word){let i=this.toString().indexOf(e.word);i!==-1&&(t=this.positionInside(i),r=this.positionInside(i+e.word.length))}else e.start?t={line:e.start.line,column:e.start.column}:e.index&&(t=this.positionInside(e.index)),e.end?r={line:e.end.line,column:e.end.column}:e.endIndex?r=this.positionInside(e.endIndex):e.index&&(r=this.positionInside(e.index+1));return(r.line<t.line||r.line===t.line&&r.column<=t.column)&&(r={line:t.line,column:t.column+1}),{start:t,end:r}}getProxyProcessor(){return{set(e,t,r){return e[t]===r||(e[t]=r,(t==="prop"||t==="value"||t==="name"||t==="params"||t==="important"||t==="text")&&e.markDirty()),!0},get(e,t){return t==="proxyOf"?e:t==="root"?()=>e.root().toProxy():e[t]}}}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let t=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${t.input.from}:${t.start.line}:${t.start.column}$&`)}return e}markDirty(){if(this[il]){this[il]=!1;let e=this;for(;e=e.parent;)e[il]=!1}}get proxyOf(){return this}};var qc=qh;qh.default=qh;let PT=qc,Hh=class extends PT{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var Hc=Hh;Hh.default=Hh;let NT="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",MT=(n,e=21)=>(t=e)=>{let r="",i=t;for(;i--;)r+=n[Math.random()*n.length|0];return r},LT=(n=21)=>{let e="",t=n;for(;t--;)e+=NT[Math.random()*64|0];return e};var jT={nanoid:LT,customAlphabet:MT};let{SourceMapConsumer:gg,SourceMapGenerator:yg}=mn,{existsSync:FT,readFileSync:$T}=mn,{dirname:Yu,join:UT}=mn;function VT(n){return Buffer?Buffer.from(n,"base64").toString():window.atob(n)}let Gh=class{constructor(e,t){if(t.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let r=t.map?t.map.prev:void 0,i=this.loadMap(t.from,r);!this.mapFile&&t.from&&(this.mapFile=t.from),this.mapFile&&(this.root=Yu(this.mapFile)),i&&(this.text=i)}consumer(){return this.consumerCache||(this.consumerCache=new gg(this.text)),this.consumerCache}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}startWith(e,t){return e?e.substr(0,t.length)===t:!1}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}loadAnnotation(e){let t=e.match(/\/\*\s*# sourceMappingURL=/gm);if(!t)return;let r=e.lastIndexOf(t.pop()),i=e.indexOf("*/",r);r>-1&&i>-1&&(this.annotation=this.getAnnotationURL(e.substring(r,i)))}decodeInline(e){let t=/^data:application\/json;charset=utf-?8;base64,/,r=/^data:application\/json;base64,/,i=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/;if(i.test(e)||s.test(e))return decodeURIComponent(e.substr(RegExp.lastMatch.length));if(t.test(e)||r.test(e))return VT(e.substr(RegExp.lastMatch.length));let o=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+o)}loadFile(e){if(this.root=Yu(e),FT(e))return this.mapFile=e,$T(e,"utf-8").toString().trim()}loadMap(e,t){if(t===!1)return!1;if(t){if(typeof t=="string")return t;if(typeof t=="function"){let r=t(e);if(r){let i=this.loadFile(r);if(!i)throw new Error("Unable to load previous source map: "+r.toString());return i}}else{if(t instanceof gg)return yg.fromSourceMap(t).toString();if(t instanceof yg)return t.toString();if(this.isMap(t))return JSON.stringify(t);throw new Error("Unsupported previous source map format: "+t.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let r=this.annotation;return e&&(r=UT(Yu(e),r)),this.loadFile(r)}}}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}};var P0=Gh;Gh.default=Gh;let{SourceMapConsumer:BT,SourceMapGenerator:zT}=mn,{fileURLToPath:vg,pathToFileURL:sl}=mn,{resolve:Kh,isAbsolute:Wh}=mn,{nanoid:qT}=jT,Ju=mn,wg=wf,HT=P0,Xu=Symbol("fromOffsetCache"),GT=Boolean(BT&&zT),_g=Boolean(Kh&&Wh),Xl=class{constructor(e,t={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,t.from&&(!_g||/^\w+:\/\//.test(t.from)||Wh(t.from)?this.file=t.from:this.file=Kh(t.from)),_g&&GT){let r=new HT(this.css,t);if(r.text){this.map=r;let i=r.consumer().file;!this.file&&i&&(this.file=this.mapResolve(i))}}this.file||(this.id="<input css "+qT(6)+">"),this.map&&(this.map.file=this.from)}fromOffset(e){let t,r;if(this[Xu])r=this[Xu];else{let s=this.css.split(`
`);r=new Array(s.length);let o=0;for(let a=0,l=s.length;a<l;a++)r[a]=o,o+=s[a].length+1;this[Xu]=r}t=r[r.length-1];let i=0;if(e>=t)i=r.length-1;else{let s=r.length-2,o;for(;i<s;)if(o=i+(s-i>>1),e<r[o])s=o-1;else if(e>=r[o+1])i=o+1;else{i=o;break}}return{line:i+1,col:e-r[i]+1}}error(e,t,r,i={}){let s,o,a;if(t&&typeof t=="object"){let c=t,u=r;if(typeof c.offset=="number"){let h=this.fromOffset(c.offset);t=h.line,r=h.col}else t=c.line,r=c.column;if(typeof u.offset=="number"){let h=this.fromOffset(u.offset);o=h.line,a=h.col}else o=u.line,a=u.column}else if(!r){let c=this.fromOffset(t);t=c.line,r=c.col}let l=this.origin(t,r,o,a);return l?s=new wg(e,l.endLine===void 0?l.line:{line:l.line,column:l.column},l.endLine===void 0?l.column:{line:l.endLine,column:l.endColumn},l.source,l.file,i.plugin):s=new wg(e,o===void 0?t:{line:t,column:r},o===void 0?r:{line:o,column:a},this.css,this.file,i.plugin),s.input={line:t,column:r,endLine:o,endColumn:a,source:this.css},this.file&&(sl&&(s.input.url=sl(this.file).toString()),s.input.file=this.file),s}origin(e,t,r,i){if(!this.map)return!1;let s=this.map.consumer(),o=s.originalPositionFor({line:e,column:t});if(!o.source)return!1;let a;typeof r=="number"&&(a=s.originalPositionFor({line:r,column:i}));let l;Wh(o.source)?l=sl(o.source):l=new URL(o.source,this.map.consumer().sourceRoot||sl(this.map.mapFile));let c={url:l.toString(),line:o.line,column:o.column,endLine:a&&a.line,endColumn:a&&a.column};if(l.protocol==="file:")if(vg)c.file=vg(l);else throw new Error("file: protocol is not available in this PostCSS build");let u=s.sourceContentFor(o.source);return u&&(c.source=u),c}mapResolve(e){return/^\w+:\/\//.test(e)?e:Kh(this.map.consumer().sourceRoot||this.map.root||".",e)}get from(){return this.file||this.id}toJSON(){let e={};for(let t of["hasBOM","css","file","id"])this[t]!=null&&(e[t]=this[t]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}};var Gc=Xl;Xl.default=Xl;Ju&&Ju.registerInput&&Ju.registerInput(Xl);let{SourceMapConsumer:N0,SourceMapGenerator:Dl}=mn,{dirname:Pl,resolve:M0,relative:L0,sep:j0}=mn,{pathToFileURL:bg}=mn,KT=Gc,WT=Boolean(N0&&Dl),QT=Boolean(Pl&&M0&&L0&&j0),YT=class{constructor(e,t,r,i){this.stringify=e,this.mapOpts=r.map||{},this.root=t,this.opts=r,this.css=i,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let t=e.source.input.map;this.previousMaps.includes(t)||this.previousMaps.push(t)}});else{let e=new KT(this.css,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(t=>t.inline):!0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let t=this.root.nodes.length-1;t>=0;t--)e=this.root.nodes[t],e.type==="comment"&&e.text.indexOf("# sourceMappingURL=")===0&&this.root.removeChild(t)}else this.css&&(this.css=this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm,""))}setSourcesContent(){let e={};if(this.root)this.root.walk(t=>{if(t.source){let r=t.source.input.from;if(r&&!e[r]){e[r]=!0;let i=this.usesFileUrls?this.toFileUrl(r):this.toUrl(this.path(r));this.map.setSourceContent(i,t.source.input.css)}}});else if(this.css){let t=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(t,this.css)}}applyPrevMaps(){for(let e of this.previous()){let t=this.toUrl(this.path(e.file)),r=e.root||Pl(e.file),i;this.mapOpts.sourcesContent===!1?(i=new N0(e.text),i.sourcesContent&&(i.sourcesContent=i.sourcesContent.map(()=>null))):i=e.consumer(),this.map.applySourceMap(i,t,this.toUrl(this.path(r)))}}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let t=`
`;this.css.includes(`\r
`)&&(t=`\r
`),this.css+=t+"/*# sourceMappingURL="+e+" */"}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=Dl.fromSourceMap(e)}else this.map=new Dl({file:this.outputFile()}),this.map.addMapping({source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>",generated:{line:1,column:0},original:{line:1,column:0}});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}path(e){if(e.indexOf("<")===0||/^\w+:\/\//.test(e)||this.mapOpts.absolute)return e;let t=this.opts.to?Pl(this.opts.to):".";return typeof this.mapOpts.annotation=="string"&&(t=Pl(M0(t,this.mapOpts.annotation))),e=L0(t,e),e}toUrl(e){return j0==="\\"&&(e=e.replace(/\\/g,"/")),encodeURI(e).replace(/[#?]/g,encodeURIComponent)}toFileUrl(e){if(bg)return bg(e).toString();throw new Error("`map.absolute` option is not available in this PostCSS build")}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}generateString(){this.css="",this.map=new Dl({file:this.outputFile()});let e=1,t=1,r="<no source>",i={source:"",generated:{line:0,column:0},original:{line:0,column:0}},s,o;this.stringify(this.root,(a,l,c)=>{if(this.css+=a,l&&c!=="end"&&(i.generated.line=e,i.generated.column=t-1,l.source&&l.source.start?(i.source=this.sourcePath(l),i.original.line=l.source.start.line,i.original.column=l.source.start.column-1,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,this.map.addMapping(i))),s=a.match(/\n/g),s?(e+=s.length,o=a.lastIndexOf(`
`),t=a.length-o):t+=a.length,l&&c!=="start"){let u=l.parent||{raws:{}};(!(l.type==="decl"||l.type==="atrule"&&!l.nodes)||l!==u.last||u.raws.semicolon)&&(l.source&&l.source.end?(i.source=this.sourcePath(l),i.original.line=l.source.end.line,i.original.column=l.source.end.column-1,i.generated.line=e,i.generated.column=t-2,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,i.generated.line=e,i.generated.column=t-1,this.map.addMapping(i)))}})}generate(){if(this.clearAnnotation(),QT&&WT&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,t=>{e+=t}),[e]}}};var F0=YT;let JT=qc,Qh=class extends JT{constructor(e){super(e),this.type="comment"}};var Kc=Qh;Qh.default=Qh;let{isClean:$0,my:U0}=xa,V0=Hc,B0=Kc,XT=qc,z0,_f,bf,q0;function H0(n){return n.map(e=>(e.nodes&&(e.nodes=H0(e.nodes)),delete e.source,e))}function G0(n){if(n[$0]=!1,n.proxyOf.nodes)for(let e of n.proxyOf.nodes)G0(e)}let Yn=class K0 extends XT{push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}each(e){if(!this.proxyOf.nodes)return;let t=this.getIterator(),r,i;for(;this.indexes[t]<this.proxyOf.nodes.length&&(r=this.indexes[t],i=e(this.proxyOf.nodes[r],r),i!==!1);)this.indexes[t]+=1;return delete this.indexes[t],i}walk(e){return this.each((t,r)=>{let i;try{i=e(t,r)}catch(s){throw t.addToError(s)}return i!==!1&&t.walk&&(i=t.walk(e)),i})}walkDecls(e,t){return t?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="decl"&&e.test(r.prop))return t(r,i)}):this.walk((r,i)=>{if(r.type==="decl"&&r.prop===e)return t(r,i)}):(t=e,this.walk((r,i)=>{if(r.type==="decl")return t(r,i)}))}walkRules(e,t){return t?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="rule"&&e.test(r.selector))return t(r,i)}):this.walk((r,i)=>{if(r.type==="rule"&&r.selector===e)return t(r,i)}):(t=e,this.walk((r,i)=>{if(r.type==="rule")return t(r,i)}))}walkAtRules(e,t){return t?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="atrule"&&e.test(r.name))return t(r,i)}):this.walk((r,i)=>{if(r.type==="atrule"&&r.name===e)return t(r,i)}):(t=e,this.walk((r,i)=>{if(r.type==="atrule")return t(r,i)}))}walkComments(e){return this.walk((t,r)=>{if(t.type==="comment")return e(t,r)})}append(...e){for(let t of e){let r=this.normalize(t,this.last);for(let i of r)this.proxyOf.nodes.push(i)}return this.markDirty(),this}prepend(...e){e=e.reverse();for(let t of e){let r=this.normalize(t,this.first,"prepend").reverse();for(let i of r)this.proxyOf.nodes.unshift(i);for(let i in this.indexes)this.indexes[i]=this.indexes[i]+r.length}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let t of this.nodes)t.cleanRaws(e)}insertBefore(e,t){let r=this.index(e),i=r===0?"prepend":!1,s=this.normalize(t,this.proxyOf.nodes[r],i).reverse();r=this.index(e);for(let a of s)this.proxyOf.nodes.splice(r,0,a);let o;for(let a in this.indexes)o=this.indexes[a],r<=o&&(this.indexes[a]=o+s.length);return this.markDirty(),this}insertAfter(e,t){let r=this.index(e),i=this.normalize(t,this.proxyOf.nodes[r]).reverse();r=this.index(e);for(let o of i)this.proxyOf.nodes.splice(r+1,0,o);let s;for(let o in this.indexes)s=this.indexes[o],r<s&&(this.indexes[o]=s+i.length);return this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let t;for(let r in this.indexes)t=this.indexes[r],t>=e&&(this.indexes[r]=t-1);return this.markDirty(),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}replaceValues(e,t,r){return r||(r=t,t={}),this.walkDecls(i=>{t.props&&!t.props.includes(i.prop)||t.fast&&!i.value.includes(t.fast)||(i.value=i.value.replace(e,r))}),this.markDirty(),this}every(e){return this.nodes.every(e)}some(e){return this.nodes.some(e)}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}normalize(e,t){if(typeof e=="string")e=H0(z0(e).nodes);else if(Array.isArray(e)){e=e.slice(0);for(let i of e)i.parent&&i.parent.removeChild(i,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let i of e)i.parent&&i.parent.removeChild(i,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new V0(e)]}else if(e.selector)e=[new _f(e)];else if(e.name)e=[new bf(e)];else if(e.text)e=[new B0(e)];else throw new Error("Unknown node type in node creation");return e.map(i=>(i[U0]||K0.rebuild(i),i=i.proxyOf,i.parent&&i.parent.removeChild(i),i[$0]&&G0(i),typeof i.raws.before>"u"&&t&&typeof t.raws.before<"u"&&(i.raws.before=t.raws.before.replace(/\S/g,"")),i.parent=this.proxyOf,i))}getProxyProcessor(){return{set(e,t,r){return e[t]===r||(e[t]=r,(t==="name"||t==="params"||t==="selector")&&e.markDirty()),!0},get(e,t){return t==="proxyOf"?e:e[t]?t==="each"||typeof t=="string"&&t.startsWith("walk")?(...r)=>e[t](...r.map(i=>typeof i=="function"?(s,o)=>i(s.toProxy(),o):i)):t==="every"||t==="some"?r=>e[t]((i,...s)=>r(i.toProxy(),...s)):t==="root"?()=>e.root().toProxy():t==="nodes"?e.nodes.map(r=>r.toProxy()):t==="first"||t==="last"?e[t].toProxy():e[t]:e[t]}}}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}};Yn.registerParse=n=>{z0=n};Yn.registerRule=n=>{_f=n};Yn.registerAtRule=n=>{bf=n};Yn.registerRoot=n=>{q0=n};var Ri=Yn;Yn.default=Yn;Yn.rebuild=n=>{n.type==="atrule"?Object.setPrototypeOf(n,bf.prototype):n.type==="rule"?Object.setPrototypeOf(n,_f.prototype):n.type==="decl"?Object.setPrototypeOf(n,V0.prototype):n.type==="comment"?Object.setPrototypeOf(n,B0.prototype):n.type==="root"&&Object.setPrototypeOf(n,q0.prototype),n[U0]=!0,n.nodes&&n.nodes.forEach(e=>{Yn.rebuild(e)})};let ZT=Ri,W0,Q0,Go=class extends ZT{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new W0(new Q0,this,e).stringify()}};Go.registerLazyResult=n=>{W0=n};Go.registerProcessor=n=>{Q0=n};var If=Go;Go.default=Go;let Yh=class{constructor(e,t={}){if(this.type="warning",this.text=e,t.node&&t.node.source){let r=t.node.rangeBy(t);this.line=r.start.line,this.column=r.start.column,this.endLine=r.end.line,this.endColumn=r.end.column}for(let r in t)this[r]=t[r]}toString(){return this.node?this.node.error(this.text,{plugin:this.plugin,index:this.index,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var Y0=Yh;Yh.default=Yh;let eS=Y0,Jh=class{constructor(e,t,r){this.processor=e,this.messages=[],this.root=t,this.opts=r,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,t={}){t.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(t.plugin=this.lastPlugin.postcssPlugin);let r=new eS(e,t);return this.messages.push(r),r}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};var xf=Jh;Jh.default=Jh;const Zu="'".charCodeAt(0),Ig='"'.charCodeAt(0),ol="\\".charCodeAt(0),xg="/".charCodeAt(0),al=`
`.charCodeAt(0),ro=" ".charCodeAt(0),ll="\f".charCodeAt(0),cl="	".charCodeAt(0),ul="\r".charCodeAt(0),tS="[".charCodeAt(0),nS="]".charCodeAt(0),rS="(".charCodeAt(0),iS=")".charCodeAt(0),sS="{".charCodeAt(0),oS="}".charCodeAt(0),aS=";".charCodeAt(0),lS="*".charCodeAt(0),cS=":".charCodeAt(0),uS="@".charCodeAt(0),hl=/[\t\n\f\r "#'()/;[\\\]{}]/g,dl=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,hS=/.[\n"'(/\\]/,Eg=/[\da-f]/i;var dS=function(e,t={}){let r=e.css.valueOf(),i=t.ignoreErrors,s,o,a,l,c,u,h,d,f,p,g=r.length,y=0,w=[],I=[];function _(){return y}function P(ee){throw e.error("Unclosed "+ee,y)}function B(){return I.length===0&&y>=g}function U(ee){if(I.length)return I.pop();if(y>=g)return;let $e=ee?ee.ignoreUnclosed:!1;switch(s=r.charCodeAt(y),s){case al:case ro:case cl:case ul:case ll:{o=y;do o+=1,s=r.charCodeAt(o);while(s===ro||s===al||s===cl||s===ul||s===ll);p=["space",r.slice(y,o)],y=o-1;break}case tS:case nS:case sS:case oS:case cS:case aS:case iS:{let ft=String.fromCharCode(s);p=[ft,ft,y];break}case rS:{if(d=w.length?w.pop()[1]:"",f=r.charCodeAt(y+1),d==="url"&&f!==Zu&&f!==Ig&&f!==ro&&f!==al&&f!==cl&&f!==ll&&f!==ul){o=y;do{if(u=!1,o=r.indexOf(")",o+1),o===-1)if(i||$e){o=y;break}else P("bracket");for(h=o;r.charCodeAt(h-1)===ol;)h-=1,u=!u}while(u);p=["brackets",r.slice(y,o+1),y,o],y=o}else o=r.indexOf(")",y+1),l=r.slice(y,o+1),o===-1||hS.test(l)?p=["(","(",y]:(p=["brackets",l,y,o],y=o);break}case Zu:case Ig:{a=s===Zu?"'":'"',o=y;do{if(u=!1,o=r.indexOf(a,o+1),o===-1)if(i||$e){o=y+1;break}else P("string");for(h=o;r.charCodeAt(h-1)===ol;)h-=1,u=!u}while(u);p=["string",r.slice(y,o+1),y,o],y=o;break}case uS:{hl.lastIndex=y+1,hl.test(r),hl.lastIndex===0?o=r.length-1:o=hl.lastIndex-2,p=["at-word",r.slice(y,o+1),y,o],y=o;break}case ol:{for(o=y,c=!0;r.charCodeAt(o+1)===ol;)o+=1,c=!c;if(s=r.charCodeAt(o+1),c&&s!==xg&&s!==ro&&s!==al&&s!==cl&&s!==ul&&s!==ll&&(o+=1,Eg.test(r.charAt(o)))){for(;Eg.test(r.charAt(o+1));)o+=1;r.charCodeAt(o+1)===ro&&(o+=1)}p=["word",r.slice(y,o+1),y,o],y=o;break}default:{s===xg&&r.charCodeAt(y+1)===lS?(o=r.indexOf("*/",y+2)+1,o===0&&(i||$e?o=r.length:P("comment")),p=["comment",r.slice(y,o+1),y,o],y=o):(dl.lastIndex=y+1,dl.test(r),dl.lastIndex===0?o=r.length-1:o=dl.lastIndex-2,p=["word",r.slice(y,o+1),y,o],w.push(p),y=o);break}}return y++,p}function Q(ee){I.push(ee)}return{back:Q,nextToken:U,endOfFile:B,position:_}};let J0=Ri,Zl=class extends J0{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};var Ef=Zl;Zl.default=Zl;J0.registerAtRule(Zl);let X0=Ri,Z0,ev,gs=class extends X0{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}removeChild(e,t){let r=this.index(e);return!t&&r===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[r].raws.before),super.removeChild(e)}normalize(e,t,r){let i=super.normalize(e);if(t){if(r==="prepend")this.nodes.length>1?t.raws.before=this.nodes[1].raws.before:delete t.raws.before;else if(this.first!==t)for(let s of i)s.raws.before=t.raws.before}return i}toResult(e={}){return new Z0(new ev,this,e).stringify()}};gs.registerLazyResult=n=>{Z0=n};gs.registerProcessor=n=>{ev=n};var Ea=gs;gs.default=gs;X0.registerRoot(gs);let Ko={split(n,e,t){let r=[],i="",s=!1,o=0,a=!1,l="",c=!1;for(let u of n)c?c=!1:u==="\\"?c=!0:a?u===l&&(a=!1):u==='"'||u==="'"?(a=!0,l=u):u==="("?o+=1:u===")"?o>0&&(o-=1):o===0&&e.includes(u)&&(s=!0),s?(i!==""&&r.push(i.trim()),i="",s=!1):i+=u;return(t||i!=="")&&r.push(i.trim()),r},space(n){let e=[" ",`
`,"	"];return Ko.split(n,e)},comma(n){return Ko.split(n,[","],!0)}};var tv=Ko;Ko.default=Ko;let nv=Ri,fS=tv,ec=class extends nv{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return fS.comma(this.selector)}set selectors(e){let t=this.selector?this.selector.match(/,\s*/):null,r=t?t[0]:","+this.raw("between","beforeOpen");this.selector=e.join(r)}};var Tf=ec;ec.default=ec;nv.registerRule(ec);let pS=Hc,mS=dS,gS=Kc,yS=Ef,vS=Ea,Tg=Tf;const Sg={empty:!0,space:!0};function wS(n){for(let e=n.length-1;e>=0;e--){let t=n[e],r=t[3]||t[2];if(r)return r}}let _S=class{constructor(e){this.input=e,this.root=new vS,this.current=this.root,this.spaces="",this.semicolon=!1,this.customProperty=!1,this.createTokenizer(),this.root.source={input:e,start:{offset:0,line:1,column:1}}}createTokenizer(){this.tokenizer=mS(this.input)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}comment(e){let t=new gS;this.init(t,e[2]),t.source.end=this.getPosition(e[3]||e[2]);let r=e[1].slice(2,-2);if(/^\s*$/.test(r))t.text="",t.raws.left=r,t.raws.right="";else{let i=r.match(/^(\s*)([^]*\S)(\s*)$/);t.text=i[2],t.raws.left=i[1],t.raws.right=i[3]}}emptyRule(e){let t=new Tg;this.init(t,e[2]),t.selector="",t.raws.between="",this.current=t}other(e){let t=!1,r=null,i=!1,s=null,o=[],a=e[1].startsWith("--"),l=[],c=e;for(;c;){if(r=c[0],l.push(c),r==="("||r==="[")s||(s=c),o.push(r==="("?")":"]");else if(a&&i&&r==="{")s||(s=c),o.push("}");else if(o.length===0)if(r===";")if(i){this.decl(l,a);return}else break;else if(r==="{"){this.rule(l);return}else if(r==="}"){this.tokenizer.back(l.pop()),t=!0;break}else r===":"&&(i=!0);else r===o[o.length-1]&&(o.pop(),o.length===0&&(s=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(t=!0),o.length>0&&this.unclosedBracket(s),t&&i){if(!a)for(;l.length&&(c=l[l.length-1][0],!(c!=="space"&&c!=="comment"));)this.tokenizer.back(l.pop());this.decl(l,a)}else this.unknownWord(l)}rule(e){e.pop();let t=new Tg;this.init(t,e[0][2]),t.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(t,"selector",e),this.current=t}decl(e,t){let r=new pS;this.init(r,e[0][2]);let i=e[e.length-1];for(i[0]===";"&&(this.semicolon=!0,e.pop()),r.source.end=this.getPosition(i[3]||i[2]||wS(e));e[0][0]!=="word";)e.length===1&&this.unknownWord(e),r.raws.before+=e.shift()[1];for(r.source.start=this.getPosition(e[0][2]),r.prop="";e.length;){let c=e[0][0];if(c===":"||c==="space"||c==="comment")break;r.prop+=e.shift()[1]}r.raws.between="";let s;for(;e.length;)if(s=e.shift(),s[0]===":"){r.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),r.raws.between+=s[1];(r.prop[0]==="_"||r.prop[0]==="*")&&(r.raws.before+=r.prop[0],r.prop=r.prop.slice(1));let o=[],a;for(;e.length&&(a=e[0][0],!(a!=="space"&&a!=="comment"));)o.push(e.shift());this.precheckMissedSemicolon(e);for(let c=e.length-1;c>=0;c--){if(s=e[c],s[1].toLowerCase()==="!important"){r.important=!0;let u=this.stringFrom(e,c);u=this.spacesFromEnd(e)+u,u!==" !important"&&(r.raws.important=u);break}else if(s[1].toLowerCase()==="important"){let u=e.slice(0),h="";for(let d=c;d>0;d--){let f=u[d][0];if(h.trim().indexOf("!")===0&&f!=="space")break;h=u.pop()[1]+h}h.trim().indexOf("!")===0&&(r.important=!0,r.raws.important=h,e=u)}if(s[0]!=="space"&&s[0]!=="comment")break}e.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(r.raws.between+=o.map(c=>c[1]).join(""),o=[]),this.raw(r,"value",o.concat(e),t),r.value.includes(":")&&!t&&this.checkMissedSemicolon(e)}atrule(e){let t=new yS;t.name=e[1].slice(1),t.name===""&&this.unnamedAtrule(t,e),this.init(t,e[2]);let r,i,s,o=!1,a=!1,l=[],c=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),r=e[0],r==="("||r==="["?c.push(r==="("?")":"]"):r==="{"&&c.length>0?c.push("}"):r===c[c.length-1]&&c.pop(),c.length===0)if(r===";"){t.source.end=this.getPosition(e[2]),this.semicolon=!0;break}else if(r==="{"){a=!0;break}else if(r==="}"){if(l.length>0){for(s=l.length-1,i=l[s];i&&i[0]==="space";)i=l[--s];i&&(t.source.end=this.getPosition(i[3]||i[2]))}this.end(e);break}else l.push(e);else l.push(e);if(this.tokenizer.endOfFile()){o=!0;break}}t.raws.between=this.spacesAndCommentsFromEnd(l),l.length?(t.raws.afterName=this.spacesAndCommentsFromStart(l),this.raw(t,"params",l),o&&(e=l[l.length-1],t.source.end=this.getPosition(e[3]||e[2]),this.spaces=t.raws.between,t.raws.between="")):(t.raws.afterName="",t.params=""),a&&(t.nodes=[],this.current=t)}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let t=this.current.nodes[this.current.nodes.length-1];t&&t.type==="rule"&&!t.raws.ownSemicolon&&(t.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let t=this.input.fromOffset(e);return{offset:e,line:t.line,column:t.col}}init(e,t){this.current.push(e),e.source={start:this.getPosition(t),input:this.input},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}raw(e,t,r,i){let s,o,a=r.length,l="",c=!0,u,h;for(let d=0;d<a;d+=1)s=r[d],o=s[0],o==="space"&&d===a-1&&!i?c=!1:o==="comment"?(h=r[d-1]?r[d-1][0]:"empty",u=r[d+1]?r[d+1][0]:"empty",!Sg[h]&&!Sg[u]?l.slice(-1)===","?c=!1:l+=s[1]:c=!1):l+=s[1];if(!c){let d=r.reduce((f,p)=>f+p[1],"");e.raws[t]={value:l,raw:d}}e[t]=l}spacesAndCommentsFromEnd(e){let t,r="";for(;e.length&&(t=e[e.length-1][0],!(t!=="space"&&t!=="comment"));)r=e.pop()[1]+r;return r}spacesAndCommentsFromStart(e){let t,r="";for(;e.length&&(t=e[0][0],!(t!=="space"&&t!=="comment"));)r+=e.shift()[1];return r}spacesFromEnd(e){let t,r="";for(;e.length&&(t=e[e.length-1][0],t==="space");)r=e.pop()[1]+r;return r}stringFrom(e,t){let r="";for(let i=t;i<e.length;i++)r+=e[i][1];return e.splice(t,e.length-t),r}colon(e){let t=0,r,i,s;for(let[o,a]of e.entries()){if(r=a,i=r[0],i==="("&&(t+=1),i===")"&&(t-=1),t===0&&i===":")if(!s)this.doubleColon(r);else{if(s[0]==="word"&&s[1]==="progid")continue;return o}s=r}return!1}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}unnamedAtrule(e,t){throw this.input.error("At-rule without name",{offset:t[2]},{offset:t[2]+t[1].length})}precheckMissedSemicolon(){}checkMissedSemicolon(e){let t=this.colon(e);if(t===!1)return;let r=0,i;for(let s=t-1;s>=0&&(i=e[s],!(i[0]!=="space"&&(r+=1,r===2)));s--);throw this.input.error("Missed semicolon",i[0]==="word"?i[3]+1:i[2])}};var bS=_S;let IS=Ri,xS=bS,ES=Gc;function tc(n,e){let t=new ES(n,e),r=new xS(t);try{r.parse()}catch(i){throw i}return r.root}var Sf=tc;tc.default=tc;IS.registerParse(tc);let{isClean:_n,my:TS}=xa,SS=F0,AS=zc,CS=Ri,kS=If,Ag=xf,RS=Sf,OS=Ea;const DS={document:"Document",root:"Root",atrule:"AtRule",rule:"Rule",decl:"Declaration",comment:"Comment"},PS={postcssPlugin:!0,prepare:!0,Once:!0,Document:!0,Root:!0,Declaration:!0,Rule:!0,AtRule:!0,Comment:!0,DeclarationExit:!0,RuleExit:!0,AtRuleExit:!0,CommentExit:!0,RootExit:!0,DocumentExit:!0,OnceExit:!0},NS={postcssPlugin:!0,prepare:!0,Once:!0},ys=0;function io(n){return typeof n=="object"&&typeof n.then=="function"}function rv(n){let e=!1,t=DS[n.type];return n.type==="decl"?e=n.prop.toLowerCase():n.type==="atrule"&&(e=n.name.toLowerCase()),e&&n.append?[t,t+"-"+e,ys,t+"Exit",t+"Exit-"+e]:e?[t,t+"-"+e,t+"Exit",t+"Exit-"+e]:n.append?[t,ys,t+"Exit"]:[t,t+"Exit"]}function Cg(n){let e;return n.type==="document"?e=["Document",ys,"DocumentExit"]:n.type==="root"?e=["Root",ys,"RootExit"]:e=rv(n),{node:n,events:e,eventIndex:0,visitors:[],visitorIndex:0,iterator:0}}function Xh(n){return n[_n]=!1,n.nodes&&n.nodes.forEach(e=>Xh(e)),n}let Zh={},vs=class iv{constructor(e,t,r){this.stringified=!1,this.processed=!1;let i;if(typeof t=="object"&&t!==null&&(t.type==="root"||t.type==="document"))i=Xh(t);else if(t instanceof iv||t instanceof Ag)i=Xh(t.root),t.map&&(typeof r.map>"u"&&(r.map={}),r.map.inline||(r.map.inline=!1),r.map.prev=t.map);else{let s=RS;r.syntax&&(s=r.syntax.parse),r.parser&&(s=r.parser),s.parse&&(s=s.parse);try{i=s(t,r)}catch(o){this.processed=!0,this.error=o}i&&!i[TS]&&CS.rebuild(i)}this.result=new Ag(e,i,r),this.helpers={...Zh,result:this.result,postcss:Zh},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}get[Symbol.toStringTag](){return"LazyResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.stringify().css}get content(){return this.stringify().content}get map(){return this.stringify().map}get root(){return this.sync().root}get messages(){return this.sync().messages}warnings(){return this.sync().warnings()}toString(){return this.css}then(e,t){return this.async().then(e,t)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let t=this.runOnRoot(e);if(io(t))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[_n];)e[_n]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let t of e.nodes)this.visitSync(this.listeners.OnceExit,t);else this.visitSync(this.listeners.OnceExit,e)}return this.result}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,t=AS;e.syntax&&(t=e.syntax.stringify),e.stringifier&&(t=e.stringifier),t.stringify&&(t=t.stringify);let i=new SS(t,this.result.root,this.result.opts).generate();return this.result.css=i[0],this.result.map=i[1],this.result}walkSync(e){e[_n]=!0;let t=rv(e);for(let r of t)if(r===ys)e.nodes&&e.each(i=>{i[_n]||this.walkSync(i)});else{let i=this.listeners[r];if(i&&this.visitSync(i,e.toProxy()))return}}visitSync(e,t){for(let[r,i]of e){this.result.lastPlugin=r;let s;try{s=i(t,this.helpers)}catch(o){throw this.handleError(o,t.proxyOf)}if(t.type!=="root"&&t.type!=="document"&&!t.parent)return!0;if(io(s))throw this.getAsyncError()}}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let t=this.result.root.nodes.map(r=>e.Once(r,this.helpers));return io(t[0])?Promise.all(t):t}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(t){throw this.handleError(t)}}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,t){let r=this.result.lastPlugin;try{t&&t.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=r.postcssPlugin,e.setMessage()):r.postcssVersion}catch(i){console&&console.error&&console.error(i)}return e}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let t=this.plugins[e],r=this.runOnRoot(t);if(io(r))try{await r}catch(i){throw this.handleError(i)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[_n];){e[_n]=!0;let t=[Cg(e)];for(;t.length>0;){let r=this.visitTick(t);if(io(r))try{await r}catch(i){let s=t[t.length-1].node;throw this.handleError(i,s)}}}if(this.listeners.OnceExit)for(let[t,r]of this.listeners.OnceExit){this.result.lastPlugin=t;try{if(e.type==="document"){let i=e.nodes.map(s=>r(s,this.helpers));await Promise.all(i)}else await r(e,this.helpers)}catch(i){throw this.handleError(i)}}}return this.processed=!0,this.stringify()}prepareVisitors(){this.listeners={};let e=(t,r,i)=>{this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push([t,i])};for(let t of this.plugins)if(typeof t=="object")for(let r in t){if(!PS[r]&&/^[A-Z]/.test(r))throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!NS[r])if(typeof t[r]=="object")for(let i in t[r])i==="*"?e(t,r,t[r][i]):e(t,r+"-"+i.toLowerCase(),t[r][i]);else typeof t[r]=="function"&&e(t,r,t[r])}this.hasListener=Object.keys(this.listeners).length>0}visitTick(e){let t=e[e.length-1],{node:r,visitors:i}=t;if(r.type!=="root"&&r.type!=="document"&&!r.parent){e.pop();return}if(i.length>0&&t.visitorIndex<i.length){let[o,a]=i[t.visitorIndex];t.visitorIndex+=1,t.visitorIndex===i.length&&(t.visitors=[],t.visitorIndex=0),this.result.lastPlugin=o;try{return a(r.toProxy(),this.helpers)}catch(l){throw this.handleError(l,r)}}if(t.iterator!==0){let o=t.iterator,a;for(;a=r.nodes[r.indexes[o]];)if(r.indexes[o]+=1,!a[_n]){a[_n]=!0,e.push(Cg(a));return}t.iterator=0,delete r.indexes[o]}let s=t.events;for(;t.eventIndex<s.length;){let o=s[t.eventIndex];if(t.eventIndex+=1,o===ys){r.nodes&&r.nodes.length&&(r[_n]=!0,t.iterator=r.getIterator());return}else if(this.listeners[o]){t.visitors=this.listeners[o];return}}e.pop()}};vs.registerPostcss=n=>{Zh=n};var sv=vs;vs.default=vs;OS.registerLazyResult(vs);kS.registerLazyResult(vs);let MS=F0,LS=zc,jS=Sf;const FS=xf;let ed=class{constructor(e,t,r){t=t.toString(),this.stringified=!1,this._processor=e,this._css=t,this._opts=r,this._map=void 0;let i,s=LS;this.result=new FS(this._processor,i,this._opts),this.result.css=t;let o=this;Object.defineProperty(this.result,"root",{get(){return o.root}});let a=new MS(s,i,this._opts,t);if(a.isMap()){let[l,c]=a.generate();l&&(this.result.css=l),c&&(this.result.map=c)}}get[Symbol.toStringTag](){return"NoWorkResult"}get processor(){return this.result.processor}get opts(){return this.result.opts}get css(){return this.result.css}get content(){return this.result.css}get map(){return this.result.map}get root(){if(this._root)return this._root;let e,t=jS;try{e=t(this._css,this._opts)}catch(r){this.error=r}if(this.error)throw this.error;return this._root=e,e}get messages(){return[]}warnings(){return[]}toString(){return this._css}then(e,t){return this.async().then(e,t)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}sync(){if(this.error)throw this.error;return this.result}};var $S=ed;ed.default=ed;let US=$S,VS=sv,BS=If,zS=Ea,Wo=class{constructor(e=[]){this.version="8.4.21",this.plugins=this.normalize(e)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}process(e,t={}){return this.plugins.length===0&&typeof t.parser>"u"&&typeof t.stringifier>"u"&&typeof t.syntax>"u"?new US(this,e,t):new VS(this,e,t)}normalize(e){let t=[];for(let r of e)if(r.postcss===!0?r=r():r.postcss&&(r=r.postcss),typeof r=="object"&&Array.isArray(r.plugins))t=t.concat(r.plugins);else if(typeof r=="object"&&r.postcssPlugin)t.push(r);else if(typeof r=="function")t.push(r);else if(!(typeof r=="object"&&(r.parse||r.stringify)))throw new Error(r+" is not a PostCSS plugin");return t}};var qS=Wo;Wo.default=Wo;zS.registerProcessor(Wo);BS.registerProcessor(Wo);let HS=Hc,GS=P0,KS=Kc,WS=Ef,QS=Gc,YS=Ea,JS=Tf;function Qo(n,e){if(Array.isArray(n))return n.map(i=>Qo(i));let{inputs:t,...r}=n;if(t){e=[];for(let i of t){let s={...i,__proto__:QS.prototype};s.map&&(s.map={...s.map,__proto__:GS.prototype}),e.push(s)}}if(r.nodes&&(r.nodes=n.nodes.map(i=>Qo(i,e))),r.source){let{inputId:i,...s}=r.source;r.source=s,i!=null&&(r.source.input=e[i])}if(r.type==="root")return new YS(r);if(r.type==="decl")return new HS(r);if(r.type==="rule")return new JS(r);if(r.type==="comment")return new KS(r);if(r.type==="atrule")return new WS(r);throw new Error("Unknown node type: "+n.type)}var XS=Qo;Qo.default=Qo;let ZS=wf,ov=Hc,eA=sv,tA=Ri,Af=qS,nA=zc,rA=XS,av=If,iA=Y0,lv=Kc,cv=Ef,sA=xf,oA=Gc,aA=Sf,lA=tv,uv=Tf,hv=Ea,cA=qc;function Ie(...n){return n.length===1&&Array.isArray(n[0])&&(n=n[0]),new Af(n)}Ie.plugin=function(e,t){let r=!1;function i(...o){console&&console.warn&&!r&&(r=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),{}.LANG&&{}.LANG.startsWith("cn")&&console.warn(e+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let a=t(...o);return a.postcssPlugin=e,a.postcssVersion=new Af().version,a}let s;return Object.defineProperty(i,"postcss",{get(){return s||(s=i()),s}}),i.process=function(o,a,l){return Ie([i(l)]).process(o,a)},i};Ie.stringify=nA;Ie.parse=aA;Ie.fromJSON=rA;Ie.list=lA;Ie.comment=n=>new lv(n);Ie.atRule=n=>new cv(n);Ie.decl=n=>new ov(n);Ie.rule=n=>new uv(n);Ie.root=n=>new hv(n);Ie.document=n=>new av(n);Ie.CssSyntaxError=ZS;Ie.Declaration=ov;Ie.Container=tA;Ie.Processor=Af;Ie.Document=av;Ie.Comment=lv;Ie.Warning=iA;Ie.AtRule=cv;Ie.Result=sA;Ie.Input=oA;Ie.Rule=uv;Ie.Root=hv;Ie.Node=cA;eA.registerPostcss(Ie);var Fe=Ie;Ie.default=Ie;Fe.stringify;Fe.fromJSON;Fe.plugin;Fe.parse;Fe.list;Fe.document;Fe.comment;Fe.atRule;Fe.rule;Fe.decl;Fe.root;Fe.CssSyntaxError;Fe.Declaration;Fe.Container;Fe.Processor;Fe.Document;Fe.Comment;Fe.Warning;Fe.AtRule;Fe.Result;Fe.Input;Fe.Rule;Fe.Root;Fe.Node;const gn=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},Oi=n=>(uf("data-v-60f9fb35"),n=n(),hf(),n),uA={class:"home-page tab-page"},hA=Oi(()=>E("h1",null,"建中數理資優班第39屆成果發表",-1)),dA=Oi(()=>E("h2",null,"(這裡將會放225 226團體照片)",-1)),fA={class:"event-info div-page"},pA=Oi(()=>E("h2",null,"(這裡要放成發標語)",-1)),mA=Oi(()=>E("h2",null,"舉辦時間",-1)),gA=Oi(()=>E("h2",null,"舉辦地點",-1)),yA=Oi(()=>E("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0972926964214!2d121.51011581643546!3d25.030772083973787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9483fb05b03%3A0xe2d4710b90afdf1a!2z6Ie65YyX5biC56uL5bu65ZyL6auY57Sa5Lit5a24!5e0!3m2!1szh-TW!2stw!4v1680545181231!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),vA=Oi(()=>E("h2",null,"活動宗旨與簡介",-1)),wA={__name:"Home",setup(n){const e="groupPhoto.jpg",t="2023年5月25&26日 (週四/五)",r="2:00 PM - 5:00 PM",i="100台北市中正區南海路56號",s="一定要來喔",o="待加入",a="https://goo.gl/maps/kWBUJyyp6iXVHmib8",l=ln("");function c(){console.log(`Email saved: ${l.value}`),l.value=""}return(u,h)=>(Ee(),Se("div",uA,[hA,E("div",{class:"group-photo div-page"},[dA,E("img",{src:e,alt:"Group Photo"})]),E("div",fA,[pA,E("div",{class:"time-location"},[E("div",{class:"event-time"},[mA,E("div",{class:"event-time-details"},[E("span",null,Me(t)+" | "+Me(r)),E("a",{href:o,target:"_blank",rel:"noopener"},"加入Google Calendar")])]),E("div",{class:"event-location"},[gA,E("div",{class:"event-location-details"},[E("span",null,Me(i)),E("a",{href:a,target:"_blank",rel:"noopener"},"在Google Maps上查看")])])]),yA,E("div",{class:"description"},[vA,E("p",null,Me(s))]),Vo(E("input",{class:"register-email","onUpdate:modelValue":h[0]||(h[0]=d=>l.value=d),type:"email",placeholder:"請輸入您的電子郵件地址"},null,512),[[qo,l.value]]),E("button",{onClick:c,class:"register-button"},"登記參加")])]))}},_A=gn(wA,[["__scopeId","data-v-60f9fb35"]]);const Di=n=>(uf("data-v-52213665"),n=n(),hf(),n),bA={class:"tab-page"},IA=Di(()=>E("h1",null,"About Us",-1)),xA=Di(()=>E("h2",null,"主題含意",-1)),EA=Di(()=>E("h2",null,"音樂MV",-1)),TA=Di(()=>E("iframe",{width:"640",height:"360",src:"https://www.youtube-nocookie.com/embed/z0jQZxH7NgM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1)),SA=Di(()=>E("h2",null,"邀請函",-1)),AA=Di(()=>E("p",null,"其實是這張啦(?)",-1)),CA={class:"team div-page"},kA=Di(()=>E("h2",null,"Team Member List",-1)),RA={class:"team-member-list"},OA={class:"team-member-photo"},DA=["src"],PA={class:"team-member-info"},NA={__name:"About",setup(n){const e="施工中...",t=[{id:1,name:"廖乃頡",position:"網管組組長1",intro:"寫程式語言所以是一類組",photo:"/team/liao.jpg"},{id:2,name:"程朗",position:"網管組組長2",intro:"朗神。",photo:"/team/cheng.jpg"},{id:3,name:"賴預期",position:"網管組組員",intro:"預期 與其",photo:"/team/lai.jpg"},{id:4,name:"謝秉宸",position:"非網管空降支援",intro:"超弱。",photo:"/team/xie.png"}],r="https://www.youtube.com/watch?v=dQw4w9WgXcQ",i="invitationLetter.png";return(s,o)=>(Ee(),Se("div",bA,[IA,E("div",{class:"theme div-page"},[xA,E("p",null,Me(e))]),E("div",{class:"music-mv div-page"},[EA,E("p",null,[xt(" 快來看看我們最新的成果發表主題曲: "),E("a",{href:r,target:"_blank"},"點擊我^^"),TA])]),E("div",{class:"invitation div-page"},[SA,AA,E("img",{src:i,alt:"Invitation Letter"})]),E("div",CA,[kA,E("div",RA,[(Ee(),Se(It,null,js(t,a=>E("div",{key:a.id,class:"team-member"},[E("div",OA,[E("img",{src:a.photo,alt:""},null,8,DA)]),E("div",PA,[E("h3",null,Me(a.name),1),E("p",null,Me(a.position),1),E("p",null,Me(a.intro),1)])])),64))])])]))}},MA=gn(NA,[["__scopeId","data-v-52213665"]]);const LA={},jA={class:"categories_bg"},FA=E("p",null,"Sorry, the Categories page is still under construction...",-1),$A=[FA];function UA(n,e){return Ee(),Se("div",jA,$A)}const VA=gn(LA,[["render",UA]]);const BA={},zA={class:"works_bg"},qA=E("p",null,"Sorry, the Works page is still under construction...",-1),HA=[qA];function GA(n,e){return Ee(),Se("div",zA,HA)}const KA=gn(BA,[["render",GA]]);const WA={data(){return{}}},QA={class:"tab-page schedule-pg"},YA=E("h1",null,"Schedule",-1),JA={class:"div-page"},XA={class:"div-page"},ZA={class:"div-page"},eC={class:"div-page"};function tC(n,e,t,r,i,s){const o=Qn("router-link");return Ee(),Se("div",QA,[YA,E("div",JA,[ve(o,{to:{name:"Day1-2F"},class:"sublink"},{default:Dt(()=>[xt("Day 1 | 夢紅樓 2F展演廳")]),_:1})]),E("div",XA,[ve(o,{to:{name:"Day1-4F"},class:"sublink"},{default:Dt(()=>[xt("Day 1 | 夢紅樓 4F國際會議廳")]),_:1})]),E("div",ZA,[ve(o,{to:{name:"Day2-2F"},class:"sublink"},{default:Dt(()=>[xt("Day 2 | 夢紅樓 2F展演廳")]),_:1})]),E("div",eC,[ve(o,{to:{name:"Day2-4F"},class:"sublink"},{default:Dt(()=>[xt("Day 2 | 夢紅樓 4F國際會議廳")]),_:1})])])}const nC=gn(WA,[["render",tC]]);const rC={},iC={class:"tab-page contact-pg"},sC=Dx('<h1 data-v-0c32efc4>Contact Us</h1><div class="contact-methods" data-v-0c32efc4><a href="mailto:39thckmsc@gmail.com" target="_blank" rel="noopener noreferrer" data-v-0c32efc4><i class="fas fa-envelope" data-v-0c32efc4></i> Email </a><a href="https://instagram.com/luminescence_ckmsc39th_" target="_blank" rel="noopener noreferrer" data-v-0c32efc4><i class="fab fa-instagram" data-v-0c32efc4></i> Instagram </a><a href="https://github.com/ckmsc39th/ckmsc39th.github.io" target="_blank" rel="noopener noreferrer" data-v-0c32efc4><i class="fab fa-github" data-v-0c32efc4></i> Github </a></div>',2),oC=[sC];function aC(n,e){return Ee(),Se("div",iC,oC)}const lC=gn(rC,[["render",aC],["__scopeId","data-v-0c32efc4"]]);const cC={class:"members-container"},uC={class:"members-list"},hC={class:"member-name"},dC={class:"member-position"},kg={__name:"Members",setup(n){const e=ln([]);return(async()=>{const i=await(await fetch("/members.json")).json();e.value=i})(),(r,i)=>(Ee(),Se("div",cC,[E("ul",uC,[(Ee(!0),Se(It,null,js(e.value,s=>(Ee(),Se("li",{key:s.id,class:"member"},[E("div",hC,Me(s.name),1),E("div",dC,Me(s.position),1)]))),128))])]))}};const fC=n=>(uf("data-v-08a418c2"),n=n(),hf(),n),pC={key:0,class:"login-overlay"},mC={class:"login-container"},gC=fC(()=>E("h2",null,"Login",-1)),yC={class:"form-group"},vC={class:"form-group"},wC=["disabled"],_C={__name:"Test",setup(n){const e=ln(""),t=ln(""),r=ln(!1),i=ln(!1),s="123@email.com",o="1234";async function a(){r.value=!0;try{e.value===s&&t.value===o?console.log("true111"):console.log("false111")}catch(u){console.error(u)}r.value=!1}function l(){i.value=!0,console.log("showLogin")}function c(){i.value=!1}return(u,h)=>(Ee(),Se(It,null,[E("button",{class:"login-button",onClick:l},"Login"),i.value?(Ee(),Se("div",pC,[E("div",mC,[gC,E("form",null,[E("div",yC,[Vo(E("input",{"onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d),type:"email",placeholder:"Email"},null,512),[[qo,e.value]])]),E("div",vC,[Vo(E("input",{"onUpdate:modelValue":h[1]||(h[1]=d=>t.value=d),type:"password",placeholder:"Password"},null,512),[[qo,t.value]])]),E("button",{type:"button",onClick:a,disabled:r.value},Me(r.value?"Logging in...":"Log in"),9,wC)]),E("button",{class:"close-button",onClick:c},"Cancel")])])):g0("",!0)],64))}},Rg=gn(_C,[["__scopeId","data-v-08a418c2"]]);const bC={data(){return{day1Floor2GroupList:[{id:1,mark:"-",title:"開幕式",time:"13:00~13:30"},{id:2,mark:"-",title:"換場移動",time:"13:30~13:40"},{id:3,mark:"M1",title:"The Broken Stick Problem - 木棒切割問題之推廣",time:"13:40~13:55"},{id:4,mark:"I2",title:"動圖生成器",time:"13:55~14:10"},{id:5,mark:"CH2",title:"殼聚醣-海藻酸鈉凝膠於魚類藥物釋放之應用可行性研究",time:"14:10~14:25"},{id:6,mark:"P2",title:"比翼雙飛",time:"14:25~14:40"},{id:7,mark:"B5",title:"酵母菌spo13突變體減數分裂時程與MOP之研究",time:"14:40~14:55"},{id:8,mark:"-",title:"中場休息",time:"14:55~15:15"},{id:9,mark:"I6",title:"高速旋轉物體的追蹤",time:"15:15~15:30"},{id:10,mark:"M6",title:"非線性遞迴求解之研究",time:"15:30~15:45"},{id:11,mark:"B8",title:"靈長類組蛋白去乙醯基酶(HDAC)演化與蛋白結構分析摘要",time:"15:45~16:00"},{id:12,mark:"I9",title:"二次元角色姿勢轉換",time:"16:00~16:15"},{id:13,mark:"B11",title:"組蛋白去乙醯化酶 (HDA) 對阿拉伯芥性狀表現的影響",time:"16:15~16:30"},{id:14,mark:"-",title:"換場移動",time:"16:30~17:00"},{id:15,mark:"-",title:"閉幕式",time:"17:00~17:30"}]}}},IC={class:"tab-page d1-2f"},xC=E("h1",null,"Schedule",-1),EC=E("h2",null,"Day 1 | 夢紅樓 2F展演廳",-1),TC={class:"div-page"},SC=E("tr",null,[E("th",null,"Mark"),E("th",{class:"title"},"Title"),E("th",null,"Time")],-1),AC={class:"title"},CC={class:"return-btn"};function kC(n,e,t,r,i,s){const o=Qn("router-link");return Ee(),Se("div",IC,[xC,EC,E("div",TC,[E("table",null,[SC,(Ee(!0),Se(It,null,js(i.day1Floor2GroupList,a=>(Ee(),Se("tr",{key:a.id},[E("td",null,Me(a.mark),1),E("td",AC,Me(a.title),1),E("td",null,Me(a.time),1)]))),128))])]),E("div",CC,[ve(o,{to:{name:"Schedule"},class:"link"},{default:Dt(()=>[xt("返回")]),_:1})])])}const RC=gn(bC,[["render",kC]]);const OC={data(){return{day1Floor4GroupList:[{id:1,mark:"-",title:"開幕式",time:"13:00~13:30"},{id:2,mark:"-",title:"換場移動",time:"13:30~13:40"},{id:3,mark:"CH1",title:"銠催化消去反應之掌性選擇性優化及探討",time:"13:40~13:55"},{id:4,mark:"B2",title:"精神疾病的「仙丹」－探討一種新穎腺苷調控藥物對於思覺失調症及焦慮症的治療潛力－以藥物及壓力引發之疾病小鼠為模式",time:"13:55~14:10"},{id:5,mark:"M3",title:"內切鏡射三角形的性質探究",time:"14:10~14:25"},{id:6,mark:"I5",title:"利用卷積神經網路及長短期記憶即時監測睡眠呼吸中止症",time:"14:25~14:40"},{id:7,mark:"B6",title:"Stomatal immunity under heat stress",time:"14:40~14:55"},{id:8,mark:"-",title:"中場休息",time:"14:55~15:15"},{id:9,mark:"I8",title:"FPGA機器學習效能比較與測試",time:"15:15~15:30"},{id:10,mark:"M5",title:"次方數平移之研究",time:"15:30~15:45"},{id:11,mark:"B9",title:"草履蟲與各種綠藻內共生的各種結果",time:"15:45~16:00"},{id:12,mark:"I10",title:"基於人臉關鍵點的臉部圖像正面化研究",time:"16:00~16:15"},{id:13,mark:"CH5",title:"利用計算化學探討有機不對稱合成之光學選擇性—掌性分子熱力學模擬",time:"16:15~16:30"},{id:14,mark:"-",title:"換場移動",time:"16:30~17:00"},{id:15,mark:"-",title:"閉幕式",time:"17:00~17:30"}]}}},DC={class:"tab-page d1-4f"},PC=E("h1",null,"Schedule",-1),NC=E("h2",null,"Day 1 | 夢紅樓 4F國際會議廳",-1),MC={class:"div-page"},LC=E("tr",null,[E("th",null,"Mark"),E("th",{class:"title"},"Title"),E("th",null,"Time")],-1),jC={class:"title"},FC={class:"return-btn"};function $C(n,e,t,r,i,s){const o=Qn("router-link");return Ee(),Se("div",DC,[PC,NC,E("div",MC,[E("table",null,[LC,(Ee(!0),Se(It,null,js(i.day1Floor4GroupList,a=>(Ee(),Se("tr",{key:a.id},[E("td",null,Me(a.mark),1),E("td",jC,Me(a.title),1),E("td",null,Me(a.time),1)]))),128))])]),E("div",FC,[ve(o,{to:{name:"Schedule"},class:"link"},{default:Dt(()=>[xt("返回")]),_:1})])])}const UC=gn(OC,[["render",$C]]);const VC={data(){return{day2Floor2GroupList:[{id:1,mark:"-",title:"開幕式",time:"13:00~13:30"},{id:2,mark:"-",title:"換場移動",time:"13:30~13:40"},{id:3,mark:"I1",title:"以元啟發式搜尋演算法進行鐵路時刻表排點",time:"13:40~13:55"},{id:4,mark:"P1",title:"開發Ex-dSTORM光學顯微鏡實現次10奈米超解析影像",time:"13:55~14:10"},{id:5,mark:"B3",title:"Grid2 knockdown mice的顫抖模式研究",time:"14:10~14:25"},{id:6,mark:"I4",title:"運用時間矩陣搭配深度學習進行大量變數之胰臟癌風險預測",time:"14:25~14:40"},{id:7,mark:"M4",title:"定量餘數於不同值下頻率、數量之探討",time:"14:40~14:55"},{id:8,mark:"-",title:"中場休息",time:"14:55~15:15"},{id:9,mark:"B7",title:"A Cryptic Hub for Development-Regulatory Mechanism of Plant Transcription Factor BPC on Development",time:"15:15~15:30"},{id:10,mark:"CH4",title:"不同鉑、錫添加順序下合成的陽極觸媒對甲醇電催化反應之效應",time:"15:30~15:45"},{id:11,mark:"G1",title:"模擬原行星盤氣體在光致蒸發作用下之吸積模型",time:"15:45~16:00"},{id:12,mark:"M8",title:"最快的晚餐",time:"16:00~16:15"},{id:13,mark:"B12",title:"泛素化酶 Peli1對T 細胞耗竭之影響與機制探討",time:"16:15~16:30"},{id:14,mark:"-",title:"換場移動",time:"16:30~17:00"},{id:15,mark:"-",title:"閉幕式",time:"17:00~17:30"}]}}},BC={class:"tab-page d2-2f"},zC=E("h1",null,"Schedule",-1),qC=E("h2",null,"Day 2 | 夢紅樓 2F展演廳",-1),HC={class:"div-page"},GC=E("tr",null,[E("th",null,"Mark"),E("th",{class:"title"},"Title"),E("th",null,"Time")],-1),KC={class:"title"},WC={class:"return-btn"};function QC(n,e,t,r,i,s){const o=Qn("router-link");return Ee(),Se("div",BC,[zC,qC,E("div",HC,[E("table",null,[GC,(Ee(!0),Se(It,null,js(i.day2Floor2GroupList,a=>(Ee(),Se("tr",{key:a.id},[E("td",null,Me(a.mark),1),E("td",KC,Me(a.title),1),E("td",null,Me(a.time),1)]))),128))])]),E("div",WC,[ve(o,{to:{name:"Schedule"},class:"link"},{default:Dt(()=>[xt("返回")]),_:1})])])}const YC=gn(VC,[["render",QC]]);const JC={data(){return{day2Floor4GroupList:[{id:1,mark:"-",title:"開幕式",time:"13:00~13:30"},{id:2,mark:"-",title:"換場移動",time:"13:30~13:40"},{id:3,mark:"B1",title:"噬不可擋—現存藥物促進細胞自噬的研究",time:"13:40~13:55"},{id:4,mark:"M2",title:"單位圓中內接n邊形與圓心O所成向量之係數比",time:"13:55~14:10"},{id:5,mark:"I3",title:"以天色判斷天氣",time:"14:10~14:25"},{id:6,mark:"B4",title:"由台灣水域分離的噬菌體對Escherichia coli與Enterobacter cloacae的作用",time:"14:25~14:40"},{id:7,mark:"CH3",title:"不同厚度鎳鉻鐵合金對於鎳鈷鉻合金之腐蝕行為影響",time:"14:40~14:55"},{id:8,mark:"-",title:"中場休息",time:"14:55~15:15"},{id:9,mark:"P3",title:"微帶天線陣列",time:"15:15~15:30"},{id:10,mark:"I7",title:"利用 GAN 實現歷史航空影像之上色",time:"15:30~15:45"},{id:11,mark:"M7",title:"方塊填滿方法",time:"15:45~16:00"},{id:12,mark:"B10",title:"蛋白質序列的改變對運輸功能與細胞定位的影響",time:"16:00~16:15"},{id:13,mark:"G2",title:"大屯火山土壤二氧化碳逸出之分析",time:"16:15~16:30"},{id:13,mark:"I11",title:"利用自然語言處理生成LaTeX代碼",time:"16:30~16:45"},{id:14,mark:"-",title:"換場移動",time:"16:45~17:00"},{id:15,mark:"-",title:"閉幕式",time:"17:00~17:30"}]}}},XC={class:"tab-page d2-4f"},ZC=E("h1",null,"Schedule",-1),ek=E("h2",null,"Day 2 | 夢紅樓 4F國際會議廳",-1),tk={class:"div-page"},nk=E("tr",null,[E("th",null,"Mark"),E("th",{class:"title"},"Title"),E("th",null,"Time")],-1),rk={class:"title"},ik={class:"return-btn"};function sk(n,e,t,r,i,s){const o=Qn("router-link");return Ee(),Se("div",XC,[ZC,ek,E("div",tk,[E("table",null,[nk,(Ee(!0),Se(It,null,js(i.day2Floor4GroupList,a=>(Ee(),Se("tr",{key:a.id},[E("td",null,Me(a.mark),1),E("td",rk,Me(a.title),1),E("td",null,Me(a.time),1)]))),128))])]),E("div",ik,[ve(o,{to:{name:"Schedule"},class:"link"},{default:Dt(()=>[xt("返回")]),_:1})])])}const ok=gn(JC,[["render",sk]]),ak=[{path:"/",name:"Home",component:_A},{path:"/about",name:"About",component:MA},{path:"/categories",name:"Categories",component:VA},{path:"/works",name:"Works",component:KA},{path:"/schedule",name:"Schedule",component:nC},{path:"/contact",name:"Contact",component:lC},{path:"/members",name:kg,component:kg},{path:"/test",name:Rg,component:Rg},{path:"/day1-2F",name:"Day1-2F",component:RC},{path:"/day1-4F",name:"Day1-4F",component:UC},{path:"/day2-2F",name:"Day2-2F",component:YC},{path:"/day2-4F",name:"Day2-4F",component:ok}],lk=IT({history:FE("./"),routes:ak});const ck={class:"navbar"},uk={class:"flex items-center gap-1"},hk={class:"flex items-center gap-1 pr-20 pl-20"},dk={class:"flex items-center gap-1"},fk={key:0,class:"login-overlay"},pk={class:"login-container"},mk=E("h2",null,"Login",-1),gk={class:"form-group"},yk={class:"form-group"},vk=["disabled"],wk={href:"https://www.youtube.com/@ckmsc39th_luminescence",target:"_blank",rel:"noopener noreferrer",class:"icon"},_k={href:"https://instagram.com/luminescence_ckmsc39th_",target:"_blank",rel:"noopener noreferrer",class:"icon"},bk={__name:"Navbar",setup(n){gf.replace();const e=ln(""),t=ln(""),r=ln(!1),i=ln(!1),s="123@email.com",o="1234";async function a(){r.value=!0;try{e.value===s&&t.value===o?console.log("true111"):console.log("false111")}catch(u){console.error(u)}r.value=!1}function l(){i.value=!0}function c(){i.value=!1}return(u,h)=>{const d=Qn("router-link"),f=Qn("vue-feather");return Ee(),Se("nav",ck,[E("div",uk,[ve(d,{to:{name:"Home"},class:"homelink"},{default:Dt(()=>[xt("Luminescence")]),_:1})]),E("div",hk,[ve(d,{to:{name:"About"},class:"link"},{default:Dt(()=>[xt("About")]),_:1}),ve(d,{to:{name:"Categories"},class:"link"},{default:Dt(()=>[xt("Categories")]),_:1}),ve(d,{to:{name:"Works"},class:"link"},{default:Dt(()=>[xt("Works")]),_:1}),ve(d,{to:{name:"Schedule"},class:"link"},{default:Dt(()=>[xt("Schedule")]),_:1}),ve(d,{to:{name:"Contact"},class:"link"},{default:Dt(()=>[xt("Contact")]),_:1})]),E("div",dk,[E("button",{class:"login-button",onClick:l},"Login"),i.value?(Ee(),Se("div",fk,[E("div",pk,[mk,E("form",null,[E("div",gk,[Vo(E("input",{"onUpdate:modelValue":h[0]||(h[0]=p=>e.value=p),type:"email",placeholder:"Email"},null,512),[[qo,e.value]])]),E("div",yk,[Vo(E("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>t.value=p),type:"password",placeholder:"Password"},null,512),[[qo,t.value]])]),E("button",{type:"button",onClick:a,disabled:r.value},Me(r.value?"Logging in...":"Log in"),9,vk)]),E("button",{class:"close-button",onClick:c},"Cancel")])])):g0("",!0),E("a",wk,[ve(f,{type:"youtube",size:"25"})]),E("a",_k,[ve(f,{type:"instagram",size:"25"})])])])}}};/*! vue-feather v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */var eh=df({name:"VueFeather",props:{animation:{type:String,default:void 0},animationSpeed:{type:String,default:void 0},fill:{type:String,default:"none"},size:{type:[Number,String],default:24},stroke:{type:String,default:"currentColor"},strokeLinecap:{type:String,default:"round"},strokeLinejoin:{type:String,default:"round"},strokeWidth:{type:[Number,String],default:2},tag:{type:String,default:"i"},type:{type:String,default:"feather",validator(n){if(!yE)throw new Error("The Feather icons is required.");if(!fs.icons[n])throw new Error(`"${n}" is not an available icon type.`);return!0}}},computed:{isRemSize(){return typeof this.size=="string"&&this.size.endsWith("rem")}},render(){const{animation:n,animationSpeed:e,isRemSize:t,size:r,type:i}=this,s=fs.icons[i];return Ql(this.tag,{...this.$attrs,"data-name":i,"data-tags":s.tags,"data-type":i,class:{"vue-feather":!0,[`vue-feather--${i}`]:i,[`vue-feather--${n}`]:n,[`vue-feather--${e}`]:e},style:t?{height:r,width:r}:void 0},[Ql("svg",{...s.attrs,fill:this.fill,height:t?void 0:r,stroke:this.stroke,"stroke-linecap":this.strokeLinecap,"stroke-linejoin":this.strokeLinejoin,"stroke-width":this.strokeWidth,width:t?void 0:r,class:[s.attrs.class,"vue-feather__content"],innerHTML:s.contents})])}});function Ik(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var xk="@keyframes vue-feather--spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.vue-feather{display:inline-block;overflow:hidden}.vue-feather--spin{animation:vue-feather--spin 2s linear infinite}.vue-feather--pulse{animation:vue-feather--spin 2s steps(8) infinite}.vue-feather--slow{animation-duration:3s}.vue-feather--fast{animation-duration:1s}.vue-feather__content{display:block;height:inherit;width:inherit}";Ik(xk);/**
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
 */const dv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ek=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ek(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Tk;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sk=function(n){const e=dv(n);return fv.encodeByteArray(e,!0)},nc=function(n){return Sk(n).replace(/\./g,"")},pv=function(n){try{return fv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function rc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ak(t)||(n[t]=rc(n[t],e[t]));return n}function Ak(n){return n!=="__proto__"}/**
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
 */function Ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kk=()=>Ck().__FIREBASE_DEFAULTS__,Rk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ok=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pv(n[1]);return e&&JSON.parse(e)},Cf=()=>{try{return kk()||Rk()||Ok()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dk=()=>{var n;return(n=Cf())===null||n===void 0?void 0:n.config},Pk=n=>{var e;return(e=Cf())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Nk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Mk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[nc(JSON.stringify(t)),nc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function kf(){var n;const e=(n=Cf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jk(){return typeof self=="object"&&self.self===self}function mv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gv(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fk(){return!kf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function $k(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Uk="FirebaseError";class Nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Uk,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Vk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,r)}}function Vk(n,e){return n.replace(Bk,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bk=/\{\$([^}]+)}/g;/**
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
 */function Og(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function zk(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function td(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Dg(s)&&Dg(o)){if(!td(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Dg(n){return n!==null&&typeof n=="object"}/**
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
 */function Fs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function yv(n,e){const t=new qk(n,e);return t.subscribe.bind(t)}class qk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hk(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=th),i.error===void 0&&(i.error=th),i.complete===void 0&&(i.complete=th);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function th(){}/**
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
 */function J(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class Gk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wk(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kk(n){return n===Kr?void 0:n}function Wk(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Of=[];var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const vv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Yk=ge.INFO,Jk={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Xk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Jk[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=Yk,this._logHandler=Xk,this._userLogHandler=null,Of.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}function Zk(n){Of.forEach(e=>{e.setLogLevel(n)})}function eR(n,e){for(const t of Of){let r=null;e&&e.level&&(r=vv[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&n({level:ge[s].toLowerCase(),message:a,args:o,type:i.name})}}}const tR=(n,e)=>e.some(t=>n instanceof t);let Pg,Ng;function nR(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rR(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,nd=new WeakMap,_v=new WeakMap,nh=new WeakMap,Df=new WeakMap;function iR(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ir(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&wv.set(t,n)}).catch(()=>{}),Df.set(e,n),e}function sR(n){if(nd.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});nd.set(n,e)}let rd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_v.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ir(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oR(n){rd=n(rd)}function aR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(rh(this),e,...t);return _v.set(r,e.sort?e.sort():[e]),Ir(r)}:rR().includes(n)?function(...e){return n.apply(rh(this),e),Ir(wv.get(this))}:function(...e){return Ir(n.apply(rh(this),e))}}function lR(n){return typeof n=="function"?aR(n):(n instanceof IDBTransaction&&sR(n),tR(n,nR())?new Proxy(n,rd):n)}function Ir(n){if(n instanceof IDBRequest)return iR(n);if(nh.has(n))return nh.get(n);const e=lR(n);return e!==n&&(nh.set(n,e),Df.set(e,n)),e}const rh=n=>Df.get(n);function cR(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const uR=["get","getKey","getAll","getAllKeys","count"],hR=["put","add","delete","clear"],ih=new Map;function Mg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=hR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uR.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ih.set(e,s),s}oR(n=>({...n,get:(e,t,r)=>Mg(e,t)||n.get(e,t,r),has:(e,t)=>!!Mg(e,t)||n.has(e,t)}));/**
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
 */class dR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const id="@firebase/app",Lg="0.9.6";/**
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
 */const gi=new Wc("@firebase/app"),pR="@firebase/app-compat",mR="@firebase/analytics-compat",gR="@firebase/analytics",yR="@firebase/app-check-compat",vR="@firebase/app-check",wR="@firebase/auth",_R="@firebase/auth-compat",bR="@firebase/database",IR="@firebase/database-compat",xR="@firebase/functions",ER="@firebase/functions-compat",TR="@firebase/installations",SR="@firebase/installations-compat",AR="@firebase/messaging",CR="@firebase/messaging-compat",kR="@firebase/performance",RR="@firebase/performance-compat",OR="@firebase/remote-config",DR="@firebase/remote-config-compat",PR="@firebase/storage",NR="@firebase/storage-compat",MR="@firebase/firestore",LR="@firebase/firestore-compat",jR="firebase",FR="9.19.0";/**
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
 */const Tr="[DEFAULT]",$R={[id]:"fire-core",[pR]:"fire-core-compat",[gR]:"fire-analytics",[mR]:"fire-analytics-compat",[vR]:"fire-app-check",[yR]:"fire-app-check-compat",[wR]:"fire-auth",[_R]:"fire-auth-compat",[bR]:"fire-rtdb",[IR]:"fire-rtdb-compat",[xR]:"fire-fn",[ER]:"fire-fn-compat",[TR]:"fire-iid",[SR]:"fire-iid-compat",[AR]:"fire-fcm",[CR]:"fire-fcm-compat",[kR]:"fire-perf",[RR]:"fire-perf-compat",[OR]:"fire-rc",[DR]:"fire-rc-compat",[PR]:"fire-gcs",[NR]:"fire-gcs-compat",[MR]:"fire-fst",[LR]:"fire-fst-compat","fire-js":"fire-js",[jR]:"fire-js-all"};/**
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
 */const Sr=new Map,Jo=new Map;function ic(n,e){try{n.container.addComponent(e)}catch(t){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bv(n,e){n.container.addOrOverwriteComponent(e)}function Ar(n){const e=n.name;if(Jo.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;Jo.set(e,n);for(const t of Sr.values())ic(t,n);return!0}function Iv(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function UR(n,e,t=Tr){Iv(n,e).clearInstance(t)}function VR(){Jo.clear()}/**
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
 */const BR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gn=new Pi("app","Firebase",BR);/**
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
 */let zR=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}};/**
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
 */const Ni=FR;function Pf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(t||(t=Dk()),!t)throw Gn.create("no-options");const s=Sr.get(i);if(s){if(td(t,s.options)&&td(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const o=new Qk(i);for(const l of Jo.values())o.addComponent(l);const a=new zR(t,r,o);return Sr.set(i,a),a}function qR(n=Tr){const e=Sr.get(n);if(!e&&n===Tr)return Pf();if(!e)throw Gn.create("no-app",{appName:n});return e}function HR(){return Array.from(Sr.values())}async function xv(n){const e=n.name;Sr.has(e)&&(Sr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function On(n,e,t){var r;let i=(r=$R[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(a.join(" "));return}Ar(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ev(n,e){if(n!==null&&typeof n!="function")throw Gn.create("invalid-log-argument");eR(n,e)}function Tv(n){Zk(n)}/**
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
 */const GR="firebase-heartbeat-database",KR=1,Xo="firebase-heartbeat-store";let sh=null;function Sv(){return sh||(sh=cR(GR,KR,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xo)}}}).catch(n=>{throw Gn.create("idb-open",{originalErrorMessage:n.message})})),sh}async function WR(n){try{return(await Sv()).transaction(Xo).objectStore(Xo).get(Av(n))}catch(e){if(e instanceof Nt)gi.warn(e.message);else{const t=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gi.warn(t.message)}}}async function jg(n,e){try{const r=(await Sv()).transaction(Xo,"readwrite");return await r.objectStore(Xo).put(e,Av(n)),r.done}catch(t){if(t instanceof Nt)gi.warn(t.message);else{const r=Gn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gi.warn(r.message)}}}function Av(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QR=1024,YR=30*24*60*60*1e3;class JR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZR(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=YR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fg(),{heartbeatsToSend:t,unsentEntries:r}=XR(this._heartbeatsCache.heartbeats),i=nc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fg(){return new Date().toISOString().substring(0,10)}function XR(n,e=QR){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$g(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$g(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ZR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?$k().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $g(n){return nc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function eO(n){Ar(new Mn("platform-logger",e=>new dR(e),"PRIVATE")),Ar(new Mn("heartbeat",e=>new JR(e),"PRIVATE")),On(id,Lg,n),On(id,Lg,"esm2017"),On("fire-js","")}eO("");const tO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Nt,SDK_VERSION:Ni,_DEFAULT_ENTRY_NAME:Tr,_addComponent:ic,_addOrOverwriteComponent:bv,_apps:Sr,_clearComponents:VR,_components:Jo,_getProvider:Iv,_registerComponent:Ar,_removeServiceInstance:UR,deleteApp:xv,getApp:qR,getApps:HR,initializeApp:Pf,onLog:Ev,registerVersion:On,setLogLevel:Tv},Symbol.toStringTag,{value:"Module"}));/**
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
 */class nO{constructor(e,t){this._delegate=e,this.firebase=t,ic(e,new Mn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),xv(this._delegate)))}_getService(e,t=Tr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Tr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ic(this._delegate,e)}_addOrOverwriteComponent(e){bv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const rO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ug=new Pi("app-compat","Firebase",rO);/**
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
 */function iO(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:On,setLogLevel:Tv,onLog:Ev,apps:null,SDK_VERSION:Ni,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:tO}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Tr,!Og(e,c))throw Ug.create("no-app",{appName:c});return e[c]}i.App=n;function s(c,u={}){const h=Pf(c,u);if(Og(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,h=u.replace("-compat","");if(Ar(c)&&c.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Ug.create("invalid-app-argument",{appName:u});return f[h]()};c.serviceProps!==void 0&&rc(d,c.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,c.multipleInstances?f:[])}}return c.type==="PUBLIC"?t[h]:null}function l(c,u){return u==="serverAuth"?null:u}return t}/**
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
 */function Cv(){const n=iO(nO);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Cv,extendNamespace:e,createSubscribe:yv,ErrorFactory:Pi,deepExtend:rc});function e(t){rc(n,t)}return n}const sO=Cv();/**
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
 */const Vg=new Wc("@firebase/app-compat"),oO="@firebase/app-compat",aO="0.2.6";/**
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
 */function lO(n){On(oO,aO,n)}/**
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
 */if(jk()&&self.firebase!==void 0){Vg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Vg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const $s=sO;lO();var cO="firebase",uO="9.19.1-20230331192943";/**
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
 */$s.registerVersion(cO,uO,"app-compat");function Nf(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const so={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},qi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function hO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function kv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dO=hO,fO=kv,Rv=new Pi("auth","Firebase",kv());/**
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
 */const Bg=new Wc("@firebase/auth");function Nl(n,...e){Bg.logLevel<=ge.ERROR&&Bg.error(`Auth (${Ni}): ${n}`,...e)}/**
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
 */function vt(n,...e){throw Mf(n,...e)}function gt(n,...e){return Mf(n,...e)}function Ov(n,e,t){const r=Object.assign(Object.assign({},fO()),{[e]:t});return new Pi("auth","Firebase",r).create(e,{appName:n.name})}function Us(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(n,"argument-error"),Ov(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mf(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rv.create(n,...e)}function D(n,e,...t){if(!n)throw Mf(e,...t)}function Cn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nl(e),new Error(e)}function pn(n,e){n||Cn(e)}/**
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
 */const zg=new Map;function Wt(n){pn(n instanceof Function,"Expected a class definition");let e=zg.get(n);return e?(pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zg.set(n,e),e)}function pO(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Zo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Lf(){return qg()==="http:"||qg()==="https:"}function qg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function mO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lf()||mv()||"connection"in navigator)?navigator.onLine:!0}function gO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ta{constructor(e,t){this.shortDelay=e,this.longDelay=t,pn(t>e,"Short delay should be less than long delay!"),this.isMobile=Lk()||Rf()}get(){return mO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jf(n,e){pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Dv{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const vO=new Ta(3e4,6e4);function it(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ut(n,e,t,r,i={}){return Pv(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Dv.fetch()(Nv(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Pv(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yO),e);try{const i=new wO(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vo(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vo(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw vo(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ov(n,u,c);vt(n,u)}}catch(i){if(i instanceof Nt)throw i;vt(n,"network-request-failed",{message:String(i)})}}async function nr(n,e,t,r,i={}){const s=await ut(n,e,t,r,i);return"mfaPendingCredential"in s&&vt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Nv(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?jf(n.config,i):`${n.config.apiScheme}://${i}`}class wO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),vO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=gt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function _O(n,e){return ut(n,"POST","/v1/accounts:delete",e)}async function bO(n,e){return ut(n,"POST","/v1/accounts:update",e)}async function IO(n,e){return ut(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xO(n,e=!1){const t=J(n),r=await t.getIdToken(e),i=Qc(r);D(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ao(oh(i.auth_time)),issuedAtTime:Ao(oh(i.iat)),expirationTime:Ao(oh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function oh(n){return Number(n)*1e3}function Qc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=pv(t);return i?JSON.parse(i):(Nl("Failed to decode base64 JWT payload"),null)}catch(i){return Nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function EO(n){const e=Qc(n);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Nt&&TO(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function TO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class SO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mv{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ea(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Jn(n,IO(t,{idToken:r}));D(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kO(s.providerUserInfo):[],a=CO(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mv(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function AO(n){const e=J(n);await ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CO(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kO(n){return n.map(e=>{var{providerId:t}=e,r=Nf(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RO(n,e){const t=await Pv(n,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Nv(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await RO(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ta;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ta,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function ur(n,e){D(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xO(this,e)}reload(){return AO(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jn(this,_O(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,I=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:P,isAnonymous:B,providerData:U,stsTokenManager:Q}=t;D(_&&Q,e,"internal-error");const ee=ta.fromJSON(this.name,Q);D(typeof _=="string",e,"internal-error"),ur(h,e.name),ur(d,e.name),D(typeof P=="boolean",e,"internal-error"),D(typeof B=="boolean",e,"internal-error"),ur(f,e.name),ur(p,e.name),ur(g,e.name),ur(y,e.name),ur(w,e.name),ur(I,e.name);const $e=new ui({uid:_,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:B,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:ee,createdAt:w,lastLoginAt:I});return U&&Array.isArray(U)&&($e.providerData=U.map(ft=>Object.assign({},ft))),y&&($e._redirectEventId=y),$e}static async _fromIdTokenResponse(e,t,r=!1){const i=new ta;i.updateFromServerResponse(t);const s=new ui({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ea(s),s}}/**
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
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lv.type="NONE";const ws=Lv;/**
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
 */function hi(n,e,t){return`firebase:${n}:${e}:${t}`}class ss{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=hi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ss(Wt(ws),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Wt(ws);const o=hi(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=ui._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ss(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ss(s,e,r))}}/**
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
 */function Hg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uv(e))return"Blackberry";if(Vv(e))return"Webos";if(Ff(e))return"Safari";if((e.includes("chrome/")||Fv(e))&&!e.includes("edge/"))return"Chrome";if(Sa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jv(n=Ve()){return/firefox\//i.test(n)}function Ff(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fv(n=Ve()){return/crios\//i.test(n)}function $v(n=Ve()){return/iemobile/i.test(n)}function Sa(n=Ve()){return/android/i.test(n)}function Uv(n=Ve()){return/blackberry/i.test(n)}function Vv(n=Ve()){return/webos/i.test(n)}function Vs(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function OO(n=Ve()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function DO(n=Ve()){var e;return Vs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PO(){return gv()&&document.documentMode===10}function Bv(n=Ve()){return Vs(n)||Sa(n)||Vv(n)||Uv(n)||/windows phone/i.test(n)||$v(n)}function NO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function zv(n,e=[]){let t;switch(n){case"Browser":t=Hg(Ve());break;case"Worker":t=`${Hg(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ni}/${r}`}/**
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
 */class MO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class LO{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new MO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ea(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function lt(n){return J(n)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=yv(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jO(n,e,t){const r=lt(n);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=qv(e),{host:o,port:a}=FO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$O()}function qv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function FO(n){const e=qv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kg(o)}}}function Kg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $O(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,t){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
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
 */async function Hv(n,e){return ut(n,"POST","/v1/accounts:resetPassword",it(n,e))}async function Gv(n,e){return ut(n,"POST","/v1/accounts:update",e)}async function UO(n,e){return ut(n,"POST","/v1/accounts:update",it(n,e))}/**
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
 */async function VO(n,e){return nr(n,"POST","/v1/accounts:signInWithPassword",it(n,e))}async function Yc(n,e){return ut(n,"POST","/v1/accounts:sendOobCode",it(n,e))}async function BO(n,e){return Yc(n,e)}async function zO(n,e){return Yc(n,e)}async function qO(n,e){return Yc(n,e)}async function HO(n,e){return Yc(n,e)}/**
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
 */async function GO(n,e){return nr(n,"POST","/v1/accounts:signInWithEmailLink",it(n,e))}async function KO(n,e){return nr(n,"POST","/v1/accounts:signInWithEmailLink",it(n,e))}/**
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
 */class na extends Bs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new na(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new na(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return VO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GO(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Gv(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KO(e,{idToken:t,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kn(n,e){return nr(n,"POST","/v1/accounts:signInWithIdp",it(n,e))}/**
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
 */const WO="http://localhost";class Ln extends Bs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Nf(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:WO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fs(t)}return e}}/**
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
 */async function QO(n,e){return ut(n,"POST","/v1/accounts:sendVerificationCode",it(n,e))}async function YO(n,e){return nr(n,"POST","/v1/accounts:signInWithPhoneNumber",it(n,e))}async function JO(n,e){const t=await nr(n,"POST","/v1/accounts:signInWithPhoneNumber",it(n,e));if(t.temporaryProof)throw vo(n,"account-exists-with-different-credential",t);return t}const XO={USER_NOT_FOUND:"user-not-found"};async function ZO(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return nr(n,"POST","/v1/accounts:signInWithPhoneNumber",it(n,t),XO)}/**
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
 */class di extends Bs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new di({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new di({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return YO(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return JO(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ZO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new di({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function eD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tD(n){const e=Xi(yo(n)).link,t=e?Xi(yo(e)).deep_link_id:null,r=Xi(yo(n)).deep_link_id;return(r?Xi(yo(r)).link:null)||r||t||e||n}class Jc{constructor(e){var t,r,i,s,o,a;const l=Xi(yo(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=eD((i=l.mode)!==null&&i!==void 0?i:null);D(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=tD(e);try{return new Jc(t)}catch{return null}}}/**
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
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,t){return na._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Jc.parseLink(t);return D(r,"argument-error"),na._fromEmailAndCode(e,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zs extends rr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class os extends zs{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return D("providerId"in t&&"signInMethod"in t,"argument-error"),Ln._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),Ln._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return os.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return os.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new os(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class xn extends zs{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class En extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return En.credential(t,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class Tn extends zs{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */const nD="http://localhost";class _s extends Bs{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new _s(r,s)}static _create(e,t){return new _s(e,t)}buildRequest(){return{requestUri:nD,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const rD="saml.";class sc extends rr{constructor(e){D(e.startsWith(rD),"argument-error"),super(e)}static credentialFromResult(e){return sc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return sc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=_s.fromJSON(e);return D(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return _s._create(r,t)}catch{return null}}}/**
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
 */class Sn extends zs{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */async function Kv(n,e){return nr(n,"POST","/v1/accounts:signUp",it(n,e))}/**
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
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ui._fromIdTokenResponse(e,r,i),o=Wg(r);return new nn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Wg(r);return new nn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Wg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function iD(n){var e;const t=lt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new nn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Kv(t,{returnSecureToken:!0}),i=await nn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class oc extends Nt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new oc(e,t,r,i)}}function Wv(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function Qv(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function sD(n,e){const t=J(n);await Xc(!0,t,e);const{providerUserInfo:r}=await bO(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Qv(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function $f(n,e,t=!1){const r=await Jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return nn._forOperation(n,"link",r)}async function Xc(n,e,t){await ea(e);const r=Qv(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";D(r.has(t)===n,e.auth,i)}/**
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
 */async function Yv(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Jn(n,Wv(r,i,e,n),t);D(s.idToken,r,"internal-error");const o=Qc(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(n.uid===a,r,"user-mismatch"),nn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
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
 */async function Jv(n,e,t=!1){const r="signIn",i=await Wv(n,r,e),s=await nn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Zc(n,e){return Jv(lt(n),e)}async function Xv(n,e){const t=J(n);return await Xc(!1,t,e.providerId),$f(t,e)}async function Zv(n,e){return Yv(J(n),e)}/**
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
 */async function oD(n,e){return nr(n,"POST","/v1/accounts:signInWithCustomToken",it(n,e))}/**
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
 */async function aD(n,e){const t=lt(n),r=await oD(t,{token:e,returnSecureToken:!0}),i=await nn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Aa{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Uf._fromServerResponse(e,t):"totpInfo"in t?Vf._fromServerResponse(e,t):vt(e,"internal-error")}}class Uf extends Aa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Uf(t)}}class Vf extends Aa{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Vf(t)}}/**
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
 */function eu(n,e,t){var r;D(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),D(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(D(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(D(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function lD(n,e,t){const r=J(n),i={requestType:"PASSWORD_RESET",email:e};t&&eu(r,i,t),await zO(r,i)}async function cD(n,e,t){await Hv(J(n),{oobCode:e,newPassword:t})}async function uD(n,e){await UO(J(n),{oobCode:e})}async function e2(n,e){const t=J(n),r=await Hv(t,{oobCode:e}),i=r.requestType;switch(D(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,t,"internal-error");default:D(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Aa._fromServerResponse(lt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function hD(n,e){const{data:t}=await e2(J(n),e);return t.email}async function dD(n,e,t){const r=lt(n),i=await Kv(r,{returnSecureToken:!0,email:e,password:t}),s=await nn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function fD(n,e,t){return Zc(J(n),Lr.credential(e,t))}/**
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
 */async function pD(n,e,t){const r=J(n),i={requestType:"EMAIL_SIGNIN",email:e};D(t.handleCodeInApp,r,"argument-error"),t&&eu(r,i,t),await qO(r,i)}function mD(n,e){const t=Jc.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function gD(n,e,t){const r=J(n),i=Lr.credentialWithLink(e,t||Zo());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Zc(r,i)}/**
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
 */async function yD(n,e){return ut(n,"POST","/v1/accounts:createAuthUri",it(n,e))}/**
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
 */async function vD(n,e){const t=Lf()?Zo():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await yD(J(n),r);return i||[]}async function wD(n,e){const t=J(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&eu(t.auth,i,e);const{email:s}=await BO(t.auth,i);s!==n.email&&await n.reload()}async function _D(n,e,t){const r=J(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&eu(r.auth,s,t);const{email:o}=await HO(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function bD(n,e){return ut(n,"POST","/v1/accounts:update",e)}/**
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
 */async function ID(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=J(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Jn(r,bD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xD(n,e){return t2(J(n),e,null)}function ED(n,e){return t2(J(n),null,e)}async function t2(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Jn(n,Gv(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function TD(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Qc(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new as(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new SD(s,i);case"github.com":return new AD(s,i);case"google.com":return new CD(s,i);case"twitter.com":return new kD(s,i,n.screenName||null);case"custom":case"anonymous":return new as(s,null);default:return new as(s,r,i)}}class as{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class n2 extends as{constructor(e,t,r,i){super(e,t,r),this.username=i}}class SD extends as{constructor(e,t){super(e,"facebook.com",t)}}class AD extends n2{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class CD extends as{constructor(e,t){super(e,"google.com",t)}}class kD extends n2{constructor(e,t,r){super(e,"twitter.com",t,r)}}function RD(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:TD(t)}class ri{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new ri("enroll",e,t)}static _fromMfaPendingCredential(e){return new ri("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ri._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ri._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Bf{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=lt(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Aa._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=ri._fromMfaPendingCredential(i.mfaPendingCredential);return new Bf(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const u=await nn._fromIdTokenResponse(r,t.operationType,c);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return D(t.user,r,"internal-error"),nn._forOperation(t.user,t.operationType,c);default:vt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function OD(n,e){var t;const r=J(n),i=e;return D(e.customData.operationType,r,"argument-error"),D((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Bf._fromError(r,i)}/**
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
 */function DD(n,e){return ut(n,"POST","/v2/accounts/mfaEnrollment:start",it(n,e))}function PD(n,e){return ut(n,"POST","/v2/accounts/mfaEnrollment:finalize",it(n,e))}function ND(n,e){return ut(n,"POST","/v2/accounts/mfaEnrollment:withdraw",it(n,e))}class zf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Aa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new zf(e)}async getSession(){return ri._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Jn(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Jn(this.user,ND(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ah=new WeakMap;function MD(n){const e=J(n);return ah.has(e)||ah.set(e,zf._fromUser(e)),ah.get(e)}const ac="__sak";/**
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
 */class r2{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function LD(){const n=Ve();return Ff(n)||Vs(n)}const jD=1e3,FD=10;class i2 extends r2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LD()&&NO(),this.fallbackToPolling=Bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FD):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}i2.type="LOCAL";const qf=i2;/**
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
 */class s2 extends r2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}s2.type="SESSION";const yi=s2;/**
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
 */function $D(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await $D(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
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
 */function Ca(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class UD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ca("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function VD(n){tt().location.href=n}/**
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
 */function Hf(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function BD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qD(){return Hf()?self:null}/**
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
 */const o2="firebaseLocalStorageDb",HD=1,lc="firebaseLocalStorage",a2="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nu(n,e){return n.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function GD(){const n=indexedDB.deleteDatabase(o2);return new ka(n).toPromise()}function sd(){const n=indexedDB.open(o2,HD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(lc,{keyPath:a2})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await GD(),e(await sd()))})})}async function Qg(n,e,t){const r=nu(n,!0).put({[a2]:e,value:t});return new ka(r).toPromise()}async function KD(n,e){const t=nu(n,!1).get(e),r=await new ka(t).toPromise();return r===void 0?null:r.value}function Yg(n,e){const t=nu(n,!0).delete(e);return new ka(t).toPromise()}const WD=800,QD=3;class l2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>QD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(qD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await BD(),!this.activeServiceWorker)return;this.sender=new UD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await Qg(e,ac,"1"),await Yg(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qg(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>KD(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nu(i,!1).getAll();return new ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l2.type="LOCAL";const ra=l2;/**
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
 */function YD(n,e){return ut(n,"POST","/v2/accounts/mfaSignIn:start",it(n,e))}function JD(n,e){return ut(n,"POST","/v2/accounts/mfaSignIn:finalize",it(n,e))}/**
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
 */async function XD(n){return(await ut(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function ZD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function c2(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=gt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ZD().appendChild(r)})}function u2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const eP=500,tP=6e4,fl=1e12;class nP{constructor(e){this.auth=e,this.counter=fl,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new rP(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||fl;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||fl;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||fl;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class rP{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=iP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},tP)},eP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function iP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const lh=u2("rcb"),sP=new Ta(3e4,6e4),oP="https://www.google.com/recaptcha/api.js?";class aP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=tt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return D(lP(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(tt().grecaptcha):new Promise((r,i)=>{const s=tt().setTimeout(()=>{i(gt(e,"network-request-failed"))},sP.get());tt()[lh]=()=>{tt().clearTimeout(s),delete tt()[lh];const a=tt().grecaptcha;if(!a){i(gt(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${oP}?${Fs({onload:lh,render:"explicit",hl:t})}`;c2(o).catch(()=>{clearTimeout(s),i(gt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=tt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function lP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class cP{async load(e){return new nP(e)}clearedOneInstance(){}}/**
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
 */const h2="recaptcha",uP={theme:"light",type:"image"};let hP=class{constructor(e,t=Object.assign({},uP),r){this.parameters=t,this.type=h2,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=lt(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new cP:new aP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=tt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Lf()&&!Hf(),this.auth,"internal-error"),await dP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await XD(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function dP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Gf{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=di._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function fP(n,e,t){const r=lt(n),i=await ru(r,e,J(t));return new Gf(i,s=>Zc(r,s))}async function pP(n,e,t){const r=J(n);await Xc(!1,r,"phone");const i=await ru(r.auth,e,J(t));return new Gf(i,s=>Xv(r,s))}async function mP(n,e,t){const r=J(n),i=await ru(r.auth,e,J(t));return new Gf(i,s=>Zv(r,s))}async function ru(n,e,t){var r;const i=await t.verify();try{D(typeof i=="string",n,"argument-error"),D(t.type===h2,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",n,"internal-error"),(await DD(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,n,"missing-multi-factor-info"),(await YD(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await QO(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function gP(n,e){await $f(J(n),e)}/**
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
 */let vi=class Ml{constructor(e){this.providerId=Ml.PROVIDER_ID,this.auth=lt(e)}verifyPhoneNumber(e,t){return ru(this.auth,e,J(t))}static credential(e,t){return di._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ml.credentialFromTaggedObject(t)}static credentialFromError(e){return Ml.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?di._fromTokenResponse(t,r):null}};vi.PROVIDER_ID="phone";vi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Mi(n,e){return e?Wt(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Kf extends Bs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yP(n){return Jv(n.auth,new Kf(n),n.bypassAuthState)}function vP(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),Yv(t,new Kf(n),n.bypassAuthState)}async function wP(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),$f(t,new Kf(n),n.bypassAuthState)}/**
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
 */class d2{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yP;case"linkViaPopup":case"linkViaRedirect":return wP;case"reauthViaPopup":case"reauthViaRedirect":return vP;default:vt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _P=new Ta(2e3,1e4);async function bP(n,e,t){const r=lt(n);Us(n,e,rr);const i=Mi(r,t);return new Bn(r,"signInViaPopup",e,i).executeNotNull()}async function IP(n,e,t){const r=J(n);Us(r.auth,e,rr);const i=Mi(r.auth,t);return new Bn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function xP(n,e,t){const r=J(n);Us(r.auth,e,rr);const i=Mi(r.auth,t);return new Bn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Bn extends d2{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bn.currentPopupAction&&Bn.currentPopupAction.cancel(),Bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_P.get())};e()}}Bn.currentPopupAction=null;/**
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
 */const EP="pendingRedirect",Co=new Map;class TP extends d2{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await SP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SP(n,e){const t=p2(e),r=f2(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Wf(n,e){return f2(n)._set(p2(e),"true")}function AP(){Co.clear()}function Qf(n,e){Co.set(n._key(),e)}function f2(n){return Wt(n._redirectPersistence)}function p2(n){return hi(EP,n.config.apiKey,n.name)}/**
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
 */function CP(n,e,t){return kP(n,e,t)}async function kP(n,e,t){const r=lt(n);Us(n,e,rr),await r._initializationPromise;const i=Mi(r,t);return await Wf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function RP(n,e,t){return OP(n,e,t)}async function OP(n,e,t){const r=J(n);Us(r.auth,e,rr),await r.auth._initializationPromise;const i=Mi(r.auth,t);await Wf(i,r.auth);const s=await m2(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function DP(n,e,t){return PP(n,e,t)}async function PP(n,e,t){const r=J(n);Us(r.auth,e,rr),await r.auth._initializationPromise;const i=Mi(r.auth,t);await Xc(!1,r,e.providerId),await Wf(i,r.auth);const s=await m2(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function NP(n,e){return await lt(n)._initializationPromise,iu(n,e,!1)}async function iu(n,e,t=!1){const r=lt(n),i=Mi(r,e),o=await new TP(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function m2(n){const e=Ca(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const MP=10*60*1e3;class g2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!y2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function y2({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y2(n);default:return!1}}/**
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
 */async function v2(n,e={}){return ut(n,"GET","/v1/projects",e)}/**
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
 */const jP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FP=/^https?/;async function $P(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v2(n);for(const t of e)try{if(UP(t))return}catch{}vt(n,"unauthorized-domain")}function UP(n){const e=Zo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!FP.test(t))return!1;if(jP.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VP=new Ta(3e4,6e4);function Xg(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BP(n){return new Promise((e,t)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),t(gt(n,"network-request-failed"))},timeout:VP.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{const a=u2("iframefcb");return tt()[a]=()=>{gapi.load?o():t(gt(n,"network-request-failed"))},c2(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function zP(n){return Ll=Ll||BP(n),Ll}/**
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
 */const qP=new Ta(5e3,15e3),HP="__/auth/iframe",GP="emulator/auth/iframe",KP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QP(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jf(e,GP):`https://${n.config.authDomain}/${HP}`,r={apiKey:e.apiKey,appName:n.name,v:Ni},i=WP.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Fs(r).slice(1)}`}async function YP(n){const e=await zP(n),t=tt().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:QP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(n,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},qP.get());function l(){tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const JP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XP=500,ZP=600,eN="_blank",tN="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nN(n,e,t,r=XP,i=ZP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},JP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ve().toLowerCase();t&&(a=Fv(c)?eN:t),jv(c)&&(e=e||tN,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(DO(c)&&a!=="_self")return rN(e||"",a),new Zg(null);const h=window.open(e||"",a,u);D(h,n,"popup-blocked");try{h.focus()}catch{}return new Zg(h)}function rN(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iN="__/auth/handler",sN="emulator/auth/handler";function od(n,e,t,r,i,s){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ni,eventId:i};if(e instanceof rr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof zs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${oN(n)}?${Fs(a).slice(1)}`}function oN({config:n}){return n.emulator?jf(n,sN):`https://${n.authDomain}/${iN}`}/**
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
 */const ch="webStorageSupport";class aN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=iu,this._overrideRedirectResult=Qf}async _openPopup(e,t,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=od(e,t,r,Zo(),i);return nN(e,o,Ca())}async _openRedirect(e,t,r,i){return await this._originValidation(e),VD(od(e,t,r,Zo(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await YP(e),r=new g2(e);return t.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ch,{type:ch},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ch];o!==void 0&&t(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$P(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bv()||Ff()||Vs()}}const lN=aN;class cN{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Cn("unexpected MultiFactorSessionType")}}}class Yf extends cN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Yf(e)}_finalizeEnroll(e,t,r){return PD(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return JD(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class w2{constructor(){}static assertion(e){return Yf._fromCredential(e)}}w2.FACTOR_ID="phone";var ey="@firebase/auth",ty="0.22.0-20230331192943";/**
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
 */class uN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hN(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dN(n){Ar(new Mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zv(n)},u=new LO(a,l,c);return pO(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Mn("auth-internal",e=>{const t=lt(e.getProvider("auth").getImmediate());return(r=>new uN(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(ey,ty,hN(n)),On(ey,ty,"esm2017")}/**
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
 */const fN=5*60;Pk("authIdTokenMaxAge");dN("Browser");/**
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
 */function wi(){return window}/**
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
 */const pN=2e3;async function mN(n,e,t){var r;const{BuildInfo:i}=wi();pn(e.sessionId,"AuthEvent did not contain a session ID");const s=await _N(e.sessionId),o={};return Vs()?o.ibi=i.packageName:Sa()?o.apn=i.packageName:vt(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,od(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function gN(n){const{BuildInfo:e}=wi(),t={};Vs()?t.iosBundleId=e.packageName:Sa()?t.androidPackageName=e.packageName:vt(n,"operation-not-supported-in-this-environment"),await v2(n,t)}function yN(n){const{cordova:e}=wi();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,OO()?"_blank":"_system","location=yes"),t(i)})})}async function vN(n,e,t){const{cordova:r}=wi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function c(){a||(a=window.setTimeout(()=>{o(gt(n,"redirect-cancelled-by-user"))},pN))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Sa()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function wN(n){var e,t,r,i,s,o,a,l,c,u;const h=wi();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((u=(c=h==null?void 0:h.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _N(n){const e=bN(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function bN(n){if(pn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const IN=20;class xN extends g2{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function EN(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:AN(),postBody:null,tenantId:n.tenantId,error:gt(n,"no-auth-event")}}function TN(n,e){return ad()._set(ld(n),e)}async function ny(n){const e=await ad()._get(ld(n));return e&&await ad()._remove(ld(n)),e}function SN(n,e){var t,r;const i=kN(e);if(i.includes("/__/auth/callback")){const s=jl(i),o=s.firebaseError?CN(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],l=a?gt(a):null;return l?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function AN(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<IN;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function ad(){return Wt(qf)}function ld(n){return hi("authEvent",n.config.apiKey,n.name)}function CN(n){try{return JSON.parse(n)}catch{return null}}function kN(n){const e=jl(n),t=e.link?decodeURIComponent(e.link):void 0,r=jl(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jl(i).link||i||r||t||n}function jl(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Xi(t.join("?"))}/**
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
 */const RN=500;class ON{constructor(){this._redirectPersistence=yi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=iu,this._overrideRedirectResult=Qf}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new xN(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){wN(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),AP(),await this._originValidation(e);const o=EN(e,r,i);await TN(e,o);const a=await mN(e,o,t),l=await yN(a);return vN(e,s,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gN(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=wi(),o=setTimeout(async()=>{await ny(e),t.onEvent(ry())},RN),a=async u=>{clearTimeout(o);const h=await ny(e);let d=null;h&&(u!=null&&u.url)&&(d=SN(h,u.url)),t.onEvent(d||ry())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;wi().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(h){console.error(h)}}}}const DN=ON;function ry(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:gt("no-auth-event")}}/**
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
 */function PN(n,e){lt(n)._logFramework(e)}var NN="@firebase/auth-compat",MN="0.3.7-20230331192943";/**
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
 */const LN=1e3;function ko(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function jN(){return ko()==="http:"||ko()==="https:"}function _2(n=Ve()){return!!((ko()==="file:"||ko()==="ionic:"||ko()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function FN(){return Rf()||kf()}function $N(){return gv()&&(document==null?void 0:document.documentMode)===11}function UN(n=Ve()){return/Edge\/\d+/.test(n)}function VN(n=Ve()){return $N()||UN(n)}function b2(){try{const n=self.localStorage,e=Ca();if(n)return n.setItem(e,"1"),n.removeItem(e),VN()?Yo():!0}catch{return Jf()&&Yo()}return!1}function Jf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function uh(){return(jN()||mv()||_2())&&!FN()&&b2()&&!Jf()}function I2(){return _2()&&typeof document<"u"}async function BN(){return I2()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},LN);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function zN(){return typeof window<"u"?window:null}/**
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
 */const Kt={LOCAL:"local",NONE:"none",SESSION:"session"},oo=D,x2="persistence";function qN(n,e){if(oo(Object.values(Kt).includes(e),n,"invalid-persistence-type"),Rf()){oo(e!==Kt.SESSION,n,"unsupported-persistence-type");return}if(kf()){oo(e===Kt.NONE,n,"unsupported-persistence-type");return}if(Jf()){oo(e===Kt.NONE||e===Kt.LOCAL&&Yo(),n,"unsupported-persistence-type");return}oo(e===Kt.NONE||b2(),n,"unsupported-persistence-type")}async function cd(n){await n._initializationPromise;const e=E2(),t=hi(x2,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function HN(n,e){const t=E2();if(!t)return[];const r=hi(x2,n,e);switch(t.getItem(r)){case Kt.NONE:return[ws];case Kt.LOCAL:return[ra,yi];case Kt.SESSION:return[yi];default:return[]}}function E2(){var n;try{return((n=zN())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const GN=D;class vr{constructor(){this.browserResolver=Wt(lN),this.cordovaResolver=Wt(DN),this.underlyingResolver=null,this._redirectPersistence=yi,this._completeRedirectFn=iu,this._overrideRedirectResult=Qf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return I2()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return GN(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await BN();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function T2(n){return n.unwrap()}function KN(n){return n.wrapped()}/**
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
 */function WN(n){return S2(n)}function QN(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new YN(n,OD(n,e))}else if(r){const i=S2(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function S2(n){const{_tokenResponse:e}=n instanceof Nt?n.customData:n;if(!e)return null;if(!(n instanceof Nt)&&"temporaryProof"in e&&"phoneNumber"in e)return vi.credentialFromResult(n);const t=e.providerId;if(!t||t===so.PASSWORD)return null;let r;switch(t){case so.GOOGLE:r=En;break;case so.FACEBOOK:r=xn;break;case so.GITHUB:r=Tn;break;case so.TWITTER:r=Sn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?_s._create(t,a):Ln._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new os(t).credential({idToken:i,accessToken:s,rawNonce:l})}return n instanceof Nt?r.credentialFromError(n):r.credentialFromResult(n)}function Ft(n,e){return e.catch(t=>{throw t instanceof Nt&&QN(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:WN(t),additionalUserInfo:RD(t),user:zn.getOrCreate(i)}})}async function ud(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Ft(n,t.confirm(r))}}class YN{constructor(e,t){this.resolver=t,this.auth=KN(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ft(T2(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class zn{constructor(e){this._delegate=e,this.multiFactor=MD(e)}static getOrCreate(e){return zn.USER_MAP.has(e)||zn.USER_MAP.set(e,new zn(e)),zn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ft(this.auth,Xv(this._delegate,e))}async linkWithPhoneNumber(e,t){return ud(this.auth,pP(this._delegate,e,t))}async linkWithPopup(e){return Ft(this.auth,xP(this._delegate,e,vr))}async linkWithRedirect(e){return await cd(lt(this.auth)),DP(this._delegate,e,vr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ft(this.auth,Zv(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ud(this.auth,mP(this._delegate,e,t))}reauthenticateWithPopup(e){return Ft(this.auth,IP(this._delegate,e,vr))}async reauthenticateWithRedirect(e){return await cd(lt(this.auth)),RP(this._delegate,e,vr)}sendEmailVerification(e){return wD(this._delegate,e)}async unlink(e){return await sD(this._delegate,e),this}updateEmail(e){return xD(this._delegate,e)}updatePassword(e){return ED(this._delegate,e)}updatePhoneNumber(e){return gP(this._delegate,e)}updateProfile(e){return ID(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return _D(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}zn.USER_MAP=new WeakMap;/**
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
 */const ao=D;class hd{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ao(r,"invalid-api-key",{appName:e.name}),ao(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?vr:void 0;this._delegate=t.initialize({options:{persistence:JN(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(dO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?zn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){jO(this._delegate,e,t)}applyActionCode(e){return uD(this._delegate,e)}checkActionCode(e){return e2(this._delegate,e)}confirmPasswordReset(e,t){return cD(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ft(this._delegate,dD(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return vD(this._delegate,e)}isSignInWithEmailLink(e){return mD(this._delegate,e)}async getRedirectResult(){ao(uh(),this._delegate,"operation-not-supported-in-this-environment");const e=await NP(this._delegate,vr);return e?Ft(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){PN(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=iy(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=iy(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return pD(this._delegate,e,t)}sendPasswordResetEmail(e,t){return lD(this._delegate,e,t||void 0)}async setPersistence(e){qN(this._delegate,e);let t;switch(e){case Kt.SESSION:t=yi;break;case Kt.LOCAL:t=await Wt(ra)._isAvailable()?ra:qf;break;case Kt.NONE:t=ws;break;default:return vt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ft(this._delegate,iD(this._delegate))}signInWithCredential(e){return Ft(this._delegate,Zc(this._delegate,e))}signInWithCustomToken(e){return Ft(this._delegate,aD(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ft(this._delegate,fD(this._delegate,e,t))}signInWithEmailLink(e,t){return Ft(this._delegate,gD(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ud(this._delegate,fP(this._delegate,e,t))}async signInWithPopup(e){return ao(uh(),this._delegate,"operation-not-supported-in-this-environment"),Ft(this._delegate,bP(this._delegate,e,vr))}async signInWithRedirect(e){return ao(uh(),this._delegate,"operation-not-supported-in-this-environment"),await cd(this._delegate),CP(this._delegate,e,vr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return hD(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hd.Persistence=Kt;function iy(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&zn.getOrCreate(o)),error:e,complete:t}}function JN(n,e){const t=HN(n,e);if(typeof self<"u"&&!t.includes(ra)&&t.push(ra),typeof window<"u")for(const r of[qf,yi])t.includes(r)||t.push(r);return t.includes(ws)||t.push(ws),t}/**
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
 */class Xf{constructor(){this.providerId="phone",this._delegate=new vi(T2($s.auth()))}static credential(e,t){return vi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Xf.PHONE_SIGN_IN_METHOD=vi.PHONE_SIGN_IN_METHOD;Xf.PROVIDER_ID=vi.PROVIDER_ID;/**
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
 */const XN=D;class ZN{constructor(e,t,r=$s.app()){var i;XN((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new hP(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const eM="auth-compat";function tM(n){n.INTERNAL.registerComponent(new Mn(eM,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hd(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:qi.EMAIL_SIGNIN,PASSWORD_RESET:qi.PASSWORD_RESET,RECOVER_EMAIL:qi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:qi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:qi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:qi.VERIFY_EMAIL}},EmailAuthProvider:Lr,FacebookAuthProvider:xn,GithubAuthProvider:Tn,GoogleAuthProvider:En,OAuthProvider:os,SAMLAuthProvider:sc,PhoneAuthProvider:Xf,PhoneMultiFactorGenerator:w2,RecaptchaVerifier:ZN,TwitterAuthProvider:Sn,Auth:hd,AuthCredential:Bs,Error:Nt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(NN,MN)}tM($s);var nM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Zf=Zf||{},te=nM||self;function cc(){}function su(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ra(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function rM(n){return Object.prototype.hasOwnProperty.call(n,hh)&&n[hh]||(n[hh]=++iM)}var hh="closure_uid_"+(1e9*Math.random()>>>0),iM=0;function sM(n,e,t){return n.call.apply(n.bind,arguments)}function oM(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function St(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=sM:St=oM,St.apply(null,arguments)}function pl(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function _t(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function jr(){this.s=this.s,this.o=this.o}var aM=0;jr.prototype.s=!1;jr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),aM!=0)&&rM(this)};jr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A2=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ep(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function sy(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(su(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function At(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var lM=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{te.addEventListener("test",cc,e),te.removeEventListener("test",cc,e)}catch{}return n}();function uc(n){return/^[\s\xa0]*$/.test(n)}var oy=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function dh(n,e){return n<e?-1:n>e?1:0}function ou(){var n=te.navigator;return n&&(n=n.userAgent)?n:""}function An(n){return ou().indexOf(n)!=-1}function tp(n){return tp[" "](n),n}tp[" "]=cc;function cM(n){var e=dM;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var uM=An("Opera"),bs=An("Trident")||An("MSIE"),C2=An("Edge"),dd=C2||bs,k2=An("Gecko")&&!(ou().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),hM=ou().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function R2(){var n=te.document;return n?n.documentMode:void 0}var hc;e:{var fh="",ph=function(){var n=ou();if(k2)return/rv:([^\);]+)(\)|;)/.exec(n);if(C2)return/Edge\/([\d\.]+)/.exec(n);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(hM)return/WebKit\/(\S+)/.exec(n);if(uM)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ph&&(fh=ph?ph[1]:""),bs){var mh=R2();if(mh!=null&&mh>parseFloat(fh)){hc=String(mh);break e}}hc=fh}var dM={};function fM(){return cM(function(){let n=0;const e=oy(String(hc)).split("."),t=oy("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=dh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||dh(i[2].length==0,s[2].length==0)||dh(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var fd;if(te.document&&bs){var ay=R2();fd=ay||parseInt(hc,10)||void 0}else fd=void 0;var pM=fd;function ia(n,e){if(At.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(k2){e:{try{tp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:mM[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ia.X.h.call(this)}}_t(ia,At);var mM={2:"touch",3:"pen",4:"mouse"};ia.prototype.h=function(){ia.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Oa="closure_listenable_"+(1e6*Math.random()|0),gM=0;function yM(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++gM,this.ba=this.ea=!1}function au(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function np(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function O2(n){const e={};for(const t in n)e[t]=n[t];return e}const ly="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D2(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<ly.length;s++)t=ly[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function lu(n){this.src=n,this.g={},this.h=0}lu.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=md(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new yM(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function pd(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=A2(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(au(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function md(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var rp="closure_lm_"+(1e6*Math.random()|0),gh={};function P2(n,e,t,r,i){if(r&&r.once)return M2(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)P2(n,e[s],t,r,i);return null}return t=op(t),n&&n[Oa]?n.N(e,t,Ra(r)?!!r.capture:!!r,i):N2(n,e,t,!1,r,i)}function N2(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Ra(i)?!!i.capture:!!i,a=sp(n);if(a||(n[rp]=a=new lu(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=vM(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)lM||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(j2(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function vM(){function n(t){return e.call(n.src,n.listener,t)}const e=wM;return n}function M2(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)M2(n,e[s],t,r,i);return null}return t=op(t),n&&n[Oa]?n.O(e,t,Ra(r)?!!r.capture:!!r,i):N2(n,e,t,!0,r,i)}function L2(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)L2(n,e[s],t,r,i);else r=Ra(r)?!!r.capture:!!r,t=op(t),n&&n[Oa]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=md(s,t,r,i),-1<t&&(au(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=sp(n))&&(e=n.g[e.toString()],n=-1,e&&(n=md(e,t,r,i)),(t=-1<n?e[n]:null)&&ip(t))}function ip(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Oa])pd(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(j2(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=sp(e))?(pd(t,n),t.h==0&&(t.src=null,e[rp]=null)):au(n)}}}function j2(n){return n in gh?gh[n]:gh[n]="on"+n}function wM(n,e){if(n.ba)n=!0;else{e=new ia(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&ip(n),n=t.call(r,e)}return n}function sp(n){return n=n[rp],n instanceof lu?n:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function op(n){return typeof n=="function"?n:(n[yh]||(n[yh]=function(e){return n.handleEvent(e)}),n[yh])}function ct(){jr.call(this),this.i=new lu(this),this.P=this,this.I=null}_t(ct,jr);ct.prototype[Oa]=!0;ct.prototype.removeEventListener=function(n,e,t,r){L2(this,n,e,t,r)};function yt(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new At(e,n);else if(e instanceof At)e.target=e.target||n;else{var i=e;e=new At(r,n),D2(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=ml(o,r,!0,e)&&i}if(o=e.g=n,i=ml(o,r,!0,e)&&i,i=ml(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=ml(o,r,!1,e)&&i}ct.prototype.M=function(){if(ct.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)au(t[r]);delete n.g[e],n.h--}}this.I=null};ct.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ct.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ml(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,l=o.ha||o.src;o.ea&&pd(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ap=te.JSON.stringify;function _M(){var n=U2;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class bM{constructor(){this.h=this.g=null}add(e,t){const r=F2.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var F2=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new IM,n=>n.reset());class IM{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xM(n){te.setTimeout(()=>{throw n},0)}function $2(n,e){gd||EM(),yd||(gd(),yd=!0),U2.add(n,e)}var gd;function EM(){var n=te.Promise.resolve(void 0);gd=function(){n.then(TM)}}var yd=!1,U2=new bM;function TM(){for(var n;n=_M();){try{n.h.call(n.g)}catch(t){xM(t)}var e=F2;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}yd=!1}function cu(n,e){ct.call(this),this.h=n||1,this.g=e||te,this.j=St(this.lb,this),this.l=Date.now()}_t(cu,ct);G=cu.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),yt(this,"tick"),this.ca&&(lp(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lp(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}G.M=function(){cu.X.M.call(this),lp(this),delete this.g};function cp(n,e,t){if(typeof n=="function")t&&(n=St(n,t));else if(n&&typeof n.handleEvent=="function")n=St(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(n,e||0)}function V2(n){n.g=cp(()=>{n.g=null,n.i&&(n.i=!1,V2(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class SM extends jr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:V2(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sa(n){jr.call(this),this.h=n,this.g={}}_t(sa,jr);var cy=[];function B2(n,e,t,r){Array.isArray(t)||(t&&(cy[0]=t.toString()),t=cy);for(var i=0;i<t.length;i++){var s=P2(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function z2(n){np(n.g,function(e,t){this.g.hasOwnProperty(t)&&ip(e)},n),n.g={}}sa.prototype.M=function(){sa.X.M.call(this),z2(this)};sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uu(){this.g=!0}uu.prototype.Aa=function(){this.g=!1};function AM(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function CM(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Zi(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+RM(n,t)+(r?" "+r:"")})}function kM(n,e){n.info(function(){return"TIMEOUT: "+e})}uu.prototype.info=function(){};function RM(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ap(t)}catch{return e}}var Li={},uy=null;function hu(){return uy=uy||new ct}Li.Pa="serverreachability";function q2(n){At.call(this,Li.Pa,n)}_t(q2,At);function oa(n){const e=hu();yt(e,new q2(e))}Li.STAT_EVENT="statevent";function H2(n,e){At.call(this,Li.STAT_EVENT,n),this.stat=e}_t(H2,At);function Pt(n){const e=hu();yt(e,new H2(e,n))}Li.Qa="timingevent";function G2(n,e){At.call(this,Li.Qa,n),this.size=e}_t(G2,At);function Da(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){n()},e)}var du={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},K2={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function up(){}up.prototype.h=null;function hy(n){return n.h||(n.h=n.i())}function W2(){}var Pa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function hp(){At.call(this,"d")}_t(hp,At);function dp(){At.call(this,"c")}_t(dp,At);var vd;function fu(){}_t(fu,up);fu.prototype.g=function(){return new XMLHttpRequest};fu.prototype.i=function(){return{}};vd=new fu;function Na(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new sa(this),this.O=OM,n=dd?125:void 0,this.T=new cu(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Q2}function Q2(){this.i=null,this.g="",this.h=!1}var OM=45e3,wd={},dc={};G=Na.prototype;G.setTimeout=function(n){this.O=n};function _d(n,e,t){n.K=1,n.v=mu(Xn(e)),n.s=t,n.P=!0,Y2(n,null)}function Y2(n,e){n.F=Date.now(),Ma(n),n.A=Xn(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),iw(t.i,"t",r),n.C=0,t=n.l.H,n.h=new Q2,n.g=Tw(n.l,t?e:null,!n.s),0<n.N&&(n.L=new SM(St(n.La,n,n.g),n.N)),B2(n.S,n.g,"readystatechange",n.ib),e=n.H?O2(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),oa(),AM(n.j,n.u,n.A,n.m,n.U,n.s)}G.ib=function(n){n=n.target;const e=this.L;e&&qn(n)==3?e.l():this.La(n)};G.La=function(n){try{if(n==this.g)e:{const u=qn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||dd||this.g&&(this.h.h||this.g.fa()||my(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?oa(3):oa(2)),pu(this);var t=this.g.aa();this.Y=t;t:if(J2(this)){var r=my(this.g);n="";var i=r.length,s=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ii(this),Ro(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,CM(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!uc(a)){var c=a;break t}}c=null}if(t=c)Zi(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bd(this,t);else{this.i=!1,this.o=3,Pt(12),ii(this),Ro(this);break e}}this.P?(X2(this,u,o),dd&&this.i&&u==3&&(B2(this.S,this.T,"tick",this.hb),this.T.start())):(Zi(this.j,this.m,o,null),bd(this,o)),u==4&&ii(this),this.i&&!this.I&&(u==4?bw(this.l,this):(this.i=!1,Ma(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),ii(this),Ro(this)}}}catch{}finally{}};function J2(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function X2(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=DM(n,t),i==dc){e==4&&(n.o=4,Pt(14),r=!1),Zi(n.j,n.m,null,"[Incomplete Response]");break}else if(i==wd){n.o=4,Pt(15),Zi(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Zi(n.j,n.m,i,null),bd(n,i);J2(n)&&i!=dc&&i!=wd&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Pt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),wp(e),e.K=!0,Pt(11))):(Zi(n.j,n.m,t,"[Invalid Chunked Response]"),ii(n),Ro(n))}G.hb=function(){if(this.g){var n=qn(this.g),e=this.g.fa();this.C<e.length&&(pu(this),X2(this,n,e),this.i&&n!=4&&Ma(this))}};function DM(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?dc:(t=Number(e.substring(t,r)),isNaN(t)?wd:(r+=1,r+t>e.length?dc:(e=e.substr(r,t),n.C=r+t,e)))}G.cancel=function(){this.I=!0,ii(this)};function Ma(n){n.V=Date.now()+n.O,Z2(n,n.O)}function Z2(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Da(St(n.gb,n),e)}function pu(n){n.B&&(te.clearTimeout(n.B),n.B=null)}G.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(kM(this.j,this.A),this.K!=2&&(oa(),Pt(17)),ii(this),this.o=2,Ro(this)):Z2(this,this.V-n)};function Ro(n){n.l.G==0||n.I||bw(n.l,n)}function ii(n){pu(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,lp(n.T),z2(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function bd(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Id(t.h,n))){if(!n.J&&Id(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)mc(t),vu(t);else break e;vp(t),Pt(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Da(St(t.cb,t),6e3));if(1>=aw(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else si(t,11)}else if((n.J||t.g==n)&&mc(t),!uc(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.T=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.I=c[1],t.ka=c[2];const u=c[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=c[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(fp(s,s.h),s.h=null))}if(r.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.za=g,Pe(r.F,r.D,g))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=Ew(r,r.H?r.ka:null,r.V),o.J){lw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(pu(a),Ma(a)),r.g=o}else ww(r);0<t.i.length&&wu(t)}else c[0]!="stop"&&c[0]!="close"||si(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?si(t,7):yp(t):c[0]!="noop"&&t.l&&t.l.wa(c),t.A=0)}}oa(4)}catch{}}function PM(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(su(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function NM(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(su(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function ew(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(su(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=NM(n),r=PM(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var tw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MM(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fi(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof fi){this.h=e!==void 0?e:n.h,fc(this,n.j),this.s=n.s,this.g=n.g,pc(this,n.m),this.l=n.l,e=n.i;var t=new aa;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),dy(this,t),this.o=n.o}else n&&(t=String(n).match(tw))?(this.h=!!e,fc(this,t[1]||"",!0),this.s=wo(t[2]||""),this.g=wo(t[3]||"",!0),pc(this,t[4]),this.l=wo(t[5]||"",!0),dy(this,t[6]||"",!0),this.o=wo(t[7]||"")):(this.h=!!e,this.i=new aa(null,this.h))}fi.prototype.toString=function(){var n=[],e=this.j;e&&n.push(_o(e,fy,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(_o(e,fy,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(_o(t,t.charAt(0)=="/"?FM:jM,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",_o(t,UM)),n.join("")};function Xn(n){return new fi(n)}function fc(n,e,t){n.j=t?wo(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function pc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function dy(n,e,t){e instanceof aa?(n.i=e,VM(n.i,n.h)):(t||(e=_o(e,$M)),n.i=new aa(e,n.h))}function Pe(n,e,t){n.i.set(e,t)}function mu(n){return Pe(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function wo(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function _o(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,LM),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function LM(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var fy=/[#\/\?@]/g,jM=/[#\?:]/g,FM=/[#\?]/g,$M=/[#\?@]/g,UM=/#/g;function aa(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Fr(n){n.g||(n.g=new Map,n.h=0,n.i&&MM(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}G=aa.prototype;G.add=function(n,e){Fr(this),this.i=null,n=qs(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function nw(n,e){Fr(n),e=qs(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function rw(n,e){return Fr(n),e=qs(n,e),n.g.has(e)}G.forEach=function(n,e){Fr(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};G.oa=function(){Fr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};G.W=function(n){Fr(this);let e=[];if(typeof n=="string")rw(this,n)&&(e=e.concat(this.g.get(qs(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};G.set=function(n,e){return Fr(this),this.i=null,n=qs(this,n),rw(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};G.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function iw(n,e,t){nw(n,e),0<t.length&&(n.i=null,n.g.set(qs(n,e),ep(t)),n.h+=t.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function qs(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function VM(n,e){e&&!n.j&&(Fr(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(nw(this,r),iw(this,i,t))},n)),n.j=e}var BM=class{constructor(e,t){this.h=e,this.g=t}};function sw(n){this.l=n||zM,te.PerformanceNavigationTiming?(n=te.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zM=10;function ow(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function aw(n){return n.h?1:n.g?n.g.size:0}function Id(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function fp(n,e){n.g?n.g.add(e):n.h=e}function lw(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}sw.prototype.cancel=function(){if(this.i=cw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function cw(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ep(n.i)}function pp(){}pp.prototype.stringify=function(n){return te.JSON.stringify(n,void 0)};pp.prototype.parse=function(n){return te.JSON.parse(n,void 0)};function qM(){this.g=new pp}function HM(n,e,t){const r=t||"";try{ew(n,function(i,s){let o=i;Ra(i)&&(o=ap(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function GM(n,e){const t=new uu;if(te.Image){const r=new Image;r.onload=pl(gl,t,r,"TestLoadImage: loaded",!0,e),r.onerror=pl(gl,t,r,"TestLoadImage: error",!1,e),r.onabort=pl(gl,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=pl(gl,t,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function gl(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function La(n){this.l=n.ac||null,this.j=n.jb||!1}_t(La,up);La.prototype.g=function(){return new gu(this.l,this.j)};La.prototype.i=function(n){return function(){return n}}({});function gu(n,e){ct.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=mp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_t(gu,ct);var mp=0;G=gu.prototype;G.open=function(n,e){if(this.readyState!=mp)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,la(this)};G.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ja(this)),this.readyState=mp};G.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uw(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function uw(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}G.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ja(this):la(this),this.readyState==3&&uw(this)}};G.Va=function(n){this.g&&(this.response=this.responseText=n,ja(this))};G.Ua=function(n){this.g&&(this.response=n,ja(this))};G.ga=function(){this.g&&ja(this)};function ja(n){n.readyState=4,n.l=null,n.j=null,n.A=null,la(n)}G.setRequestHeader=function(n,e){this.v.append(n,e)};G.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function la(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(gu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var KM=te.JSON.parse;function ze(n){ct.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hw,this.K=this.L=!1}_t(ze,ct);var hw="",WM=/^https?$/i,QM=["POST","PUT"];G=ze.prototype;G.Ka=function(n){this.L=n};G.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vd.g(),this.C=this.u?hy(this.u):hy(vd),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){py(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&n instanceof te.FormData,!(0<=A2(QM,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pw(this),0<this.B&&((this.K=YM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=cp(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){py(this,s)}};function YM(n){return bs&&fM()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}G.qa=function(){typeof Zf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function py(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,dw(n),yu(n)}function dw(n){n.D||(n.D=!0,yt(n,"complete"),yt(n,"error"))}G.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,yt(this,"complete"),yt(this,"abort"),yu(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yu(this,!0)),ze.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?fw(this):this.fb())};G.fb=function(){fw(this)};function fw(n){if(n.h&&typeof Zf<"u"&&(!n.C[1]||qn(n)!=4||n.aa()!=2)){if(n.v&&qn(n)==4)cp(n.Ha,0,n);else if(yt(n,"readystatechange"),qn(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(tw)[1]||null;if(!i&&te.self&&te.self.location){var s=te.self.location.protocol;i=s.substr(0,s.length-1)}r=!WM.test(i?i.toLowerCase():"")}t=r}if(t)yt(n,"complete"),yt(n,"success");else{n.m=6;try{var o=2<qn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",dw(n)}}finally{yu(n)}}}}function yu(n,e){if(n.g){pw(n);const t=n.g,r=n.C[0]?cc:null;n.g=null,n.C=null,e||yt(n,"ready");try{t.onreadystatechange=r}catch{}}}function pw(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(te.clearTimeout(n.A),n.A=null)}function qn(n){return n.g?n.g.readyState:0}G.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),KM(e)}};function my(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case hw:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mw(n){let e="";return np(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function gp(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=mw(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Pe(n,e,t))}function lo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function gw(n){this.Ca=0,this.i=[],this.j=new uu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lo("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lo("baseRetryDelayMs",5e3,n),this.bb=lo("retryDelaySeedMs",1e4,n),this.$a=lo("forwardChannelMaxRetries",2,n),this.ta=lo("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new sw(n&&n.concurrentRequestLimit),this.Fa=new qM,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=gw.prototype;G.ma=8;G.G=1;function yp(n){if(yw(n),n.G==3){var e=n.U++,t=Xn(n.F);Pe(t,"SID",n.I),Pe(t,"RID",e),Pe(t,"TYPE","terminate"),Fa(n,t),e=new Na(n,n.j,e,void 0),e.K=2,e.v=mu(Xn(t)),t=!1,te.navigator&&te.navigator.sendBeacon&&(t=te.navigator.sendBeacon(e.v.toString(),"")),!t&&te.Image&&(new Image().src=e.v,t=!0),t||(e.g=Tw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ma(e)}xw(n)}function vu(n){n.g&&(wp(n),n.g.cancel(),n.g=null)}function yw(n){vu(n),n.u&&(te.clearTimeout(n.u),n.u=null),mc(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&te.clearTimeout(n.m),n.m=null)}function wu(n){ow(n.h)||n.m||(n.m=!0,$2(n.Ja,n),n.C=0)}function JM(n,e){return aw(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Da(St(n.Ja,n,e),Iw(n,n.C)),n.C++,!0)}G.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Na(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=O2(s),D2(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=vw(this,i,e),t=Xn(this.F),Pe(t,"RID",n),Pe(t,"CVER",22),this.D&&Pe(t,"X-HTTP-Session-Id",this.D),Fa(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(mw(s)))+"&"+e:this.o&&gp(t,this.o,s)),fp(this.h,i),this.Ya&&Pe(t,"TYPE","init"),this.O?(Pe(t,"$req",e),Pe(t,"SID","null"),i.Z=!0,_d(i,t,null)):_d(i,t,e),this.G=2}}else this.G==3&&(n?gy(this,n):this.i.length==0||ow(this.h)||gy(this))};function gy(n,e){var t;e?t=e.m:t=n.U++;const r=Xn(n.F);Pe(r,"SID",n.I),Pe(r,"RID",t),Pe(r,"AID",n.T),Fa(n,r),n.o&&n.s&&gp(r,n.o,n.s),t=new Na(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=vw(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),fp(n.h,t),_d(t,r,e)}function Fa(n,e){n.ia&&np(n.ia,function(t,r){Pe(e,r,t)}),n.l&&ew({},function(t,r){Pe(e,r,t)})}function vw(n,e,t){t=Math.min(n.i.length,t);var r=n.l?St(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{HM(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function ww(n){n.g||n.u||(n.Z=1,$2(n.Ia,n),n.A=0)}function vp(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Da(St(n.Ia,n),Iw(n,n.A)),n.A++,!0)}G.Ia=function(){if(this.u=null,_w(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Da(St(this.eb,this),n)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Pt(10),vu(this),_w(this))};function wp(n){n.B!=null&&(te.clearTimeout(n.B),n.B=null)}function _w(n){n.g=new Na(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Xn(n.sa);Pe(e,"RID","rpc"),Pe(e,"SID",n.I),Pe(e,"CI",n.L?"0":"1"),Pe(e,"AID",n.T),Pe(e,"TYPE","xmlhttp"),Fa(n,e),n.o&&n.s&&gp(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=mu(Xn(e)),t.s=null,t.P=!0,Y2(t,n)}G.cb=function(){this.v!=null&&(this.v=null,vu(this),vp(this),Pt(19))};function mc(n){n.v!=null&&(te.clearTimeout(n.v),n.v=null)}function bw(n,e){var t=null;if(n.g==e){mc(n),wp(n),n.g=null;var r=2}else if(Id(n.h,e))t=e.D,lw(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=hu(),yt(r,new G2(r,t)),wu(n)}else ww(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&JM(n,e)||r==2&&vp(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:si(n,5);break;case 4:si(n,10);break;case 3:si(n,6);break;default:si(n,2)}}}function Iw(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function si(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=St(n.kb,n);t||(t=new fi("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||fc(t,"https"),mu(t)),GM(t.toString(),r)}else Pt(2);n.G=0,n.l&&n.l.va(e),xw(n),yw(n)}G.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function xw(n){if(n.G=0,n.la=[],n.l){const e=cw(n.h);(e.length!=0||n.i.length!=0)&&(sy(n.la,e),sy(n.la,n.i),n.h.i.length=0,ep(n.i),n.i.length=0),n.l.ua()}}function Ew(n,e,t){var r=t instanceof fi?Xn(t):new fi(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),pc(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fi(null,void 0);r&&fc(s,r),e&&(s.g=e),i&&pc(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&Pe(r,t,e),Pe(r,"VER",n.ma),Fa(n,r),r}function Tw(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new ze(new La({jb:!0})):new ze(n.ra),e.Ka(n.H),e}function Sw(){}G=Sw.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function gc(){if(bs&&!(10<=Number(pM)))throw Error("Environmental error: no available transport.")}gc.prototype.g=function(n,e){return new Qt(n,e)};function Qt(n,e){ct.call(this),this.g=new gw(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!uc(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!uc(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Hs(this)}_t(Qt,ct);Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Pt(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Ew(n,null,n.V),wu(n)};Qt.prototype.close=function(){yp(this.g)};Qt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ap(n),n=t);e.i.push(new BM(e.ab++,n)),e.G==3&&wu(e)};Qt.prototype.M=function(){this.g.l=null,delete this.j,yp(this.g),delete this.g,Qt.X.M.call(this)};function Aw(n){hp.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}_t(Aw,hp);function Cw(){dp.call(this),this.status=1}_t(Cw,dp);function Hs(n){this.g=n}_t(Hs,Sw);Hs.prototype.xa=function(){yt(this.g,"a")};Hs.prototype.wa=function(n){yt(this.g,new Aw(n))};Hs.prototype.va=function(n){yt(this.g,new Cw)};Hs.prototype.ua=function(){yt(this.g,"b")};gc.prototype.createWebChannel=gc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;du.NO_ERROR=0;du.TIMEOUT=8;du.HTTP_ERROR=6;K2.COMPLETE="complete";W2.EventType=Pa;Pa.OPEN="a";Pa.CLOSE="b";Pa.ERROR="c";Pa.MESSAGE="d";ct.prototype.listen=ct.prototype.N;ze.prototype.listenOnce=ze.prototype.O;ze.prototype.getLastError=ze.prototype.Oa;ze.prototype.getLastErrorCode=ze.prototype.Ea;ze.prototype.getStatus=ze.prototype.aa;ze.prototype.getResponseJson=ze.prototype.Sa;ze.prototype.getResponseText=ze.prototype.fa;ze.prototype.send=ze.prototype.da;ze.prototype.setWithCredentials=ze.prototype.Ka;var XM=function(){return new gc},ZM=function(){return hu()},vh=du,eL=K2,tL=Li,yy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nL=La,yl=W2,rL=ze;const vy="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let Gs="9.19.0";/**
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
 */const Cr=new Wc("@firebase/firestore");function xd(){return Cr.logLevel}function iL(n){Cr.setLogLevel(n)}function R(n,...e){if(Cr.logLevel<=ge.DEBUG){const t=e.map(_p);Cr.debug(`Firestore (${Gs}): ${n}`,...t)}}function Ge(n,...e){if(Cr.logLevel<=ge.ERROR){const t=e.map(_p);Cr.error(`Firestore (${Gs}): ${n}`,...t)}}function Zn(n,...e){if(Cr.logLevel<=ge.WARN){const t=e.map(_p);Cr.warn(`Firestore (${Gs}): ${n}`,...t)}}function _p(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+n;throw Ge(e),new Error(e)}function K(n,e){n||z()}function sL(n,e){n||z()}function F(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class at{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class kw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class aL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lL{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new kw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new ot(e)}}class cL{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class uL{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new cL(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.T=t.token,new hL(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Rw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function Is(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Ow(n){return n+"\0"}/**
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
 */class Le{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new C(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Le(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Le(0,0))}static max(){return new W(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ca{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ca.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ca?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fe extends ca{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const pL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ca{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return pL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(fe.fromString(e))}static fromName(e){return new L(fe.fromString(e).popFirst(5))}static empty(){return new L(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new fe(e.slice()))}}/**
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
 */class Dw{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Ed(n){return n.fields.find(e=>e.kind===2)}function Wr(n){return n.fields.filter(e=>e.kind!==2)}Dw.UNKNOWN_ID=-1;class mL{constructor(e,t){this.fieldPath=e,this.kind=t}}class yc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new yc(0,Yt.min())}}function Pw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new Yt(i,L.empty(),e)}function Nw(n){return new Yt(n.readTime,n.key,-1)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(W.min(),L.empty(),-1)}static max(){return new Yt(W.max(),L.empty(),-1)}}function bp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
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
 */const Mw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $r(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Mw)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,t){return new b((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class _u{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new at,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Oo(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=Ip(r.target.error);this.R.reject(new Oo(e,i))}}static open(e,t,r,i){try{return new _u(t,e.transaction(i,r))}catch(s){throw new Oo(t,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new yL(t)}}class un{constructor(e,t,r){this.name=e,this.version=t,this.V=r,un.S(Ve())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),Jr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Yo())return!1;if(un.C())return!0;const e=Ve(),t=un.S(e),r=0<t&&t<10,i=un.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Oo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Oo(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.M(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=_u.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.P(),c)).catch(c=>(a.abort(c),b.reject(c))).toPromise();return l.catch(()=>{}),await a.v,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class gL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Jr(this.L.delete())}}class Oo extends C{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ur(n){return n.name==="IndexedDbTransactionError"}class yL{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(R("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Jr(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),Jr(this.store.add(e))}get(e){return Jr(this.store.get(e)).next(t=>(t===void 0&&(t=null),R("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),Jr(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),Jr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new b((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}X(e){const t=this.cursor({});return new b((r,i)=>{t.onerror=s=>{const o=Ip(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new gL(a),c=t(a.primaryKey,a.value,l);if(c instanceof b){const u=c.catch(h=>(l.done(),b.reject(h)));r.push(u)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>b.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Jr(n){return new b((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Ip(r.target.error);t(i)}})}let wy=!1;function Ip(n){const e=un.S(Ve());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wy||(wy=!0,setTimeout(()=>{throw r},0)),r}}return n}class vL{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Ur(t)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await $r(t)}await this.et(6e4)})}}class wL{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Nw(s);bp(o,r)>0&&(r=o)}),new Yt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ut{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ut.ct=-1;function $a(n){return n==null}function ua(n){return n===0&&1/n==-1/0}function jw(n){return typeof n=="number"&&Number.isInteger(n)&&!ua(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Mt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_y(e)),e=_L(n.get(t),e);return _y(e)}function _L(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function _y(n){return n+""}function kn(n){const e=n.length;if(K(e>=2),e===2)return K(n.charAt(0)===""&&n.charAt(1)===""),fe.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&z(),n.charAt(o+1)){case"":const a=n.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:z()}s=o+2}return new fe(r)}/**
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
 */const by=["userId","batchId"];/**
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
 */function Fl(n,e){return[n,Mt(e)]}function Fw(n,e,t){return[n,Mt(e),t]}const bL={},IL=["prefixPath","collectionGroup","readTime","documentId"],xL=["prefixPath","collectionGroup","documentId"],EL=["collectionGroup","readTime","prefixPath","documentId"],TL=["canonicalId","targetId"],SL=["targetId","path"],AL=["path","targetId"],CL=["collectionId","parent"],kL=["indexId","uid"],RL=["uid","sequenceNumber"],OL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],DL=["indexId","uid","orderedDocumentKey"],PL=["userId","collectionPath","documentId"],NL=["userId","collectionPath","largestBatchId"],ML=["userId","collectionGroup","largestBatchId"],$w=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],LL=[...$w,"documentOverlays"],Uw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Vw=Uw,jL=[...Vw,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Td extends Lw{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function ht(n,e){const t=F(n);return un.O(t.at,e)}/**
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
 */function Iy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ji(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class qe{constructor(e,t){this.comparator=e,this.root=t||pt.EMPTY}insert(e,t){return new qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new pt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(n,e,t,r,i){return this}insert(n,e,t){return new pt(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Te{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xy(this.data.getIterator())}getIteratorFrom(e){return new xy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class xy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Hi(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new Te(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class FL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function $L(){return typeof atob<"u"}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new FL("Invalid base64 string: "+i):i}}(e);return new rt(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const UL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(n){if(K(!!n),typeof n=="string"){let e=0;const t=UL.exec(n);if(K(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _i(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
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
 */function xp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function zw(n){const e=n.mapValue.fields.__previous_value__;return xp(e)?zw(e):e}function ha(n){const e=kr(n.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class VL{constructor(e,t,r,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Rr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},$l={nullValue:"NULL_VALUE"};function bi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xp(n)?4:qw(n)?9007199254740991:10:z()}function jn(n,e){if(n===e)return!0;const t=bi(n);if(t!==bi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ha(n).isEqual(ha(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return _i(r.bytesValue).isEqual(_i(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Be(r.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Be(r.integerValue)===Be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Be(r.doubleValue),o=Be(i.doubleValue);return s===o?ua(s)===ua(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Is(n.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Iy(s)!==Iy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!jn(s[a],o[a])))return!1;return!0}(n,e);default:return z()}}function da(n,e){return(n.values||[]).find(t=>jn(t,e))!==void 0}function Or(n,e){if(n===e)return 0;const t=bi(n),r=bi(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Be(i.integerValue||i.doubleValue),a=Be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ey(n.timestampValue,e.timestampValue);case 4:return Ey(ha(n),ha(e));case 5:return ie(n.stringValue,e.stringValue);case 6:return function(i,s){const o=_i(i),a=_i(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ie(o[l],a[l]);if(c!==0)return c}return ie(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ie(Be(i.latitude),Be(s.latitude));return o!==0?o:ie(Be(i.longitude),Be(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Or(o[l],a[l]);if(c)return c}return ie(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===wr.mapValue&&s===wr.mapValue)return 0;if(i===wr.mapValue)return 1;if(s===wr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ie(a[u],c[u]);if(h!==0)return h;const d=Or(o[a[u]],l[c[u]]);if(d!==0)return d}return ie(a.length,c.length)}(n.mapValue,e.mapValue);default:throw z()}}function Ey(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=kr(n),r=kr(e),i=ie(t.seconds,r.seconds);return i!==0?i:ie(t.nanos,r.nanos)}function xs(n){return Sd(n)}function Sd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?_i(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,L.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Sd(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Sd(r.fields[a])}`;return s+"}"}(n.mapValue):z();var e,t}function Ii(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ad(n){return!!n&&"integerValue"in n}function fa(n){return!!n&&"arrayValue"in n}function Ty(n){return!!n&&"nullValue"in n}function Sy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ul(n){return!!n&&"mapValue"in n}function Do(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ji(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Do(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Do(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function BL(n){return"nullValue"in n?$l:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ii(Rr.empty(),L.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:z()}function zL(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ii(Rr.empty(),L.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?wr:z()}function Ay(n,e){const t=Or(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Cy(n,e){const t=Or(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ul(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(t)}setAll(e){let t=Ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Do(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ul(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ji(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(Do(this.value))}}function Hw(n){const e=[];return ji(n.fields,(t,r)=>{const i=new Ke([t]);if(Ul(r)){const s=Hw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
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
 */class Re{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,W.min(),W.min(),W.min(),mt.empty(),0)}static newFoundDocument(e,t,r,i){return new Re(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new Re(e,2,t,W.min(),W.min(),mt.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,W.min(),W.min(),mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function ky(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),t.key):r=Or(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ry(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ls{constructor(e,t="asc"){this.field=e,this.dir=t}}function qL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gw{}class ue extends Gw{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new HL(e,t,r):t==="array-contains"?new WL(e,r):t==="in"?new Xw(e,r):t==="not-in"?new QL(e,r):t==="array-contains-any"?new YL(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new GL(e,r):new KL(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Or(t,this.value)):t!==null&&bi(this.value)===bi(t)&&this.matchesComparison(Or(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class be extends Gw{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new be(e,t)}matches(e){return Es(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Es(n){return n.op==="and"}function Cd(n){return n.op==="or"}function Ep(n){return Kw(n)&&Es(n)}function Kw(n){for(const e of n.filters)if(e instanceof be)return!1;return!0}function kd(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+xs(n.value);if(Ep(n))return n.filters.map(e=>kd(e)).join(",");{const e=n.filters.map(t=>kd(t)).join(",");return`${n.op}(${e})`}}function Ww(n,e){return n instanceof ue?function(t,r){return r instanceof ue&&t.op===r.op&&t.field.isEqual(r.field)&&jn(t.value,r.value)}(n,e):n instanceof be?function(t,r){return r instanceof be&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&Ww(s,r.filters[o]),!0):!1}(n,e):void z()}function Qw(n,e){const t=n.filters.concat(e);return be.create(t,n.op)}function Yw(n){return n instanceof ue?function(e){return`${e.field.canonicalString()} ${e.op} ${xs(e.value)}`}(n):n instanceof be?function(e){return e.op.toString()+" {"+e.getFilters().map(Yw).join(" ,")+"}"}(n):"Filter"}class HL extends ue{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class GL extends ue{constructor(e,t){super(e,"in",t),this.keys=Jw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class KL extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Jw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class WL extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fa(t)&&da(t.arrayValue,this.value)}}class Xw extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&da(this.value.arrayValue,t)}}class QL extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!da(this.value.arrayValue,t)}}class YL extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>da(this.value.arrayValue,r))}}/**
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
 */class JL{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Rd(n,e=null,t=[],r=[],i=null,s=null,o=null){return new JL(n,e,t,r,i,s,o)}function xi(n){const e=F(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>kd(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),$a(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xs(r)).join(",")),e.ft=t}return e.ft}function Ua(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ww(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ry(n.startAt,e.startAt)&&Ry(n.endAt,e.endAt)}function vc(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function wc(n,e){return n.filters.filter(t=>t instanceof ue&&t.field.isEqual(e))}function Oy(n,e,t){let r=$l,i=!0;for(const s of wc(n,e)){let o=$l,a=!0;switch(s.op){case"<":case"<=":o=BL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=$l}Ay({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Ay({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Dy(n,e,t){let r=wr,i=!0;for(const s of wc(n,e)){let o=wr,a=!0;switch(s.op){case">=":case">":o=zL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=wr}Cy({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Cy({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class ir{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Zw(n,e,t,r,i,s,o,a){return new ir(n,e,t,r,i,s,o,a)}function Ks(n){return new ir(n)}function Py(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Tp(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function bu(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Sp(n){return n.collectionGroup!==null}function pi(n){const e=F(n);if(e.dt===null){e.dt=[];const t=bu(e),r=Tp(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new ls(t)),e.dt.push(new ls(Ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ls(Ke.keyField(),s))}}}return e.dt}function qt(n){const e=F(n);if(!e.wt)if(e.limitType==="F")e.wt=Rd(e.path,e.collectionGroup,pi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of pi(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new ls(s.field,o))}const r=e.endAt?new Dr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Dr(e.startAt.position,e.startAt.inclusive):null;e.wt=Rd(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.wt}function Od(n,e){e.getFirstInequalityField(),bu(n);const t=n.filters.concat([e]);return new ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function _c(n,e,t){return new ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Va(n,e){return Ua(qt(n),qt(e))&&n.limitType===e.limitType}function e_(n){return`${xi(qt(n))}|lt:${n.limitType}`}function Dd(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>Yw(r)).join(", ")}]`),$a(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>xs(r)).join(",")),`Target(${t})`}(qt(n))}; limitType=${n.limitType})`}function Ba(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):L.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of pi(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=ky(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,pi(t),r)||t.endAt&&!function(i,s,o){const a=ky(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,pi(t),r))}(n,e)}function t_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function n_(n){return(e,t)=>{let r=!1;for(const i of pi(n)){const s=XL(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XL(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Or(a,l):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */class Vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bw(this.inner)}size(){return this.innerSize}}/**
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
 */const ZL=new qe(L.comparator);function Bt(){return ZL}const r_=new qe(L.comparator);function bo(...n){let e=r_;for(const t of n)e=e.insert(t.key,t);return e}function i_(n){let e=r_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return Po()}function s_(){return Po()}function Po(){return new Vr(n=>n.toString(),(n,e)=>n.isEqual(e))}const e3=new qe(L.comparator),t3=new Te(L.comparator);function se(...n){let e=t3;for(const t of n)e=e.add(t);return e}const n3=new Te(ie);function Iu(){return n3}/**
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
 */function o_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function a_(n){return{integerValue:""+n}}function l_(n,e){return jw(e)?a_(e):o_(n,e)}/**
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
 */class xu{constructor(){this._=void 0}}function r3(n,e,t){return n instanceof Ts?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Ei?u_(n,e):n instanceof Ti?h_(n,e):function(r,i){const s=c_(r,i),o=Ny(s)+Ny(r._t);return Ad(s)&&Ad(r._t)?a_(o):o_(r.serializer,o)}(n,e)}function i3(n,e,t){return n instanceof Ei?u_(n,e):n instanceof Ti?h_(n,e):t}function c_(n,e){return n instanceof Ss?Ad(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Ts extends xu{}class Ei extends xu{constructor(e){super(),this.elements=e}}function u_(n,e){const t=d_(e);for(const r of n.elements)t.some(i=>jn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ti extends xu{constructor(e){super(),this.elements=e}}function h_(n,e){let t=d_(e);for(const r of n.elements)t=t.filter(i=>!jn(i,r));return{arrayValue:{values:t}}}class Ss extends xu{constructor(e,t){super(),this.serializer=e,this._t=t}}function Ny(n){return Be(n.integerValue||n.doubleValue)}function d_(n){return fa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class za{constructor(e,t){this.field=e,this.transform=t}}function s3(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Ei&&r instanceof Ei||t instanceof Ti&&r instanceof Ti?Is(t.elements,r.elements,jn):t instanceof Ss&&r instanceof Ss?jn(t._t,r._t):t instanceof Ts&&r instanceof Ts}(n.transform,e.transform)}class o3{constructor(e,t){this.version=e,this.transformResults=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Eu{}function f_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qs(n.key,Ne.none()):new Ws(n.key,n.data,Ne.none());{const t=n.data,r=mt.empty();let i=new Te(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new sr(n.key,r,new Vt(i.toArray()),Ne.none())}}function a3(n,e,t){n instanceof Ws?function(r,i,s){const o=r.value.clone(),a=Ly(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof sr?function(r,i,s){if(!Vl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ly(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(p_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function No(n,e,t,r){return n instanceof Ws?function(i,s,o,a){if(!Vl(i.precondition,s))return o;const l=i.value.clone(),c=jy(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof sr?function(i,s,o,a){if(!Vl(i.precondition,s))return o;const l=jy(i.fieldTransforms,a,s),c=s.data;return c.setAll(p_(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(i,s,o){return Vl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function l3(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=c_(r.transform,i||null);s!=null&&(t===null&&(t=mt.empty()),t.set(r.field,s))}return t||null}function My(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Is(t,r,(i,s)=>s3(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ws extends Eu{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sr extends Eu{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function p_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ly(n,e,t){const r=new Map;K(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,i3(o,a,t[i]))}return r}function jy(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,r3(s,o,e))}return r}class Qs extends Eu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ap extends Eu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cp{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&a3(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=No(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=No(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=s_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=f_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(t,r)=>My(t,r))&&Is(this.baseMutations,e.baseMutations,(t,r)=>My(t,r))}}class kp{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){K(e.mutations.length===r.length);let i=e3;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new kp(e,t,r,i)}}/**
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
 */class Rp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class c3{constructor(e){this.count=e}}/**
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
 */var Je,de;function m_(n){switch(n){default:return z();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function g_(n){if(n===void 0)return Ge("GRPC error has no .code"),x.UNKNOWN;switch(n){case Je.OK:return x.OK;case Je.CANCELLED:return x.CANCELLED;case Je.UNKNOWN:return x.UNKNOWN;case Je.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Je.INTERNAL:return x.INTERNAL;case Je.UNAVAILABLE:return x.UNAVAILABLE;case Je.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Je.NOT_FOUND:return x.NOT_FOUND;case Je.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Je.ABORTED:return x.ABORTED;case Je.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Je.DATA_LOSS:return x.DATA_LOSS;default:return z()}}(de=Je||(Je={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Op{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wl}static getOrCreateInstance(){return wl===null&&(wl=new Op),wl}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let wl=null;/**
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
 */class qa{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qa(W.min(),i,Iu(),Bt(),se())}}class Ha{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ha(r,t,se(),se(),se())}}/**
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
 */class Bl{constructor(e,t,r,i){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=i}}class y_{constructor(e,t){this.targetId=e,this.Et=t}}class v_{constructor(e,t,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Fy{constructor(){this.At=0,this.Rt=Uy(),this.vt=rt.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=se(),t=se(),r=se();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Ha(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=Uy()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class u3{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Bt(),this.qt=$y(),this.Ut=new Te(ie)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,i)=>{this.Wt(i)&&t(i)})}Jt(e){var t;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(vc(o))if(i===0){const a=new L(o.path);this.Qt(r,a,Re.newNoDocument(a,W.min()))}else K(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=Op.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&vc(a.target)){const l=new L(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Re.newNoDocument(l,e))}s.St&&(t.set(o,s.Ct()),s.xt())}});let r=se();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new qa(e,t,this.Ut,this.Lt,r);return this.Lt=Bt(),this.qt=$y(),this.Ut=new Te(ie),i}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Fy,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Te(ie),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||R("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Fy),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function $y(){return new qe(L.comparator)}function Uy(){return new qe(L.comparator)}/**
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
 */const h3=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),d3=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),f3=(()=>({and:"AND",or:"OR"}))();class p3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function As(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function m3(n,e){return As(n,e.toTimestamp())}function We(n){return K(!!n),W.fromTimestamp(function(e){const t=kr(e);return new Le(t.seconds,t.nanos)}(n))}function Dp(n,e){return function(t){return new fe(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function __(n){const e=fe.fromString(n);return K(k_(e)),e}function pa(n,e){return Dp(n.databaseId,e.path)}function Dn(n,e){const t=__(e);if(t.get(1)!==n.databaseId.projectId)throw new C(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new C(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(I_(t))}function Pd(n,e){return Dp(n.databaseId,e)}function b_(n){const e=__(n);return e.length===4?fe.emptyPath():I_(e)}function ma(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function I_(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Vy(n,e,t){return{name:pa(n,e),fields:t.value.mapValue.fields}}function x_(n,e,t){const r=Dn(n,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):W.min(),o=new mt({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function g3(n,e){return"found"in e?function(t,r){K(!!r.found),r.found.name,r.found.updateTime;const i=Dn(t,r.found.name),s=We(r.found.updateTime),o=r.found.createTime?We(r.found.createTime):W.min(),a=new mt({mapValue:{fields:r.found.fields}});return Re.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){K(!!r.missing),K(!!r.readTime);const i=Dn(t,r.missing),s=We(r.readTime);return Re.newNoDocument(i,s)}(n,e):z()}function y3(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(K(c===void 0||typeof c=="string"),rt.fromBase64String(c||"")):(K(c===void 0||c instanceof Uint8Array),rt.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:g_(l.code);return new C(c,l.message||"")}(o);t=new v_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dn(n,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):W.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=Re.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];t=new Bl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dn(n,r.document),s=r.readTime?We(r.readTime):W.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Bl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dn(n,r.document),s=r.removedTargetIds||[];t=new Bl([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new c3(i),o=r.targetId;t=new y_(o,s)}}return t}function ga(n,e){let t;if(e instanceof Ws)t={update:Vy(n,e.key,e.value)};else if(e instanceof Qs)t={delete:pa(n,e.key)};else if(e instanceof sr)t={update:Vy(n,e.key,e.data),updateMask:x3(e.fieldMask)};else{if(!(e instanceof Ap))return z();t={verify:pa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ts)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ei)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ti)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ss)return{fieldPath:s.field.canonicalString(),increment:o._t};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:m3(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(n,e.precondition)),t}function Nd(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ne.updateTime(We(i.updateTime)):i.exists!==void 0?Ne.exists(i.exists):Ne.none()}(e.currentDocument):Ne.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)K(o.setToServerValue==="REQUEST_TIME"),a=new Ts;else if("appendMissingElements"in o){const c=o.appendMissingElements.values||[];a=new Ei(c)}else if("removeAllFromArray"in o){const c=o.removeAllFromArray.values||[];a=new Ti(c)}else"increment"in o?a=new Ss(s,o.increment):z();const l=Ke.fromServerFormat(o.fieldPath);return new za(l,a)}(n,i)):[];if(e.update){e.update.name;const i=Dn(n,e.update.name),s=new mt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new Vt(l.map(c=>Ke.fromServerFormat(c)))}(e.updateMask);return new sr(i,s,o,t,r)}return new Ws(i,s,t,r)}if(e.delete){const i=Dn(n,e.delete);return new Qs(i,t)}if(e.verify){const i=Dn(n,e.verify);return new Ap(i,t)}return z()}function v3(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?We(r.updateTime):We(i);return s.isEqual(W.min())&&(s=We(i)),new o3(s,r.transformResults||[])}(t,e))):[]}function E_(n,e){return{documents:[Pd(n,e.path)]}}function T_(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Pd(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Pd(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return C_(be.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Qi(u.field),direction:_3(u.dir)}}(c))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(l,c){return l.useProto3Json||$a(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function S_(n){let e=b_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){K(r===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];t.where&&(s=function(u){const h=A_(u);return h instanceof be&&Ep(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new ls(Yi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,$a(h)?null:h}(t.limit));let l=null;t.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Dr(d,h)}(t.startAt));let c=null;return t.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Dr(d,h)}(t.endAt)),Zw(e,i,o,s,a,"F",l,c)}function w3(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function A_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yi(e.unaryFilter.field);return ue.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Yi(e.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yi(e.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Yi(e.unaryFilter.field);return ue.create(s,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return ue.create(Yi(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return be.create(e.compositeFilter.filters.map(t=>A_(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function _3(n){return h3[n]}function b3(n){return d3[n]}function I3(n){return f3[n]}function Qi(n){return{fieldPath:n.canonicalString()}}function Yi(n){return Ke.fromServerFormat(n.fieldPath)}function C_(n){return n instanceof ue?function(e){if(e.op==="=="){if(Sy(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NAN"}};if(Ty(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sy(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NOT_NAN"}};if(Ty(e.value))return{unaryFilter:{field:Qi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(e.field),op:b3(e.op),value:e.value}}}(n):n instanceof be?function(e){const t=e.getFilters().map(r=>C_(r));return t.length===1?t[0]:{compositeFilter:{op:I3(e.op),filters:t}}}(n):z()}function x3(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function k_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class xr{constructor(e,t,r,i,s=W.min(),o=W.min(),a=rt.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class R_{constructor(e){this.se=e}}function E3(n,e){let t;if(e.document)t=x_(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=Ai(e.noDocument.readTime);t=Re.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const r=L.fromSegments(e.unknownDocument.path),i=Ai(e.unknownDocument.version);t=Re.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Le(r[0],r[1]);return W.fromTimestamp(i)}(e.readTime)),t}function By(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:bc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:pa(i,s.key),fields:s.data.value.mapValue.fields,updateTime:As(i,s.version.toTimestamp()),createTime:As(i,s.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Si(e.version)};else{if(!e.isUnknownDocument())return z();r.unknownDocument={path:t.path.toArray(),version:Si(e.version)}}return r}function bc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Si(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ai(n){const e=new Le(n.seconds,n.nanoseconds);return W.fromTimestamp(e)}function Xr(n,e){const t=(e.baseMutations||[]).map(s=>Nd(n.se,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Nd(n.se,s)),i=Le.fromMillis(e.localWriteTimeMs);return new Cp(e.batchId,i,t,r)}function Io(n){const e=Ai(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ai(n.lastLimboFreeSnapshotVersion):W.min();let r;var i;return n.query.documents!==void 0?(K((i=n.query).documents.length===1),r=qt(Ks(b_(i.documents[0])))):r=function(s){return qt(S_(s))}(n.query),new xr(r,n.targetId,0,n.lastListenSequenceNumber,e,t,rt.fromBase64String(n.resumeToken))}function O_(n,e){const t=Si(e.snapshotVersion),r=Si(e.lastLimboFreeSnapshotVersion);let i;i=vc(e.target)?E_(n.se,e.target):T_(n.se,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:xi(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Pp(n){const e=S_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_c(e,e.limit,"L"):e}function wh(n,e){return new Rp(e.largestBatchId,Nd(n.se,e.overlayMutation))}function zy(n,e){const t=e.path.lastSegment();return[n,Mt(e.path.popLast()),t]}function qy(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Si(r.readTime),documentKey:Mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class T3{getBundleMetadata(e,t){return Hy(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ai(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Hy(e).put({bundleId:(r=t).id,createTime:Si(We(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Gy(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Pp(i.bundledQuery),readTime:Ai(i.readTime)};var i})}saveNamedQuery(e,t){return Gy(e).put(function(r){return{name:r.name,readTime:Si(We(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Hy(n){return ht(n,"bundles")}function Gy(n){return ht(n,"namedQueries")}/**
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
 */class Tu{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new Tu(e,r)}getOverlay(e,t){return co(e).get(zy(this.userId,t)).next(r=>r?wh(this.serializer,r):null)}getOverlays(e,t){const r=Rn();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Rp(t,o);i.push(this.re(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Mt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(co(e).J("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Rn(),s=Mt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return co(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=wh(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Rn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return co(e).Z({index:"collectionGroupOverlayIndex",range:a},(l,c,u)=>{const h=wh(this.serializer,c);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>s)}re(e,t){return co(e).put(function(r,i,s){const[o,a,l]=zy(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ga(r.se,s.mutation)}}(this.serializer,this.userId,t))}}function co(n){return ht(n,"documentOverlays")}/**
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
 */class Zr{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Be(e.integerValue));else if("doubleValue"in e){const r=Be(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),ua(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(_i(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?qw(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):z()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const i of Object.keys(r))this.fe(i,t),this.ue(r[i],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const i of r)this.ue(i,t)}_e(e,t){this.ae(t,37),L.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}Zr.pe=new Zr;function S3(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Ky(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=S3(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class A3{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const i=t.codePointAt(0);this.Te(240|i>>>18),this.Te(128|63&i>>>12),this.Te(128|63&i>>>6),this.Te(128|63&i)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=t.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.ve()}Ve(e){const t=this.Se(e),r=Ky(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ce(e){const t=this.Se(e),r=Ky(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class C3{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class k3{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class uo{constructor(){this.Me=new A3,this.Fe=new C3(this.Me),this.Be=new k3(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class ei{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ei(this.indexId,this.documentKey,this.arrayValue,r)}}function hr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Wy(n.arrayValue,e.arrayValue),t!==0?t:(t=Wy(n.directionalValue,e.directionalValue),t!==0?t:L.comparator(n.documentKey,e.documentKey)))}function Wy(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class R3{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){K(e.collectionGroup===this.collectionId);const t=Ed(e);if(t!==void 0&&!this.ze(t))return!1;const r=Wr(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.Ge!==void 0){const o=r[i];if(!this.je(this.Ge,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function D_(n){var e,t;if(K(n instanceof ue||n instanceof be),n instanceof ue){if(n instanceof Xw){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ue.create(n.field,"==",s)))||[];return be.create(i,"or")}return n}const r=n.filters.map(i=>D_(i));return be.create(r,n.op)}function O3(n){if(n.getFilters().length===0)return[];const e=jd(D_(n));return K(P_(e)),Md(e)||Ld(e)?[e]:e.getFilters()}function Md(n){return n instanceof ue}function Ld(n){return n instanceof be&&Ep(n)}function P_(n){return Md(n)||Ld(n)||function(e){if(e instanceof be&&Cd(e)){for(const t of e.getFilters())if(!Md(t)&&!Ld(t))return!1;return!0}return!1}(n)}function jd(n){if(K(n instanceof ue||n instanceof be),n instanceof ue)return n;if(n.filters.length===1)return jd(n.filters[0]);const e=n.filters.map(r=>jd(r));let t=be.create(e,n.op);return t=Ic(t),P_(t)?t:(K(t instanceof be),K(Es(t)),K(t.filters.length>1),t.filters.reduce((r,i)=>Np(r,i)))}function Np(n,e){let t;return K(n instanceof ue||n instanceof be),K(e instanceof ue||e instanceof be),t=n instanceof ue?e instanceof ue?function(r,i){return be.create([r,i],"and")}(n,e):Qy(n,e):e instanceof ue?Qy(e,n):function(r,i){if(K(r.filters.length>0&&i.filters.length>0),Es(r)&&Es(i))return Qw(r,i.getFilters());const s=Cd(r)?r:i,o=Cd(r)?i:r,a=s.filters.map(l=>Np(l,o));return be.create(a,"or")}(n,e),Ic(t)}function Qy(n,e){if(Es(e))return Qw(e,n.getFilters());{const t=e.filters.map(r=>Np(n,r));return be.create(t,"or")}}function Ic(n){if(K(n instanceof ue||n instanceof be),n instanceof ue)return n;const e=n.getFilters();if(e.length===1)return Ic(e[0]);if(Kw(n))return n;const t=e.map(i=>Ic(i)),r=[];return t.forEach(i=>{i instanceof ue?r.push(i):i instanceof be&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:be.create(r,n.op)}/**
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
 */class D3{constructor(){this.He=new Mp}addToCollectionParentIndex(e,t){return this.He.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Yt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Mp{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Te(fe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Te(fe.comparator)).toArray()}}/**
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
 */const _l=new Uint8Array(0);class P3{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new Mp,this.Ye=new Vr(r=>xi(r),(r,i)=>Ua(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const s={collectionId:r,parent:Mt(i)};return Yy(e).put(s)}return b.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Ow(t),""],!1,!0);return Yy(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(kn(o.parent))}return r})}addFieldIndex(e,t){const r=bl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=fo(e);return s.next(a=>{o.put(qy(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=bl(e),i=fo(e),s=ho(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=ho(e);let i=!0;const s=new Map;return b.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return b.forEach(s,(l,c)=>{var u;R("IndexedDbIndexManager",`Using index ${u=l,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`} to execute ${xi(t)}`);const h=function(_,P){const B=Ed(P);if(B===void 0)return null;for(const U of wc(_,B.fieldPath))switch(U.op){case"array-contains-any":return U.value.arrayValue.values||[];case"array-contains":return[U.value]}return null}(c,l),d=function(_,P){const B=new Map;for(const U of Wr(P))for(const Q of wc(_,U.fieldPath))switch(Q.op){case"==":case"in":B.set(U.fieldPath.canonicalString(),Q.value);break;case"not-in":case"!=":return B.set(U.fieldPath.canonicalString(),Q.value),Array.from(B.values())}return null}(c,l),f=function(_,P){const B=[];let U=!0;for(const Q of Wr(P)){const ee=Q.kind===0?Oy(_,Q.fieldPath,_.startAt):Dy(_,Q.fieldPath,_.startAt);B.push(ee.value),U&&(U=ee.inclusive)}return new Dr(B,U)}(c,l),p=function(_,P){const B=[];let U=!0;for(const Q of Wr(P)){const ee=Q.kind===0?Dy(_,Q.fieldPath,_.endAt):Oy(_,Q.fieldPath,_.endAt);B.push(ee.value),U&&(U=ee.inclusive)}return new Dr(B,U)}(c,l),g=this.tn(l,c,f),y=this.tn(l,c,p),w=this.en(l,c,d),I=this.nn(l.indexId,h,g,f.inclusive,y,p.inclusive,w);return b.forEach(I,_=>r.H(_,t.limit).next(P=>{P.forEach(B=>{const U=L.fromSegments(B.documentKey);o.has(U)||(o=o.add(U),a.push(U))})}))}).next(()=>a)}return b.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=O3(be.create(e.filters,"and")).map(r=>Rd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,i,s,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),c=l/(t!=null?t.length:1),u=[];for(let h=0;h<l;++h){const d=t?this.sn(t[h/c]):_l,f=this.rn(e,d,r[h%c],i),p=this.on(e,d,s[h%c],o),g=a.map(y=>this.rn(e,d,y,!0));u.push(...this.createRange(f,p,g))}return u}rn(e,t,r,i){const s=new ei(e,L.empty(),t,r);return i?s:s.qe()}on(e,t,r,i){const s=new ei(e,L.empty(),t,r);return i?s.qe():s}Xe(e,t){const r=new R3(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Ze(t);return b.forEach(i,s=>this.Xe(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new Te(Ke.comparator),c=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:l=l.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(l=l.add(u.field));return l.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}un(e,t){const r=new uo;for(const i of Wr(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Le(i.kind);Zr.pe.oe(s,o)}return r.$e()}sn(e){const t=new uo;return Zr.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new uo;return Zr.pe.oe(Ii(this.databaseId,t),r.Le(function(i){const s=Wr(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let i=[];i.push(new uo);let s=0;for(const o of Wr(e)){const a=r[s++];for(const l of i)if(this.an(t,o.fieldPath)&&fa(a))i=this.hn(i,o,a);else{const c=l.Le(o.kind);Zr.pe.oe(a,c)}}return this.ln(i)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new uo;l.seed(a.$e()),Zr.pe.oe(o,l.Le(t.kind)),s.push(l)}return s}an(e,t){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=bl(e),i=fo(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,u){const h=u?new yc(u.sequenceNumber,new Yt(Ai(u.readTime),new L(kn(u.documentKey)),u.largestBatchId)):yc.empty(),d=c.fields.map(([f,p])=>new mL(Ke.fromServerFormat(f),p));return new Dw(c.indexId,c.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ie(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=bl(e),s=fo(e);return this.fn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>b.forEach(a,l=>s.put(qy(l.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return b.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,l=>this.dn(e,i,l).next(c=>{const u=this.wn(s,l);return c.isEqual(u)?b.resolve():this._n(e,s,l,c,u)}))))})}mn(e,t,r,i){return ho(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,i){return ho(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const i=ho(e);let s=new Te(hr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{s=s.add(new ei(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new Te(hr);const i=this.un(t,e);if(i==null)return r;const s=Ed(t);if(s!=null){const o=e.data.field(s.fieldPath);if(fa(o))for(const a of o.arrayValue.values||[])r=r.add(new ei(t.indexId,e.key,this.sn(a),i))}else r=r.add(new ei(t.indexId,e.key,_l,i));return r}_n(e,t,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,l,c,u,h){const d=a.getIterator(),f=l.getIterator();let p=Hi(d),g=Hi(f);for(;p||g;){let y=!1,w=!1;if(p&&g){const I=c(p,g);I<0?w=!0:I>0&&(y=!0)}else p!=null?w=!0:y=!0;y?(u(g),g=Hi(f)):w?(h(p),p=Hi(d)):(p=Hi(d),g=Hi(f))}}(i,s,hr,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),b.waitFor(o)}fn(e){let t=1;return fo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>hr(o,a)).filter((o,a,l)=>!a||hr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=hr(o,e),l=hr(o,t);if(a===0)i[0]=e.qe();else if(a>0&&l<0)i.push(o),i.push(o.qe());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.yn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,_l,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,_l,[]];s.push(IDBKeyRange.bound(a,l))}return s}yn(e,t){return hr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Jy)}getMinOffset(e,t){return b.mapArray(this.Ze(t),r=>this.Xe(e,r).next(i=>i||z())).next(Jy)}}function Yy(n){return ht(n,"collectionParents")}function ho(n){return ht(n,"indexEntries")}function bl(n){return ht(n,"indexConfiguration")}function fo(n){return ht(n,"indexState")}function Jy(n){K(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;bp(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Yt(e.readTime,e.documentKey,t)}/**
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
 */const Xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $t{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function N_(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.Z({range:o},(u,h,d)=>(a++,d.delete()));s.push(l.next(()=>{K(a===1)}));const c=[];for(const u of t.mutations){const h=Fw(e,u.key.path,t.batchId);s.push(i.delete(h)),c.push(u.key)}return b.waitFor(s).next(()=>c)}function xc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(41943040,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);class Su{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.pn={}}static ie(e,t,r,i){K(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Su(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return dr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Ji(e),o=dr(e);return o.add({}).next(a=>{K(typeof a=="number");const l=new Cp(a,t,r,i),c=function(d,f,p){const g=p.baseMutations.map(w=>ga(d.se,w)),y=p.mutations.map(w=>ga(d.se,w));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:g,mutations:y}}(this.serializer,this.userId,l),u=[];let h=new Te((d,f)=>ie(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Fw(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(c)),u.push(s.put(f,bL))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=l.keys()}),b.waitFor(u).next(()=>l)})}lookupMutationBatch(e,t){return dr(e).get(t).next(r=>r?(K(r.userId===this.userId),Xr(this.serializer,r)):null)}In(e,t){return this.pn[t]?b.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.pn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return dr(e).Z({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(K(a.batchId>=r),s=Xr(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return dr(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return dr(e).j("userMutationsIndex",t).next(r=>r.map(i=>Xr(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Fl(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Ji(e).Z({range:i},(o,a,l)=>{const[c,u,h]=o,d=kn(u);if(c===this.userId&&t.path.isEqual(d))return dr(e).get(h).next(f=>{if(!f)throw z();K(f.userId===this.userId),s.push(Xr(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Te(ie);const i=[];return t.forEach(s=>{const o=Fl(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ji(e).Z({range:a},(c,u,h)=>{const[d,f,p]=c,g=kn(f);d===this.userId&&s.path.isEqual(g)?r=r.add(p):h.done()});i.push(l)}),b.waitFor(i).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Fl(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Te(ie);return Ji(e).Z({range:o},(l,c,u)=>{const[h,d,f]=l,p=kn(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):u.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(dr(e).get(s).next(o=>{if(o===null)throw z();K(o.userId===this.userId),r.push(Xr(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return N_(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return b.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ji(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=kn(s[1]);i.push(l)}else a.done()}).next(()=>{K(i.length===0)})})}containsKey(e,t){return M_(e,this.userId,t)}An(e){return L_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function M_(n,e,t){const r=Fl(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ji(n).Z({range:s,Y:!0},(a,l,c)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),c.done()}).next(()=>o)}function dr(n){return ht(n,"mutations")}function Ji(n){return ht(n,"documentMutations")}function L_(n){return ht(n,"mutationQueues")}/**
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
 */class Ci{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ci(0)}static bn(){return new Ci(-1)}}/**
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
 */class N3{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new Ci(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>W.fromTimestamp(new Le(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Vn(e,i)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Gi(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(K(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Gi(e).Z((o,a)=>{const l=Io(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Gi(e).Z((r,i)=>{const s=Io(i);t(s)})}Pn(e){return Zy(e).get("targetGlobalKey").next(t=>(K(t!==null),t))}Vn(e,t){return Zy(e).put("targetGlobalKey",t)}Sn(e,t){return Gi(e).put(O_(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=xi(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Gi(e).Z({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Io(a);Ua(t,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=gr(e);return t.forEach(o=>{const a=Mt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,t,r){const i=gr(e);return b.forEach(t,s=>{const o=Mt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=gr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=gr(e);let s=se();return i.Z({range:r,Y:!0},(o,a,l)=>{const c=kn(o[1]),u=new L(c);s=s.add(u)}).next(()=>s)}containsKey(e,t){const r=Mt(t.path),i=IDBKeyRange.bound([r],[Ow(r)],!1,!0);let s=0;return gr(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ne(e,t){return Gi(e).get(t).next(r=>r?Io(r):null)}}function Gi(n){return ht(n,"targets")}function Zy(n){return ht(n,"targetGlobal")}function gr(n){return ht(n,"targetDocuments")}/**
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
 */function e1([n,e],[t,r]){const i=ie(n,t);return i===0?ie(e,r):i}class M3{constructor(e){this.Cn=e,this.buffer=new Te(e1),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();e1(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class L3{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ur(t)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await $r(t)}await this.$n(3e5)})}}class j3{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ut.ct);const r=new M3(t);return this.Mn.forEachTarget(e,i=>r.kn(i.sequenceNumber)).next(()=>this.Mn.Bn(e,i=>r.kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Xy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xy):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,i,s,o,a,l,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(c=Date.now(),xd()<=ge.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(c-l)+`ms
Total Duration: ${c-u}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class F3{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new j3(r,i)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,i)=>t(i))}addReference(e,t,r){return Il(e,r)}removeReference(e,t,r){return Il(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Il(e,t)}Kn(e,t){return function(r,i){let s=!1;return L_(r).X(o=>M_(r,o,i).next(a=>(a&&(s=!0),b.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Un(e,(o,a)=>{if(a<=t){const l=this.Kn(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),gr(e).delete([0,Mt(o.path)])))});i.push(l)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Il(e,t)}Un(e,t){const r=gr(e);let i,s=Ut.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Ut.ct&&t(new L(kn(i)),s),s=c,i=l):s=Ut.ct}).next(()=>{s!==Ut.ct&&t(new L(kn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Il(n,e){return gr(n).put(function(t,r){return{targetId:0,path:Mt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class j_{constructor(){this.changes=new Vr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $3{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Hr(e).put(r)}removeEntry(e,t,r){return Hr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],bc(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=Re.newInvalidDocument(t);return Hr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(po(t))},(i,s)=>{r=this.Qn(t,s)}).next(()=>r)}zn(e,t){let r={size:0,document:Re.newInvalidDocument(t)};return Hr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(po(t))},(i,s)=>{r={document:this.Qn(t,s),size:xc(s)}}).next(()=>r)}getEntries(e,t){let r=Bt();return this.jn(e,t,(i,s)=>{const o=this.Qn(i,s);r=r.insert(i,o)}).next(()=>r)}Wn(e,t){let r=Bt(),i=new qe(L.comparator);return this.jn(e,t,(s,o)=>{const a=this.Qn(s,o);r=r.insert(s,a),i=i.insert(s,xc(o))}).next(()=>({documents:r,Hn:i}))}jn(e,t,r){if(t.isEmpty())return b.resolve();let i=new Te(r1);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(po(i.first()),po(i.last())),o=i.getIterator();let a=o.getNext();return Hr(e).Z({index:"documentKeyIndex",range:s},(l,c,u)=>{const h=L.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&r1(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?u.G(po(a)):u.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),bc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hr(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let c=Bt();for(const u of l){const h=this.Qn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(Ba(t,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,t,r,i){let s=Bt();const o=n1(t,r),a=n1(t,Yt.max());return Hr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,u)=>{const h=this.Qn(L.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(h.key,h),s.size===i&&u.done()}).next(()=>s)}newChangeBuffer(e){return new U3(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return t1(e).get("remoteDocumentGlobalKey").next(t=>(K(!!t),t))}Gn(e,t){return t1(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=E3(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Re.newInvalidDocument(e)}}function F_(n){return new $3(n)}class U3 extends j_{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new Vr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Te((s,o)=>ie(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Yn.get(s);if(t.push(this.Jn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=By(this.Jn.serializer,o);i=i.add(s.path.popLast());const c=xc(l);r+=c-a.size,t.push(this.Jn.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=By(this.Jn.serializer,o.convertToNoDocument(W.min()));t.push(this.Jn.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Jn.updateMetadata(e,r)),b.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:i})=>(i.forEach((s,o)=>{this.Yn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function t1(n){return ht(n,"remoteDocumentGlobal")}function Hr(n){return ht(n,"remoteDocumentsV14")}function po(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function n1(n,e){const t=e.documentKey.path.toArray();return[n,bc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function r1(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ie(t[s],r[s]),i)return i;return i=ie(t.length,r.length),i||(i=ie(t[t.length-2],r[r.length-2]),i||ie(t[t.length-1],r[r.length-1]))}/**
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
 */class V3{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&No(r.mutation,i,Vt.empty(),Le.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const i=Rn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=bo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Bt();const o=Po(),a=Po();return t.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof sr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),No(u.mutation,c,u.mutation.getFieldMask(),Le.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),t.forEach((c,u)=>{var h;return a.set(c,new V3(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Po();let i=new qe((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let u=r.get(l)||Vt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=s_();u.forEach(d=>{if(!s.has(d)){const f=f_(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):b.resolve(Rn());let a=-1,l=s;return o.next(c=>b.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:i_(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=bo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=bo();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(c,u){return new ir(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Re.newInvalidDocument(c)))});let o=bo();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&No(c.mutation,l,Vt.empty(),Le.now()),Ba(t,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class B3{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return b.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:We(r.createTime)}),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:Pp(r.bundledQuery),readTime:We(r.readTime)}}(t)),b.resolve()}}/**
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
 */class z3{constructor(){this.overlays=new qe(L.comparator),this.ts=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rn();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.re(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=Rn(),s=t.length+1,o=new L(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Rn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Rn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return b.resolve(a)}re(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rp(t,r));let s=this.ts.get(t);s===void 0&&(s=se(),this.ts.set(t,s)),this.ts.set(t,s.add(r.key))}}/**
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
 */class Lp{constructor(){this.es=new Te(st.ns),this.ss=new Te(st.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new st(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new st(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new L(new fe([])),r=new st(t,e),i=new st(t,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new L(new fe([])),r=new st(t,e),i=new st(t,e+1);let s=se();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new st(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return L.comparator(e.key,t.key)||ie(e.ds,t.ds)}static rs(e,t){return ie(e.ds,t.ds)||L.comparator(e.key,t.key)}}/**
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
 */class q3{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Te(st.ns)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cp(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new st(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ys(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new st(t,0),i=new st(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Te(ie);return t.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),b.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new st(new L(s),0);let a=new Te(ie);return this._s.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ds)),!0)},o),b.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){K(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return b.forEach(t.mutations,i=>{const s=new st(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new st(t,0),i=this._s.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class H3{constructor(e){this.Ts=e,this.docs=new qe(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Bt();const o=t.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||bp(Nw(u),r)<=0||(i.has(u.key)||Ba(t,u))&&(s=s.insert(u.key,u.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,r,i){z()}Es(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new G3(this)}getSize(e){return b.resolve(this.size)}}class G3 extends j_{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class K3{constructor(e){this.persistence=e,this.As=new Vr(t=>xi(t),Ua),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Lp,this.targetCount=0,this.bs=Ci.vn()}forEachTarget(e,t){return this.As.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),b.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Ci(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Sn(t),b.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.vs.containsKey(t))}}/**
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
 */class U_{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Ut(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new K3(this),this.indexManager=new D3,this.remoteDocumentCache=function(r){return new H3(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new R_(t),this.xs=new B3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new z3,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new q3(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){R("MemoryPersistence","Starting transaction:",e);const i=new W3(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,t){return b.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class W3 extends Lw{constructor(e){super(),this.currentSequenceNumber=e}}class Au{constructor(e){this.persistence=e,this.$s=new Lp,this.Ms=null}static Fs(e){return new Au(e)}get Bs(){if(this.Ms)return this.Ms;throw z()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),b.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Bs,r=>{const i=L.fromPath(r);return this.Ls(e,i).next(s=>{s||t.removeEntry(i,W.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return b.or([()=>b.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class Q3{constructor(e){this.serializer=e}M(e,t,r,i){const s=new _u("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",by,{unique:!0}),a.createObjectStore("documentMutations")}(e),i1(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),i1(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",by,{unique:!0});const u=l.store("mutations"),h=c.map(d=>u.put(d));return b.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(s)))),r<7&&i>=7&&(o=o.next(()=>this.Ks(s))),r<8&&i>=8&&(o=o.next(()=>this.Gs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Qs(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:PL});l.createIndex("collectionPathOverlayIndex",NL,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",ML,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:IL});l.createIndex("documentKeyIndex",xL),l.createIndex("collectionGroupIndex",EL)}(e)).next(()=>this.zs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:kL}).createIndex("sequenceNumberIndex",RL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:OL}).createIndex("documentKeyIndex",DL,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=xc(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>b.forEach(a,l=>{K(l.userId===s.userId);const c=Xr(this.serializer,l);return N_(e,s.userId,c).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const l=new fe(o),c=function(u){return[0,Mt(u)]}(l);s.push(t.get(c).next(u=>u?b.resolve():(h=>t.put({targetId:0,path:Mt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>b.waitFor(s))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:CL});const r=t.store("collectionParents"),i=new Mp,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Mt(l)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const l=new fe(o);return s(l.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,l],c)=>{const u=kn(a);return s(u.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,i)=>{const s=Io(i),o=O_(this.serializer,s);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),l=(c=o,c.document?new L(fe.fromString(c.document.name).popFirst(5)):c.noDocument?L.fromSegments(c.noDocument.path):c.unknownDocument?L.fromSegments(c.unknownDocument.path):z()).path.toArray();var c;/**
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
*/const u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>b.waitFor(i))}js(e,t){const r=t.store("mutations"),i=F_(this.serializer),s=new U_(Au.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var c;let u=(c=a.get(l.userId))!==null&&c!==void 0?c:se();Xr(this.serializer,l).keys().forEach(h=>u=u.add(h)),a.set(l.userId,u)}),b.forEach(a,(l,c)=>{const u=new ot(c),h=Tu.ie(this.serializer,u),d=s.getIndexManager(u),f=Su.ie(u,this.serializer,d,s.referenceDelegate);return new $_(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Td(t,Ut.ct),l).next()})})}}function i1(n){n.createObjectStore("targetDocuments",{keyPath:SL}).createIndex("documentTargetsIndex",AL,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",TL,{unique:!0}),n.createObjectStore("targetGlobal")}const _h="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class jp{constructor(e,t,r,i,s,o,a,l,c,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=s,this.window=o,this.document=a,this.Hs=c,this.Js=u,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!jp.D())throw new C(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new F3(this,i),this.si=t+"main",this.serializer=new R_(l),this.ii=new un(this.si,this.Ys,new Q3(this.serializer)),this.Ds=new N3(this.referenceDelegate,this.serializer),this.remoteDocumentCache=F_(this.serializer),this.xs=new T3,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,u===!1&&Ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(x.FAILED_PRECONDITION,_h);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Ut(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>xl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Ur(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return mo(e).get("owner").next(t=>b.resolve(this._i(t)))}mi(e){return xl(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ht(t,"clientMetadata");return r.j().next(i=>{const s=this.pi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?b.resolve(!0):mo(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new C(x.FAILED_PRECONDITION,_h);return!1}}return!(!this.networkEnabled||!this.inForeground)||xl(e).j().next(r=>this.pi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&R("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Td(e,Ut.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>xl(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return Su.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new P3(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Tu.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){R("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.Ys)===15?jL:o===14?Vw:o===13?Uw:o===12?LL:o===11?$w:void z();var o;let a;return this.ii.runTransaction(e,i,s,l=>(a=new Td(l,this.Vs?this.Vs.next():Ut.ct),t==="readwrite-primary"?this.li(a).next(c=>!!c||this.fi(a)).next(c=>{if(!c)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new C(x.FAILED_PRECONDITION,Mw);return r(a)}).next(c=>this.wi(a).next(()=>c)):this.Pi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Pi(e){return mo(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(x.FAILED_PRECONDITION,_h)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return mo(e).put("owner",t)}static D(){return un.D()}di(e){const t=mo(e);return t.get("owner").next(r=>this._i(r)?(R("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):b.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;Fk()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ge("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function mo(n){return ht(n,"owner")}function xl(n){return ht(n,"clientMetadata")}function Fp(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class $p{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=i}static Di(e,t){let r=se(),i=se();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $p(e,t.fromCache,r,i)}}/**
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
 */class V_{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ni(e,t).next(s=>s||this.ki(e,t,i,r)).next(s=>s||this.Oi(e,t))}Ni(e,t){if(Py(t))return b.resolve(null);let r=qt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=_c(t,null,"F"),r=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.$i(t,a);return this.Mi(t,c,o,l.readTime)?this.Ni(e,_c(t,null,"F")):this.Fi(e,c,t,l)}))})))}ki(e,t,r,i){return Py(t)||i.isEqual(W.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(t,s);return this.Mi(t,o,r,i)?this.Oi(e,t):(xd()<=ge.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dd(t)),this.Fi(e,o,t,Pw(i,-1)))})}$i(e,t){let r=new Te(n_(e));return t.forEach((i,s)=>{Ba(e,s)&&(r=r.add(s))}),r}Mi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return xd()<=ge.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Dd(t)),this.xi.getDocumentsMatchingQuery(e,t,Yt.min())}Fi(e,t,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Y3{constructor(e,t,r,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new qe(ie),this.qi=new Vr(s=>xi(s),Ua),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $_(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function B_(n,e,t,r){return new Y3(n,e,t,r)}async function z_(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return t.localDocuments.getDocuments(r,l).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function J3(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=b.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const g=l.docVersions.get(f);K(g!==null),p.version.compareTo(g)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function q_(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function X3(n,e){const t=F(n),r=e.snapshotVersion;let i=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});i=t.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(s,u.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(rt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(p,g,y){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(t.Ds.updateTargetData(s,f))});let l=Bt(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(H_(s,o,e.documentUpdates).next(u=>{l=u.zi,c=u.ji})),!r.isEqual(W.min())){const u=t.Ds.getLastRemoteSnapshotVersion(s).next(h=>t.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.Li=i,s))}function H_(n,e,t){let r=se(),i=se();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Bt();return t.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{zi:o,ji:i}})}function Z3(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Cs(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ds.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):t.Ds.allocateTargetId(r).next(o=>(i=new xr(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function ks(n,e,t){const r=F(n),i=r.Li.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ur(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Ec(n,e,t){const r=F(n);let i=W.min(),s=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=F(a),h=u.qi.get(c);return h!==void 0?b.resolve(u.Li.get(h)):u.Ds.getTargetData(l,c)}(r,o,qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?i:W.min(),t?s:se())).next(a=>(W_(r,t_(e),a),{documents:a,Wi:s})))}function G_(n,e){const t=F(n),r=F(t.Ds),i=t.Li.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function K_(n,e){const t=F(n),r=t.Ui.get(e)||W.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Ki.getAllFromCollectionGroup(i,e,Pw(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(W_(t,e,i),i))}function W_(n,e,t){let r=n.Ui.get(e)||W.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ui.set(e,r)}async function e5(n,e,t,r){const i=F(n);let s=se(),o=Bt();for(const c of t){const u=e.Hi(c.metadata.name);c.document&&(s=s.add(u));const h=e.Ji(c);h.setReadTime(e.Yi(c.metadata.readTime)),o=o.insert(u,h)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),l=await Cs(i,function(c){return qt(Ks(fe.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>H_(c,a,o).next(u=>(a.apply(c),u)).next(u=>i.Ds.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ds.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,u.zi,u.ji)).next(()=>u.zi)))}async function t5(n,e,t=se()){const r=await Cs(n,qt(Pp(e.bundledQuery))),i=F(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.xs.saveNamedQuery(s,e);const a=r.withResumeToken(rt.EMPTY_BYTE_STRING,o);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(s,a).next(()=>i.Ds.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ds.addMatchingKeys(s,t,r.targetId)).next(()=>i.xs.saveNamedQuery(s,e))})}function s1(n,e){return`firestore_clients_${n}_${e}`}function o1(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function bh(n,e){return`firestore_targets_${n}_${e}`}class Tc{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Zi(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Tc(e,t,i.state,s):(Ge("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Mo(e,r.state,i):(Ge("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Sc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Iu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jw(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Sc(e,s):(Ge("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Up{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Up(t.clientId,t.onlineState):(Ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Fd{constructor(){this.activeTargetIds=Iu()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ih{constructor(e,t,r,i,s){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new qe(ie),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.cr=s1(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Fd),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const i=this.getItem(s1(this.persistenceKey,r));if(i){const s=Sc.Zi(r,i);s&&(this.rr=this.rr.insert(s.clientId,s))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(bh(this.persistenceKey,e));if(r){const i=Mo.Zi(e,r);i&&(t=i.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(bh(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Tr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return R("SharedClientState","READ",e,t),t}setItem(e,t){R("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(R("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void Ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(i){let s=Ut.ct;if(i!=null)try{const o=JSON.parse(i);K(typeof o=="number"),s=o}catch(o){Ge("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Ut.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const i=new Tc(this.currentUser,e,t,r),s=o1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Xi())}Tr(e){const t=o1(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const i=bh(this.persistenceKey,e),s=new Mo(e,t,r);this.setItem(i,s.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return Sc.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Tc.Zi(new ot(s),i,t)}Cr(e,t){const r=this.dr.exec(e),i=Number(r[1]);return Mo.Zi(i,t)}gr(e){return Up.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),i=this.pr(this.rr),s=this.pr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Iu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Q_{constructor(){this.Br=new Fd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Fd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class n5{qr(e){}shutdown(){}}/**
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
 */class a1{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let El=null;function xh(){return El===null?El=268435456+Math.round(2147483648*Math.random()):El++,"0x"+El.toString(16)}/**
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
 */const r5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class i5{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const bt="WebChannelConnection";class s5 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,i,s){const o=xh(),a=this.ao(e,t);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(c=>(R("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Zn("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}fo(e,t,r,i,s,o){return this.co(e,t,r,i,s)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,t){const r=r5[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,i){const s=xh();return new Promise((o,a)=>{const l=new rL;l.setWithCredentials(!0),l.listenOnce(eL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vh.NO_ERROR:const u=l.getResponseJson();R(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case vh.TIMEOUT:R(bt,`RPC '${e}' ${s} timed out`),a(new C(x.DEADLINE_EXCEEDED,"Request time out"));break;case vh.HTTP_ERROR:const h=l.getStatus();if(R(bt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(y)>=0?y:x.UNKNOWN}(f.status);a(new C(p,f.message))}else a(new C(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(x.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{R(bt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);R(bt,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",c,r,15)})}wo(e,t,r){const i=xh(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XM(),a=ZM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new nL({})),this.ho(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(bt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const u=o.createWebChannel(c,l);let h=!1,d=!1;const f=new i5({Wr:g=>{d?R(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(h||(R(bt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),R(bt,`RPC '${e}' stream ${i} sending:`,g),u.send(g))},Hr:()=>u.close()}),p=(g,y,w)=>{g.listen(y,I=>{try{w(I)}catch(_){setTimeout(()=>{throw _},0)}})};return p(u,yl.EventType.OPEN,()=>{d||R(bt,`RPC '${e}' stream ${i} transport opened.`)}),p(u,yl.EventType.CLOSE,()=>{d||(d=!0,R(bt,`RPC '${e}' stream ${i} transport closed`),f.so())}),p(u,yl.EventType.ERROR,g=>{d||(d=!0,Zn(bt,`RPC '${e}' stream ${i} transport errored:`,g),f.so(new C(x.UNAVAILABLE,"The operation could not be completed")))}),p(u,yl.EventType.MESSAGE,g=>{var y;if(!d){const w=g.data[0];K(!!w);const I=w,_=I.error||((y=I[0])===null||y===void 0?void 0:y.error);if(_){R(bt,`RPC '${e}' stream ${i} received error:`,_);const P=_.status;let B=function(Q){const ee=Je[Q];if(ee!==void 0)return g_(ee)}(P),U=_.message;B===void 0&&(B=x.INTERNAL,U="Unknown error status: "+P+" with message "+_.message),d=!0,f.so(new C(B,U)),u.close()}else R(bt,`RPC '${e}' stream ${i} received:`,w),f.io(w)}}),p(a,tL.STAT_EVENT,g=>{g.stat===yy.PROXY?R(bt,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===yy.NOPROXY&&R(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}/**
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
 */function Y_(){return typeof window<"u"?window:null}function zl(){return typeof document<"u"?document:null}/**
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
 */function Ga(n){return new p3(n,!0)}/**
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
 */class Vp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,t-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class J_{constructor(e,t,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Vp(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Ge(t.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===t&&this.Ko(r,i)},r=>{e(()=>{const i=new C(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o5 extends J_{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=y3(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?We(s.readTime):W.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=ma(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;return o=vc(a)?{documents:E_(i,a)}:{query:T_(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=w_(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=As(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=w3(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=ma(this.serializer),t.removeTarget=e,this.Fo(t)}}class a5 extends J_{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=v3(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.Zo(r,t)}return K(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ma(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ga(this.serializer,r))};this.Fo(t)}}/**
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
 */class l5 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new C(x.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(x.UNKNOWN,i.toString())})}fo(e,t,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(x.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class c5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Ge(t),this.ru=!1):R("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class u5{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Br(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.du.add(4),await Ys(l),l.mu.set("Unknown"),l.du.delete(4),await Ka(l)}(this))})}),this.mu=new c5(r,i)}}async function Ka(n){if(Br(n))for(const e of n.wu)await e(!0)}async function Ys(n){for(const e of n.wu)await e(!1)}function Cu(n,e){const t=F(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),qp(t)?zp(t):Xs(t).No()&&Bp(t,e))}function ya(n,e){const t=F(n),r=Xs(t);t.fu.delete(e),r.No()&&X_(t,e),t.fu.size===0&&(r.No()?r.$o():Br(t)&&t.mu.set("Unknown"))}function Bp(n,e){n.gu.Ot(e.targetId),Xs(n).jo(e)}function X_(n,e){n.gu.Ot(e),Xs(n).Wo(e)}function zp(n){n.gu=new u3({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Xs(n).start(),n.mu.ou()}function qp(n){return Br(n)&&!Xs(n).xo()&&n.fu.size>0}function Br(n){return F(n).du.size===0}function Z_(n){n.gu=void 0}async function h5(n){n.fu.forEach((e,t)=>{Bp(n,e)})}async function d5(n,e){Z_(n),qp(n)?(n.mu.au(e),zp(n)):n.mu.set("Unknown")}async function f5(n,e,t){if(n.mu.set("Online"),e instanceof v_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ac(n,r)}else if(e instanceof Bl?n.gu.Kt(e):e instanceof y_?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(W.min()))try{const r=await q_(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.fu.get(l);c&&i.fu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(rt.EMPTY_BYTE_STRING,l.snapshotVersion)),X_(i,a);const c=new xr(l.target,a,1,l.sequenceNumber);Bp(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Ac(n,r)}}async function Ac(n,e,t){if(!Ur(e))throw e;n.du.add(1),await Ys(n),n.mu.set("Offline"),t||(t=()=>q_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Ka(n)})}function eb(n,e){return e().catch(t=>Ac(n,t,e))}async function Js(n){const e=F(n),t=Pr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;p5(e);)try{const i=await Z3(e.localStore,r);if(i===null){e.lu.length===0&&t.$o();break}r=i.batchId,m5(e,i)}catch(i){await Ac(e,i)}tb(e)&&nb(e)}function p5(n){return Br(n)&&n.lu.length<10}function m5(n,e){n.lu.push(e);const t=Pr(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function tb(n){return Br(n)&&!Pr(n).xo()&&n.lu.length>0}function nb(n){Pr(n).start()}async function g5(n){Pr(n).tu()}async function y5(n){const e=Pr(n);for(const t of n.lu)e.Yo(t.mutations)}async function v5(n,e,t){const r=n.lu.shift(),i=kp.from(r,e,t);await eb(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Js(n)}async function w5(n,e){e&&Pr(n).Jo&&await async function(t,r){if(i=r.code,m_(i)&&i!==x.ABORTED){const s=t.lu.shift();Pr(t).Oo(),await eb(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Js(t)}var i}(n,e),tb(n)&&nb(n)}async function l1(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Br(t);t.du.add(3),await Ys(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Ka(t)}async function $d(n,e){const t=F(n);e?(t.du.delete(2),await Ka(t)):e||(t.du.add(2),await Ys(t),t.mu.set("Unknown"))}function Xs(n){return n.yu||(n.yu=function(e,t,r){const i=F(e);return i.nu(),new o5(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:h5.bind(null,n),Zr:d5.bind(null,n),zo:f5.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),qp(n)?zp(n):n.mu.set("Unknown")):(await n.yu.stop(),Z_(n))})),n.yu}function Pr(n){return n.pu||(n.pu=function(e,t,r){const i=F(e);return i.nu(),new a5(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:g5.bind(null,n),Zr:w5.bind(null,n),Xo:y5.bind(null,n),Zo:v5.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await Js(n)):(await n.pu.stop(),n.lu.length>0&&(R("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class Hp{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Hp(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(n,e){if(Ge("AsyncQueue",`${e}: ${n}`),Ur(n))return new C(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class cs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=bo(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class c1{constructor(){this.Iu=new qe(L.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):z():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Rs{constructor(e,t,r,i,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Rs(e,t,cs.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _5{constructor(){this.Eu=void 0,this.listeners=[]}}class b5{constructor(){this.queries=new Vr(e=>e_(e),Va),this.onlineState="Unknown",this.Au=new Set}}async function Gp(n,e){const t=F(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new _5),i)try{s.Eu=await t.onListen(r)}catch(o){const a=Zs(o,`Initialization of query '${Dd(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Ru(t.onlineState),s.Eu&&e.vu(s.Eu)&&Wp(t)}async function Kp(n,e){const t=F(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function I5(n,e){const t=F(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Wp(t)}function x5(n,e,t){const r=F(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Wp(n){n.Au.forEach(e=>{e.next()})}class Qp{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class E5{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
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
 */class u1{constructor(e){this.serializer=e}Hi(e){return Dn(this.serializer,e)}Ji(e){return e.metadata.exists?x_(this.serializer,e.document,!1):Re.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return We(e)}}class T5{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=rb(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=fe.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new u1(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Hi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||se()).add(s);t.set(o,a)}}return t}async complete(){const e=await e5(this.localStore,new u1(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await t5(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function rb(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class ib{constructor(e){this.key=e}}class sb{constructor(e){this.key=e}}class ob{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=se(),this.mutatedKeys=se(),this.Ku=n_(e),this.Gu=new cs(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new c1,i=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Ba(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(r.track({type:3,doc:f}),y=!0):this.Wu(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),s=g?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Rs(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new c1,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=se(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new sb(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new ib(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=se();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Rs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class S5{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class A5{constructor(e){this.key=e,this.ec=!1}}class C5{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Vr(a=>e_(a),Va),this.ic=new Map,this.rc=new Set,this.oc=new qe(L.comparator),this.uc=new Map,this.cc=new Lp,this.ac={},this.hc=new Map,this.lc=Ci.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function k5(n,e){const t=em(n);let r,i;const s=t.sc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await Cs(t.localStore,qt(e));t.isPrimaryClient&&Cu(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Yp(t,e,r,a==="current",o.resumeToken)}return i}async function Yp(n,e,t,r,i){n.dc=(h,d,f)=>async function(p,g,y,w){let I=g.view.zu(y);I.Mi&&(I=await Ec(p.localStore,g.query,!1).then(({documents:B})=>g.view.zu(B,I)));const _=w&&w.targetChanges.get(g.targetId),P=g.view.applyChanges(I,p.isPrimaryClient,_);return Ud(p,g.targetId,P.Yu),P.snapshot}(n,h,d,f);const s=await Ec(n.localStore,e,!0),o=new ob(e,s.Wi),a=o.zu(s.documents),l=Ha.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);Ud(n,t,c.Yu);const u=new S5(e,t,o);return n.sc.set(e,u),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),c.snapshot}async function R5(n,e){const t=F(n),r=t.sc.get(e),i=t.ic.get(r.targetId);if(i.length>1)return t.ic.set(r.targetId,i.filter(s=>!Va(s,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await ks(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ya(t.remoteStore,r.targetId),Os(t,r.targetId)}).catch($r)):(Os(t,r.targetId),await ks(t.localStore,r.targetId,!0))}async function O5(n,e,t){const r=tm(n);try{const i=await function(s,o){const a=F(s),l=Le.now(),c=o.reduce((d,f)=>d.add(f.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Bt(),p=se();return a.Ki.getEntries(d,c).next(g=>{f=g,f.forEach((y,w)=>{w.isValidDocument()||(p=p.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{u=g;const y=[];for(const w of o){const I=l3(w,u.get(w.key).overlayedDocument);I!=null&&y.push(new sr(w.key,I,Hw(I.value.mapValue),Ne.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(g=>{h=g;const y=g.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,g.batchId,y)})}).then(()=>({batchId:h.batchId,changes:i_(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new qe(ie)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,t),await or(r,i.changes),await Js(r.remoteStore)}catch(i){const s=Zs(i,"Failed to persist write");t.reject(s)}}async function ab(n,e){const t=F(n);try{const r=await X3(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.uc.get(s);o&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?K(o.ec):i.removedDocuments.size>0&&(K(o.ec),o.ec=!1))}),await or(t,r,e)}catch(r){await $r(r)}}function h1(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Ru(o)&&(l=!0)}),l&&Wp(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D5(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new qe(L.comparator);o=o.insert(s,Re.newNoDocument(s,W.min()));const a=se().add(s),l=new qa(W.min(),new Map,new Te(ie),o,a);await ab(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Zp(r)}else await ks(r.localStore,e,!1).then(()=>Os(r,e,t)).catch($r)}async function P5(n,e){const t=F(n),r=e.batch.batchId;try{const i=await J3(t.localStore,e);Xp(t,r,null),Jp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await or(t,i)}catch(i){await $r(i)}}async function N5(n,e,t){const r=F(n);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(K(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(r.localStore,e);Xp(r,e,t),Jp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await or(r,i)}catch(i){await $r(i)}}async function M5(n,e){const t=F(n);Br(t.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=F(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.hc.get(r)||[];i.push(e),t.hc.set(r,i)}catch(r){const i=Zs(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jp(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Xp(n,e,t){const r=F(n);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Os(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||lb(n,r)})}function lb(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(ya(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Zp(n))}function Ud(n,e,t){for(const r of t)r instanceof ib?(n.cc.addReference(r.key,e),L5(n,r)):r instanceof sb?(R("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||lb(n,r.key)):z()}function L5(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(R("SyncEngine","New document in limbo: "+t),n.rc.add(r),Zp(n))}function Zp(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new L(fe.fromString(e)),r=n.lc.next();n.uc.set(r,new A5(t)),n.oc=n.oc.insert(t,r),Cu(n.remoteStore,new xr(qt(Ks(t.path)),r,2,Ut.ct))}}async function or(n,e,t){const r=F(n),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,t).then(c=>{if((c||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=$p.Di(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const c=F(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(l,h=>b.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ur(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Li.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Li=c.Li.insert(h,p)}}}(r.localStore,s))}async function j5(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await z_(t.localStore,e);t.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new C(x.CANCELLED,s))})}),i.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await or(t,r.Qi)}}function F5(n,e){const t=F(n),r=t.uc.get(e);if(r&&r.ec)return se().add(r.key);{let i=se();const s=t.ic.get(e);if(!s)return i;for(const o of s){const a=t.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function $5(n,e){const t=F(n),r=await Ec(t.localStore,e.query,!0),i=e.view.Xu(r);return t.isPrimaryClient&&Ud(t,e.targetId,i.Yu),i}async function U5(n,e){const t=F(n);return K_(t.localStore,e).then(r=>or(t,r))}async function V5(n,e,t,r){const i=F(n),s=await function(o,a){const l=F(o),c=F(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",u=>c.In(u,a).next(h=>h?l.localDocuments.getDocuments(u,h):b.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Js(i.remoteStore):t==="acknowledged"||t==="rejected"?(Xp(i,e,r||null),Jp(i,e),function(o,a){F(F(o).mutationQueue).En(a)}(i.localStore,e)):z(),await or(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function B5(n,e){const t=F(n);if(em(t),tm(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await d1(t,r.toArray());t.fc=!0,await $d(t.remoteStore,!0);for(const s of i)Cu(t.remoteStore,s)}else if(e===!1&&t.fc!==!1){const r=[];let i=Promise.resolve();t.ic.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Os(t,o),ks(t.localStore,o,!0))),ya(t.remoteStore,o)}),await i,await d1(t,r),function(s){const o=F(s);o.uc.forEach((a,l)=>{ya(o.remoteStore,l)}),o.cc.ls(),o.uc=new Map,o.oc=new qe(L.comparator)}(t),t.fc=!1,await $d(t.remoteStore,!1)}}async function d1(n,e,t){const r=F(n),i=[],s=[];for(const o of e){let a;const l=r.ic.get(o);if(l&&l.length!==0){a=await Cs(r.localStore,qt(l[0]));for(const c of l){const u=r.sc.get(c),h=await $5(r,u);h.snapshot&&s.push(h.snapshot)}}else{const c=await G_(r.localStore,o);a=await Cs(r.localStore,c),await Yp(r,cb(c),o,!1,a.resumeToken)}i.push(a)}return r.nc.zo(s),i}function cb(n){return Zw(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function z5(n){const e=F(n);return F(F(e.localStore).persistence).bi()}async function q5(n,e,t,r){const i=F(n);if(i.fc)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await K_(i.localStore,t_(s[0])),a=qa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",rt.EMPTY_BYTE_STRING);await or(i,o,a);break}case"rejected":await ks(i.localStore,e,!0),Os(i,e,r);break;default:z()}}async function H5(n,e,t){const r=em(n);if(r.fc){for(const i of e){if(r.ic.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await G_(r.localStore,i),o=await Cs(r.localStore,s);await Yp(r,cb(s),o.targetId,!1,o.resumeToken),Cu(r.remoteStore,o)}for(const i of t)r.ic.has(i)&&await ks(r.localStore,i,!1).then(()=>{ya(r.remoteStore,i),Os(r,i)}).catch($r)}}function em(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D5.bind(null,e),e.nc.zo=I5.bind(null,e.eventManager),e.nc.wc=x5.bind(null,e.eventManager),e}function tm(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N5.bind(null,e),e}function G5(n,e,t){const r=F(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=F(h),p=We(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.xs.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(rb(a));const l=new T5(a,i.localStore,s.serializer);let c=await s._c();for(;c;){const h=await l.$u(c);h&&o._updateProgress(h),c=await s._c()}const u=await l.complete();return await or(i,u.Bu,void 0),await function(h,d){const f=F(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.xs.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Fu)}catch(a){return Zn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Vd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return B_(this.persistence,new V_,e.initialUser,this.serializer)}createPersistence(e){return new U_(Au.Fs,this.serializer)}createSharedClientState(e){return new Q_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ub extends Vd{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await tm(this.mc.syncEngine),await Js(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return B_(this.persistence,new V_,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new L3(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new wL(t,this.persistence);return new vL(e.asyncQueue,r)}createPersistence(e){const t=Fp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new jp(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Y_(),zl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Q_}}class K5 extends ub{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof Ih&&(this.sharedClientState.syncEngine={$r:V5.bind(null,t),Mr:q5.bind(null,t),Fr:H5.bind(null,t),bi:z5.bind(null,t),Or:U5.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await B5(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Y_();if(!Ih.D(t))throw new C(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ih(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class nm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>h1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=j5.bind(null,this.syncEngine),await $d(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new b5}createDatastore(e){const t=Ga(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new s5(i));var i;return function(s,o,a,l){return new l5(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>h1(this.syncEngine,a,0),o=a1.D()?new a1:new n5,new u5(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,l,c){const u=new C5(r,i,s,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=F(e);R("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Ys(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */function f1(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class W5{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new at,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const i=await this.vc(r);return new E5(JSON.parse(i),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class Q5{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=F(r),o=ma(s.serializer)+"/documents",a={documents:i.map(h=>pa(s.serializer,h))},l=await s.fo("BatchGetDocuments",o,a,i.length),c=new Map;l.forEach(h=>{const d=g3(s.serializer,h);c.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=c.get(h.toString());K(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Qs(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=L.fromPath(r);this.mutations.push(new Ap(i,this.precondition(i)))}),await async function(t,r){const i=F(t),s=ma(i.serializer)+"/documents",o={writes:r.map(a=>ga(i.serializer,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw z();t=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new C(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(W.min())?Ne.exists(!1):Ne.updateTime(t):Ne.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(W.min()))throw new C(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(t)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Y5{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Vc=r.maxAttempts,this.Co=new Vp(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new Q5(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Cc(i)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!$a(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!m_(t)}return!1}}/**
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
 */class J5{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=Rw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Zs(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ql(n,e){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await z_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Bd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rm(n);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>l1(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>l1(e.remoteStore,s)),n._onlineComponents=e}function hb(n){return n.name==="FirebaseError"?n.code===x.FAILED_PRECONDITION||n.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function rm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await ql(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!hb(t))throw t;Zn("Error using user provided cache. Falling back to memory cache: "+t),await ql(n,new Vd)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await ql(n,new Vd);return n._offlineComponents}async function Ru(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await Bd(n,n._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await Bd(n,new nm))),n._onlineComponents}function db(n){return rm(n).then(e=>e.persistence)}function im(n){return rm(n).then(e=>e.localStore)}function fb(n){return Ru(n).then(e=>e.remoteStore)}function sm(n){return Ru(n).then(e=>e.syncEngine)}function X5(n){return Ru(n).then(e=>e.datastore)}async function Ds(n){const e=await Ru(n),t=e.eventManager;return t.onListen=k5.bind(null,e.syncEngine),t.onUnlisten=R5.bind(null,e.syncEngine),t}function Z5(n){return n.asyncQueue.enqueue(async()=>{const e=await db(n),t=await fb(n);return e.setNetworkEnabled(!0),function(r){const i=F(r);return i.du.delete(0),Ka(i)}(t)})}function ej(n){return n.asyncQueue.enqueue(async()=>{const e=await db(n),t=await fb(n);return e.setNetworkEnabled(!1),async function(r){const i=F(r);i.du.add(0),await Ys(i),i.mu.set("Offline")}(t)})}function tj(n,e){const t=new at;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const c=F(a);return c.persistence.runTransaction("read document","readonly",u=>c.localDocuments.getDocument(u,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(x.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Zs(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await im(n),e,t)),t.promise}function pb(n,e,t={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new ku({next:h=>{s.enqueueAndForget(()=>Kp(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new C(x.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new C(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Qp(Ks(o.path),c,{includeMetadataChanges:!0,xu:!0});return Gp(i,u)}(await Ds(n),n.asyncQueue,e,t,r)),r.promise}function nj(n,e){const t=new at;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Ec(r,i,!0),a=new ob(i,o.Wi),l=a.zu(o.documents),c=a.applyChanges(l,!1);s.resolve(c.snapshot)}catch(o){const a=Zs(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await im(n),e,t)),t.promise}function mb(n,e,t={}){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new ku({next:h=>{s.enqueueAndForget(()=>Kp(i,u)),h.fromCache&&a.source==="server"?l.reject(new C(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Qp(o,c,{includeMetadataChanges:!0,xu:!0});return Gp(i,u)}(await Ds(n),n.asyncQueue,e,t,r)),r.promise}function rj(n,e){const t=new ku(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){F(r).Au.add(i),i.next()}(await Ds(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){F(r).Au.delete(i)}(await Ds(n),t))}}function ij(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(l,c){return new W5(l,c)}(function(l,c){if(l instanceof Uint8Array)return f1(l,c);if(l instanceof ArrayBuffer)return f1(new Uint8Array(l),c);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Ga(e));n.asyncQueue.enqueueAndForget(async()=>{G5(await sm(n),i,r)})}function sj(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=F(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.xs.getNamedQuery(s,r))}(await im(n),e))}/**
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
 */const p1=new Map;/**
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
 */function om(n,e,t){if(!t)throw new C(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gb(n,e,t,r){if(e===!0&&r===!0)throw new C(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function m1(n){if(!L.isDocumentKey(n))throw new C(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function g1(n){if(L.isDocumentKey(n))throw new C(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ou(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new C(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ou(n);throw new C(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function yb(n,e){if(e<=0)throw new C(x.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class y1{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new C(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Wa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y1(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new oL;switch(t.type){case"firstParty":return new uL(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new C(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=p1.get(e);t&&(R("ComponentProvider","Removing Datastore"),p1.delete(e),t.terminate())}(this),Promise.resolve()}}function oj(n,e,t,r={}){var i;const s=(n=ye(n,Wa))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Zn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ot.MOCK_USER;else{o=Mk(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ot(l)}n._authCredentials=new aL(new kw(o,a))}}/**
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
 */class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class wt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wt(this.firestore,e,this._query)}}class Pn extends wt{constructor(e,t,r){super(e,t,Ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new L(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function vb(n,e,...t){if(n=J(n),om("collection","path",e),n instanceof Wa){const r=fe.fromString(e,...t);return g1(r),new Pn(n,null,r)}{if(!(n instanceof Oe||n instanceof Pn))throw new C(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return g1(r),new Pn(n.firestore,null,r)}}function aj(n,e){if(n=ye(n,Wa),om("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new wt(n,null,function(t){return new ir(fe.emptyPath(),t)}(e))}function Cc(n,e,...t){if(n=J(n),arguments.length===1&&(e=Rw.A()),om("doc","path",e),n instanceof Wa){const r=fe.fromString(e,...t);return m1(r),new Oe(n,null,new L(r))}{if(!(n instanceof Oe||n instanceof Pn))throw new C(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return m1(r),new Oe(n.firestore,n instanceof Pn?n.converter:null,new L(r))}}function wb(n,e){return n=J(n),e=J(e),(n instanceof Oe||n instanceof Pn)&&(e instanceof Oe||e instanceof Pn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function _b(n,e){return n=J(n),e=J(e),n instanceof wt&&e instanceof wt&&n.firestore===e.firestore&&Va(n._query,e._query)&&n.converter===e.converter}/**
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
 */class lj{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Vp(this,"async_queue_retry"),this.qc=()=>{const t=zl();t&&R("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=zl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=zl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new at;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ur(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ge("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=Hp.createAndSchedule(this,e,t,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function zd(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class cj{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const uj=-1;class He extends Wa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new lj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bb(this),this._firestoreClient.terminate()}}function dt(n){return n._firestoreClient||bb(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function bb(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,l,c){return new VL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new J5(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function hj(n,e){xb(n=ye(n,He));const t=dt(n);if(t._uninitializedComponentsProvider)throw new C(x.FAILED_PRECONDITION,"SDK cache is already specified.");Zn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new nm;return Ib(t,i,new ub(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function dj(n){xb(n=ye(n,He));const e=dt(n);if(e._uninitializedComponentsProvider)throw new C(x.FAILED_PRECONDITION,"SDK cache is already specified.");Zn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new nm;return Ib(e,r,new K5(r,t.cacheSizeBytes))}function Ib(n,e,t){const r=new at;return n.asyncQueue.enqueue(async()=>{try{await ql(n,t),await Bd(n,e),r.resolve()}catch(i){const s=i;if(!hb(s))throw s;Zn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function fj(n){if(n._initialized&&!n._terminated)throw new C(x.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!un.D())return Promise.resolve();const r=t+"main";await un.delete(r)}(Fp(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function pj(n){return function(e){const t=new at;return e.asyncQueue.enqueueAndForget(async()=>M5(await sm(e),t)),t.promise}(dt(n=ye(n,He)))}function mj(n){return Z5(dt(n=ye(n,He)))}function gj(n){return ej(dt(n=ye(n,He)))}function yj(n,e){const t=dt(n=ye(n,He)),r=new cj;return ij(t,n._databaseId,e,r),r}function vj(n,e){return sj(dt(n=ye(n,He)),e).then(t=>t?new wt(n,null,t.query):null)}function xb(n){if(n._initialized||n._terminated)throw new C(x.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(rt.fromBase64String(e))}catch(t){throw new C(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fn(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fi{constructor(e){this._methodName=e}}/**
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
 */class Du{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const wj=/^__.*__$/;class _j{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ws(e,this.data,t,this.fieldTransforms)}}class Eb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tb(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Pu{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return kc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Tb(this.Yc)&&wj.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class bj{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ga(e)}ua(e,t,r,i=!1){return new Pu({Yc:e,methodName:t,oa:r,path:Ke.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $i(n){const e=n._freezeSettings(),t=Ga(n._databaseId);return new bj(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Nu(n,e,t,r,i,s={}){const o=n.ua(s.merge||s.mergeFields?2:0,e,t,i);um("Data must be an object, but it was:",o,r);const a=Cb(r,o);let l,c;if(s.merge)l=new Vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=qd(e,h,t);if(!o.contains(d))throw new C(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rb(u,d)||u.push(d)}l=new Vt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new _j(new mt(a),l,c)}class Qa extends Fi{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}function Sb(n,e,t){return new Pu({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class am extends Fi{_toFieldTransform(e){return new za(e.path,new Ts)}isEqual(e){return e instanceof am}}class Ij extends Fi{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Sb(this,e,!0),r=this.ca.map(s=>Ui(s,t)),i=new Ei(r);return new za(e.path,i)}isEqual(e){return this===e}}class xj extends Fi{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Sb(this,e,!0),r=this.ca.map(s=>Ui(s,t)),i=new Ti(r);return new za(e.path,i)}isEqual(e){return this===e}}class Ej extends Fi{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new Ss(e.serializer,l_(e.serializer,this.aa));return new za(e.path,t)}isEqual(e){return this===e}}function lm(n,e,t,r){const i=n.ua(1,e,t);um("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();ji(r,(l,c)=>{const u=hm(e,l,t);c=J(c);const h=i.na(u);if(c instanceof Qa)s.push(u);else{const d=Ui(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Vt(s);return new Eb(o,a,i.fieldTransforms)}function cm(n,e,t,r,i,s){const o=n.ua(1,e,t),a=[qd(e,r,t)],l=[i];if(s.length%2!=0)throw new C(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(qd(e,s[d])),l.push(s[d+1]);const c=[],u=mt.empty();for(let d=a.length-1;d>=0;--d)if(!Rb(c,a[d])){const f=a[d];let p=l[d];p=J(p);const g=o.na(f);if(p instanceof Qa)c.push(f);else{const y=Ui(p,g);y!=null&&(c.push(f),u.set(f,y))}}const h=new Vt(c);return new Eb(u,h,o.fieldTransforms)}function Ab(n,e,t,r=!1){return Ui(t,n.ua(r?4:3,e))}function Ui(n,e){if(kb(n=J(n)))return um("Unsupported field value:",e,n),Cb(n,e);if(n instanceof Fi)return function(t,r){if(!Tb(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Ui(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=J(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return l_(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Le.fromDate(t);return{timestampValue:As(r.serializer,i)}}if(t instanceof Le){const i=new Le(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:As(r.serializer,i)}}if(t instanceof Du)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Fn)return{bytesValue:w_(r.serializer,t._byteString)};if(t instanceof Oe){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dp(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${Ou(t)}`)}(n,e)}function Cb(n,e){const t={};return Bw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(n,(r,i)=>{const s=Ui(i,e.Xc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function kb(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Du||n instanceof Fn||n instanceof Oe||n instanceof Fi)}function um(n,e,t){if(!kb(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ou(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function qd(n,e,t){if((e=J(e))instanceof Nr)return e._internalPath;if(typeof e=="string")return hm(n,e);throw kc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Tj=new RegExp("[~\\*/\\[\\]]");function hm(n,e,t){if(e.search(Tj)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Nr(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function kc(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new C(x.INVALID_ARGUMENT,a+n+l)}function Rb(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class va{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sj extends va{data(){return super.data()}}function Mu(n,e){return typeof e=="string"?hm(n,e):e instanceof Nr?e._internalPath:e._delegate._internalPath}/**
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
 */function Ob(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new C(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dm{}class Ya extends dm{}function fr(n,e,...t){let r=[];e instanceof dm&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof fm).length,o=i.filter(a=>a instanceof Lu).length;if(s>1||s>0&&o>0)throw new C(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Lu extends Ya{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Lu(e,t,r)}_apply(e){const t=this._parse(e);return Pb(e._query,t),new wt(e.firestore,e.converter,Od(e._query,t))}_parse(e){const t=$i(e.firestore);return function(i,s,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new C(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){w1(u,c);const d=[];for(const f of u)d.push(v1(a,i,f));h={arrayValue:{values:d}}}else h=v1(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||w1(u,c),h=Ab(o,s,u,c==="in"||c==="not-in");return ue.create(l,c,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Aj(n,e,t){const r=e,i=Mu("where",n);return Lu._create(i,r,t)}class fm extends dm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fm(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Pb(s,a),s=Od(s,a)}(e._query,t),new wt(e.firestore,e.converter,Od(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pm extends Ya{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pm(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new C(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ls(i,s);return function(a,l){if(Tp(a)===null){const c=bu(a);c!==null&&Nb(a,c,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new wt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ir(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Cj(n,e="asc"){const t=e,r=Mu("orderBy",n);return pm._create(r,t)}class ju extends Ya{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ju(e,t,r)}_apply(e){return new wt(e.firestore,e.converter,_c(e._query,this._limit,this._limitType))}}function kj(n){return yb("limit",n),ju._create("limit",n,"F")}function Rj(n){return yb("limitToLast",n),ju._create("limitToLast",n,"L")}class Fu extends Ya{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Fu(e,t,r)}_apply(e){const t=Db(e,this.type,this._docOrFields,this._inclusive);return new wt(e.firestore,e.converter,function(r,i){return new ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function Oj(...n){return Fu._create("startAt",n,!0)}function Dj(...n){return Fu._create("startAfter",n,!1)}class $u extends Ya{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $u(e,t,r)}_apply(e){const t=Db(e,this.type,this._docOrFields,this._inclusive);return new wt(e.firestore,e.converter,function(r,i){return new ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function Pj(...n){return $u._create("endBefore",n,!1)}function Nj(...n){return $u._create("endAt",n,!0)}function Db(n,e,t,r){if(t[0]=J(t[0]),t[0]instanceof va)return function(i,s,o,a,l){if(!a)throw new C(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const u of pi(i))if(u.field.isKeyField())c.push(Ii(s,a.key));else{const h=a.data.field(u.field);if(xp(h))throw new C(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new C(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(h)}return new Dr(c,l)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=$i(n.firestore);return function(s,o,a,l,c,u){const h=s.explicitOrderBy;if(c.length>h.length)throw new C(x.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<c.length;f++){const p=c[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new C(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof p}`);if(!Sp(s)&&p.indexOf("/")!==-1)throw new C(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${p}' contains a slash.`);const g=s.path.child(fe.fromString(p));if(!L.isDocumentKey(g))throw new C(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const y=new L(g);d.push(Ii(o,y))}else{const g=Ab(a,l,p);d.push(g)}}return new Dr(d,u)}(n._query,n.firestore._databaseId,i,e,t,r)}}function v1(n,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new C(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sp(e)&&t.indexOf("/")!==-1)throw new C(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!L.isDocumentKey(r))throw new C(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ii(n,new L(r))}if(t instanceof Oe)return Ii(n,t._key);throw new C(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ou(t)}.`)}function w1(n,e){if(!Array.isArray(n)||n.length===0)throw new C(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pb(n,e){if(e.isInequality()){const r=bu(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Tp(n);s!==null&&Nb(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Nb(n,e,t){if(!t.isEqual(e))throw new C(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class mm{convertValue(e,t="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw z()}}convertObject(e,t){const r={};return ji(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Du(Be(e.latitude),Be(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zw(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ha(e));default:return null}}convertTimestamp(e){const t=kr(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);K(k_(r));const i=new Rr(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(t)||Ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Uu(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Mj extends mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}/**
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
 */class oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class er extends va{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Lo extends er{data(e={}){return super.data(e)}}class Mr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Lo(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Lo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Lo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:Lj(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}function Mb(n,e){return n instanceof er&&e instanceof er?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Mr&&e instanceof Mr&&n._firestore===e._firestore&&_b(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function jj(n){n=ye(n,Oe);const e=ye(n.firestore,He);return pb(dt(e),n._key).then(t=>gm(e,n,t))}class Vi extends mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function Fj(n){n=ye(n,Oe);const e=ye(n.firestore,He),t=dt(e),r=new Vi(e);return tj(t,n._key).then(i=>new er(e,r,n._key,i,new oi(i!==null&&i.hasLocalMutations,!0),n.converter))}function $j(n){n=ye(n,Oe);const e=ye(n.firestore,He);return pb(dt(e),n._key,{source:"server"}).then(t=>gm(e,n,t))}function Uj(n){n=ye(n,wt);const e=ye(n.firestore,He),t=dt(e),r=new Vi(e);return Ob(n._query),mb(t,n._query).then(i=>new Mr(e,r,n,i))}function Vj(n){n=ye(n,wt);const e=ye(n.firestore,He),t=dt(e),r=new Vi(e);return nj(t,n._query).then(i=>new Mr(e,r,n,i))}function Bj(n){n=ye(n,wt);const e=ye(n.firestore,He),t=dt(e),r=new Vi(e);return mb(t,n._query,{source:"server"}).then(i=>new Mr(e,r,n,i))}function _1(n,e,t){n=ye(n,Oe);const r=ye(n.firestore,He),i=Uu(n.converter,e,t);return Ja(r,[Nu($i(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ne.none())])}function b1(n,e,t,...r){n=ye(n,Oe);const i=ye(n.firestore,He),s=$i(i);let o;return o=typeof(e=J(e))=="string"||e instanceof Nr?cm(s,"updateDoc",n._key,e,t,r):lm(s,"updateDoc",n._key,e),Ja(i,[o.toMutation(n._key,Ne.exists(!0))])}function zj(n){return Ja(ye(n.firestore,He),[new Qs(n._key,Ne.none())])}function qj(n,e){const t=ye(n.firestore,He),r=Cc(n),i=Uu(n.converter,e);return Ja(t,[Nu($i(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function Lb(n,...e){var t,r,i;n=J(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||zd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(zd(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(n instanceof Oe)c=ye(n.firestore,He),u=Ks(n._key.path),l={next:h=>{e[o]&&e[o](gm(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ye(n,wt);c=ye(h.firestore,He),u=h._query;const d=new Vi(c);l={next:f=>{e[o]&&e[o](new Mr(c,d,h,f))},error:e[o+1],complete:e[o+2]},Ob(n._query)}return function(h,d,f,p){const g=new ku(p),y=new Qp(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>Gp(await Ds(h),y)),()=>{g.yc(),h.asyncQueue.enqueueAndForget(async()=>Kp(await Ds(h),y))}}(dt(c),u,a,l)}function Hj(n,e){return rj(dt(n=ye(n,He)),zd(e)?e:{next:e})}function Ja(n,e){return function(t,r){const i=new at;return t.asyncQueue.enqueueAndForget(async()=>O5(await sm(t),r,i)),i.promise}(dt(n),e)}function gm(n,e,t){const r=t.docs.get(e._key),i=new Vi(n);return new er(n,i,e._key,r,new oi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const Gj={maxAttempts:5};/**
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
 */class Kj{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=$i(e)}set(e,t,r){this._verifyNotCommitted();const i=yr(e,this._firestore),s=Uu(i.converter,t,r),o=Nu(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ne.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=yr(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof Nr?cm(this._dataReader,"WriteBatch.update",s._key,t,r,i):lm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ne.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=yr(e,this._firestore);return this._mutations=this._mutations.concat(new Qs(t._key,Ne.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function yr(n,e){if((n=J(n)).firestore!==e)throw new C(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Wj extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=$i(e)}get(e){const t=yr(e,this._firestore),r=new Mj(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return z();const s=i[0];if(s.isFoundDocument())return new va(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new va(this._firestore,r,t._key,null,t.converter);throw z()})}set(e,t,r){const i=yr(e,this._firestore),s=Uu(i.converter,t,r),o=Nu(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=yr(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof Nr?cm(this._dataReader,"Transaction.update",s._key,t,r,i):lm(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=yr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=yr(e,this._firestore),r=new Vi(this._firestore);return super.get(e).then(i=>new er(this._firestore,r,t._key,i._document,new oi(!1,!1),t.converter))}}function Qj(n,e,t){n=ye(n,He);const r=Object.assign(Object.assign({},Gj),t);return function(i){if(i.maxAttempts<1)throw new C(x.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new at;return i.asyncQueue.enqueueAndForget(async()=>{const l=await X5(i);new Y5(i.asyncQueue,l,o,s,a).run()}),a.promise}(dt(n),i=>e(new Wj(n,i)),r)}/**
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
 */function Yj(){return new Qa("deleteField")}function Jj(){return new am("serverTimestamp")}function Xj(...n){return new Ij("arrayUnion",n)}function Zj(...n){return new xj("arrayRemove",n)}function e4(n){return new Ej("increment",n)}(function(n,e=!0){(function(t){Gs=t})(Ni),Ar(new Mn("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new He(new lL(t.getProvider("auth-internal")),new dL(t.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),On(vy,"3.10.0",n),On(vy,"3.10.0","esm2017")})();const t4="@firebase/firestore-compat",n4="0.3.6";/**
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
 */function ym(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function I1(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function x1(){if(!$L())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class wa{constructor(e){this._delegate=e}static fromBase64String(e){return x1(),new wa(Fn.fromBase64String(e))}static fromUint8Array(e){return I1(),new wa(Fn.fromUint8Array(e))}toBase64(){return x1(),this._delegate.toBase64()}toUint8Array(){return I1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Hd(n){return r4(n,["next","error","complete"])}function r4(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class i4{enableIndexedDbPersistence(e,t){return hj(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return dj(e._delegate)}clearIndexedDbPersistence(e){return fj(e._delegate)}}class jb{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Rr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Zn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){oj(this._delegate,e,t,r)}enableNetwork(){return mj(this._delegate)}disableNetwork(){return gj(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,gb("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return pj(this._delegate)}onSnapshotsInSync(e){return Hj(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ps(this,vb(this._delegate,e))}catch(t){throw Ot(t,"collection()","Firestore.collection()")}}doc(e){try{return new tn(this,Cc(this._delegate,e))}catch(t){throw Ot(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Rt(this,aj(this._delegate,e))}catch(t){throw Ot(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Qj(this._delegate,t=>e(new Fb(this,t)))}batch(){return dt(this._delegate),new $b(new Kj(this._delegate,e=>Ja(this._delegate,e)))}loadBundle(e){return yj(this._delegate,e)}namedQuery(e){return vj(this._delegate,e).then(t=>t?new Rt(this,t):null)}}class Vu extends mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new wa(new Fn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return tn.forKey(t,this.firestore,null)}}function s4(n){iL(n)}class Fb{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Vu(e)}get(e){const t=ai(e);return this._delegate.get(t).then(r=>new _a(this._firestore,new er(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=ai(e);return r?(ym("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=ai(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=ai(e);return this._delegate.delete(t),this}}class $b{constructor(e){this._delegate=e}set(e,t,r){const i=ai(e);return r?(ym("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=ai(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=ai(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ki{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Lo(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ba(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ki.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new ki(e,new Vu(e),t),i.set(t,s)),s}}ki.INSTANCES=new WeakMap;class tn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vu(e)}static forPath(e,t,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new tn(t,new Oe(t._delegate,r,new L(e)))}static forKey(e,t,r){return new tn(t,new Oe(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ps(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ps(this.firestore,vb(this._delegate,e))}catch(t){throw Ot(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof Oe?wb(this._delegate,e):!1}set(e,t){t=ym("DocumentReference.set",t);try{return t?_1(this._delegate,e,t):_1(this._delegate,e)}catch(r){throw Ot(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?b1(this._delegate,e):b1(this._delegate,e,t,...r)}catch(i){throw Ot(i,"updateDoc()","DocumentReference.update()")}}delete(){return zj(this._delegate)}onSnapshot(...e){const t=Ub(e),r=Vb(e,i=>new _a(this.firestore,new er(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Lb(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Fj(this._delegate):(e==null?void 0:e.source)==="server"?t=$j(this._delegate):t=jj(this._delegate),t.then(r=>new _a(this.firestore,new er(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new tn(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ot(n,e,t){return n.message=n.message.replace(e,t),n}function Ub(n){for(const e of n)if(typeof e=="object"&&!Hd(e))return e;return{}}function Vb(n,e){var t,r;let i;return Hd(n[0])?i=n[0]:Hd(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class _a{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new tn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Mb(this._delegate,e._delegate)}}class ba extends _a{data(e){const t=this._delegate.data(e);return sL(t!==void 0),t}}class Rt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vu(e)}where(e,t,r){try{return new Rt(this.firestore,fr(this._delegate,Aj(e,t,r)))}catch(i){throw Ot(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Rt(this.firestore,fr(this._delegate,Cj(e,t)))}catch(r){throw Ot(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Rt(this.firestore,fr(this._delegate,kj(e)))}catch(t){throw Ot(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Rt(this.firestore,fr(this._delegate,Rj(e)))}catch(t){throw Ot(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Rt(this.firestore,fr(this._delegate,Oj(...e)))}catch(t){throw Ot(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Rt(this.firestore,fr(this._delegate,Dj(...e)))}catch(t){throw Ot(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Rt(this.firestore,fr(this._delegate,Pj(...e)))}catch(t){throw Ot(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Rt(this.firestore,fr(this._delegate,Nj(...e)))}catch(t){throw Ot(t,"endAt()","Query.endAt()")}}isEqual(e){return _b(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Vj(this._delegate):(e==null?void 0:e.source)==="server"?t=Bj(this._delegate):t=Uj(this._delegate),t.then(r=>new Gd(this.firestore,new Mr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Ub(e),r=Vb(e,i=>new Gd(this.firestore,new Mr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Lb(this._delegate,t,r)}withConverter(e){return new Rt(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class o4{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ba(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Gd{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ba(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new o4(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ba(this._firestore,r))})}isEqual(e){return Mb(this._delegate,e._delegate)}}class Ps extends Rt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new tn(this.firestore,e):null}doc(e){try{return e===void 0?new tn(this.firestore,Cc(this._delegate)):new tn(this.firestore,Cc(this._delegate,e))}catch(t){throw Ot(t,"doc()","CollectionReference.doc()")}}add(e){return qj(this._delegate,e).then(t=>new tn(this.firestore,t))}isEqual(e){return wb(this._delegate,e._delegate)}withConverter(e){return new Ps(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ai(n){return ye(n,Oe)}/**
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
 */class vm{constructor(...e){this._delegate=new Nr(...e)}static documentId(){return new vm(Ke.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof Nr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ti{constructor(e){this._delegate=e}static serverTimestamp(){const e=Jj();return e._methodName="FieldValue.serverTimestamp",new ti(e)}static delete(){const e=Yj();return e._methodName="FieldValue.delete",new ti(e)}static arrayUnion(...e){const t=Xj(...e);return t._methodName="FieldValue.arrayUnion",new ti(t)}static arrayRemove(...e){const t=Zj(...e);return t._methodName="FieldValue.arrayRemove",new ti(t)}static increment(e){const t=e4(e);return t._methodName="FieldValue.increment",new ti(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const a4={Firestore:jb,GeoPoint:Du,Timestamp:Le,Blob:wa,Transaction:Fb,WriteBatch:$b,DocumentReference:tn,DocumentSnapshot:_a,Query:Rt,QueryDocumentSnapshot:ba,QuerySnapshot:Gd,CollectionReference:Ps,FieldPath:vm,FieldValue:ti,setLogLevel:s4,CACHE_SIZE_UNLIMITED:uj};function l4(n,e){n.INTERNAL.registerComponent(new Mn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},a4)))}/**
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
 */function c4(n){l4(n,(e,t)=>new jb(e,t,new i4)),n.registerVersion(t4,n4)}c4($s);const u4={apiKey:"AIzaSyDWG12tWu3p3n5xFIPaH-UV7835WoUuhbA",authDomain:"luminescenceckmsc39th.firebaseapp.com",projectId:"luminescenceckmsc39th",storageBucket:"luminescenceckmsc39th.appspot.com",messagingSenderId:"815292617893",appId:"1:815292617893:web:b1baa918336aaf5187294c",measurementId:"G-B9551N51HL"},Bb=$s.initializeApp(u4);Bb.auth();Bb.firestore();hE(_E).use(lk,eh).component("navbar",bk).component(eh.name,eh).mount("#app");

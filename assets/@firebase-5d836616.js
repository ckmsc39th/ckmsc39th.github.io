import{_ as tc}from"./tslib-4b8363ab.js";import{o as hg}from"./idb-f62f60ab.js";/**
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
 */const Lh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},dg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new fg;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mg=function(n){const e=Lh(n);return Mh.encodeByteArray(e,!0)},Is=function(n){return mg(n).replace(/\./g,"")},Fh=function(n){try{return Mh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function _s(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!pg(t)||(n[t]=_s(n[t],e[t]));return n}function pg(n){return n!=="__proto__"}/**
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
 */function gg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yg=()=>gg().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fh(n[1]);return e&&JSON.parse(e)},nc=()=>{try{return yg()||vg()||wg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ig=()=>{var n;return(n=nc())===null||n===void 0?void 0:n.config},_g=n=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Is(JSON.stringify(t)),Is(JSON.stringify(o)),a].join(".")}/**
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
 */function H(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function rc(){var n;const e=(n=nc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sg(){return typeof self=="object"&&self.self===self}function Uh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vh(){const n=H();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kg(){return!rc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xr(){try{return typeof indexedDB=="object"}catch{return!1}}function Ag(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Cg="FirebaseError";class Ne extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cg,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cn.prototype.create)}}class Cn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Dg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ne(i,a,r)}}function Dg(n,e){return n.replace(Ng,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ng=/\{\$([^}]+)}/g;/**
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
 */function Gu(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ha(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ku(s)&&Ku(o)){if(!ha(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ku(n){return n!==null&&typeof n=="object"}/**
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
 */function hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Mr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Bh(n,e){const t=new xg(n,e);return t.subscribe.bind(t)}class xg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Go),i.error===void 0&&(i.error=Go),i.complete===void 0&&(i.complete=Go);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Go(){}/**
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
 */function A(n){return n&&n._delegate?n._delegate:n}class it{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class Og{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Eg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lg(n){return n===Yt?void 0:n}function Mg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Fg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Og(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const sc=[];var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const $h={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Ug=L.INFO,Vg={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Bg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Vg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=Ug,this._logHandler=Bg,this._userLogHandler=null,sc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}function $g(n){sc.forEach(e=>{e.setLogLevel(n)})}function qg(n,e){for(const t of sc){let r=null;e&&e.level&&(r=$h[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:L[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",Wu="0.9.6";/**
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
 */const mn=new Hs("@firebase/app"),Gg="@firebase/app-compat",Kg="@firebase/analytics-compat",Wg="@firebase/analytics",Hg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Jg="@firebase/auth-compat",Xg="@firebase/database",Zg="@firebase/database-compat",ey="@firebase/functions",ty="@firebase/functions-compat",ny="@firebase/installations",ry="@firebase/installations-compat",iy="@firebase/messaging",sy="@firebase/messaging-compat",oy="@firebase/performance",ay="@firebase/performance-compat",cy="@firebase/remote-config",uy="@firebase/remote-config-compat",ly="@firebase/storage",hy="@firebase/storage-compat",dy="@firebase/firestore",fy="@firebase/firestore-compat",my="firebase",py="9.19.0";/**
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
 */const Rt="[DEFAULT]",gy={[da]:"fire-core",[Gg]:"fire-core-compat",[Wg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Hg]:"fire-app-check-compat",[Yg]:"fire-auth",[Jg]:"fire-auth-compat",[Xg]:"fire-rtdb",[Zg]:"fire-rtdb-compat",[ey]:"fire-fn",[ty]:"fire-fn-compat",[ny]:"fire-iid",[ry]:"fire-iid-compat",[iy]:"fire-fcm",[sy]:"fire-fcm-compat",[oy]:"fire-perf",[ay]:"fire-perf-compat",[cy]:"fire-rc",[uy]:"fire-rc-compat",[ly]:"fire-gcs",[hy]:"fire-gcs-compat",[dy]:"fire-fst",[fy]:"fire-fst-compat","fire-js":"fire-js",[my]:"fire-js-all"};/**
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
 */const xt=new Map,Zr=new Map;function Es(n,e){try{n.container.addComponent(e)}catch(t){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qh(n,e){n.container.addOrOverwriteComponent(e)}function Pt(n){const e=n.name;if(Zr.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,n);for(const t of xt.values())Es(t,n);return!0}function zh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yy(n,e,t=Rt){zh(n,e).clearInstance(t)}function vy(){Zr.clear()}/**
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
 */const wy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new Cn("app","Firebase",wy);/**
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
 */let Iy=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}};/**
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
 */const Dn=py;function oc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ht.create("bad-app-name",{appName:String(i)});if(t||(t=Ig()),!t)throw ht.create("no-options");const s=xt.get(i);if(s){if(ha(t,s.options)&&ha(r,s.config))return s;throw ht.create("duplicate-app",{appName:i})}const o=new Fg(i);for(const c of Zr.values())o.addComponent(c);const a=new Iy(t,r,o);return xt.set(i,a),a}function _y(n=Rt){const e=xt.get(n);if(!e&&n===Rt)return oc();if(!e)throw ht.create("no-app",{appName:n});return e}function Ey(){return Array.from(xt.values())}async function jh(n){const e=n.name;xt.has(e)&&(xt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function tt(n,e,t){var r;let i=(r=gy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Pt(new it(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Gh(n,e){if(n!==null&&typeof n!="function")throw ht.create("invalid-log-argument");qg(n,e)}function Kh(n){$g(n)}/**
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
 */const by="firebase-heartbeat-database",Ty=1,ei="firebase-heartbeat-store";let Ko=null;function Wh(){return Ko||(Ko=hg(by,Ty,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ei)}}}).catch(n=>{throw ht.create("idb-open",{originalErrorMessage:n.message})})),Ko}async function Sy(n){try{return(await Wh()).transaction(ei).objectStore(ei).get(Hh(n))}catch(e){if(e instanceof Ne)mn.warn(e.message);else{const t=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(t.message)}}}async function Hu(n,e){try{const r=(await Wh()).transaction(ei,"readwrite");return await r.objectStore(ei).put(e,Hh(n)),r.done}catch(t){if(t instanceof Ne)mn.warn(t.message);else{const r=ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mn.warn(r.message)}}}function Hh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ky=1024,Ay=30*24*60*60*1e3;class Cy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ny(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ay}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qu(),{heartbeatsToSend:t,unsentEntries:r}=Dy(this._heartbeatsCache.heartbeats),i=Is(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qu(){return new Date().toISOString().substring(0,10)}function Dy(n,e=ky){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ny{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xr()?Ag().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yu(n){return Is(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ry(n){Pt(new it("platform-logger",e=>new zg(e),"PRIVATE")),Pt(new it("heartbeat",e=>new Cy(e),"PRIVATE")),tt(da,Wu,n),tt(da,Wu,"esm2017"),tt("fire-js","")}Ry("");const xy=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ne,SDK_VERSION:Dn,_DEFAULT_ENTRY_NAME:Rt,_addComponent:Es,_addOrOverwriteComponent:qh,_apps:xt,_clearComponents:vy,_components:Zr,_getProvider:zh,_registerComponent:Pt,_removeServiceInstance:yy,deleteApp:jh,getApp:_y,getApps:Ey,initializeApp:oc,onLog:Gh,registerVersion:tt,setLogLevel:Kh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t){this._delegate=e,this.firebase=t,Es(e,new it("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),jh(this._delegate)))}_getService(e,t=Rt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Rt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Es(this._delegate,e)}_addOrOverwriteComponent(e){qh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Oy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ju=new Cn("app-compat","Firebase",Oy);/**
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
 */function Ly(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:tt,setLogLevel:Kh,onLog:Gh,apps:null,SDK_VERSION:Dn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:xy}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Rt,!Gu(e,u))throw Ju.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=oc(u,l);if(Gu(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Pt(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Ju.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&_s(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function Qh(){const n=Ly(Py);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Qh,extendNamespace:e,createSubscribe:Bh,ErrorFactory:Cn,deepExtend:_s});function e(t){_s(n,t)}return n}const My=Qh();/**
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
 */const Xu=new Hs("@firebase/app-compat"),Fy="@firebase/app-compat",Uy="0.2.6";/**
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
 */function Vy(n){tt(Fy,Uy,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Sg()&&self.firebase!==void 0){Xu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Xu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Qs=My;Vy();const kr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Fn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Yh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $y=By,qy=Yh,Jh=new Cn("auth","Firebase",Yh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Hs("@firebase/auth");function us(n,...e){Zu.logLevel<=L.ERROR&&Zu.error(`Auth (${Dn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,...e){throw ac(n,...e)}function ve(n,...e){return ac(n,...e)}function Xh(n,e,t){const r=Object.assign(Object.assign({},qy()),{[e]:t});return new Cn("auth","Firebase",r).create(e,{appName:n.name})}function dr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ie(n,"argument-error"),Xh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ac(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Jh.create(n,...e)}function v(n,e,...t){if(!n)throw ac(e,...t)}function Xe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw us(e),new Error(e)}function Ge(n,e){n||Xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map;function Ve(n){Ge(n instanceof Function,"Expected a class definition");let e=el.get(n);return e?(Ge(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,el.set(n,e),e)}function zy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ve);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cc(){return tl()==="http:"||tl()==="https:"}function tl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cc()||Uh()||"connection"in navigator)?navigator.onLine:!0}function Gy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ge(t>e,"Short delay should be less than long delay!"),this.isMobile=Tg()||ic()}get(){return jy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e){Ge(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new Ti(3e4,6e4);function oe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fe(n,e,t,r,i={}){return ed(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=hr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Zh.fetch()(td(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ed(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ky),e);try{const i=new Hy(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fr(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xh(n,l,u);Ie(n,l)}}catch(i){if(i instanceof Ne)throw i;Ie(n,"network-request-failed",{message:String(i)})}}async function yt(n,e,t,r,i={}){const s=await fe(n,e,t,r,i);return"mfaPendingCredential"in s&&Ie(n,"multi-factor-auth-required",{_serverResponse:s}),s}function td(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?uc(n.config,i):`${n.config.apiScheme}://${i}`}class Hy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ve(this.auth,"network-request-failed")),Wy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ve(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e){return fe(n,"POST","/v1/accounts:delete",e)}async function Yy(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function Jy(n,e){return fe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xy(n,e=!1){const t=A(n),r=await t.getIdToken(e),i=Ys(r);v(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qr(Wo(i.auth_time)),issuedAtTime:qr(Wo(i.iat)),expirationTime:qr(Wo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wo(n){return Number(n)*1e3}function Ys(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fh(t);return i?JSON.parse(i):(us("Failed to decode base64 JWT payload"),null)}catch(i){return us("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zy(n){const e=Ys(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ne&&ev(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ev({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qr(this.lastLoginAt),this.creationTime=qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ft(n,Jy(t,{idToken:r}));v(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iv(s.providerUserInfo):[],a=rv(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nd(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function nv(n){const e=A(n);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iv(n){return n.map(e=>{var{providerId:t}=e,r=tc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){const t=await ed(n,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=td(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await sv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ri;return r&&(v(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(v(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(v(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class un{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ft(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xy(this,e)}reload(){return nv(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ft(this,Qy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=t.createdAt)!==null&&u!==void 0?u:void 0,Z=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:F,emailVerified:ae,isAnonymous:W,providerData:$,stsTokenManager:be}=t;v(F&&be,e,"internal-error");const Ke=ri.fromJSON(this.name,be);v(typeof F=="string",e,"internal-error"),Et(h,e.name),Et(d,e.name),v(typeof ae=="boolean",e,"internal-error"),v(typeof W=="boolean",e,"internal-error"),Et(p,e.name),Et(w,e.name),Et(_,e.name),Et(C,e.name),Et(V,e.name),Et(Z,e.name);const jo=new un({uid:F,auth:e,email:d,emailVerified:ae,displayName:h,isAnonymous:W,photoURL:w,phoneNumber:p,tenantId:_,stsTokenManager:Ke,createdAt:V,lastLoginAt:Z});return $&&Array.isArray($)&&(jo.providerData=$.map(lg=>Object.assign({},lg))),C&&(jo._redirectEventId=C),jo}static async _fromIdTokenResponse(e,t,r=!1){const i=new ri;i.updateFromServerResponse(t);const s=new un({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ni(s),s}}/**
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
 */class rd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rd.type="NONE";const Yn=rd;/**
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
 */function ln(n,e,t){return`firebase:${n}:${e}:${t}`}class Gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ln(this.userKey,i.apiKey,s),this.fullPersistenceKey=ln("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gn(Ve(Yn),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ve(Yn);const o=ln(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=un._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Gn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(od(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(id(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ad(e))return"Blackberry";if(cd(e))return"Webos";if(lc(e))return"Safari";if((e.includes("chrome/")||sd(e))&&!e.includes("edge/"))return"Chrome";if(Si(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function id(n=H()){return/firefox\//i.test(n)}function lc(n=H()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sd(n=H()){return/crios\//i.test(n)}function od(n=H()){return/iemobile/i.test(n)}function Si(n=H()){return/android/i.test(n)}function ad(n=H()){return/blackberry/i.test(n)}function cd(n=H()){return/webos/i.test(n)}function fr(n=H()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ov(n=H()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function av(n=H()){var e;return fr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cv(){return Vh()&&document.documentMode===10}function ud(n=H()){return fr(n)||Si(n)||cd(n)||ad(n)||/windows phone/i.test(n)||od(n)}function uv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n,e=[]){let t;switch(n){case"Browser":t=nl(H());break;case"Worker":t=`${nl(H())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dn}/${r}`}/**
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
 */class lv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rl(this),this.idTokenSubscription=new rl(this),this.beforeStateQueue=new lv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ve(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?A(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ve(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ve(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[Ve(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function he(n){return A(n)}class rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bh(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dv(n,e,t){const r=he(n);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=hd(e),{host:o,port:a}=fv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mv()}function hd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fv(n){const e=hd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:il(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:il(o)}}}function il(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xe("not implemented")}_getIdTokenResponse(e){return Xe("not implemented")}_linkToIdToken(e,t){return Xe("not implemented")}_getReauthenticationResolver(e){return Xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(n,e){return fe(n,"POST","/v1/accounts:resetPassword",oe(n,e))}async function fd(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function pv(n,e){return fe(n,"POST","/v1/accounts:update",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,e){return yt(n,"POST","/v1/accounts:signInWithPassword",oe(n,e))}async function Js(n,e){return fe(n,"POST","/v1/accounts:sendOobCode",oe(n,e))}async function yv(n,e){return Js(n,e)}async function vv(n,e){return Js(n,e)}async function wv(n,e){return Js(n,e)}async function Iv(n,e){return Js(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(n,e){return yt(n,"POST","/v1/accounts:signInWithEmailLink",oe(n,e))}async function Ev(n,e){return yt(n,"POST","/v1/accounts:signInWithEmailLink",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends mr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ii(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ii(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return gv(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _v(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return fd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ev(e,{idToken:t,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(n,e){return yt(n,"POST","/v1/accounts:signInWithIdp",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="http://localhost";class st extends mr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new st(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=tc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new st(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return dt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,dt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dt(e,t)}buildRequest(){const e={requestUri:bv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(n,e){return fe(n,"POST","/v1/accounts:sendVerificationCode",oe(n,e))}async function Sv(n,e){return yt(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,e))}async function kv(n,e){const t=await yt(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,e));if(t.temporaryProof)throw Fr(n,"account-exists-with-different-credential",t);return t}const Av={USER_NOT_FOUND:"user-not-found"};async function Cv(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return yt(n,"POST","/v1/accounts:signInWithPhoneNumber",oe(n,t),Av)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends mr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new hn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new hn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Sv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return kv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Cv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new hn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nv(n){const e=zn(Mr(n)).link,t=e?zn(Mr(e)).deep_link_id:null,r=zn(Mr(n)).deep_link_id;return(r?zn(Mr(r)).link:null)||r||t||e||n}class Xs{constructor(e){var t,r,i,s,o,a;const c=zn(Mr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Dv((i=c.mode)!==null&&i!==void 0?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Nv(e);try{return new Xs(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(e,t){return ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Xs.parseLink(t);return v(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}qt.PROVIDER_ID="password";qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pr extends vt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Kn extends pr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return v("providerId"in t&&"signInMethod"in t,"argument-error"),st._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return v(e.idToken||e.accessToken,"argument-error"),st._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Kn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Kn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Kn(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends pr{constructor(){super("facebook.com")}static credential(e){return st._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return st._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return He.credential(t,r)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends pr{constructor(){super("github.com")}static credential(e){return st._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="http://localhost";class Jn extends mr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return dt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,dt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Jn(r,s)}static _create(e,t){return new Jn(e,t)}buildRequest(){return{requestUri:Rv,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="saml.";class bs extends vt{constructor(e){v(e.startsWith(xv),"argument-error"),super(e)}static credentialFromResult(e){return bs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Jn.fromJSON(e);return v(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Jn._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends pr{constructor(){super("twitter.com")}static credential(e,t){return st._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ye.credential(t,r)}catch{return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com";Ye.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(n,e){return yt(n,"POST","/v1/accounts:signUp",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await un._fromIdTokenResponse(e,r,i),o=sl(r);return new ze({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=sl(r);return new ze({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function sl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n){var e;const t=he(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ze({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await md(t,{returnSecureToken:!0}),i=await ze._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Ne{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ts.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ts(e,t,r,i)}}function pd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ts._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Ov(n,e){const t=A(n);await Zs(!0,t,e);const{providerUserInfo:r}=await Yy(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=gd(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function hc(n,e,t=!1){const r=await ft(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ze._forOperation(n,"link",r)}async function Zs(n,e,t){await ni(e);const r=gd(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";v(r.has(t)===n,e.auth,i)}/**
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
 */async function yd(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ft(n,pd(r,i,e,n),t);v(s.idToken,r,"internal-error");const o=Ys(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(n.uid===a,r,"user-mismatch"),ze._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(n,e,t=!1){const r="signIn",i=await pd(n,r,e),s=await ze._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function eo(n,e){return vd(he(n),e)}async function wd(n,e){const t=A(n);return await Zs(!1,t,e.providerId),hc(t,e)}async function Id(n,e){return yd(A(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(n,e){return yt(n,"POST","/v1/accounts:signInWithCustomToken",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e){const t=he(n),r=await Lv(t,{token:e,returnSecureToken:!0}),i=await ze._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?dc._fromServerResponse(e,t):"totpInfo"in t?fc._fromServerResponse(e,t):Ie(e,"internal-error")}}class dc extends ki{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new dc(t)}}class fc extends ki{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new fc(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e,t){var r;v(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),v(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(v(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(v(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(n,e,t){const r=A(n),i={requestType:"PASSWORD_RESET",email:e};t&&to(r,i,t),await vv(r,i)}async function Uv(n,e,t){await dd(A(n),{oobCode:e,newPassword:t})}async function Vv(n,e){await pv(A(n),{oobCode:e})}async function _d(n,e){const t=A(n),r=await dd(t,{oobCode:e}),i=r.requestType;switch(v(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":v(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":v(r.mfaInfo,t,"internal-error");default:v(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ki._fromServerResponse(he(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Bv(n,e){const{data:t}=await _d(A(n),e);return t.email}async function $v(n,e,t){const r=he(n),i=await md(r,{returnSecureToken:!0,email:e,password:t}),s=await ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function qv(n,e,t){return eo(A(n),qt.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(n,e,t){const r=A(n),i={requestType:"EMAIL_SIGNIN",email:e};v(t.handleCodeInApp,r,"argument-error"),t&&to(r,i,t),await wv(r,i)}function jv(n,e){const t=Xs.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Gv(n,e,t){const r=A(n),i=qt.credentialWithLink(e,t||ti());return v(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),eo(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(n,e){return fe(n,"POST","/v1/accounts:createAuthUri",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e){const t=cc()?ti():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await Kv(A(n),r);return i||[]}async function Hv(n,e){const t=A(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&to(t.auth,i,e);const{email:s}=await yv(t.auth,i);s!==n.email&&await n.reload()}async function Qv(n,e,t){const r=A(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&to(r.auth,s,t);const{email:o}=await Iv(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(n,e){return fe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=A(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ft(r,Yv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Xv(n,e){return Ed(A(n),e,null)}function Zv(n,e){return Ed(A(n),null,e)}async function Ed(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await ft(n,fd(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function ew(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Ys(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Wn(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new tw(s,i);case"github.com":return new nw(s,i);case"google.com":return new rw(s,i);case"twitter.com":return new iw(s,i,n.screenName||null);case"custom":case"anonymous":return new Wn(s,null);default:return new Wn(s,r,i)}}class Wn{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class bd extends Wn{constructor(e,t,r,i){super(e,t,r),this.username=i}}class tw extends Wn{constructor(e,t){super(e,"facebook.com",t)}}class nw extends bd{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class rw extends Wn{constructor(e,t){super(e,"google.com",t)}}class iw extends bd{constructor(e,t,r){super(e,"twitter.com",t,r)}}function sw(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:ew(t)}class rn{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new rn("enroll",e,t)}static _fromMfaPendingCredential(e){return new rn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return rn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return rn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=he(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ki._fromServerResponse(r,a));v(i.mfaPendingCredential,r,"internal-error");const o=rn._fromMfaPendingCredential(i.mfaPendingCredential);return new mc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await ze._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return v(t.user,r,"internal-error"),ze._forOperation(t.user,t.operationType,u);default:Ie(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ow(n,e){var t;const r=A(n),i=e;return v(e.customData.operationType,r,"argument-error"),v((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),mc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:start",oe(n,e))}function cw(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:finalize",oe(n,e))}function uw(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",oe(n,e))}class pc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>ki._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new pc(e)}async getSession(){return rn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await ft(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ft(this.user,uw(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ho=new WeakMap;function lw(n){const e=A(n);return Ho.has(e)||Ho.set(e,pc._fromUser(e)),Ho.get(e)}const Ss="__sak";/**
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
 */class Td{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){const n=H();return lc(n)||fr(n)}const dw=1e3,fw=10;class Sd extends Td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hw()&&uv(),this.fallbackToPolling=ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sd.type="LOCAL";const gc=Sd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kd.type="SESSION";const pn=kd;/**
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
 */function mw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new no(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await mw(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ai("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return window}function gw(n){ie().location.href=n}/**
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
 */function yc(){return typeof ie().WorkerGlobalScope<"u"&&typeof ie().importScripts=="function"}async function yw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ww(){return yc()?self:null}/**
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
 */const Ad="firebaseLocalStorageDb",Iw=1,ks="firebaseLocalStorage",Cd="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function _w(){const n=indexedDB.deleteDatabase(Ad);return new Ci(n).toPromise()}function fa(){const n=indexedDB.open(Ad,Iw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ks,{keyPath:Cd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ks)?e(r):(r.close(),await _w(),e(await fa()))})})}async function ol(n,e,t){const r=ro(n,!0).put({[Cd]:e,value:t});return new Ci(r).toPromise()}async function Ew(n,e){const t=ro(n,!1).get(e),r=await new Ci(t).toPromise();return r===void 0?null:r.value}function al(n,e){const t=ro(n,!0).delete(e);return new Ci(t).toPromise()}const bw=800,Tw=3;class Dd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Tw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(ww()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yw(),!this.activeServiceWorker)return;this.sender=new pw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fa();return await ol(e,Ss,"1"),await al(e,Ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ol(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ew(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>al(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ro(i,!1).getAll();return new Ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dd.type="LOCAL";const si=Dd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:start",oe(n,e))}function kw(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:finalize",oe(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(n){return(await fe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Nd(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ve("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cw().appendChild(r)})}function Rd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=500,Nw=6e4,Ji=1e12;class Rw{constructor(e){this.auth=e,this.counter=Ji,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new xw(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Ji;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Ji;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Ji;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class xw{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;v(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Pw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Nw)},Dw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Pw(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=Rd("rcb"),Ow=new Ti(3e4,6e4),Lw="https://www.google.com/recaptcha/api.js?";class Mw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ie().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return v(Fw(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(ie().grecaptcha):new Promise((r,i)=>{const s=ie().setTimeout(()=>{i(ve(e,"network-request-failed"))},Ow.get());ie()[Qo]=()=>{ie().clearTimeout(s),delete ie()[Qo];const a=ie().grecaptcha;if(!a){i(ve(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Lw}?${hr({onload:Qo,render:"explicit",hl:t})}`;Nd(o).catch(()=>{clearTimeout(s),i(ve(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ie().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Fw(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Uw{async load(e){return new Rw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="recaptcha",Vw={theme:"light",type:"image"};let Bw=class{constructor(e,t=Object.assign({},Vw),r){this.parameters=t,this.type=xd,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=he(r),this.isInvisible=this.parameters.size==="invisible",v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;v(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Uw:new Mw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){v(!this.parameters.sitekey,this.auth,"argument-error"),v(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),v(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ie()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){v(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){v(cc()&&!yc(),this.auth,"internal-error"),await $w(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Aw(this.auth);v(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return v(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function $w(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=hn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qw(n,e,t){const r=he(n),i=await io(r,e,A(t));return new vc(i,s=>eo(r,s))}async function zw(n,e,t){const r=A(n);await Zs(!1,r,"phone");const i=await io(r.auth,e,A(t));return new vc(i,s=>wd(r,s))}async function jw(n,e,t){const r=A(n),i=await io(r.auth,e,A(t));return new vc(i,s=>Id(r,s))}async function io(n,e,t){var r;const i=await t.verify();try{v(typeof i=="string",n,"argument-error"),v(t.type===xd,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return v(o.type==="enroll",n,"internal-error"),(await aw(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{v(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return v(a,n,"missing-multi-factor-info"),(await Sw(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Tv(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Gw(n,e){await hc(A(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn=class ls{constructor(e){this.providerId=ls.PROVIDER_ID,this.auth=he(e)}verifyPhoneNumber(e,t){return io(this.auth,e,A(t))}static credential(e,t){return hn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ls.credentialFromTaggedObject(t)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?hn._fromTokenResponse(t,r):null}};gn.PROVIDER_ID="phone";gn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Nn(n,e){return e?Ve(e):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wc extends mr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kw(n){return vd(n.auth,new wc(n),n.bypassAuthState)}function Ww(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),yd(t,new wc(n),n.bypassAuthState)}async function Hw(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),hc(t,new wc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kw;case"linkViaPopup":case"linkViaRedirect":return Hw;case"reauthViaPopup":case"reauthViaRedirect":return Ww;default:Ie(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Ti(2e3,1e4);async function Yw(n,e,t){const r=he(n);dr(n,e,vt);const i=Nn(r,t);return new ct(r,"signInViaPopup",e,i).executeNotNull()}async function Jw(n,e,t){const r=A(n);dr(r.auth,e,vt);const i=Nn(r.auth,t);return new ct(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Xw(n,e,t){const r=A(n);dr(r.auth,e,vt);const i=Nn(r.auth,t);return new ct(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ct extends Pd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ct.currentPopupAction&&ct.currentPopupAction.cancel(),ct.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Ai();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ct.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Qw.get())};e()}}ct.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="pendingRedirect",zr=new Map;class eI extends Pd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const r=await tI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tI(n,e){const t=Ld(e),r=Od(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Ic(n,e){return Od(n)._set(Ld(e),"true")}function nI(){zr.clear()}function _c(n,e){zr.set(n._key(),e)}function Od(n){return Ve(n._redirectPersistence)}function Ld(n){return ln(Zw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(n,e,t){return iI(n,e,t)}async function iI(n,e,t){const r=he(n);dr(n,e,vt),await r._initializationPromise;const i=Nn(r,t);return await Ic(i,r),i._openRedirect(r,e,"signInViaRedirect")}function sI(n,e,t){return oI(n,e,t)}async function oI(n,e,t){const r=A(n);dr(r.auth,e,vt),await r.auth._initializationPromise;const i=Nn(r.auth,t);await Ic(i,r.auth);const s=await Md(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function aI(n,e,t){return cI(n,e,t)}async function cI(n,e,t){const r=A(n);dr(r.auth,e,vt),await r.auth._initializationPromise;const i=Nn(r.auth,t);await Zs(!1,r,e.providerId),await Ic(i,r.auth);const s=await Md(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function uI(n,e){return await he(n)._initializationPromise,so(n,e,!1)}async function so(n,e,t=!1){const r=he(n),i=Nn(r,e),o=await new eI(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Md(n){const e=Ai(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=10*60*1e3;class Fd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ud(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ve(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lI&&this.cachedEventUids.clear(),this.cachedEventUids.has(cl(e))}saveEventToCache(e){this.cachedEventUids.add(cl(e)),this.lastProcessedEventTime=Date.now()}}function cl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ud({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ud(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(n,e={}){return fe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fI=/^https?/;async function mI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vd(n);for(const t of e)try{if(pI(t))return}catch{}Ie(n,"unauthorized-domain")}function pI(n){const e=ti(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fI.test(t))return!1;if(dI.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gI=new Ti(3e4,6e4);function ul(){const n=ie().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yI(n){return new Promise((e,t)=>{var r,i,s;function o(){ul(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ul(),t(ve(n,"network-request-failed"))},timeout:gI.get()})}if(!((i=(r=ie().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ie().gapi)===null||s===void 0)&&s.load)o();else{const a=Rd("iframefcb");return ie()[a]=()=>{gapi.load?o():t(ve(n,"network-request-failed"))},Nd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw hs=null,e})}let hs=null;function vI(n){return hs=hs||yI(n),hs}/**
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
 */const wI=new Ti(5e3,15e3),II="__/auth/iframe",_I="emulator/auth/iframe",EI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TI(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uc(e,_I):`https://${n.config.authDomain}/${II}`,r={apiKey:e.apiKey,appName:n.name,v:Dn},i=bI.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${hr(r).slice(1)}`}async function SI(n){const e=await vI(n),t=ie().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:TI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ve(n,"network-request-failed"),a=ie().setTimeout(()=>{s(o)},wI.get());function c(){ie().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const kI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AI=500,CI=600,DI="_blank",NI="http://localhost";class ll{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RI(n,e,t,r=AI,i=CI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=H().toLowerCase();t&&(a=sd(u)?DI:t),id(u)&&(e=e||NI,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if(av(u)&&a!=="_self")return xI(e||"",a),new ll(null);const h=window.open(e||"",a,l);v(h,n,"popup-blocked");try{h.focus()}catch{}return new ll(h)}function xI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const PI="__/auth/handler",OI="emulator/auth/handler";function ma(n,e,t,r,i,s){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Dn,eventId:i};if(e instanceof vt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Rg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof pr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${LI(n)}?${hr(a).slice(1)}`}function LI({config:n}){return n.emulator?uc(n,OI):`https://${n.authDomain}/${PI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class MI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pn,this._completeRedirectFn=so,this._overrideRedirectResult=_c}async _openPopup(e,t,r,i){var s;Ge((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ma(e,t,r,ti(),i);return RI(e,o,Ai())}async _openRedirect(e,t,r,i){return await this._originValidation(e),gw(ma(e,t,r,ti(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ge(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await SI(e),r=new Fd(e);return t.register("authEvent",i=>(v(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yo,{type:Yo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yo];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ud()||lc()||fr()}}const FI=MI;class UI{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xe("unexpected MultiFactorSessionType")}}}class Ec extends UI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ec(e)}_finalizeEnroll(e,t,r){return cw(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return kw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Bd{constructor(){}static assertion(e){return Ec._fromCredential(e)}}Bd.FACTOR_ID="phone";var hl="@firebase/auth",dl="0.22.0-20230331192943";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $I(n){Pt(new it("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),v(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ld(n)},l=new hv(a,c,u);return zy(l,t),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pt(new it("auth-internal",e=>{const t=he(e.getProvider("auth").getImmediate());return(r=>new VI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(hl,dl,BI(n)),tt(hl,dl,"esm2017")}/**
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
 */const qI=5*60;_g("authIdTokenMaxAge");$I("Browser");/**
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
 */function yn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=2e3;async function jI(n,e,t){var r;const{BuildInfo:i}=yn();Ge(e.sessionId,"AuthEvent did not contain a session ID");const s=await QI(e.sessionId),o={};return fr()?o.ibi=i.packageName:Si()?o.apn=i.packageName:Ie(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,ma(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function GI(n){const{BuildInfo:e}=yn(),t={};fr()?t.iosBundleId=e.packageName:Si()?t.androidPackageName=e.packageName:Ie(n,"operation-not-supported-in-this-environment"),await Vd(n,t)}function KI(n){const{cordova:e}=yn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,ov()?"_blank":"_system","location=yes"),t(i)})})}async function WI(n,e,t){const{cordova:r}=yn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(ve(n,"redirect-cancelled-by-user"))},zI))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Si()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function HI(n){var e,t,r,i,s,o,a,c,u,l;const h=yn();v(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),v(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),v(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function QI(n){const e=YI(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function YI(n){if(Ge(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=20;class XI extends Fd{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function ZI(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:n_(),postBody:null,tenantId:n.tenantId,error:ve(n,"no-auth-event")}}function e_(n,e){return pa()._set(ga(n),e)}async function fl(n){const e=await pa()._get(ga(n));return e&&await pa()._remove(ga(n)),e}function t_(n,e){var t,r;const i=i_(e);if(i.includes("/__/auth/callback")){const s=ds(i),o=s.firebaseError?r_(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?ve(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function n_(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<JI;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function pa(){return Ve(gc)}function ga(n){return ln("authEvent",n.config.apiKey,n.name)}function r_(n){try{return JSON.parse(n)}catch{return null}}function i_(n){const e=ds(n),t=e.link?decodeURIComponent(e.link):void 0,r=ds(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ds(i).link||i||r||t||n}function ds(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return zn(t.join("?"))}/**
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
 */const s_=500;class o_{constructor(){this._redirectPersistence=pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=so,this._overrideRedirectResult=_c}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new XI(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ie(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){HI(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),nI(),await this._originValidation(e);const o=ZI(e,r,i);await e_(e,o);const a=await jI(e,o,t),c=await KI(a);return WI(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GI(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=yn(),o=setTimeout(async()=>{await fl(e),t.onEvent(ml())},s_),a=async l=>{clearTimeout(o);const h=await fl(e);let d=null;h&&(l!=null&&l.url)&&(d=t_(h,l.url)),t.onEvent(d||ml())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;yn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const a_=o_;function ml(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ve("no-auth-event")}}/**
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
 */function c_(n,e){he(n)._logFramework(e)}var u_="@firebase/auth-compat",l_="0.3.7-20230331192943";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=1e3;function jr(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function d_(){return jr()==="http:"||jr()==="https:"}function $d(n=H()){return!!((jr()==="file:"||jr()==="ionic:"||jr()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function f_(){return ic()||rc()}function m_(){return Vh()&&(document==null?void 0:document.documentMode)===11}function p_(n=H()){return/Edge\/\d+/.test(n)}function g_(n=H()){return m_()||p_(n)}function qd(){try{const n=self.localStorage,e=Ai();if(n)return n.setItem(e,"1"),n.removeItem(e),g_()?Xr():!0}catch{return bc()&&Xr()}return!1}function bc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Jo(){return(d_()||Uh()||$d())&&!f_()&&qd()&&!bc()}function zd(){return $d()&&typeof document<"u"}async function y_(){return zd()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},h_);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function v_(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={LOCAL:"local",NONE:"none",SESSION:"session"},Ar=v,jd="persistence";function w_(n,e){if(Ar(Object.values(Ue).includes(e),n,"invalid-persistence-type"),ic()){Ar(e!==Ue.SESSION,n,"unsupported-persistence-type");return}if(rc()){Ar(e===Ue.NONE,n,"unsupported-persistence-type");return}if(bc()){Ar(e===Ue.NONE||e===Ue.LOCAL&&Xr(),n,"unsupported-persistence-type");return}Ar(e===Ue.NONE||qd(),n,"unsupported-persistence-type")}async function ya(n){await n._initializationPromise;const e=Gd(),t=ln(jd,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function I_(n,e){const t=Gd();if(!t)return[];const r=ln(jd,n,e);switch(t.getItem(r)){case Ue.NONE:return[Yn];case Ue.LOCAL:return[si,pn];case Ue.SESSION:return[pn];default:return[]}}function Gd(){var n;try{return((n=v_())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=v;class Ct{constructor(){this.browserResolver=Ve(FI),this.cordovaResolver=Ve(a_),this.underlyingResolver=null,this._redirectPersistence=pn,this._completeRedirectFn=so,this._overrideRedirectResult=_c}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return zd()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return __(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await y_();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){return n.unwrap()}function E_(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){return Wd(n)}function T_(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new S_(n,ow(n,e))}else if(r){const i=Wd(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Wd(n){const{_tokenResponse:e}=n instanceof Ne?n.customData:n;if(!e)return null;if(!(n instanceof Ne)&&"temporaryProof"in e&&"phoneNumber"in e)return gn.credentialFromResult(n);const t=e.providerId;if(!t||t===kr.PASSWORD)return null;let r;switch(t){case kr.GOOGLE:r=He;break;case kr.FACEBOOK:r=We;break;case kr.GITHUB:r=Qe;break;case kr.TWITTER:r=Ye;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Jn._create(t,a):st._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Kn(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ne?r.credentialFromError(n):r.credentialFromResult(n)}function xe(n,e){return e.catch(t=>{throw t instanceof Ne&&T_(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:b_(t),additionalUserInfo:sw(t),user:ut.getOrCreate(i)}})}async function va(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>xe(n,t.confirm(r))}}class S_{constructor(e,t){this.resolver=t,this.auth=E_(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xe(Kd(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this._delegate=e,this.multiFactor=lw(e)}static getOrCreate(e){return ut.USER_MAP.has(e)||ut.USER_MAP.set(e,new ut(e)),ut.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xe(this.auth,wd(this._delegate,e))}async linkWithPhoneNumber(e,t){return va(this.auth,zw(this._delegate,e,t))}async linkWithPopup(e){return xe(this.auth,Xw(this._delegate,e,Ct))}async linkWithRedirect(e){return await ya(he(this.auth)),aI(this._delegate,e,Ct)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xe(this.auth,Id(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return va(this.auth,jw(this._delegate,e,t))}reauthenticateWithPopup(e){return xe(this.auth,Jw(this._delegate,e,Ct))}async reauthenticateWithRedirect(e){return await ya(he(this.auth)),sI(this._delegate,e,Ct)}sendEmailVerification(e){return Hv(this._delegate,e)}async unlink(e){return await Ov(this._delegate,e),this}updateEmail(e){return Xv(this._delegate,e)}updatePassword(e){return Zv(this._delegate,e)}updatePhoneNumber(e){return Gw(this._delegate,e)}updateProfile(e){return Jv(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Qv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ut.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=v;class wa{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Cr(r,"invalid-api-key",{appName:e.name}),Cr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ct:void 0;this._delegate=t.initialize({options:{persistence:k_(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap($y),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ut.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){dv(this._delegate,e,t)}applyActionCode(e){return Vv(this._delegate,e)}checkActionCode(e){return _d(this._delegate,e)}confirmPasswordReset(e,t){return Uv(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return xe(this._delegate,$v(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Wv(this._delegate,e)}isSignInWithEmailLink(e){return jv(this._delegate,e)}async getRedirectResult(){Cr(Jo(),this._delegate,"operation-not-supported-in-this-environment");const e=await uI(this._delegate,Ct);return e?xe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){c_(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=pl(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=pl(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return zv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Fv(this._delegate,e,t||void 0)}async setPersistence(e){w_(this._delegate,e);let t;switch(e){case Ue.SESSION:t=pn;break;case Ue.LOCAL:t=await Ve(si)._isAvailable()?si:gc;break;case Ue.NONE:t=Yn;break;default:return Ie("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xe(this._delegate,Pv(this._delegate))}signInWithCredential(e){return xe(this._delegate,eo(this._delegate,e))}signInWithCustomToken(e){return xe(this._delegate,Mv(this._delegate,e))}signInWithEmailAndPassword(e,t){return xe(this._delegate,qv(this._delegate,e,t))}signInWithEmailLink(e,t){return xe(this._delegate,Gv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return va(this._delegate,qw(this._delegate,e,t))}async signInWithPopup(e){return Cr(Jo(),this._delegate,"operation-not-supported-in-this-environment"),xe(this._delegate,Yw(this._delegate,e,Ct))}async signInWithRedirect(e){return Cr(Jo(),this._delegate,"operation-not-supported-in-this-environment"),await ya(this._delegate),rI(this._delegate,e,Ct)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Bv(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wa.Persistence=Ue;function pl(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&ut.getOrCreate(o)),error:e,complete:t}}function k_(n,e){const t=I_(n,e);if(typeof self<"u"&&!t.includes(si)&&t.push(si),typeof window<"u")for(const r of[gc,pn])t.includes(r)||t.push(r);return t.includes(Yn)||t.push(Yn),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.providerId="phone",this._delegate=new gn(Kd(Qs.auth()))}static credential(e,t){return gn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Tc.PHONE_SIGN_IN_METHOD=gn.PHONE_SIGN_IN_METHOD;Tc.PROVIDER_ID=gn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=v;class C_{constructor(e,t,r=Qs.app()){var i;A_((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Bw(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="auth-compat";function N_(n){n.INTERNAL.registerComponent(new it(D_,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new wa(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Fn.EMAIL_SIGNIN,PASSWORD_RESET:Fn.PASSWORD_RESET,RECOVER_EMAIL:Fn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Fn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Fn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Fn.VERIFY_EMAIL}},EmailAuthProvider:qt,FacebookAuthProvider:We,GithubAuthProvider:Qe,GoogleAuthProvider:He,OAuthProvider:Kn,SAMLAuthProvider:bs,PhoneAuthProvider:Tc,PhoneMultiFactorGenerator:Bd,RecaptchaVerifier:C_,TwitterAuthProvider:Ye,Auth:wa,AuthCredential:mr,Error:Ne}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(u_,l_)}N_(Qs);var R_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Sc=Sc||{},D=R_||self;function As(){}function oo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Di(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function x_(n){return Object.prototype.hasOwnProperty.call(n,Xo)&&n[Xo]||(n[Xo]=++P_)}var Xo="closure_uid_"+(1e9*Math.random()>>>0),P_=0;function O_(n,e,t){return n.call.apply(n.bind,arguments)}function L_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Se(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=O_:Se=L_,Se.apply(null,arguments)}function Xi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Ee(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function zt(){this.s=this.s,this.o=this.o}var M_=0;zt.prototype.s=!1;zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),M_!=0)&&x_(this)};zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function kc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function gl(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(oo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function ke(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var F_=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",As,e),D.removeEventListener("test",As,e)}catch{}return n}();function Cs(n){return/^[\s\xa0]*$/.test(n)}var yl=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Zo(n,e){return n<e?-1:n>e?1:0}function ao(){var n=D.navigator;return n&&(n=n.userAgent)?n:""}function Je(n){return ao().indexOf(n)!=-1}function Ac(n){return Ac[" "](n),n}Ac[" "]=As;function U_(n){var e=$_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var V_=Je("Opera"),Xn=Je("Trident")||Je("MSIE"),Qd=Je("Edge"),Ia=Qd||Xn,Yd=Je("Gecko")&&!(ao().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge"))&&!(Je("Trident")||Je("MSIE"))&&!Je("Edge"),B_=ao().toLowerCase().indexOf("webkit")!=-1&&!Je("Edge");function Jd(){var n=D.document;return n?n.documentMode:void 0}var Ds;e:{var ea="",ta=function(){var n=ao();if(Yd)return/rv:([^\);]+)(\)|;)/.exec(n);if(Qd)return/Edge\/([\d\.]+)/.exec(n);if(Xn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(B_)return/WebKit\/(\S+)/.exec(n);if(V_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ta&&(ea=ta?ta[1]:""),Xn){var na=Jd();if(na!=null&&na>parseFloat(ea)){Ds=String(na);break e}}Ds=ea}var $_={};function q_(){return U_(function(){let n=0;const e=yl(String(Ds)).split("."),t=yl("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Zo(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Zo(i[2].length==0,s[2].length==0)||Zo(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var _a;if(D.document&&Xn){var vl=Jd();_a=vl||parseInt(Ds,10)||void 0}else _a=void 0;var z_=_a;function oi(n,e){if(ke.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Yd){e:{try{Ac(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:j_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&oi.X.h.call(this)}}Ee(oi,ke);var j_={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ni="closure_listenable_"+(1e6*Math.random()|0),G_=0;function K_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++G_,this.ba=this.ea=!1}function co(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Cc(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Xd(n){const e={};for(const t in n)e[t]=n[t];return e}const wl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zd(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<wl.length;s++)t=wl[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function uo(n){this.src=n,this.g={},this.h=0}uo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ba(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new K_(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function Ea(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Hd(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(co(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ba(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var Dc="closure_lm_"+(1e6*Math.random()|0),ra={};function ef(n,e,t,r,i){if(r&&r.once)return nf(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ef(n,e[s],t,r,i);return null}return t=xc(t),n&&n[Ni]?n.N(e,t,Di(r)?!!r.capture:!!r,i):tf(n,e,t,!1,r,i)}function tf(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Di(i)?!!i.capture:!!i,a=Rc(n);if(a||(n[Dc]=a=new uo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=W_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)F_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(sf(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function W_(){function n(t){return e.call(n.src,n.listener,t)}const e=H_;return n}function nf(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)nf(n,e[s],t,r,i);return null}return t=xc(t),n&&n[Ni]?n.O(e,t,Di(r)?!!r.capture:!!r,i):tf(n,e,t,!0,r,i)}function rf(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)rf(n,e[s],t,r,i);else r=Di(r)?!!r.capture:!!r,t=xc(t),n&&n[Ni]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ba(s,t,r,i),-1<t&&(co(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Rc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ba(e,t,r,i)),(t=-1<n?e[n]:null)&&Nc(t))}function Nc(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Ni])Ea(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(sf(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Rc(e))?(Ea(t,n),t.h==0&&(t.src=null,e[Dc]=null)):co(n)}}}function sf(n){return n in ra?ra[n]:ra[n]="on"+n}function H_(n,e){if(n.ba)n=!0;else{e=new oi(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&Nc(n),n=t.call(r,e)}return n}function Rc(n){return n=n[Dc],n instanceof uo?n:null}var ia="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(n){return typeof n=="function"?n:(n[ia]||(n[ia]=function(e){return n.handleEvent(e)}),n[ia])}function de(){zt.call(this),this.i=new uo(this),this.P=this,this.I=null}Ee(de,zt);de.prototype[Ni]=!0;de.prototype.removeEventListener=function(n,e,t,r){rf(this,n,e,t,r)};function we(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new ke(e,n);else if(e instanceof ke)e.target=e.target||n;else{var i=e;e=new ke(r,n),Zd(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Zi(o,r,!0,e)&&i}if(o=e.g=n,i=Zi(o,r,!0,e)&&i,i=Zi(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Zi(o,r,!1,e)&&i}de.prototype.M=function(){if(de.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)co(t[r]);delete n.g[e],n.h--}}this.I=null};de.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};de.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Zi(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Ea(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pc=D.JSON.stringify;function Q_(){var n=cf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Y_{constructor(){this.h=this.g=null}add(e,t){const r=of.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var of=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new J_,n=>n.reset());class J_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function X_(n){D.setTimeout(()=>{throw n},0)}function af(n,e){Ta||Z_(),Sa||(Ta(),Sa=!0),cf.add(n,e)}var Ta;function Z_(){var n=D.Promise.resolve(void 0);Ta=function(){n.then(eE)}}var Sa=!1,cf=new Y_;function eE(){for(var n;n=Q_();){try{n.h.call(n.g)}catch(t){X_(t)}var e=of;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Sa=!1}function lo(n,e){de.call(this),this.h=n||1,this.g=e||D,this.j=Se(this.lb,this),this.l=Date.now()}Ee(lo,de);T=lo.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(Oc(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Oc(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}T.M=function(){lo.X.M.call(this),Oc(this),delete this.g};function Lc(n,e,t){if(typeof n=="function")t&&(n=Se(n,t));else if(n&&typeof n.handleEvent=="function")n=Se(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:D.setTimeout(n,e||0)}function uf(n){n.g=Lc(()=>{n.g=null,n.i&&(n.i=!1,uf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class tE extends zt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uf(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(n){zt.call(this),this.h=n,this.g={}}Ee(ai,zt);var Il=[];function lf(n,e,t,r){Array.isArray(t)||(t&&(Il[0]=t.toString()),t=Il);for(var i=0;i<t.length;i++){var s=ef(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function hf(n){Cc(n.g,function(e,t){this.g.hasOwnProperty(t)&&Nc(e)},n),n.g={}}ai.prototype.M=function(){ai.X.M.call(this),hf(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ho(){this.g=!0}ho.prototype.Aa=function(){this.g=!1};function nE(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function rE(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function jn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+sE(n,t)+(r?" "+r:"")})}function iE(n,e){n.info(function(){return"TIMEOUT: "+e})}ho.prototype.info=function(){};function sE(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pc(t)}catch{return e}}var Rn={},_l=null;function fo(){return _l=_l||new de}Rn.Pa="serverreachability";function df(n){ke.call(this,Rn.Pa,n)}Ee(df,ke);function ci(n){const e=fo();we(e,new df(e))}Rn.STAT_EVENT="statevent";function ff(n,e){ke.call(this,Rn.STAT_EVENT,n),this.stat=e}Ee(ff,ke);function De(n){const e=fo();we(e,new ff(e,n))}Rn.Qa="timingevent";function mf(n,e){ke.call(this,Rn.Qa,n),this.size=e}Ee(mf,ke);function Ri(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},e)}var mo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},pf={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Mc(){}Mc.prototype.h=null;function El(n){return n.h||(n.h=n.i())}function gf(){}var xi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Fc(){ke.call(this,"d")}Ee(Fc,ke);function Uc(){ke.call(this,"c")}Ee(Uc,ke);var ka;function po(){}Ee(po,Mc);po.prototype.g=function(){return new XMLHttpRequest};po.prototype.i=function(){return{}};ka=new po;function Pi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new ai(this),this.O=oE,n=Ia?125:void 0,this.T=new lo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yf}function yf(){this.i=null,this.g="",this.h=!1}var oE=45e3,Aa={},Ns={};T=Pi.prototype;T.setTimeout=function(n){this.O=n};function Ca(n,e,t){n.K=1,n.v=yo(mt(e)),n.s=t,n.P=!0,vf(n,null)}function vf(n,e){n.F=Date.now(),Oi(n),n.A=mt(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),kf(t.i,"t",r),n.C=0,t=n.l.H,n.h=new yf,n.g=Wf(n.l,t?e:null,!n.s),0<n.N&&(n.L=new tE(Se(n.La,n,n.g),n.N)),lf(n.S,n.g,"readystatechange",n.ib),e=n.H?Xd(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),ci(),nE(n.j,n.u,n.A,n.m,n.U,n.s)}T.ib=function(n){n=n.target;const e=this.L;e&&lt(n)==3?e.l():this.La(n)};T.La=function(n){try{if(n==this.g)e:{const l=lt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Ia||this.g&&(this.h.h||this.g.fa()||kl(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ci(3):ci(2)),go(this);var t=this.g.aa();this.Y=t;t:if(wf(this)){var r=kl(this.g);n="";var i=r.length,s=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),Gr(this);var o="";break t}this.h.i=new D.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,rE(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cs(a)){var u=a;break t}}u=null}if(t=u)jn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Da(this,t);else{this.i=!1,this.o=3,De(12),sn(this),Gr(this);break e}}this.P?(If(this,l,o),Ia&&this.i&&l==3&&(lf(this.S,this.T,"tick",this.hb),this.T.start())):(jn(this.j,this.m,o,null),Da(this,o)),l==4&&sn(this),this.i&&!this.I&&(l==4?zf(this.l,this):(this.i=!1,Oi(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),sn(this),Gr(this)}}}catch{}finally{}};function wf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function If(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=aE(n,t),i==Ns){e==4&&(n.o=4,De(14),r=!1),jn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Aa){n.o=4,De(15),jn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else jn(n.j,n.m,i,null),Da(n,i);wf(n)&&i!=Ns&&i!=Aa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,De(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Gc(e),e.K=!0,De(11))):(jn(n.j,n.m,t,"[Invalid Chunked Response]"),sn(n),Gr(n))}T.hb=function(){if(this.g){var n=lt(this.g),e=this.g.fa();this.C<e.length&&(go(this),If(this,n,e),this.i&&n!=4&&Oi(this))}};function aE(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ns:(t=Number(e.substring(t,r)),isNaN(t)?Aa:(r+=1,r+t>e.length?Ns:(e=e.substr(r,t),n.C=r+t,e)))}T.cancel=function(){this.I=!0,sn(this)};function Oi(n){n.V=Date.now()+n.O,_f(n,n.O)}function _f(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ri(Se(n.gb,n),e)}function go(n){n.B&&(D.clearTimeout(n.B),n.B=null)}T.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(iE(this.j,this.A),this.K!=2&&(ci(),De(17)),sn(this),this.o=2,Gr(this)):_f(this,this.V-n)};function Gr(n){n.l.G==0||n.I||zf(n.l,n)}function sn(n){go(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Oc(n.T),hf(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Da(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Na(t.h,n))){if(!n.J&&Na(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ps(t),Io(t);else break e;jc(t),De(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Ri(Se(t.cb,t),6e3));if(1>=Df(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else on(t,11)}else if((n.J||t.g==n)&&Ps(t),!Cs(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Vc(s,s.h),s.h=null))}if(r.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,j(r.F,r.D,_))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=Kf(r,r.H?r.ka:null,r.V),o.J){Nf(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(go(a),Oi(a)),r.g=o}else $f(r);0<t.i.length&&_o(t)}else u[0]!="stop"&&u[0]!="close"||on(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?on(t,7):zc(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}ci(4)}catch{}}function cE(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(oo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function uE(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(oo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Ef(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(oo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=uE(n),r=cE(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var bf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function dn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof dn){this.h=e!==void 0?e:n.h,Rs(this,n.j),this.s=n.s,this.g=n.g,xs(this,n.m),this.l=n.l,e=n.i;var t=new ui;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),bl(this,t),this.o=n.o}else n&&(t=String(n).match(bf))?(this.h=!!e,Rs(this,t[1]||"",!0),this.s=Ur(t[2]||""),this.g=Ur(t[3]||"",!0),xs(this,t[4]),this.l=Ur(t[5]||"",!0),bl(this,t[6]||"",!0),this.o=Ur(t[7]||"")):(this.h=!!e,this.i=new ui(null,this.h))}dn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Vr(e,Tl,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Vr(e,Tl,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Vr(t,t.charAt(0)=="/"?fE:dE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Vr(t,pE)),n.join("")};function mt(n){return new dn(n)}function Rs(n,e,t){n.j=t?Ur(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function xs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function bl(n,e,t){e instanceof ui?(n.i=e,gE(n.i,n.h)):(t||(e=Vr(e,mE)),n.i=new ui(e,n.h))}function j(n,e,t){n.i.set(e,t)}function yo(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ur(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Vr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,hE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function hE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Tl=/[#\/\?@]/g,dE=/[#\?:]/g,fE=/[#\?]/g,mE=/[#\?@]/g,pE=/#/g;function ui(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function jt(n){n.g||(n.g=new Map,n.h=0,n.i&&lE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=ui.prototype;T.add=function(n,e){jt(this),this.i=null,n=gr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Tf(n,e){jt(n),e=gr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Sf(n,e){return jt(n),e=gr(n,e),n.g.has(e)}T.forEach=function(n,e){jt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};T.oa=function(){jt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};T.W=function(n){jt(this);let e=[];if(typeof n=="string")Sf(this,n)&&(e=e.concat(this.g.get(gr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};T.set=function(n,e){return jt(this),this.i=null,n=gr(this,n),Sf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function kf(n,e,t){Tf(n,e),0<t.length&&(n.i=null,n.g.set(gr(n,e),kc(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function gr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function gE(n,e){e&&!n.j&&(jt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Tf(this,r),kf(this,i,t))},n)),n.j=e}var yE=class{constructor(e,t){this.h=e,this.g=t}};function Af(n){this.l=n||vE,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ga&&D.g.Ga()&&D.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vE=10;function Cf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Df(n){return n.h?1:n.g?n.g.size:0}function Na(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Vc(n,e){n.g?n.g.add(e):n.h=e}function Nf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Af.prototype.cancel=function(){if(this.i=Rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Rf(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return kc(n.i)}function Bc(){}Bc.prototype.stringify=function(n){return D.JSON.stringify(n,void 0)};Bc.prototype.parse=function(n){return D.JSON.parse(n,void 0)};function wE(){this.g=new Bc}function IE(n,e,t){const r=t||"";try{Ef(n,function(i,s){let o=i;Di(i)&&(o=Pc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _E(n,e){const t=new ho;if(D.Image){const r=new Image;r.onload=Xi(es,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Xi(es,t,r,"TestLoadImage: error",!1,e),r.onabort=Xi(es,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xi(es,t,r,"TestLoadImage: timeout",!1,e),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function es(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Li(n){this.l=n.ac||null,this.j=n.jb||!1}Ee(Li,Mc);Li.prototype.g=function(){return new vo(this.l,this.j)};Li.prototype.i=function(n){return function(){return n}}({});function vo(n,e){de.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=$c,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(vo,de);var $c=0;T=vo.prototype;T.open=function(n,e){if(this.readyState!=$c)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,li(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||D).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=$c};T.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xf(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function xf(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}T.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Mi(this):li(this),this.readyState==3&&xf(this)}};T.Va=function(n){this.g&&(this.response=this.responseText=n,Mi(this))};T.Ua=function(n){this.g&&(this.response=n,Mi(this))};T.ga=function(){this.g&&Mi(this)};function Mi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,li(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function li(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var EE=D.JSON.parse;function Y(n){de.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pf,this.K=this.L=!1}Ee(Y,de);var Pf="",bE=/^https?$/i,TE=["POST","PUT"];T=Y.prototype;T.Ka=function(n){this.L=n};T.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ka.g(),this.C=this.u?El(this.u):El(ka),this.g.onreadystatechange=Se(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){Sl(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=D.FormData&&n instanceof D.FormData,!(0<=Hd(TE,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mf(this),0<this.B&&((this.K=SE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.qa,this)):this.A=Lc(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Sl(this,s)}};function SE(n){return Xn&&q_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.qa=function(){typeof Sc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function Sl(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Of(n),wo(n)}function Of(n){n.D||(n.D=!0,we(n,"complete"),we(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,we(this,"complete"),we(this,"abort"),wo(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wo(this,!0)),Y.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?Lf(this):this.fb())};T.fb=function(){Lf(this)};function Lf(n){if(n.h&&typeof Sc<"u"&&(!n.C[1]||lt(n)!=4||n.aa()!=2)){if(n.v&&lt(n)==4)Lc(n.Ha,0,n);else if(we(n,"readystatechange"),lt(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(bf)[1]||null;if(!i&&D.self&&D.self.location){var s=D.self.location.protocol;i=s.substr(0,s.length-1)}r=!bE.test(i?i.toLowerCase():"")}t=r}if(t)we(n,"complete"),we(n,"success");else{n.m=6;try{var o=2<lt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Of(n)}}finally{wo(n)}}}}function wo(n,e){if(n.g){Mf(n);const t=n.g,r=n.C[0]?As:null;n.g=null,n.C=null,e||we(n,"ready");try{t.onreadystatechange=r}catch{}}}function Mf(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}function lt(n){return n.g?n.g.readyState:0}T.aa=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),EE(e)}};function kl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Pf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ff(n){let e="";return Cc(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function qc(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Ff(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):j(n,e,t))}function Dr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Uf(n){this.Ca=0,this.i=[],this.j=new ho,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Dr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Dr("baseRetryDelayMs",5e3,n),this.bb=Dr("retryDelaySeedMs",1e4,n),this.$a=Dr("forwardChannelMaxRetries",2,n),this.ta=Dr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Af(n&&n.concurrentRequestLimit),this.Fa=new wE,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=Uf.prototype;T.ma=8;T.G=1;function zc(n){if(Vf(n),n.G==3){var e=n.U++,t=mt(n.F);j(t,"SID",n.I),j(t,"RID",e),j(t,"TYPE","terminate"),Fi(n,t),e=new Pi(n,n.j,e,void 0),e.K=2,e.v=yo(mt(t)),t=!1,D.navigator&&D.navigator.sendBeacon&&(t=D.navigator.sendBeacon(e.v.toString(),"")),!t&&D.Image&&(new Image().src=e.v,t=!0),t||(e.g=Wf(e.l,null),e.g.da(e.v)),e.F=Date.now(),Oi(e)}Gf(n)}function Io(n){n.g&&(Gc(n),n.g.cancel(),n.g=null)}function Vf(n){Io(n),n.u&&(D.clearTimeout(n.u),n.u=null),Ps(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function _o(n){Cf(n.h)||n.m||(n.m=!0,af(n.Ja,n),n.C=0)}function kE(n,e){return Df(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Ri(Se(n.Ja,n,e),jf(n,n.C)),n.C++,!0)}T.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Pi(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=Xd(s),Zd(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Bf(this,i,e),t=mt(this.F),j(t,"RID",n),j(t,"CVER",22),this.D&&j(t,"X-HTTP-Session-Id",this.D),Fi(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Ff(s)))+"&"+e:this.o&&qc(t,this.o,s)),Vc(this.h,i),this.Ya&&j(t,"TYPE","init"),this.O?(j(t,"$req",e),j(t,"SID","null"),i.Z=!0,Ca(i,t,null)):Ca(i,t,e),this.G=2}}else this.G==3&&(n?Al(this,n):this.i.length==0||Cf(this.h)||Al(this))};function Al(n,e){var t;e?t=e.m:t=n.U++;const r=mt(n.F);j(r,"SID",n.I),j(r,"RID",t),j(r,"AID",n.T),Fi(n,r),n.o&&n.s&&qc(r,n.o,n.s),t=new Pi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Bf(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Vc(n.h,t),Ca(t,r,e)}function Fi(n,e){n.ia&&Cc(n.ia,function(t,r){j(e,r,t)}),n.l&&Ef({},function(t,r){j(e,r,t)})}function Bf(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Se(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{IE(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function $f(n){n.g||n.u||(n.Z=1,af(n.Ia,n),n.A=0)}function jc(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Ri(Se(n.Ia,n),jf(n,n.A)),n.A++,!0)}T.Ia=function(){if(this.u=null,qf(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Ri(Se(this.eb,this),n)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,De(10),Io(this),qf(this))};function Gc(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function qf(n){n.g=new Pi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=mt(n.sa);j(e,"RID","rpc"),j(e,"SID",n.I),j(e,"CI",n.L?"0":"1"),j(e,"AID",n.T),j(e,"TYPE","xmlhttp"),Fi(n,e),n.o&&n.s&&qc(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=yo(mt(e)),t.s=null,t.P=!0,vf(t,n)}T.cb=function(){this.v!=null&&(this.v=null,Io(this),jc(this),De(19))};function Ps(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function zf(n,e){var t=null;if(n.g==e){Ps(n),Gc(n),n.g=null;var r=2}else if(Na(n.h,e))t=e.D,Nf(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=fo(),we(r,new mf(r,t)),_o(n)}else $f(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&kE(n,e)||r==2&&jc(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:on(n,5);break;case 4:on(n,10);break;case 3:on(n,6);break;default:on(n,2)}}}function jf(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function on(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Se(n.kb,n);t||(t=new dn("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Rs(t,"https"),yo(t)),_E(t.toString(),r)}else De(2);n.G=0,n.l&&n.l.va(e),Gf(n),Vf(n)}T.kb=function(n){n?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Gf(n){if(n.G=0,n.la=[],n.l){const e=Rf(n.h);(e.length!=0||n.i.length!=0)&&(gl(n.la,e),gl(n.la,n.i),n.h.i.length=0,kc(n.i),n.i.length=0),n.l.ua()}}function Kf(n,e,t){var r=t instanceof dn?mt(t):new dn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xs(r,r.m);else{var i=D.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new dn(null,void 0);r&&Rs(s,r),e&&(s.g=e),i&&xs(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&j(r,t,e),j(r,"VER",n.ma),Fi(n,r),r}function Wf(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Y(new Li({jb:!0})):new Y(n.ra),e.Ka(n.H),e}function Hf(){}T=Hf.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function Os(){if(Xn&&!(10<=Number(z_)))throw Error("Environmental error: no available transport.")}Os.prototype.g=function(n,e){return new Be(n,e)};function Be(n,e){de.call(this),this.g=new Uf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Cs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cs(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new yr(this)}Ee(Be,de);Be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;De(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Kf(n,null,n.V),_o(n)};Be.prototype.close=function(){zc(this.g)};Be.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Pc(n),n=t);e.i.push(new yE(e.ab++,n)),e.G==3&&_o(e)};Be.prototype.M=function(){this.g.l=null,delete this.j,zc(this.g),delete this.g,Be.X.M.call(this)};function Qf(n){Fc.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ee(Qf,Fc);function Yf(){Uc.call(this),this.status=1}Ee(Yf,Uc);function yr(n){this.g=n}Ee(yr,Hf);yr.prototype.xa=function(){we(this.g,"a")};yr.prototype.wa=function(n){we(this.g,new Qf(n))};yr.prototype.va=function(n){we(this.g,new Yf)};yr.prototype.ua=function(){we(this.g,"b")};Os.prototype.createWebChannel=Os.prototype.g;Be.prototype.send=Be.prototype.u;Be.prototype.open=Be.prototype.m;Be.prototype.close=Be.prototype.close;mo.NO_ERROR=0;mo.TIMEOUT=8;mo.HTTP_ERROR=6;pf.COMPLETE="complete";gf.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";de.prototype.listen=de.prototype.N;Y.prototype.listenOnce=Y.prototype.O;Y.prototype.getLastError=Y.prototype.Oa;Y.prototype.getLastErrorCode=Y.prototype.Ea;Y.prototype.getStatus=Y.prototype.aa;Y.prototype.getResponseJson=Y.prototype.Sa;Y.prototype.getResponseText=Y.prototype.fa;Y.prototype.send=Y.prototype.da;Y.prototype.setWithCredentials=Y.prototype.Ka;var AE=function(){return new Os},CE=function(){return fo()},sa=mo,DE=pf,NE=Rn,Cl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},RE=Li,ts=gf,xE=Y;const Dl="@firebase/firestore";/**
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
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
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
 */let vr="9.19.0";/**
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
 */const Ot=new Hs("@firebase/firestore");function Ra(){return Ot.logLevel}function PE(n){Ot.setLogLevel(n)}function y(n,...e){if(Ot.logLevel<=L.DEBUG){const t=e.map(Kc);Ot.debug(`Firestore (${vr}): ${n}`,...t)}}function ee(n,...e){if(Ot.logLevel<=L.ERROR){const t=e.map(Kc);Ot.error(`Firestore (${vr}): ${n}`,...t)}}function pt(n,...e){if(Ot.logLevel<=L.WARN){const t=e.map(Kc);Ot.warn(`Firestore (${vr}): ${n}`,...t)}}function Kc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function b(n="Unexpected state"){const e=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: `+n;throw ee(e),new Error(e)}function S(n,e){n||b()}function OE(n,e){n||b()}function E(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends Ne{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class le{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Jf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ue.UNAUTHENTICATED))}shutdown(){}}class ME{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class FE{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new le;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new le,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new le)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(S(typeof r.accessToken=="string"),new Jf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new ue(e)}}class UE{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class VE{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new UE(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $E{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.T=t.token,new BE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Xf{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function Zn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Zf(n){return n+"\0"}/**
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
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new g(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new K(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class k{constructor(e){this.timestamp=e}static fromTimestamp(e){return new k(e)}static min(){return new k(new K(0,0))}static max(){return new k(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hi{constructor(e,t,r){t===void 0?t=0:t>e.length&&b(),r===void 0?r=e.length-t:r>e.length-t&&b(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends hi{construct(e,t,r){return new O(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const zE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends hi{construct(e,t,r){return new te(e,t,r)}static isValidIdentifier(e){return zE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new g(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new g(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new te(t)}static emptyPath(){return new te([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(O.fromString(e))}static fromName(e){return new I(O.fromString(e).popFirst(5))}static empty(){return new I(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new O(e.slice()))}}/**
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
 */class em{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function xa(n){return n.fields.find(e=>e.kind===2)}function Jt(n){return n.fields.filter(e=>e.kind!==2)}em.UNKNOWN_ID=-1;class jE{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ls{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ls(0,$e.min())}}function tm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=k.fromTimestamp(r===1e9?new K(t+1,0):new K(t,r));return new $e(i,I.empty(),e)}function nm(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $e(k.min(),I.empty(),-1)}static max(){return new $e(k.max(),I.empty(),-1)}}function Wc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class im{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gt(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==rm)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new f((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new f((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Eo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new le,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Kr(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=Hc(r.target.error);this.R.reject(new Kr(e,i))}}static open(e,t,r,i){try{return new Eo(t,e.transaction(i,r))}catch(s){throw new Kr(t,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new KE(t)}}class je{constructor(e,t,r){this.name=e,this.version=t,this.V=r,je.S(H())===12.2&&ee("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),Xt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xr())return!1;if(je.C())return!0;const e=H(),t=je.S(e),r=0<t&&t<10,i=je.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Kr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new g(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new g(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Kr(e,o))},i.onupgradeneeded=s=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.M(o,i.transaction,s.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Eo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class GE{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Xt(this.L.delete())}}class Kr extends g{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kt(n){return n.name==="IndexedDbTransactionError"}class KE{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Xt(r)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),Xt(this.store.add(e))}get(e){return Xt(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),Xt(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),Xt(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}X(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Hc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new GE(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xt(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Hc(r.target.error);t(i)}})}let Nl=!1;function Hc(n){const e=je.S(H());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new g("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nl||(Nl=!0,setTimeout(()=>{throw r},0)),r}}return n}class WE{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Kt(t)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Gt(t)}await this.et(6e4)})}}class HE{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return y("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(y("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=nm(s);Wc(o,r)>0&&(r=o)}),new $e(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Oe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Oe.ct=-1;function Ui(n){return n==null}function di(n){return n===0&&1/n==-1/0}function sm(n){return typeof n=="number"&&Number.isInteger(n)&&!di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Re(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Rl(e)),e=QE(n.get(t),e);return Rl(e)}function QE(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Rl(n){return n+""}function Ze(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),O.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:b()}s=o+2}return new O(r)}/**
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
 */const xl=["userId","batchId"];/**
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
 */function fs(n,e){return[n,Re(e)]}function om(n,e,t){return[n,Re(e),t]}const YE={},JE=["prefixPath","collectionGroup","readTime","documentId"],XE=["prefixPath","collectionGroup","documentId"],ZE=["collectionGroup","readTime","prefixPath","documentId"],eb=["canonicalId","targetId"],tb=["targetId","path"],nb=["path","targetId"],rb=["collectionId","parent"],ib=["indexId","uid"],sb=["uid","sequenceNumber"],ob=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ab=["indexId","uid","orderedDocumentKey"],cb=["userId","collectionPath","documentId"],ub=["userId","collectionPath","largestBatchId"],lb=["userId","collectionGroup","largestBatchId"],am=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hb=[...am,"documentOverlays"],cm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],um=cm,db=[...um,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends im{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function me(n,e){const t=E(n);return je.O(t.at,e)}/**
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
 */function Pl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class J{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ns(this.root,e,this.comparator,!0)}}class ns{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ge(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,r,i){return this}insert(n,e,t){return new ge(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class B{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ol(this.data.getIterator())}getIteratorFrom(e){return new Ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof B)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new B(this.comparator);return t.data=e,t}}class Ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Un(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(te.comparator)}static empty(){return new Le([])}unionWith(e){let t=new B(te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class fb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fb("Invalid base64 string: "+i):i}}(e);return new se(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}se.EMPTY_BYTE_STRING=new se("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(n){if(S(!!n),typeof n=="string"){let e=0;const t=pb.exec(n);if(S(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Q(n.seconds),nanos:Q(n.nanos)}}function Q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vn(n){return typeof n=="string"?se.fromBase64String(n):se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function hm(n){const e=n.mapValue.fields.__previous_value__;return Qc(e)?hm(e):e}function fi(n){const e=Lt(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
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
 */class gb{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ms={nullValue:"NULL_VALUE"};function wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qc(n)?4:dm(n)?9007199254740991:10:b()}function ot(n,e){if(n===e)return!0;const t=wn(n);if(t!==wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fi(n).isEqual(fi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Lt(r.timestampValue),o=Lt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return vn(r.bytesValue).isEqual(vn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Q(r.geoPointValue.latitude)===Q(i.geoPointValue.latitude)&&Q(r.geoPointValue.longitude)===Q(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Q(r.integerValue)===Q(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Q(r.doubleValue),o=Q(i.doubleValue);return s===o?di(s)===di(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Pl(s)!==Pl(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ot(s[a],o[a])))return!1;return!0}(n,e);default:return b()}}function mi(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function Ft(n,e){if(n===e)return 0;const t=wn(n),r=wn(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Q(i.integerValue||i.doubleValue),a=Q(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ll(n.timestampValue,e.timestampValue);case 4:return Ll(fi(n),fi(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(i,s){const o=vn(i),a=vn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=N(Q(i.latitude),Q(s.latitude));return o!==0?o:N(Q(i.longitude),Q(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ft(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Dt.mapValue&&s===Dt.mapValue)return 0;if(i===Dt.mapValue)return 1;if(s===Dt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=Ft(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(n.mapValue,e.mapValue);default:throw b()}}function Ll(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Lt(n),r=Lt(e),i=N(t.seconds,r.seconds);return i!==0?i:N(t.nanos,r.nanos)}function er(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Lt(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?vn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Oa(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Oa(r.fields[a])}`;return s+"}"}(n.mapValue):b();var e,t}function In(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function La(n){return!!n&&"integerValue"in n}function pi(n){return!!n&&"arrayValue"in n}function Ml(n){return!!n&&"nullValue"in n}function Fl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ps(n){return!!n&&"mapValue"in n}function Wr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return xn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function yb(n){return"nullValue"in n?ms:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?In(Mt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:b()}function vb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?In(Mt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Dt:b()}function Ul(n,e){const t=Ft(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Vl(n,e){const t=Ft(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ye{constructor(e){this.value=e}static empty(){return new ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ps(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(t)}setAll(e){let t=te.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Wr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ps(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ps(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){xn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ye(Wr(this.value))}}function fm(n){const e=[];return xn(n.fields,(t,r)=>{const i=new te([t]);if(ps(r)){const s=fm(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Le(e)}/**
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
 */class q{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new q(e,0,k.min(),k.min(),k.min(),ye.empty(),0)}static newFoundDocument(e,t,r,i){return new q(e,1,t,k.min(),r,i,0)}static newNoDocument(e,t){return new q(e,2,t,k.min(),k.min(),ye.empty(),0)}static newUnknownDocument(e,t){return new q(e,3,t,k.min(),k.min(),ye.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof q&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ut{constructor(e,t){this.position=e,this.inclusive=t}}function Bl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=Ft(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $l(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hn{constructor(e,t="asc"){this.field=e,this.dir=t}}function wb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class mm{}class x extends mm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ib(e,t,r):t==="array-contains"?new bb(e,r):t==="in"?new Im(e,r):t==="not-in"?new Tb(e,r):t==="array-contains-any"?new Sb(e,r):new x(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _b(e,r):new Eb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ft(t,this.value)):t!==null&&wn(this.value)===wn(t)&&this.matchesComparison(Ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class U extends mm{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new U(e,t)}matches(e){return tr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function tr(n){return n.op==="and"}function Ma(n){return n.op==="or"}function Yc(n){return pm(n)&&tr(n)}function pm(n){for(const e of n.filters)if(e instanceof U)return!1;return!0}function Fa(n){if(n instanceof x)return n.field.canonicalString()+n.op.toString()+er(n.value);if(Yc(n))return n.filters.map(e=>Fa(e)).join(",");{const e=n.filters.map(t=>Fa(t)).join(",");return`${n.op}(${e})`}}function gm(n,e){return n instanceof x?function(t,r){return r instanceof x&&t.op===r.op&&t.field.isEqual(r.field)&&ot(t.value,r.value)}(n,e):n instanceof U?function(t,r){return r instanceof U&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&gm(s,r.filters[o]),!0):!1}(n,e):void b()}function ym(n,e){const t=n.filters.concat(e);return U.create(t,n.op)}function vm(n){return n instanceof x?function(e){return`${e.field.canonicalString()} ${e.op} ${er(e.value)}`}(n):n instanceof U?function(e){return e.op.toString()+" {"+e.getFilters().map(vm).join(" ,")+"}"}(n):"Filter"}class Ib extends x{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class _b extends x{constructor(e,t){super(e,"in",t),this.keys=wm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Eb extends x{constructor(e,t){super(e,"not-in",t),this.keys=wm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class bb extends x{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pi(t)&&mi(t.arrayValue,this.value)}}class Im extends x{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mi(this.value.arrayValue,t)}}class Tb extends x{constructor(e,t){super(e,"not-in",t)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mi(this.value.arrayValue,t)}}class Sb extends x{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
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
 */class kb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Ua(n,e=null,t=[],r=[],i=null,s=null,o=null){return new kb(n,e,t,r,i,s,o)}function _n(n){const e=E(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>er(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>er(r)).join(",")),e.ft=t}return e.ft}function Vi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!wb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$l(n.startAt,e.startAt)&&$l(n.endAt,e.endAt)}function Ms(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fs(n,e){return n.filters.filter(t=>t instanceof x&&t.field.isEqual(e))}function ql(n,e,t){let r=ms,i=!0;for(const s of Fs(n,e)){let o=ms,a=!0;switch(s.op){case"<":case"<=":o=yb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ms}Ul({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Ul({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function zl(n,e,t){let r=Dt,i=!0;for(const s of Fs(n,e)){let o=Dt,a=!0;switch(s.op){case">=":case">":o=vb(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Dt}Vl({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Vl({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class wt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function _m(n,e,t,r,i,s,o,a){return new wt(n,e,t,r,i,s,o,a)}function wr(n){return new wt(n)}function jl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Jc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function bo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Xc(n){return n.collectionGroup!==null}function fn(n){const e=E(n);if(e.dt===null){e.dt=[];const t=bo(e),r=Jc(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new Hn(t)),e.dt.push(new Hn(te.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Hn(te.keyField(),s))}}}return e.dt}function Fe(n){const e=E(n);if(!e.wt)if(e.limitType==="F")e.wt=Ua(e.path,e.collectionGroup,fn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of fn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Hn(s.field,o))}const r=e.endAt?new Ut(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ut(e.startAt.position,e.startAt.inclusive):null;e.wt=Ua(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.wt}function Va(n,e){e.getFirstInequalityField(),bo(n);const t=n.filters.concat([e]);return new wt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Us(n,e,t){return new wt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bi(n,e){return Vi(Fe(n),Fe(e))&&n.limitType===e.limitType}function Em(n){return`${_n(Fe(n))}|lt:${n.limitType}`}function Ba(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>vm(r)).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>er(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>er(r)).join(",")),`Target(${t})`}(Fe(n))}; limitType=${n.limitType})`}function $i(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of fn(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Bl(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,fn(t),r)||t.endAt&&!function(i,s,o){const a=Bl(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,fn(t),r))}(n,e)}function bm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tm(n){return(e,t)=>{let r=!1;for(const i of fn(n)){const s=Ab(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ab(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Ft(a,c):b()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
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
 */const Cb=new J(I.comparator);function Me(){return Cb}const Sm=new J(I.comparator);function Br(...n){let e=Sm;for(const t of n)e=e.insert(t.key,t);return e}function km(n){let e=Sm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function et(){return Hr()}function Am(){return Hr()}function Hr(){return new Wt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Db=new J(I.comparator),Nb=new B(I.comparator);function R(...n){let e=Nb;for(const t of n)e=e.add(t);return e}const Rb=new B(N);function To(){return Rb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(e)?"-0":e}}function Dm(n){return{integerValue:""+n}}function Nm(n,e){return sm(e)?Dm(e):Cm(n,e)}/**
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
 */class So{constructor(){this._=void 0}}function xb(n,e,t){return n instanceof nr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof En?xm(n,e):n instanceof bn?Pm(n,e):function(r,i){const s=Rm(r,i),o=Gl(s)+Gl(r._t);return La(s)&&La(r._t)?Dm(o):Cm(r.serializer,o)}(n,e)}function Pb(n,e,t){return n instanceof En?xm(n,e):n instanceof bn?Pm(n,e):t}function Rm(n,e){return n instanceof rr?La(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class nr extends So{}class En extends So{constructor(e){super(),this.elements=e}}function xm(n,e){const t=Om(e);for(const r of n.elements)t.some(i=>ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class bn extends So{constructor(e){super(),this.elements=e}}function Pm(n,e){let t=Om(e);for(const r of n.elements)t=t.filter(i=>!ot(i,r));return{arrayValue:{values:t}}}class rr extends So{constructor(e,t){super(),this.serializer=e,this._t=t}}function Gl(n){return Q(n.integerValue||n.doubleValue)}function Om(n){return pi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class qi{constructor(e,t){this.field=e,this.transform=t}}function Ob(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof En&&r instanceof En||t instanceof bn&&r instanceof bn?Zn(t.elements,r.elements,ot):t instanceof rr&&r instanceof rr?ot(t._t,r._t):t instanceof nr&&r instanceof nr}(n.transform,e.transform)}class Lb{constructor(e,t){this.version=e,this.transformResults=t}}class G{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new G}static exists(e){return new G(void 0,e)}static updateTime(e){return new G(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ko{}function Lm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _r(n.key,G.none()):new Ir(n.key,n.data,G.none());{const t=n.data,r=ye.empty();let i=new B(te.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new It(n.key,r,new Le(i.toArray()),G.none())}}function Mb(n,e,t){n instanceof Ir?function(r,i,s){const o=r.value.clone(),a=Wl(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof It?function(r,i,s){if(!gs(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Wl(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Mm(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Qr(n,e,t,r){return n instanceof Ir?function(i,s,o,a){if(!gs(i.precondition,s))return o;const c=i.value.clone(),u=Hl(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof It?function(i,s,o,a){if(!gs(i.precondition,s))return o;const c=Hl(i.fieldTransforms,a,s),u=s.data;return u.setAll(Mm(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return gs(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function Fb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Rm(r.transform,i||null);s!=null&&(t===null&&(t=ye.empty()),t.set(r.field,s))}return t||null}function Kl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Zn(t,r,(i,s)=>Ob(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ir extends ko{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class It extends ko{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Mm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wl(n,e,t){const r=new Map;S(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Pb(o,a,t[i]))}return r}function Hl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,xb(s,o,e))}return r}class _r extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zc extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Mb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Am();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Lm(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(k.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),R())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,r)=>Kl(t,r))&&Zn(this.baseMutations,e.baseMutations,(t,r)=>Kl(t,r))}}class tu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){S(e.mutations.length===r.length);let i=Db;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tu(e,t,r,i)}}/**
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
 */class nu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ub{constructor(e){this.count=e}}/**
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
 */var re,P;function Fm(n){switch(n){default:return b();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Um(n){if(n===void 0)return ee("GRPC error has no .code"),m.UNKNOWN;switch(n){case re.OK:return m.OK;case re.CANCELLED:return m.CANCELLED;case re.UNKNOWN:return m.UNKNOWN;case re.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case re.INTERNAL:return m.INTERNAL;case re.UNAVAILABLE:return m.UNAVAILABLE;case re.UNAUTHENTICATED:return m.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case re.NOT_FOUND:return m.NOT_FOUND;case re.ALREADY_EXISTS:return m.ALREADY_EXISTS;case re.PERMISSION_DENIED:return m.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case re.ABORTED:return m.ABORTED;case re.OUT_OF_RANGE:return m.OUT_OF_RANGE;case re.UNIMPLEMENTED:return m.UNIMPLEMENTED;case re.DATA_LOSS:return m.DATA_LOSS;default:return b()}}(P=re||(re={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ru{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return rs}static getOrCreateInstance(){return rs===null&&(rs=new ru),rs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let rs=null;/**
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
 */class zi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zi(k.min(),i,To(),Me(),R())}}class ji{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ji(r,t,R(),R(),R())}}/**
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
 */class ys{constructor(e,t,r,i){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=i}}class Vm{constructor(e,t){this.targetId=e,this.Et=t}}class Bm{constructor(e,t,r=se.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ql{constructor(){this.At=0,this.Rt=Jl(),this.vt=se.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=R(),t=R(),r=R();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:b()}}),new ji(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=Jl()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Vb{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Me(),this.qt=Yl(),this.Ut=new B(N)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,i)=>{this.Wt(i)&&t(i)})}Jt(e){var t;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Ms(o))if(i===0){const a=new I(o.path);this.Qt(r,a,q.newNoDocument(a,k.min()))}else S(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=ru.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Ms(a.target)){const c=new I(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,q.newNoDocument(c,e))}s.St&&(t.set(o,s.Ct()),s.xt())}});let r=R();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new zi(e,t,this.Ut,this.Lt,r);return this.Lt=Me(),this.qt=Yl(),this.Ut=new B(N),i}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Ql,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new B(N),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Ql),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Yl(){return new J(I.comparator)}function Jl(){return new J(I.comparator)}/**
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
 */const Bb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$b=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qb=(()=>({and:"AND",or:"OR"}))();class zb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ir(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $m(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jb(n,e){return ir(n,e.toTimestamp())}function ne(n){return S(!!n),k.fromTimestamp(function(e){const t=Lt(e);return new K(t.seconds,t.nanos)}(n))}function iu(n,e){return function(t){return new O(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function qm(n){const e=O.fromString(n);return S(Jm(e)),e}function gi(n,e){return iu(n.databaseId,e.path)}function nt(n,e){const t=qm(e);if(t.get(1)!==n.databaseId.projectId)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new g(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(jm(t))}function $a(n,e){return iu(n.databaseId,e)}function zm(n){const e=qm(n);return e.length===4?O.emptyPath():jm(e)}function yi(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jm(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xl(n,e,t){return{name:gi(n,e),fields:t.value.mapValue.fields}}function Gm(n,e,t){const r=nt(n,e.name),i=ne(e.updateTime),s=e.createTime?ne(e.createTime):k.min(),o=new ye({mapValue:{fields:e.fields}}),a=q.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Gb(n,e){return"found"in e?function(t,r){S(!!r.found),r.found.name,r.found.updateTime;const i=nt(t,r.found.name),s=ne(r.found.updateTime),o=r.found.createTime?ne(r.found.createTime):k.min(),a=new ye({mapValue:{fields:r.found.fields}});return q.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){S(!!r.missing),S(!!r.readTime);const i=nt(t,r.missing),s=ne(r.readTime);return q.newNoDocument(i,s)}(n,e):b()}function Kb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(S(u===void 0||typeof u=="string"),se.fromBase64String(u||"")):(S(u===void 0||u instanceof Uint8Array),se.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Um(c.code);return new g(u,c.message||"")}(o);t=new Bm(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nt(n,r.document.name),s=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):k.min(),a=new ye({mapValue:{fields:r.document.fields}}),c=q.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new ys(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nt(n,r.document),s=r.readTime?ne(r.readTime):k.min(),o=q.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ys([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nt(n,r.document),s=r.removedTargetIds||[];t=new ys([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Ub(i),o=r.targetId;t=new Vm(o,s)}}return t}function vi(n,e){let t;if(e instanceof Ir)t={update:Xl(n,e.key,e.value)};else if(e instanceof _r)t={delete:gi(n,e.key)};else if(e instanceof It)t={update:Xl(n,e.key,e.data),updateMask:Xb(e.fieldMask)};else{if(!(e instanceof Zc))return b();t={verify:gi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof nr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof En)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rr)return{fieldPath:s.field.canonicalString(),increment:o._t};throw b()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(n,e.precondition)),t}function qa(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?G.updateTime(ne(i.updateTime)):i.exists!==void 0?G.exists(i.exists):G.none()}(e.currentDocument):G.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)S(o.setToServerValue==="REQUEST_TIME"),a=new nr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new En(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new bn(u)}else"increment"in o?a=new rr(s,o.increment):b();const c=te.fromServerFormat(o.fieldPath);return new qi(c,a)}(n,i)):[];if(e.update){e.update.name;const i=nt(n,e.update.name),s=new ye({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Le(c.map(u=>te.fromServerFormat(u)))}(e.updateMask);return new It(i,s,o,t,r)}return new Ir(i,s,t,r)}if(e.delete){const i=nt(n,e.delete);return new _r(i,t)}if(e.verify){const i=nt(n,e.verify);return new Zc(i,t)}return b()}function Wb(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?ne(r.updateTime):ne(i);return s.isEqual(k.min())&&(s=ne(i)),new Lb(s,r.transformResults||[])}(t,e))):[]}function Km(n,e){return{documents:[$a(n,e.path)]}}function Wm(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=$a(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=$a(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Ym(U.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Bn(l.field),direction:Qb(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,u){return c.useProto3Json||Ui(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Hm(n){let e=zm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){S(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=Qm(l);return h instanceof U&&Yc(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Hn($n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ui(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ut(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ut(d,h)}(t.endAt)),_m(e,i,o,s,a,"F",c,u)}function Hb(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qm(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=$n(e.unaryFilter.field);return x.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=$n(e.unaryFilter.field);return x.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$n(e.unaryFilter.field);return x.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$n(e.unaryFilter.field);return x.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(n):n.fieldFilter!==void 0?function(e){return x.create($n(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return U.create(e.compositeFilter.filters.map(t=>Qm(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(n):b()}function Qb(n){return Bb[n]}function Yb(n){return $b[n]}function Jb(n){return qb[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function $n(n){return te.fromServerFormat(n.fieldPath)}function Ym(n){return n instanceof x?function(e){if(e.op==="=="){if(Fl(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NAN"}};if(Ml(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fl(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NAN"}};if(Ml(e.value))return{unaryFilter:{field:Bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(e.field),op:Yb(e.op),value:e.value}}}(n):n instanceof U?function(e){const t=e.getFilters().map(r=>Ym(r));return t.length===1?t[0]:{compositeFilter:{op:Jb(e.op),filters:t}}}(n):b()}function Xb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Nt{constructor(e,t,r,i,s=k.min(),o=k.min(),a=se.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Xm{constructor(e){this.se=e}}function Zb(n,e){let t;if(e.document)t=Gm(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=Sn(e.noDocument.readTime);t=q.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=I.fromSegments(e.unknownDocument.path),i=Sn(e.unknownDocument.version);t=q.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new K(r[0],r[1]);return k.fromTimestamp(i)}(e.readTime)),t}function Zl(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Vs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:gi(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ir(i,s.version.toTimestamp()),createTime:ir(i,s.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Tn(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:t.path.toArray(),version:Tn(e.version)}}return r}function Vs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Tn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Sn(n){const e=new K(n.seconds,n.nanoseconds);return k.fromTimestamp(e)}function Zt(n,e){const t=(e.baseMutations||[]).map(s=>qa(n.se,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>qa(n.se,s)),i=K.fromMillis(e.localWriteTimeMs);return new eu(e.batchId,i,t,r)}function $r(n){const e=Sn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Sn(n.lastLimboFreeSnapshotVersion):k.min();let r;var i;return n.query.documents!==void 0?(S((i=n.query).documents.length===1),r=Fe(wr(zm(i.documents[0])))):r=function(s){return Fe(Hm(s))}(n.query),new Nt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,se.fromBase64String(n.resumeToken))}function Zm(n,e){const t=Tn(e.snapshotVersion),r=Tn(e.lastLimboFreeSnapshotVersion);let i;i=Ms(e.target)?Km(n.se,e.target):Wm(n.se,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_n(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function su(n){const e=Hm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Us(e,e.limit,"L"):e}function oa(n,e){return new nu(e.largestBatchId,qa(n.se,e.overlayMutation))}function eh(n,e){const t=e.path.lastSegment();return[n,Re(e.path.popLast()),t]}function th(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Tn(r.readTime),documentKey:Re(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{getBundleMetadata(e,t){return nh(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Sn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return nh(e).put({bundleId:(r=t).id,createTime:Tn(ne(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return rh(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:su(i.bundledQuery),readTime:Sn(i.readTime)};var i})}saveNamedQuery(e,t){return rh(e).put(function(r){return{name:r.name,readTime:Tn(ne(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function nh(n){return me(n,"bundles")}function rh(n){return me(n,"namedQueries")}/**
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
 */class Ao{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new Ao(e,r)}getOverlay(e,t){return Nr(e).get(eh(this.userId,t)).next(r=>r?oa(this.serializer,r):null)}getOverlays(e,t){const r=et();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new nu(t,o);i.push(this.re(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Re(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Nr(e).J("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=et(),s=Re(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Nr(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=oa(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=et();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Nr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=oa(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}re(e,t){return Nr(e).put(function(r,i,s){const[o,a,c]=eh(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:vi(r.se,s.mutation)}}(this.serializer,this.userId,t))}}function Nr(n){return me(n,"documentOverlays")}/**
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
 */class en{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Q(e.integerValue));else if("doubleValue"in e){const r=Q(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),di(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(vn(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?dm(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):b()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const i of Object.keys(r))this.fe(i,t),this.ue(r[i],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const i of r)this.ue(i,t)}_e(e,t){this.ae(t,37),I.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}en.pe=new en;function tT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function ih(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=tT(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class nT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const i=t.codePointAt(0);this.Te(240|i>>>18),this.Te(128|63&i>>>12),this.Te(128|63&i>>>6),this.Te(128|63&i)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=t.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.ve()}Ve(e){const t=this.Se(e),r=ih(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ce(e){const t=this.Se(e),r=ih(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class rT{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class iT{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Rr{constructor(){this.Me=new nT,this.Fe=new rT(this.Me),this.Be=new iT(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class tn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new tn(this.indexId,this.documentKey,this.arrayValue,r)}}function bt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=sh(n.arrayValue,e.arrayValue),t!==0?t:(t=sh(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function sh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class sT{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){S(e.collectionGroup===this.collectionId);const t=xa(e);if(t!==void 0&&!this.ze(t))return!1;const r=Jt(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.Ge!==void 0){const o=r[i];if(!this.je(this.Ge,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function ep(n){var e,t;if(S(n instanceof x||n instanceof U),n instanceof x){if(n instanceof Im){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>x.create(n.field,"==",s)))||[];return U.create(i,"or")}return n}const r=n.filters.map(i=>ep(i));return U.create(r,n.op)}function oT(n){if(n.getFilters().length===0)return[];const e=Ga(ep(n));return S(tp(e)),za(e)||ja(e)?[e]:e.getFilters()}function za(n){return n instanceof x}function ja(n){return n instanceof U&&Yc(n)}function tp(n){return za(n)||ja(n)||function(e){if(e instanceof U&&Ma(e)){for(const t of e.getFilters())if(!za(t)&&!ja(t))return!1;return!0}return!1}(n)}function Ga(n){if(S(n instanceof x||n instanceof U),n instanceof x)return n;if(n.filters.length===1)return Ga(n.filters[0]);const e=n.filters.map(r=>Ga(r));let t=U.create(e,n.op);return t=Bs(t),tp(t)?t:(S(t instanceof U),S(tr(t)),S(t.filters.length>1),t.filters.reduce((r,i)=>ou(r,i)))}function ou(n,e){let t;return S(n instanceof x||n instanceof U),S(e instanceof x||e instanceof U),t=n instanceof x?e instanceof x?function(r,i){return U.create([r,i],"and")}(n,e):oh(n,e):e instanceof x?oh(e,n):function(r,i){if(S(r.filters.length>0&&i.filters.length>0),tr(r)&&tr(i))return ym(r,i.getFilters());const s=Ma(r)?r:i,o=Ma(r)?i:r,a=s.filters.map(c=>ou(c,o));return U.create(a,"or")}(n,e),Bs(t)}function oh(n,e){if(tr(e))return ym(e,n.getFilters());{const t=e.filters.map(r=>ou(n,r));return U.create(t,"or")}}function Bs(n){if(S(n instanceof x||n instanceof U),n instanceof x)return n;const e=n.getFilters();if(e.length===1)return Bs(e[0]);if(pm(n))return n;const t=e.map(i=>Bs(i)),r=[];return t.forEach(i=>{i instanceof x?r.push(i):i instanceof U&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:U.create(r,n.op)}/**
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
 */class aT{constructor(){this.He=new au}addToCollectionParentIndex(e,t){return this.He.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve($e.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve($e.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class au{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new B(O.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new B(O.comparator)).toArray()}}/**
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
 */const is=new Uint8Array(0);class cT{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new au,this.Ye=new Wt(r=>_n(r),(r,i)=>Vi(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const s={collectionId:r,parent:Re(i)};return ah(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Zf(t),""],!1,!0);return ah(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Ze(o.parent))}return r})}addFieldIndex(e,t){const r=ss(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Pr(e);return s.next(a=>{o.put(th(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ss(e),i=Pr(e),s=xr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=xr(e);let i=!0;const s=new Map;return f.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=R();const a=[];return f.forEach(s,(c,u)=>{var l;y("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`} to execute ${_n(t)}`);const h=function(F,ae){const W=xa(ae);if(W===void 0)return null;for(const $ of Fs(F,W.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(u,c),d=function(F,ae){const W=new Map;for(const $ of Jt(ae))for(const be of Fs(F,$.fieldPath))switch(be.op){case"==":case"in":W.set($.fieldPath.canonicalString(),be.value);break;case"not-in":case"!=":return W.set($.fieldPath.canonicalString(),be.value),Array.from(W.values())}return null}(u,c),p=function(F,ae){const W=[];let $=!0;for(const be of Jt(ae)){const Ke=be.kind===0?ql(F,be.fieldPath,F.startAt):zl(F,be.fieldPath,F.startAt);W.push(Ke.value),$&&($=Ke.inclusive)}return new Ut(W,$)}(u,c),w=function(F,ae){const W=[];let $=!0;for(const be of Jt(ae)){const Ke=be.kind===0?zl(F,be.fieldPath,F.endAt):ql(F,be.fieldPath,F.endAt);W.push(Ke.value),$&&($=Ke.inclusive)}return new Ut(W,$)}(u,c),_=this.tn(c,u,p),C=this.tn(c,u,w),V=this.en(c,u,d),Z=this.nn(c.indexId,h,_,p.inclusive,C,w.inclusive,V);return f.forEach(Z,F=>r.H(F,t.limit).next(ae=>{ae.forEach(W=>{const $=I.fromSegments(W.documentKey);o.has($)||(o=o.add($),a.push($))})}))}).next(()=>a)}return f.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=oT(U.create(e.filters,"and")).map(r=>Ua(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.sn(t[h/u]):is,p=this.rn(e,d,r[h%u],i),w=this.on(e,d,s[h%u],o),_=a.map(C=>this.rn(e,d,C,!0));l.push(...this.createRange(p,w,_))}return l}rn(e,t,r,i){const s=new tn(e,I.empty(),t,r);return i?s:s.qe()}on(e,t,r,i){const s=new tn(e,I.empty(),t,r);return i?s.qe():s}Xe(e,t){const r=new sT(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Ze(t);return f.forEach(i,s=>this.Xe(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new B(te.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}un(e,t){const r=new Rr;for(const i of Jt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Le(i.kind);en.pe.oe(s,o)}return r.$e()}sn(e){const t=new Rr;return en.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new Rr;return en.pe.oe(In(this.databaseId,t),r.Le(function(i){const s=Jt(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let i=[];i.push(new Rr);let s=0;for(const o of Jt(e)){const a=r[s++];for(const c of i)if(this.an(t,o.fieldPath)&&pi(a))i=this.hn(i,o,a);else{const u=c.Le(o.kind);en.pe.oe(a,u)}}return this.ln(i)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Rr;c.seed(a.$e()),en.pe.oe(o,c.Le(t.kind)),s.push(c)}return s}an(e,t){return!!e.filters.find(r=>r instanceof x&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ss(e),i=Pr(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ls(l.sequenceNumber,new $e(Sn(l.readTime),new I(Ze(l.documentKey)),l.largestBatchId)):Ls.empty(),d=u.fields.map(([p,w])=>new jE(te.fromServerFormat(p),w));return new em(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:N(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ss(e),s=Pr(e);return this.fn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(th(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.dn(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?f.resolve():this._n(e,s,c,u,l)}))))})}mn(e,t,r,i){return xr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,i){return xr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const i=xr(e);let s=new B(bt);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{s=s.add(new tn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new B(bt);const i=this.un(t,e);if(i==null)return r;const s=xa(t);if(s!=null){const o=e.data.field(s.fieldPath);if(pi(o))for(const a of o.arrayValue.values||[])r=r.add(new tn(t.indexId,e.key,this.sn(a),i))}else r=r.add(new tn(t.indexId,e.key,is,i));return r}_n(e,t,r,i,s){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let w=Un(d),_=Un(p);for(;w||_;){let C=!1,V=!1;if(w&&_){const Z=u(w,_);Z<0?V=!0:Z>0&&(C=!0)}else w!=null?V=!0:C=!0;C?(l(_),_=Un(p)):V?(h(w),w=Un(d)):(w=Un(d),_=Un(p))}}(i,s,bt,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),f.waitFor(o)}fn(e){let t=1;return Pr(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>bt(o,a)).filter((o,a,c)=>!a||bt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=bt(o,e),c=bt(o,t);if(a===0)i[0]=e.qe();else if(a>0&&c<0)i.push(o),i.push(o.qe());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.yn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,is,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,is,[]];s.push(IDBKeyRange.bound(a,c))}return s}yn(e,t){return bt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ch)}getMinOffset(e,t){return f.mapArray(this.Ze(t),r=>this.Xe(e,r).next(i=>i||b())).next(ch)}}function ah(n){return me(n,"collectionParents")}function xr(n){return me(n,"indexEntries")}function ss(n){return me(n,"indexConfiguration")}function Pr(n){return me(n,"indexState")}function ch(n){S(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Wc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new $e(e.readTime,e.documentKey,t)}/**
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
 */const uh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=om(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function $s(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);class Co{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.pn={}}static ie(e,t,r,i){S(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Co(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tt(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=qn(e),o=Tt(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new eu(a,t,r,i),u=function(d,p,w){const _=w.baseMutations.map(V=>vi(d.se,V)),C=w.mutations.map(V=>vi(d.se,V));return{userId:p,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:_,mutations:C}}(this.serializer,this.userId,c),l=[];let h=new B((d,p)=>N(d.canonicalString(),p.canonicalString()));for(const d of i){const p=om(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,YE))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Tt(e).get(t).next(r=>r?(S(r.userId===this.userId),Zt(this.serializer,r)):null)}In(e,t){return this.pn[t]?f.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.pn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=r),s=Zt(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Tt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tt(e).j("userMutationsIndex",t).next(r=>r.map(i=>Zt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=fs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return qn(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Ze(l);if(u===this.userId&&t.path.isEqual(d))return Tt(e).get(h).next(p=>{if(!p)throw b();S(p.userId===this.userId),s.push(Zt(this.serializer,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new B(N);const i=[];return t.forEach(s=>{const o=fs(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=qn(e).Z({range:a},(u,l,h)=>{const[d,p,w]=u,_=Ze(p);d===this.userId&&s.path.isEqual(_)?r=r.add(w):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=fs(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new B(N);return qn(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,w=Ze(d);h===this.userId&&r.isPrefixOf(w)?w.length===i&&(a=a.add(p)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Tt(e).get(s).next(o=>{if(o===null)throw b();S(o.userId===this.userId),r.push(Zt(this.serializer,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return np(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return qn(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Ze(s[1]);i.push(c)}else a.done()}).next(()=>{S(i.length===0)})})}containsKey(e,t){return rp(e,this.userId,t)}An(e){return ip(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function rp(n,e,t){const r=fs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return qn(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Tt(n){return me(n,"mutations")}function qn(n){return me(n,"documentMutations")}function ip(n){return me(n,"mutationQueues")}/**
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
 */class kn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new kn(0)}static bn(){return new kn(-1)}}/**
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
 */class uT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new kn(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>k.fromTimestamp(new K(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Vn(e,i)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Vn(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(S(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Vn(e).Z((o,a)=>{const c=$r(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Vn(e).Z((r,i)=>{const s=$r(i);t(s)})}Pn(e){return lh(e).get("targetGlobalKey").next(t=>(S(t!==null),t))}Vn(e,t){return lh(e).put("targetGlobalKey",t)}Sn(e,t){return Vn(e).put(Zm(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=_n(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Vn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=$r(a);Vi(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=kt(e);return t.forEach(o=>{const a=Re(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=kt(e);return f.forEach(t,s=>{const o=Re(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=kt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=kt(e);let s=R();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=Ze(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Re(t.path),i=IDBKeyRange.bound([r],[Zf(r)],!1,!0);let s=0;return kt(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,t){return Vn(e).get(t).next(r=>r?$r(r):null)}}function Vn(n){return me(n,"targets")}function lh(n){return me(n,"targetGlobal")}function kt(n){return me(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh([n,e],[t,r]){const i=N(n,t);return i===0?N(e,r):i}class lT{constructor(e){this.Cn=e,this.buffer=new B(hh),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();hh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kt(t)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Gt(t)}await this.$n(3e5)})}}class dT{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Oe.ct);const r=new lT(t);return this.Mn.forEachTarget(e,i=>r.kn(i.sequenceNumber)).next(()=>this.Mn.Bn(e,i=>r.kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(uh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uh):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Ra()<=L.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new dT(r,i)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,i)=>t(i))}addReference(e,t,r){return os(e,r)}removeReference(e,t,r){return os(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return os(e,t)}Kn(e,t){return function(r,i){let s=!1;return ip(r).X(o=>rp(r,o,i).next(a=>(a&&(s=!0),f.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Un(e,(o,a)=>{if(a<=t){const c=this.Kn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,k.min()),kt(e).delete([0,Re(o.path)])))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return os(e,t)}Un(e,t){const r=kt(e);let i,s=Oe.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Oe.ct&&t(new I(Ze(i)),s),s=u,i=c):s=Oe.ct}).next(()=>{s!==Oe.ct&&t(new I(Ze(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function os(n,e){return kt(n).put(function(t,r){return{targetId:0,path:Re(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class sp{constructor(){this.changes=new Wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,q.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Qt(e).put(r)}removeEntry(e,t,r){return Qt(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Vs(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=q.newInvalidDocument(t);return Qt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Or(t))},(i,s)=>{r=this.Qn(t,s)}).next(()=>r)}zn(e,t){let r={size:0,document:q.newInvalidDocument(t)};return Qt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Or(t))},(i,s)=>{r={document:this.Qn(t,s),size:$s(s)}}).next(()=>r)}getEntries(e,t){let r=Me();return this.jn(e,t,(i,s)=>{const o=this.Qn(i,s);r=r.insert(i,o)}).next(()=>r)}Wn(e,t){let r=Me(),i=new J(I.comparator);return this.jn(e,t,(s,o)=>{const a=this.Qn(s,o);r=r.insert(s,a),i=i.insert(s,$s(o))}).next(()=>({documents:r,Hn:i}))}jn(e,t,r){if(t.isEmpty())return f.resolve();let i=new B(mh);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Or(i.first()),Or(i.last())),o=i.getIterator();let a=o.getNext();return Qt(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&mh(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(Or(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Vs(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qt(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Me();for(const l of c){const h=this.Qn(I.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&($i(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=Me();const o=fh(t,r),a=fh(t,$e.max());return Qt(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Qn(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new pT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return dh(e).get("remoteDocumentGlobalKey").next(t=>(S(!!t),t))}Gn(e,t){return dh(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=Zb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(k.min())))return r}return q.newInvalidDocument(e)}}function op(n){return new mT(n)}class pT extends sp{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new Wt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new B((s,o)=>N(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Yn.get(s);if(t.push(this.Jn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Zl(this.Jn.serializer,o);i=i.add(s.path.popLast());const u=$s(c);r+=u-a.size,t.push(this.Jn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Zl(this.Jn.serializer,o.convertToNoDocument(k.min()));t.push(this.Jn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Jn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:i})=>(i.forEach((s,o)=>{this.Yn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function dh(n){return me(n,"remoteDocumentGlobal")}function Qt(n){return me(n,"remoteDocumentsV14")}function Or(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function fh(n,e){const t=e.documentKey.path.toArray();return[n,Vs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function mh(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=N(t[s],r[s]),i)return i;return i=N(t.length,r.length),i||(i=N(t[t.length-2],r[r.length-2]),i||N(t[t.length-1],r[r.length-1]))}/**
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
 */class gT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ap{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Qr(r.mutation,i,Le.empty(),K.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,R()).next(()=>r))}getLocalViewOfDocuments(e,t,r=R()){const i=et();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Br();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=et();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,R()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Me();const o=Hr(),a=Hr();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof It)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Qr(l.mutation,u,l.mutation.getFieldMask(),K.now())):o.set(u.key,Le.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new gT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Hr();let i=new J((o,a)=>o-a),s=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Le.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||R()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Am();l.forEach(d=>{if(!s.has(d)){const p=Lm(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):f.resolve(et());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,R())).next(l=>({batchId:a,changes:km(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let i=Br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Br();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new wt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,q.newInvalidDocument(u)))});let o=Br();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Qr(u.mutation,c,Le.empty(),K.now()),$i(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:ne(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:su(r.bundledQuery),readTime:ne(r.readTime)}}(t)),f.resolve()}}/**
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
 */class vT{constructor(){this.overlays=new J(I.comparator),this.ts=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=et();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.re(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=et(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new J((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=et(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=et(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}re(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nu(t,r));let s=this.ts.get(t);s===void 0&&(s=R(),this.ts.set(t,s)),this.ts.set(t,s.add(r.key))}}/**
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
 */class cu{constructor(){this.es=new B(ce.ns),this.ss=new B(ce.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new ce(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new ce(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new I(new O([])),r=new ce(t,e),i=new ce(t,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new I(new O([])),r=new ce(t,e),i=new ce(t,e+1);let s=R();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new ce(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ce{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return I.comparator(e.key,t.key)||N(e.ds,t.ds)}static rs(e,t){return N(e.ds,t.ds)||I.comparator(e.key,t.key)}}/**
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
 */class wT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new B(ce.ns)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ce(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ys(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ce(t,0),i=new ce(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new B(N);return t.forEach(i=>{const s=new ce(i,0),o=new ce(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),f.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new ce(new I(s),0);let a=new B(N);return this._s.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),f.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){S(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return f.forEach(t.mutations,i=>{const s=new ce(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new ce(t,0),i=this._s.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class IT{constructor(e){this.Ts=e,this.docs=new J(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():q.newInvalidDocument(t))}getEntries(e,t){let r=Me();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():q.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Me();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wc(nm(l),r)<=0||(i.has(l.key)||$i(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(e,t,r,i){b()}Es(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _T(this)}getSize(e){return f.resolve(this.size)}}class _T extends sp{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class ET{constructor(e){this.persistence=e,this.As=new Wt(t=>_n(t),Vi),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Rs=0,this.vs=new cu,this.targetCount=0,this.bs=kn.vn()}forEachTarget(e,t){return this.As.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),f.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new kn(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Sn(t),f.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.vs.containsKey(t))}}/**
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
 */class cp{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Oe(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new ET(this),this.indexManager=new aT,this.remoteDocumentCache=function(r){return new IT(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new Xm(t),this.xs=new yT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new wT(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){y("MemoryPersistence","Starting transaction:",e);const i=new bT(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,t){return f.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class bT extends im{constructor(e){super(),this.currentSequenceNumber=e}}class Do{constructor(e){this.persistence=e,this.$s=new cu,this.Ms=null}static Fs(e){return new Do(e)}get Bs(){if(this.Ms)return this.Ms;throw b()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),f.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Bs,r=>{const i=I.fromPath(r);return this.Ls(e,i).next(s=>{s||t.removeEntry(i,k.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return f.or([()=>f.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.serializer=e}M(e,t,r,i){const s=new Eo("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",xl,{unique:!0}),a.createObjectStore("documentMutations")}(e),ph(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),ph(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:k.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",xl,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(s)))),r<7&&i>=7&&(o=o.next(()=>this.Ks(s))),r<8&&i>=8&&(o=o.next(()=>this.Gs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Qs(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:cb});c.createIndex("collectionPathOverlayIndex",ub,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",lb,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:JE});c.createIndex("documentKeyIndex",XE),c.createIndex("collectionGroupIndex",ZE)}(e)).next(()=>this.zs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:ib}).createIndex("sequenceNumberIndex",sb,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:ob}).createIndex("documentKeyIndex",ab,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=$s(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>f.forEach(a,c=>{S(c.userId===s.userId);const u=Zt(this.serializer,c);return np(e,s.userId,u).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new O(o),u=function(l){return[0,Re(l)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Re(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:rb});const r=t.store("collectionParents"),i=new au,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Re(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new O(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=Ze(a);return s(l.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,i)=>{const s=$r(i),o=Zm(this.serializer,s);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(O.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):b()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>f.waitFor(i))}js(e,t){const r=t.store("mutations"),i=op(this.serializer),s=new cp(Do.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:R();Zt(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new ue(u),h=Ao.ie(this.serializer,l),d=s.getIndexManager(l),p=Co.ie(l,this.serializer,d,s.referenceDelegate);return new ap(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Pa(t,Oe.ct),c).next()})})}}function ph(n){n.createObjectStore("targetDocuments",{keyPath:tb}).createIndex("documentTargetsIndex",nb,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",eb,{unique:!0}),n.createObjectStore("targetGlobal")}const aa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class uu{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=s,this.window=o,this.document=a,this.Hs=u,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!uu.D())throw new g(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new fT(this,i),this.si=t+"main",this.serializer=new Xm(c),this.ii=new je(this.si,this.Ys,new TT(this.serializer)),this.Ds=new uT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=op(this.serializer),this.xs=new eT,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&ee("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,aa);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Oe(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>as(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Kt(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return Lr(e).get("owner").next(t=>f.resolve(this._i(t)))}mi(e){return as(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=me(t,"clientMetadata");return r.j().next(i=>{const s=this.pi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?f.resolve(!0):Lr(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new g(m.FAILED_PRECONDITION,aa);return!1}}return!(!this.networkEnabled||!this.inForeground)||as(e).j().next(r=>this.pi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Pa(e,Oe.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>as(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return Co.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new cT(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Ao.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){y("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.Ys)===15?db:o===14?um:o===13?cm:o===12?hb:o===11?am:void b();var o;let a;return this.ii.runTransaction(e,i,s,c=>(a=new Pa(c,this.Vs?this.Vs.next():Oe.ct),t==="readwrite-primary"?this.li(a).next(u=>!!u||this.fi(a)).next(u=>{if(!u)throw ee(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new g(m.FAILED_PRECONDITION,rm);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return Lr(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new g(m.FAILED_PRECONDITION,aa)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lr(e).put("owner",t)}static D(){return je.D()}di(e){const t=Lr(e);return t.get("owner").next(r=>this._i(r)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ee(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;kg()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ee("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){ee("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lr(n){return me(n,"owner")}function as(n){return me(n,"clientMetadata")}function lu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class hu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=i}static Di(e,t){let r=R(),i=R();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hu(e,t.fromCache,r,i)}}/**
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
 */class up{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ni(e,t).next(s=>s||this.ki(e,t,i,r)).next(s=>s||this.Oi(e,t))}Ni(e,t){if(jl(t))return f.resolve(null);let r=Fe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Us(t,null,"F"),r=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=R(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.$i(t,a);return this.Mi(t,u,o,c.readTime)?this.Ni(e,Us(t,null,"F")):this.Fi(e,u,t,c)}))})))}ki(e,t,r,i){return jl(t)||i.isEqual(k.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(t,s);return this.Mi(t,o,r,i)?this.Oi(e,t):(Ra()<=L.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ba(t)),this.Fi(e,o,t,tm(i,-1)))})}$i(e,t){let r=new B(Tm(e));return t.forEach((i,s)=>{$i(e,s)&&(r=r.add(s))}),r}Mi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return Ra()<=L.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ba(t)),this.xi.getDocumentsMatchingQuery(e,t,$e.min())}Fi(e,t,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,r,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new J(N),this.qi=new Wt(s=>_n(s),Vi),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ap(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function lp(n,e,t,r){return new ST(n,e,t,r)}async function hp(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=R();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function kT(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(w=>{const _=c.docVersions.get(p);S(_!==null),w.version.compareTo(_)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=R();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function dp(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function AT(n,e){const t=E(n),r=e.snapshotVersion;let i=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});i=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(se.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(w,_,C){return w.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,p,l)&&a.push(t.Ds.updateTargetData(s,p))});let c=Me(),u=R();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(fp(s,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!r.isEqual(k.min())){const l=t.Ds.getLastRemoteSnapshotVersion(s).next(h=>t.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Li=i,s))}function fp(n,e,t){let r=R(),i=R();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Me();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(k.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function CT(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sr(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ds.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.Ds.allocateTargetId(r).next(o=>(i=new Nt(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function or(n,e,t){const r=E(n),i=r.Li.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kt(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function qs(n,e,t){const r=E(n);let i=k.min(),s=R();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=E(a),h=l.qi.get(u);return h!==void 0?f.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(r,o,Fe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?i:k.min(),t?s:R())).next(a=>(gp(r,bm(e),a),{documents:a,Wi:s})))}function mp(n,e){const t=E(n),r=E(t.Ds),i=t.Li.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function pp(n,e){const t=E(n),r=t.Ui.get(e)||k.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Ki.getAllFromCollectionGroup(i,e,tm(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(gp(t,e,i),i))}function gp(n,e,t){let r=n.Ui.get(e)||k.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ui.set(e,r)}async function DT(n,e,t,r){const i=E(n);let s=R(),o=Me();for(const u of t){const l=e.Hi(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ji(u);h.setReadTime(e.Yi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),c=await sr(i,function(u){return Fe(wr(O.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>fp(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Ds.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Ds.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.zi,l.ji)).next(()=>l.zi)))}async function NT(n,e,t=R()){const r=await sr(n,Fe(su(e.bundledQuery))),i=E(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.xs.saveNamedQuery(s,e);const a=r.withResumeToken(se.EMPTY_BYTE_STRING,o);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(s,a).next(()=>i.Ds.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ds.addMatchingKeys(s,t,r.targetId)).next(()=>i.xs.saveNamedQuery(s,e))})}function gh(n,e){return`firestore_clients_${n}_${e}`}function yh(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ca(n,e){return`firestore_targets_${n}_${e}`}class zs{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Zi(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new g(i.error.code,i.error.message))),o?new zs(e,t,i.state,s):(ee("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new g(r.error.code,r.error.message))),s?new Yr(e,r.state,i):(ee("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class js{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=To();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=sm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new js(e,s):(ee("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class du{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new du(t.clientId,t.onlineState):(ee("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ka{constructor(){this.activeTargetIds=To()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ua{constructor(e,t,r,i,s){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new J(N),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.cr=gh(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Ka),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const i=this.getItem(gh(this.persistenceKey,r));if(i){const s=js.Zi(r,i);s&&(this.rr=this.rr.insert(s.clientId,s))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ca(this.persistenceKey,e));if(r){const i=Yr.Zi(e,r);i&&(t=i.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ca(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Tr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void ee("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(i){let s=Oe.ct;if(i!=null)try{const o=JSON.parse(i);S(typeof o=="number"),s=o}catch(o){ee("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Oe.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const i=new zs(this.currentUser,e,t,r),s=yh(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Xi())}Tr(e){const t=yh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const i=ca(this.persistenceKey,e),s=new Yr(e,t,r);this.setItem(i,s.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return js.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return zs.Zi(new ue(s),i,t)}Cr(e,t){const r=this.dr.exec(e),i=Number(r[1]);return Yr.Zi(i,t)}gr(e){return du.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),i=this.pr(this.rr),s=this.pr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=To();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class yp{constructor(){this.Br=new Ka,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Ka,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RT{qr(e){}shutdown(){}}/**
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
 */class vh{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cs=null;function la(){return cs===null?cs=268435456+Math.round(2147483648*Math.random()):cs++,"0x"+cs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class PT{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Te="WebChannelConnection";class OT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,i,s){const o=la(),a=this.ao(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,i,s),this.lo(e,a,c,r).then(u=>(y("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw pt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,t,r,i,s,o){return this.co(e,t,r,i,s)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,t){const r=xT[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,i){const s=la();return new Promise((o,a)=>{const c=new xE;c.setWithCredentials(!0),c.listenOnce(DE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sa.NO_ERROR:const l=c.getResponseJson();y(Te,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case sa.TIMEOUT:y(Te,`RPC '${e}' ${s} timed out`),a(new g(m.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const h=c.getStatus();if(y(Te,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const w=function(_){const C=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(C)>=0?C:m.UNKNOWN}(p.status);a(new g(w,p.message))}else a(new g(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new g(m.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{y(Te,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);y(Te,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}wo(e,t,r){const i=la(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AE(),a=CE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new RE({})),this.ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");y(Te,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const p=new PT({Wr:_=>{d?y(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(y(Te,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),y(Te,`RPC '${e}' stream ${i} sending:`,_),l.send(_))},Hr:()=>l.close()}),w=(_,C,V)=>{_.listen(C,Z=>{try{V(Z)}catch(F){setTimeout(()=>{throw F},0)}})};return w(l,ts.EventType.OPEN,()=>{d||y(Te,`RPC '${e}' stream ${i} transport opened.`)}),w(l,ts.EventType.CLOSE,()=>{d||(d=!0,y(Te,`RPC '${e}' stream ${i} transport closed`),p.so())}),w(l,ts.EventType.ERROR,_=>{d||(d=!0,pt(Te,`RPC '${e}' stream ${i} transport errored:`,_),p.so(new g(m.UNAVAILABLE,"The operation could not be completed")))}),w(l,ts.EventType.MESSAGE,_=>{var C;if(!d){const V=_.data[0];S(!!V);const Z=V,F=Z.error||((C=Z[0])===null||C===void 0?void 0:C.error);if(F){y(Te,`RPC '${e}' stream ${i} received error:`,F);const ae=F.status;let W=function(be){const Ke=re[be];if(Ke!==void 0)return Um(Ke)}(ae),$=F.message;W===void 0&&(W=m.INTERNAL,$="Unknown error status: "+ae+" with message "+F.message),d=!0,p.so(new g(W,$)),l.close()}else y(Te,`RPC '${e}' stream ${i} received:`,V),p.io(V)}}),w(a,NE.STAT_EVENT,_=>{_.stat===Cl.PROXY?y(Te,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Cl.NOPROXY&&y(Te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vp(){return typeof window<"u"?window:null}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){return new zb(n,!0)}/**
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
 */class fu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,t-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class wp{constructor(e,t,r,i,s,o,a,c){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new fu(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(ee(t.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===t&&this.Ko(r,i)},r=>{e(()=>{const i=new g(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LT extends wp{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=Kb(this.serializer,e),r=function(i){if(!("targetChange"in i))return k.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?k.min():s.readTime?ne(s.readTime):k.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=yi(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;return o=Ms(a)?{documents:Km(i,a)}:{query:Wm(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=$m(i,s.resumeToken):s.snapshotVersion.compareTo(k.min())>0&&(o.readTime=ir(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=Hb(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=yi(this.serializer),t.removeTarget=e,this.Fo(t)}}class MT extends wp{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=Wb(e.writeResults,e.commitTime),r=ne(e.commitTime);return this.listener.Zo(r,t)}return S(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=yi(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vi(this.serializer,r))};this.Fo(t)}}/**
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
 */class FT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(m.UNKNOWN,i.toString())})}fo(e,t,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new g(m.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class UT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ee(t),this.ru=!1):y("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class VT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Ht(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=E(a);c.du.add(4),await Er(c),c.mu.set("Unknown"),c.du.delete(4),await Ki(c)}(this))})}),this.mu=new UT(r,i)}}async function Ki(n){if(Ht(n))for(const e of n.wu)await e(!0)}async function Er(n){for(const e of n.wu)await e(!1)}function No(n,e){const t=E(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),gu(t)?pu(t):Tr(t).No()&&mu(t,e))}function wi(n,e){const t=E(n),r=Tr(t);t.fu.delete(e),r.No()&&Ip(t,e),t.fu.size===0&&(r.No()?r.$o():Ht(t)&&t.mu.set("Unknown"))}function mu(n,e){n.gu.Ot(e.targetId),Tr(n).jo(e)}function Ip(n,e){n.gu.Ot(e),Tr(n).Wo(e)}function pu(n){n.gu=new Vb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Tr(n).start(),n.mu.ou()}function gu(n){return Ht(n)&&!Tr(n).xo()&&n.fu.size>0}function Ht(n){return E(n).du.size===0}function _p(n){n.gu=void 0}async function BT(n){n.fu.forEach((e,t)=>{mu(n,e)})}async function $T(n,e){_p(n),gu(n)?(n.mu.au(e),pu(n)):n.mu.set("Unknown")}async function qT(n,e,t){if(n.mu.set("Online"),e instanceof Bm&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gs(n,r)}else if(e instanceof ys?n.gu.Kt(e):e instanceof Vm?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(k.min()))try{const r=await dp(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(se.EMPTY_BYTE_STRING,c.snapshotVersion)),Ip(i,a);const u=new Nt(c.target,a,1,c.sequenceNumber);mu(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,e,t){if(!Kt(e))throw e;n.du.add(1),await Er(n),n.mu.set("Offline"),t||(t=()=>dp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Ki(n)})}function Ep(n,e){return e().catch(t=>Gs(n,t,e))}async function br(n){const e=E(n),t=Vt(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;zT(e);)try{const i=await CT(e.localStore,r);if(i===null){e.lu.length===0&&t.$o();break}r=i.batchId,jT(e,i)}catch(i){await Gs(e,i)}bp(e)&&Tp(e)}function zT(n){return Ht(n)&&n.lu.length<10}function jT(n,e){n.lu.push(e);const t=Vt(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function bp(n){return Ht(n)&&!Vt(n).xo()&&n.lu.length>0}function Tp(n){Vt(n).start()}async function GT(n){Vt(n).tu()}async function KT(n){const e=Vt(n);for(const t of n.lu)e.Yo(t.mutations)}async function WT(n,e,t){const r=n.lu.shift(),i=tu.from(r,e,t);await Ep(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await br(n)}async function HT(n,e){e&&Vt(n).Jo&&await async function(t,r){if(i=r.code,Fm(i)&&i!==m.ABORTED){const s=t.lu.shift();Vt(t).Oo(),await Ep(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await br(t)}var i}(n,e),bp(n)&&Tp(n)}async function wh(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=Ht(t);t.du.add(3),await Er(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Ki(t)}async function Wa(n,e){const t=E(n);e?(t.du.delete(2),await Ki(t)):e||(t.du.add(2),await Er(t),t.mu.set("Unknown"))}function Tr(n){return n.yu||(n.yu=function(e,t,r){const i=E(e);return i.nu(),new LT(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:BT.bind(null,n),Zr:$T.bind(null,n),zo:qT.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),gu(n)?pu(n):n.mu.set("Unknown")):(await n.yu.stop(),_p(n))})),n.yu}function Vt(n){return n.pu||(n.pu=function(e,t,r){const i=E(e);return i.nu(),new MT(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:GT.bind(null,n),Zr:HT.bind(null,n),Xo:KT.bind(null,n),Zo:WT.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await br(n)):(await n.pu.stop(),n.lu.length>0&&(y("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class yu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new yu(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sr(n,e){if(ee("AsyncQueue",`${e}: ${n}`),Kt(n))return new g(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=Br(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new Qn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ih{constructor(){this.Iu=new J(I.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):b():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ar{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ar(e,t,Qn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class QT{constructor(){this.Eu=void 0,this.listeners=[]}}class YT{constructor(){this.queries=new Wt(e=>Em(e),Bi),this.onlineState="Unknown",this.Au=new Set}}async function vu(n,e){const t=E(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new QT),i)try{s.Eu=await t.onListen(r)}catch(o){const a=Sr(o,`Initialization of query '${Ba(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Ru(t.onlineState),s.Eu&&e.vu(s.Eu)&&Iu(t)}async function wu(n,e){const t=E(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function JT(n,e){const t=E(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Iu(t)}function XT(n,e,t){const r=E(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Iu(n){n.Au.forEach(e=>{e.next()})}class _u{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.serializer=e}Hi(e){return nt(this.serializer,e)}Ji(e){return e.metadata.exists?Gm(this.serializer,e.document,!1):q.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return ne(e)}}class e0{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Sp(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=O.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new _h(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Hi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||R()).add(s);t.set(o,a)}}return t}async complete(){const e=await DT(this.localStore,new _h(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await NT(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function Sp(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class kp{constructor(e){this.key=e}}class Ap{constructor(e){this.key=e}}class Cp{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=R(),this.mutatedKeys=R(),this.Ku=Tm(e),this.Gu=new Qn(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new Ih,i=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=$i(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let C=!1;d&&p?d.data.isEqual(p.data)?w!==_&&(r.track({type:3,doc:p}),C=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),C=!0,(c&&this.Ku(p,c)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),C=!0):d&&!p&&(r.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(p?(o=o.add(p),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,l)=>function(h,d){const p=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return p(h)-p(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new ar(this.query,e.Gu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Ih,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=R(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new Ap(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new kp(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=R();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return ar.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class t0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class n0{constructor(e){this.key=e,this.ec=!1}}class r0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Wt(a=>Em(a),Bi),this.ic=new Map,this.rc=new Set,this.oc=new J(I.comparator),this.uc=new Map,this.cc=new cu,this.ac={},this.hc=new Map,this.lc=kn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function i0(n,e){const t=ku(n);let r,i;const s=t.sc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await sr(t.localStore,Fe(e));t.isPrimaryClient&&No(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Eu(t,e,r,a==="current",o.resumeToken)}return i}async function Eu(n,e,t,r,i){n.dc=(h,d,p)=>async function(w,_,C,V){let Z=_.view.zu(C);Z.Mi&&(Z=await qs(w.localStore,_.query,!1).then(({documents:W})=>_.view.zu(W,Z)));const F=V&&V.targetChanges.get(_.targetId),ae=_.view.applyChanges(Z,w.isPrimaryClient,F);return Ha(w,_.targetId,ae.Yu),ae.snapshot}(n,h,d,p);const s=await qs(n.localStore,e,!0),o=new Cp(e,s.Wi),a=o.zu(s.documents),c=ji.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ha(n,t,u.Yu);const l=new t0(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function s0(n,e){const t=E(n),r=t.sc.get(e),i=t.ic.get(r.targetId);if(i.length>1)return t.ic.set(r.targetId,i.filter(s=>!Bi(s,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await or(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),wi(t.remoteStore,r.targetId),cr(t,r.targetId)}).catch(Gt)):(cr(t,r.targetId),await or(t.localStore,r.targetId,!0))}async function o0(n,e,t){const r=Au(n);try{const i=await function(s,o){const a=E(s),c=K.now(),u=o.reduce((d,p)=>d.add(p.key),R());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Me(),w=R();return a.Ki.getEntries(d,u).next(_=>{p=_,p.forEach((C,V)=>{V.isValidDocument()||(w=w.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{l=_;const C=[];for(const V of o){const Z=Fb(V,l.get(V.key).overlayedDocument);Z!=null&&C.push(new It(V.key,Z,fm(Z.value.mapValue),G.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,C,o)}).next(_=>{h=_;const C=_.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,_.batchId,C)})}).then(()=>({batchId:h.batchId,changes:km(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new J(N)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(r,i.batchId,t),await _t(r,i.changes),await br(r.remoteStore)}catch(i){const s=Sr(i,"Failed to persist write");t.reject(s)}}async function Dp(n,e){const t=E(n);try{const r=await AT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.uc.get(s);o&&(S(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?S(o.ec):i.removedDocuments.size>0&&(S(o.ec),o.ec=!1))}),await _t(t,r,e)}catch(r){await Gt(r)}}function Eh(n,e,t){const r=E(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=E(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Iu(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function a0(n,e,t){const r=E(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new J(I.comparator);o=o.insert(s,q.newNoDocument(s,k.min()));const a=R().add(s),c=new zi(k.min(),new Map,new B(N),o,a);await Dp(r,c),r.oc=r.oc.remove(s),r.uc.delete(e),Su(r)}else await or(r.localStore,e,!1).then(()=>cr(r,e,t)).catch(Gt)}async function c0(n,e){const t=E(n),r=e.batch.batchId;try{const i=await kT(t.localStore,e);Tu(t,r,null),bu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _t(t,i)}catch(i){await Gt(i)}}async function u0(n,e,t){const r=E(n);try{const i=await function(s,o){const a=E(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(S(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Tu(r,e,t),bu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _t(r,i)}catch(i){await Gt(i)}}async function l0(n,e){const t=E(n);Ht(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=E(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.hc.get(r)||[];i.push(e),t.hc.set(r,i)}catch(r){const i=Sr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function bu(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Tu(n,e,t){const r=E(n);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function cr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||Np(n,r)})}function Np(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(wi(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Su(n))}function Ha(n,e,t){for(const r of t)r instanceof kp?(n.cc.addReference(r.key,e),h0(n,r)):r instanceof Ap?(y("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||Np(n,r.key)):b()}function h0(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(y("SyncEngine","New document in limbo: "+t),n.rc.add(r),Su(n))}function Su(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new I(O.fromString(e)),r=n.lc.next();n.uc.set(r,new n0(t)),n.oc=n.oc.insert(t,r),No(n.remoteStore,new Nt(Fe(wr(t.path)),r,2,Oe.ct))}}async function _t(n,e,t){const r=E(n),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=hu.Di(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,c){const u=E(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Kt(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,w)}}}(r.localStore,s))}async function d0(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const r=await hp(t.localStore,e);t.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new g(m.CANCELLED,s))})}),i.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _t(t,r.Qi)}}function f0(n,e){const t=E(n),r=t.uc.get(e);if(r&&r.ec)return R().add(r.key);{let i=R();const s=t.ic.get(e);if(!s)return i;for(const o of s){const a=t.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function m0(n,e){const t=E(n),r=await qs(t.localStore,e.query,!0),i=e.view.Xu(r);return t.isPrimaryClient&&Ha(t,e.targetId,i.Yu),i}async function p0(n,e){const t=E(n);return pp(t.localStore,e).then(r=>_t(t,r))}async function g0(n,e,t,r){const i=E(n),s=await function(o,a){const c=E(o),u=E(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.In(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await br(i.remoteStore):t==="acknowledged"||t==="rejected"?(Tu(i,e,r||null),bu(i,e),function(o,a){E(E(o).mutationQueue).En(a)}(i.localStore,e)):b(),await _t(i,s)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function y0(n,e){const t=E(n);if(ku(t),Au(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await bh(t,r.toArray());t.fc=!0,await Wa(t.remoteStore,!0);for(const s of i)No(t.remoteStore,s)}else if(e===!1&&t.fc!==!1){const r=[];let i=Promise.resolve();t.ic.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(cr(t,o),or(t.localStore,o,!0))),wi(t.remoteStore,o)}),await i,await bh(t,r),function(s){const o=E(s);o.uc.forEach((a,c)=>{wi(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new J(I.comparator)}(t),t.fc=!1,await Wa(t.remoteStore,!1)}}async function bh(n,e,t){const r=E(n),i=[],s=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await sr(r.localStore,Fe(c[0]));for(const u of c){const l=r.sc.get(u),h=await m0(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await mp(r.localStore,o);a=await sr(r.localStore,u),await Eu(r,Rp(u),o,!1,a.resumeToken)}i.push(a)}return r.nc.zo(s),i}function Rp(n){return _m(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function v0(n){const e=E(n);return E(E(e.localStore).persistence).bi()}async function w0(n,e,t,r){const i=E(n);if(i.fc)return void y("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await pp(i.localStore,bm(s[0])),a=zi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",se.EMPTY_BYTE_STRING);await _t(i,o,a);break}case"rejected":await or(i.localStore,e,!0),cr(i,e,r);break;default:b()}}async function I0(n,e,t){const r=ku(n);if(r.fc){for(const i of e){if(r.ic.has(i)){y("SyncEngine","Adding an already active target "+i);continue}const s=await mp(r.localStore,i),o=await sr(r.localStore,s);await Eu(r,Rp(s),o.targetId,!1,o.resumeToken),No(r.remoteStore,o)}for(const i of t)r.ic.has(i)&&await or(r.localStore,i,!1).then(()=>{wi(r.remoteStore,i),cr(r,i)}).catch(Gt)}}function ku(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=a0.bind(null,e),e.nc.zo=JT.bind(null,e.eventManager),e.nc.wc=XT.bind(null,e.eventManager),e}function Au(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=c0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u0.bind(null,e),e}function _0(n,e,t){const r=E(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=E(h),w=ne(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",_=>p.xs.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(w)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Sp(a));const c=new e0(a,i.localStore,s.serializer);let u=await s._c();for(;u;){const h=await c.$u(u);h&&o._updateProgress(h),u=await s._c()}const l=await c.complete();return await _t(i,l.Bu,void 0),await function(h,d){const p=E(h);return p.persistence.runTransaction("Save bundle","readwrite",w=>p.xs.saveBundleMetadata(w,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return pt("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Qa{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Gi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return lp(this.persistence,new up,e.initialUser,this.serializer)}createPersistence(e){return new cp(Do.Fs,this.serializer)}createSharedClientState(e){return new yp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xp extends Qa{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await Au(this.mc.syncEngine),await br(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return lp(this.persistence,new up,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new hT(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new HE(t,this.persistence);return new WE(e.asyncQueue,r)}createPersistence(e){const t=lu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new uu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,vp(),vs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new yp}}class E0 extends xp{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof ua&&(this.sharedClientState.syncEngine={$r:g0.bind(null,t),Mr:w0.bind(null,t),Fr:I0.bind(null,t),bi:v0.bind(null,t),Or:p0.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await y0(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=vp();if(!ua.D(t))throw new g(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=lu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ua(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Cu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Eh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=d0.bind(null,this.syncEngine),await Wa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YT}createDatastore(e){const t=Gi(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new OT(i));var i;return function(s,o,a,c){return new FT(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Eh(this.syncEngine,a,0),o=vh.D()?new vh:new RT,new VT(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new r0(r,i,s,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);y("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Er(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ro{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):ee("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new le,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const i=await this.vc(r);return new ZT(JSON.parse(i),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class T0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new g(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=E(r),o=yi(s.serializer)+"/documents",a={documents:i.map(h=>gi(s.serializer,h))},c=await s.fo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=Gb(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());S(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new _r(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new Zc(i,this.precondition(i)))}),await async function(t,r){const i=E(t),s=yi(i.serializer)+"/documents",o={writes:r.map(a=>vi(i.serializer,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=k.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new g(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(k.min())?G.exists(!1):G.updateTime(t):G.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(k.min()))throw new g(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return G.updateTime(t)}return G.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class S0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Vc=r.maxAttempts,this.Co=new fu(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new T0(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Cc(i)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!Ui(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Fm(t)}return!1}}/**
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
 */class k0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ue.UNAUTHENTICATED,this.clientId=Xf.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Sr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ws(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Du(n);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>wh(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>wh(e.remoteStore,s)),n._onlineComponents=e}function Pp(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Du(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await ws(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Pp(t))throw t;pt("Error using user provided cache. Falling back to memory cache: "+t),await ws(n,new Qa)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await ws(n,new Qa);return n._offlineComponents}async function xo(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Ya(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Ya(n,new Cu))),n._onlineComponents}function Op(n){return Du(n).then(e=>e.persistence)}function Nu(n){return Du(n).then(e=>e.localStore)}function Lp(n){return xo(n).then(e=>e.remoteStore)}function Ru(n){return xo(n).then(e=>e.syncEngine)}function A0(n){return xo(n).then(e=>e.datastore)}async function ur(n){const e=await xo(n),t=e.eventManager;return t.onListen=i0.bind(null,e.syncEngine),t.onUnlisten=s0.bind(null,e.syncEngine),t}function C0(n){return n.asyncQueue.enqueue(async()=>{const e=await Op(n),t=await Lp(n);return e.setNetworkEnabled(!0),function(r){const i=E(r);return i.du.delete(0),Ki(i)}(t)})}function D0(n){return n.asyncQueue.enqueue(async()=>{const e=await Op(n),t=await Lp(n);return e.setNetworkEnabled(!1),async function(r){const i=E(r);i.du.add(0),await Er(i),i.mu.set("Offline")}(t)})}function N0(n,e){const t=new le;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=E(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new g(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Sr(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Nu(n),e,t)),t.promise}function Mp(n,e,t={}){const r=new le;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ro({next:h=>{s.enqueueAndForget(()=>wu(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new g(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new g(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new _u(wr(o.path),u,{includeMetadataChanges:!0,xu:!0});return vu(i,l)}(await ur(n),n.asyncQueue,e,t,r)),r.promise}function R0(n,e){const t=new le;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await qs(r,i,!0),a=new Cp(i,o.Wi),c=a.zu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Sr(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Nu(n),e,t)),t.promise}function Fp(n,e,t={}){const r=new le;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ro({next:h=>{s.enqueueAndForget(()=>wu(i,l)),h.fromCache&&a.source==="server"?c.reject(new g(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new _u(o,u,{includeMetadataChanges:!0,xu:!0});return vu(i,l)}(await ur(n),n.asyncQueue,e,t,r)),r.promise}function x0(n,e){const t=new Ro(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){E(r).Au.add(i),i.next()}(await ur(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){E(r).Au.delete(i)}(await ur(n),t))}}function P0(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new b0(c,u)}(function(c,u){if(c instanceof Uint8Array)return Th(c,u);if(c instanceof ArrayBuffer)return Th(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Gi(e));n.asyncQueue.enqueueAndForget(async()=>{_0(await Ru(n),i,r)})}function O0(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=E(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.xs.getNamedQuery(s,r))}(await Nu(n),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;/**
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
 */function xu(n,e,t){if(!t)throw new g(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Up(n,e,t,r){if(e===!0&&r===!0)throw new g(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kh(n){if(!I.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ah(n){if(I.isDocumentKey(n))throw new g(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function M(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new g(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Po(n);throw new g(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Vp(n,e){if(e<=0)throw new g(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new g(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Up("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ch({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ch(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new LE;switch(t.type){case"firstParty":return new VE(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new g(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Sh.get(e);t&&(y("ComponentProvider","Removing Datastore"),Sh.delete(e),t.terminate())}(this),Promise.resolve()}}function L0(n,e,t,r={}){var i;const s=(n=M(n,Wi))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&pt("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ue.MOCK_USER;else{o=bg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new g(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ue(c)}n._authCredentials=new ME(new Jf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new z(this.firestore,e,this._key)}}class _e{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _e(this.firestore,e,this._query)}}class rt extends _e{constructor(e,t,r){super(e,t,wr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new z(this.firestore,null,new I(e))}withConverter(e){return new rt(this.firestore,e,this._path)}}function Bp(n,e,...t){if(n=A(n),xu("collection","path",e),n instanceof Wi){const r=O.fromString(e,...t);return Ah(r),new rt(n,null,r)}{if(!(n instanceof z||n instanceof rt))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return Ah(r),new rt(n.firestore,null,r)}}function M0(n,e){if(n=M(n,Wi),xu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new g(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new _e(n,null,function(t){return new wt(O.emptyPath(),t)}(e))}function Ks(n,e,...t){if(n=A(n),arguments.length===1&&(e=Xf.A()),xu("doc","path",e),n instanceof Wi){const r=O.fromString(e,...t);return kh(r),new z(n,null,new I(r))}{if(!(n instanceof z||n instanceof rt))throw new g(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(O.fromString(e,...t));return kh(r),new z(n.firestore,n instanceof rt?n.converter:null,new I(r))}}function $p(n,e){return n=A(n),e=A(e),(n instanceof z||n instanceof rt)&&(e instanceof z||e instanceof rt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function qp(n,e){return n=A(n),e=A(e),n instanceof _e&&e instanceof _e&&n.firestore===e.firestore&&Bi(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new fu(this,"async_queue_retry"),this.qc=()=>{const t=vs();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=vs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=vs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new le;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Kt(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ee("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=yu.createAndSchedule(this,e,t,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&b()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Ja(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class U0{constructor(){this._progressObserver={},this._taskCompletionResolver=new le,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=-1;class X extends Wi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new F0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zp(this),this._firestoreClient.terminate()}}function pe(n){return n._firestoreClient||zp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function zp(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new gb(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new k0(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function B0(n,e){Gp(n=M(n,X));const t=pe(n);if(t._uninitializedComponentsProvider)throw new g(m.FAILED_PRECONDITION,"SDK cache is already specified.");pt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Cu;return jp(t,i,new xp(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function $0(n){Gp(n=M(n,X));const e=pe(n);if(e._uninitializedComponentsProvider)throw new g(m.FAILED_PRECONDITION,"SDK cache is already specified.");pt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Cu;return jp(e,r,new E0(r,t.cacheSizeBytes))}function jp(n,e,t){const r=new le;return n.asyncQueue.enqueue(async()=>{try{await ws(n,t),await Ya(n,e),r.resolve()}catch(i){const s=i;if(!Pp(s))throw s;pt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function q0(n){if(n._initialized&&!n._terminated)throw new g(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new le;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!je.D())return Promise.resolve();const r=t+"main";await je.delete(r)}(lu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function z0(n){return function(e){const t=new le;return e.asyncQueue.enqueueAndForget(async()=>l0(await Ru(e),t)),t.promise}(pe(n=M(n,X)))}function j0(n){return C0(pe(n=M(n,X)))}function G0(n){return D0(pe(n=M(n,X)))}function K0(n,e){const t=pe(n=M(n,X)),r=new U0;return P0(t,n._databaseId,e,r),r}function W0(n,e){return O0(pe(n=M(n,X)),e).then(t=>t?new _e(n,null,t.query):null)}function Gp(n){if(n._initialized||n._terminated)throw new g(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this._byteString=e}static fromBase64String(e){try{return new at(se.fromBase64String(e))}catch(t){throw new g(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new at(se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new g(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._methodName=e}}/**
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
 */class Oo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new g(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new g(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const H0=/^__.*__$/;class Q0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new It(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ir(e,this.data,t,this.fieldTransforms)}}class Kp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new It(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Wp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Lo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ws(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Wp(this.Yc)&&H0.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Y0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gi(e)}ua(e,t,r,i=!1){return new Lo({Yc:e,methodName:t,oa:r,path:te.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function On(n){const e=n._freezeSettings(),t=Gi(n._databaseId);return new Y0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mo(n,e,t,r,i,s={}){const o=n.ua(s.merge||s.mergeFields?2:0,e,t,i);Mu("Data must be an object, but it was:",o,r);const a=Yp(r,o);let c,u;if(s.merge)c=new Le(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Xa(e,h,t);if(!o.contains(d))throw new g(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Xp(l,d)||l.push(d)}c=new Le(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Q0(new ye(a),c,u)}class Hi extends Pn{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hi}}function Hp(n,e,t){return new Lo({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Pu extends Pn{_toFieldTransform(e){return new qi(e.path,new nr)}isEqual(e){return e instanceof Pu}}class J0 extends Pn{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Hp(this,e,!0),r=this.ca.map(s=>Ln(s,t)),i=new En(r);return new qi(e.path,i)}isEqual(e){return this===e}}class X0 extends Pn{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Hp(this,e,!0),r=this.ca.map(s=>Ln(s,t)),i=new bn(r);return new qi(e.path,i)}isEqual(e){return this===e}}class Z0 extends Pn{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new rr(e.serializer,Nm(e.serializer,this.aa));return new qi(e.path,t)}isEqual(e){return this===e}}function Ou(n,e,t,r){const i=n.ua(1,e,t);Mu("Data must be an object, but it was:",i,r);const s=[],o=ye.empty();xn(r,(c,u)=>{const l=Fu(e,c,t);u=A(u);const h=i.na(l);if(u instanceof Hi)s.push(l);else{const d=Ln(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Le(s);return new Kp(o,a,i.fieldTransforms)}function Lu(n,e,t,r,i,s){const o=n.ua(1,e,t),a=[Xa(e,r,t)],c=[i];if(s.length%2!=0)throw new g(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Xa(e,s[d])),c.push(s[d+1]);const u=[],l=ye.empty();for(let d=a.length-1;d>=0;--d)if(!Xp(u,a[d])){const p=a[d];let w=c[d];w=A(w);const _=o.na(p);if(w instanceof Hi)u.push(p);else{const C=Ln(w,_);C!=null&&(u.push(p),l.set(p,C))}}const h=new Le(u);return new Kp(l,h,o.fieldTransforms)}function Qp(n,e,t,r=!1){return Ln(t,n.ua(r?4:3,e))}function Ln(n,e){if(Jp(n=A(n)))return Mu("Unsupported field value:",e,n),Yp(n,e);if(n instanceof Pn)return function(t,r){if(!Wp(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Ln(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=A(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Nm(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=K.fromDate(t);return{timestampValue:ir(r.serializer,i)}}if(t instanceof K){const i=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ir(r.serializer,i)}}if(t instanceof Oo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof at)return{bytesValue:$m(r.serializer,t._byteString)};if(t instanceof z){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:iu(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${Po(t)}`)}(n,e)}function Yp(n,e){const t={};return lm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xn(n,(r,i)=>{const s=Ln(i,e.Xc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Jp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof Oo||n instanceof at||n instanceof z||n instanceof Pn)}function Mu(n,e,t){if(!Jp(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Po(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function Xa(n,e,t){if((e=A(e))instanceof Bt)return e._internalPath;if(typeof e=="string")return Fu(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const eS=new RegExp("[~\\*/\\[\\]]");function Fu(n,e,t){if(e.search(eS)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bt(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new g(m.INVALID_ARGUMENT,a+n+c)}function Xp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tS extends Ii{data(){return super.data()}}function Fo(n,e){return typeof e=="string"?Fu(n,e):e instanceof Bt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new g(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class Qi extends Uu{}function St(n,e,...t){let r=[];e instanceof Uu&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Vu).length,o=i.filter(a=>a instanceof Uo).length;if(s>1||s>0&&o>0)throw new g(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Uo extends Qi{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Uo(e,t,r)}_apply(e){const t=this._parse(e);return tg(e._query,t),new _e(e.firestore,e.converter,Va(e._query,t))}_parse(e){const t=On(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new g(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nh(l,u);const d=[];for(const p of l)d.push(Dh(a,i,p));h={arrayValue:{values:d}}}else h=Dh(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nh(l,u),h=Qp(o,s,l,u==="in"||u==="not-in");return x.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function nS(n,e,t){const r=e,i=Fo("where",n);return Uo._create(i,r,t)}class Vu extends Uu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:U.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)tg(s,a),s=Va(s,a)}(e._query,t),new _e(e.firestore,e.converter,Va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bu extends Qi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Bu(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new g(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Hn(i,s);return function(a,c){if(Jc(a)===null){const u=bo(a);u!==null&&ng(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new _e(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new wt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function rS(n,e="asc"){const t=e,r=Fo("orderBy",n);return Bu._create(r,t)}class Vo extends Qi{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Vo(e,t,r)}_apply(e){return new _e(e.firestore,e.converter,Us(e._query,this._limit,this._limitType))}}function iS(n){return Vp("limit",n),Vo._create("limit",n,"F")}function sS(n){return Vp("limitToLast",n),Vo._create("limitToLast",n,"L")}class Bo extends Qi{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Bo(e,t,r)}_apply(e){const t=eg(e,this.type,this._docOrFields,this._inclusive);return new _e(e.firestore,e.converter,function(r,i){return new wt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function oS(...n){return Bo._create("startAt",n,!0)}function aS(...n){return Bo._create("startAfter",n,!1)}class $o extends Qi{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $o(e,t,r)}_apply(e){const t=eg(e,this.type,this._docOrFields,this._inclusive);return new _e(e.firestore,e.converter,function(r,i){return new wt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function cS(...n){return $o._create("endBefore",n,!1)}function uS(...n){return $o._create("endAt",n,!0)}function eg(n,e,t,r){if(t[0]=A(t[0]),t[0]instanceof Ii)return function(i,s,o,a,c){if(!a)throw new g(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of fn(i))if(l.field.isKeyField())u.push(In(s,a.key));else{const h=a.data.field(l.field);if(Qc(h))throw new g(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new g(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ut(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=On(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new g(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const w=u[p];if(h[p].field.isKeyField()){if(typeof w!="string")throw new g(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof w}`);if(!Xc(s)&&w.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${w}' contains a slash.`);const _=s.path.child(O.fromString(w));if(!I.isDocumentKey(_))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const C=new I(_);d.push(In(o,C))}else{const _=Qp(a,c,w);d.push(_)}}return new Ut(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Dh(n,e,t){if(typeof(t=A(t))=="string"){if(t==="")throw new g(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xc(e)&&t.indexOf("/")!==-1)throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(O.fromString(t));if(!I.isDocumentKey(r))throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return In(n,new I(r))}if(t instanceof z)return In(n,t._key);throw new g(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Po(t)}.`)}function Nh(n,e){if(!Array.isArray(n)||n.length===0)throw new g(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tg(n,e){if(e.isInequality()){const r=bo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new g(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Jc(n);s!==null&&ng(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new g(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ng(n,e,t){if(!t.isEqual(e))throw new g(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class $u{convertValue(e,t="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const r={};return xn(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Oo(Q(e.latitude),Q(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const t=Lt(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=O.fromString(e);S(Jm(r));const i=new Mt(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||ee(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class lS extends $u{constructor(e){super(),this.firestore=e}convertBytes(e){return new at(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new z(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gt extends Ii{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Fo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Jr extends gt{data(e={}){return super.data(e)}}class $t{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new an(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Jr(this._firestore,this._userDataWriter,r.key,r,new an(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new g(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Jr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new an(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Jr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new an(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:hS(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function rg(n,e){return n instanceof gt&&e instanceof gt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof $t&&e instanceof $t&&n._firestore===e._firestore&&qp(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(n){n=M(n,z);const e=M(n.firestore,X);return Mp(pe(e),n._key).then(t=>qu(e,n,t))}class Mn extends $u{constructor(e){super(),this.firestore=e}convertBytes(e){return new at(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new z(this.firestore,null,t)}}function fS(n){n=M(n,z);const e=M(n.firestore,X),t=pe(e),r=new Mn(e);return N0(t,n._key).then(i=>new gt(e,r,n._key,i,new an(i!==null&&i.hasLocalMutations,!0),n.converter))}function mS(n){n=M(n,z);const e=M(n.firestore,X);return Mp(pe(e),n._key,{source:"server"}).then(t=>qu(e,n,t))}function pS(n){n=M(n,_e);const e=M(n.firestore,X),t=pe(e),r=new Mn(e);return Zp(n._query),Fp(t,n._query).then(i=>new $t(e,r,n,i))}function gS(n){n=M(n,_e);const e=M(n.firestore,X),t=pe(e),r=new Mn(e);return R0(t,n._query).then(i=>new $t(e,r,n,i))}function yS(n){n=M(n,_e);const e=M(n.firestore,X),t=pe(e),r=new Mn(e);return Fp(t,n._query,{source:"server"}).then(i=>new $t(e,r,n,i))}function Rh(n,e,t){n=M(n,z);const r=M(n.firestore,X),i=qo(n.converter,e,t);return Yi(r,[Mo(On(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,G.none())])}function xh(n,e,t,...r){n=M(n,z);const i=M(n.firestore,X),s=On(i);let o;return o=typeof(e=A(e))=="string"||e instanceof Bt?Lu(s,"updateDoc",n._key,e,t,r):Ou(s,"updateDoc",n._key,e),Yi(i,[o.toMutation(n._key,G.exists(!0))])}function vS(n){return Yi(M(n.firestore,X),[new _r(n._key,G.none())])}function wS(n,e){const t=M(n.firestore,X),r=Ks(n),i=qo(n.converter,e);return Yi(t,[Mo(On(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,G.exists(!1))]).then(()=>r)}function ig(n,...e){var t,r,i;n=A(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ja(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ja(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof z)u=M(n.firestore,X),l=wr(n._key.path),c={next:h=>{e[o]&&e[o](qu(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=M(n,_e);u=M(h.firestore,X),l=h._query;const d=new Mn(u);c={next:p=>{e[o]&&e[o](new $t(u,d,h,p))},error:e[o+1],complete:e[o+2]},Zp(n._query)}return function(h,d,p,w){const _=new Ro(w),C=new _u(d,_,p);return h.asyncQueue.enqueueAndForget(async()=>vu(await ur(h),C)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>wu(await ur(h),C))}}(pe(u),l,a,c)}function IS(n,e){return x0(pe(n=M(n,X)),Ja(e)?e:{next:e})}function Yi(n,e){return function(t,r){const i=new le;return t.asyncQueue.enqueueAndForget(async()=>o0(await Ru(t),r,i)),i.promise}(pe(n),e)}function qu(n,e,t){const r=t.docs.get(e._key),i=new Mn(n);return new gt(n,i,e._key,r,new an(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const _S={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=On(e)}set(e,t,r){this._verifyNotCommitted();const i=At(e,this._firestore),s=qo(i.converter,t,r),o=Mo(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,G.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=At(e,this._firestore);let o;return o=typeof(t=A(t))=="string"||t instanceof Bt?Lu(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ou(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,G.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=At(e,this._firestore);return this._mutations=this._mutations.concat(new _r(t._key,G.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new g(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function At(n,e){if((n=A(n)).firestore!==e)throw new g(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bS extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=On(e)}get(e){const t=At(e,this._firestore),r=new lS(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return b();const s=i[0];if(s.isFoundDocument())return new Ii(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Ii(this._firestore,r,t._key,null,t.converter);throw b()})}set(e,t,r){const i=At(e,this._firestore),s=qo(i.converter,t,r),o=Mo(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=At(e,this._firestore);let o;return o=typeof(t=A(t))=="string"||t instanceof Bt?Lu(this._dataReader,"Transaction.update",s._key,t,r,i):Ou(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=At(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=At(e,this._firestore),r=new Mn(this._firestore);return super.get(e).then(i=>new gt(this._firestore,r,t._key,i._document,new an(!1,!1),t.converter))}}function TS(n,e,t){n=M(n,X);const r=Object.assign(Object.assign({},_S),t);return function(i){if(i.maxAttempts<1)throw new g(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new le;return i.asyncQueue.enqueueAndForget(async()=>{const c=await A0(i);new S0(i.asyncQueue,c,o,s,a).run()}),a.promise}(pe(n),i=>e(new bS(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(){return new Hi("deleteField")}function kS(){return new Pu("serverTimestamp")}function AS(...n){return new J0("arrayUnion",n)}function CS(...n){return new X0("arrayRemove",n)}function DS(n){return new Z0("increment",n)}(function(n,e=!0){(function(t){vr=t})(Dn),Pt(new it("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new X(new FE(t.getProvider("auth-internal")),new $E(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mt(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),tt(Dl,"3.10.0",n),tt(Dl,"3.10.0","esm2017")})();const NS="@firebase/firestore-compat",RS="0.3.6";/**
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
 */function zu(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new g("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Ph(){if(typeof Uint8Array>"u")throw new g("unimplemented","Uint8Arrays are not available in this environment.")}function Oh(){if(!mb())throw new g("unimplemented","Blobs are unavailable in Firestore in this environment.")}class _i{constructor(e){this._delegate=e}static fromBase64String(e){return Oh(),new _i(at.fromBase64String(e))}static fromUint8Array(e){return Ph(),new _i(at.fromUint8Array(e))}toBase64(){return Oh(),this._delegate.toBase64()}toUint8Array(){return Ph(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Za(n){return xS(n,["next","error","complete"])}function xS(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class PS{enableIndexedDbPersistence(e,t){return B0(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return $0(e._delegate)}clearIndexedDbPersistence(e){return q0(e._delegate)}}class sg{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&pt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){L0(this._delegate,e,t,r)}enableNetwork(){return j0(this._delegate)}disableNetwork(){return G0(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Up("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return z0(this._delegate)}onSnapshotsInSync(e){return IS(this._delegate,e)}get app(){if(!this._appCompat)throw new g("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new lr(this,Bp(this._delegate,e))}catch(t){throw Ce(t,"collection()","Firestore.collection()")}}doc(e){try{return new qe(this,Ks(this._delegate,e))}catch(t){throw Ce(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ae(this,M0(this._delegate,e))}catch(t){throw Ce(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return TS(this._delegate,t=>e(new og(this,t)))}batch(){return pe(this._delegate),new ag(new ES(this._delegate,e=>Yi(this._delegate,e)))}loadBundle(e){return K0(this._delegate,e)}namedQuery(e){return W0(this._delegate,e).then(t=>t?new Ae(this,t):null)}}class zo extends $u{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(new at(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return qe.forKey(t,this.firestore,null)}}function OS(n){PE(n)}class og{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new zo(e)}get(e){const t=cn(e);return this._delegate.get(t).then(r=>new Ei(this._firestore,new gt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=cn(e);return r?(zu("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=cn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=cn(e);return this._delegate.delete(t),this}}class ag{constructor(e){this._delegate=e}set(e,t,r){const i=cn(e);return r?(zu("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=cn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=cn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class An{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Jr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new bi(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=An.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new An(e,new zo(e),t),i.set(t,s)),s}}An.INSTANCES=new WeakMap;class qe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new zo(e)}static forPath(e,t,r){if(e.length%2!==0)throw new g("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new qe(t,new z(t._delegate,r,new I(e)))}static forKey(e,t,r){return new qe(t,new z(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new lr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new lr(this.firestore,Bp(this._delegate,e))}catch(t){throw Ce(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=A(e),e instanceof z?$p(this._delegate,e):!1}set(e,t){t=zu("DocumentReference.set",t);try{return t?Rh(this._delegate,e,t):Rh(this._delegate,e)}catch(r){throw Ce(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?xh(this._delegate,e):xh(this._delegate,e,t,...r)}catch(i){throw Ce(i,"updateDoc()","DocumentReference.update()")}}delete(){return vS(this._delegate)}onSnapshot(...e){const t=cg(e),r=ug(e,i=>new Ei(this.firestore,new gt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ig(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=fS(this._delegate):(e==null?void 0:e.source)==="server"?t=mS(this._delegate):t=dS(this._delegate),t.then(r=>new Ei(this.firestore,new gt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new qe(this.firestore,e?this._delegate.withConverter(An.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ce(n,e,t){return n.message=n.message.replace(e,t),n}function cg(n){for(const e of n)if(typeof e=="object"&&!Za(e))return e;return{}}function ug(n,e){var t,r;let i;return Za(n[0])?i=n[0]:Za(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ei{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new qe(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return rg(this._delegate,e._delegate)}}class bi extends Ei{data(e){const t=this._delegate.data(e);return OE(t!==void 0),t}}class Ae{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new zo(e)}where(e,t,r){try{return new Ae(this.firestore,St(this._delegate,nS(e,t,r)))}catch(i){throw Ce(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ae(this.firestore,St(this._delegate,rS(e,t)))}catch(r){throw Ce(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ae(this.firestore,St(this._delegate,iS(e)))}catch(t){throw Ce(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ae(this.firestore,St(this._delegate,sS(e)))}catch(t){throw Ce(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ae(this.firestore,St(this._delegate,oS(...e)))}catch(t){throw Ce(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ae(this.firestore,St(this._delegate,aS(...e)))}catch(t){throw Ce(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ae(this.firestore,St(this._delegate,cS(...e)))}catch(t){throw Ce(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ae(this.firestore,St(this._delegate,uS(...e)))}catch(t){throw Ce(t,"endAt()","Query.endAt()")}}isEqual(e){return qp(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=gS(this._delegate):(e==null?void 0:e.source)==="server"?t=yS(this._delegate):t=pS(this._delegate),t.then(r=>new ec(this.firestore,new $t(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=cg(e),r=ug(e,i=>new ec(this.firestore,new $t(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ig(this._delegate,t,r)}withConverter(e){return new Ae(this.firestore,e?this._delegate.withConverter(An.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class LS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new bi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ec{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ae(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new bi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new LS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new bi(this._firestore,r))})}isEqual(e){return rg(this._delegate,e._delegate)}}class lr extends Ae{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new qe(this.firestore,e):null}doc(e){try{return e===void 0?new qe(this.firestore,Ks(this._delegate)):new qe(this.firestore,Ks(this._delegate,e))}catch(t){throw Ce(t,"doc()","CollectionReference.doc()")}}add(e){return wS(this._delegate,e).then(t=>new qe(this.firestore,t))}isEqual(e){return $p(this._delegate,e._delegate)}withConverter(e){return new lr(this.firestore,e?this._delegate.withConverter(An.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function cn(n){return M(n,z)}/**
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
 */class ju{constructor(...e){this._delegate=new Bt(...e)}static documentId(){return new ju(te.keyField().canonicalString())}isEqual(e){return e=A(e),e instanceof Bt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class nn{constructor(e){this._delegate=e}static serverTimestamp(){const e=kS();return e._methodName="FieldValue.serverTimestamp",new nn(e)}static delete(){const e=SS();return e._methodName="FieldValue.delete",new nn(e)}static arrayUnion(...e){const t=AS(...e);return t._methodName="FieldValue.arrayUnion",new nn(t)}static arrayRemove(...e){const t=CS(...e);return t._methodName="FieldValue.arrayRemove",new nn(t)}static increment(e){const t=DS(e);return t._methodName="FieldValue.increment",new nn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const MS={Firestore:sg,GeoPoint:Oo,Timestamp:K,Blob:_i,Transaction:og,WriteBatch:ag,DocumentReference:qe,DocumentSnapshot:Ei,Query:Ae,QueryDocumentSnapshot:bi,QuerySnapshot:ec,CollectionReference:lr,FieldPath:ju,FieldValue:nn,setLogLevel:OS,CACHE_SIZE_UNLIMITED:V0};function FS(n,e){n.INTERNAL.registerComponent(new it("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},MS)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n){FS(n,(e,t)=>new sg(e,t,new PS)),n.registerVersion(NS,RS)}US(Qs);export{Qs as f};

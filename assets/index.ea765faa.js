const Ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Ce();const N={};function Pe(e){N.context=e}const Oe=(e,t)=>e===t,C=Symbol("solid-proxy"),he=Symbol("solid-track"),G={equals:Oe};let ge=me;const P={},_=1,H=2,pe={owned:null,cleanups:null,context:null,owner:null};var g=null;let U=null,d=null,D=null,y=null,v=null,re=0;function Q(e,t){const n=d,s=g,r=e.length===0?pe:{owned:null,cleanups:null,context:null,owner:t||s};g=r,d=null;try{return ie(()=>e(()=>le(r)),!0)}finally{d=n,g=s}}function E(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,pending:P,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.pending!==P?n.pending:n.value)),oe(n,r));return[be.bind(n),s]}function Te(e,t,n){const s=z(e,t,!0,_);O(s)}function M(e,t,n){const s=z(e,t,!1,_);O(s)}function Le(e,t,n){ge=Ue;const s=z(e,t,!1,_);s.user=!0,v?v.push(s):O(s)}function q(e,t,n){n=n?Object.assign({},G,n):G;const s=z(e,t,!0,0);return s.pending=P,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),be.bind(s)}function ye(e){if(D)return e();let t;const n=D=[];try{t=e()}finally{D=null}return ie(()=>{for(let s=0;s<n.length;s+=1){const r=n[s];if(r.pending!==P){const o=r.pending;r.pending=P,oe(r,o)}}},!1),t}function R(e){let t,n=d;return d=null,t=e(),d=n,t}function De(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function we(){return d}function Ie(e){const t=Symbol("context");return{id:t,Provider:Re(t),defaultValue:e}}function Me(e){const t=q(e);return q(()=>te(t()))}function be(){const e=U;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===_||e?O(this):W(this),y=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function oe(e,t,n){if(D)return e.pending===P&&D.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&ie(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r];s&&U.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?y.push(o):v.push(o),o.observers&&ve(o)),s||(o.state=_)}if(y.length>1e6)throw y=[],new Error},!1),t}function O(e){if(!e.fn)return;le(e);const t=g,n=d,s=re;d=g=e,qe(e,e.value,s),d=n,g=t}function qe(e,t,n){let s;try{s=e.fn(t)}catch(r){$e(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?oe(e,s):e.value=s,e.updatedAt=n)}function z(e,t,n,s=_,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==pe&&(g.owned?g.owned.push(o):g.owned=[o]),o}function I(e){const t=U;if(e.state===0||t)return;if(e.state===H||t)return W(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===_||t)O(e);else if(e.state===H||t){const r=y;y=null,W(e,n[0]),y=r}}function ie(e,t){if(y)return e();let n=!1;t||(y=[]),v?n=!0:v=[],re++;try{const s=e();return Be(n),s}catch(s){$e(s)}finally{y=null,n||(v=null)}}function Be(e){y&&(me(y),y=null),!e&&(v.length?ye(()=>{ge(v),v=null}):v=null)}function me(e){for(let t=0;t<e.length;t++)I(e[t])}function Ue(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:I(r)}N.context&&Pe();const s=e.length;for(t=0;t<n;t++)I(e[t]);for(t=s;t<e.length;t++)I(e[t])}function W(e,t){const n=U;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===_||n?r!==t&&I(r):(r.state===H||n)&&W(r,t))}}function ve(e){const t=U;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=H,s.pure?y.push(s):v.push(s),s.observers&&ve(s))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),i=n.observerSlots.pop();s<r.length&&(o.sourceSlots[i]=s,r[s]=o,n.observerSlots[s]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function $e(e){throw e}function te(e){if(typeof e=="function"&&!e.length)return te(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=te(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Re(e){return function(n){let s;return Te(()=>s=R(()=>(g.context={[e]:n.value},Me(()=>n.children)))),s}}const Ke=Symbol("fallback");function ce(e){for(let t=0;t<e.length;t++)e[t]()}function Fe(e,t,n={}){let s=[],r=[],o=[],i=0,l=t.length>1?[]:null;return De(()=>ce(o)),()=>{let c=e()||[],u,f;return c[he],R(()=>{let a=c.length,p,w,T,K,F,A,S,x,j;if(a===0)i!==0&&(ce(o),o=[],s=[],r=[],i=0,l&&(l=[])),n.fallback&&(s=[Ke],r[0]=Q(ke=>(o[0]=ke,n.fallback())),i=1);else if(i===0){for(r=new Array(a),f=0;f<a;f++)s[f]=c[f],r[f]=Q(h);i=a}else{for(T=new Array(a),K=new Array(a),l&&(F=new Array(a)),A=0,S=Math.min(i,a);A<S&&s[A]===c[A];A++);for(S=i-1,x=a-1;S>=A&&x>=A&&s[S]===c[x];S--,x--)T[x]=r[S],K[x]=o[S],l&&(F[x]=l[S]);for(p=new Map,w=new Array(x+1),f=x;f>=A;f--)j=c[f],u=p.get(j),w[f]=u===void 0?-1:u,p.set(j,f);for(u=A;u<=S;u++)j=s[u],f=p.get(j),f!==void 0&&f!==-1?(T[f]=r[u],K[f]=o[u],l&&(F[f]=l[u]),f=w[f],p.set(j,f)):o[u]();for(f=A;f<a;f++)f in T?(r[f]=T[f],o[f]=K[f],l&&(l[f]=F[f],l[f](f))):r[f]=Q(h);r=r.slice(0,i=a),s=c.slice(0)}return r});function h(a){if(o[f]=a,l){const[p,w]=E(f);return l[f]=w,t(c[f],p)}return t(c[f])}}}function b(e,t){return R(()=>e(t||{}))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return q(Fe(()=>e.each,e.children,t||void 0))}function J(e){let t=!1;const n=q(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return q(()=>{const s=n();if(s){const r=e.children;return(t=typeof r=="function"&&r.length>0)?R(()=>r(s)):r}return e.fallback})}function Qe(e,t,n){let s=n.length,r=t.length,o=s,i=0,l=0,c=t[r-1].nextSibling,u=null;for(;i<r||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===i){const f=o<s?l?n[l-1].nextSibling:n[o-l]:c;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;i<r;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],f),t[r]=n[o]}else{if(!u){u=new Map;let h=l;for(;h<o;)u.set(n[h],h++)}const f=u.get(t[i]);if(f!=null)if(l<f&&f<o){let h=i,a=1,p;for(;++h<r&&h<o&&!((p=u.get(t[h]))==null||p!==f+a);)a++;if(a>f-l){const w=t[i];for(;l<f;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const ue="_$DX_DELEGATE";function Ge(e,t,n){let s;return Q(r=>{s=r,t===document?e():$(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function m(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Se(e,t=window.document){const n=t[ue]||(t[ue]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,He))}}function $(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return V(e,t,s,n);M(r=>V(e,t(),r,n),s)}function He(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),N.registry&&!N.done&&(N.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s(r,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function V(e,t,n,s,r){for(N.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=s!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(N.context)return n;if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=k(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(N.context)return n;n=k(e,n,s)}else{if(o==="function")return M(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(ne(l,t,r))return M(()=>n=V(e,l,n,s,!0)),()=>n;if(N.context){for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=k(e,n,s),i)return n}else Array.isArray(n)?n.length===0?ae(e,l,s):Qe(e,n,l):(n&&k(e),ae(e,l));n=l}else if(t instanceof Node){if(N.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=k(e,n,s,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n){let s=!1;for(let r=0,o=t.length;r<o;r++){let i=t[r],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=ne(e,i)||s;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();s=ne(e,Array.isArray(i)?i:[i])||s}else e.push(i),s=!0;else e.push(document.createTextNode(i.toString()))}return s}function ae(e,t,n){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function k(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(r!==l){const c=l.parentNode===e;!o&&!i?c?e.replaceChild(r,l):e.insertBefore(r,n):c&&l.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const We=m('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),Je=m('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),Ve=m('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Del</div>'),Xe=m('<div class="group flex flex-row gap-1 items-baseline"></div>'),Ye=m('<div class=""></div>'),Ze=e=>{const[t,n]=E(!1),[s,r]=E(e.projectName),o=()=>{n(!1),e.setName(s())};return(()=>{const i=Xe.cloneNode(!0);return $(i,b(J,{get when(){return t()},get fallback(){return(()=>{const l=Ye.cloneNode(!0);return $(l,s),l})()},get children(){const l=We.cloneNode(!0),c=l.firstChild;return l.addEventListener("submit",o),c.$$input=u=>r(u?.currentTarget.value),c.addEventListener("blur",o),M(()=>c.value=s()),l}}),null),$(i,b(J,{get when(){return!t()},get children(){return[(()=>{const l=Je.cloneNode(!0);return l.$$click=()=>n(!0),l})(),(()=>{const l=Ve.cloneNode(!0);return l.$$click=()=>e.deleteProject(),l})()]}}),null),i})()};Se(["input","click"]);var ze=["Shift","Meta","Alt","Control"],et=typeof navigator=="object"&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function ee(e,t){return typeof e.getModifierState=="function"&&e.getModifierState(t)}function tt(e){return e.trim().split(" ").map(function(t){var n=t.split(/\b\+/),s=n.pop();return[n=n.map(function(r){return r==="$mod"?et:r}),s]})}function nt(e,t){var n;t===void 0&&(t={});var s=(n=t.timeout)!=null?n:1e3,r=Object.keys(e).map(function(l){return[tt(l),e[l]]}),o=new Map,i=null;return function(l){l instanceof KeyboardEvent&&(r.forEach(function(c){var u=c[0],f=c[1],h=o.get(u)||u;(function(a,p){return!(p[1].toUpperCase()!==a.key.toUpperCase()&&p[1]!==a.code||p[0].find(function(w){return!ee(a,w)})||ze.find(function(w){return!p[0].includes(w)&&p[1]!==w&&ee(a,w)}))})(l,h[0])?h.length>1?o.set(u,h.slice(1)):(o.delete(u),f(l)):ee(l,l.key)||o.delete(u)}),i&&clearTimeout(i),i=setTimeout(o.clear.bind(o),s))}}function st(e,t,n){var s;n===void 0&&(n={});var r=(s=n.event)!=null?s:"keydown",o=nt(t,n);return e.addEventListener(r,o),function(){e.removeEventListener(r,o)}}const rt=e=>t=>t.target.tagName!=="INPUT"&&e(),ot=m('<div class="w-1/5 h-screen p-4 flex overflow-y-scroll"><div class="my-auto"></div></div>'),it=()=>{const[e,t]=E([]);let n=0;for(;n<20;)t([...e(),"project "+n]),n+=1;return st(window,{l:rt(()=>"adding project")}),(()=>{const s=ot.cloneNode(!0),r=s.firstChild;return $(r,b(Ae,{get each(){return e()},children:o=>b(Ze,{projectName:o,setName:i=>console.log(i),deleteProject:()=>{}})})),s})()},Ne=Symbol("store-raw"),X=Symbol("store-node"),lt=Symbol("store-name");function xe(e,t){let n=e[C];if(!n){Object.defineProperty(e,C,{value:n=new Proxy(e,ut)});const s=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,i=s.length;o<i;o++){const l=s[o];if(r[l].get){const c=r[l].get.bind(n);Object.defineProperty(e,l,{get:c})}}}return n}function Y(e){return e!=null&&typeof e=="object"&&(e[C]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function B(e,t=new Set){let n,s,r,o;if(n=e!=null&&e[Ne])return n;if(!Y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,l=e.length;i<l;i++)r=e[i],(s=B(r,t))!==r&&(e[i]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,u=i.length;c<u;c++)o=i[c],!l[o].get&&(r=e[o],(s=B(r,t))!==r&&(e[o]=s))}return e}function fe(e){let t=e[X];return t||Object.defineProperty(e,X,{value:t={}}),t}function se(e,t,n){return e[t]||(e[t]=_e(n,!0))}function ft(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===C||t===X||t===lt||(delete n.value,delete n.writable,n.get=()=>e[C][t]),n}function Ee(e){if(we()){const t=fe(e);(t._||(t._=_e()))()}}function ct(e){return Ee(e),Reflect.ownKeys(e)}function _e(e,t){const[n,s]=E(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=s,n}const ut={get(e,t,n){if(t===Ne)return e;if(t===C)return n;if(t===he)return Ee(e);const s=fe(e),r=s[t];let o=r?s[t]():e[t];if(t===X||t==="__proto__")return o;if(!r){const i=Object.getOwnPropertyDescriptor(e,t);we()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(o=se(s,t,o)())}return Y(o)?xe(o):o},set(){return!0},deleteProperty(){return!0},ownKeys:ct,getOwnPropertyDescriptor:ft};function Z(e,t,n){if(e[t]===n)return;const s=e[t],r=e.length;n===void 0?delete e[t]:e[t]=n;let o=fe(e),i;(i=se(o,t,s))&&i.$(()=>n),Array.isArray(e)&&e.length!==r&&(i=se(o,"length",r))&&i.$(e.length),(i=o._)&&i.$()}function je(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const r=n[s];Z(e,r,t[r])}}function at(e,t){if(typeof t=="function"&&(t=t(e)),t=B(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const r=t[n];e[n]!==r&&Z(e,n,r)}Z(e,"length",s)}else je(e,t)}function L(e,t,n=[]){let s,r=e;if(t.length>1){s=t.shift();const i=typeof s,l=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)L(e,[s[c]].concat(t),n);return}else if(l&&i==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&L(e,[c].concat(t),n);return}else if(l&&i==="object"){const{from:c=0,to:u=e.length-1,by:f=1}=s;for(let h=c;h<=u;h+=f)L(e,[h].concat(t),n);return}else if(t.length>1){L(e[s],t,[s].concat(n));return}r=e[s],n=[s].concat(n)}let o=t[0];typeof o=="function"&&(o=o(r,n),o===r)||s===void 0&&o==null||(o=B(o),s===void 0||Y(r)&&Y(o)&&!Array.isArray(o)?je(r,o):Z(e,s,o))}function dt(e,t){const n=B(e||{}),s=Array.isArray(n),r=xe(n);function o(...i){ye(()=>{s&&i.length===1?at(n,i[0]):L(n,i)})}return[r,o]}const de="quests",ht=Ie({});function gt(e){const t=localStorage.getItem(de),[n,s]=dt(t?JSON.parse(t):{});Le(()=>localStorage.setItem(de,JSON.stringify(n)));const r=[n,{add(o,i){s(l=>({}))},update(o,i){s(l=>({}))}}];return b(ht.Provider,{value:r,get children(){return e.children}})}const pt=m('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),yt=m('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),wt=m('<div class="group flex flex-row gap-1 items-baseline w-fit"></div>'),bt=m('<div class="max-w-lg truncate"></div>'),mt=e=>{const[t,n]=E(!1),[s,r]=E(e.questName),o=()=>{n(!1),e.setName(s())};return(()=>{const i=wt.cloneNode(!0);return $(i,b(J,{get when(){return t()},get fallback(){return(()=>{const l=bt.cloneNode(!0);return $(l,s),l})()},get children(){const l=pt.cloneNode(!0),c=l.firstChild;return l.addEventListener("submit",o),c.$$input=u=>r(u?.currentTarget.value),c.addEventListener("blur",o),M(()=>c.value=s()),l}}),null),$(i,b(J,{get when(){return!t()},get children(){const l=yt.cloneNode(!0);return l.$$click=()=>n(!0),l}}),null),i})()};Se(["input","click"]);const vt=m('<div class="w-full"><div class="mx-auto w-96"></div></div>'),$t=()=>{const[e,t]=E([]);let n=0;for(;n<20;)t([...e(),"quest "+n]),n+=1;return t([...e(),"que jflkjsdff lkjs dflkjsd flkjs dfklsjd f lksdjf l flksjdf lksjd flskjdfksdj flskdfj sdfst "+n]),(()=>{const s=vt.cloneNode(!0),r=s.firstChild;return $(r,b(Ae,{get each(){return e()},children:o=>b(mt,{questName:o,setName:i=>console.log(i)})})),s})()},At=m('<div class="flex flex-row"></div>'),St=()=>b(gt,{get children(){const e=At.cloneNode(!0);return $(e,b(it,{}),null),$(e,b($t,{}),null),e}});Ge(()=>b(St,{}),document.getElementById("root"));

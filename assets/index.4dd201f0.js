const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};Te();const x={};function Le(e){x.context=e}const De=(e,t)=>e===t,O=Symbol("solid-proxy"),he=Symbol("solid-track"),G={equals:De};let ge=me;const k={},_=1,H=2,pe={owned:null,cleanups:null,context:null,owner:null};var g=null;let q=null,h=null,D=null,y=null,v=null,oe=0;function F(e,t){const n=h,s=g,o=e.length===0?pe:{owned:null,cleanups:null,context:null,owner:t||s};g=o,h=null;try{return ie(()=>e(()=>le(o)),!0)}finally{h=n,g=s}}function E(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,pending:k,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.pending!==k?n.pending:n.value)),re(n,o));return[be.bind(n),s]}function Ie(e,t,n){const s=z(e,t,!0,_);j(s)}function M(e,t,n){const s=z(e,t,!1,_);j(s)}function Me(e,t,n){ge=Fe;const s=z(e,t,!1,_);s.user=!0,v?v.push(s):j(s)}function B(e,t,n){n=n?Object.assign({},G,n):G;const s=z(e,t,!0,0);return s.pending=k,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,j(s),be.bind(s)}function ye(e){if(D)return e();let t;const n=D=[];try{t=e()}finally{D=null}return ie(()=>{for(let s=0;s<n.length;s+=1){const o=n[s];if(o.pending!==k){const r=o.pending;o.pending=k,re(o,r)}}},!1),t}function R(e){let t,n=h;return h=null,t=e(),h=n,t}function Be(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function we(){return h}function Ue(e){const t=Symbol("context");return{id:t,Provider:Ge(t),defaultValue:e}}function qe(e){let t;return(t=Se(g,e.id))!==void 0?t:e.defaultValue}function Re(e){const t=B(e);return B(()=>te(t()))}function be(){const e=q;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===_||e?j(this):V(this),y=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function re(e,t,n){if(D)return e.pending===k&&D.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&ie(()=>{for(let o=0;o<e.observers.length;o+=1){const r=e.observers[o];s&&q.disposed.has(r),(s&&!r.tState||!s&&!r.state)&&(r.pure?y.push(r):v.push(r),r.observers&&ve(r)),s||(r.state=_)}if(y.length>1e6)throw y=[],new Error},!1),t}function j(e){if(!e.fn)return;le(e);const t=g,n=h,s=oe;h=g=e,Ke(e,e.value,s),h=n,g=t}function Ke(e,t,n){let s;try{s=e.fn(t)}catch(o){$e(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?re(e,s):e.value=s,e.updatedAt=n)}function z(e,t,n,s=_,o){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==pe&&(g.owned?g.owned.push(r):g.owned=[r]),r}function I(e){const t=q;if(e.state===0||t)return;if(e.state===H||t)return V(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===_||t)j(e);else if(e.state===H||t){const o=y;y=null,V(e,n[0]),y=o}}function ie(e,t){if(y)return e();let n=!1;t||(y=[]),v?n=!0:v=[],oe++;try{const s=e();return Qe(n),s}catch(s){$e(s)}finally{y=null,n||(v=null)}}function Qe(e){y&&(me(y),y=null),!e&&(v.length?ye(()=>{ge(v),v=null}):v=null)}function me(e){for(let t=0;t<e.length;t++)I(e[t])}function Fe(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:I(o)}x.context&&Le();const s=e.length;for(t=0;t<n;t++)I(e[t]);for(t=s;t<e.length;t++)I(e[t])}function V(e,t){const n=q;e.state=0;for(let s=0;s<e.sources.length;s+=1){const o=e.sources[s];o.sources&&(o.state===_||n?o!==t&&I(o):(o.state===H||n)&&V(o,t))}}function ve(e){const t=q;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=H,s.pure?y.push(s):v.push(s),s.observers&&ve(s))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const r=o.pop(),i=n.observerSlots.pop();s<o.length&&(r.sourceSlots[i]=s,o[s]=r,n.observerSlots[s]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function $e(e){throw e}function Se(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Se(e.owner,t):void 0}function te(e){if(typeof e=="function"&&!e.length)return te(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=te(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ge(e){return function(n){let s;return Ie(()=>s=R(()=>(g.context={[e]:n.value},Re(()=>n.children)))),s}}const He=Symbol("fallback");function ue(e){for(let t=0;t<e.length;t++)e[t]()}function Ve(e,t,n={}){let s=[],o=[],r=[],i=0,l=t.length>1?[]:null;return Be(()=>ue(r)),()=>{let u=e()||[],f,c;return u[he],R(()=>{let a=u.length,p,w,T,K,Q,S,A,N,P;if(a===0)i!==0&&(ue(r),r=[],s=[],o=[],i=0,l&&(l=[])),n.fallback&&(s=[He],o[0]=F(je=>(r[0]=je,n.fallback())),i=1);else if(i===0){for(o=new Array(a),c=0;c<a;c++)s[c]=u[c],o[c]=F(d);i=a}else{for(T=new Array(a),K=new Array(a),l&&(Q=new Array(a)),S=0,A=Math.min(i,a);S<A&&s[S]===u[S];S++);for(A=i-1,N=a-1;A>=S&&N>=S&&s[A]===u[N];A--,N--)T[N]=o[A],K[N]=r[A],l&&(Q[N]=l[A]);for(p=new Map,w=new Array(N+1),c=N;c>=S;c--)P=u[c],f=p.get(P),w[c]=f===void 0?-1:f,p.set(P,c);for(f=S;f<=A;f++)P=s[f],c=p.get(P),c!==void 0&&c!==-1?(T[c]=o[f],K[c]=r[f],l&&(Q[c]=l[f]),c=w[c],p.set(P,c)):r[f]();for(c=S;c<a;c++)c in T?(o[c]=T[c],r[c]=K[c],l&&(l[c]=Q[c],l[c](c))):o[c]=F(d);o=o.slice(0,i=a),s=u.slice(0)}return o});function d(a){if(r[c]=a,l){const[p,w]=E(c);return l[c]=w,t(u[c],p)}return t(u[c])}}}function b(e,t){return R(()=>e(t||{}))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return B(Ve(()=>e.each,e.children,t||void 0))}function W(e){let t=!1;const n=B(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return B(()=>{const s=n();if(s){const o=e.children;return(t=typeof o=="function"&&o.length>0)?R(()=>o(s)):o}return e.fallback})}function We(e,t,n){let s=n.length,o=t.length,r=s,i=0,l=0,u=t[o-1].nextSibling,f=null;for(;i<o||l<r;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[r-1];)o--,r--;if(o===i){const c=r<s?l?n[l-1].nextSibling:n[r-l]:u;for(;l<r;)e.insertBefore(n[l++],c)}else if(r===l)for(;i<o;)(!f||!f.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[r-1]&&n[l]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--r],c),t[o]=n[r]}else{if(!f){f=new Map;let d=l;for(;d<r;)f.set(n[d],d++)}const c=f.get(t[i]);if(c!=null)if(l<c&&c<r){let d=i,a=1,p;for(;++d<o&&d<r&&!((p=f.get(t[d]))==null||p!==c+a);)a++;if(a>c-l){const w=t[i];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const fe="_$DX_DELEGATE";function Je(e,t,n){let s;return F(o=>{s=o,t===document?e():$(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function m(e,t,n){const s=document.createElement("template");s.innerHTML=e;let o=s.content.firstChild;return n&&(o=o.firstChild),o}function xe(e,t=window.document){const n=t[fe]||(t[fe]=new Set);for(let s=0,o=e.length;s<o;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Xe))}}function $(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return J(e,t,s,n);M(o=>J(e,t(),o,n),s)}function Xe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s(o,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function J(e,t,n,s,o){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,i=s!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(x.context)return n;if(r==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=C(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(x.context)return n;n=C(e,n,s)}else{if(r==="function")return M(()=>{let l=t();for(;typeof l=="function";)l=l();n=J(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(ne(l,t,o))return M(()=>n=J(e,l,n,s,!0)),()=>n;if(x.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=C(e,n,s),i)return n}else Array.isArray(n)?n.length===0?ae(e,l,s):We(e,n,l):(n&&C(e),ae(e,l));n=l}else if(t instanceof Node){if(x.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=C(e,n,s,t);C(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n){let s=!1;for(let o=0,r=t.length;o<r;o++){let i=t[o],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=ne(e,i)||s;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();s=ne(e,Array.isArray(i)?i:[i])||s}else e.push(i),s=!0;else e.push(document.createTextNode(i.toString()))}return s}function ae(e,t,n){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function C(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let r=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const u=l.parentNode===e;!r&&!i?u?e.replaceChild(o,l):e.insertBefore(o,n):u&&l.remove()}else r=!0}}else e.insertBefore(o,n);return[o]}const Ne=Symbol("store-raw"),X=Symbol("store-node"),Ye=Symbol("store-name");function Ee(e,t){let n=e[O];if(!n){Object.defineProperty(e,O,{value:n=new Proxy(e,et)});const s=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let r=0,i=s.length;r<i;r++){const l=s[r];if(o[l].get){const u=o[l].get.bind(n);Object.defineProperty(e,l,{get:u})}}}return n}function Y(e){return e!=null&&typeof e=="object"&&(e[O]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function U(e,t=new Set){let n,s,o,r;if(n=e!=null&&e[Ne])return n;if(!Y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,l=e.length;i<l;i++)o=e[i],(s=U(o,t))!==o&&(e[i]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let u=0,f=i.length;u<f;u++)r=i[u],!l[r].get&&(o=e[r],(s=U(o,t))!==o&&(e[r]=s))}return e}function ce(e){let t=e[X];return t||Object.defineProperty(e,X,{value:t={}}),t}function se(e,t,n){return e[t]||(e[t]=Pe(n,!0))}function Ze(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===O||t===X||t===Ye||(delete n.value,delete n.writable,n.get=()=>e[O][t]),n}function _e(e){if(we()){const t=ce(e);(t._||(t._=Pe()))()}}function ze(e){return _e(e),Reflect.ownKeys(e)}function Pe(e,t){const[n,s]=E(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=s,n}const et={get(e,t,n){if(t===Ne)return e;if(t===O)return n;if(t===he)return _e(e);const s=ce(e),o=s[t];let r=o?s[t]():e[t];if(t===X||t==="__proto__")return r;if(!o){const i=Object.getOwnPropertyDescriptor(e,t);we()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(r=se(s,t,r)())}return Y(r)?Ee(r):r},set(){return!0},deleteProperty(){return!0},ownKeys:ze,getOwnPropertyDescriptor:Ze};function Z(e,t,n){if(e[t]===n)return;const s=e[t],o=e.length;n===void 0?delete e[t]:e[t]=n;let r=ce(e),i;(i=se(r,t,s))&&i.$(()=>n),Array.isArray(e)&&e.length!==o&&(i=se(r,"length",o))&&i.$(e.length),(i=r._)&&i.$()}function Ce(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const o=n[s];Z(e,o,t[o])}}function tt(e,t){if(typeof t=="function"&&(t=t(e)),t=U(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const o=t[n];e[n]!==o&&Z(e,n,o)}Z(e,"length",s)}else Ce(e,t)}function L(e,t,n=[]){let s,o=e;if(t.length>1){s=t.shift();const i=typeof s,l=Array.isArray(e);if(Array.isArray(s)){for(let u=0;u<s.length;u++)L(e,[s[u]].concat(t),n);return}else if(l&&i==="function"){for(let u=0;u<e.length;u++)s(e[u],u)&&L(e,[u].concat(t),n);return}else if(l&&i==="object"){const{from:u=0,to:f=e.length-1,by:c=1}=s;for(let d=u;d<=f;d+=c)L(e,[d].concat(t),n);return}else if(t.length>1){L(e[s],t,[s].concat(n));return}o=e[s],n=[s].concat(n)}let r=t[0];typeof r=="function"&&(r=r(o,n),r===o)||s===void 0&&r==null||(r=U(r),s===void 0||Y(o)&&Y(r)&&!Array.isArray(r)?Ce(o,r):Z(e,s,r))}function nt(e,t){const n=U(e||{}),s=Array.isArray(n),o=Ee(n);function r(...i){ye(()=>{s&&i.length===1?tt(n,i[0]):L(n,i)})}return[o,r]}const de="quests",Oe=Ue({});function st(e){const t=localStorage.getItem(de),[n,s]=nt(t?JSON.parse(t):{});Me(()=>localStorage.setItem(de,JSON.stringify(n)));const o=[n,{setSelectedProject(r){s({selectedProject:r})}}];return b(Oe.Provider,{value:o,get children(){return e.children}})}function ke(){return qe(Oe)}const ot=m('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),rt=m('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),it=m('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Del</div>'),lt=m('<div class="group flex flex-row gap-1 items-baseline"></div>'),ct=m('<div class="cursor-pointer"></div>'),ut=e=>{const[,{setSelectedProject:t}]=ke(),[n,s]=E(!1),[o,r]=E(e.projectName),i=()=>{s(!1),e.setName(o())},l=()=>{t(e.projectName)};return(()=>{const u=lt.cloneNode(!0);return $(u,b(W,{get when(){return n()},get fallback(){return(()=>{const f=ct.cloneNode(!0);return f.$$click=l,$(f,o),f})()},get children(){const f=ot.cloneNode(!0),c=f.firstChild;return f.addEventListener("submit",i),c.$$input=d=>r(d?.currentTarget.value),c.addEventListener("blur",i),M(()=>c.value=o()),f}}),null),$(u,b(W,{get when(){return!n()},get children(){return[(()=>{const f=rt.cloneNode(!0);return f.$$click=()=>s(!0),f})(),(()=>{const f=it.cloneNode(!0);return f.$$click=()=>e.deleteProject(),f})()]}}),null),u})()};xe(["input","click"]);var ft=["Shift","Meta","Alt","Control"],at=typeof navigator=="object"&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function ee(e,t){return typeof e.getModifierState=="function"&&e.getModifierState(t)}function dt(e){return e.trim().split(" ").map(function(t){var n=t.split(/\b\+/),s=n.pop();return[n=n.map(function(o){return o==="$mod"?at:o}),s]})}function ht(e,t){var n;t===void 0&&(t={});var s=(n=t.timeout)!=null?n:1e3,o=Object.keys(e).map(function(l){return[dt(l),e[l]]}),r=new Map,i=null;return function(l){l instanceof KeyboardEvent&&(o.forEach(function(u){var f=u[0],c=u[1],d=r.get(f)||f;(function(a,p){return!(p[1].toUpperCase()!==a.key.toUpperCase()&&p[1]!==a.code||p[0].find(function(w){return!ee(a,w)})||ft.find(function(w){return!p[0].includes(w)&&p[1]!==w&&ee(a,w)}))})(l,d[0])?d.length>1?r.set(f,d.slice(1)):(r.delete(f),c(l)):ee(l,l.key)||r.delete(f)}),i&&clearTimeout(i),i=setTimeout(r.clear.bind(r),s))}}function gt(e,t,n){var s;n===void 0&&(n={});var o=(s=n.event)!=null?s:"keydown",r=ht(t,n);return e.addEventListener(o,r),function(){e.removeEventListener(o,r)}}const pt=e=>t=>t.target.tagName!=="INPUT"&&e(),yt=m('<div class="w-1/5 h-screen p-4 flex overflow-y-scroll"><div class="my-auto"></div></div>'),wt=()=>{const[e,t]=E([]);let n=0;for(;n<20;)t([...e(),"project "+n]),n+=1;return gt(window,{l:pt(()=>"adding project")}),(()=>{const s=yt.cloneNode(!0),o=s.firstChild;return $(o,b(Ae,{get each(){return e()},children:r=>b(ut,{projectName:r,setName:i=>console.log(i),deleteProject:()=>{}})})),s})()},bt=m('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),mt=m('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),vt=m('<div class="group flex flex-row gap-1 items-baseline w-fit"></div>'),$t=m('<div class="max-w-lg truncate cursor-pointer"></div>'),St=e=>{const[t,n]=E(!1),[s,o]=E(e.questName),r=()=>{n(!1),e.setName(s())};return(()=>{const i=vt.cloneNode(!0);return $(i,b(W,{get when(){return t()},get fallback(){return(()=>{const l=$t.cloneNode(!0);return l.$$click=()=>e.checkQuest(),$(l,s),l})()},get children(){const l=bt.cloneNode(!0),u=l.firstChild;return l.addEventListener("submit",r),u.$$input=f=>o(f?.currentTarget.value),u.addEventListener("blur",r),M(()=>u.value=s()),l}}),null),$(i,b(W,{get when(){return!t()},get children(){const l=mt.cloneNode(!0);return l.$$click=()=>n(!0),l}}),null),i})()};xe(["input","click"]);const At=m('<div class="w-full"><div class="mx-auto w-96 pt-4"></div></div>'),xt=()=>{ke();const[e,t]=E([]);let n=0;for(;n<20;)t([...e(),"quest "+n]),n+=1;return(()=>{const s=At.cloneNode(!0),o=s.firstChild;return $(o,b(Ae,{get each(){return e()},children:r=>b(St,{questName:r,setName:i=>console.log(i),checkQuest:()=>console.log("check "+r)})})),s})()},Nt=m('<div class="flex flex-row"></div>'),Et=()=>b(st,{get children(){const e=Nt.cloneNode(!0);return $(e,b(wt,{}),null),$(e,b(xt,{}),null),e}});Je(()=>b(Et,{}),document.getElementById("root"));

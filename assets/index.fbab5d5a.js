const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Te();const x={};function Le(e){x.context=e}const De=(e,t)=>e===t,C=Symbol("solid-proxy"),pe=Symbol("solid-track"),H={equals:De};let ye=$e;const O={},P=1,V=2,me={owned:null,cleanups:null,context:null,owner:null};var p=null;let R=null,h=null,D=null,y=null,$=null,oe=0;function G(e,t){const n=h,r=p,o=e.length===0?me:{owned:null,cleanups:null,context:null,owner:t||r};p=o,h=null;try{return ie(()=>e(()=>le(o)),!0)}finally{h=n,p=r}}function E(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,pending:O,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.pending!==O?n.pending:n.value)),se(n,o));return[ve.bind(n),r]}function Ie(e,t,n){const r=z(e,t,!0,P);k(r)}function M(e,t,n){const r=z(e,t,!1,P);k(r)}function Me(e,t,n){ye=Fe;const r=z(e,t,!1,P);r.user=!0,$?$.push(r):k(r)}function U(e,t,n){n=n?Object.assign({},H,n):H;const r=z(e,t,!0,0);return r.pending=O,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,k(r),ve.bind(r)}function we(e){if(D)return e();let t;const n=D=[];try{t=e()}finally{D=null}return ie(()=>{for(let r=0;r<n.length;r+=1){const o=n[r];if(o.pending!==O){const s=o.pending;o.pending=O,se(o,s)}}},!1),t}function K(e){let t,n=h;return h=null,t=e(),h=n,t}function Ue(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function be(){return h}function Be(e){const t=Symbol("context");return{id:t,Provider:Ge(t),defaultValue:e}}function qe(e){let t;return(t=xe(p,e.id))!==void 0?t:e.defaultValue}function Re(e){const t=U(e);return U(()=>te(t()))}function ve(){const e=R;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===P||e?k(this):W(this),y=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function se(e,t,n){if(D)return e.pending===O&&D.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&ie(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o];r&&R.disposed.has(s),(r&&!s.tState||!r&&!s.state)&&(s.pure?y.push(s):$.push(s),s.observers&&Se(s)),r||(s.state=P)}if(y.length>1e6)throw y=[],new Error},!1),t}function k(e){if(!e.fn)return;le(e);const t=p,n=h,r=oe;h=p=e,Ke(e,e.value,r),h=n,p=t}function Ke(e,t,n){let r;try{r=e.fn(t)}catch(o){Ae(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?se(e,r):e.value=r,e.updatedAt=n)}function z(e,t,n,r=P,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==me&&(p.owned?p.owned.push(s):p.owned=[s]),s}function I(e){const t=R;if(e.state===0||t)return;if(e.state===V||t)return W(e);if(e.suspense&&K(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===P||t)k(e);else if(e.state===V||t){const o=y;y=null,W(e,n[0]),y=o}}function ie(e,t){if(y)return e();let n=!1;t||(y=[]),$?n=!0:$=[],oe++;try{const r=e();return Qe(n),r}catch(r){Ae(r)}finally{y=null,n||($=null)}}function Qe(e){y&&($e(y),y=null),!e&&($.length?we(()=>{ye($),$=null}):$=null)}function $e(e){for(let t=0;t<e.length;t++)I(e[t])}function Fe(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:I(o)}x.context&&Le();const r=e.length;for(t=0;t<n;t++)I(e[t]);for(t=r;t<e.length;t++)I(e[t])}function W(e,t){const n=R;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===P||n?o!==t&&I(o):(o.state===V||n)&&W(o,t))}}function Se(e){const t=R;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=V,r.pure?y.push(r):$.push(r),r.observers&&Se(r))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ae(e){throw e}function xe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:xe(e.owner,t):void 0}function te(e){if(typeof e=="function"&&!e.length)return te(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=te(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ge(e){return function(n){let r;return Ie(()=>r=K(()=>(p.context={[e]:n.value},Re(()=>n.children)))),r}}const He=Symbol("fallback");function ae(e){for(let t=0;t<e.length;t++)e[t]()}function Ve(e,t,n={}){let r=[],o=[],s=[],i=0,l=t.length>1?[]:null;return Ue(()=>ae(s)),()=>{let u=e()||[],f,c;return u[pe],K(()=>{let d=u.length,g,w,T,Q,F,S,A,N,_;if(d===0)i!==0&&(ae(s),s=[],r=[],o=[],i=0,l&&(l=[])),n.fallback&&(r=[He],o[0]=G(ke=>(s[0]=ke,n.fallback())),i=1);else if(i===0){for(o=new Array(d),c=0;c<d;c++)r[c]=u[c],o[c]=G(a);i=d}else{for(T=new Array(d),Q=new Array(d),l&&(F=new Array(d)),S=0,A=Math.min(i,d);S<A&&r[S]===u[S];S++);for(A=i-1,N=d-1;A>=S&&N>=S&&r[A]===u[N];A--,N--)T[N]=o[A],Q[N]=s[A],l&&(F[N]=l[A]);for(g=new Map,w=new Array(N+1),c=N;c>=S;c--)_=u[c],f=g.get(_),w[c]=f===void 0?-1:f,g.set(_,c);for(f=S;f<=A;f++)_=r[f],c=g.get(_),c!==void 0&&c!==-1?(T[c]=o[f],Q[c]=s[f],l&&(F[c]=l[f]),c=w[c],g.set(_,c)):s[f]();for(c=S;c<d;c++)c in T?(o[c]=T[c],s[c]=Q[c],l&&(l[c]=F[c],l[c](c))):o[c]=G(a);o=o.slice(0,i=d),r=u.slice(0)}return o});function a(d){if(s[c]=d,l){const[g,w]=E(c);return l[c]=w,t(u[c],g)}return t(u[c])}}}function m(e,t){return K(()=>e(t||{}))}function Ne(e){const t="fallback"in e&&{fallback:()=>e.fallback};return U(Ve(()=>e.each,e.children,t||void 0))}function B(e){let t=!1;const n=U(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return U(()=>{const r=n();if(r){const o=e.children;return(t=typeof o=="function"&&o.length>0)?K(()=>o(r)):o}return e.fallback})}function We(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,u=t[o-1].nextSibling,f=null;for(;i<o||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const c=s<r?l?n[l-1].nextSibling:n[s-l]:u;for(;l<s;)e.insertBefore(n[l++],c)}else if(s===l)for(;i<o;)(!f||!f.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!f){f=new Map;let a=l;for(;a<s;)f.set(n[a],a++)}const c=f.get(t[i]);if(c!=null)if(l<c&&c<s){let a=i,d=1,g;for(;++a<o&&a<s&&!((g=f.get(t[a]))==null||g!==c+d);)d++;if(d>c-l){const w=t[i];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const de="_$DX_DELEGATE";function Je(e,t,n){let r;return G(o=>{r=o,t===document?e():v(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function b(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function ce(e,t=window.document){const n=t[de]||(t[de]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Xe))}}function v(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return J(e,t,r,n);M(o=>J(e,t(),o,n),r)}function Xe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function J(e,t,n,r,o){for(x.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(x.context)return n;if(s==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=j(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(x.context)return n;n=j(e,n,r)}else{if(s==="function")return M(()=>{let l=t();for(;typeof l=="function";)l=l();n=J(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(ne(l,t,o))return M(()=>n=J(e,l,n,r,!0)),()=>n;if(x.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=j(e,n,r),i)return n}else Array.isArray(n)?n.length===0?he(e,l,r):We(e,n,l):(n&&j(e),he(e,l));n=l}else if(t instanceof Node){if(x.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=j(e,n,r,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ne(e,t,n){let r=!1;for(let o=0,s=t.length;o<s;o++){let i=t[o],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=ne(e,i)||r;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();r=ne(e,Array.isArray(i)?i:[i])||r}else e.push(i),r=!0;else e.push(document.createTextNode(i.toString()))}return r}function he(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function j(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const u=l.parentNode===e;!s&&!i?u?e.replaceChild(o,l):e.insertBefore(o,n):u&&l.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const Ee=Symbol("store-raw"),X=Symbol("store-node"),Ye=Symbol("store-name");function Pe(e,t){let n=e[C];if(!n){Object.defineProperty(e,C,{value:n=new Proxy(e,et)});const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let s=0,i=r.length;s<i;s++){const l=r[s];if(o[l].get){const u=o[l].get.bind(n);Object.defineProperty(e,l,{get:u})}}}return n}function Y(e){return e!=null&&typeof e=="object"&&(e[C]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,r,o,s;if(n=e!=null&&e[Ee])return n;if(!Y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,l=e.length;i<l;i++)o=e[i],(r=q(o,t))!==o&&(e[i]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let u=0,f=i.length;u<f;u++)s=i[u],!l[s].get&&(o=e[s],(r=q(o,t))!==o&&(e[s]=r))}return e}function ue(e){let t=e[X];return t||Object.defineProperty(e,X,{value:t={}}),t}function re(e,t,n){return e[t]||(e[t]=je(n,!0))}function Ze(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===C||t===X||t===Ye||(delete n.value,delete n.writable,n.get=()=>e[C][t]),n}function _e(e){if(be()){const t=ue(e);(t._||(t._=je()))()}}function ze(e){return _e(e),Reflect.ownKeys(e)}function je(e,t){const[n,r]=E(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=r,n}const et={get(e,t,n){if(t===Ee)return e;if(t===C)return n;if(t===pe)return _e(e);const r=ue(e),o=r[t];let s=o?r[t]():e[t];if(t===X||t==="__proto__")return s;if(!o){const i=Object.getOwnPropertyDescriptor(e,t);be()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(s=re(r,t,s)())}return Y(s)?Pe(s):s},set(){return!0},deleteProperty(){return!0},ownKeys:ze,getOwnPropertyDescriptor:Ze};function Z(e,t,n){if(e[t]===n)return;const r=e[t],o=e.length;n===void 0?delete e[t]:e[t]=n;let s=ue(e),i;(i=re(s,t,r))&&i.$(()=>n),Array.isArray(e)&&e.length!==o&&(i=re(s,"length",o))&&i.$(e.length),(i=s._)&&i.$()}function Ce(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];Z(e,o,t[o])}}function tt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const o=t[n];e[n]!==o&&Z(e,n,o)}Z(e,"length",r)}else Ce(e,t)}function L(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const i=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let u=0;u<r.length;u++)L(e,[r[u]].concat(t),n);return}else if(l&&i==="function"){for(let u=0;u<e.length;u++)r(e[u],u)&&L(e,[u].concat(t),n);return}else if(l&&i==="object"){const{from:u=0,to:f=e.length-1,by:c=1}=r;for(let a=u;a<=f;a+=c)L(e,[a].concat(t),n);return}else if(t.length>1){L(e[r],t,[r].concat(n));return}o=e[r],n=[r].concat(n)}let s=t[0];typeof s=="function"&&(s=s(o,n),s===o)||r===void 0&&s==null||(s=q(s),r===void 0||Y(o)&&Y(s)&&!Array.isArray(s)?Ce(o,s):Z(e,r,s))}function nt(e,t){const n=q(e||{}),r=Array.isArray(n),o=Pe(n);function s(...i){we(()=>{r&&i.length===1?tt(n,i[0]):L(n,i)})}return[o,s]}const rt=e=>t=>t.target.tagName!=="INPUT"&&e(),ot=()=>crypto.randomUUID(),ge="quests",Oe=Be({});function st(e){const t=localStorage.getItem(ge),[n,r]=nt(t?JSON.parse(t):{});Me(()=>localStorage.setItem(ge,JSON.stringify(n)));const o=[n,{setSelectedProject(s){r({selectedProject:s})},addProject(s){const i=ot();return r({projects:[...n.projects??[],{id:i,name:s,quests:[]}]}),i},renameProject(s,i){r("projects",l=>l.id===s,"name",l=>i)},deleteProject(s){const i=n.projects?.filter(l=>l.id!==s)??[];r({projects:[...i]})}}];return m(Oe.Provider,{value:o,get children(){return e.children}})}function fe(){return qe(Oe)}const it=b('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text"></form>'),lt=b('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),ct=b('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Del</div>'),ut=b('<div class="group flex flex-row gap-1 items-baseline"></div>'),ft=b('<div class="cursor-pointer"></div>'),at=e=>{const[,{setSelectedProject:t,deleteProject:n,renameProject:r}]=fe(),[o,s]=E(!1),[i,l]=E(e.project.name),u=()=>{t(e.project.name)},f=()=>{r(e.project.id,i()),s(!1)};return(()=>{const c=ut.cloneNode(!0);return v(c,m(B,{get when(){return o()},get fallback(){return(()=>{const a=ft.cloneNode(!0);return a.$$click=u,v(a,i),a})()},get children(){const a=it.cloneNode(!0),d=a.firstChild;return a.addEventListener("submit",f),d.$$input=g=>l(g?.currentTarget.value),d.addEventListener("blur",f),M(()=>d.value=i()),a}}),null),v(c,m(B,{get when(){return!o()},get children(){return[(()=>{const a=lt.cloneNode(!0);return a.$$click=()=>s(!0),a})(),(()=>{const a=ct.cloneNode(!0);return a.$$click=()=>n(e.project.id),a})()]}}),null),c})()};ce(["input","click"]);var dt=["Shift","Meta","Alt","Control"],ht=typeof navigator=="object"&&/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"Meta":"Control";function ee(e,t){return typeof e.getModifierState=="function"&&e.getModifierState(t)}function gt(e){return e.trim().split(" ").map(function(t){var n=t.split(/\b\+/),r=n.pop();return[n=n.map(function(o){return o==="$mod"?ht:o}),r]})}function pt(e,t){var n;t===void 0&&(t={});var r=(n=t.timeout)!=null?n:1e3,o=Object.keys(e).map(function(l){return[gt(l),e[l]]}),s=new Map,i=null;return function(l){l instanceof KeyboardEvent&&(o.forEach(function(u){var f=u[0],c=u[1],a=s.get(f)||f;(function(d,g){return!(g[1].toUpperCase()!==d.key.toUpperCase()&&g[1]!==d.code||g[0].find(function(w){return!ee(d,w)})||dt.find(function(w){return!g[0].includes(w)&&g[1]!==w&&ee(d,w)}))})(l,a[0])?a.length>1?s.set(f,a.slice(1)):(s.delete(f),c(l)):ee(l,l.key)||s.delete(f)}),i&&clearTimeout(i),i=setTimeout(s.clear.bind(s),r))}}function yt(e,t,n){var r;n===void 0&&(n={});var o=(r=n.event)!=null?r:"keydown",s=pt(t,n);return e.addEventListener(o,s),function(){e.removeEventListener(o,s)}}const mt=b('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text" autofocus></form>'),wt=b('<div class="w-1/5 h-screen p-4 flex overflow-y-scroll"><div class="my-auto"></div></div>'),bt=()=>{const[e,{addProject:t}]=fe(),[n,r]=E(!1),[o,s]=E("");yt(window,{l:rt(()=>r(!0))});const i=()=>{t(o()),r(!1)};return(()=>{const l=wt.cloneNode(!0),u=l.firstChild;return v(u,m(Ne,{get each(){return e.projects},children:f=>m(at,{project:f})}),null),v(u,m(B,{get when(){return n()},get children(){const f=mt.cloneNode(!0),c=f.firstChild;return f.addEventListener("submit",i),c.$$input=a=>s(a?.currentTarget.value),c.addEventListener("blur",i),f}}),null),l})()};ce(["input"]);const vt=b('<form><input class="bg-gray-100 rounded-sm focus:outline-none" type="text"></form>'),$t=b('<div class="hidden group-hover:block text-xs text-gray-600 hover:cursor-pointer">Edit</div>'),St=b('<div class="group flex flex-row gap-1 items-baseline w-fit"></div>'),At=b('<div class="max-w-lg truncate cursor-pointer"></div>'),xt=e=>{const[t,n]=E(!1),[r,o]=E(e.questName),s=()=>{n(!1),e.setName(r())};return(()=>{const i=St.cloneNode(!0);return v(i,m(B,{get when(){return t()},get fallback(){return(()=>{const l=At.cloneNode(!0);return l.$$click=()=>e.checkQuest(),v(l,r),l})()},get children(){const l=vt.cloneNode(!0),u=l.firstChild;return l.addEventListener("submit",s),u.$$input=f=>o(f?.currentTarget.value),u.addEventListener("blur",s),M(()=>u.value=r()),l}}),null),v(i,m(B,{get when(){return!t()},get children(){const l=$t.cloneNode(!0);return l.$$click=()=>n(!0),l}}),null),i})()};ce(["input","click"]);const Nt=b('<div class="w-full"><div class="mx-auto w-96 pt-4"></div></div>'),Et=()=>{fe();const[e,t]=E([]);let n=0;for(;n<20;)t([...e(),"quest "+n]),n+=1;return(()=>{const r=Nt.cloneNode(!0),o=r.firstChild;return v(o,m(Ne,{get each(){return e()},children:s=>m(xt,{questName:s,setName:i=>console.log(i),checkQuest:()=>console.log("check "+s)})})),r})()},Pt=b('<div class="flex flex-row"></div>'),_t=()=>m(st,{get children(){const e=Pt.cloneNode(!0);return v(e,m(bt,{}),null),v(e,m(Et,{}),null),e}});Je(()=>m(_t,{}),document.getElementById("root"));

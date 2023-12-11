import './polyfills.server.mjs';
import{Ab as V,Ga as A,H as le,Ha as $,P as fe,Pa as z,Q as pe,Sa as Ee,X as he,Y as ye,Z as R,ba as c,c as F,ca as p,da as a,f as ce,g as w,i as ue,k as ae,ka as me,la as N,oa as W,pa as P,r as de,ta as Re}from"./chunk-4F3WPZ44.mjs";import{a as f,b as m}from"./chunk-KRLCULJA.mjs";function q(e,t){let o=!t?.manualCleanup;o&&!t?.injector&&Re(q);let n=o?t?.injector?.get(z)??a(z):null,r;t?.requireSync?r=$({kind:0}):r=$({kind:1,value:t?.initialValue});let i=e.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;r.set({kind:2,error:s})}});return n?.onDestroy(i.unsubscribe.bind(i)),A(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new ye(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var G={};function S(e,t){if(G[e]=(G[e]||0)+1,typeof t=="function")return L(e,(...n)=>m(f({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return L(e,()=>({type:e}));case"props":return L(e,n=>m(f({},n),{type:e}));default:throw new Error("Unexpected config.")}}function C(){return{_as:"props",_p:void 0}}function L(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var Me="@ngrx/store/init",E=(()=>{let t=class t extends w{constructor(){super({type:Me})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),rt=[E],_e=new c("@ngrx/store Internal Root Guard"),ve=new c("@ngrx/store Internal Initial State"),J=new c("@ngrx/store Initial State"),Ne=new c("@ngrx/store Reducer Factory"),ge=new c("@ngrx/store Internal Reducer Factory Provider"),We=new c("@ngrx/store Initial Reducers"),K=new c("@ngrx/store Internal Initial Reducers"),Se=new c("@ngrx/store Store Features"),be=new c("@ngrx/store Internal Store Reducers"),B=new c("@ngrx/store Internal Feature Reducers"),Ie=new c("@ngrx/store Internal Feature Configs"),Pe=new c("@ngrx/store Internal Store Features"),Fe=new c("@ngrx/store Internal Feature Reducers Token"),$e=new c("@ngrx/store Feature Reducers"),we=new c("@ngrx/store User Provided Meta Reducers"),j=new c("@ngrx/store Meta Reducers"),Ae=new c("@ngrx/store Internal Resolved Meta Reducers"),je=new c("@ngrx/store User Runtime Checks Config"),xe=new c("@ngrx/store Internal User Runtime Checks Config"),v=new c("@ngrx/store Internal Runtime Checks"),X=new c("@ngrx/store Check if Action types are unique"),H=new c("@ngrx/store Root Store Provider"),Te=new c("@ngrx/store Feature State Provider");function ee(e,t={}){let o=Object.keys(e),n={};for(let i=0;i<o.length;i++){let s=o[i];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,l){s=s===void 0?t:s;let d=!1,h={};for(let u=0;u<r.length;u++){let y=r[u],_=n[y],ie=s[y],se=_(ie,l);h[y]=se,d=d||se!==ie}return d?h:s}}function ot(e,t){return Object.keys(e).filter(o=>o!==t).reduce((o,n)=>Object.assign(o,{[n]:e[n]}),{})}function ze(...e){return function(t){if(e.length===0)return t;let o=e[e.length-1];return e.slice(0,-1).reduceRight((r,i)=>i(r),o(t))}}function Ve(e,t){return Array.isArray(t)&&t.length>0&&(e=ze.apply(null,[...t,e])),(o,n)=>{let r=e(o);return(i,s)=>(i=i===void 0?n:i,r(i,s))}}function it(e){let t=Array.isArray(e)&&e.length>0?ze(...e):o=>o;return(o,n)=>(o=t(o),(r,i)=>(r=r===void 0?n:r,o(r,i)))}var g=class extends F{},x=class extends E{},st="@ngrx/store/update-reducers",T=(()=>{let t=class t extends w{get currentReducers(){return this.reducers}constructor(n,r,i,s){super(s(i,r)),this.dispatcher=n,this.initialState=r,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((i,{reducers:s,reducerFactory:l,metaReducers:d,initialState:h,key:u})=>{let y=typeof s=="function"?it(d)(s,h):Ve(l,d)(s,h);return i[u]=y,i},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=f(f({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=ot(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:st,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(p(x),p(J),p(We),p(Ne))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),ct=[T,{provide:g,useExisting:T},{provide:x,useExisting:E}],te=(()=>{let t=class t extends ce{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=me(t)))(i||t)}})(),t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),ut=[te],O=class extends F{},Oe=(()=>{let t=class t extends w{constructor(n,r,i,s){super(s);let d=n.pipe(ae(ue)).pipe(he(r)),h={state:s},u=d.pipe(pe(at,h));this.stateSubscription=u.subscribe(({state:y,action:_})=>{this.next(y),i.next(_)}),this.state=q(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=Me,t.\u0275fac=function(r){return new(r||t)(p(E),p(g),p(te),p(J))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})();function at(e={state:void 0},[t,o]){let{state:n}=e;return{state:o(n,t),action:t}}var dt=[Oe,{provide:O,useExisting:Oe}],b=(()=>{let t=class t extends F{constructor(n,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...r){return D.call(null,n,...r)(this)}selectSignal(n,r){return A(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(p(O),p(E),p(T))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),lt=[b];function D(e,t,...o){return function(r){let i;if(typeof e=="string"){let s=[t,...o].filter(Boolean);i=r.pipe(fe(e,...s))}else if(typeof e=="function")i=r.pipe(de(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(le())}}var ne="https://ngrx.io/guide/store/configuration/runtime-checks";function Ce(e){return e===void 0}function De(e){return e===null}function qe(e){return Array.isArray(e)}function ft(e){return typeof e=="string"}function pt(e){return typeof e=="boolean"}function ht(e){return typeof e=="number"}function Le(e){return typeof e=="object"&&e!==null}function yt(e){return Le(e)&&!qe(e)}function mt(e){if(!yt(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Z(e){return typeof e=="function"}function Rt(e){return Z(e)&&e.hasOwnProperty("\u0275cmp")}function Et(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var vt=!1;function gt(){return vt}function ke(e,t){return e===t}function St(e,t,o){for(let n=0;n<e.length;n++)if(!o(e[n],t[n]))return!0;return!1}function Ke(e,t=ke,o=ke){let n=null,r=null,i;function s(){n=null,r=null}function l(u=void 0){i={result:u}}function d(){i=void 0}function h(){if(i!==void 0)return i.result;if(!n)return r=e.apply(null,arguments),n=arguments,r;if(!St(arguments,n,t))return r;let u=e.apply(null,arguments);return n=arguments,o(r,u)?r:(r=u,u)}return{memoized:h,reset:s,setResult:l,clearResult:d}}function I(...e){return It(Ke)(...e)}function bt(e,t,o,n){if(o===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let r=t.map(i=>i(e,o));return n.memoized.apply(null,[...r,o])}function It(e,t={stateFn:bt}){return function(...o){let n=o;if(Array.isArray(n[0])){let[u,...y]=n;n=[...u,...y]}else n.length===1&&Ft(n[0])&&(n=wt(n[0]));let r=n.slice(0,n.length-1),i=n[n.length-1],s=r.filter(u=>u.release&&typeof u.release=="function"),l=e(function(...u){return i.apply(null,u)}),d=Ke(function(u,y){return t.stateFn.apply(null,[u,r,y,l])});function h(){d.reset(),l.reset(),s.forEach(u=>u.release())}return Object.assign(d.memoized,{release:h,projector:l.memoized,setResult:d.setResult,clearResult:d.clearResult})}}function Be(e){return I(t=>{let o=t[e];return!gt()&&V()&&!(e in t)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),o},t=>t)}function Ft(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function wt(e){let t=Object.values(e),o=Object.keys(e),n=(...r)=>o.reduce((i,s,l)=>m(f({},i),{[s]:r[l]}),{});return[...t,n]}function At(e){return e instanceof c?a(e):e}function jt(e,t){return t.map((o,n)=>{if(e[n]instanceof c){let r=a(e[n]);return{key:o.key,reducerFactory:r.reducerFactory?r.reducerFactory:ee,metaReducers:r.metaReducers?r.metaReducers:[],initialState:r.initialState}}return o})}function xt(e){return e.map(t=>t instanceof c?a(t):t)}function Ge(e){return typeof e=="function"?e():e}function Tt(e,t){return e.concat(t)}function Ot(){if(a(b,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Ct(e,t){return function(o,n){let r=t.action(n)?Y(n):n,i=e(o,r);return t.state()?Y(i):i}}function Y(e){Object.freeze(e);let t=Z(e);return Object.getOwnPropertyNames(e).forEach(o=>{if(!o.startsWith("\u0275")&&Et(e,o)&&(!t||o!=="caller"&&o!=="callee"&&o!=="arguments")){let n=e[o];(Le(n)||Z(n))&&!Object.isFrozen(n)&&Y(n)}}),e}function Dt(e,t){return function(o,n){if(t.action(n)){let i=Q(n);Ue(i,"action")}let r=e(o,n);if(t.state()){let i=Q(r);Ue(i,"state")}return r}}function Q(e,t=[]){return(Ce(e)||De(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let i=e[r];return Rt(i)?n:Ce(i)||De(i)||ht(i)||pt(i)||ft(i)||qe(i)?!1:mt(i)?Q(i,[...t,r]):{path:[...t,r],value:i}},!1)}function Ue(e,t){if(e===!1)return;let o=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${o}". ${ne}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=o,n}function kt(e,t){return function(o,n){if(t.action(n)&&!Ee.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${ne}#strictactionwithinngzone`);return e(o,n)}}function Ut(e){return V()?f({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Mt({strictActionSerializability:e,strictStateSerializability:t}){return o=>e||t?Dt(o,{action:n=>e&&!re(n),state:()=>t}):o}function _t({strictActionImmutability:e,strictStateImmutability:t}){return o=>e||t?Ct(o,{action:n=>e&&!re(n),state:()=>t}):o}function re(e){return e.type.startsWith("@ngrx")}function Nt({strictActionWithinNgZone:e}){return t=>e?kt(t,{action:o=>e&&!re(o)}):t}function Wt(e){return[{provide:xe,useValue:e},{provide:je,useFactory:Pt,deps:[xe]},{provide:v,deps:[je],useFactory:Ut},{provide:j,multi:!0,deps:[v],useFactory:_t},{provide:j,multi:!0,deps:[v],useFactory:Mt},{provide:j,multi:!0,deps:[v],useFactory:Nt}]}function He(){return[{provide:X,multi:!0,deps:[v],useFactory:$t}]}function Pt(e){return e}function $t(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(G).filter(([,o])=>o>1).map(([o])=>o);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(o=>`"${o}"`).join(", ")}. ${ne}#strictactiontypeuniqueness`)}function fn(e,t,o={}){return P([...Bt(e,t,o),Kt])}function zt(e={},t={}){return[{provide:_e,useFactory:Ot},{provide:ve,useValue:t.initialState},{provide:J,useFactory:Ge,deps:[ve]},{provide:K,useValue:e},{provide:be,useExisting:e instanceof c?e:K},{provide:We,deps:[K,[new N(be)]],useFactory:At},{provide:we,useValue:t.metaReducers?t.metaReducers:[]},{provide:Ae,deps:[j,we],useFactory:Tt},{provide:ge,useValue:t.reducerFactory?t.reducerFactory:ee},{provide:Ne,deps:[ge,Ae],useFactory:Ve},rt,ct,ut,dt,lt,Wt(t.runtimeChecks),He()]}function Vt(){a(E),a(g),a(te),a(b),a(_e,{optional:!0}),a(X,{optional:!0})}var qt=[{provide:H,useFactory:Vt},{provide:W,multi:!0,useFactory(){return()=>a(H)}}];function pn(e,t){return P([...zt(e,t),qt])}function Lt(){a(H);let e=a(Pe),t=a($e),o=a(T);a(X,{optional:!0});let n=e.map((r,i)=>{let l=t.shift()[i];return m(f({},r),{reducers:l,initialState:Ge(r.initialState)})});o.addFeatures(n)}var Kt=[{provide:Te,useFactory:Lt},{provide:W,multi:!0,useFactory(){return()=>a(Te)}}];function Bt(e,t,o={}){return[{provide:Ie,multi:!0,useValue:e instanceof Object?{}:o},{provide:Se,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(o instanceof c)&&o.reducerFactory?o.reducerFactory:ee,metaReducers:!(o instanceof c)&&o.metaReducers?o.metaReducers:[],initialState:!(o instanceof c)&&o.initialState?o.initialState:void 0}},{provide:Pe,deps:[Ie,Se],useFactory:jt},{provide:B,multi:!0,useValue:e instanceof Object?e.reducer:t},{provide:Fe,multi:!0,useExisting:t instanceof c?t:B},{provide:$e,multi:!0,deps:[B,[new N(Fe)]],useFactory:xt},He()]}function k(...e){let t=e.pop(),o=e.map(n=>n.type);return{reducer:t,types:o}}function Ze(e,...t){let o=new Map;for(let n of t)for(let r of n.types){let i=o.get(r);if(i){let s=(l,d)=>n.reducer(i(l,d),d);o.set(r,s)}else o.set(r,n.reducer)}return function(n=e,r){let i=o.get(r.type);return i?i(n,r):n}}var U=S("[Weather Page] Init"),M=S("[Weather/API] load weather data",C()),Ye=S("[Weather/API] Load Weather Success",C()),Qe=S("[Weather/API] Load Weather Failure",C());var Xe="weather",Gt={loaded:!1,weatherData:null},Ht=Ze(Gt,k(U,M,e=>m(f({},e),{loaded:!1,error:null})),k(Ye,(e,{weather:t})=>m(f({},e),{weatherData:t,loaded:!0})),k(Qe,(e,{error:t})=>m(f({},e),{error:t})));function En(e,t){return Ht(e,t)}var oe=Be(Xe),et=I(oe,e=>e.loaded),tt=I(oe,e=>e.weatherData),In=I(oe,e=>e.error);var jn=(()=>{let t=class t{constructor(){this.store=a(b),this.loaded$=this.store.pipe(D(et)),this.weatherData$=this.store.pipe(D(tt))}init(){this.store.dispatch(U())}loadWeatherData(n){this.store.dispatch(M({location:n}))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})();export{q as a,S as b,Me as c,E as d,J as e,H as f,Te as g,g as h,x as i,st as j,te as k,O as l,b as m,fn as n,pn as o,U as p,M as q,Ye as r,Qe as s,Xe as t,En as u,jn as v};

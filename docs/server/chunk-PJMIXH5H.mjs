import './polyfills.server.mjs';
import{a as Qt,b as te,c as ee,d as ne,e as ie,h as oe,l as re,o as se,p as ce}from"./chunk-SEIHNNWG.mjs";import{a as ae,b as fe,c as at,d as H,e as ue,f as de,g as pe,h as le,i as he,j as ft,k as V,l as me,m as K,n as Ee,o as ge,p as ye,q as Se,r as ut,s as dt,t as ve,u as Ie,v as xe}from"./chunk-ONSZHJQ5.mjs";import{A as ot,Ab as Jt,B as Pt,D as U,E as $t,Fb as qt,G as _t,I as zt,Ja as G,L as rt,O as Lt,Q as Ut,R as Bt,S as Wt,Sa as Zt,U as P,V as B,X as Gt,Z as T,Za as Xt,_ as st,ba as A,c as _,ca as y,da as I,f as jt,fa as Ht,ga as ct,h as Ft,i as Mt,ib as Yt,j as Dt,k as Nt,ka as Vt,m as F,oa as Kt,pa as W,q as kt,r as x,t as it,x as k,y as w,z as M}from"./chunk-4F3WPZ44.mjs";import{a as R,b as N}from"./chunk-KRLCULJA.mjs";var Ae=(()=>{let e=class e{constructor(){this.title="tech-storm"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=Ht({type:e,selectors:[["tech-storm-root"]],standalone:!0,features:[Yt],decls:1,vars:0,template:function(o,a){o&1&&Xt(0,"router-outlet")},dependencies:[ce,re]});let t=e;return t})();var cn={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},X="__@ngrx/effects_create__";function pt(t,e={}){let i=e.functional?t:t(),n=R(R({},cn),e);return Object.defineProperty(i,X,{value:n}),i}function an(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(X)?t[n][X].hasOwnProperty("dispatch"):!1).map(n=>{let o=t[n][X];return R({propertyName:n},o)})}function fn(t){return an(t)}function Te(t){return Object.getPrototypeOf(t)}function un(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function Oe(t){return typeof t=="function"}function dn(t){return t.filter(Oe)}function pn(t,e,i){let n=Te(t),a=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,c=fn(t).map(({propertyName:r,dispatch:E,useEffectsErrorHandler:u})=>{let m=typeof t[r]=="function"?t[r]():t[r],s=u?i(m,e):m;return E===!1?s.pipe($t()):s.pipe(Lt()).pipe(x(S=>({effect:t[r],notification:S,propertyName:r,sourceName:a,sourceInstance:t})))});return k(...c)}var ln=10;function be(t,e,i=ln){return t.pipe(M(n=>(e&&e.handleError(n),i<=1?t:be(t,e,i-1))))}var Ce=(()=>{let e=class e extends _{constructor(n){super(),n&&(this.source=n)}lift(n){let o=new e;return o.source=this,o.operator=n,o}};e.\u0275fac=function(o){return new(o||e)(y(V))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function lt(...t){return w(e=>t.some(i=>typeof i=="string"?i===e.type:i.type===e.type))}var ci=new A("@ngrx/effects Internal Root Guard"),ai=new A("@ngrx/effects User Provided Effects"),fi=new A("@ngrx/effects Internal Root Effects"),ui=new A("@ngrx/effects Internal Root Effects Instances"),di=new A("@ngrx/effects Internal Feature Effects"),pi=new A("@ngrx/effects Internal Feature Effects Instance Groups"),hn=new A("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>be}),mn="@ngrx/effects/init",En=fe(mn);function gn(t,e){if(t.notification.kind==="N"){let i=t.notification.value;!yn(i)&&e.handleError(new Error(`Effect ${Sn(t)} dispatched an invalid action: ${vn(i)}`))}}function yn(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function Sn({propertyName:t,sourceInstance:e,sourceName:i}){let n=typeof e[t]=="function";return!!i?`"${i}.${String(t)}${n?"()":""}"`:`"${String(t)}()"`}function vn(t){try{return JSON.stringify(t)}catch{return t}}var In="ngrxOnIdentifyEffects";function xn(t){return ht(t,In)}var An="ngrxOnRunEffects";function Tn(t){return ht(t,An)}var On="ngrxOnInitEffects";function bn(t){return ht(t,On)}function ht(t,e){return t&&e in t&&typeof t[e]=="function"}var we=(()=>{let e=class e extends jt{constructor(n,o){super(),this.errorHandler=n,this.effectsErrorHandler=o}addEffects(n){this.next(n)}toActions(){return this.pipe(rt(n=>un(n)?Te(n):n),it(n=>n.pipe(rt(Cn))),it(n=>{let o=n.pipe(zt(c=>wn(this.errorHandler,this.effectsErrorHandler)(c)),x(c=>(gn(c,this.errorHandler),c.notification)),w(c=>c.kind==="N"&&c.value!=null),_t()),a=n.pipe(U(1),w(bn),x(c=>c.ngrxOnInitEffects()));return k(o,a)}))}};e.\u0275fac=function(o){return new(o||e)(y(G),y(hn))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Cn(t){return xn(t)?t.ngrxOnIdentifyEffects():""}function wn(t,e){return i=>{let n=pn(i,t,e);return Tn(i)?i.ngrxOnRunEffects(n):n}}var Rn=(()=>{let e=class e{get isStarted(){return!!this.effectsSubscription}constructor(n,o){this.effectSources=n,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};e.\u0275fac=function(o){return new(o||e)(y(we),y(K))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Y(...t){let e=t.flat(),i=dn(e);return W([i,{provide:Kt,multi:!0,useValue:()=>{I(de),I(pe,{optional:!0});let n=I(Rn),o=I(we),a=!n.isStarted;a&&n.start();for(let c of e){let r=Oe(c)?I(c):c;o.addEffects(r)}a&&I(K).dispatch(En())}}])}var Re=(()=>{let e=class e{constructor(){this.httpClient=I(Qt)}getWeatherData(n){return this.httpClient.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&key=9AU959UYVABKBXGYWQGJFAAAN&contentType=json`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var je=(()=>{let e=class e{constructor(){this.actions$=I(Ce),this.init$=pt(()=>this.actions$.pipe(lt(ye),P(()=>F(ut({weather:null}))),M(n=>(console.error("Error",n),F(dt({error:n})))))),this.weatherService=I(Re),this.loadWeatherData$=pt(()=>this.actions$.pipe(lt(Se),P(n=>this.weatherService.getWeatherData(n?.location)),x(n=>ut({weather:n})),M(n=>(console.error("Error",n),F(dt({error:n}))))))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})();var Fe=[{path:"",loadComponent:()=>import("./chunk-DZRL345M.mjs").then(t=>t.DashboardViewComponent),providers:[Ee(ve,Ie),Y(je)]}];var L="PERFORM_ACTION",jn="REFRESH",ze="RESET",Le="ROLLBACK",Ue="COMMIT",Be="SWEEP",We="TOGGLE_ACTION",Ge="SET_ACTIONS_ACTIVE",He="JUMP_TO_STATE",Ve="JUMP_TO_ACTION",Ct="IMPORT_STATE",Ke="LOCK_CHANGES",Ze="PAUSE_RECORDING",$=class{constructor(e,i){if(this.action=e,this.timestamp=i,this.type=L,typeof e.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},mt=class{constructor(){this.type=jn}},Et=class{constructor(e){this.timestamp=e,this.type=ze}},gt=class{constructor(e){this.timestamp=e,this.type=Le}},yt=class{constructor(e){this.timestamp=e,this.type=Ue}},St=class{constructor(){this.type=Be}},vt=class{constructor(e){this.id=e,this.type=We}},Me=class{constructor(e,i,n=!0){this.start=e,this.end=i,this.active=n,this.type=Ge}},It=class{constructor(e){this.index=e,this.type=He}},xt=class{constructor(e){this.actionId=e,this.type=Ve}},At=class{constructor(e){this.nextLiftedState=e,this.type=Ct}},Tt=class{constructor(e){this.status=e,this.type=Ke}},Ot=class{constructor(e){this.status=e,this.type=Ze}},De=class{constructor(){this.maxAge=!1}},tt=new A("@ngrx/store-devtools Options"),Ne=new A("@ngrx/store-devtools Initial Config");function Xe(){return null}var Fn="NgRx Store DevTools";function Mn(t){let e={maxAge:!1,monitor:Xe,actionSanitizer:void 0,stateSanitizer:void 0,name:Fn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},i=typeof t=="function"?t():t,n=i.logOnly?{pause:!0,export:!0,test:!0}:!1,o=i.features||n||e.features;o.import===!0&&(o.import="custom");let a=Object.assign({},e,{features:o},i);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function ke(t,e){return t.filter(i=>e.indexOf(i)<0)}function Ye(t){let{computedStates:e,currentStateIndex:i}=t;if(i>=e.length){let{state:o}=e[e.length-1];return o}let{state:n}=e[i];return n}function zi(t){return t.actionsById[t.nextActionId-1]}function z(t){return new $(t,+Date.now())}function Dn(t,e){return Object.keys(e).reduce((i,n)=>{let o=Number(n);return i[o]=Je(t,e[o],o),i},{})}function Je(t,e,i){return N(R({},e),{action:t(e.action,i)})}function Nn(t,e){return e.map((i,n)=>({state:qe(t,i.state,n),error:i.error}))}function qe(t,e,i){return t(e,i)}function Qe(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function kn(t,e,i,n){let o=[],a={},c=[];return t.stagedActionIds.forEach((r,E)=>{let u=t.actionsById[r];u&&(E&&wt(t.computedStates[E],u,e,i,n)||(a[r]=u,o.push(r),c.push(t.computedStates[E])))}),N(R({},t),{stagedActionIds:o,actionsById:a,computedStates:c})}function wt(t,e,i,n,o){let a=i&&!i(t,e.action),c=n&&!e.action.type.match(n.map(E=>Pe(E)).join("|")),r=o&&e.action.type.match(o.map(E=>Pe(E)).join("|"));return a||c||r}function Pe(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tn(t){return{ngZone:t?I(Zt):null,connectInZone:t}}var et=(()=>{let e=class e extends H{};e.\u0275fac=(()=>{let n;return function(a){return(n||(n=Vt(e)))(a||e)}})(),e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})(),J={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},bt=new A("@ngrx/store-devtools Redux Devtools Extension"),en=(()=>{let _DevtoolsExtension=class _DevtoolsExtension{constructor(t,e,i){this.config=e,this.dispatcher=i,this.zoneConfig=tn(this.config.connectInZone),this.devtoolsExtension=t,this.createActionStreams()}notify(t,e){if(this.devtoolsExtension)if(t.type===L){if(e.isLocked||e.isPaused)return;let i=Ye(e);if(Qe(this.config)&&wt(i,t,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let n=this.config.stateSanitizer?qe(this.config.stateSanitizer,i,e.currentStateIndex):i,o=this.config.actionSanitizer?Je(this.config.actionSanitizer,t,e.nextActionId):t;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,n))}else{let i=N(R({},e),{stagedActionIds:e.stagedActionIds,actionsById:this.config.actionSanitizer?Dn(this.config.actionSanitizer,e.actionsById):e.actionsById,computedStates:this.config.stateSanitizer?Nn(this.config.stateSanitizer,e.computedStates):e.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new _(t=>{let e=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=e,e.init(),e.subscribe(i=>t.next(i)),e.unsubscribe}):Dt}createActionStreams(){let t=this.createChangesObservable().pipe(Bt()),e=t.pipe(w(r=>r.type===J.START)),i=t.pipe(w(r=>r.type===J.STOP)),n=t.pipe(w(r=>r.type===J.DISPATCH),x(r=>this.unwrapAction(r.payload)),ot(r=>r.type===Ct?this.dispatcher.pipe(w(E=>E.type===ft),kt(1e3),Pt(1e3),x(()=>r),M(()=>F(r)),U(1)):F(r))),a=t.pipe(w(r=>r.type===J.ACTION),x(r=>this.unwrapAction(r.payload))).pipe(B(i)),c=n.pipe(B(i));this.start$=e.pipe(B(i)),this.actions$=this.start$.pipe(P(()=>a)),this.liftedActions$=this.start$.pipe(P(()=>c))}unwrapAction(action){return typeof action=="string"?eval(`(${action})`):action}getExtensionConfig(t){let e={name:t.name,features:t.features,serialize:t.serialize,autoPause:t.autoPause??!1,trace:t.trace??!1,traceLimit:t.traceLimit??75};return t.maxAge!==!1&&(e.maxAge=t.maxAge),e}sendToReduxDevtools(t){try{t()}catch(e){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",e)}}};_DevtoolsExtension.\u0275fac=function(e){return new(e||_DevtoolsExtension)(y(bt),y(tt),y(et))},_DevtoolsExtension.\u0275prov=T({token:_DevtoolsExtension,factory:_DevtoolsExtension.\u0275fac});let DevtoolsExtension=_DevtoolsExtension;return DevtoolsExtension})(),Q={type:at},Pn="@ngrx/store-devtools/recompute",$n={type:Pn};function nn(t,e,i,n,o){if(n)return{state:i,error:"Interrupted by an error up the chain"};let a=i,c;try{a=t(i,e)}catch(r){c=r.toString(),o.handleError(r)}return{state:a,error:c}}function q(t,e,i,n,o,a,c,r,E){if(e>=t.length&&t.length===a.length)return t;let u=t.slice(0,e),m=a.length-(E?1:0);for(let s=e;s<m;s++){let p=a[s],S=o[p].action,d=u[s-1],f=d?d.state:n,b=d?d.error:void 0,C=c.indexOf(p)>-1?d:nn(i,S,f,b,r);u.push(C)}return E&&u.push(t[t.length-1]),u}function _n(t,e){return{monitorState:e(void 0,{}),nextActionId:1,actionsById:{0:z(Q)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function zn(t,e,i,n,o={}){return a=>(c,r)=>{let{monitorState:E,actionsById:u,nextActionId:m,stagedActionIds:s,skippedActionIds:p,committedState:S,currentStateIndex:d,computedStates:f,isLocked:b,isPaused:v}=c||e;c||(u=Object.create(u));function C(g){let h=g,j=s.slice(1,h+1);for(let O=0;O<j.length;O++)if(f[O+1].error){h=O,j=s.slice(1,h+1);break}else delete u[j[O]];p=p.filter(O=>j.indexOf(O)===-1),s=[0,...s.slice(h+1)],S=f[h].state,f=f.slice(h),d=d>h?d-h:0}function D(){u={0:z(Q)},m=1,s=[0],p=[],S=f[d].state,d=0,f=[]}let l=0;switch(r.type){case Ke:{b=r.status,l=1/0;break}case Ze:{v=r.status,v?(s=[...s,m],u[m]=new $({type:"@ngrx/devtools/pause"},+Date.now()),m++,l=s.length-1,f=f.concat(f[f.length-1]),d===s.length-2&&d++,l=1/0):D();break}case ze:{u={0:z(Q)},m=1,s=[0],p=[],S=t,d=0,f=[];break}case Ue:{D();break}case Le:{u={0:z(Q)},m=1,s=[0],p=[],d=0,f=[];break}case We:{let{id:g}=r;p.indexOf(g)===-1?p=[g,...p]:p=p.filter(j=>j!==g),l=s.indexOf(g);break}case Ge:{let{start:g,end:h,active:j}=r,O=[];for(let nt=g;nt<h;nt++)O.push(nt);j?p=ke(p,O):p=[...p,...O],l=s.indexOf(g);break}case He:{d=r.index,l=1/0;break}case Ve:{let g=s.indexOf(r.actionId);g!==-1&&(d=g),l=1/0;break}case Be:{s=ke(s,p),p=[],d=Math.min(d,s.length-1);break}case L:{if(b)return c||e;if(v||c&&wt(c.computedStates[d],r,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let h=f[f.length-1];f=[...f.slice(0,-1),nn(a,r.action,h.state,h.error,i)],l=1/0;break}o.maxAge&&s.length===o.maxAge&&C(1),d===s.length-1&&d++;let g=m++;u[g]=r,s=[...s,g],l=s.length-1;break}case Ct:{({monitorState:E,actionsById:u,nextActionId:m,stagedActionIds:s,skippedActionIds:p,committedState:S,currentStateIndex:d,computedStates:f,isLocked:b,isPaused:v}=r.nextLiftedState);break}case at:{l=0,o.maxAge&&s.length>o.maxAge&&(f=q(f,l,a,S,u,s,p,i,v),C(s.length-o.maxAge),l=1/0);break}case ft:{if(f.filter(h=>h.error).length>0)l=0,o.maxAge&&s.length>o.maxAge&&(f=q(f,l,a,S,u,s,p,i,v),C(s.length-o.maxAge),l=1/0);else{if(!v&&!b){d===s.length-1&&d++;let h=m++;u[h]=new $(r,+Date.now()),s=[...s,h],l=s.length-1,f=q(f,l,a,S,u,s,p,i,v)}f=f.map(h=>N(R({},h),{state:a(h.state,$n)})),d=s.length-1,o.maxAge&&s.length>o.maxAge&&C(s.length-o.maxAge),l=1/0}break}default:{l=1/0;break}}return f=q(f,l,a,S,u,s,p,i,v),E=n(E,r),{monitorState:E,actionsById:u,nextActionId:m,stagedActionIds:s,skippedActionIds:p,committedState:S,currentStateIndex:d,computedStates:f,isLocked:b,isPaused:v}}}var $e=(()=>{let e=class e{constructor(n,o,a,c,r,E,u,m){let s=_n(u,m.monitor),p=zn(u,s,E,m.monitor,m),S=k(k(o.asObservable().pipe(Wt(1)),c.actions$).pipe(x(z)),n,c.liftedActions$).pipe(Nt(Mt)),d=a.pipe(x(p)),f=tn(m.connectInZone),b=new Ft(1);this.liftedStateSubscription=S.pipe(Gt(d),_e(f),Ut(({state:D},[l,g])=>{let h=g(D,l);return l.type!==L&&Qe(m)&&(h=kn(h,m.predicate,m.actionsSafelist,m.actionsBlocklist)),c.notify(l,h),{state:h,action:l}},{state:s,action:null})).subscribe(({state:D,action:l})=>{if(b.next(D),l.type===L){let g=l.action;r.next(g)}}),this.extensionStartSubscription=c.start$.pipe(_e(f)).subscribe(()=>{this.refresh()});let v=b.asObservable(),C=v.pipe(x(Ye));Object.defineProperty(C,"state",{value:ae(C,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=n,this.liftedState=v,this.state=C}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new $(n,+Date.now()))}refresh(){this.dispatch(new mt)}reset(){this.dispatch(new Et(+Date.now()))}rollback(){this.dispatch(new gt(+Date.now()))}commit(){this.dispatch(new yt(+Date.now()))}sweep(){this.dispatch(new St)}toggleAction(n){this.dispatch(new vt(n))}jumpToAction(n){this.dispatch(new xt(n))}jumpToState(n){this.dispatch(new It(n))}importState(n){this.dispatch(new At(n))}lockChanges(n){this.dispatch(new Tt(n))}pauseRecording(n){this.dispatch(new Ot(n))}};e.\u0275fac=function(o){return new(o||e)(y(et),y(H),y(le),y(en),y(V),y(G),y(ue),y(tt))},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})();function _e({ngZone:t,connectInZone:e}){return i=>e?new _(n=>i.subscribe({next:o=>t.run(()=>n.next(o)),error:o=>t.run(()=>n.error(o)),complete:()=>t.run(()=>n.complete())})):i}var Ln=new A("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Un(t,e){return!!t||e.monitor!==Xe}function Bn(){let t="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[t]<"u"?window[t]:null}function Rt(t={}){return W([en,et,$e,{provide:Ne,useValue:t},{provide:Ln,deps:[bt,tt],useFactory:Un},{provide:bt,useFactory:Bn},{provide:tt,deps:[Ne],useFactory:Mn},{provide:me,deps:[$e],useFactory:Wn},{provide:he,useExisting:et}])}function Wn(t){return t.state}var Li=(()=>{let e=class e{static instrument(n={}){return{ngModule:e,providers:[Rt(n)]}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=ct({type:e}),e.\u0275inj=st({});let t=e;return t})();var on={providers:[Y(),ge(),te(ee()),xe,Rt({maxAge:25,logOnly:!Jt(),connectInZone:!0}),ie(),se(Fe)]};var Gn={providers:[oe()]},rn=qt(on,Gn);var Hn=()=>ne(Ae,rn),so=Hn;export{so as a};

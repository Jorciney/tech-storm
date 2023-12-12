import{$ as C,Ab as se,Bb as oe,Da as G,Ea as Y,Fa as s,Ga as v,Gb as R,Ia as T,K as y,Ka as O,Ma as c,Na as J,Oa as f,Pa as l,Qa as o,Ra as g,Ta as h,Ua as D,Va as u,W as U,Wa as K,Xa as p,Y as Z,Ya as Q,Za as X,a as k,ab as F,ac as ae,b as H,bb as ee,cb as w,d as A,db as te,e as N,ea as b,eb as I,f as V,fa as x,fb as ie,ha as S,ja as q,k as _,ka as j,mb as ne,o as B,r as E,u as z,v as W,yb as re,zb as M}from"./chunk-5XPGXQEP.js";var le=(()=>{let t=class t{transform(i,r){return r(i)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=j({name:"mapToFunction",type:t,pure:!0,standalone:!0});let e=t;return e})();function fe(e,t){if(e&1&&g(0,"img",6),e&2){let n=h().$implicit;D("alt",n==null?null:n.conditions),c("ngSrc","assets/icons/static/"+(n==null?null:n.icon)+".png")("width",100)("height",100)}}function pe(e,t){if(e&1&&(l(0,"div",4)(1,"div"),u(2),o(),f(3,fe,1,4,"img",5),l(4,"div"),u(5),o()()),e&2){let n=t.$implicit;s(2),p("",n==null||n.datetime==null?null:n.datetime.substring(0,5),"h"),s(1),c("ngIf",n==null?null:n.icon),s(2),p("",n.temp," \xB0")}}var de=(()=>{let t=class t{constructor(){this.todaysForecast=[],this.filterTimeAfterCurrentTime=i=>{let r=new Date().getHours();return i.filter(d=>Number(d.datetime.substring(0,2))>=r)}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=S({type:t,selectors:[["tech-storm-todays-forecast"]],inputs:{todaysForecast:"todaysForecast"},standalone:!0,features:[F],decls:7,vars:4,consts:[[1,"flex","flex-col","overflow-x-auto","w-8/12","p-4","text-gray-500","justify-start","bg-gray-100","rounded-2xl"],[1,"text-lg","font-bold"],[1,"flex","flex-row","justify-between","items-center","max-w-full","overflow-x-auto"],["class","flex flex-col justify-center items-center font-bold px-5 border-r",4,"ngFor","ngForOf"],[1,"flex","flex-col","justify-center","items-center","font-bold","px-5","border-r"],[3,"alt","ngSrc","width","height",4,"ngIf"],[3,"alt","ngSrc","width","height"]],template:function(r,d){r&1&&(l(0,"div",0)(1,"div",1),u(2,"TODAY'S FORECAST"),o(),l(3,"div")(4,"div",2),f(5,pe,6,3,"div",3),w(6,"mapToFunction"),o()()()),r&2&&(s(5),c("ngForOf",I(6,1,d.todaysForecast,d.filterTimeAfterCurrentTime)))},dependencies:[re,M,R,le],encapsulation:2});let e=t;return e})();function he(e){return e instanceof O}var P=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=C({token:t,factory:()=>(()=>{let i=x(O);return he(i)?new L:x(me)})(),providedIn:"root"});let e=t;return e})(),me=(()=>{let t=class t extends P{constructor(i){super(),this.appRef=i,this.isScheduled=!1}schedule(){this.isScheduled||(this.isScheduled=!0,requestAnimationFrame(()=>{this.appRef.tick(),this.isScheduled=!1}))}};t.\u0275fac=function(r){return new(r||t)(b(ne))},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),L=class extends P{schedule(){}},ce=(()=>{let t=class t{constructor(i,r){this.cdRef=i,this.tickScheduler=r}schedule(){this.cdRef.markForCheck(),this.tickScheduler.schedule()}};t.\u0275fac=function(r){return new(r||t)(b(T),b(P))},t.\u0275prov=C({token:t,factory:t.\u0275fac});let e=t;return e})();function xe(e){return t=>e[t.type]?.(t)}function ve(e){return E(e)?e:we(e)?W(Ce(e)):ge(e)?B(e):new V(t=>{t.next(e)})}function ge(e){return typeof e?.then=="function"}function we(e){return ye(e)&&Object.keys(e).length>0&&Object.values(e).every(E)}function ye(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ce(e){return Object.keys(e).reduce((t,n)=>H(k({},t),{[n]:e[n].pipe(y())}),{})}function be(e){let t=xe(e),n=new _(1);return{nextPotentialObservable(i){n.next(i)},handlePotentialObservableChanges(){return n.pipe(y(),Se(),y(De),Z(t))}}}function Se(){return N(U(e=>{let t=ve(e),n=!0,i=!0;return new V(r=>{let d=G(()=>t.subscribe({next(m){r.next({type:"next",value:m,reset:n,synchronous:i}),n=!1},error(m){r.next({type:"error",error:m,reset:n,synchronous:i}),n=!1},complete(){r.next({type:"complete",reset:n,synchronous:i}),n=!1}}));return n&&(r.next({type:"suspense",reset:n,synchronous:!0}),n=!1),i=!1,d})}))}function De(e,t){return e.type!==t.type||e.reset!==t.reset?!1:t.type==="next"?e.value===t.value:t.type==="error"?e.error===t.error:!0}var ue=(()=>{let t=class t{set ngrxLet(i){this.renderEventManager.nextPotentialObservable(i)}constructor(i,r,d,m){this.mainTemplateRef=i,this.viewContainerRef=r,this.errorHandler=d,this.renderScheduler=m,this.isMainViewCreated=!1,this.isSuspenseViewCreated=!1,this.viewContext={$implicit:void 0,ngrxLet:void 0,error:void 0,complete:!1},this.renderEventManager=be({suspense:()=>{this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0,this.viewContext.complete=!1,this.renderSuspenseView()},next:a=>{this.viewContext.$implicit=a.value,this.viewContext.ngrxLet=a.value,a.reset&&(this.viewContext.error=void 0,this.viewContext.complete=!1),this.renderMainView(a.synchronous)},error:a=>{this.viewContext.error=a.error,a.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.complete=!1),this.renderMainView(a.synchronous),this.errorHandler.handleError(a.error)},complete:a=>{this.viewContext.complete=!0,a.reset&&(this.viewContext.$implicit=void 0,this.viewContext.ngrxLet=void 0,this.viewContext.error=void 0),this.renderMainView(a.synchronous)}}),this.subscription=new A}static ngTemplateContextGuard(i,r){return!0}ngOnInit(){this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}renderMainView(i){this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!1,this.viewContainerRef.clear()),this.isMainViewCreated||(this.isMainViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.mainTemplateRef,this.viewContext)),i||this.renderScheduler.schedule()}renderSuspenseView(){this.isMainViewCreated&&(this.isMainViewCreated=!1,this.viewContainerRef.clear()),this.suspenseTemplateRef&&!this.isSuspenseViewCreated&&(this.isSuspenseViewCreated=!0,this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef))}};t.\u0275fac=function(r){return new(r||t)(v(ie),v(J),v(Y),v(ce))},t.\u0275dir=q({type:t,selectors:[["","ngrxLet",""]],inputs:{ngrxLet:"ngrxLet",suspenseTemplateRef:["ngrxLetSuspenseTpl","suspenseTemplateRef"]},standalone:!0,features:[X([ce])]});let e=t;return e})();function Fe(e,t){if(e&1&&g(0,"img",11),e&2){let n=h().$implicit;D("alt",n==null?null:n.conditions),c("ngSrc","assets/icons/animated/"+(n==null?null:n.icon)+".svg")("width",200)("height",200)}}function Ie(e,t){if(e&1&&(l(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8),u(5),w(6,"uppercase"),o(),l(7,"div",9),u(8),o(),l(9,"div",9),u(10),o(),l(11,"div",9),u(12),o()()(),l(13,"div",8),u(14),w(15,"number"),o()(),f(16,Fe,1,4,"img",10),o()),e&2){let n=t.$implicit,i=h().$implicit;s(5),K(te(6,7,i==null?null:i.address)),s(3),p("Feels like ",i==null||i.currentConditions==null?null:i.currentConditions.feelslike," \xB0"),s(2),Q(" Chance of ",i==null||i.currentConditions==null?null:i.currentConditions.preciptype," ",i==null||i.currentConditions==null?null:i.currentConditions.precipprob," % "),s(2),p("Sunset at ",i==null||i.currentConditions==null?null:i.currentConditions.sunset,""),s(2),p("",I(15,9,n==null?null:n.temp,"1.0-0")," \xB0"),s(2),c("ngIf",n==null?null:n.icon)}}var Me=()=>[];function Re(e,t){if(e&1&&(l(0,"div",1),f(1,Ie,17,12,"div",2),g(2,"tech-storm-todays-forecast",3),o()),e&2){let n=t.$implicit,i=h();s(1),c("ngrxLet",i.currentWeather$),s(1),c("todaysForecast",(n==null||n.days==null||n.days[0]==null?null:n.days[0].hours)||ee(2,Me))}}var Je=(()=>{let t=class t{constructor(){this.weatherFacade=x(ae),this.weatherData$=this.weatherFacade.weatherData$,this.currentWeather$=this.weatherData$.pipe(z(i=>i?.currentConditions))}ngOnInit(){this.weatherFacade.loadWeatherData("zemst")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=S({type:t,selectors:[["tech-storm-dashboard-view"]],standalone:!0,features:[F],decls:1,vars:1,consts:[["class","h-full w-full flex flex-col justify-center items-center",4,"ngrxLet"],[1,"h-full","w-full","flex","flex-col","justify-center","items-center"],["class","flex flex-row items-center justify-between gap-5",4,"ngrxLet"],[1,"w-full",3,"todaysForecast"],[1,"flex","flex-row","items-center","justify-between","gap-5"],[1,"flex","flex-col","gap-8"],[1,"flex","flex-col","gap-2"],[1,"flex","flex-col"],[1,"font-extrabold","text-3xl"],[1,"text-gray-500","text-xs"],["priority","true",3,"alt","ngSrc","width","height",4,"ngIf"],["priority","true",3,"alt","ngSrc","width","height"]],template:function(r,d){r&1&&f(0,Re,3,3,"div",0),r&2&&c("ngrxLet",d.weatherData$)},dependencies:[de,ue,se,oe,R,M],encapsulation:2});let e=t;return e})();export{Je as DashboardViewComponent};

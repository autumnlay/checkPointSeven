import{r as D,c as S,a as b,o as u,b as m,d as n,e as h,F as O,t as p,f as B,S as P,u as H,g as z,w as K,h as y,v as E,i as W,j as w,k,l as N,m as Y,n as G,p as F,q as J,s as Q,x as X,y as Z}from"./vendor.46053ffe.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}};ee();const c=D({user:{},account:{},events:[],comments:[],attendees:[],myAttendees:[],accountAttendees:{},currentEvent:{}});var g=(s,e)=>{for(const[t,o]of e)s[t]=o;return s};const te={name:"App",setup(){return{appState:S(()=>c)}}},ne=n("footer",null,[n("div",{class:"bg-dark text-light text-center p-4"}," Made with \u{1F496} by CodeWorks ")],-1);function oe(s,e,t,o,a,i){const r=b("Navbar"),v=b("router-view");return u(),m(O,null,[n("header",null,[h(r)]),n("main",null,[h(v)]),ne],64)}var se=g(te,[["render",oe]]);const ae={prop:{comment:{type:Object,required:!0}},setup(){return{comments:S(()=>c.comments),events:S(()=>c.events)}}},re={class:"row"},ie=n("div",{class:"col-12"},"this should be the comment section",-1);function ce(s,e,t,o,a,i){return u(),m("div",re,[ie,n("div",null,p(o.comments.body),1)])}var le=g(ae,[["render",ce]]),de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const I=window.location.origin.includes("localhost"),q=I?"http://localhost:3000":"",ue="autumn-codeworks.us.auth0.com",me="BFC81E6RCEnEND7yqGET5O5R7UGhwmmo",_e="https://autumn-bcw.com";function x(s,e){if(I)console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(s){case"log":case"assert":return}console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const d={log(){x("log",arguments)},error(){x("error",arguments)},warn(){x("warn",arguments)},assert(){x("assert",arguments)},trace(){x("trace",arguments)}},_=B.create({baseURL:q,timeout:8e3});class A{constructor(e={}){this.id=e.id,this.name=e.name,this.description=e.description,this.coverImg=e.coverImg,this.location=e.location,this.capacity=e.capacity,this.startDate=e.startDate,this.isCanceled=e.isCanceled,this.type=e.type,this.creatorId=e.creatorId}}class pe{async getAll(e=""){const t=await _.get("api/events"+e);d.log("all events",t.data),c.events=t.data}async getById(e){const t=await _.get("api/events/"+e);d.log(t.data),c.currentEvent=new A(t.data)}async create(e){const t=await _.post("api/events",e);d.log(t.data),c.events.push(new A(t.data)),c.currentEvent=new A(t.data)}async edit(e){const t=await _.put("api/events/"+e.id,e);d.log(t.data);const o=new A(t.data);c.currentEvent=o;const a=c.events.findIndex(i=>i.id===o.id);if(a===-1){c.events.push(o);return}c.events.splice(a,1,o)}async remove(){const e=await _.delete("api/events/"+c.currentEvent.id);d.log(e.data),c.events=c.events.filter(t=>t.id!==c.currentEvent.id),c.currentEvent=new A}}const R=new pe;class j{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",a="Yes, delete it!"){try{return!!(await P.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:a})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",a=3e3,i=!0){P.fire({title:e,icon:t,position:o,timer:a,timerProgressBar:i,toast:!0,showConfirmButton:!1})}}const ve={setup(){H();const s=z(),e=D({editable:{}});return K(async()=>{}),{router:s,state:e,async createEvent(){try{await R.create(e.editable)}catch(t){d.error(t),j.toast("create Event is not working","error")}}}}},he={class:"justify-content-around d-flex row"},ge={class:"col-md-6"},fe=n("label",{for:"name",class:"form-label"}," Event Name",-1),be={class:"col-md-6"},ye=n("label",{for:"description",class:"form-label"}," Describe your event",-1),Ee={class:"col-md-6"},we=n("label",{for:"location",class:"form-label"}," Location",-1),xe={class:"col-md-6"},Ae=n("label",{for:"capacity",class:"form-label"}," capacity ",-1),Ce={class:"col-md-6"},Se=n("label",{for:"startDate",class:"form-label"}," date ",-1),Te=n("div",{class:"modal-footer"},[n("button",{type:"button",class:"btn btn-secondary text-light","data-bs-dismiss":"modal"}," Close "),n("button",{type:"submit",class:"btn btn-success"},"Submit")],-1);function ke(s,e,t,o,a,i){return u(),m("form",{onSubmit:e[5]||(e[5]=W((...r)=>o.createEvent&&o.createEvent(...r),["prevent"])),class:"CreateEvent"},[n("div",he,[n("div",ge,[fe,y(n("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.state.editable.name=r),type:"text",class:"form-control",name:"name",id:"name",placeholder:"Name",min:"3",max:"100",required:""},null,512),[[E,o.state.editable.name]])]),n("div",be,[ye,y(n("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.state.editable.description=r),type:"text",class:"form-control",name:"description",id:"description",placeholder:"description",min:"3",max:"500",required:""},null,512),[[E,o.state.editable.description]])]),n("div",Ee,[we,y(n("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>o.state.editable.location=r),type:"text",class:"form-control",name:"location",id:"location",placeholder:"location",min:"3",max:"100",required:""},null,512),[[E,o.state.editable.location]])]),n("div",xe,[Ae,y(n("input",{"onUpdate:modelValue":e[3]||(e[3]=r=>o.state.editable.capacity=r),type:"number",class:"form-control",name:"capacity",id:"capacity",placeholder:"capacity",min:"1",required:""},null,512),[[E,o.state.editable.capacity]])]),n("div",Ce,[Se,y(n("input",{"onUpdate:modelValue":e[4]||(e[4]=r=>o.state.editable.startDate=r),type:"date",class:"form-control",name:"startDate",id:"startDate",placeholder:"startDate",min:"1",required:""},null,512),[[E,o.state.editable.startDate]])])]),Te],32)}var $e=g(ve,[["render",ke]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const Oe={props:{event:{type:Object,required:!0}},setup(){return{async join(){return await R.edit(),c.events,c.attendees}}}},Pe={class:"col card p-3"},Ne=["src"],Ie=n("b",null,"Starts on",-1),qe=n("b",null,"Meeting place:",-1),Re={key:0,class:"text-danger"},je={key:1},Le=n("b",null,"Capacity left:",-1),Ue=w(" See Details ");function Ve(s,e,t,o,a,i){const r=b("router-link");return u(),m("div",Pe,[n("img",{src:t.event.coverImg,alt:""},null,8,Ne),n("h4",null,p(t.event.name),1),n("p",null,p(t.event.description),1),n("p",null,[Ie,w(" "+p(new Date(t.event.startDate))+" -",1)]),n("p",null,[qe,w(" "+p(t.event.location),1)]),n("p",null,p(t.event.type),1),t.event.capicity===0?(u(),m("div",Re,"SOLD OUT")):(u(),m("div",je,[n("p",null,[Le,w(" "+p(t.event.capacity),1)]),n("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(...v)=>o.join&&o.join(...v))},"Join Event")])),h(r,{to:{name:"Event",params:{id:t.event.id}},class:"btn text-dark lighten-30 selectable text-uppercase"},{default:k(()=>[Ue]),_:1},8,["to"])])}var Me=g(Oe,[["render",Ve]]),Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me});const He={},ze={class:"modal",tabindex:"-1"},Ke={class:"modal-dialog modal-xl"},We={class:"modal-content"},Ye={class:"modal-header"},Ge={class:"modal-title"},Fe=n("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Je={class:"modal-body"};function Qe(s,e){return u(),m("div",ze,[n("div",Ke,[n("div",We,[n("div",Ye,[n("h5",Ge,[N(s.$slots,"modal-title")]),Fe]),n("div",Je,[N(s.$slots,"modal-body")])])])])}var Xe=g(He,[["render",Qe]]),Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xe});const et="modulepreload",L={},tt="/",T=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${tt}${o}`,o in L)return;L[o]=!0;const a=o.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":et,a||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),a)return new Promise((v,f)=>{r.addEventListener("load",v),r.addEventListener("error",f)})})).then(()=>e())};function nt(s){switch(s){case"./pages/AboutPage.vue":return T(()=>import("./AboutPage.b5ad9852.js"),["assets/AboutPage.b5ad9852.js","assets/vendor.46053ffe.js"]);case"./pages/AccountPage.vue":return T(()=>import("./AccountPage.417022d5.js"),["assets/AccountPage.417022d5.js","assets/AccountPage.689e454d.css","assets/vendor.46053ffe.js"]);case"./pages/EventPage.vue":return T(()=>import("./EventPage.0a875bf9.js"),["assets/EventPage.0a875bf9.js","assets/vendor.46053ffe.js"]);case"./pages/HomePage.vue":return T(()=>import("./HomePage.00d9660c.js"),["assets/HomePage.00d9660c.js","assets/vendor.46053ffe.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function $(s){return()=>nt(`./pages/${s}.vue`)}const ot=[{path:"/",name:"Home",component:$("HomePage")},{path:"/events/:id",name:"Event",component:$("EventPage")},{path:"/account",name:"Account",component:$("AccountPage"),beforeEnter:F}],U=Y({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:G(),routes:ot});class st{async getAccount(){try{const e=await _.get("/account");c.account=e.data}catch(e){d.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const at=new st,rt={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class it{constructor(e=!1,t=q){}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){d.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){d.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(rt.authenticate,e)}onError(e){d.error("[SOCKET_ERROR]",e)}enqueue(e,t){d.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){d.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class ct extends it{constructor(){super();this.on("error",this.onError)}onError(e){j.toast(e.message,"error")}}const V=new ct,l=J({domain:ue,clientId:me,audience:_e,useRefreshTokens:!0,onRedirectCallback:s=>{U.push(s&&s.targetUrl?s.targetUrl:window.location.pathname)}});l.on(l.AUTH_EVENTS.AUTHENTICATED,async function(){_.defaults.headers.authorization=l.bearer,_.interceptors.request.use(lt),c.user=l.user,await at.getAccount(),V.authenticate(l.bearer)});async function lt(s){if(!l.isAuthenticated)return s;const e=l.identity.exp*1e3,t=e<Date.now(),o=e<Date.now()+1e3*60*60*12;return t?await l.loginWithPopup():o&&(await l.getTokenSilently(),_.defaults.headers.authorization=l.bearer,V.authenticate(l.bearer)),s}const dt={setup(){return{user:S(()=>c.user),async login(){l.loginWithPopup()},async logout(){l.logout({returnTo:window.location.origin})}}}},C=s=>(Q("data-v-0021aa18"),s=s(),X(),s),ut={class:"navbar navbar-expand-lg navbar-primary bg-primary px-3"},mt=C(()=>n("div",{class:"d-flex flex-column align-items-center"},[n("img",{alt:"logo",src:"https://img.favpng.com/10/21/2/radio-telecommunications-tower-computer-icons-clip-art-png-favpng-vLXwP8ATt3Mb2J9WNaTeQaBXa.jpg",height:"45"})],-1)),_t=C(()=>n("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1)),pt=C(()=>n("button",{class:"btn btn-secondary"},"Create Event",-1)),vt={class:"collapse navbar-collapse",id:"navbarText"},ht={class:"navbar-text"},gt={key:1,class:"dropdown my-2 my-lg-0"},ft={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},bt=["src"],yt={class:"mx-3 text-success lighten-30"},Et={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},wt=C(()=>n("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),xt=C(()=>n("i",{class:"mdi mdi-logout"},null,-1)),At=w(" logout "),Ct=[xt,At],St={class:"row"};function Tt(s,e,t,o,a,i){const r=b("router-link"),v=b("CreateEvent");return u(),m(O,null,[n("nav",ut,[h(r,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:k(()=>[mt]),_:1}),_t,pt,n("div",vt,[n("span",ht,[o.user.isAuthenticated?(u(),m("div",gt,[n("div",ft,[n("img",{src:o.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,bt),n("span",yt,p(o.user.name),1)]),n("div",Et,[h(r,{to:{name:"Account"}},{default:k(()=>[wt]),_:1}),n("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...f)=>o.logout&&o.logout(...f))},Ct)])])):(u(),m("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...f)=>o.login&&o.login(...f))}," Login "))])])]),n("div",St,[h(v)])],64)}var kt=g(dt,[["render",Tt],["__scopeId","data-v-0021aa18"]]),$t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt});function Dt(s){Object.entries({"./components/Comment.vue":de,"./components/CreateEvent.vue":De,"./components/Event.vue":Be,"./components/Model.vue":Ze,"./components/Navbar.vue":$t}).forEach(([t,o])=>{const a=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");s.component(a,o.default)})}const M=Z(se);Dt(M);M.use(U).mount("#app");export{c as A,Me as E,j as P,g as _,_ as a,l as b,R as e,d as l};
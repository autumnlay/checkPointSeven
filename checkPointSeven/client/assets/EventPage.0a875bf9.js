import{u as g,g as h,z as f,c as i,a as y,o as c,b as r,d as e,t as a,j as m,F as d,A as w,e as S}from"./vendor.46053ffe.js";import{a as v,l as _,A as l,_ as k,e as x,P as A}from"./index.4efd36cc.js";class b{async getAll(n){const s=await v.get(`api/events/${n}/comments`);_.log("all comments",s.data),l.comments=s.data}async create(n){const s=await v.post("api/comments",n);l.comments.unshift(s.data)}}const B=new b,C={setup(){const o=g();return h(),f(async()=>{try{await x.getById(o.params.id),await B.getAll(o.params.id)}catch(n){_.error(n),A.toast("Something went wrong with the event","error")}}),{event:i(()=>l.currentEvent),account:i(()=>l.account),comments:i(()=>l.comments)}}},D={class:"col card p-3"},j=["src"],E=e("b",null,"Starts on",-1),N=e("b",null,"Meeting place:",-1),P={key:0,class:"text-danger"},V={key:1},F=e("b",null,"Seats left:",-1),I={class:"row"};function L(o,n,s,t,M,O){const p=y("Comment");return c(),r(d,null,[e("div",D,[e("img",{src:t.event.coverImg,alt:""},null,8,j),e("h4",null,a(t.event.name),1),e("p",null,a(t.event.description),1),e("p",null,[E,m(" "+a(new Date(t.event.startDate))+" -",1)]),e("p",null,[N,m(" "+a(t.event.location),1)]),e("p",null,a(t.event.type),1),t.event.capicity===0?(c(),r("div",P,"SOLD OUT")):(c(),r("div",V,[e("p",null,[F,m(" "+a(t.event.capacity),1)])]))]),e("div",I,[(c(!0),r(d,null,w(t.comments,u=>(c(),r("div",{class:"col-12",key:u.id}))),128)),S(p,{comment:o.c},null,8,["comment"])])],64)}var z=k(C,[["render",L]]);export{z as default};
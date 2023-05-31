import{_ as K,m as U,a as z,n as G,u as J,c as E,r as T,o as P,b as e,d as o,i as g,t as f,g as t,f as i,q as Q,e as n,v as r,F as B,x as D,p as W,h as X}from"./index-196d7642.js";import{u as Y}from"./input-33a9bda4.js";import{u as Z}from"./validations-83886343.js";import{u as tt}from"./utils-6fb794d9.js";import{T as et}from"./TabContainer-d50ef63e.js";import at from"./InvoiceConfigs-98e20340.js";import nt from"./ReceiptConfigs-2cca97a8.js";import ot from"./BillingConfigs-ced40cb4.js";import st from"./InvoicesPage-5c6b5f16.js";import"./DataPage-57ff735a.js";import"./errors-74d0bde9.js";import"./DataForm-a47f389f.js";import"./utils-211c8aa5.js";const ct=d=>(W("data-v-f740e056"),d=d(),X(),d),it={class:"page-container"},lt={class:"heading"},ut={key:0,class:"contact-container"},rt={class:"field-label"},dt={key:0,class:"field-value"},_t={key:0},vt=["src"],pt={key:1,class:"field-value"},mt=ct(()=>g("span",null,"--- no value ---",-1)),ft=[mt],gt={__name:"ViewContact",setup(d){const V=U(),{fieldsLayout:x,dataFields:p,includeKeys:m}=tt(),{inputLabel:R,inputValue:y,fileField:h}=Y(p),S=z(),{isEmpty:b,notEmpty:C}=Z(),_=G(),{flashMessage:k}=J(),L=Object.assign({},V.currentRoute.value),l=E(()=>L.params.id),a=T(),$=E(()=>a.value?`Contact: ${a.value.name}`:"Loading Contact...");async function I(){a.value=null;const u={include:m.value};await S.view("contacts",l.value,u).then(v=>{a.value=v,k("Loaded contact successfully!")}).catch(v=>{console.log(v),k("Error loading contact!")})}const s=T(0),w=[{label:"Details",onchange:I},{label:"Invoice Configs",onchange:F},{label:"Receipt Configs",onchange:j},{label:"Billing Configs",onchange:A},{label:"Invoices",onchange:M}];async function F(){_.emitEvent("loadData",{dataType:"Invoice Configs"})}async function j(){_.emitEvent("loadData",{dataType:"Receipt Configs"})}async function A(){_.emitEvent("loadData",{dataType:"Billing Configs"})}async function M(){_.emitEvent("loadData",{dataType:"Invoices"})}async function N(u){await w[u].onchange(),s.value=u}return P(async()=>{await I()}),(u,v)=>(e(),o("div",it,[g("h2",lt,f(t($)),1),a.value?n("",!0):(e(),i(t(Q),{key:0})),a.value?(e(),i(et,{key:1,tabs:w,"selected-tab":s.value,onTabChange:N},{"tab-0":r(()=>[s.value===0?(e(),o("div",ut,[(e(!0),o(B,null,D(t(x),(O,q)=>(e(),o("div",{key:q,class:"data-row"},[(e(!0),o(B,null,D(Object.keys(O),(c,H)=>(e(),o("div",{key:H,class:"data-field"},[g("div",rt,f(t(R)(c)),1),t(C)(a.value)&&t(C)(a.value[c])?(e(),o("div",dt,[t(h)(c)?n("",!0):(e(),o("span",_t,f(t(y)(c,a.value,t(m),t(p))),1)),t(h)(c)?(e(),o("img",{key:1,style:{width:"50%"},src:t(y)(c,a.value,t(m),t(p))},null,8,vt)):n("",!0)])):n("",!0),t(b)(a.value)||t(b)(a.value[c])?(e(),o("div",pt,ft)):n("",!0)]))),128))]))),128))])):n("",!0)]),"tab-1":r(()=>[s.value===1?(e(),i(at,{key:0,"billing-contact-id":t(l)},null,8,["billing-contact-id"])):n("",!0)]),"tab-2":r(()=>[s.value===2?(e(),i(nt,{key:0,"billing-contact-id":t(l)},null,8,["billing-contact-id"])):n("",!0)]),"tab-3":r(()=>[s.value===3?(e(),i(ot,{key:0,"contact-id":t(l)},null,8,["contact-id"])):n("",!0)]),"tab-4":r(()=>[s.value===4?(e(),i(st,{key:0,"contact-id":t(l)},null,8,["contact-id"])):n("",!0)]),_:1},8,["selected-tab"])):n("",!0)]))}},Rt=K(gt,[["__scopeId","data-v-f740e056"]]);export{Rt as default};

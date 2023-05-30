import{_ as K,m as M,a as U,n as z,u as G,c as k,r as J,o as P,b as e,d as n,i as u,t as m,g as t,f as w,q as Q,e as d,v as c,F as B,x as E,j as _}from"./index-456a89cc.js";import{u as W,a as X}from"./input-701303c2.js";import{u as Y}from"./utils-efef0e9b.js";import{T as Z}from"./TabContainer-65d2b41a.js";import tt from"./InvoiceConfigs-9204b032.js";import at from"./ReceiptConfigs-eddf219f.js";import et from"./BillingConfigs-80049446.js";import nt from"./InvoicesPage-4edd42ff.js";import"./DataPage-58fc72df.js";import"./errors-a6177d44.js";import"./DataForm-c9afdb67.js";import"./utils-a8a1fa8d.js";const ot={class:"page-container"},st={class:"heading"},ct={class:"contact-container"},it={class:"field-label"},lt={class:"field-value"},rt={key:0},ut={key:1},dt={__name:"ViewContact",setup(_t){const I=M(),{fieldsLayout:T,dataFields:p,includeKeys:v}=Y(),{inputLabel:V,inputValue:D}=W(p),x=U(),{isEmpty:f,notEmpty:g}=X(),i=z(),b=G(),R=Object.assign({},I.currentRoute.value),s=k(()=>R.params.id),a=J(),L=k(()=>a.value?`Contact: ${a.value.name}`:"Loading Contact...");async function h(){a.value=null;const o={include:v.value};await x.view("contacts",s.value,o).then(l=>{a.value=l,y("Loaded contact successfully!")}).catch(l=>{console.log(l),y("Error loading contact!")})}function y(o){b.show(o),setTimeout($,5e3)}function $(){b.hide()}const C=[{label:"Details",onchange:h},{label:"Invoice Configs",onchange:j},{label:"Receipt Configs",onchange:F},{label:"Billing Configs",onchange:N},{label:"Invoices",onchange:S}];async function j(){i.emitEvent("loadData",{dataType:"Invoice Configs"})}async function F(){i.emitEvent("loadData",{dataType:"Receipt Configs"})}async function N(){i.emitEvent("loadData",{dataType:"Billing Configs"})}async function S(){i.emitEvent("loadData",{dataType:"Invoices"})}function A(o){C[o].onchange()}return P(async()=>{await h()}),(o,l)=>(e(),n("div",ot,[u("h2",st,m(t(L)),1),a.value?d("",!0):(e(),w(t(Q),{key:0})),a.value?(e(),w(Z,{key:1,tabs:C,onTabChange:A},{"tab-0":c(()=>[u("div",ct,[(e(!0),n(B,null,E(t(T),(O,q)=>(e(),n("div",{key:q,class:"data-row"},[(e(!0),n(B,null,E(Object.keys(O),(r,H)=>(e(),n("div",{key:H,class:"data-field"},[u("div",it,m(t(V)(r)),1),u("div",lt,[t(g)(a.value)&&t(g)(a.value[r])?(e(),n("span",rt,m(t(D)(r,a.value,t(v),t(p))),1)):d("",!0),t(f)(a.value)||t(f)(a.value[r])?(e(),n("span",ut," --- no value --- ")):d("",!0)])]))),128))]))),128))])]),"tab-1":c(()=>[_(tt,{"billing-contact-id":t(s)},null,8,["billing-contact-id"])]),"tab-2":c(()=>[_(at,{"billing-contact-id":t(s)},null,8,["billing-contact-id"])]),"tab-3":c(()=>[_(et,{"contact-id":t(s)},null,8,["contact-id"])]),"tab-4":c(()=>[_(nt,{"contact-id":t(s)},null,8,["contact-id"])]),_:1})):d("",!0)]))}},Et=K(dt,[["__scopeId","data-v-cdd4079d"]]);export{Et as default};

import{_ as O,m as A,a as I,u as z,r as p,c,o as X,b as m,d as y,i as h,y as F,t as W,g as s,e as k,j as _,z as Y,A as q,f as G,M as H,X as J}from"./index-196d7642.js";import{u as K}from"./errors-74d0bde9.js";import{u as L}from"./utils-3e19fdef.js";import{T as P}from"./TemplateEditor-321ee58f.js";import"./validations-83886343.js";import"./TabContainer-d50ef63e.js";const Q={class:"page-container"},Z={class:"heading"},$={class:"name"},ee={key:1,class:"actions"},ae={__name:"NewTemplate",props:{disabled:{type:Boolean,default:!1}},setup(M){const T=A(),d=I(),b=K(),{flashMessage:l}=z(),{initSampleData:S}=L(),v=p({}),C=Object.assign({},T.currentRoute.value),o=c(()=>{if(t.value)return t.value.id}),f=c({get:()=>t.value.name,set:e=>{t.value.name=e}}),r=c(()=>C.params.templateType),E=c(()=>r.value==="invoice_templates"?"Create Invoice Template":"Create Receipt Template"),t=p({name:null,contentMarkup:null,contentStyles:null}),i=p(!1),u=p({});function V(e){return Object.entries(e).reduce((a,[n,R])=>(a[n]=R.map(U=>({name:U,params:{}})),a),{})}function g(e){return u.value[e]?u.value[e].map(a=>b[a.name](a.params)).join(", "):""}const N=c(()=>{const e={};return u.value.contentMarkup&&(e.contentMarkup=g("contentMarkup")),u.value.contentStyles&&(e.contentStyles=g("contentStyles")),e});async function w(e){if(!o.value){t.value.contentMarkup=e;return}const a=Object.assign({},t.value,{contentMarkup:e});await d.update(r.value,o.value,a).then(n=>{t.value=n,l("Updated markup successfully!")}).catch(n=>{console.error(n),l("Error updating markup!")})}async function D(e){if(!o.value){t.value.contentStyles=e;return}const a=Object.assign({},t.value,{contentStyles:e});await d.update(r.value,o.value,a).then(n=>{t.value=n,l("Updated styles successfully!")}).catch(n=>{console.error(n),l("Error updating styles!")})}function j(e){v.value=e}function x(){i.value=!i.value}async function B(){const e={name:t.value.name,contentMarkup:t.value.contentMarkup,contentStyles:t.value.contentStyles};await d.create(r.value,e).then(a=>{t.value=a,l("Template created successfully!")}).catch(a=>{l("Error creating template!"),u.value=V(a),console.log(a)})}return X(async()=>{v.value=S(r.value)}),(e,a)=>(m(),y("div",Q,[h("h2",Z,[F(W(s(E))+" ",1),s(o)?k("",!0):(m(),y("i",{key:0,class:"fa-solid fa-circle-exclamation",onClick:x}))]),h("div",$,[_(s(q),{modelValue:s(f),"onUpdate:modelValue":a[0]||(a[0]=n=>Y(f)?f.value=n:null),label:"Template Name",size:"lg","error-message":g("name")},null,8,["modelValue","error-message"])]),t.value?(m(),G(P,{key:0,id:t.value.id,"template-type":s(r),"content-markup":t.value.contentMarkup,"content-styles":t.value.contentStyles,data:v.value,disabled:M.disabled,"enable-generate":!1,"error-messages":s(N),onContentMarkupChange:w,onContentStylesChange:D,onDataChange:j},null,8,["id","template-type","content-markup","content-styles","data","disabled","error-messages"])):k("",!0),s(o)?k("",!0):(m(),y("div",ee,[_(s(H),{value:"Create Template",icon:"fa-solid fa-check",onClick:B})])),_(s(J),{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=n=>i.value=n),title:"Reminder",content:"You have not saved your template. Make sure to click on Create Template to submit the changes.",width:600,height:250},null,8,["modelValue"])]))}},ue=O(ae,[["__scopeId","data-v-f8f89b7a"]]);export{ue as default};

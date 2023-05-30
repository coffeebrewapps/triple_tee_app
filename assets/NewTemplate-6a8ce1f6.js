import{_ as I,m as z,a as X,u as F,r as p,c,o as W,b as m,d as g,i as M,y as Y,t as q,g as s,e as k,j as _,z as G,A as H,f as J,M as K,X as L}from"./index-456a89cc.js";import{u as P}from"./errors-a6177d44.js";import{u as Q}from"./utils-3e19fdef.js";import{T as Z}from"./TemplateEditor-4ab264f1.js";import"./TabContainer-65d2b41a.js";const $={class:"page-container"},ee={class:"heading"},te={class:"name"},ae={key:1,class:"actions"},ne={__name:"NewTemplate",props:{disabled:{type:Boolean,default:!1}},setup(T){const S=z(),d=X(),b=P(),h=F(),{initSampleData:C}=Q(),v=p({}),w=Object.assign({},S.currentRoute.value),l=c(()=>{if(a.value)return a.value.id}),f=c({get:()=>a.value.name,set:e=>{a.value.name=e}}),o=c(()=>w.params.templateType),E=c(()=>o.value==="invoice_templates"?"Create Invoice Template":"Create Receipt Template"),a=p({name:null,contentMarkup:null,contentStyles:null}),i=p(!1),u=p({});function V(e){return Object.entries(e).reduce((t,[n,O])=>(t[n]=O.map(A=>({name:A,params:{}})),t),{})}function y(e){return u.value[e]?u.value[e].map(t=>b[t.name](t.params)).join(", "):""}const N=c(()=>{const e={};return u.value.contentMarkup&&(e.contentMarkup=y("contentMarkup")),u.value.contentStyles&&(e.contentStyles=y("contentStyles")),e});async function B(e){if(!l.value){a.value.contentMarkup=e;return}const t=Object.assign({},a.value,{contentMarkup:e});await d.update(o.value,l.value,t).then(n=>{a.value=n,r("Updated markup successfully!")}).catch(n=>{console.error(n),r("Error updating markup!")})}async function D(e){if(!l.value){a.value.contentStyles=e;return}const t=Object.assign({},a.value,{contentStyles:e});await d.update(o.value,l.value,t).then(n=>{a.value=n,r("Updated styles successfully!")}).catch(n=>{console.error(n),r("Error updating styles!")})}function j(e){v.value=e}function x(){i.value=!i.value}function r(e){h.show(e),setTimeout(R,5e3)}function R(){h.hide()}async function U(){const e={name:a.value.name,contentMarkup:a.value.contentMarkup,contentStyles:a.value.contentStyles};await d.create(o.value,e).then(t=>{a.value=t,r("Template created successfully!")}).catch(t=>{r("Error creating template!"),u.value=V(t),console.log(t)})}return W(async()=>{v.value=C(o.value)}),(e,t)=>(m(),g("div",$,[M("h2",ee,[Y(q(s(E))+" ",1),s(l)?k("",!0):(m(),g("i",{key:0,class:"fa-solid fa-circle-exclamation",onClick:x}))]),M("div",te,[_(s(H),{modelValue:s(f),"onUpdate:modelValue":t[0]||(t[0]=n=>G(f)?f.value=n:null),label:"Template Name",size:"lg","error-message":y("name")},null,8,["modelValue","error-message"])]),a.value?(m(),J(Z,{key:0,id:a.value.id,"template-type":s(o),"content-markup":a.value.contentMarkup,"content-styles":a.value.contentStyles,data:v.value,disabled:T.disabled,"enable-generate":!1,"error-messages":s(N),onContentMarkupChange:B,onContentStylesChange:D,onDataChange:j},null,8,["id","template-type","content-markup","content-styles","data","disabled","error-messages"])):k("",!0),s(l)?k("",!0):(m(),g("div",ae,[_(s(K),{value:"Create Template",icon:"fa-solid fa-check",onClick:U})])),_(s(L),{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=n=>i.value=n),title:"Reminder",content:"You have not saved your template. Make sure to click on Create Template to submit the changes.",width:600,height:250},null,8,["modelValue"])]))}},ce=I(ne,[["__scopeId","data-v-fcd28ec9"]]);export{ce as default};

import{u as Ue}from"./input-61224a77.js";import{u as ke}from"./errors-53bc63a8.js";import{u as De}from"./validations-9a1af222.js";import{_ as Fe,c as T,r as v,o as Ce,b as r,d as h,i as B,F as w,y as x,H as Oe,D as I,f as b,g as t,B as M,e as m,l as Te,T as Be,U as ze,k as je,V as _,W as Se,X as we,Z as $,j as z,$ as xe,I as L}from"./index-2c32b8d5.js";const Ie={class:"body"},Me={class:"field-input"},_e={key:0,class:"field-toggle"},$e={key:0,class:"actions"},Le={__name:"DataForm",props:{modelValue:{type:Object,default(){return{}}},fieldsLayout:{type:Array,default(){return[]}},dataFields:{type:Array,default(){return[]}},schemas:{type:Object,default(){return{}}},errorMessages:{type:Object,default(){return{}}},compact:{type:Boolean,default:!1},submittable:{type:Boolean,default:!0},confirmButton:{type:Object,default(){return{type:"text",icon:"fa-solid fa-check",value:"Confirm"}}},cancelButton:{type:Object,default(){return{type:"text",icon:"fa-solid fa-xmark",value:"Cancel"}}}},emits:["update:modelValue","submit","cancel"],setup(y,{emit:U}){const V=y,n=T({get:()=>V.modelValue,set:a=>{U("update:modelValue",a)}}),E=v({}),{schemasMap:k,serverOptionsFields:P,inputType:c,inputLabel:u,inputableField:H,multiInputableField:N,multiSelectableField:R,singleSelectableField:A,nullToggleableField:D,nullToggleableFields:J,objectField:W,fileField:X,formatInputOptionsData:Z,fetchOptions:q,initOptionsData:G}=Ue(V.schemas),{notEmpty:K}=De(),Q=ke(),F=v(J.value.reduce((a,o)=>(a[o]=!1,a),{}));function i(a){return!D(a)||F.value[a]}function Y(a){return i(a)&&H(a)}function f(a){return i(a)&&X(a)}function ee(a){const o=u(a);return K(n.value[a])?`${o} (Existing: ${n.value[a]})`:o}function ae(a){return i(a)&&(N(a)||W(a))}function te(a){return i(a)&&c(a)==="date"}function ne(a){return i(a)&&c(a)==="datetime"}function oe(a){return i(a)&&(c(a)==="enum"||c(a)==="select")}function se(a){return i(a)&&c(a)==="daterange"}function re(a){return i(a)&&c(a)==="datetimerange"}function le(a){return i(a)&&c(a)==="boolean"}function p(a){return V.dataFields.find(o=>o===a)}function ue(a){return`Has ${u(a)}`}function me(a){return(c(a)==="select"||c(a)==="enum")&&k.value[a].options.length>30}function d(a){return!V.errorMessages||!V.errorMessages[a]?"":V.errorMessages[a].map(o=>Q[o.name](o.params)).join(", ")}const j=v({});function ce(a,o){const l=a.target.files[0];j.value[o]=l}const C=v({});function g(a){return C.value[a]}function ie(a){return i(a)&&A(a)&&!!g(a)}function pe(a){return i(a)&&R(a)&&!!g(a)}const S=T(()=>P.value.reduce((a,o)=>(a[o]=l=>{de(o,l)},a),{}));async function de(a,o){const l=k.value[a].limit||5;await q(a,o).then(O=>{C.value[a]=Z(a,o,l,O)})}const be=T(()=>V.compact?"form compact":"form");function ge(a){return D(a)?"data-field toggleable":"data-field"}function ye(){return Object.entries(n.value).reduce((a,[o,l])=>(c(o)==="file"?a[o]=j.value[o]:a[o]=l,a),{})}function Ve(){const a=ye();U("submit",a)}function he(){U("cancel")}return Ce(async()=>{E.value=V.modelValue,await G().then(a=>{C.value=a}).catch(a=>{console.error(a)})}),(a,o)=>(r(),h("div",{class:I(t(be))},[B("div",Ie,[(r(!0),h(w,null,x(y.fieldsLayout,(l,O)=>(r(),h("div",{key:O,class:"data-row"},[(r(!0),h(w,null,x(Object.keys(l),(e,ve)=>Oe(a.$slots,`form-col.${e}`,xe({key:ve},{field:e,type:t(c)(e),label:t(u)(e)}),()=>[B("div",{class:I(ge(e))},[B("div",Me,[Y(e)?(r(),b(t(M),{key:0,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,type:t(c)(e),label:t(u)(e),size:l[e],disabled:!p(e),"error-message":d(e)},null,8,["modelValue","onUpdate:modelValue","type","label","size","disabled","error-message"])):m("",!0),f(e)?(r(),b(t(M),{key:1,ref_for:!0,ref:"fileRefs",type:"file",label:ee(e),size:l[e],disabled:!p(e),"error-message":d(e),onChange:s=>ce(s,e)},null,8,["label","size","disabled","error-message","onChange"])):m("",!0),ae(e)?(r(),b(t(Te),{key:2,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),disabled:!p(e),"error-message":d(e)},null,8,["modelValue","onUpdate:modelValue","label","disabled","error-message"])):m("",!0),te(e)?(r(),b(t(Be),{key:3,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),disabled:!p(e),"align-pickers":"top","error-message":d(e)},null,8,["modelValue","onUpdate:modelValue","label","disabled","error-message"])):m("",!0),ne(e)?(r(),b(t(ze),{key:4,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),disabled:!p(e),"display-time":!0,"align-pickers":"top","error-message":d(e)},null,8,["modelValue","onUpdate:modelValue","label","disabled","error-message"])):m("",!0),oe(e)?(r(),b(t(je),{key:5,id:e,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),name:e,options:t(k)[e].options,size:l[e],disabled:!p(e),searchable:me(e),"error-message":d(e)},null,8,["id","modelValue","onUpdate:modelValue","label","name","options","size","disabled","searchable","error-message"])):m("",!0),ie(e)?(r(),b(t(_),{key:6,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),name:t(u)(e),multiple:!1,options:g(e).data,"options-length":g(e).total,"options-loading":g(e).loading,pagination:g(e).pagination,size:l[e],disabled:!p(e),"error-message":d(e),onOffsetChange:t(S)[e]},null,8,["modelValue","onUpdate:modelValue","label","name","options","options-length","options-loading","pagination","size","disabled","error-message","onOffsetChange"])):m("",!0),pe(e)?(r(),b(t(_),{key:7,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),name:t(u)(e),options:g(e).data,"options-length":g(e).total,"options-loading":g(e).loading,pagination:g(e).pagination,size:l[e],disabled:!p(e),"error-message":d(e),onOffsetChange:t(S)[e]},null,8,["modelValue","onUpdate:modelValue","label","name","options","options-length","options-loading","pagination","size","disabled","error-message","onOffsetChange"])):m("",!0),se(e)?(r(),b(t(Se),{key:8,"start-date":t(n)[e].startDate,"onUpdate:startDate":s=>t(n)[e].startDate=s,"end-date":t(n)[e].endDate,"onUpdate:endDate":s=>t(n)[e].endDate=s,label:t(u)(e),disabled:!p(e),"error-message":d(e)},null,8,["start-date","onUpdate:startDate","end-date","onUpdate:endDate","label","disabled","error-message"])):m("",!0),re(e)?(r(),b(t(we),{key:9,"start-time":t(n)[e].startTime,"onUpdate:startTime":s=>t(n)[e].startTime=s,"end-time":t(n)[e].endTime,"onUpdate:endTime":s=>t(n)[e].endTime=s,label:t(u)(e),disabled:!p(e),"error-message":d(e)},null,8,["start-time","onUpdate:startTime","end-time","onUpdate:endTime","label","disabled","error-message"])):m("",!0),le(e)?(r(),b(t($),{key:10,modelValue:t(n)[e],"onUpdate:modelValue":s=>t(n)[e]=s,label:t(u)(e),disabled:!p(e),"error-message":d(e)},null,8,["modelValue","onUpdate:modelValue","label","disabled","error-message"])):m("",!0)]),t(D)(e)?(r(),h("div",_e,[z(t($),{modelValue:F.value[e],"onUpdate:modelValue":s=>F.value[e]=s,label:ue(e)},null,8,["modelValue","onUpdate:modelValue","label"])])):m("",!0)],2)],!0)),128))]))),128))]),y.submittable?(r(),h("div",$e,[z(t(L),{class:"button","button-type":y.confirmButton.type,value:y.confirmButton.value,icon:y.confirmButton.icon,onClick:o[0]||(o[0]=l=>Ve())},null,8,["button-type","value","icon"]),z(t(L),{class:"button","button-type":y.cancelButton.type,value:y.cancelButton.value,icon:y.cancelButton.icon,onClick:o[1]||(o[1]=l=>he())},null,8,["button-type","value","icon"])])):m("",!0)],2))}},Re=Fe(Le,[["__scopeId","data-v-a6136ebd"]]);export{Re as D};

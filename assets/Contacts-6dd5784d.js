import{j as u,a as f,e as d,f as a}from"./index-cf9ea608.js";import{D as p}from"./DataPage-a796708b.js";import{u as m}from"./utils-4d4bc86f.js";import"./Form-6ecdf185.js";import"./dataAccess-238ee380.js";import"./errors-a6177d44.js";const B={__name:"Contacts",setup(y){const s=u(),{countriesUrl:_,fieldsLayout:e,dataFields:o,filters:i,validations:n,countryValue:v,countryLabel:w}=m(),c={view:{click:async function(t,l){await r(t.id)}}};async function r(t){s.push({name:"View Contact",params:{id:t}})}return(t,l)=>(f(),d(p,{"model-class":"contacts","data-type":"Contacts",fullscreen:!0,"fields-layout":a(e),"data-fields":a(o),validations:a(n),filters:a(i),actions:c},null,8,["fields-layout","data-fields","validations","filters"]))}};export{B as default};

import{D as u}from"./DataPage-0ce11944.js";import{u as m}from"./validations-9a1af222.js";import{q as p,b as v,f as T,g as a}from"./index-2c32b8d5.js";import{u as x}from"./utils-71d9759b.js";import"./input-61224a77.js";import"./errors-53bc63a8.js";import"./DataForm-bb2544f7.js";const k={__name:"TaxTables",setup(_){const i=p(),{fieldsLayout:s,dataFields:n}=x(),{notEarlierThan:l}=m();function t(e){return l(e,"effectiveEnd","effectiveStart")}const o={create:{effectiveEnd:[t]},update:{effectiveEnd:[t]}},c={initData:{description:null,includeTags:[],excludeTags:[],effectiveStart:{startDate:null,endDate:null},effectiveEnd:{startDate:null,endDate:null}},layout:[{description:"lg"},{includeTags:"md",excludeTags:"md"},{effectiveStart:"md"},{effectiveEnd:"md"}]},d={view:{click:async function(e,f){await r(e)}}};async function r(e){i.push({name:"View Tax Table",params:{id:e.id}})}return(e,f)=>(v(),T(u,{"model-class":"tax_tables","data-type":"Tax Tables","fields-layout":a(s),"data-fields":a(n),validations:o,filters:c,actions:d},null,8,["fields-layout","data-fields"]))}};export{k as default};

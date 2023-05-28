import{D as b}from"./DataPage-a796708b.js";import{a as d,e as p,y}from"./index-cf9ea608.js";import"./Form-6ecdf185.js";import"./dataAccess-238ee380.js";import"./errors-a6177d44.js";const w={__name:"Transactions",setup(m){const{formatDate:a}=y(),s=[{type:"lg",transactionDate:"md"},{description:"lg"},{currencyId:"md",amount:"md",homeCurrencyAmount:"md"},{tags:"lg"},{associatedTransactionId:"lg"}];function t(e){return e.id}function r(e){return`${e.category}:${e.name}`}function l(e){const u=a(e.effectiveStart),o=a(e.effectiveEnd);return`${e.code} (${u} - ${o})`}function n(e){return e.description}const i=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!1,creatable:!1,updatable:!1,sortable:!0},{key:"type",type:"enum",label:"Type",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0},{key:"transactionDate",type:"date",label:"Transaction Date",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"amount",type:"number",label:"Amount",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"homeCurrencyAmount",type:"number",label:"Home Currency Amount",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"tags",type:"multiSelect",label:"Tags",reference:{label:r},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:t,label:r}},{key:"currencyId",type:"singleSelect",label:"Currency",reference:{label:l},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"currencies",value:t,label:l}},{key:"associatedTransactionId",type:"singleSelect",label:"Associated Transaction",reference:{label:n},listable:!1,viewable:!0,creatable:!0,updatable:!0,options:{server:!0,pagination:!0,modelClass:"transactions",value:t,label:n}}],c={initData:{type:"",currencyId:null,tags:[],transactionDate:{startDate:null,endDate:null}},layout:[{type:"md",currencyId:"md",tags:"md"},{transactionDate:"md"}]};return(e,u)=>(d(),p(b,{"model-class":"transactions","data-type":"Transactions",fullscreen:!0,"fields-layout":s,"data-fields":i,filters:c}))}};export{w as default};

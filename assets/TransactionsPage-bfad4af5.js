import{D as d}from"./DataPage-3bb02e5e.js";import{m,b as p,f as y,C as f}from"./index-522b32ec.js";import"./input-ae6e7048.js";import"./validations-9a1af222.js";import"./errors-53bc63a8.js";import"./DataForm-8f7f0e0d.js";const _={__name:"TransactionsPage",setup(g){const a=m().getSystemConfigs(),{formatDate:r}=f(),i=[{type:"lg",transactionDate:"md"},{description:"lg"},{currencyId:"md",amount:"md",homeCurrencyAmount:"md"},{tags:"lg"},{associatedTransactionId:"lg"}];function t(e){return e.id}function l(e){return`${e.category}:${e.name}`}function s(e){const u=r(e.effectiveStart,a.timezone),b=r(e.effectiveEnd,a.timezone);return`${e.code} (${u} - ${b})`}function n(e){return e.description}const o=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!1,creatable:!1,updatable:!1,sortable:!0},{key:"type",type:"enum",label:"Type",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0},{key:"transactionDate",type:"date",label:"Transaction Date",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"amount",type:"number",label:"Amount",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"homeCurrencyAmount",type:"number",label:"Home Currency Amount",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"tags",type:"multiSelect",label:"Tags",reference:{label:l},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:t,label:l}},{key:"currencyId",type:"singleSelect",label:"Currency",reference:{label:s},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"currencies",value:t,label:s}},{key:"associatedTransactionId",type:"singleSelect",label:"Associated Transaction",reference:{label:n},listable:!1,viewable:!0,creatable:!0,updatable:!0,options:{server:!0,pagination:!0,modelClass:"transactions",value:t,label:n}}],c={initData:{type:null,currencyId:null,tags:[],transactionDate:{startDate:null,endDate:null}},layout:[{type:"md",currencyId:"md",tags:"md"},{transactionDate:"md"}]};return(e,u)=>(p(),y(d,{"model-class":"transactions","data-type":"Transactions",fullscreen:!0,"fields-layout":i,"data-fields":o,filters:c}))}};export{_ as default};

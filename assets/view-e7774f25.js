import{u as f}from"./dataAccess-56231f5b.js";import{a as v}from"./Form-5addd38c.js";import{D as m}from"./DataPage-1fdc983c.js";import{c as i,a as y,e as g,f as r}from"./index-499edfe9.js";import"./errors-a6177d44.js";const U={__name:"view",props:{invoiceId:{type:String,default:null}},setup(s){const a=s,n=f(),{greaterThanOrEqual:t}=v(),u=`${n.baseUrl}/api/invoices`,o=[{description:"lg"},{unit:"md",unitCost:"md",subtotal:"md"},{invoiceId:"lg"}],c=i(()=>[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"description",type:"text",label:"Description",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0},{key:"unit",type:"enum",label:"Unit",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"unitCost",type:"number",label:"Unit Cost",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"subtotal",type:"number",label:"Subtotal",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"invoiceId",type:"singleSelect",label:"Invoice",reference:{label:l},listable:!1,viewable:!0,creatable:!0,updatable:!1,filterable:!0,options:{server:!0,pagination:!0,modelClass:"invoices",sourceUrl:u,value:b,label:l}}]);function b(e){return e.id}function l(e){return e.invoiceNumber}const d={create:{unitCost:[e=>t(e,"unitCost",0)],subtotal:[e=>t(e,"subtotal",0)]},update:{unitCost:[e=>t(e,"unitCost",0)],subtotal:[e=>t(e,"subtotal",0)]}},p=i(()=>{const e={};return a.invoiceId&&(e.invoiceId=[{value:a.invoiceId}]),e.description=null,{initData:e,layout:[{invoiceId:"lg",description:"lg"}]}});return(e,I)=>(y(),g(m,{"model-class":"invoice_lines","data-type":"Invoice Lines","url-base":"api/invoice_lines","schemas-url-base":"api/schemas/invoice_lines","fields-layout":o,"data-fields":r(c),validations:d,filters:r(p)},null,8,["data-fields","filters"]))}};export{U as default};

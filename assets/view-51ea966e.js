import{a as u}from"./Form-5addd38c.js";import{D as i}from"./DataPage-1fdc983c.js";import{a as b,e as n}from"./index-499edfe9.js";import"./dataAccess-56231f5b.js";import"./errors-a6177d44.js";const x={__name:"view",setup(m){const{greaterThan:t}=u(),a=[{name:"md"},{prefix:"sm",startingNumber:"md",suffix:"sm",incrementStep:"sm"}],r=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"name",type:"text",label:"Name",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0,sortable:!0},{key:"startingNumber",type:"number",label:"Starting Number",listable:!0,viewable:!0,creatable:!0,updatable:!1},{key:"lastUsedNumber",type:"number",label:"Last Used Number",listable:!0,viewable:!0,creatable:!1,updatable:!1},{key:"incrementStep",type:"number",label:"Increment Step",listable:!0,viewable:!0,creatable:!0,updatable:!1},{key:"prefix",type:"text",label:"Prefix",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0,sortable:!0},{key:"suffix",type:"text",label:"Suffix",listable:!0,viewable:!0,creatable:!0,updatable:!1,filterable:!0,sortable:!0}],l={create:{startingNumber:[e=>t(e,"startingNumber",0)],incrementStep:[e=>t(e,"incrementStep",0)]}},s={initData:{},layout:[{name:"md",prefix:"md",suffix:"md"}]};return(e,p)=>(b(),n(i,{"model-class":"sequences","data-type":"Sequences","url-base":"api/sequences","schemas-url-base":"api/schemas/sequences","fields-layout":a,"data-fields":r,validations:l,filters:s}))}};export{x as default};

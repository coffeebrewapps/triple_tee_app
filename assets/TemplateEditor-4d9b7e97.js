import{_ as se,n as ne,b as oe,N as le,c as p,r as n,o as ie,d as f,e as T,j as e,k as V,x as k,G as g,h as l,t as m,f as h,g as D,O as ce,M as de,v as re,P as ue,Q as pe,p as fe,i as ve}from"./index-b3128bd9.js";import{T as _e}from"./TabContainer-8746c156.js";const o=a=>(fe("data-v-892626b3"),a=a(),ve(),a),me={class:"preview-template"},he={class:"template-editor"},ye=o(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),be=[ye],ke=["contenteditable"],ge=o(()=>e("i",{class:"fa-solid fa-pencil"},null,-1)),Se=[ge],Ee=o(()=>e("i",{class:"fa-solid fa-check"},null,-1)),we=[Ee],Me={key:0,class:"error-message"},Ce=o(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),Te=[Ce],De=["contenteditable"],Pe=o(()=>e("i",{class:"fa-solid fa-pencil"},null,-1)),xe=[Pe],Le=o(()=>e("i",{class:"fa-solid fa-check"},null,-1)),Re=[Le],Ne={key:0,class:"error-message"},Ve=o(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),je=[Ve],Oe=["contenteditable"],Be=o(()=>e("i",{class:"fa-solid fa-pencil"},null,-1)),Ge=[Be],Ie=o(()=>e("i",{class:"fa-solid fa-check"},null,-1)),Ae=[Ie],Fe={class:"preview-container"},He=o(()=>e("h3",{class:"heading"},"Preview",-1)),Ue=["innerHTML"],qe={class:"buttons"},Je=o(()=>e("div",{class:"message"},"Generating PDF...",-1)),$e={__name:"TemplateEditor",props:{id:{type:String,default:null},contentMarkup:{type:String,default:""},contentStyles:{type:String,default:""},disabled:{type:Boolean,default:!1},data:{type:Object,default:{}},errorMessages:{type:Object,default:{}},enableGenerate:{type:Boolean,default:!0},templateType:{type:String,default:null}},emits:["contentMarkupChange","contentStylesChange","dataChange"],setup(a,{emit:S}){const s=a,E=ne(),j=oe(),O=new le,P=p(()=>({contentMarkup:s.contentMarkup,contentStyles:s.contentStyles})),B=[{label:"Markup"},{label:"Styles"},{label:"Data"}],w=n("markupEditor"),x=n("stylesEditor"),M=n("sampleDataEditor"),d=n(!1),r=n(!1),u=n(!1),G=p(()=>{const t=[];return t.push("editor"),d.value&&t.push("editable"),s.disabled&&t.push("disabled"),t.join(" ")}),I=p(()=>{const t=[];return t.push("editor"),r.value&&t.push("editable"),s.disabled&&t.push("disabled"),t.join(" ")}),A=p(()=>{const t=[];return t.push("editor"),u.value&&t.push("editable"),s.disabled&&t.push("disabled"),t.join(" ")});function F(){d.value=!0}async function H(){_.value=!1,await C().then(t=>{W()}).catch(t=>{_.value=!0,v.value="Markup error",console.log(t)}).finally(()=>{d.value=!1})}function U(){r.value=!0}function q(){X(),r.value=!1}function J(){u.value=!0}async function $(){_.value=!1,await C().then(t=>{Y()}).catch(t=>{_.value=!0,v.value="Sample data error",console.log(t)}).finally(()=>{u.value=!1})}function z(){d.value=!d.value}function Q(){r.value=!r.value}function K(){u.value=!u.value}function W(){S("contentMarkupChange",w.value.innerText)}function X(){S("contentStylesChange",x.value.innerText)}function Y(){S("dataChange",JSON.parse(M.value.innerText))}const L=p(()=>s.data),Z=p(()=>_.value?"preview-content error":"preview-content"),v=n(),_=n(!1);async function C(){return new Promise((t,c)=>{v.value=null,O.parseAndRender(w.value.innerText,JSON.parse(M.value.innerText)).then(i=>{v.value=i,t(i)}).catch(i=>{c(i)})})}const y=n(!1),b=n(),R=n(),N=n();async function ee(){b.value=null,y.value=!0,await j.downloadStream(s.templateType,s.id,L.value,{path:"pdf"}).then(t=>{const c=new Blob([t.data],{type:"application/pdf"}),i=window.URL.createObjectURL(c);R.value=i,N.value=`${s.templateType}_${s.id}.pdf`,b.value=i,te()}).catch(t=>{console.log(t)}).finally(()=>{ae()})}function te(){const t=Object.assign({},E.currentRoute.value),c={path:"/document_templates/:templateType/:id/pdf",name:"View Pdf",component:()=>pe(()=>import("./PdfViewer-60334fd9.js"),["assets/PdfViewer-60334fd9.js","assets/index-b3128bd9.js","assets/index-aeeb8fc4.css","assets/PdfViewer-3cab3f5d.css"]),props:{templatePdfData:b.value,downloadLink:R.value,downloadFile:N.value},meta:{parentRoute:{name:t.name},hidden:!0}};E.addRoute(c),E.push({name:"View Pdf",params:{templateType:s.templateType,id:s.id}})}function ae(){y.value=!1}return ie(async()=>{await C()}),(t,c)=>(f(),T("div",me,[e("div",he,[V(_e,{tabs:B},{"tab-0":k(()=>[e("div",{class:g(l(G))},[e("div",{class:"editor-button cancel",onClick:z},be),e("div",{ref_key:"markupEditor",ref:w,class:"editor-content",contenteditable:d.value},m(l(P).contentMarkup),9,ke),e("div",{class:"editor-button edit",onClick:F},Se),e("div",{class:"editor-button confirm",onClick:H},we)],2),a.errorMessages.contentMarkup?(f(),T("div",Me,m(a.errorMessages.contentMarkup),1)):h("",!0)]),"tab-1":k(()=>[e("div",{class:g(l(I))},[e("div",{class:"editor-button cancel",onClick:Q},Te),e("div",{ref_key:"stylesEditor",ref:x,class:"editor-content",contenteditable:r.value},m(l(P).contentStyles),9,De),e("div",{class:"editor-button edit",onClick:U},xe),e("div",{class:"editor-button confirm",onClick:q},Re)],2),a.errorMessages.contentStyles?(f(),T("div",Ne,m(a.errorMessages.contentStyles),1)):h("",!0)]),"tab-2":k(()=>[e("div",{class:g(l(A))},[e("div",{class:"editor-button cancel",onClick:K},je),e("div",{ref_key:"sampleDataEditor",ref:M,class:"editor-content",contenteditable:u.value},m(l(L)),9,Oe),e("div",{class:"editor-button edit",onClick:J},Ge),e("div",{class:"editor-button confirm",onClick:$},Ae)],2)]),_:1})]),e("div",Fe,[He,e("div",{class:g(l(Z)),innerHTML:v.value},null,10,Ue),a.contentStyles?(f(),D(ce("style"),{key:0,innerHTML:a.contentStyles},null,8,["innerHTML"])):h("",!0),e("div",qe,[a.enableGenerate?(f(),D(l(de),{key:0,value:"Generate",icon:"fa-solid fa-file-export",onClick:ee})):h("",!0)])]),V(l(ue),{class:"generate-dialog",modelValue:y.value,"onUpdate:modelValue":c[0]||(c[0]=i=>y.value=i),title:"Generating PDF",width:400,height:250},{body:k(()=>[b.value?h("",!0):(f(),D(l(re),{key:0})),Je]),_:1},8,["modelValue"])]))}},Ke=se($e,[["__scopeId","data-v-892626b3"]]);export{Ke as T};

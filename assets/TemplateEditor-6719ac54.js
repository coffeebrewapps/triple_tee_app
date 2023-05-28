import{_ as se,j as ne,O as oe,c as p,r as n,o as le,a as f,b as T,h as e,i as j,l as k,z as g,f as l,t as m,d as h,e as D,P as ie,S as ce,Z as de,v as re,Q as ue,p as pe,g as fe}from"./index-cf9ea608.js";import{a as ve}from"./dataAccess-238ee380.js";import{T as _e}from"./TabContainer-bd4cd668.js";const o=a=>(pe("data-v-892626b3"),a=a(),fe(),a),me={class:"preview-template"},he={class:"template-editor"},ye=o(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),be=[ye],ke=["contenteditable"],ge=o(()=>e("i",{class:"fa-solid fa-pencil"},null,-1)),Se=[ge],we=o(()=>e("i",{class:"fa-solid fa-check"},null,-1)),Ee=[we],Ce={key:0,class:"error-message"},Me=o(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),Te=[Me],De=["contenteditable"],Pe=o(()=>e("i",{class:"fa-solid fa-pencil"},null,-1)),xe=[Pe],Le=o(()=>e("i",{class:"fa-solid fa-check"},null,-1)),Re=[Le],Ve={key:0,class:"error-message"},je=o(()=>e("i",{class:"fa-solid fa-xmark"},null,-1)),Ne=[je],Oe=["contenteditable"],Be=o(()=>e("i",{class:"fa-solid fa-pencil"},null,-1)),Ge=[Be],Ie=o(()=>e("i",{class:"fa-solid fa-check"},null,-1)),Ae=[Ie],Fe={class:"preview-container"},He=o(()=>e("h3",{class:"heading"},"Preview",-1)),Ue=["innerHTML"],qe={class:"buttons"},ze=o(()=>e("div",{class:"message"},"Generating PDF...",-1)),Je={__name:"TemplateEditor",props:{id:{type:String,default:null},contentMarkup:{type:String,default:""},contentStyles:{type:String,default:""},disabled:{type:Boolean,default:!1},data:{type:Object,default:{}},errorMessages:{type:Object,default:{}},enableGenerate:{type:Boolean,default:!0},templateType:{type:String,default:null}},emits:["contentMarkupChange","contentStylesChange","dataChange"],setup(a,{emit:S}){const s=a,w=ne(),N=ve(),O=new oe,P=p(()=>({contentMarkup:s.contentMarkup,contentStyles:s.contentStyles})),B=[{label:"Markup"},{label:"Styles"},{label:"Data"}],E=n("markupEditor"),x=n("stylesEditor"),C=n("sampleDataEditor"),d=n(!1),r=n(!1),u=n(!1),G=p(()=>{const t=[];return t.push("editor"),d.value&&t.push("editable"),s.disabled&&t.push("disabled"),t.join(" ")}),I=p(()=>{const t=[];return t.push("editor"),r.value&&t.push("editable"),s.disabled&&t.push("disabled"),t.join(" ")}),A=p(()=>{const t=[];return t.push("editor"),u.value&&t.push("editable"),s.disabled&&t.push("disabled"),t.join(" ")});function F(){d.value=!0}async function H(){_.value=!1,await M().then(t=>{K()}).catch(t=>{_.value=!0,v.value="Markup error",console.log(t)}).finally(()=>{d.value=!1})}function U(){r.value=!0}function q(){W(),r.value=!1}function z(){u.value=!0}async function J(){_.value=!1,await M().then(t=>{X()}).catch(t=>{_.value=!0,v.value="Sample data error",console.log(t)}).finally(()=>{u.value=!1})}function Z(){d.value=!d.value}function $(){r.value=!r.value}function Q(){u.value=!u.value}function K(){S("contentMarkupChange",E.value.innerText)}function W(){S("contentStylesChange",x.value.innerText)}function X(){S("dataChange",JSON.parse(C.value.innerText))}const L=p(()=>s.data),Y=p(()=>_.value?"preview-content error":"preview-content"),v=n(),_=n(!1);async function M(){return new Promise((t,c)=>{v.value=null,O.parseAndRender(E.value.innerText,JSON.parse(C.value.innerText)).then(i=>{v.value=i,t(i)}).catch(i=>{c(i)})})}const y=n(!1),b=n(),R=n(),V=n();async function ee(){b.value=null,y.value=!0,await N.downloadStream(s.templateType,s.id,L.value,{path:"pdf"}).then(t=>{const c=new Blob([t.data],{type:"application/pdf"}),i=window.URL.createObjectURL(c);R.value=i,V.value=`${s.templateType}_${s.id}.pdf`,b.value=i,te()}).catch(t=>{console.log(t)}).finally(()=>{ae()})}function te(){const t=Object.assign({},w.currentRoute.value),c={path:"/document_templates/:templateType/:id/pdf",name:"View Pdf",component:()=>ue(()=>import("./PdfViewer-b3264a88.js"),["assets/PdfViewer-b3264a88.js","assets/index-cf9ea608.js","assets/index-24183e0d.css","assets/PdfViewer-3cab3f5d.css"]),props:{templatePdfData:b.value,downloadLink:R.value,downloadFile:V.value},meta:{parentRoute:{name:t.name},hidden:!0}};w.addRoute(c),w.push({name:"View Pdf",params:{templateType:s.templateType,id:s.id}})}function ae(){y.value=!1}return le(async()=>{await M()}),(t,c)=>(f(),T("div",me,[e("div",he,[j(_e,{tabs:B},{"tab-0":k(()=>[e("div",{class:g(l(G))},[e("div",{class:"editor-button cancel",onClick:Z},be),e("div",{ref_key:"markupEditor",ref:E,class:"editor-content",contenteditable:d.value},m(l(P).contentMarkup),9,ke),e("div",{class:"editor-button edit",onClick:F},Se),e("div",{class:"editor-button confirm",onClick:H},Ee)],2),a.errorMessages.contentMarkup?(f(),T("div",Ce,m(a.errorMessages.contentMarkup),1)):h("",!0)]),"tab-1":k(()=>[e("div",{class:g(l(I))},[e("div",{class:"editor-button cancel",onClick:$},Te),e("div",{ref_key:"stylesEditor",ref:x,class:"editor-content",contenteditable:r.value},m(l(P).contentStyles),9,De),e("div",{class:"editor-button edit",onClick:U},xe),e("div",{class:"editor-button confirm",onClick:q},Re)],2),a.errorMessages.contentStyles?(f(),T("div",Ve,m(a.errorMessages.contentStyles),1)):h("",!0)]),"tab-2":k(()=>[e("div",{class:g(l(A))},[e("div",{class:"editor-button cancel",onClick:Q},Ne),e("div",{ref_key:"sampleDataEditor",ref:C,class:"editor-content",contenteditable:u.value},m(l(L)),9,Oe),e("div",{class:"editor-button edit",onClick:z},Ge),e("div",{class:"editor-button confirm",onClick:J},Ae)],2)]),_:1})]),e("div",Fe,[He,e("div",{class:g(l(Y)),innerHTML:v.value},null,10,Ue),a.contentStyles?(f(),D(ie("style"),{key:0,innerHTML:a.contentStyles},null,8,["innerHTML"])):h("",!0),e("div",qe,[a.enableGenerate?(f(),D(l(ce),{key:0,value:"Generate",icon:"fa-solid fa-file-export",onClick:ee})):h("",!0)])]),j(l(re),{class:"generate-dialog",modelValue:y.value,"onUpdate:modelValue":c[0]||(c[0]=i=>y.value=i),title:"Generating PDF",width:400,height:250},{body:k(()=>[b.value?h("",!0):(f(),D(l(de),{key:0})),ze]),_:1},8,["modelValue"])]))}},Ke=se(Je,[["__scopeId","data-v-892626b3"]]);export{Ke as T};

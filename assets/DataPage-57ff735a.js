import{u as Ze}from"./input-33a9bda4.js";import{r,c as d,b as i,d as v,j as U,v as M,g as o,z as Ce,P as Se,X as qe,F as Z,_ as Ge,l as Qe,o as We,f as K,i as x,x as le,t as $,e as m,Q as Ye,M as Oe,B as _e,a as Gt,u as Qt,n as Wt,w as Ve,C as Me,y as Ie,G as Je,H as ze,I as He,R as Yt,Z as _t,p as ea,h as ta}from"./index-196d7642.js";import{u as aa}from"./errors-74d0bde9.js";import{u as et}from"./validations-83886343.js";import{D as tt}from"./DataForm-a47f389f.js";const Xe={__name:"FormDialog",props:{modelValue:{type:Boolean,default:!1},fieldsLayout:{type:Array,default(){return[]}},dataFields:{type:Array,default(){return[]}},data:{type:Object,default(){return{}}},schemas:{type:Object,default(){return{}}},dialogTitle:{type:String,default:""},fullscreen:{type:Boolean,default:!1},errorMessages:{type:Object,default(){return{}}}},emits:["update:modelValue","submit"],setup(l,{emit:n}){const h=l,I=r(!1),P=r(""),F=d({get:()=>h.modelValue,set:A=>{n("update:modelValue",A)}}),S=d(()=>h.data);function q(A){n("submit",A)}function J(){F.value=!1,n("update:modelValue",!1)}return(A,w)=>(i(),v(Z,null,[U(o(Se),{modelValue:o(F),"onUpdate:modelValue":w[1]||(w[1]=V=>Ce(F)?F.value=V:null),title:l.dialogTitle,fullscreen:l.fullscreen,class:"form-dialog"},{body:M(()=>[U(tt,{modelValue:o(S),"onUpdate:modelValue":w[0]||(w[0]=V=>Ce(S)?S.value=V:null),"fields-layout":l.fieldsLayout,"data-fields":l.dataFields,schemas:l.schemas,"error-messages":l.errorMessages,onSubmit:q,onCancel:J},null,8,["modelValue","fields-layout","data-fields","schemas","error-messages"])]),_:1},8,["modelValue","title","fullscreen"]),U(o(qe),{modelValue:I.value,"onUpdate:modelValue":w[2]||(w[2]=V=>I.value=V),title:"Error",content:P.value,width:400,height:250},null,8,["modelValue","content"])],64))}};const la={class:"data-row"},na={class:"data-label"},sa={key:0,class:"data-value"},oa={key:0},ra={key:1,class:"no-value"},ua={key:1,class:"data-value tags"},ia={key:0,class:"no-value"},ca={__name:"ViewDialog",props:{modelValue:{type:Boolean,default:!1},keys:{type:Array,default(){return[]}},record:{type:Object,default(){return{}}},dataFields:{type:Array,default(){return[]}},title:{type:String,default:"View"},inputLabel:{type:Function,default(l){return l}},inputValue:{type:Function,default(l,n){return n[l]}},includeKeys:{type:Array,default(){return[]}}},emits:["update:modelValue"],setup(l,{emit:n}){const h=l,{tagsFields:I,tagsField:P}=Ze(h.dataFields),{formatTag:F,tagStyle:S}=_e(),J=Qe().getSystemConfigs(),{isEmpty:A,notEmpty:w}=et(),V=d({get:()=>h.modelValue,set:g=>{n("update:modelValue",g)}});function ye(){n("update:modelValue",!1)}const L=r();async function me(g,y,f){const b=y.map(R=>new Promise((T,k)=>{F(g,R,f,J.tagFormat).then(z=>{T(z)}).catch(z=>{k(z)})}));return new Promise((R,T)=>{Promise.all(b).then(k=>{R({key:f,formattedValue:k})}).catch(k=>{T(k)})})}function ge(g,y,f){return L.value[y]?L.value[y][f]:g[y][f]}return We(async()=>{const g=I.value.map(y=>{const f=h.record[y];return me(h.record,f,y)});Promise.all(g).then(y=>{L.value=Object.assign({},h.record),y.forEach(f=>{L.value[f.key]=f.formattedValue})}).catch(y=>{console.error(y)})}),(g,y)=>L.value?(i(),K(o(Se),{key:0,modelValue:o(V),"onUpdate:modelValue":y[1]||(y[1]=f=>Ce(V)?V.value=f:null),title:l.title},{body:M(()=>[x("div",la,[(i(!0),v(Z,null,le(l.keys,(f,b)=>(i(),v("div",{key:b,class:"data-col"},[x("div",na,$(l.inputLabel(f)),1),o(P)(f)?m("",!0):(i(),v("div",sa,[o(w)(l.record[f])?(i(),v("div",oa,$(l.inputValue(f,l.record,l.includeKeys,l.dataFields)),1)):m("",!0),o(A)(l.record[f])?(i(),v("div",ra," --- no value --- ")):m("",!0)])),o(P)(f)?(i(),v("div",ua,[(i(!0),v(Z,null,le(l.record[f],(R,T)=>(i(),v("div",{key:T,class:"tag",style:Ye(o(S)(l.record,R,f))},$(ge(l.record,f,T)),5))),128)),l.record[f].length===0?(i(),v("div",ia," --- no value --- ")):m("",!0)])):m("",!0)]))),128))])]),actions:M(()=>[U(o(Oe),{"button-type":"text",value:"Close",icon:"fa-solid fa-xmark",onClick:y[0]||(y[0]=f=>ye())})]),_:1},8,["modelValue","title"])):m("",!0)}},da=Ge(ca,[["__scopeId","data-v-efb5ed80"]]);const ve=l=>(ea("data-v-9d3eb401"),l=l(),ta(),l),fa={class:"page-container"},va={class:"heading"},ya=ve(()=>x("h3",{class:"heading"}," Filters ",-1)),ma=["onClick"],ga=ve(()=>x("i",{class:"fa-solid fa-sort"},null,-1)),pa=ve(()=>x("i",{class:"fa-solid fa-sort-up"},null,-1)),ha=ve(()=>x("i",{class:"fa-solid fa-sort-down"},null,-1)),ba={key:0,class:"col"},ka={key:0},Da={key:0},Fa={key:1,class:"no-value"},wa={key:1},Va={key:0,class:"no-value"},Ca=["download","href"],Oa={__name:"DataPage",props:{dataType:{type:String,default:""},modelClass:{type:String,default:null},filters:{type:Object,default(){return{}}},dataFields:{type:Array,default(){return[]}},fieldsLayout:{type:Array,default(){return[]}},validations:{type:Object,default(){return{}}},fullscreen:{type:Boolean,default:!1},createDialogTitle:{type:Function,default:function(l){return`Create ${l}`}},viewDialogTitle:{type:Function,default:function(l,n){return`View ${l} ${n.id}`}},updateDialogTitle:{type:Function,default:function(l,n){return n?`Update ${l} ${n.id}`:""}},deleteDialogTitle:{type:Function,default:function(l,n){return n?`Delete ${l} ${n.id}`:""}},deleteDialogPrimaryText:{type:Function,default:function(l,n){return n?`Are you sure you want to delete ${l} ${n.id}?`:""}},deleteDialogSecondaryText:{type:Function,default:function(l,n){return n?JSON.stringify(n,!1,2):""}},actions:{type:Object,default(){return{}}}},setup(l){const n=l,{includeKeys:h,inputLabel:I,inputValue:P,tagsField:F,formatDataForShow:S,formatDataForSave:q,formatErrorsForDisplay:J,formatFilters:A,initOptionsData:w}=Ze(n.dataFields),ye=Qe().getSystemConfigs(),{formatTag:L,tagStyle:me}=_e(),ge=aa(),g=Gt(),{isEmpty:y,notEmpty:f}=et(),{flashMessage:b}=Qt(),R=Wt(),T=r({}),k=r(Array.from(n.dataFields)),z=r(!1),pe=r(!1);function Ae(e,t){return Object.keys(e).reduce((a,s)=>{const u=e[s].map(p=>p(t)).filter(p=>!!p);return u.length>0&&(a[s]=u),a},{})}function at(e){k.value=k.value.map(t=>{if(t.type==="enum"){const a=e[t.key].enums,s=Object.keys(a).map(u=>({value:u,label:a[u]}));return Object.assign({},t,{options:s})}else return t})}const lt=r(n.filters.layout),he=r(!1),H=r({}),xe=r(Array.from(n.dataFields)),nt=r({}),st=d(()=>({type:"icon",icon:"fa-solid fa-check"})),ot=d(()=>({type:"icon",icon:"fa-solid fa-filter-circle-xmark"})),rt=d(()=>n.dataFields.filter(e=>e.filterable).reduce((e,t)=>(e[t.key]=t,e),{})),be=d(()=>Object.keys(rt.value)),Te=d(()=>lt.value&&z.value&&pe.value),ut=d(()=>n.filters.layout),it=d(()=>he.value?"filters expanded":"filters collapsed");async function ct(e){X.value=0,await W()}async function G(){pe.value=!1,H.value=A(Object.assign({},n.filters.initData));const e=be.value.map(t=>S(t,H.value));Promise.all(e).then(t=>{be.value.forEach((a,s)=>{H.value[a]=t[s]}),pe.value=!0,X.value=0,W()})}function dt(){he.value=!he.value}function ft(){xe.value=Array.from(k.value).map(e=>{const t=Object.assign({},e);return t.filterable&&(t.type==="date"?t.type="daterange":t.type==="datetime"?t.type="datetimerange":t.type==="number"&&(t.type="numberrange")),t}).filter(e=>e.filterable)}const ne=r("id"),Q=r(!0),vt=d(()=>({field:ne.value,order:Q.value?"asc":"desc"})),yt=d(()=>n.dataFields.filter(e=>e.sortable).reduce((e,t)=>(e[t.key]=t,e),{})),mt=d(()=>Object.keys(yt.value));function ke(e){return mt.value.includes(e)}const gt=d(()=>n.dataFields.reduce((e,t)=>{const a=t.key;return ke(a)&&a===ne.value?Q.value?e[a]="header-field sort down":e[a]="header-field sort up":ke(a)?e[a]="header-field sort reset":e[a]="header-field nosort",e},{}));async function pt(e){ke(e)&&(e===ne.value?Q.value=!Q.value:(ne.value=e,Q.value=!0),X.value=0,await W())}const ht=d(()=>{const e={name:"Create",icon:"fa-solid fa-circle-plus fa-xl",click:async function(fe){await Et()}},t=n.actions.create||{},a=Object.assign({},e,t),s={name:"Export",icon:"fa-solid fa-file-export",click:async function(fe){await Zt()}},c=n.actions.export||{},u=Object.assign({},s,c),p={name:"Filter",icon:"fa-solid fa-filter",click:async function(){dt()}},D=n.actions.filter||{},O=Object.assign({},p,D),j=[a,u];return Te.value&&j.unshift(O),j}),bt=d(()=>{const e={name:"View",icon:"fa-solid fa-magnifying-glass",click:async function(j,fe){await At(j.id)}},t=n.actions.view||{},a=Object.assign({},e,t),s={name:"Update",icon:"fa-solid fa-pen-to-square",click:async function(j,fe){await Nt(j.id)}},c=n.actions.update||{},u=Object.assign({},s,c),p={name:"Delete",icon:"fa-solid fa-trash-can",click:async function(j,fe){await Ht(j.id)}},D=n.actions.remove||{},O=Object.assign({},p,D);return[a,u,O]}),Ee=r([]),je=r(0),X=r(0),$e=r(5),se=r(!1),Ue=d(()=>n.dataFields.filter(e=>e.listable)),oe=r([]);async function kt(e){X.value=e,await W()}async function Dt(e,t,a,s){const c=t.map(u=>new Promise((p,D)=>{L(e,u,a,ye.tagFormat).then(O=>{p(O)}).catch(O=>{D(O)})}));return new Promise((u,p)=>{Promise.all(c).then(D=>{u({i:s,key:a,formattedValue:D})}).catch(D=>{p(D)})})}function Ft(e,t,a){const s=`${t}Formatted`;return e[s]?e[s][a]:e[t]}async function wt(){const e=[];oe.value=[],Ee.value.forEach((t,a)=>{oe.value.push(Object.assign({},t)),Ue.value.forEach(s=>{const c=s.key,u=t[c];F(c)&&e.push(Dt(t,u,c,a))})}),Promise.all(e).then(t=>{t.forEach(a=>{const s=`${a.key}Formatted`;oe.value[a.i][s]=a.formattedValue})}).catch(t=>{console.error(t)})}R.registerListener("loadData",{id:`DataPage-${n.dataType}`,invoke:e=>{e.dataType===n.dataType&&W()}});async function Vt(){await g.schemas(n.modelClass).then(e=>{const t=e.fields;at(t),ft(),z.value=!0}).catch(e=>{console.error(e),b("Error loading schemas!")})}async function W(){const e={include:h.value,offset:X.value,limit:$e.value,filters:A(H.value),sort:vt.value};se.value=!0,await g.list(n.modelClass,e).then(t=>{Ee.value=t.data,wt(),je.value=t.total,se.value=!1}).catch(t=>{se.value=!1,console.error(t),b("Error loading data!")})}async function De(e,t,a){const s={include:h.value};await g.view(n.modelClass,e,s).then(c=>{t(c)}).catch(c=>{a(c)})}const E=r(!1),C=r(""),Ct=d(()=>C.value&&C.value.length>0?(C.value.match(/.{1,100}/g)??[]).join(`
`):""),Pe=d(()=>({width:800,height:400})),Fe=r(!1),Y=r(),Ot=d(()=>n.dataFields.filter(e=>e.viewable).reduce((e,t)=>(e[t.key]=t,e),{})),St=d(()=>Object.keys(Ot.value));async function At(e){De(e,t=>{Y.value=t,Fe.value=!0},t=>{Y.value=null,E.value=!0,C.value=JSON.stringify(t,!1,4)})}const _=r(!1),ee=r(),re=r({}),xt=d(()=>n.dataFields.filter(e=>e.creatable).reduce((e,t)=>(e[t.key]=t,e),{})),we=d(()=>Object.keys(xt.value)),Tt=d(()=>n.validations.create||[]);Ve(_,(e,t)=>{e||(re.value={})});async function Et(e){ee.value={};const t=we.value.map(a=>S(a,{}));Promise.all(t).then(a=>{we.value.forEach((s,c)=>{ee.value[s]=a[c],_.value=!0})})}async function jt(e){const t=$t(e);if(Object.keys(t).length>0){re.value=t,b("Error creating data!");return}const a=q(e);await g.create(n.modelClass,a).then(s=>{b("Data created successfully!"),G(),Ut()}).catch(s=>{re.value=J(s),b("Error creating data!")})}function $t(e){return Ae(Tt.value,e)}function Ut(){_.value=!1,Pt()}function Pt(){ee.value=null}const te=r(!1),B=r(),ue=r({}),Lt=d(()=>n.dataFields.filter(e=>e.updatable).reduce((e,t)=>(e[t.key]=t,e),{})),Rt=d(()=>Object.keys(Lt.value)),Bt=d(()=>n.validations.update||[]);Ve(te,(e,t)=>{e||(ue.value={})});async function Nt(e){De(e,t=>{Jt(t),te.value=!0},t=>{Le(),E.value=!0,C.value=JSON.stringify(t,!1,4)})}async function Kt(e){const t=Mt(e);if(Object.keys(t).length>0){ue.value=t,b("Error updating data!");return}const a=e.id,s=q(e);await g.update(n.modelClass,a,s).then(c=>{b("Data updated successfully!"),G(),It()}).catch(c=>{ue.value=J(c),b("Error updating data!")})}function Mt(e){return Ae(Bt.value,e)}function It(){te.value=!1,Le()}async function Jt(e){B.value={};const t=n.dataFields.map(a=>{const s=a.key;return S(s,e)});Promise.all(t).then(a=>{n.dataFields.forEach((s,c)=>{const u=s.key;B.value[u]=a[c]})})}function Le(){B.value=null}const ae=r(!1),N=r(),zt=r({});Ve(ae,(e,t)=>{e||(zt.value={})});async function Ht(e){De(e,t=>{N.value=t,ae.value=!0},t=>{Be(),E.value=!0,C.value=JSON.stringify(t,!1,4)})}async function Xt(){const t=N.value.id;await g.remove(n.modelClass,t).then(a=>{b("Data deleted successfully!"),G()}).catch(a=>{E.value=!0,C.value=a.map(s=>ge[s]()).join(", ")}).finally(()=>{Re()})}function Re(){ae.value=!1,Be()}function Be(){N.value=null}const ie=r(!1),ce=r(),de=r(),Ne=r("downloadAnchor");async function Zt(){await g.download(n.modelClass).then(e=>{const t=window.URL.createObjectURL(new Blob([e.data]));ce.value=t,de.value=e.filename,ie.value=!0}).catch(e=>{E.value=!0,C.value=JSON.stringify(e,!1,4)})}function qt(){Ne.value.click(),Ke()}function Ke(){ie.value=!1,ce.value=null,de.value=null}return We(async()=>{await Vt(),await w().then(e=>{T.value=e}).catch(e=>{E.value=!0,C.value=JSON.stringify(e,!1,4)}),await G()}),(e,t)=>(i(),v("div",fa,[x("h2",va,$(l.dataType),1),o(Te)?(i(),v("div",{key:0,class:Me(o(it))},[ya,U(tt,{modelValue:H.value,"onUpdate:modelValue":t[0]||(t[0]=a=>H.value=a),"fields-layout":o(ut),"data-fields":o(be),schemas:xe.value,"error-messages":nt.value,"confirm-button":o(st),"cancel-button":o(ot),compact:!0,onSubmit:ct,onCancel:G},null,8,["modelValue","fields-layout","data-fields","schemas","error-messages","confirm-button","cancel-button"])],2)):m("",!0),U(o(Yt),{name:"",headers:o(Ue),data:oe.value,"table-actions":o(ht),actions:o(bt),loading:se.value,pagination:{offset:X.value,limit:$e.value,client:!1},"total-data":je.value,onOffsetChange:kt},{"header-row":M(({headers:a,actions:s})=>[(i(!0),v(Z,null,le(a,(c,u)=>(i(),v("th",{key:u,class:"col",onClick:p=>pt(c.key)},[x("div",{class:Me(o(gt)[c.key])},[Ie($(c.label)+" ",1),ga,pa,ha],2)],8,ma))),128)),s.length>0?(i(),v("th",ba)):m("",!0)]),"data-content":M(({headers:a,row:s,i:c})=>[(i(!0),v(Z,null,le(a,(u,p)=>(i(),v("td",{key:p,class:"col"},[Je(e.$slots,`data-col.${u.key}`,ze(He({header:u,row:s,i:c})),()=>[o(F)(u.key)?m("",!0):(i(),v("div",ka,[o(f)(s[u.key])?(i(),v("div",Da,$(o(P)(u.key,s,o(h),k.value)),1)):m("",!0),o(y)(s[u.key])?(i(),v("div",Fa," --- no value --- ")):m("",!0)])),o(F)(u.key)?(i(),v("div",wa,[(i(!0),v(Z,null,le(s[u.key],(D,O)=>(i(),v("div",{key:O,class:"tag",style:Ye(o(me)(s,D,u.key))},$(Ft(s,u.key,O)),5))),128)),s[u.key].length===0?(i(),v("div",Va," --- no value --- ")):m("",!0)])):m("",!0)],!0)]))),128))]),_:3},8,["headers","data","table-actions","actions","loading","pagination","total-data"]),C.value.length>0?(i(),K(o(qe),{key:1,modelValue:E.value,"onUpdate:modelValue":t[1]||(t[1]=a=>E.value=a),title:"Error",class:"error-alert",content:o(Ct),width:o(Pe).width,height:o(Pe).height},null,8,["modelValue","content","width","height"])):m("",!0),ee.value?(i(),K(Xe,{key:2,modelValue:_.value,"onUpdate:modelValue":t[2]||(t[2]=a=>_.value=a),schemas:k.value,"fields-layout":l.fieldsLayout,"data-fields":o(we),data:ee.value,"dialog-title":l.createDialogTitle(l.dataType),fullscreen:l.fullscreen,"error-messages":re.value,onSubmit:jt},null,8,["modelValue","schemas","fields-layout","data-fields","data","dialog-title","fullscreen","error-messages"])):m("",!0),Je(e.$slots,"updateDialog",ze(He({row:B.value})),()=>[B.value?(i(),K(Xe,{key:0,modelValue:te.value,"onUpdate:modelValue":t[3]||(t[3]=a=>te.value=a),schemas:k.value,"fields-layout":l.fieldsLayout,"data-fields":o(Rt),data:B.value,"dialog-title":l.updateDialogTitle(l.dataType,B.value),fullscreen:l.fullscreen,"error-messages":ue.value,onSubmit:Kt},null,8,["modelValue","schemas","fields-layout","data-fields","data","dialog-title","fullscreen","error-messages"])):m("",!0)],!0),Y.value?(i(),K(da,{key:3,modelValue:Fe.value,"onUpdate:modelValue":t[4]||(t[4]=a=>Fe.value=a),keys:o(St),"include-keys":o(h),"data-fields":k.value,record:Y.value,title:l.viewDialogTitle(l.dataType,Y.value),"input-label":o(I),"input-value":o(P),class:"view-dialog"},null,8,["modelValue","keys","include-keys","data-fields","record","title","input-label","input-value"])):m("",!0),N.value?(i(),K(o(_t),{key:4,modelValue:ae.value,"onUpdate:modelValue":t[5]||(t[5]=a=>ae.value=a),title:l.deleteDialogTitle(l.dataType,N.value),"primary-text":l.deleteDialogPrimaryText(l.dataType,N.value),"secondary-text":l.deleteDialogSecondaryText(l.dataType,N.value),width:500,height:350,class:"delete-dialog",onConfirm:Xt,onCancel:Re},null,8,["modelValue","title","primary-text","secondary-text"])):m("",!0),ce.value?(i(),K(o(Se),{key:5,modelValue:ie.value,"onUpdate:modelValue":t[8]||(t[8]=a=>ie.value=a),title:"Download export file",width:400,height:250},{body:M(()=>[Ie($(de.value),1)]),actions:M(()=>[x("a",{ref_key:"downloadAnchor",ref:Ne,class:"hidden",rel:"noreferrer",download:de.value,href:ce.value},null,8,Ca),U(o(Oe),{"button-type":"text",value:"Download",icon:"fa-solid fa-file-arrow-down",onClick:t[6]||(t[6]=a=>qt())}),U(o(Oe),{"button-type":"text",value:"Cancel",icon:"fa-solid fa-xmark",onClick:t[7]||(t[7]=a=>Ke())})]),_:1},8,["modelValue"])):m("",!0)]))}},ja=Ge(Oa,[["__scopeId","data-v-9d3eb401"]]);export{ja as D,Xe as _};

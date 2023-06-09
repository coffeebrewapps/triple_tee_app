import{x as ge,d as y,_ as _e,a as Te,q as pe,u as he,B as ce,Y as $e,b as be,r as v,w as Ce,e as we,o as l,c as u,k as r,h as t,W as L,v as H,D as Q,f,t as C,F as ue,y as de,l as ke,A as De,p as Se,j as Le,g as ae,s as se}from"./index-b9c14755.js";import{_ as me,D as Ke}from"./DataPage-d774325b.js";import{T as Ve}from"./TabContainer-ee79f9f6.js";import{u as Me}from"./input-458a07cd.js";import"./errors-29306128.js";import"./DataForm-93a9ee82.js";const{isEmpty:Fe,notEarlierThan:Ne}=ge();function ve(){const _=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"startTime",type:"datetime",label:"Start Time",defaultValue:()=>new Date,listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"endTime",type:"datetime",label:"End Time",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"description",type:"text",label:"Description",defaultValue:()=>"New Task",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"content",type:"textarea",label:"Content",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"tags",type:"multiSelect",label:"Tags",reference:{label:p},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:q,label:p}}],E=[{startTime:"md",endTime:"md"},{description:"lg"},{content:"lg"},{tags:"lg"}],V={initData:{startTime:{startTime:null,endTime:null},endTime:{startTime:null,endTime:null}},layout:[{tags:"md"},{startTime:"md"},{endTime:"md"}]},K={create:{endTime:[M]},update:{endTime:[M]}};function q(s){return s.id}function p(s){return`${s.category}:${s.name}`}function M(s){return Ne(s,"endTime","startTime")}function F(s){if(s===0)return"0 h 0 m 0 s";const k=Math.floor(s/1e3/60/60/24),W=k*1e3*60*60*24,b=Math.floor((s-W)/1e3/60/60),T=b*1e3*60*60,w=Math.floor((s-W-T)/1e3/60),m=w*1e3*60,I=Math.floor((s-W-T-m)/1e3),g=[];return k>0&&g.push(`${k} d`),b>0&&g.push(`${b} h`),w>0&&g.push(`${w} m`),I>0&&g.push(`${I} s`),g.join(" ")}function A(s){return Fe(s.endTime)?new Date-new Date(s.startTime):new Date(s.endTime)-new Date(s.startTime)}const h=y(()=>_.filter(s=>s.reference)),c=y(()=>h.value.map(s=>s.key));return{dataFields:_,fieldsLayout:E,filters:V,validations:K,formatDuration:F,calculateDuration:A,includeKeys:c,recordValue:q,tagLabel:p}}const Ae=_=>(Se("data-v-977636d7"),_=_(),Le(),_),Ie={class:"today-logs-container"},Oe={class:"controls"},je=["onKeydown"],Be=["onKeydown"],He=["onKeydown"],Qe=["onKeydown"],qe=["onKeydown"],ze={class:"logs"},Ue={class:"total"},Pe=Ae(()=>r("div",{class:"divider"},null,-1)),Ye={class:"duration"},Ge={class:"start-time"},Je={key:0,class:"end-time"},Re={key:1,class:"elapsed"},Xe={key:2,class:"elapsed"},Ze={class:"description"},et={__name:"TodayLog",setup(_){const{isEmpty:E,notEmpty:V}=ge(),K=Te(),p=pe().getSystemConfigs(),{formatShortTime:M}=De(),{dataFields:F,fieldsLayout:A,validations:h,formatDuration:c,calculateDuration:s,includeKeys:k}=ve(),{formatDataFields:W,validateParams:b,formatDataForShow:T,formatDataForSave:w}=Me(F),{flashMessage:m}=he(),I=ce(),g=$e(),O=be(),N=v([]),X=y(()=>F.map(e=>e.key)),x=v({}),ne=y(()=>{const e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e}),oe=y(()=>{const e=new Date;return e.setHours(23),e.setMinutes(59),e.setSeconds(59),e}),j=v([]),B=y(()=>j.value.length===0?!1:E(x.value.endTime)&&a.value),Z=y(()=>j.value.reduce((e,i)=>e+i.duration,0));function P(e){return e.map(i=>(i.duration=s(i),i))}function z(e){return E(e)?{}:(e.duration=s(e),e)}const n=v(!1),a=v(!1);function o(){return F.reduce((e,i)=>{const d=i.key,te=i.defaultValue;return V(te)?e[d]=te():e[d]=null,e},{})}function D(){x.value=o(),G.value="",n.value=!0}async function $(){x.value=o(),G.value="",await fe()}function Y(){n.value=!1}async function fe(){const e=b(h.create,x.value);if(Object.keys(e).length>0){m("Error submitting task!");return}const i=w(x.value);await K.create("work_logs",i).then(d=>{m("Started task successfully!"),ee(),Y()}).catch(d=>{O.error("Error creating data",d),m("Error creating data!")})}const U=v(!1),G=v(""),S=v({});Ce(U,(e,i)=>{e||(S.value={})});async function Ee(){const e=b(h.update,S.value);if(Object.keys(e).length>0){m("Error submitting task!");return}const i=w(S.value);await K.update("work_logs",S.value.id,i).then(d=>{m("Ended task successfully!"),ee(),We(),G.value==="quick"?$():G.value==="input"&&setTimeout(D,1e3)}).catch(d=>{O.error("Error submitting task",d),m("Error submitting task!")})}async function J(){S.value=Object.assign({},x.value),await T("startTime",S.value).then(e=>{S.value.startTime=e}),await T("tags",S.value).then(e=>{S.value.tags=e}),S.value.endTime=new Date,U.value=!0}function re(){J(),G.value="input"}function le(){J(),G.value="quick"}function We(){S.value={},U.value=!1}const ie=v(!1),R=y(()=>ie.value?"shortcut show":"shortcut hide");g.registerListener({route:"/work_logs",eventType:"ctrl-n"},{id:"TodayStartTask",invoke:e=>{D()}}),g.registerListener({route:"/work_logs",eventType:"ctrl-q"},{id:"TodayQuickStartTask",invoke:e=>{$()}}),g.registerListener({route:"/work_logs",eventType:"ctrl-e"},{id:"TodayEndTask",invoke:e=>{J()}}),g.registerListener({route:"/work_logs",eventType:"ctrl-g"},{id:"TodayEndTaskAndStartTask",invoke:e=>{re()}}),g.registerListener({route:"/work_logs",eventType:"ctrl-f"},{id:"TodayEndTaskAndQuickStartTask",invoke:e=>{le()}}),g.registerListener({route:"/work_logs",eventType:"keydown-Escape"},{id:"CloseTodayLogDialogs",invoke:e=>{n.value&&(n.value=!1),U.value&&(U.value=!1)}}),I.registerListener("loadTodayLogs",{id:"TodayLog",invoke:e=>{ee()}}),I.registerListener("toggleShortcut",{id:"ToggleTodayLogShortcut",invoke:e=>{ie.value=!ie.value}});async function xe(){await K.schemas("work_logs").then(e=>{const i=e.fields;N.value=W(i)}).catch(e=>{m("Error loading schemas!"),O.error("Error loading schemas",e)})}async function ee(){const e={include:k.value,filters:{startTime:{startDate:ne.value,endDate:oe.value}},sort:{field:"startTime",order:"desc"}};await K.list("work_logs",e).then(i=>{j.value=P(i.data),x.value=z(j.value[0]),V(x.value.startTime)&&(a.value=!0)}).catch(i=>{m("Error loading work logs!"),O.error("Error loading work logs",i)})}return we(async()=>{await ee(),await xe()}),(e,i)=>(l(),u("div",Ie,[r("div",Oe,[t(B)?f("",!0):(l(),u("div",{key:0,class:"button",tabindex:"0",onClick:D,onKeydown:L(D,["enter"])},[H(" Start New Task "),r("div",{class:Q(t(R))}," N ",2)],40,je)),t(B)?f("",!0):(l(),u("div",{key:1,class:"button",tabindex:"0",onClick:$,onKeydown:L($,["enter"])},[H(" Quick Start New Task "),r("div",{class:Q(t(R))}," Q ",2)],40,Be)),t(B)?(l(),u("div",{key:2,class:"button",tabindex:"0",onClick:J,onKeydown:L(J,["enter"])},[H(" End Current Task "),r("div",{class:Q(t(R))}," E ",2)],40,He)):f("",!0),t(B)?(l(),u("div",{key:3,class:"button",tabindex:"0",onClick:re,onKeydown:L(re,["enter"])},[H(" End and Start New "),r("div",{class:Q(t(R))}," G ",2)],40,Qe)):f("",!0),t(B)?(l(),u("div",{key:4,class:"button",tabindex:"0",onClick:le,onKeydown:L(le,["enter"])},[H(" End and Quick Start "),r("div",{class:Q(t(R))}," F ",2)],40,qe)):f("",!0)]),r("div",ze,[r("div",Ue," Today's total: "+C(t(c)(t(Z))),1),(l(!0),u(ue,null,de(j.value,(d,te)=>(l(),u("div",{key:te,class:"log"},[Pe,r("div",Ye,[r("div",Ge,C(t(M)(d.startTime,t(p).timezone)),1),t(V)(d.endTime)?(l(),u("div",Je," to "+C(t(M)(d.endTime,t(p).timezone)),1)):f("",!0),t(V)(d.endTime)?(l(),u("div",Re," ("+C(t(c)(d.duration))+") ",1)):f("",!0),t(E)(d.endTime)?(l(),u("div",Xe," (not ended) ")):f("",!0)]),r("div",Ze,C(d.description),1)]))),128))]),ke(me,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=d=>n.value=d),schemas:N.value,"fields-layout":t(A),"data-fields":t(X),data:x.value,fullscreen:!0,"dialog-title":"Start Task",onSubmit:fe},null,8,["modelValue","schemas","fields-layout","data-fields","data"]),ke(me,{modelValue:U.value,"onUpdate:modelValue":i[1]||(i[1]=d=>U.value=d),schemas:N.value,"fields-layout":t(A),"data-fields":t(X),data:S.value,fullscreen:!0,"dialog-title":"End Task",onSubmit:Ee},null,8,["modelValue","schemas","fields-layout","data-fields","data"])]))}},tt=_e(et,[["__scopeId","data-v-977636d7"]]);const ye=_=>(Se("data-v-139396c0"),_=_(),Le(),_),at={class:"weekly-tab-container"},st={class:"weekly-tabs"},nt=["onKeydown"],ot=ye(()=>r("i",{class:"fa-solid fa-angle-left"},null,-1)),rt=["onKeydown"],lt=["onKeydown"],it=ye(()=>r("i",{class:"fa-solid fa-angle-right"},null,-1)),ut={class:"weekly-tab-content"},dt={key:0,class:"total"},ct={key:1,class:"total"},vt={class:"timeline"},yt=ye(()=>r("div",{class:"divider"},null,-1)),ft={class:"heading"},kt={class:"date"},mt={key:0,class:"duration"},gt={key:1,class:"duration"},_t={class:"entries"},Tt={key:0},pt={class:"description"},ht={class:"duration"},bt={__name:"WeekLog",props:{loadData:{type:Boolean,default:!1}},setup(_){const E=Te(),K=pe().getSystemConfigs(),{formatLongDate:q}=De(),{formatDuration:p,calculateDuration:M}=ve(),{flashMessage:F}=he(),A=ce(),h=be(),c=v("this"),s=v({}),k=v(0),W=v("prevWeekTab"),b=v("thisWeekTab"),T=v("nextWeekTab"),w=y(()=>{const n=new Date,a=new Date,o=k.value*7;return c.value==="prev"?(a.setDate(a.getDate()+o),a.setDate(a.getDate()-n.getDay())):(c.value==="next"&&a.setDate(a.getDate()+o),a.setDate(a.getDate()-n.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a}),m=y(()=>{const n=new Date;return n.setDate(w.value.getDate()+6),n.setHours(23),n.setMinutes(59),n.setSeconds(59),n}),I=y(()=>Array.from(Array(7)).map((n,a)=>{const o=new Date(w.value);return o.setDate(w.value.getDate()+a),o.setHours(0),o.setMinutes(0),o.setSeconds(0),o})),g=y(()=>({startTime:{startDate:w.value,endDate:m.value}})),O=y(()=>Object.entries(s.value).reduce((n,[a,{total:o}])=>n+o,0));function N(n){return s.value[n]?s.value[n]:{total:0,entries:[]}}function X(n){const a=I.value.reduce((o,D)=>(o[D]={entries:[],total:0},o),{});return n.forEach(o=>{const D=new Date(o.startTime),$=new Date(D.getFullYear(),D.getMonth(),D.getDate(),0,0,0),Y=M(o);a[$].entries.push(Object.assign({},o,{duration:Y})),a[$].total=a[$].total+Y}),a}A.registerListener("loadWeeklyLogs",{id:"WeekLog",invoke:n=>{z()}});const x=y(()=>c.value==="prev"?"weekly-tab active":"weekly-tab"),ne=y(()=>c.value==="this"?"weekly-tab active":"weekly-tab"),oe=y(()=>c.value==="next"?"weekly-tab active":"weekly-tab");async function j(){k.value=k.value-1,c.value="prev",W.value.blur(),await z()}async function B(){k.value=0,c.value="this",b.value.blur(),await z()}async function Z(){k.value=k.value+1,c.value="next",T.value.blur(),await z()}function P(n){n==="prev"?W.value.focus():n==="next"?T.value.focus():b.value.focus()}async function z(){const n={filters:g.value};await E.list("work_logs",n).then(a=>{s.value=X(a.data)}).catch(a=>{F("Error loading work logs!"),h.error("Error loading work logs",a)})}return we(async()=>{await z()}),(n,a)=>(l(),u("div",at,[r("div",st,[r("div",{ref_key:"prevWeekTab",ref:W,class:Q(t(x)),tabindex:"0",onClick:j,onKeydown:[L(j,["enter"]),a[0]||(a[0]=L(o=>P("this"),["arrow-right"]))]},[ot,H(" Prev Week ")],42,nt),r("div",{ref_key:"thisWeekTab",ref:b,class:Q(t(ne)),tabindex:"0",onClick:B,onKeydown:[L(B,["enter"]),a[1]||(a[1]=L(o=>P("prev"),["arrow-left"])),a[2]||(a[2]=L(o=>P("next"),["arrow-right"]))]}," This Week ",42,rt),r("div",{ref_key:"nextWeekTab",ref:T,class:Q(t(oe)),tabindex:"0",onClick:Z,onKeydown:[L(Z,["enter"]),a[3]||(a[3]=L(o=>P("this"),["arrow-left"]))]},[H(" Next Week "),it],42,lt)]),r("div",ut,[t(O)>0?(l(),u("div",dt," Week's total: "+C(t(p)(t(O))),1)):f("",!0),t(O)===0?(l(),u("div",ct," Week's total: 0 h 0 m 0 s ")):f("",!0),r("div",vt,[(l(!0),u(ue,null,de(t(I),(o,D)=>(l(),u("div",{key:D,class:"day"},[yt,r("div",ft,[r("div",kt,C(t(q)(o,t(K).timezone)),1),N(o).total>0?(l(),u("div",mt," ("+C(t(p)(N(o).total))+") ",1)):f("",!0),N(o).total===0?(l(),u("div",gt," (0 h 0 m 0 s) ")):f("",!0)]),r("div",_t,[N(o).entries.length===0?(l(),u("div",Tt," No entry ")):f("",!0),(l(!0),u(ue,null,de(N(o).entries,($,Y)=>(l(),u("div",{key:Y,class:"entry"},[r("div",pt,C($.description),1),r("div",ht,C(t(p)($.duration)),1)]))),128))])]))),128))])])]))}},wt=_e(bt,[["__scopeId","data-v-139396c0"]]),$t={__name:"WorkLogs",setup(_){const E=ce(),{dataFields:V,fieldsLayout:K,filters:q,validations:p,formatDuration:M,calculateDuration:F}=ve(),A={oneline:!0,showHeader:!1,highlightField:"description"},h=v(0),c=[{label:"Today",onchange:s},{label:"Weekly",onchange:k},{label:"All Logs",onchange:W}];function s(){E.emitEvent("loadTodayLogs",{})}function k(){E.emitEvent("loadWeeklyLogs",{})}function W(){E.emitEvent("loadData",{dataType:"Work Logs"})}async function b(T){await c[T].onchange(),h.value=T}return(T,w)=>(l(),ae(Ve,{tabs:c,"selected-tab":h.value,onTabChange:b},{"tab-0":se(()=>[h.value===0?(l(),ae(tt,{key:0})):f("",!0)]),"tab-1":se(()=>[h.value===1?(l(),ae(wt,{key:0})):f("",!0)]),"tab-2":se(()=>[h.value===2?(l(),ae(Ke,{key:0,"model-class":"work_logs","data-type":"Work Logs",fullscreen:!0,"fields-layout":t(K),"data-fields":t(V),validations:t(p),filters:t(q),"table-style":A},{["data-col.startTime"]:se(({row:m})=>[H(" Total duration "),r("strong",null,C(t(M)(t(F)(m))),1)]),_:2},1032,["fields-layout","data-fields","validations","filters"])):f("",!0)]),_:1},8,["selected-tab"]))}};export{$t as default};

import{c as y,_ as ce,a as pe,m as Te,u as be,q as ve,S as Ee,r as f,w as xe,o as he,b as r,d as u,i as l,g as t,T as w,z,E as j,e as k,t as V,F as ie,x as ue,j as de,D as we,p as fe,h as ye,v as le,f as re}from"./index-f8b7dd22.js";import{u as De}from"./validations-9a1af222.js";import{_ as ge,D as $e}from"./DataPage-1b7236d4.js";import{T as Ce}from"./TabContainer-6f7f66ae.js";import{u as Ke}from"./input-991d0442.js";import"./errors-53bc63a8.js";import"./DataForm-e3fe8786.js";const{isEmpty:Ve,notEarlierThan:Me}=De();function ke(){const c=[{key:"id",type:"text",label:"ID",listable:!0,viewable:!0,creatable:!1,updatable:!1,sortable:!0},{key:"startTime",type:"datetime",label:"Start Time",defaultValue:()=>new Date,listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"endTime",type:"datetime",label:"End Time",listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,sortable:!0},{key:"description",type:"text",label:"Description",defaultValue:()=>"New Task",listable:!0,viewable:!0,creatable:!0,updatable:!0},{key:"content",type:"textarea",label:"Content",listable:!1,viewable:!0,creatable:!0,updatable:!0},{key:"tags",type:"multiSelect",label:"Tags",reference:{label:T},listable:!0,viewable:!0,creatable:!0,updatable:!0,filterable:!0,options:{server:!0,pagination:!0,modelClass:"tags",value:B,label:T}}],D=[{startTime:"md",endTime:"md"},{description:"lg"},{content:"lg"},{tags:"lg"}],M={initData:{startTime:{startTime:null,endTime:null},endTime:{startTime:null,endTime:null}},layout:[{tags:"md"},{startTime:"md"},{endTime:"md"}]},E={create:{endTime:[m]},update:{endTime:[m]}};function B(s){return s.id}function T(s){return`${s.category}:${s.name}`}function m(s){return Me(s,"endTime","startTime")}function x(s){if(s===0)return"0 h 0 m 0 s";const g=Math.floor(s/1e3/60/60/24),$=g*1e3*60*60*24,C=Math.floor((s-$)/1e3/60/60),K=C*1e3*60*60,I=Math.floor((s-$-K)/1e3/60),p=I*1e3*60,H=Math.floor((s-$-K-p)/1e3),v=[];return g>0&&v.push(`${g} d`),C>0&&v.push(`${C} h`),I>0&&v.push(`${I} m`),H>0&&v.push(`${H} s`),v.join(" ")}function N(s){return Ve(s.endTime)?new Date-new Date(s.startTime):new Date(s.endTime)-new Date(s.startTime)}const _=y(()=>c.filter(s=>s.reference)),S=y(()=>_.value.map(s=>s.key));return{dataFields:c,fieldsLayout:D,filters:M,validations:E,formatDuration:x,calculateDuration:N,includeKeys:S,recordValue:B,tagLabel:T}}const Fe=c=>(fe("data-v-0bd8f35a"),c=c(),ye(),c),Ne={class:"today-logs-container"},Ie={class:"controls"},Ae=["onKeydown"],Oe=["onKeydown"],je=["onKeydown"],Be=["onKeydown"],He=["onKeydown"],Qe={class:"logs"},qe={class:"total"},ze=Fe(()=>l("div",{class:"divider"},null,-1)),Ue={class:"duration"},Pe={class:"start-time"},Ge={key:0,class:"end-time"},Ye={key:1,class:"elapsed"},Je={key:2,class:"elapsed"},Re={class:"description"},Xe={__name:"TodayLog",setup(c){const{isEmpty:D,notEmpty:M}=De(),E=pe(),T=Te().getSystemConfigs(),{formatShortTime:m}=we(),{dataFields:x,fieldsLayout:N,validations:_,formatDuration:S,calculateDuration:s,includeKeys:g}=ke(),{formatDataFields:$,validateParams:C,formatDataForShow:K,formatDataForSave:I}=Ke(x),{flashMessage:p}=be(),H=ve(),v=Ee(),F=f([]),R=y(()=>x.map(e=>e.key)),L=f({}),te=y(()=>{const e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e}),ae=y(()=>{const e=new Date;return e.setHours(23),e.setMinutes(59),e.setSeconds(59),e}),A=f([]),O=y(()=>A.value.length===0?!1:D(L.value.endTime)&&a.value),X=y(()=>A.value.reduce((e,i)=>e+i.duration,0));function U(e){return e.map(i=>(i.duration=s(i),i))}function Q(e){return D(e)?{}:(e.duration=s(e),e)}const n=f(!1),a=f(!1);function o(){return x.reduce((e,i)=>{const d=i.key,ee=i.defaultValue;return M(ee)?e[d]=ee():e[d]=null,e},{})}function b(){L.value=o(),G.value="",n.value=!0}async function W(){L.value=o(),G.value="",await me()}function P(){n.value=!1}async function me(){const e=C(_.create,L.value);if(Object.keys(e).length>0){p("Error submitting task!");return}const i=I(L.value);await E.create("work_logs",i).then(d=>{p("Started task successfully!"),Z(),P()}).catch(d=>{console.error(d),p("Error creating data!")})}const q=f(!1),G=f(""),h=f({});xe(q,(e,i)=>{e||(h.value={})});async function Se(){const e=C(_.update,h.value);if(Object.keys(e).length>0){p("Error submitting task!");return}const i=I(h.value);await E.update("work_logs",h.value.id,i).then(d=>{p("Ended task successfully!"),Z(),Le(),G.value==="quick"?W():G.value==="input"&&setTimeout(b,1e3)}).catch(d=>{console.error(d),p("Error submiting task!")})}async function Y(){h.value=Object.assign({},L.value),await K("startTime",h.value).then(e=>{h.value.startTime=e}),await K("tags",h.value).then(e=>{h.value.tags=e}),h.value.endTime=new Date,q.value=!0}function se(){Y(),G.value="input"}function ne(){Y(),G.value="quick"}function Le(){h.value={},q.value=!1}const oe=f(!1),J=y(()=>oe.value?"shortcut show":"shortcut hide");v.registerListener({route:"/work_logs",eventType:"ctrl-n"},{id:"TodayStartTask",invoke:e=>{b()}}),v.registerListener({route:"/work_logs",eventType:"ctrl-q"},{id:"TodayQuickStartTask",invoke:e=>{W()}}),v.registerListener({route:"/work_logs",eventType:"ctrl-e"},{id:"TodayEndTask",invoke:e=>{Y()}}),v.registerListener({route:"/work_logs",eventType:"ctrl-g"},{id:"TodayEndTaskAndStartTask",invoke:e=>{se()}}),v.registerListener({route:"/work_logs",eventType:"ctrl-f"},{id:"TodayEndTaskAndQuickStartTask",invoke:e=>{ne()}}),v.registerListener({route:"/work_logs",eventType:"keydown-Escape"},{id:"CloseTodayLogDialogs",invoke:e=>{n.value&&(n.value=!1),q.value&&(q.value=!1)}}),H.registerListener("loadTodayLogs",{id:"TodayLog",invoke:e=>{Z()}}),H.registerListener("toggleShortcut",{id:"ToggleTodayLogShortcut",invoke:e=>{oe.value=!oe.value}});async function We(){await E.schemas("work_logs").then(e=>{const i=e.fields;F.value=$(i)}).catch(e=>{p("Error loading schemas!"),console.log(e)})}async function Z(){const e={include:g.value,filters:{startTime:{startDate:te.value,endDate:ae.value}},sort:{field:"startTime",order:"desc"}};await E.list("work_logs",e).then(i=>{A.value=U(i.data),L.value=Q(A.value[0]),M(L.value.startTime)&&(a.value=!0)}).catch(i=>{p("Error loading work logs!"),console.log(i)})}return he(async()=>{await Z(),await We()}),(e,i)=>(r(),u("div",Ne,[l("div",Ie,[t(O)?k("",!0):(r(),u("div",{key:0,class:"button",tabindex:"0",onClick:b,onKeydown:w(b,["enter"])},[z(" Start New Task "),l("div",{class:j(t(J))}," N ",2)],40,Ae)),t(O)?k("",!0):(r(),u("div",{key:1,class:"button",tabindex:"0",onClick:W,onKeydown:w(W,["enter"])},[z(" Quick Start New Task "),l("div",{class:j(t(J))}," Q ",2)],40,Oe)),t(O)?(r(),u("div",{key:2,class:"button",tabindex:"0",onClick:Y,onKeydown:w(Y,["enter"])},[z(" End Current Task "),l("div",{class:j(t(J))}," E ",2)],40,je)):k("",!0),t(O)?(r(),u("div",{key:3,class:"button",tabindex:"0",onClick:se,onKeydown:w(se,["enter"])},[z(" End and Start New "),l("div",{class:j(t(J))}," G ",2)],40,Be)):k("",!0),t(O)?(r(),u("div",{key:4,class:"button",tabindex:"0",onClick:ne,onKeydown:w(ne,["enter"])},[z(" End and Quick Start "),l("div",{class:j(t(J))}," F ",2)],40,He)):k("",!0)]),l("div",Qe,[l("div",qe," Today's total: "+V(t(S)(t(X))),1),(r(!0),u(ie,null,ue(A.value,(d,ee)=>(r(),u("div",{key:ee,class:"log"},[ze,l("div",Ue,[l("div",Pe,V(t(m)(d.startTime,t(T).timezone)),1),t(M)(d.endTime)?(r(),u("div",Ge," to "+V(t(m)(d.endTime,t(T).timezone)),1)):k("",!0),t(M)(d.endTime)?(r(),u("div",Ye," ("+V(t(S)(d.duration))+") ",1)):k("",!0),t(D)(d.endTime)?(r(),u("div",Je," (not ended) ")):k("",!0)]),l("div",Re,V(d.description),1)]))),128))]),de(ge,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=d=>n.value=d),schemas:F.value,"fields-layout":t(N),"data-fields":t(R),data:L.value,fullscreen:!0,"dialog-title":"Start Task",onSubmit:me},null,8,["modelValue","schemas","fields-layout","data-fields","data"]),de(ge,{modelValue:q.value,"onUpdate:modelValue":i[1]||(i[1]=d=>q.value=d),schemas:F.value,"fields-layout":t(N),"data-fields":t(R),data:h.value,fullscreen:!0,"dialog-title":"End Task",onSubmit:Se},null,8,["modelValue","schemas","fields-layout","data-fields","data"])]))}},Ze=ce(Xe,[["__scopeId","data-v-0bd8f35a"]]);const _e=c=>(fe("data-v-16e052be"),c=c(),ye(),c),et={class:"weekly-tab-container"},tt={class:"weekly-tabs"},at=["onKeydown"],st=_e(()=>l("i",{class:"fa-solid fa-angle-left"},null,-1)),nt=["onKeydown"],ot=["onKeydown"],lt=_e(()=>l("i",{class:"fa-solid fa-angle-right"},null,-1)),rt={class:"weekly-tab-content"},it={key:0,class:"total"},ut={key:1,class:"total"},dt={class:"timeline"},ct=_e(()=>l("div",{class:"divider"},null,-1)),vt={class:"heading"},ft={class:"date"},yt={key:0,class:"duration"},kt={key:1,class:"duration"},_t={class:"entries"},mt={key:0},gt={class:"description"},pt={class:"duration"},Tt={__name:"WeekLog",props:{loadData:{type:Boolean,default:!1}},setup(c){const D=pe(),E=Te().getSystemConfigs(),{formatLongDate:B}=we(),{formatDuration:T,calculateDuration:m}=ke(),{flashMessage:x}=be(),N=ve(),_=f("this"),S=f({}),s=f(0),g=f("prevWeekTab"),$=f("thisWeekTab"),C=f("nextWeekTab"),K=y(()=>{const n=new Date,a=new Date,o=s.value*7;return _.value==="prev"?(a.setDate(a.getDate()+o),a.setDate(a.getDate()-n.getDay())):(_.value==="next"&&a.setDate(a.getDate()+o),a.setDate(a.getDate()-n.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a}),I=y(()=>{const n=new Date;return n.setDate(K.value.getDate()+6),n.setHours(23),n.setMinutes(59),n.setSeconds(59),n}),p=y(()=>Array.from(Array(7)).map((n,a)=>{const o=new Date(K.value);return o.setDate(K.value.getDate()+a),o.setHours(0),o.setMinutes(0),o.setSeconds(0),o})),H=y(()=>({startTime:{startDate:K.value,endDate:I.value}})),v=y(()=>Object.entries(S.value).reduce((n,[a,{total:o}])=>n+o,0));function F(n){return S.value[n]?S.value[n]:{total:0,entries:[]}}function R(n){const a=p.value.reduce((o,b)=>(o[b]={entries:[],total:0},o),{});return n.forEach(o=>{const b=new Date(o.startTime),W=new Date(b.getFullYear(),b.getMonth(),b.getDate(),0,0,0),P=m(o);a[W].entries.push(Object.assign({},o,{duration:P})),a[W].total=a[W].total+P}),a}N.registerListener("loadWeeklyLogs",{id:"WeekLog",invoke:n=>{Q()}});const L=y(()=>_.value==="prev"?"weekly-tab active":"weekly-tab"),te=y(()=>_.value==="this"?"weekly-tab active":"weekly-tab"),ae=y(()=>_.value==="next"?"weekly-tab active":"weekly-tab");async function A(){s.value=s.value-1,_.value="prev",g.value.blur(),await Q()}async function O(){s.value=0,_.value="this",$.value.blur(),await Q()}async function X(){s.value=s.value+1,_.value="next",C.value.blur(),await Q()}function U(n){n==="prev"?g.value.focus():n==="next"?C.value.focus():$.value.focus()}async function Q(){const n={filters:H.value};await D.list("work_logs",n).then(a=>{S.value=R(a.data)}).catch(a=>{x("Error loading work logs!"),console.log(a)})}return he(async()=>{await Q()}),(n,a)=>(r(),u("div",et,[l("div",tt,[l("div",{ref_key:"prevWeekTab",ref:g,class:j(t(L)),tabindex:"0",onClick:A,onKeydown:[w(A,["enter"]),a[0]||(a[0]=w(o=>U("this"),["arrow-right"]))]},[st,z(" Prev Week ")],42,at),l("div",{ref_key:"thisWeekTab",ref:$,class:j(t(te)),tabindex:"0",onClick:O,onKeydown:[w(O,["enter"]),a[1]||(a[1]=w(o=>U("prev"),["arrow-left"])),a[2]||(a[2]=w(o=>U("next"),["arrow-right"]))]}," This Week ",42,nt),l("div",{ref_key:"nextWeekTab",ref:C,class:j(t(ae)),tabindex:"0",onClick:X,onKeydown:[w(X,["enter"]),a[3]||(a[3]=w(o=>U("this"),["arrow-left"]))]},[z(" Next Week "),lt],42,ot)]),l("div",rt,[t(v)>0?(r(),u("div",it," Week's total: "+V(t(T)(t(v))),1)):k("",!0),t(v)===0?(r(),u("div",ut," Week's total: 0 h 0 m 0 s ")):k("",!0),l("div",dt,[(r(!0),u(ie,null,ue(t(p),(o,b)=>(r(),u("div",{key:b,class:"day"},[ct,l("div",vt,[l("div",ft,V(t(B)(o,t(E).timezone)),1),F(o).total>0?(r(),u("div",yt," ("+V(t(T)(F(o).total))+") ",1)):k("",!0),F(o).total===0?(r(),u("div",kt," (0 h 0 m 0 s) ")):k("",!0)]),l("div",_t,[F(o).entries.length===0?(r(),u("div",mt," No entry ")):k("",!0),(r(!0),u(ie,null,ue(F(o).entries,(W,P)=>(r(),u("div",{key:P,class:"entry"},[l("div",gt,V(W.description),1),l("div",pt,V(t(T)(W.duration)),1)]))),128))])]))),128))])])]))}},bt=ce(Tt,[["__scopeId","data-v-16e052be"]]);const ht=c=>(fe("data-v-9949f1bb"),c=c(),ye(),c),wt={class:"view-container"},Dt=ht(()=>l("h2",{class:"heading"}," Time Tracking ",-1)),St={__name:"WorkLogs",setup(c){const D=ve(),{dataFields:M,fieldsLayout:E,filters:B,validations:T}=ke(),m=f(0),x=[{label:"Today",onchange:N},{label:"Weekly",onchange:_},{label:"All Logs",onchange:S}];function N(){D.emitEvent("loadTodayLogs",{})}function _(){D.emitEvent("loadWeeklyLogs",{})}function S(){D.emitEvent("loadData",{dataType:"Work Logs"})}async function s(g){await x[g].onchange(),m.value=g}return(g,$)=>(r(),u("div",wt,[Dt,de(Ce,{tabs:x,"selected-tab":m.value,onTabChange:s},{"tab-0":le(()=>[m.value===0?(r(),re(Ze,{key:0})):k("",!0)]),"tab-1":le(()=>[m.value===1?(r(),re(bt,{key:0})):k("",!0)]),"tab-2":le(()=>[m.value===2?(r(),re($e,{key:0,"model-class":"work_logs","data-type":"Work Logs",fullscreen:!0,"fields-layout":t(E),"data-fields":t(M),validations:t(T),filters:t(B)},null,8,["fields-layout","data-fields","validations","filters"])):k("",!0)]),_:1},8,["selected-tab"])]))}},Vt=ce(St,[["__scopeId","data-v-9949f1bb"]]);export{Vt as default};

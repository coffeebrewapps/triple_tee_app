import{_ as u,a as p,r,b as g,d as i,U as v,o as f,c as h,j as a,t as m,g as I,p as y,i as L}from"./index-b3ed4318.js";const S=e=>(y("data-v-1a3909df"),e=e(),L(),e),x={class:"page-container"},D=S(()=>a("div",{class:"title"}," Streaming the last 20 entries every second. ",-1)),b={class:"logs"},B={__name:"LogsPage",setup(e){const l=p(),o=r([]),d=g(()=>o.value.join(`
`)),n=r();async function _(){c(),n.value=setInterval(c,1e3)}async function c(){l.downloadStream("logs").then(s=>{s.data.text().then(t=>{o.value=t.split(`
`)}).catch(t=>{console.error(t)})}).catch(s=>{console.error(s)})}return i(()=>{_()}),v(()=>{clearInterval(n.value)}),(s,t)=>(f(),h("div",x,[D,a("div",b,[a("pre",null,m(I(d)),1)])]))}},P=u(B,[["__scopeId","data-v-1a3909df"]]);export{P as default};

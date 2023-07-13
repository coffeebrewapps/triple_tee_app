import{_ as J,r as Y,o as $,c as T,a as k,F as ne,e as ie,n as N,t as K,f as fe,g as se,b as le,h as X,p as ve,i as he,j as U,w as M,d as me,k as be,l as ye}from"./index-497f12b8.js";const we={class:"tab-container"},xe={class:"tabs"},Fe=["onClick"],Ae={class:"tab-contents"},_e={__name:"TabContainer",props:{tabs:{type:Array,default(){return[]}}},setup(h){const A=Y(0);function s(g){A.value=g}function u(g){return A.value===g?"tab active":"tab"}function v(g){return A.value===g?"tab-content show":"tab-content"}return(g,x)=>($(),T("div",we,[k("div",xe,[($(!0),T(ne,null,ie(h.tabs,(r,p)=>($(),T("div",{key:p,class:N(u(p)),onClick:E=>s(p)},K(r.name),11,Fe))),128))]),k("div",Ae,[($(!0),T(ne,null,ie(h.tabs,(r,p)=>($(),T("div",{key:p,class:N(v(p))},[fe(g.$slots,`tab-content.${p}`,{},void 0,!0)],2))),128))])]))}},ke=J(_e,[["__scopeId","data-v-d05ff4b4"]]);var re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Se(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var de={exports:{}};(function(h){var A=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var s=function(u){var v=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,g=0,x={},r={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof p?new p(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++g}),t.__id},clone:function t(e,a){a=a||{};var n,i;switch(r.util.type(e)){case"Object":if(i=r.util.objId(e),a[i])return a[i];n={},a[i]=n;for(var l in e)e.hasOwnProperty(l)&&(n[l]=t(e[l],a));return n;case"Array":return i=r.util.objId(e),a[i]?a[i]:(n=[],a[i]=n,e.forEach(function(d,o){n[o]=t(d,a)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=v.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(v,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(t,e){var a=r.util.clone(r.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){n=n||r.languages;var i=n[t],l={};for(var d in i)if(i.hasOwnProperty(d)){if(d==e)for(var o in a)a.hasOwnProperty(o)&&(l[o]=a[o]);a.hasOwnProperty(d)||(l[d]=i[d])}var f=n[t];return n[t]=l,r.languages.DFS(r.languages,function(y,S){S===f&&y!=t&&(this[y]=l)}),l},DFS:function t(e,a,n,i){i=i||{};var l=r.util.objId;for(var d in e)if(e.hasOwnProperty(d)){a.call(e,d,e[d],n||d);var o=e[d],f=r.util.type(o);f==="Object"&&!i[l(o)]?(i[l(o)]=!0,t(o,a,null,i)):f==="Array"&&!i[l(o)]&&(i[l(o)]=!0,t(o,a,d,i))}}},plugins:{},highlightAll:function(t,e){r.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),r.hooks.run("before-all-elements-highlight",n);for(var i=0,l;l=n.elements[i++];)r.highlightElement(l,e===!0,n.callback)},highlightElement:function(t,e,a){var n=r.util.getLanguage(t),i=r.languages[n];r.util.setLanguage(t,n);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(l,n);var d=t.textContent,o={element:t,language:n,grammar:i,code:d};function f(S){o.highlightedCode=S,r.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r.hooks.run("after-highlight",o),r.hooks.run("complete",o),a&&a.call(o.element)}if(r.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){r.hooks.run("complete",o),a&&a.call(o.element);return}if(r.hooks.run("before-highlight",o),!o.grammar){f(r.util.encode(o.code));return}if(e&&u.Worker){var y=new Worker(r.filename);y.onmessage=function(S){f(S.data)},y.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else f(r.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};if(r.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),p.stringify(r.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var i=new L;return D(i,i.head,t),P(t,i,e,i.head,0),j(i)},hooks:{all:{},add:function(t,e){var a=r.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=r.hooks.all[t];if(!(!a||!a.length))for(var n=0,i;i=a[n++];)i(e)}},Token:p};u.Prism=r;function p(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=(n||"").length|0}p.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=t(f,a)}),n}var i={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),r.hooks.run("wrap",i);var d="";for(var o in i.attributes)d+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+d+">"+i.content+"</"+i.tag+">"};function E(t,e,a,n){t.lastIndex=e;var i=t.exec(a);if(i&&n&&i[1]){var l=i[1].length;i.index+=l,i[0]=i[0].slice(l)}return i}function P(t,e,a,n,i,l){for(var d in a)if(!(!a.hasOwnProperty(d)||!a[d])){var o=a[d];o=Array.isArray(o)?o:[o];for(var f=0;f<o.length;++f){if(l&&l.cause==d+","+f)return;var y=o[f],S=y.inside,Q=!!y.lookbehind,ee=!!y.greedy,ue=y.alias;if(ee&&!y.pattern.global){var ce=y.pattern.toString().match(/[imsuy]*$/)[0];y.pattern=RegExp(y.pattern.source,ce+"g")}for(var te=y.pattern||y,w=n.next,_=i;w!==e.tail&&!(l&&_>=l.reach);_+=w.value.length,w=w.next){var I=w.value;if(e.length>t.length)return;if(!(I instanceof p)){var q=1,F;if(ee){if(F=E(te,_,t,Q),!F||F.index>=t.length)break;var H=F.index,ge=F.index+F[0].length,C=_;for(C+=w.value.length;H>=C;)w=w.next,C+=w.value.length;if(C-=w.value.length,_=C,w.value instanceof p)continue;for(var z=w;z!==e.tail&&(C<ge||typeof z.value=="string");z=z.next)q++,C+=z.value.length;q--,I=t.slice(_,C),F.index-=_}else if(F=E(te,0,I,Q),!F)continue;var H=F.index,O=F[0],G=I.slice(0,H),ae=I.slice(H+O.length),W=_+I.length;l&&W>l.reach&&(l.reach=W);var B=w.prev;G&&(B=D(e,B,G),_+=G.length),R(e,B,q);var pe=new p(d,S?r.tokenize(O,S):O,ue,O);if(w=D(e,B,pe),ae&&D(e,w,ae),q>1){var Z={cause:d+","+f,reach:W};P(t,e,a,w.prev,_,Z),l&&Z.reach>l.reach&&(l.reach=Z.reach)}}}}}}function L(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function D(t,e,a){var n=e.next,i={value:a,prev:e,next:n};return e.next=i,n.prev=i,t.length++,i}function R(t,e,a){for(var n=e.next,i=0;i<a&&n!==t.tail;i++)n=n.next;e.next=n,n.prev=e,t.length-=i}function j(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!u.document)return u.addEventListener&&(r.disableWorkerMessageHandler||u.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,i=e.immediateClose;u.postMessage(r.highlight(n,r.languages[a],a)),i&&u.close()},!1)),r;var m=r.util.currentScript();m&&(r.filename=m.src,m.hasAttribute("data-manual")&&(r.manual=!0));function c(){r.manual||r.highlightAll()}if(!r.manual){var b=document.readyState;b==="loading"||b==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return r}(A);h.exports&&(h.exports=s),typeof re<"u"&&(re.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(v,g){var x={};x["language-"+g]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[g]},x.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:x}};r["language-"+g]={pattern:/[\s\S]+/,inside:s.languages[g]};var p={};p[v]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return v}),"i"),lookbehind:!0,greedy:!0,inside:r},s.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(u,v){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[v,"language-"+v],inside:s.languages[v]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,function(u){var v=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+v.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+v.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+v.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+v.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:v,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var g=u.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))}(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",v=function(m,c){return"✖ Error "+m+" while fetching file: "+c},g="✖ Error: File does not exist or is empty",x={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",p="loading",E="loaded",P="failed",L="pre[data-src]:not(["+r+'="'+E+'"]):not(['+r+'="'+p+'"])';function D(m,c,b){var t=new XMLHttpRequest;t.open("GET",m,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?c(t.responseText):t.status>=400?b(v(t.status,t.statusText)):b(g))},t.send(null)}function R(m){var c=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(c){var b=Number(c[1]),t=c[2],e=c[3];return t?e?[b,Number(e)]:[b,void 0]:[b,b]}}s.hooks.add("before-highlightall",function(m){m.selector+=", "+L}),s.hooks.add("before-sanity-check",function(m){var c=m.element;if(c.matches(L)){m.code="",c.setAttribute(r,p);var b=c.appendChild(document.createElement("CODE"));b.textContent=u;var t=c.getAttribute("data-src"),e=m.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=x[a]||a}s.util.setLanguage(b,e),s.util.setLanguage(c,e);var n=s.plugins.autoloader;n&&n.loadLanguages(e),D(t,function(i){c.setAttribute(r,E);var l=R(c.getAttribute("data-range"));if(l){var d=i.split(/\r\n?|\n/g),o=l[0],f=l[1]==null?d.length:l[1];o<0&&(o+=d.length),o=Math.max(0,Math.min(o-1,d.length)),f<0&&(f+=d.length),f=Math.max(0,Math.min(f,d.length)),i=d.slice(o,f).join(`
`),c.hasAttribute("data-start")||c.setAttribute("data-start",String(o+1))}b.textContent=i,s.highlightElement(b)},function(i){c.setAttribute(r,P),b.textContent=i})}}),s.plugins.fileHighlight={highlight:function(c){for(var b=(c||document).querySelectorAll(L),t=0,e;e=b[t++];)s.highlightElement(e)}};var j=!1;s.fileHighlight=function(){j||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),j=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(de);var Ce=de.exports;const $e=Se(Ce);const Te=h=>(ve("data-v-690a2f55"),h=h(),he(),h),Ee={class:"code-container"},De=Te(()=>k("i",{class:"fa-solid fa-xl fa-copy"},null,-1)),Ie=[De],Le={__name:"CodeContainer",props:{code:{type:String,default:""},language:{type:String,default:"none"}},setup(h){const A=h;Y(!1);const s=se(()=>`language-${A.language}`),u=Y(!1),v=se(()=>u.value?"alert show":"alert");function g(){u.value=!u.value}function x(){navigator.clipboard.writeText(A.code),g(),setTimeout(g,3e3)}return le(()=>{$e.highlightAll(!1)}),(r,p)=>($(),T("div",Ee,[k("div",{class:"clipboard",onClick:x},Ie),k("div",{class:N(v.value)}," Copied to clipboard! ",2),k("pre",{class:N(s.value)},[X("      "),k("code",null,`
        `+K(h.code)+`
      `,1),X(`
    `)],2)]))}},V=J(Le,[["__scopeId","data-v-690a2f55"]]);const ze={class:"page-container"},Me=me('<h1 data-v-856d1743>How To Customise Template</h1><p class="paragraph" data-v-856d1743> Triple Tee App allows you to customise invoice and receipt templates for different clients. It is built to be as simple as possible to design a template, using commonly known markup language, HTML, and styling language, CSS. </p><p class="paragraph" data-v-856d1743> To allow for more dynamic behaviour, we use a templating language, Liquid (developed by Shopify), to inject data that can be interpreted at the time of generating the document. To learn more about Liquid, do visit the official documentation site at <a target="_blank" href="https://shopify.github.io/liquid/" data-v-856d1743>https://shopify.github.io/liquid/</a>. </p><h2 data-v-856d1743>Understanding the Template Components</h2><p class="paragraph" data-v-856d1743> There&#39;re 3 parts to a template: markup, styles and data. </p><p class="paragraph" data-v-856d1743> Markup provides the skeleton of the document, definining where each text should be placed, and if dynamic behaviour is required, what data to inject at the position. </p><p class="paragraph" data-v-856d1743> Styles tell how the document should look. What should be the font size of the heading? What is the colour to use for the background? How far away the texts should be separated? </p><p class="paragraph" data-v-856d1743> Every invoice or receipt is generated for a different billing purpose, but it&#39;s not feasible to create one template for each instance of an invoice. Data are used to allow for a single template to be reused over and over for multiple instances. </p><h2 data-v-856d1743>Example</h2><p class="paragraph" data-v-856d1743> Here, we show an example of an invoice template broken down into individual components. </p>',10),Pe={class:"preview-container"},je=`
<div class="invoice-container">
  <div class="header">
    <div class="recipient">
      <div class="name">{{ billingContact.name }}</div>
      <div class="address">{{ billingContact.addressLine1 }}</div>
      <div class="address">{{ billingContact.addressLine2 }}</div>
      <div class="address">{{ billingContact.addressLine3 }}</div>
      <div class="address">{{ billingContact.city }}</div>
      <div class="address">{{ billingContact.state }}</div>
      <div class="address">{{ billingContact.country }}</div>
    </div>
  </div>
  <div class="metadata">
    <div class="line">
      <div class="label">Invoice No.</div>
      <div class="field">
        {{ invoiceNumberSequence.prefix }}-
        {{ invoice.invoiceNumber | prepend: '000000' | slice: -6, 6 }}-
        {{ invoiceNumberSequence.suffix }}
      </div>
    </div>
    <div class="line">
      <div class="label">Invoice Date</div>
      <div class="field">{{ invoice.invoiceDate | date: "%Y-%m-%d" }}</div>
    </div>
    <div class="line">
      <div class="label">Due Date</div>
      <div class="field">{{ invoice.dueDate  | date: "%Y-%m-%d" }}</div>
    </div>
  </div>
  <div class="lines">
    <table class="invoice-table">
      <thead>
        <tr>
         <th class="description">Description</th>
         <th class="unit-cost">Unit Cost</th>
         <th class="unit">Unit</th>
         <th class="subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {% for line in invoiceLines %}
          <tr>
            <td class="description">{{ line.description }}</td>
            <td class="unit-cost">{{ line.unitCost }}</td>
            <td class="unit">{{ line.unit }}</td>
            <td class="subtotal">{{ line.subtotal | round: 2 }}</td>
          </tr>
        {% endfor %}
      </tbody>
      <tfoot>
        <tr>
          <td class="description"></td>
          <td class="unit-cost"></td>
          <td class="unit">Total</td>
          <td class="subtotal">{{ invoice.totalAmount | round: 2 }}</td>
        <tr>
      </tfoot>
    </table>
  </div>
  <div class="footer">
    <div class="note">This is a system generated invoice. No signature is required.</div>
  </div>
</div>`,oe=`
.invoice-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  color: black;
  width: 100%;
}

.invoice-container .header {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.2rem;
}

.invoice-container .header .sender,
.invoice-container .header .recipient {
  padding: 0.5rem;
  width: 50%;
}

.invoice-container .header .name {
  font-weight: 900;
}

.invoice-container .header .address {
  font-size: 0.8rem;
}

.invoice-container .metadata {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
}

.invoice-container .metadata .line {
  display: flex;
  align-items: center;
  width: 250px;
}

.invoice-container .metadata .label {
  padding: 0 0.5rem;
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .metadata .field {
  padding: 0 0.5rem;
}

.invoice-container .lines {
  padding: 1rem;
  width: 100%;
  min-height: 500px;
}

.invoice-container .lines .invoice-table {
  width: 100%;
  border-collapse: collapse;
}

.invoice-container .lines thead .description {
  padding: 0.5rem 0;
  width: 40%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .lines thead .unit-cost,
.invoice-container .lines thead .unit,
.invoice-container .lines thead .subtotal {
  padding: 0.5rem 0;
  width: 20%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .lines tbody td {
  padding: 0.5rem 0;
}

.invoice-container .lines tbody tr:last-child td {
  padding-bottom: 1rem;
}

.invoice-container .lines tfoot td {
  padding: 0.5rem 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.invoice-container .lines tfoot .unit {
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .lines tfoot .subtotal {
  font-weight: 900;
}

.invoice-container .footer {
  margin: 0 auto;
}

.invoice-container .footer .note {
  font-weight: 600;
}`,qe=`
{
  "billingContact": {
    "name": "Company ABC",
    "addressLine1": "123 City St",
    "city": "Singapore",
    "postcode": "123456",
    "country": "Singapore"
  },
  "invoiceNumberSequence": {
    "prefix": "INV",
    "suffix": "ABC"
  },
  "invoice": {
    "invoiceNumber": "1",
    "invoiceDate": "2023-01-01",
    "dueDate": "2023-01-31",
    "totalAmount": 2148.66
  },
  "invoiceLines": [
    {
      "description": "Understand requirements",
      "unitCost": 75,
      "unit": 4.2,
      "subtotal": 315
    },
    {
      "description": "Implement website",
      "unitCost": 85,
      "unit": 19.7,
      "subtotal": 1674.5
    },
    {
      "description": "Sales Tax (8%)",
      "subtotal": 159.16
    }
  ]
}`,He=`
<div class="invoice-container">
  <div class="header">
    <div class="recipient">
      <div class="name">Company ABC</div>
      <div class="address">123 City St</div>
      <div class="address"></div>
      <div class="address"></div>
      <div class="address">Singapore</div>
      <div class="address"></div>
      <div class="address">Singapore</div>
    </div>
  </div>
  <div class="metadata">
    <div class="line">
      <div class="label">Invoice No.</div>
      <div class="field">INV-000001-ABC</div>
    </div>
    <div class="line">
      <div class="label">Invoice Date</div>
      <div class="field">2023-01-01</div>
    </div>
    <div class="line">
      <div class="label">Due Date</div>
      <div class="field">2023-01-31</div>
    </div>
  </div>
  <div class="lines">
    <table class="invoice-table">
      <thead>
        <tr>
         <th class="description">Description</th>
         <th class="unit-cost">Unit Cost</th>
         <th class="unit">Unit</th>
         <th class="subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="description">Understand requirements</td>
          <td class="unit-cost">75</td>
          <td class="unit">4.2</td>
          <td class="subtotal">315</td>
        </tr>
        <tr>
          <td class="description">Implement website</td>
          <td class="unit-cost">85</td>
          <td class="unit">19.7</td>
          <td class="subtotal">1674.5</td>
        </tr>
        <tr>
          <td class="description">Sales Tax (8%)</td>
          <td class="unit-cost"></td>
          <td class="unit"></td>
          <td class="subtotal">159.16</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="description"></td>
          <td class="unit-cost"></td>
          <td class="unit">Total</td>
          <td class="subtotal">2148.66</td>
        <tr>
      </tfoot>
    </table>
  </div>
  <div class="footer">
    <div class="note">This is a system generated invoice. No signature is required.</div>
  </div>
</div>`,Oe={__name:"HowToCustomTemplate",setup(h){const A=[{name:"Markup"},{name:"Styles"},{name:"Sample Data"},{name:"PDF Preview"}];return le(()=>{window.scrollTo(0,0)}),(s,u)=>($(),T("div",ze,[Me,U(ke,{tabs:A},{"tab-content.0":M(()=>[U(V,{code:je,language:"html"})]),"tab-content.1":M(()=>[U(V,{code:oe,language:"css"})]),"tab-content.2":M(()=>[U(V,{code:qe,language:"json"})]),"tab-content.3":M(()=>[k("div",Pe,[($(),be(ye("style"),null,{default:M(()=>[X(K(oe))]),_:1})),k("div",{innerHTML:He})])]),_:1})]))}},Ue=J(Oe,[["__scopeId","data-v-856d1743"]]);export{Ue as default};

var q=Object.defineProperty;var T=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>T(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const G=()=>{const e=new Set;return{subscribe:r=>e.add(r),notify:()=>e.forEach(r=>r())}},H=(e,t)=>{const{subscribe:s,notify:r}=G();let o={...e};const a=u=>{o={...o,...u},r()},l=()=>({...o}),d=Object.fromEntries(Object.entries(t).map(([u,w])=>[u,(...C)=>a(w(l(),...C))]));return{getState:l,setState:a,subscribe:s,actions:d}},W=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:a=>t.setItem(e,JSON.stringify(a)),reset:()=>t.removeItem(e)});function n(e,t,...s){return{type:e,props:t,children:s.flat(1/0).filter(r=>r===0||!!r)}}const c=new Map,v=[];function J(e){v.forEach(t=>{e.addEventListener(t,K)})}function j(e,t,s){v.includes(t)||v.push(t);const r=c.get(e)||[];r.push({eventType:t,handler:s}),c.set(e,r)}function V(e,t,s){if(c.has(e)){const o=c.get(e).filter(a=>!(a.handler===s&&a.eventType===t));c.set(e,o),o.length===0&&c.delete(e)}}function K(e){if(!c.has(e.target))return;c.get(e.target).filter(({eventType:r})=>r===e.type).forEach(({handler:r})=>r(e))}function m(e){if(e===null||typeof e=="boolean"||e===void 0)return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(Array.isArray(e)){var t=document.createDocumentFragment();return console.log(t),e.map(s=>{const r=m(s);r&&t.appendChild(r)}),t}if(typeof e=="object"){const s=document.createElement(e.type);return Y(s,e.props),e.children&&e.children.forEach(r=>{const o=m(r);s.appendChild(o)}),s}if(typeof e.type=="function")throw new Error}function Y(e,t){Object.entries(t||{}).filter(([,s])=>s).forEach(([s,r])=>{if(s==="className")e.setAttribute("class",r);else if(s.startsWith("on")){const o=s.substring(2).toLowerCase();j(e,o,r)}else e.setAttribute(s,r)})}function g(e){if(e===null||typeof e=="boolean"||e===void 0)return"";if(typeof e=="string"||typeof e=="number")return String(e);if(typeof e.type=="function"){const t=e.type({...e.props,children:e.children});return g(t)}return Array.isArray(e)?e.flatMap(g).filter(Boolean):{...e,children:e.children.flatMap(g).filter(Boolean)}}function M(e,t,s,r=0){const o=e.childNodes[r];if(!t&&s){e.removeChild(o);return}if(t&&!s){e.appendChild(m(t));return}if(typeof t=="string"&&typeof s=="string"){if(t===s)return;e.replaceChild(m(t),o);return}if(t.type!==s.type){e.replaceChild(m(t),o);return}z(o,t.props||{},s.props||{});const a=Math.max(t.children.length,s.children.length);for(let l=0;l<a;l++)M(e.childNodes[r],t.children[l],s.children[l],l)}function z(e,t,s){Object.keys(s).forEach(r=>{r.startsWith("on")&&typeof s[r]=="function"&&V(e,r.substring(2).toLowerCase(),s[r])}),Object.entries(t).forEach(([r,o])=>{r==="className"?e.setAttribute("class",o):r.startsWith("on")&&typeof o=="function"?j(e,r.slice(2).toLowerCase(),o):e.setAttribute(r,o)})}let I=null;function Q(e,t){const s=g(e);t.hasChildNodes()?M(t,s,I):t.appendChild(m(s)),I=s,J(t)}const h=W("user"),R=1e3,p=R*60,X=p*60,i=H({currentUser:h.get(),loggedIn:!!h.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*p,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*p,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*p,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*p,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*X,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return h.reset(),{...e,currentUser:null,loggedIn:!1}}}),Z=1e3,L=Z*60,P=L*60,_=P*24,ee=e=>{const t=Date.now()-e;return t<L?"방금 전":t<P?`${Math.floor(t/L)}분 전`:t<_?`${Math.floor(t/P)}시간 전`:new Date(e).toLocaleString()},te=({id:e,author:t,time:s,content:r,likeUsers:o})=>{const{loggedIn:a,currentUser:l,posts:d}=i.getState(),u=o.includes(l==null?void 0:l.username),w=()=>{if(!a){alert("로그인 후 이용해주세요");return}const $=o.includes(l.username)?o.filter(f=>f!==l.username):[...o,l.username],B=d.map(f=>f.id===e?{...f,likeUsers:$}:f);i.setState({posts:B})};return n("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},ee(s)))),n("p",null,r),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{onClick:w,className:`like-button cursor-pointer${u?" text-blue-500":""}`},"좋아요 ",o.length),n("span",null,"댓글"),n("span",null,"공유")))},ne=()=>n("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",onClick:()=>{const t=document.getElementById("post-content").value,{currentUser:s,posts:r}=i.getState(),o={id:r.length+1,author:s.username,time:Date.now(),content:t,likeUsers:[]};i.setState({posts:[...r,o]})},className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시")),U=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),k=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},se="/front_5th_chapter1-2/",O=e=>e.replace(se,"/"),E=e=>{const t=window.location.hash?window.location.hash.slice(1)||"/":window.location.pathname;return console.log(O(t)),console.log(window.location.pathname),O(t)===e?"text-blue-600 font-bold":"text-gray-600"};function N({onClick:e,children:t,...s}){return n("a",{onClick:o=>{o.preventDefault(),e==null||e(),b.get().push(o.target.href.replace(window.location.origin,""))},...s},t)}const F=()=>{const{loggedIn:e}=i.getState(),{logout:t}=i.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(N,{href:"/",className:E("/")},"홈")),!e&&n("li",null,n(N,{href:"/login",className:E("/login")},"로그인")),e&&n("li",null,n(N,{href:"/profile",className:E("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:s=>{s.preventDefault(),t()}},"로그아웃"))))},ie=()=>{const{posts:e,loggedIn:t}=i.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(U,null),n(F,null),n("main",{className:"p-4"},t&&n(ne,null),n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((s,r)=>r.time-s.time).map(s=>n(te,{...s,activationLike:!1})))),n(k,null)))};function re(e){const t={username:e,email:"",bio:""};i.setState({currentUser:t,loggedIn:!0}),h.set(t)}const ce=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const s=document.getElementById("username").value;re(s)}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),oe=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ae(e){const t={...i.getState().currentUser,...e};i.setState({currentUser:t}),h.set(t),alert("프로필이 업데이트되었습니다.")}const ue=()=>{const{loggedIn:e,currentUser:t}=i.getState(),{username:s="",email:r="",bio:o=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(U,null),n(F,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:l=>{l.preventDefault();const d=new FormData(l.target),u=Object.fromEntries(d);ae(u)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:s,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},o)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(k,null)))},y=class y extends Error{constructor(){super(y.MESSAGE)}};S(y,"MESSAGE","ForbiddenError");let A=y;const x=class x extends Error{constructor(){super(x.MESSAGE)}};S(x,"MESSAGE","UnauthorizedError");let D=x;function me(){const e=b.get().getTarget()??oe,t=document.querySelector("#root");try{Q(n(e,null),t)}catch(s){if(s instanceof A){b.get().push("/");return}if(s instanceof D){b.get().push("/login");return}console.error(s)}}export{A as F,ie as H,ce as L,ue as P,D as U,me as a,n as b,G as c,i as g,b as r};

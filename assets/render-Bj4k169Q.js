var q=Object.defineProperty;var B=(e,t,s)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var S=(e,t,s)=>B(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const T=()=>{const e=new Set;return{subscribe:r=>e.add(r),notify:()=>e.forEach(r=>r())}},G=(e,t)=>{const{subscribe:s,notify:r}=T();let a={...e};const o=u=>{a={...a,...u},r()},l=()=>({...a}),d=Object.fromEntries(Object.entries(t).map(([u,w])=>[u,(...C)=>o(w(l(),...C))]));return{getState:l,setState:o,subscribe:s,actions:d}},H=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:o=>t.setItem(e,JSON.stringify(o)),reset:()=>t.removeItem(e)});function n(e,t,...s){return{type:e,props:t,children:s.flat(1/0).filter(r=>r===0||!!r)}}const c=new Map,v=[];function W(e){v.forEach(t=>{e.addEventListener(t,V)})}function O(e,t,s){v.includes(t)||v.push(t);const r=c.get(e)||[];r.push({eventType:t,handler:s}),c.set(e,r)}function J(e,t,s){if(c.has(e)){const a=c.get(e).filter(o=>!(o.handler===s&&o.eventType===t));c.set(e,a),a.length===0&&c.delete(e)}}function V(e){if(!c.has(e.target))return;c.get(e.target).filter(({eventType:r})=>r===e.type).forEach(({handler:r})=>r(e))}function m(e){if(e===null||typeof e=="boolean"||e===void 0)return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(Array.isArray(e)){var t=document.createDocumentFragment();return console.log(t),e.map(s=>{const r=m(s);r&&t.appendChild(r)}),t}if(typeof e=="object"){const s=document.createElement(e.type);return K(s,e.props),e.children&&e.children.forEach(r=>{const a=m(r);s.appendChild(a)}),s}if(typeof e.type=="function")throw new Error}function K(e,t){Object.entries(t||{}).filter(([,s])=>s).forEach(([s,r])=>{if(s==="className")e.setAttribute("class",r);else if(s.startsWith("on")){const a=s.substring(2).toLowerCase();O(e,a,r)}else e.setAttribute(s,r)})}function g(e){if(e===null||typeof e=="boolean"||e===void 0)return"";if(typeof e=="string"||typeof e=="number")return String(e);if(typeof e.type=="function"){const t=e.type({...e.props,children:e.children});return g(t)}return Array.isArray(e)?e.flatMap(g).filter(Boolean):{...e,children:e.children.flatMap(g).filter(Boolean)}}function j(e,t,s,r=0){const a=e.childNodes[r];if(!t&&s){e.removeChild(a);return}if(t&&!s){e.appendChild(m(t));return}if(typeof t=="string"&&typeof s=="string"){if(t===s)return;e.replaceChild(m(t),a);return}if(t.type!==s.type){e.replaceChild(m(t),a);return}Y(a,t.props||{},s.props||{});const o=Math.max(t.children.length,s.children.length);for(let l=0;l<o;l++)j(e.childNodes[r],t.children[l],s.children[l],l)}function Y(e,t,s){Object.keys(s).forEach(r=>{r.startsWith("on")&&typeof s[r]=="function"&&J(e,r.substring(2).toLowerCase(),s[r])}),Object.entries(t).forEach(([r,a])=>{r==="className"?e.setAttribute("class",a):r.startsWith("on")&&typeof a=="function"?O(e,r.slice(2).toLowerCase(),a):e.setAttribute(r,a)})}let I=null;function z(e,t){const s=g(e);t.hasChildNodes()?j(t,s,I):t.appendChild(m(s)),I=s,W(t)}const h=H("user"),Q=1e3,p=Q*60,R=p*60,i=G({currentUser:h.get(),loggedIn:!!h.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*p,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*p,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*p,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*p,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*R,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return h.reset(),{...e,currentUser:null,loggedIn:!1}}}),X=1e3,L=X*60,P=L*60,Z=P*24,_=e=>{const t=Date.now()-e;return t<L?"방금 전":t<P?`${Math.floor(t/L)}분 전`:t<Z?`${Math.floor(t/P)}시간 전`:new Date(e).toLocaleString()},ee=({id:e,author:t,time:s,content:r,likeUsers:a})=>{const{loggedIn:o,currentUser:l,posts:d}=i.getState(),u=a.includes(l==null?void 0:l.username),w=()=>{if(!o){alert("로그인 후 이용해주세요");return}const F=a.includes(l.username)?a.filter(f=>f!==l.username):[...a,l.username],$=d.map(f=>f.id===e?{...f,likeUsers:F}:f);i.setState({posts:$})};return n("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},_(s)))),n("p",null,r),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{onClick:w,className:`like-button cursor-pointer${u?" text-blue-500":""}`},"좋아요 ",a.length),n("span",null,"댓글"),n("span",null,"공유")))},te=()=>n("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",onClick:()=>{const t=document.getElementById("post-content").value,{currentUser:s,posts:r}=i.getState(),a={id:r.length+1,author:s.username,time:Date.now(),content:t,likeUsers:[]};i.setState({posts:[...r,a]})},className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시")),M=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),U=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},E=e=>(window.location.hash?window.location.hash.slice(1)||"/":"/front_5th_chapter1-2")===e?"text-blue-600 font-bold":"text-gray-600";function N({onClick:e,children:t,...s}){return n("a",{onClick:a=>{a.preventDefault(),e==null||e(),b.get().push(a.target.href.replace(window.location.origin,""))},...s},t)}const k=()=>{const{loggedIn:e}=i.getState(),{logout:t}=i.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(N,{href:"/",className:E("/")},"홈")),!e&&n("li",null,n(N,{href:"/login",className:E("/login")},"로그인")),e&&n("li",null,n(N,{href:"/profile",className:E("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:s=>{s.preventDefault(),t()}},"로그아웃"))))},oe=()=>{const{posts:e,loggedIn:t}=i.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(M,null),n(k,null),n("main",{className:"p-4"},t&&n(te,null),n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((s,r)=>r.time-s.time).map(s=>n(ee,{...s,activationLike:!1})))),n(U,null)))};function ne(e){const t={username:e,email:"",bio:""};i.setState({currentUser:t,loggedIn:!0}),h.set(t)}const le=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const s=document.getElementById("username").value;ne(s)}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),se=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function re(e){const t={...i.getState().currentUser,...e};i.setState({currentUser:t}),h.set(t),alert("프로필이 업데이트되었습니다.")}const ie=()=>{const{loggedIn:e,currentUser:t}=i.getState(),{username:s="",email:r="",bio:a=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(M,null),n(k,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:l=>{l.preventDefault();const d=new FormData(l.target),u=Object.fromEntries(d);re(u)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:s,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},a)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(U,null)))},y=class y extends Error{constructor(){super(y.MESSAGE)}};S(y,"MESSAGE","ForbiddenError");let A=y;const x=class x extends Error{constructor(){super(x.MESSAGE)}};S(x,"MESSAGE","UnauthorizedError");let D=x;function ce(){const e=b.get().getTarget()??se,t=document.querySelector("#root");try{z(n(e,null),t)}catch(s){if(s instanceof A){b.get().push("/");return}if(s instanceof D){b.get().push("/login");return}console.error(s)}}export{A as F,oe as H,le as L,ie as P,D as U,ce as a,n as b,T as c,i as g,b as r};

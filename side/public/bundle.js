(()=>{"use strict";class e{constructor(e,t,s,n,c){return""==s&&(s=void 0),""==s&&(s=void 0),(e=document.createElement(t)).setAttribute(s,n),e.removeAttribute(void 0),c.appendChild(e),e}}class t{constructor(e,t){new e("active","div","class","active",t)}}class s{constructor(e,t){for(let s=0;s<3;s++){const n=['<i class="fa-solid fa-desktop"></i>','<i class="fa-solid fa-tablet-screen-button"></i>','<i class="fa-solid fa-mobile-screen-button"></i>'];new e("device","button","class","device basics",t).innerHTML=n[s]}}}class n{constructor(e,n){const c=new e("size","div","class","size",n);new s(e,c),new t(e,c),c.addEventListener("click",this.event,!1)}event(e){const t=e.target;let s=t.getBoundingClientRect().left,n=t.parentElement.getBoundingClientRect().width,c=t.parentElement.getBoundingClientRect().width/2,i=window.innerWidth/2-(n+c);document.querySelector(".active").style.left=s-n-i+"px"}}class c{constructor(e,t){const s=new e("media","section","class","media basics",t);new n(e,s)}}new class{constructor(){const t=new e("app","div","id","app",document.body);new c(e,t)}}})();
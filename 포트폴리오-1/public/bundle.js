(()=>{"use strict";class t{constructor(){}basket(t,e,s,r,a,c,i,o,n,l){let h=[{name:t,element:e},{parent:s},{number:r},{type:a,value:c},{text:i},{boolean:o,event:n,func:l}];this.modify(h)}modify(t){t[0].name="this."+t[0].name;for(let e=0;e<t[2].number;e++)this.create(t),this.attrs(t),this.innerText(t),this.event(t),this.append(t)}create(t){t[0].name=document.createElement(t[0].element)}attrs(t){if(""==!t[3].type[0])for(let e=0;e<t[3].type.length;e++)t[0].name.setAttribute(t[3].type[e],t[3].value[e])}innerText(t){t[0].name.innerHTML=t[4].text}event(t){1==t[5].boolean&&t[0].name.addEventListener(t[5].event,t[5].func)}append(t){t[1].parent.appendChild(t[0].name)}appEvent(t){console.log("boom!")}}class e{constructor(t,e){t.basket("header","header",e,1,[""],[""],"")}}class s{constructor(t){this.nav=document.querySelector("nav"),t.basket("bar","span",this.nav,1,["class"],["bar"],'<i class="bi bi-list"></i>',!0,"click",this.barEvent)}barEvent(){this.aside=document.querySelector("aside"),this.aside.classList.add("show"),this.library=document.querySelector(".library"),this.library.classList.add("active"),this.touch=document.querySelector(".touch"),this.touch.classList.add("in")}}class r{constructor(t){this.header=document.querySelector("header"),t.basket("nav","nav",this.header,1,[""],[""],""),this.bar=new s(t)}}class a{constructor(t,e){t.basket("gap","section",e,1,["class"],["gap"],"")}}class c{constructor(t){this.gallery=document.querySelector(".gallery"),t.basket("picture","div",this.gallery,1,["class"],["picture"],"사진")}}class i{constructor(t){this.top=document.querySelector(".top"),t.basket("gallery","div",this.top,1,["class"],["gallery"],""),this.picture=new c(t)}}class o{constructor(t){this.board=document.querySelector(".board"),t.basket("list","li",this.board,4,["class"],["list"],"")}}class n{constructor(t){this.introduce=document.querySelector(".introduce"),t.basket("board","ul",this.introduce,1,["class"],["board"],""),this.list=new o(t)}}class l{constructor(t){this.top=document.querySelector(".top"),t.basket("introduce","section",this.top,1,["class"],["introduce"],""),this.board=new n(t)}}class h{constructor(t){this.main=document.querySelector("main"),t.basket("top","section",this.main,1,["class"],["top"],""),this.gallery=new i(t),this.introduce=new l(t)}}class u{constructor(t,e){t.basket("main","main",e,1,[""],[""],""),this.top=new h(t)}}class d{constructor(t){this.library=document.querySelector(".library"),t.basket("copyright","span",this.library,1,["class"],["copyright"],"© SeonGu .")}}class b{constructor(t){this.library=document.querySelector(".library"),t.basket("backward","span",this.library,1,["class"],["backward"],'<i class="bi bi-arrow-left"></i>',!0,"click",this.backwardEvent)}backwardEvent(){this.aside=document.querySelector("aside"),this.aside.classList.remove("show"),this.touch=document.querySelector(".touch"),this.touch.classList.remove("in")}}class y{constructor(t){this.aside=document.querySelector("aside"),t.basket("touch","div",this.aside,1,["class"],["touch"],"",!0,"click",this.touchEvent)}touchEvent(){this.aside=document.querySelector("aside"),this.aside.classList.remove("show"),this.touch=document.querySelector(".touch"),this.touch.classList.remove("in")}}class m{constructor(t){this.word=document.querySelectorAll(".word");for(let e=0;e<this.word.length;e++)t.basket("letter","a",this.word[e],1,["class"],["letter"],`content ${1+e}`)}}class p{constructor(t){this.book=document.querySelector(".book"),t.basket("word","li",this.book,3,["class"],["word"],""),this.letter=new m(t)}}class w{constructor(t){this.library=document.querySelector(".library"),t.basket("book","div",this.library,1,["class"],["book"],""),this.word=new p(t)}}class k{constructor(t){this.aside=document.querySelector("aside"),t.basket("library","ul",this.aside,1,["class"],["library"],"",!0,"transitionend",this.libraryEvent),this.backward=new b(t),this.touch=new y(t),this.book=new w(t)}libraryEvent(){this.library=document.querySelector(".library"),this.library.classList.remove("active")}}class v{constructor(t,e){t.basket("aside","aside",e,1,[""],[""],""),this.library=new k(t),this.copyright=new d(t)}}new class{constructor(){this.creator=new t,this.creator.basket("app","div",document.body,1,["id"],["app"],"");const s=document.querySelector("#app");this.header=new e(this.creator,s),this.nav=new r(this.creator),this.gap=new a(this.creator,s),this.main=new u(this.creator,s),this.aside=new v(this.creator,s)}}})();
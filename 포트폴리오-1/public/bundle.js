(()=>{"use strict";class e{constructor(){}basket(e,t,s,a,r,n,i,c,o,h){let l=[{name:e,element:t},{parent:s},{number:a},{type:r,value:n},{text:i},{boolean:c,event:o,func:h}];this.modify(l)}modify(e){for(let t=0;t<e[2].number;t++)this.create(e),this.attrs(e),this.event(e),this.append(e),this.innerText(e)}create(e){e[0].name=document.createElement(e[0].element)}attrs(e){if(""==!e[3].type[0])for(let t=0;t<e[3].type.length;t++)e[0].name.setAttribute(e[3].type[t],e[3].value[t])}event(e){1==e[5].boolean&&e[0].name.addEventListener(e[5].event,e[5].func,!1)}append(e){e[1].parent.appendChild(e[0].name),this.name=e[0].name}innerText(e){e[0].name.innerHTML=e[4].text}}class t{constructor(e,t){e.basket("aside","aside",t,1,[""],[""],"")}}class s{constructor(e){e.basket("logo","div",e.name,1,["class"],["logo"],"Portfolio")}}class a{constructor(e,t){e.basket("menu","div",t,1,["class"],["menu"],'<i class="fas fa-solid fa-bars pointer"></i>'),this.logo=new s(e)}}class r{constructor(e,t){e.basket("screen","div",t,1,["class"],["screen"],'<i class="bi bi-arrow-bar-left pointer"></i>')}}class n{constructor(e,t){e.basket("header","header",t,1,[""],[""],""),this.header=document.querySelector("header"),this.menu=new a(e,this.header),this.screen=new r(e,this.header)}}class i{constructor(e,t){e.basket("wrap","div",t,1,["class"],["wrap"],"")}}new class{constructor(){this.creator=new e,this.creator.basket("app","div",document.body,1,["id"],["app"],""),this.app=this.creator.name,this.aside=new t(this.creator,this.app),this.header=new n(this.creator,this.app),this.wrap=new i(this.creator,this.app)}}})();
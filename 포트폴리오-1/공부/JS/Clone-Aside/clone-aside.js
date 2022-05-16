'use strict';

import Aside from "../Aside/aside.js";
import Nav from "../Header/nav.js";

export default class Clone_aside {
    constructor(Creator, wrap) {
        // create
        this.clone_aside = new Creator('clone_aside', 'div', 'class', 'clone-aside', '', 1, wrap, false, '', '');
    
        // component
        this.nav = new Nav(Creator, this.clone_aside.name);
        this.aside = new Aside(Creator, this.clone_aside.name);
        
        this.aside_ = document.querySelectorAll('aside');

        this.icons = ['<i class="bi bi-house-door touch"></i><div class="words touch"></div>', '<i class="bi bi-collection touch"></i><div class="words touch"></div>'];
        this.icons_ = ['<i class="bi bi-house-door-fill"></i><div class="words touch"></div>', '<i class="bi bi-collection-fill"></i><div class="words touch"></div>'];
        this.text = ['홈', '프로젝트'];
        
        for(let i = 0; i < this.aside_.length; i++) {
            this.aside_[i].firstChild.childNodes.forEach((books, index) => {
                books.innerHTML = this.icons[index];
                books.childNodes[1].innerText = this.text[index];
            });
        }

        this.books = document.querySelectorAll('.book');

        for(let i = 0; i < this.aside_[0].firstChild.childNodes.length; i++) {
            this.icons = this.aside_[i].firstChild.firstChild.firstChild;

            this.icons.classList.replace(this.icons.classList[1], this.icons.classList[1] + '-fill');
        }
    }
}


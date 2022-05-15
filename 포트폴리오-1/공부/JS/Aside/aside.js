'use strict';

import Library from './library.js';

export default class Aside {
    constructor(Creator, wrap) {
        // create
        this.aside = new Creator('aside', 'aside', '', '', '', 1, wrap, true, 'click', this.asideEvent);
    
        // component
        this.library = new Library(Creator, this.aside.name);
    
        this.aside.name.firstChild.firstChild.classList.add('emphasis');

        this.aside_ = document.querySelectorAll('aside');
    }

    asideEvent(e) {
        this.aside = document.querySelectorAll('aside');
       
        this.icons = ['<i class="bi bi-house-door touch"></i><div class="words touch"></div>', '<i class="bi bi-collection touch"></i><div class="words touch"></div>'];

        this.aside.forEach(aside => {
            aside.firstChild.childNodes.forEach((books, index) => {
                books.index = index;
            })
        });

        this.books = document.querySelectorAll('.book');

        for(let i = 0; i < this.books.length; i++) {
            this.books[i].classList.remove('emphasis');
        }

        for(let i = 0; i < this.aside[0].firstChild.childNodes.length; i++) {
            this.aside[i].firstChild.childNodes[e.target.index].classList.add('emphasis');
        }
    }
}


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

        this.aside.forEach(aside => {
            aside.firstChild.childNodes.forEach((books, index) => {
                books.index = index;
            });
        });

        this.books = document.querySelectorAll('.book');
        this.line = document.querySelectorAll('.line');

        if(e.target.classList.contains('book')) {
            for(let i = 0; i < this.books.length; i++) {
                this.books[i].classList.remove('emphasis');
    
                this.icons  = this.books[i].firstChild.classList;

                this.new_icons = this.icons[1].replace('-fill', '');

                this.icons.replace(this.icons[1], this.new_icons);
            }
    
            for(let i = 0; i < this.aside[0].firstChild.childNodes.length; i++) {
                this.book = this.aside[i].firstChild.childNodes[e.target.index];
    
                this.book.classList.add('emphasis');
                
                this.book.firstChild.classList.replace(this.book.firstChild.classList[1], this.book.firstChild.classList[1] + '-fill');
            }

            e.target == this.books[0] ? this.line[1].scrollIntoView(true) : '';
            e.target == this.books[1] ? this.line[3].scrollIntoView(true) : '';
        }
    }
}


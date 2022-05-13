'use strict';

export default class BG {
    constructor(Creator, wrap) {
        // create
        this.bg = new Creator('bg', 'div', 'class', 'bg gone', '', 1, wrap, true, 'click', this.bgEvent);
    }

    bgEvent(e) {
        this.target = e.target;

        this.aside = document.querySelector('aside');
        this.clone_aside = document.querySelector('.clone-aside');
        this.library = document.querySelector('.library');
        this.books = document.querySelectorAll('.book');
        this.icons = document.querySelectorAll('.book > i');
        this.words = document.querySelectorAll('.words');

        if(this.clone_aside.classList.contains('show')) {
            this.clone_aside.classList.remove('show');

            this.target.classList.add('gone');

            this.aside.classList.remove('small');

            this.library.classList.remove('remove-pd');

            this.books.forEach(books => {
                books.classList.remove('change');
            })

            this.icons.forEach(icons => {
                icons.classList.remove('line-up');
            })

            this.words.forEach(words => {
                words.classList.remove('line-up');
            })
        }
    }
}


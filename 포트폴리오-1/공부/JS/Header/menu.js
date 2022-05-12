'use strict';

export default class Menu {
    constructor(Creator, nav) {
        // create
        this.menu = new Creator('menu', 'div', 'class', 'menu', '<i class="bi bi-list pointer"></i>', 1, nav, true, 'click', this.menuEvent);
    }

    menuEvent(e) {
        this.target = e.target;

        this.aside = document.querySelector('aside');

        if(this.target.classList.contains('bi-list')) {
            !this.aside.classList.contains('small') ? this.aside.classList.add('small') : this.aside.classList.remove('small');
        }

        this.library = document.querySelector('.library');
        this.books = document.querySelectorAll('.book');
        this.icons = document.querySelectorAll('.book > i');
        this.words = document.querySelectorAll('.words');

        if(this.aside.classList.contains('small')) {
            this.library.classList.add('remove-pd');

            this.books.forEach(books => {
                books.classList.add('change');
            })

            this.icons.forEach(icons => {
                icons.classList.add('line-up');
            })

            this.words.forEach(words => {
                words.classList.add('line-up');
            })
        }else {
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

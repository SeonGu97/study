'use strict';

export default class Menu {
    constructor(Creator, nav) {
        // create
        this.menu = new Creator('menu', 'div', 'class', 'menu', '<i class="bi bi-list pointer"></i>', 1, nav, true, 'click', this.menuEvent);
    
        // evens
        this.menu.name.firstChild.addEventListener('mousedown', this.menuEvent_2, false);
        this.menu.name.firstChild.addEventListener('mouseup', this.menuEvent_3, false);
        this.menu.name.firstChild.addEventListener('mouseleave', this.menuEvent_4, false);
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

        const _1300px = matchMedia("(max-width: 1300px)").matches;

        this.clone_aside = document.querySelector('.clone-aside');
        this.bg = document.querySelector('.bg');

        if(_1300px) {
            this.aside.classList.contains('small') ? this.clone_aside.classList.add('show') : this.clone_aside.classList.remove('show');

            this.clone_aside.classList.contains('show') ? this.bg.classList.remove('gone') : this.bg.classList.add('gone');
        }else {
            
        }
    }

    menuEvent_2(e) {
        this.target  = e.target.parentElement;

        this.target.classList.add('active');

        this.target.style.transition = 'box-shadow 0s';
    }

    menuEvent_3(e) {
        this.target  = e.target.parentElement;

        this.target.classList.remove('active');

        this.target.style.transition = 'box-shadow 1s';
    }

    menuEvent_4(e) {
        this.target  = e.target.parentElement;

        this.target.classList.remove('active');

        this.target.style.transition = 'box-shadow 1s';
    }
}

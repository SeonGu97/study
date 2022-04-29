'use strict';

export default class Menu {
    constructor(creator) {
        // create
        creator.basket('menu', 'div', creator.name, 1, ['class'], ['menu pointer'], '<i class="fas fa-light fa-bars"></i>', true, 'click', this.menuEvent);
    }

    menuEvent(e) {
        this.target = e.target;

        this.wrap = document.querySelector('.wrap');
        this.menu = document.querySelectorAll('.menu');
        this.aside = document.querySelector('aside');
        this.nav = document.querySelectorAll('nav');
        this.header = document.querySelector('header');
        this.display_stand_1 = document.querySelector('.display-stand-1');
        this.book_1 = document.querySelectorAll('.book-1');
        this.icons = document.querySelectorAll('.book-1 > i');
        this.word = document.querySelectorAll('.word');

        // media query size
        this._1349px = matchMedia('screen and (max-width: 1349px)').matches;
        this._1023px = matchMedia('screen and (max-width: 1023px)').matches;
        this._768px = matchMedia('screen and (max-width: 768px)').matches;
        this._700px = matchMedia('screen and (max-width: 700px)').matches;
        this._480px = matchMedia('screen and (max-width: 480px)').matches;
        
        this.menu.forEach(menu => {
            menu.classList.toggle('active');

            if(menu.classList.contains('active')) {
                this.aside.classList.add('show');
                this.wrap.classList.add('gap');
            }else {
                this.aside.classList.remove('show');
                this.wrap.classList.remove('gap');
            }
        });

        this._1023px ? this.menu.forEach(menu => {
            menu.classList.contains('active') ? this.aside.classList.add('static') : this.aside.classList.remove('static');
            menu.classList.contains('active') ? this.nav[1].classList.add('hide') : this.nav[1].classList.remove('hide');
            menu.classList.contains('active') ? this.header.classList.add('back') : '';
        }) : '';

        if(!this._1349px) {
            !this.aside.classList.contains('show') ?
            this.word.forEach(words => {
                words.classList.remove('line-up');
            }) :
            this.word.forEach(words => {
                words.classList.add('line-up');
            });

            !this.aside.classList.contains('show') ?
            this.book_1.forEach(books => {
                books.classList.remove('verticality');
            }) :
            this.book_1.forEach(books => {
                books.classList.add('verticality');
            });
        }else {
            this.aside.classList.contains('show') ? this.book_1.forEach(books => {
                books.classList.remove('verticality')
            }) : this.book_1.forEach(books => {
                books.classList.add('verticality')
            });

            this.aside.classList.contains('show') ? this.word.forEach(words => {
                words.classList.remove('line-up')
            }) : 
            this.word.forEach(words => {
                words.classList.add('line-up')
            });
        }

        if(this._700px) {
            !this.aside.classList.contains('show') ? this.book_1.forEach(books => {
                books.classList.add('hide-to');
            }) : 
            this.book_1.forEach(books => {
                books.classList.remove('hide-to');
            });

            !this.aside.classList.contains('show') ? this.icons.forEach(icons => {
                icons.classList.add('hide-to');
            }) : 
            this.icons.forEach(icons => {
                icons.classList.remove('hide-to');
            });

            !this.aside.classList.contains('show') ? this.word.forEach(words => {
                words.classList.add('hide-to');
            }) : 
            this.word.forEach(words => {
                words.classList.remove('hide-to');
            });
        }
    }
}
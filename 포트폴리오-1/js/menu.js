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

        // media query size
        this._1349px = matchMedia('screen and (max-width: 1349px)').matches;
        this._1023px = matchMedia('screen and (max-width: 1023px)').matches;
        this._768px = matchMedia('screen and (max-width: 768px)').matches;
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
            menu.classList.contains('active') ? this.header.classList.add('back') : this.header.classList.remove('back');
        }) : '';
    }
}
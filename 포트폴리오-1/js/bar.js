'use strict';

export default class Bar {
    constructor(creator) {
        // element
        this.nav = document.querySelector('nav');

        // create
        creator.basket('bar', 'span', this.nav, 1, ['class'], ['bar'], '<i class="bi bi-list"></i>', true, 'click', this.barEvent);
    }

    barEvent() {
        this.aside = document.querySelector('aside');
        this.aside.classList.add('show');

        this.library = document.querySelector('.library');
        this.library.classList.add('active');

        this.touch = document.querySelector('.touch');
        this.touch.classList.add('in');
    }
}
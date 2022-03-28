'use strict';

export default class Touch {
    constructor(creator) {
        // element
        this.aside = document.querySelector('aside');

        // create
        creator.basket('touch', 'div', this.aside, 1, ['class'], ['touch'], '', true, 'click', this.touchEvent);
    }

    touchEvent() {
        this.aside = document.querySelector('aside');
        this.aside.classList.remove('show');

        this.touch = document.querySelector('.touch');
        this.touch.style.display = 'none';
    }
}
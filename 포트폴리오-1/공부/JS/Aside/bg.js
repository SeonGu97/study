'use strict';

export default class BG {
    constructor(Creator, wrap) {
        // create
        this.bg = new Creator('bg', 'div', 'class', 'bg', '', 1, wrap, true, 'click', this.bgEvent);
    }

    bgEvent(e) {
        this.target = e.target;

        this.aside = document.querySelector('aside');

        this.aside.classList.add('small');

        this.target.classList.add('gone');
    }
}


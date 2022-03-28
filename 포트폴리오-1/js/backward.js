'use strict';

export default class Backward {
    constructor(creator) {
        // element
        this.library = document.querySelector('.library');

        // create
        creator.basket('backward', 'span', this.library, 1, ['class'], ['backward'], '<i class="bi bi-arrow-left"></i>', true, 'click', this.backwardEvent);
    }

    backwardEvent() {
        this.aside = document.querySelector('aside');
        this.aside.classList.remove('show');

        this.touch = document.querySelector('.touch');
        this.touch.classList.remove('in');
    }
}
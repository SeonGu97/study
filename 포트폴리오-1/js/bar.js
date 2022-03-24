'use strict';

export default class Bar {
    constructor(creator) {
        // element
        this.nav = document.querySelector('nav');

        // create bar
        creator.basket('bar', 'span', this.nav, 1, ['class'], ['bar'], '<i class="bi bi-list"></i>', true, 'click', this.barEvent);
    }

    barEvent() {
        console.log('bar');
    }
}
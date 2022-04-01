'use strict';

export default class Bubble {
    constructor(creator) {
        // element
        this.more = document.querySelector('.more');

        // create
        creator.basket('bubble', 'li', this.more, 3, ['class'], ['bubble'], '');
    }
}
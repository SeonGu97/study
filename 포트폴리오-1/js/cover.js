'use strict';

export default class Cover {
    constructor(creator) {
        // element
        this.item = document.querySelectorAll('.item');

        // create
        for (let i = 0; i < this.item.length; i++) {
            creator.basket('cover', 'div', this.item[i], 1, ['class'], ['cover'], '');
        }
    }
}
'use strict';

export default class Item {
    constructor(creator) {
        // element
        this.project = document.querySelector('.project');

        // create
        creator.basket('item', 'div', this.project, 6, ['class'], ['item'], '');
    }
}
'use strict';

export default class Item_review {
    constructor(Creator, item) {
        this.items = document.querySelectorAll('.item');

        for(let i = 0; i < this.items.length; i++) {
        // create
        this.item_review = new Creator('item_review', 'div', 'class', 'item-review', '', 1, this.items[i], false, '', '');
        }
    }
}

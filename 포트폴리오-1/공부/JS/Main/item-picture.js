'use strict';

export default class Item_picture {
    constructor(Creator, item) {
        this.items = document.querySelectorAll('.item');

        for(let i = 0; i < this.items.length; i++) {
            // create
            this.item_picture = new Creator('item_picture', 'div', 'class', 'item-picture', '', 1, this.items[i], false, '', '');
        }
    }
}

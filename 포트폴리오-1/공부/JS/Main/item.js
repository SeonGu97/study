'use strict';

import Item_picture from "./item-picture.js";
import Item_review from "./item-review.js";

export default class Item {
    constructor(Creator, project) {
        // create
        this.item = new Creator('item', 'div', 'class', 'item', '', 6, project, false, '', '');
    
        //  component
        this.item_picture = new Item_picture(Creator, this.item.name);
        this.item_review = new Item_review(Creator, this.item.name);
    }
}


'use strict';

import Roof from "./roof.js";
import Floor from "./floor.js";

export default class Item {
    constructor(creator) {
        // create
        creator.basket('item', 'div', creator.name, 6, ['class'], ['item'], '');

        // element
        this.item = document.querySelectorAll('.item');

        // component
        this.roof = new Roof(creator, this.item);
        this.floor = new Floor(creator, this.item);
    }
}
'use strict';

import Cover from "./cover.js";
import Subtitle from "./subtitle.js";

export default class Item {
    constructor(creator) {
        // element
        this.box = document.querySelectorAll('.box');

        // create
        for(let i = 0; i < this.box.length; i++) {
            creator.basket('item', 'div', this.box[i], 1, ['class'], ['item'], '');
        }

        // components
        this.cover = new Cover(creator);
        this.subtitle = new Subtitle(creator);
    }
}
'use strict';

import Item from "./item.js";

export default class Box {
    constructor(creator) {
        // element
        this.project = document.querySelector('.project');

        // create
        creator.basket('box', 'div', this.project, 6, ['class'], ['box'], '');

        // component
        this.item = new Item(creator);
    }
}
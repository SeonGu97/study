'use strict';

import Item from "./item.js";

export default class Project {
    constructor(creator) {
        // element
        this.middle = document.querySelector('.middle');

        // create
        creator.basket('project', 'div', this.middle, 1, ['class'], ['project'], '');
    
        // component
        this.item = new Item(creator);
    }
}
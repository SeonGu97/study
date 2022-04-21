'use strict';

import Item from "./item.js";

export default class Project {
    constructor(creator) {
        // create
        creator.basket('project', 'div', creator.name, 1, ['class'], ['project mg-b'], '');

        // component
        this.item = new Item(creator);
    }
}
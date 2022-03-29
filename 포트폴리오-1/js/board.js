'use strict';

import List from "./list.js";

export default class Board {
    constructor(creator) {
        // element
        this.introduce = document.querySelector('.introduce');

        // create
        creator.basket('board', 'ul', this.introduce, 1, ['class'], ['board'], '');

        // component
        this.list = new List(creator);
    }
}
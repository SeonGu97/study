'use strict';

import List from "./list.js";

export default class Board {
    constructor(creator, top) {
        // create
        creator.basket('board', 'ul', top, 1, ['class'], ['board'], '');

        // element
        this.board = creator.name;

        // component
        this.list = new List(creator, this.board);
    }
}
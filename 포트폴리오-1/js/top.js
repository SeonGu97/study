'use strict';

import Board from "./board.js";
import Gallery from "./gallery.js";
import Gap from "./gap.js";

export default class Top {
    constructor(creator, wrap) {
        // create
        creator.basket('top', 'section', wrap, 1, ['class'], ['top'], '');

        // element
        this.top = creator.name;

        // components
        this.gap = new Gap(creator, this.top);
        this.gallery = new Gallery(creator, this.top);
        this.board = new Board(creator, this.top);
    }
}
'use strict';

import Board from "./board.js";

export default class Introduce {
    constructor(creator) {
        // element
        this.top = document.querySelector('.top');

        // create
        creator.basket('introduce', 'section', this.top, 1, ['class'], ['introduce'], '');
    
        // component
        this.board = new Board(creator);
    }
}
'ues strict';

import Gallery from "./gallery.js";
import Board from "./board.js";

export default class Top {
    constructor(creator, main) {
        // create
        creator.basket('top', 'section', main, 1, ['class'], ['top mg-b'], '');

        // element
        this.top = document.querySelector('.top');

        // component
        this.gallery = new Gallery(creator, this.top);
        this.board = new Board(creator, this.top);
    }
}
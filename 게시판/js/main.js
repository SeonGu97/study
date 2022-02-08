'use strict';

import Board from "./board.js";

export default class Main {
    constructor(create) {
        // app
        this.app = document.querySelector('#app');

        // create main
        create.launcher('main', 'main', ['class'], ['main'], [''], this.app, 1);
    
        // component
        this.board = new Board(create);
    }
}
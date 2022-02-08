'use strict';

export default class Title {
    constructor(create) {
        // board
        this.board = document.querySelector('.board');

        // create title
        create.launcher('title', 'h1', ['class'], ['title'], [''], this.board, 1);
    }
}
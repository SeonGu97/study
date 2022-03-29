'use strict';

export default class List {
    constructor(creator) {
        // element
        this.board = document.querySelector('.board');

        // create
        creator.basket('list', 'li', this.board, 4, ['class'], ['list'], '');
    }
}
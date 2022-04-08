'use strict';

export default class Board {
    constructor(creator, top) {
        // create
        creator.basket('board', 'div', top, 1, ['class'], ['board pad'], '');
    }
}
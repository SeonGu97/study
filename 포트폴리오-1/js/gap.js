'use strict';

export default class Gap {
    constructor(creator, top) {
        // create
        creator.basket('gap', 'div', top, 1, ['class'], ['gap'], '');
    }
}
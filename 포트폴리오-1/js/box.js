'use strict';

export default class Box {
    constructor(creator, wrap) {
        // create
        creator.basket('box', 'div', wrap, 1, ['class'], ['box'], '');
    }
}
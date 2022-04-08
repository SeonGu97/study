'use strict';

export default class Bar {
    constructor(creator) {
        // create
        creator.basket('bar', 'span', creator.name, 3, ['class'], ['bar'], '');
    }
}
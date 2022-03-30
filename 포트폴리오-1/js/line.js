'use strict';

export default class Line {
    constructor(creator) {
        // element
        this.main = document.querySelector('main');

        // create
        creator.basket('line', 'div', this.main, 1, ['class'], ['line'], '');
    }
}
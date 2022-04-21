'use strict';

export default class Line {
    constructor(creator, main) {
        // create
        creator.basket('line', 'hr', main, 1, ['class'], ['line'], '');
    }
}
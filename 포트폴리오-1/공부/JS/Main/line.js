'use strict';

export default class Line {
    constructor(Creator, main) {
        // create
        this.line = new Creator('line', 'hr', 'class', 'line', '', 1, main, false, '', '');
    }
}

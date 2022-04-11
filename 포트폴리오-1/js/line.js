'use strict';

import Anchor from "./anchor.js";

export default class Line {
    constructor(creator) {
        // create
        creator.basket('line', 'div', creator.name, 1, ['class'], ['line'], '');

        // component
        this.anchor = new Anchor(creator);
    }
}
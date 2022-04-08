'use strict';

import Slide from "./slide.js";

export default class Line_1 {
    constructor(creator, aside) {
        // create
        creator.basket('line_1', 'div', aside, 1, ['class'], ['line_1'], '', true);

        // component
        this.slide = new Slide(creator);
    }
}
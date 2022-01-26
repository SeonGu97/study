'use strict'

import Add from "./add.js";

export default class Tool {
    constructor(CE, wrap) {
        CE.generator(
            'tool',
            'div',
            ['class'],
            ['tool'],
            [''],
            wrap,
            1
        );

        this.tool = document.querySelector('.tool');

        // components
        this.add = new Add(CE, this.tool);
    }
}
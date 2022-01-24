'use strict'

import Add from "./add.js";
import Remove from "./remove.js";
import Tool_btn from "./tool-btn.js";

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
        this.remove = new Remove(CE, this.tool);
        this.add = new Add(CE, this.tool);
        this.tool_btn = new Tool_btn(CE, this.tool);
    }
}
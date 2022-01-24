'use strict'

import Aside from "./aside.js";
import Tool from "./tool.js";

export default class Wrap {
    constructor(CE) {
        this.app = document.querySelector('#app');

        CE.generator(
            'wrap',
            'div',
            ['class'],
            ['wrap'],
            [''],
            this.app,
            1
        );

        this.wrap = document.querySelector('.wrap');

        // components
        this.aside = new Aside(CE, this.wrap);
        this.tool =  new Tool(CE, this.wrap);
    }
}
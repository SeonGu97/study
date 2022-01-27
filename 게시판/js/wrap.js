'use strict';

import Aside from "./aside.js";
import Tool from "./tool.js";

export default class Wrap {
    constructor(create) {
        // select app
        this.app = document.querySelector('#app');

        // create wrap
        create.launcher('wrap', 'div', ['class'], ['wrap'], [''], this.app, 1);

        // select wrap
        this.wrap = document.querySelector('.wrap');

        // components
        this.aside = new Aside(create, this.wrap);
        this.tool = new Tool(create, this.wrap);
    }
}
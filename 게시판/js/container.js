'use strict';

import Tool_box from "./tool-box.js";
import Tool_btn from "./tool-btn.js";

export default class Container {
    constructor(This) {
        This.Getter('container', 'div', 1, ['class'], ['container common'], [''], This.app);
        
        this.container = document.querySelector('.container');

        // components
        this.tool_btn = new Tool_btn(This, this.container);
        this.tool_box = new Tool_box(This, this.container);
    }
}
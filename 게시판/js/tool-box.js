'use strict';

import Tool_btn from "./tool-btn.js";
import Tool from "./tool.js";


export default class Tool_box {
    constructor(This) {
        this.aside = document.querySelector('aside')

        This.Getter('tool_box', 'div', 1, ['class'], ['tool-box'], [''], this.aside);
    
        // components
        this.tool = new Tool(This);
        this.tool_btn = new Tool_btn(This);
    }
}
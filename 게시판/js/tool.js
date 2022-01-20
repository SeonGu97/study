'use strict';

import Text_box from "./text-box.js";

export default class Tool {
    constructor(This) {
        this.tool_box = document.querySelector('.tool-box');

        This.Getter('tool', 'div', 1, ['class'], ['tool common'], [''], this.tool_box);

        this.text_box = new Text_box(This);
    }
}
'use strict';

import Text_box from "./text-box.js";

export default class Tool_box {
    constructor(This, container) {
        This.Getter('tool_box', 'div', 1, ['class'], ['tool-box'], [''], container);

        // component
        this.text_box = new Text_box(This);
    }
}
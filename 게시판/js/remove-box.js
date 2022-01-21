'use strict';

import Clone from "./clone.js";

export default class Remove_box {
    constructor(This) {
        this.tool = document.querySelector('.tool');

        This.Getter('remove_box', 'div', 1, ['class'], ['remove-box common'], [''], this.tool);
    
        // components
        this.clone = new Clone(This);
    }
}
'use strict';

import Book from "./book.js";

export default class Text_box {
    constructor(This) {
        this.tool_box = document.querySelector('.tool-box');

        This.Getter('text_box', 'div', 1, ['class'], ['text-box'], [''], this.tool_box);
    
        this.text_box = document.querySelector('.text-box');

        This.Getter('text', 'input', 1, ['class', 'type'], ['text', 'text'], [''], this.text_box);

        This.Getter('submit', 'button', 1, ['class'], ['submit'], ['<i class="fas fa-plus-square"></i>'], this.text_box);
    }
}
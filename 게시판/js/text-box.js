'use strict';

export default class Text_box {
    constructor(This) {
        this.tool = document.querySelector('.tool');

        This.Getter('text_box', 'div', 1, ['class'], ['text-box'], [''], this.tool);
    
        this.text_box = document.querySelector('.text-box');

        This.Getter('text', 'input', 1, ['class', 'maxlength'], ['text', '10'], [''], this.text_box);

        This.Getter('submit', 'button', 1, ['class'], ['submit pointer'], ['<i class="fas fa-plus"></i>'], this.text_box);
    }
}
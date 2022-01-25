'use strict'

export default class Add {
    constructor(CE, tool) {
        CE.generator(
            'add',
            'div',
            ['class'],
            ['add common'],
            [''],
            tool,
            1
        );

        this.add = document.querySelector('.add');

        CE.generator(
            'text_box',
            'input',
            ['class', 'type', 'maxlength', 'placeholder'],
            ['text-box', 'text', 10, '추가할 게시판 이름'],
            [''],
            this.add,
            1
        );

        CE.generator(
            'submit',
            'button',
            ['class'],
            ['submit pointer'],
            ['<i class="fas fa-plus-circle"></i>'],
            this.add,
            1
        );
    }
}
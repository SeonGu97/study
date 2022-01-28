'use strict';

export default class Text_box {
    constructor(create, add) {
        // create library
        create.launcher('Text_box', 'input', ['class', 'type', 'maxlength', 'placeholder'], ['text-box', 'text', '10', '추가할 게시판 이름 입력'], [''], add, 1);
    }
}
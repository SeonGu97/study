'use strict';

export default class Text_box {
    constructor(create, add) {
        // create library
        create.launcher('Text_box', 'input', ['class', 'type'], ['text-box', 'text'], [''], add, 1);
    }
}
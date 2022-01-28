'use strict';

import Text_box from "./text-box.js";
import Submit from "./submit.js";

export default class Add {
    constructor(create, tool) {
        // create add
        create.launcher('add', 'div', ['class'], ['add common gap hide'], [''], tool, 1);

        // select add
        this.add = document.querySelector('.add');

        // components
        this.text_box = new Text_box(create, this.add);
        this.submit = new Submit(create, this.add);
    }
}
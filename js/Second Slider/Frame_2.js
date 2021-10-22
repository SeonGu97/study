'use strict';

import { Btn_1 } from "./Btn_1.js";
import { Picture_2 } from "./Picture_2.js";

export class Frame_2 {
    constructor(createFrame_2_wrap) {
        this.createFrame_2 = document.createElement('div');
        this.attrs = this.createFrame_2.setAttribute('class', 'Frame_2');

        createFrame_2_wrap.appendChild(this.createFrame_2);

        this.picture_2 = new Picture_2(this.createFrame_2);
        this.btn_1 = new Btn_1(this.createFrame_2, createFrame_2_wrap);
    }
}
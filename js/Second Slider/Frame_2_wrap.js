'use strict';

import { Frame_2 } from "./Frame_2.js";

export class Frame_2_wrap {
    constructor(createIndex) {
        this.createFrame_2_wrap = document.createElement('div');
        this.attrs = this.createFrame_2_wrap.setAttribute('class', 'Frame_2_wrap');

        createIndex.appendChild(this.createFrame_2_wrap);

        this.frame_2 = new Frame_2(this.createFrame_2_wrap);
    }
}
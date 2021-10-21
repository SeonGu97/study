'use strict';

import { Btn_1 } from "./Btn_1.js";

export class Frame_2 {
    constructor(createIndex) {
        this.createFrame_2 = document.createElement('div');
        this.attrs = this.createFrame_2.setAttribute('class', 'Frame_2');

        createIndex.appendChild(this.createFrame_2);

        this.btn_1 = new Btn_1(this.createFrame_2);
    }
}
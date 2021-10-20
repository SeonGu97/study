'use strict';

import { Frame_1 } from './First Slider/Frame_1.js';

class Index {
    constructor() {
        this.createIndex = document.createElement('div');
        this.indexAttrs = this.createIndex.setAttribute('id', 'index');

        document.body.appendChild(this.createIndex);

        this.frame_1 = new Frame_1(this.createIndex);
    }
}

const index = new Index;
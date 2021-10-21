'use strict';

import { Frame_1 } from './First Slider/Frame_1.js';
import { Frame_2 } from './Second Slider/Frame_2.js';

class Index {
    constructor() {
        this.createIndex = document.createElement('div');
        this.indexAttrs = this.createIndex.setAttribute('id', 'index');

        document.body.appendChild(this.createIndex);

        this.frame_1 = new Frame_1(this.createIndex);
        this.frame_2 = new Frame_2(this.createIndex);
    }
}

const index = new Index;
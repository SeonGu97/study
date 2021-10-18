'use strict';

import { Picture } from "../js/picture.js";

export class Frame {
    constructor(createApp) {
        this.createFrame = document.createElement('div');
        this.frameAttrs = this.createFrame.setAttribute('class', 'frame');

        createApp.appendChild(this.createFrame);

        this.picture = new Picture(this.createFrame);

        this.counter = 0;

        setInterval(() => {
            this.counter++;
            this.childLength = this.createFrame.childNodes.length;
            this.createFrame.style.transition = '0.4s';

            if(this.counter == this.childLength) {
                this.counter = 0;
                this.createFrame.style.transition = 'none';
            }

            this.trans = `${-600 * this.counter}`;
            this.createFrame.style.transform = `translateX(${this.trans}px)`;
        }, 2000);
    }
}
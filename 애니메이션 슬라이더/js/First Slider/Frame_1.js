'use strict';

import { Picture_1 } from "./Picture_1.js";

export class Frame_1 {
    constructor(createIndex) {
        this.createFrame_1 = document.createElement('div');
        this.attrs = this.createFrame_1.setAttribute('class', 'Frame_1');

        createIndex.appendChild(this.createFrame_1);

        this.picture_1 = new Picture_1(this.createFrame_1);
        
        this.width = this.picture_1.width;

        this.animation = this.createFrame_1.animate([
            {transform: 'translateX(0px)'}, 
            {transform: 'translateX(0px)', offset: 0.85},
            {transform: `translateX(${this.width})`},
        ], {duration: 2500});

        this.animation.onfinish = () => {
            this.removeItem = this.createFrame_1.removeChild(this.createFrame_1.firstChild);
            this.createFrame_1.appendChild(this.removeItem);
            this.animation.play();
        }
    }
}
'use strict';

import { Picture } from "../js/picture.js";

export class Frame {
    constructor(createApp) {
        this.createFrame = document.createElement('div');
        this.frameAttrs = this.createFrame.setAttribute('class', 'frame');

        createApp.appendChild(this.createFrame);

        this.picture = new Picture(this.createFrame);

        this.width = this.picture.pictureWidth;

        this.ani = this.createFrame.animate([
            {transform: 'translateX(0px)'}, 
            {transform: 'translateX(0px)', offset: 0.85},
            {transform: `translateX(${this.width})`},
        ], {duration: 3000});


        this.ani.onfinish = () => {
            this.removeItem = this.createFrame.removeChild(this.createFrame.firstElementChild);
            this.createFrame.appendChild(this.removeItem);	
            this.ani.play();	
          }
    }

}
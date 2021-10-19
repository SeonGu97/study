'use strict';

export class Picture {
    constructor(createFrame) {
        this.num = 5;

        for(let i = 0; i < this.num; i++) {
            this.createPicture = document.createElement('div');
            this.pictureAttrs = this.createPicture.setAttribute('class', 'picture');
            
            createFrame.append(this.createPicture);

            this.pictureWidth = -this.createPicture.clientWidth + 'px';

            this.createPicture.innerText = [i + 1];
        }
    }
}
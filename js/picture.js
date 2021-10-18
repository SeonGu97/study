'use strict';

export class Picture {
    constructor(createFrame) {
        this.num = 3;

        for(let i = 0; i < this.num; i++) {
            this.createPicture = document.createElement('div');
            this.pictureAttrs = this.createPicture.setAttribute('class', `picture`);
            
            createFrame.append(this.createPicture);
            console.log(this.createPicture.innerText = [i + 1])
        }
    }
}
'use strict';

export class Picture_2 {
    constructor(createFrame_2) {
        this.num = 5;
        for(let i = 0; i < this.num; i++) {
            this.createPicture_2 = document.createElement('div');
            this.attrs = this.createPicture_2.setAttribute('class', 'Picture_2');
            
            createFrame_2.appendChild(this.createPicture_2);

            this.createPicture_2.innerText = [i + 1]
        }
    }
}
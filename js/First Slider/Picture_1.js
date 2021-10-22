'use strict';

export class Picture_1 {
     constructor(createFrame_1) {
         this.num = 5;

         for(let i = 0; i < this.num; i++) {
            this.createPicture_1 = document.createElement('div');
            this.attrs = this.createPicture_1.setAttribute('class', 'Picture_1');

            createFrame_1.appendChild(this.createPicture_1);

            this.width = -this.createPicture_1.offsetWidth + 'px';

            this.createPicture_1.innerText = [i + 1];
         }
     }
}
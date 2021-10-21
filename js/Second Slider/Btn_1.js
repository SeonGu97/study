'use strict';

export class Btn_1 {
    constructor(createFrame_2) {
        this.num = 2;

        for(let i = 0; i < this.num; i++) {
            this.createBtn_1 = document.createElement('button');
            this.attrs = this.createBtn_1.setAttribute('class', 'Btn_1');

            createFrame_2.appendChild(this.createBtn_1);
        }

        this.allBtn_1 = document.querySelectorAll('.Btn_1');

        this.allBtn_1[0].style.left = '0px';
        this.allBtn_1[1].style.right = '0px';
    }
}
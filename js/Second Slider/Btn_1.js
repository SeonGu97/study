'use strict';

export class Btn_1 {
    constructor(createFrame_2, createFrame_2_wrap) {
        this.num = 2;
        this.counter = 0;
        this.delay = 1000;

        this.createBox = document.createElement('div');
        this.boxAttrs = this.createBox.setAttribute('class', 'Box');
        
        createFrame_2_wrap.appendChild(this.createBox);

        for(let i = 0; i < this.num; i++) {
            this.createBtn_1 = document.createElement('button');
            this.attrs = this.createBtn_1.setAttribute('class', 'Btn_1');
            this.createBox.appendChild(this.createBtn_1);
        }

        this.allBtn_1 = document.querySelectorAll('.Btn_1');

        this.allBtn_1[0].style.left = '0px';
        this.allBtn_1[1].style.right = '0px';

        this.width = createFrame_2.offsetWidth + 'px';

        this.allBtn_1[0].addEventListener('click', () => {
            this.test(createFrame_2, this.width);
        });
    }

    test(createFrame_2, width) {
        const promise = new Promise((resolve, reject) => {
            createFrame_2.animate([
                {transform: `translateX(0px)`},
                {transform: `translateX(0px)`},
                {transform: `translateX(-${width})`},
            ], {duration: 1000});

            resolve(createFrame_2);
        });

        promise
        .then((createFrame_2) => {
            setTimeout(() =>  {
                this.removeItem = createFrame_2.removeChild(createFrame_2.firstChild);
            }, 1000);
        })
    }
}

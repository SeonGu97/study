'use strict';

class App {
    constructor() {
        // create wrap
        this.createWrap = document.createElement('div');
        this.createWrap.setAttribute('class', 'wrap');

        // add to wrap
        document.body.appendChild(this.createWrap);

        // num
        this.num = 5;

        // loop
        for(let i = 0; i < this.num; i++) {
            this.createCntr = document.createElement('div');
            this.createCntr.setAttribute('class', 'cntr');

            this.createWrap.appendChild(this.createCntr);

            this.createTitle = document.createElement('h2');
            this.createTitle.setAttribute('class', 'title');

            this.createCntr.appendChild(this.createTitle);

            let title = '슬라이더';

            this.createTitle.innerText = title + [i + 1];

            this.createBox = document.createElement('div');
            this.createBox.setAttribute('class', 'box');

            this.createPrev = document.createElement('button');
            this.createPrev.setAttribute('class', 'prev');

            this.createNext = document.createElement('button');
            this.createNext.setAttribute('class', 'next');

            this.createCntr.appendChild(this.createBox);

            this.createBox.appendChild(this.createPrev);
            this.createBox.appendChild(this.createNext);

            this.createPrev.innerText = 'prev';
            this.createNext.innerText = 'next';
        };
    };
};

const app = new App();
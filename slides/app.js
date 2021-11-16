'use strict';

// slider
import Slider_1 from './js/slider_1.js';

// setting
import Setting from './setting/setting.js';

class App {
    constructor() {
        // create app
        this.app = document.createElement('div');
        this.app.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.app);

        // create container
        for(let i = 0; i < Setting[0].num; i++) {
            this.createContainer = document.createElement('section');
            this.createContainer.setAttribute('class', 'container');

            //add to container
            this.app.appendChild(this.createContainer);

            // create number
            this.createNumber = document.createElement('span');
            this.createNumber.setAttribute('class', 'number');

            // add to number
            this.createContainer.appendChild(this.createNumber);

            // number inner text
            this.createNumber.innerText = [i + 1];

            // create item-box-wrap;
            this.createItemBoxWrap = document.createElement('div');
            this.createItemBoxWrap.setAttribute('class', 'item-box-wrap');

            // add to item-box
            this.createContainer.appendChild(this.createItemBoxWrap);

            // create prev btn
            this.createPrevBtn = document.createElement('button');
            this.createPrevBtn.setAttribute('class', 'prev');

            // create next btn
            this.createNextBtn = document.createElement('button');
            this.createNextBtn.setAttribute('class', 'next');

            // add to prev, next btn
            this.createContainer.appendChild(this.createPrevBtn);
            this.createContainer.appendChild(this.createNextBtn);

            // create item-box
            this.createItemBox = document.createElement('ul');
            this.createItemBox.setAttribute('class', 'item-box');

            // add to item-box
            this.createItemBoxWrap.appendChild(this.createItemBox);
        }

        // add to container
        this.app.appendChild(this.createContainer);

        // resize()
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // select all
        this.createItemBoxAll = document.querySelectorAll('.item-box');
        this.createPrevBtnAll = document.querySelectorAll('.prev');
        this.createNextBtnAll = document.querySelectorAll('.next');

        // slider_1
        this.slider_1 = new Slider_1(
            Setting[1].num, 
            this.createItemBoxAll[0], 
            this.width + 16,
            this.createPrevBtnAll[0],
            this.createNextBtnAll[0]

         );
    }

    resize() {
        this.width = this.createItemBox.clientWidth;
    }
}

const app = new App();
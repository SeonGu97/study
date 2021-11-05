'use strict';

// slides
import Slider_1 from "./js/slider_1.js";
import Slider_2 from "./js/slider_2.js";

// setting
import Setting from "./setting/setting.js";

class App {
    constructor() {
        // create app
        this.createApp = document.createElement('div');
        this.createApp.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.createApp);

        // num_0
        this.num_0 = Setting[0].num;

        // loop
        for(let i = 0; i < this.num_0; i++) {
            // create cntr-wrap
            this.createCntrWrap = document.createElement('div');
            this.createCntrWrap.setAttribute('class', 'cntr-wrap');

            // add to cntr
            this.createApp.appendChild(this.createCntrWrap);

            // create cntr
            this.createCntr = document.createElement('section');
            this.createCntr.setAttribute('class', 'cntr');

            // add to cntr
            this.createCntrWrap.appendChild(this.createCntr);

            // create title
            this.createTitle = document.createElement('h2');
            this.createTitle.setAttribute('class', 'title');

            // add to title
            this.createCntr.appendChild(this.createTitle);
            this.createTitle.innerText = '슬라이더'+ '-' + [i + 1];

            // create prev
            this.createPrev = document.createElement('button');
            this.createPrev.setAttribute('class', 'prev');

            // add to prev
            this.createCntr.appendChild(this.createPrev);

            // create next
            this.createNext = document.createElement('button');
            this.createNext.setAttribute('class', 'next');

            // add to next
            this.createCntr.appendChild(this.createNext);

            // create box
            this.createBox = document.createElement('ul');
            this.createBox.setAttribute('class', 'box');

            // add to box
            this.createCntr.appendChild(this.createBox);
        }

        // window resize event
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // select all elements
        this.createCntrAll = document.querySelectorAll('.cntr');
        this.createPrevAll = document.querySelectorAll('.prev');
        this.createNextAll = document.querySelectorAll('.next');
        this.createBoxAll = document.querySelectorAll('.box');
        
        // class Slider_1
        this.slider_1 = new Slider_1(
            Setting[1].num,
            this.createCntrAll, 
            this.createPrevAll, 
            this.createNextAll, 
            this.createBoxAll,
            this.width
        );

        // class Slider_2
        this.slider_2 = new Slider_2(
            Setting[2].num,
            this.createCntrAll, 
            this.createPrevAll, 
            this.createNextAll, 
            this.createBoxAll,
            this.width
        );
    }

    resize() {
        this.width = this.createBox.clientWidth;
    }
}

const app = new App();
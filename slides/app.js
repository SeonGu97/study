'use strict';

// slider
import Slider_1 from './js/slider_1.js';

// setting
import Setting from './setting/setting.js';

export default class App {
    constructor() {
        // create app
        this.createApp = document.createElement('div');
        this.createApp.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.createApp);

        // create elements
        for(let i = 0; i < Setting[0].num; i++) {
            // create wrap
            this.createWrap = document.createElement('section');
            this.createWrap.setAttribute('class', 'wrap');

            // add to container
            this.createApp.appendChild(this.createWrap);

            // create title
            this.createTitle = document.createElement('span');
            this.createTitle.setAttribute('class', 'title');

            // add to title
            this.createWrap.appendChild(this.createTitle);

            // create sub-title
            this.createSubTitle = document.createElement('h1');
            this.createSubTitle.setAttribute('class', 'sub-title');

            // add to sub-title
            this.createTitle.appendChild(this.createSubTitle);

            // text
            const text = ['Default'];

            // add to text
            this.createSubTitle.innerText = text;

            // create container
            this.createContainer = document.createElement('section');
            this.createContainer.setAttribute('class', 'container');

            // add to container
            this.createWrap.appendChild(this.createContainer);

            // create BG
            this.createBG = document.createElement('div');
            this.createBG.setAttribute('class', 'BG');

            // add to BG
            this.createWrap.appendChild(this.createBG);

            // create box-wrap
            this.createBoxWrap = document.createElement('div');
            this.createBoxWrap.setAttribute('class', 'box-wrap');

            // add to box-wrap
            this.createContainer.appendChild(this.createBoxWrap);

            // create box
            this.createBox = document.createElement('ul');
            this.createBox.setAttribute('class', 'box');

            // add to box
            this.createBoxWrap.appendChild(this.createBox);

            // create prev btn
            this.createPrevBtn = document.createElement('button');
            this.createPrevBtn.setAttribute('class', 'prev');

            // add to prev
            this.createContainer.appendChild(this.createPrevBtn);

            // create next btn
            this.createNextBtn = document.createElement('button');
            this.createNextBtn.setAttribute('class', 'next');

            // add to next
            this.createContainer.appendChild(this.createNextBtn);
        }
        
        // select all
        this.createBoxAll = document.querySelectorAll('.box');
        this.createPrevBtnAll = document.querySelectorAll('.prev');
        this.createNextBtnAll = document.querySelectorAll('.next');

        // slider_1
        this.slider_1 = new Slider_1(
            Setting[1].num,
            this.createPrevBtnAll[0],
            this.createNextBtnAll[0],
        );
    }
}

const app = new App();
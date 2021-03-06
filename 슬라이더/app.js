'use strict';

// slider
import Slider_1 from './js/slider_1.js';
import Slider_2 from './js/slider_2.js';
import Slider_3 from './js/slider_3.js';
import Slider_4 from './js/slider_4.js';
import Slider_5 from './js/slider_5.js';
import Slider_6 from './js/slider_6.js';
import Slider_7 from './js/slider_7.js';

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
            const text = [
                '기본', // 1
                '라디오 버튼이 있는', // 2
                '추가, 삭제 버튼이 있는', // 3
                '페이드 인, 페이드 아웃',  // 4
                '타이머 페이드 인, 페이드 아웃', // 5
                '세개의 아이템이 있는', // 6 
                '위,아래로 움직이는', // 7
            ];

            // add to text
            this.createSubTitle.innerText = text[i];

            // create container
            this.createContainer = document.createElement('section');
            this.createContainer.setAttribute('class', 'container');

            // add to container
            this.createWrap.appendChild(this.createContainer);

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
        this.createContainerAll = document.querySelectorAll('.container');
        this.createBoxWrapAll = document.querySelectorAll('.box-wrap');

        // slider_1
        this.slider_1 = new Slider_1(
            Setting[1].num,
            this.createPrevBtnAll[0],
            this.createNextBtnAll[0],
        );

        // slider_2
        this.slider_2 = new Slider_2(
            Setting[2].num,
            this.createPrevBtnAll[1],
            this.createNextBtnAll[1],
            this.createContainerAll[1],
        );

        // slider_3
        this.slider_3 = new Slider_3(
            Setting[3].num,
            this.createPrevBtnAll[2],
            this.createNextBtnAll[2],
            this.createContainerAll[2],
            Setting[3].min,
            Setting[3].max,
        );

        // slider_4
        this.slider_4 = new Slider_4(
            Setting[4].num,
            this.createPrevBtnAll[3],
            this.createNextBtnAll[3],
            this.createContainerAll[3],
        );

        // slider_5
        this.slider_5 = new Slider_5(
            Setting[5].num,
            this.createPrevBtnAll[4],
            this.createNextBtnAll[4],
            this.createContainerAll[4],
        );

        // slider_6
        this.slider_6 = new Slider_6(
            Setting[6].num,
            this.createPrevBtnAll[5],
            this.createNextBtnAll[5],
            this.createContainerAll[5],
        );

        // slider_7
        this.slider_7 = new Slider_7(
            Setting[7].num,
            this.createPrevBtnAll[6],
            this.createNextBtnAll[6],
            this.createContainerAll[6],
            this.createBoxWrapAll[6]
        );
    }
}

const app = new App();
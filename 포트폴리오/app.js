'use strict';

// setting
import Setting from "./setting/setting.js";

class App {
    constructor() {
        // create app
        this.app = document.createElement('div');
        this.app.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.app);

        // create cntr
        this.cntr = document.createElement('div');
        this.cntr.setAttribute('class', 'cntr');

        // add to cntr
        this.app.appendChild(this.cntr);

        // create page
        for(let i = 0; i < Setting[0].value; i++) {
            this.page = document.createElement('section');
            this.page.setAttribute('class', 'page');

            // add to page
            this.cntr.appendChild(this.page);
        }

        window.addEventListener('keydown', e => {
            if(e.keyCode == '17') {
                document.body.style.overflow = 'hidden';
            }
        }, false);
        
        // scroll top
        this.top = document.documentElement.scrollTop || 0;
        
        // counter
        this.counter = 0;

        // resize event
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // scroll event
        window.addEventListener('scroll', e => {
            // scroll y
            this.windowY = window.scrollY;
            
            // scroll top
            this.y = document.documentElement.scrollTop;

            // scroll up(false), down(true)
            this.result = this.y - this.top >= 0 ? true : false;

            // this.top redefine(재정의)
            this.top = this.y;

            // If it's true +, If it's a lie -. (true라면 +, false라면 -)
            if(this.result) {
                this.counter++;
                document.body.style.overflow = 'hidden';
            }else if(!this.result) {
                this.counter--;
                document.body.style.overflow = 'hidden';
            }

            // 화면 높이 - 스크롤을 내렸을때 내려간 높이 = 진짜 화면의 높이
            this.realSize = this.windowY - (this.size * this.counter);

            // If it's less than 0, counter this 0. (만약 0보다 작아지면, counter는 0)
            this.cntr.style.transform = `translateY(${this.realSize}px)`;

            if(this.counter < 0) {
                this.counter = 0;
                this.cntr.style.transition = 'none';
                this.cntr.style.transform = `translateY(${-this.realSize}px)`;
            }else if(this.counter > Setting[0].value - 1) {
                console.log('b')
            }
        }, false);;

        // cntr transitionend event
        this.cntr.addEventListener('transitionend', () => {
            document.body.style.overflowX = 'hidden';
            document.body.style.overflowY = 'scroll';
        }, false);
    }

    // resize
    resize() {
        // document clientHeight
        this.size = window.innerHeight;
        this.cntr.style.transform = `translateY(${-this.realSize}px)`;
    }
}

const app = new App();

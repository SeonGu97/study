'use strict';

class App {
    constructor() {
        // create app
        this.createApp = document.createElement('div');
        this.createApp.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.createApp);

        // num_1
        this.num_1 = 5;

        // num_2
        this.num_2 = 5;

        // loop
        for(let i = 0; i < this.num_1; i++) {
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

            // loop
            for(let i = 0; i < this.num_2; i++) {
                // create item
                this.createItem = document.createElement('li');
                this.createItem.setAttribute('class', 'item');

                // add to item
                this.createBox.appendChild(this.createItem);
                this.createItem.innerText = [i + 1];
            }
        }

        // select all
        this.createCntrAll = document.querySelectorAll('.cntr');
        this.createPrevAll = document.querySelectorAll('.prev');
        this.createNextAll = document.querySelectorAll('.next');
        this.createBoxAll = document.querySelectorAll('.box');

        // lastChild number == firstChild number
        this.createBoxAll[0].lastChild.innerText = this.createBoxAll[0].firstChild.innerText;

        // window resize event
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.counter_1 = 0;

        this.createPrevAll[0].addEventListener('click', () => {
            --this.counter_1;
            console.log(this.counter_1)
            this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter_1}px)`;
            
            if(this.counter_1 < 0) {
                
            }
        }, false);

        this.createNextAll[0].addEventListener('click', () => {
            ++this.counter_1;
            console.log(this.counter_1)
            this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter_1}px)`;
        }, false);
    }

    resize() {
        this.width = this.createBox.clientWidth;
    }
}

const app = new App();
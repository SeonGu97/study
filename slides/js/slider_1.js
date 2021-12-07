'use strict';

export default class Slider_1 {
    constructor(num_1, createPrevBtnAll, createNextBtnAll) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

        // counter
        this.counter = 1;

        // item()
        this.item(num_1, this.createBoxAll[0]);

        // resize()
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // prev btn event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter == 0) return;
            
            // counter--;
            this.counter--;

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'none';
            
            // trans()
            this.trans();
        }, false);

        // next btn event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter == num_1 - 1) return;

            // counter++
            this.counter++;

            // pointer event
            createNextBtnAll.style.pointerEvents = 'none';
            
            // trans()
            this.trans();
        }, false);

        // box event
        this.createBoxAll[0].addEventListener('transitionend', () => {
            // min
            if(this.counter == 0) {
                this.createBoxAll[0].style.transition = 'none';
                this.counter = num_1 - 2;
                this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            // max
            if(this.counter == num_1 - 1) {
                this.createBoxAll[0].style.transition = 'none';
                this.counter = 1;
                this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'auto';
            createNextBtnAll.style.pointerEvents = 'auto';

            // reset active
            for(let i = 0; i < num_1; i++) {
                this.createBoxAll[0].childNodes[i].style.background = 'rgba(255, 255, 255, 0.2)';
            }

            // active
            this.createBoxAll[0].childNodes[this.counter].style.background = 'linear-gradient(0deg,#ffcdd2 20%,#ffebee)';
        }, false);
    }

    // item
    item(num_1, createBoxAll) {
        for(let i = 0; i < num_1; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll.appendChild(this.createItem);

            // create text
            this.createText = document.createElement('span');
            this.createText.setAttribute('class', 'text t_1');

            // add to text
            this.createItem.appendChild(this.createText);

            // inner text
            this.createText.innerText = [i];

            // +0
            if(this.createText.textContent < 10) {
                this.createText.innerText = 0 + [i];
            }
        }

        // select all 
        this.createTextAll = document.querySelectorAll('.t_1');

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[num_1 - 2].innerText;

        // last child inner text
        this.createTextAll[num_1 - 1].innerText = this.createTextAll[1].innerText;

        // active
        createBoxAll.childNodes[1].style.background = 'linear-gradient(0deg,#ffcdd2 20%,#ffebee)';
    }

    // resize
    resize() {
        // gap
        let gap = 20;

        // width
        this.width = this.createBoxAll[0].clientWidth + gap;
        
        // first child skip
        this.createBoxAll[0].style.transition = 'none';
        this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // trans
    trans() {
        // transform
        this.createBoxAll[0].style.transition = '0.4s ease-in-out';
        this.createBoxAll[0].style.transitionDuration = '0.5s'
        this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
    }
} 
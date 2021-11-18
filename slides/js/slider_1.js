'use strict';

import App from '../app.js';

export default class Slider_1 {
    constructor(num_1, createPrevBtnAll, createNextBtnAll) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

        // counter
        this.counter = 1;

        // resize()
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // item()
        this.item(num_1, this.createBoxAll[0], this.counter, this.width);

        // prev btn event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter == 0) return;
            
            // counter--;
            this.counter--;

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'none';
            
            // trans()
            this.trans(num_1);
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
            this.trans(num_1);
        }, false);

        this.createBoxAll[0].addEventListener('transitionend', () => {
            if(this.counter == 0) {
                console.log(true)
                this.createBoxAll[0].style.transition = 'none';
                this.counter = num_1 - 2;
                this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            if(this.counter == num_1 - 1) {
                this.createBoxAll[0].style.transition = 'none';
                this.counter = 1;
                this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            createPrevBtnAll.style.pointerEvents = 'auto';
            createNextBtnAll.style.pointerEvents = 'auto';
        }, false);
    }

    item(num_1, createBoxAll) {
        for(let i = 0; i < num_1; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll.appendChild(this.createItem);

            // create text
            this.createText = document.createElement('span');
            this.createText.setAttribute('class', 'text');

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
        this.createTextAll = document.querySelectorAll('.text');

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[num_1 - 2].innerText;

        // last child inner text
        this.createTextAll[num_1 - 1].innerText = this.createTextAll[1].innerText;
    }

    // resize
    resize() {
        // width
        this.width = this.createBoxAll[0].clientWidth;
        
        // first child skip
        this.createBoxAll[0].style.transition = 'none';
        this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    trans(num_1) {
        // transform
        this.createBoxAll[0].style.transition = '0.4s ease-in-out';
        this.createBoxAll[0].style.transitionDuration = '0.5s'
        this.createBoxAll[0].style.transform = `translateX(${-this.width * this.counter}px)`;
    }
} 
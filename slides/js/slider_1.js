'use strict';

export default class Slider_1 {
    constructor(num_1, createItemBoxAll, width, createPrevBtnAll, createNextBtnAll) {
        // items()
        this.items(num_1, createItemBoxAll);

        // counter
        this.counter = 1;

        // first child skip
        createItemBoxAll.style.transform = `translateX(${-width * this.counter}px)`;

        // prev event
        createPrevBtnAll.addEventListener('click', () => {
            if(this.counter == 0) return;

            this.counter--;

            createItemBoxAll.style.transition = 'transform 0.4s ease-in-out';
            createItemBoxAll.style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // next event
        createNextBtnAll.addEventListener('click', () => {
            if(this.counter == num_1 - 3) return;

            this.counter++;

            createItemBoxAll.style.transition = 'transform 0.4s ease-in-out';
            createItemBoxAll.style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // item-box event
        createItemBoxAll.addEventListener('transitionend', () => {
            if(this.counter == 0) {
                createItemBoxAll.style.transition = 'none';
                this.counter = createItemBoxAll.childNodes.length - 2;
                createItemBoxAll.style.transform = `translateX(${-width * this.counter}px)`;
            }

            if(this.counter == createItemBoxAll.childNodes.length - 1) {
                createItemBoxAll.style.transition = 'none';
                this.counter = 1;
                createItemBoxAll.style.transform = `translateX(${-width * this.counter}px)`;
            }
        }, false);
    }

    items(num_1, createItemBoxAll) {
        for(let i = 0; i < num_1 - 2; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createItemBoxAll.appendChild(this.createItem);

            // item inner text
            this.createItem.innerText = [i];
        }

        // first child inner text
        createItemBoxAll.firstChild.innerText = createItemBoxAll.childNodes.length -  2;

        // last child inner text
        createItemBoxAll.lastChild.innerText = 1;
    }
} 
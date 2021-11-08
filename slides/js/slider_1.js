'use strict';

export default class Slider_1 {
    constructor(num_1, createPrevAll, createNextAll, createBoxAll, width) {
        // loop
        for(let i = 0; i < num_1; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[0].appendChild(this.createItem);
            
            // inner text
            this.createItem.innerText = [i];
        }

        // change inner text
        createBoxAll[0].firstChild.innerText = num_1 - 2;
        createBoxAll[0].lastChild.innerText = 1;

        // skip the first one
        createBoxAll[0].style.transform = `translateX(${-width}px)`;

        // counter
        this.counter = 1;

        // prev event
        createPrevAll[0].addEventListener('click', () => {
            if(this.counter <= 0) {
                return;
            }

            this.counter--;

            createBoxAll[0].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[0].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // next event
        createNextAll[0].addEventListener('click', () => {
            if(this.counter >= num_1 - 1) {
                return;
            }

            this.counter++;

            createBoxAll[0].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[0].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // box event
        createBoxAll[0].addEventListener('transitionend', () =>  {
            if(this.counter <= 0) {
                createBoxAll[0].style.transition = 'none';
                this.counter = num_1 - 2;
                createBoxAll[0].style.transform = `translateX(${-width * this.counter}px)`;
            }else if(this.counter >= num_1 - 1) {
                createBoxAll[0].style.transition = 'none';
                this.counter = 1;
                createBoxAll[0].style.transform = `translateX(${-width * this.counter}px)`;
            }
        }, false);
    }
}
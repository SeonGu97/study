'use strict';

export default class Slider_2 {
    constructor(num_2, createCntrAll, createPrevAll, createNextAll, createBoxAll, width) {
        
        
        // loop
        for(let i = 0; i < num_2; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[1].appendChild(this.createItem);
            
            // inner text
            this.createItem.innerText = [i];
        }

        // change inner text
        createBoxAll[1].firstChild.innerText = num_2 - 2;
        createBoxAll[1].lastChild.innerText = 1;

        // skip the first one
        createBoxAll[1].style.transform = `translateX(${-width}px)`;

        // counter
        this.counter = 1;
        
        // create radio-box
        this.createRadioBox = document.createElement('div');
        this.createRadioBox.setAttribute('class', 'radio-box');

        // add to radio-box
        createCntrAll[1].appendChild(this.createRadioBox);

        for(let i = 0; i < num_2 - 2; i++) {
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio');
            this.createRadio.setAttribute('class', 'radio');
            this.createRadio.setAttribute('value', `${[i + 1]}`);

            this.createRadioBox.appendChild(this.createRadio);
        }

        // select all radio
        this.createRadioAll = document.querySelectorAll('.radio');

        // first one, check
        this.createRadioAll[0].checked = true; 

        // radios event
        this.createRadioAll.forEach(radios => {
            radios.addEventListener('click', e => {
                this.counter = e.target.value;

                createBoxAll[1].style.transition = 'transform 0.4s ease-in-out';
                createBoxAll[1].style.transform = `translateX(${-width * this.counter}px)`;
            });
        });

        // prev event
        createPrevAll[1].addEventListener('click', () => {
            if(this.counter <= 0) {
                return;
            }

            this.counter--;

            if(this.counter == 0) {
                this.createRadioAll[num_2 - 3].checked = true;
            } else {
                this.createRadioAll[this.counter - 1].checked = true;
            }

            createBoxAll[1].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[1].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // next event
        createNextAll[1].addEventListener('click', () => {
            if(this.counter >= num_2 - 1) {
                return;
            }

            this.counter++;

            if(this.counter == num_2 - 1) {
                this.createRadioAll[0].checked = true;
            } else {
                this.createRadioAll[this.counter - 1].checked = true;
            }

            createBoxAll[1].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[1].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // box event
        createBoxAll[1].addEventListener('transitionend', () =>  {
            if(this.counter <= 0) {
                createBoxAll[1].style.transition = 'none';
                this.counter = num_2 - 2;
                createBoxAll[1].style.transform = `translateX(${-width * this.counter}px)`;
            }else if(this.counter >= num_2 - 1) {
                createBoxAll[1].style.transition = 'none';
                this.counter = 1;
                createBoxAll[1].style.transform = `translateX(${-width * this.counter}px)`;
            }
        }, false);
    }
}
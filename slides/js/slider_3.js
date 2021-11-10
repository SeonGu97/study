'use strict';

export default class Slider_3 {
    constructor(
    num_3, 
    createCntrAll, 
    createPrevAll, 
    createNextAll, 
    createBoxAll, 
    width) {

        // create option-box
        this.createOptionBox = document.createElement('div');
        this.createOptionBox.setAttribute('class', 'option-box');

        // create plus, minus btn
        this.createPlus = document.createElement('button');
        this.createPlus.setAttribute('class', 'plus');

        this.createMinus = document.createElement('button');
        this.createMinus.setAttribute('class', 'minus');

        // add to plus, minus btn
        this.createOptionBox.appendChild(this.createMinus);
        this.createOptionBox.appendChild(this.createPlus);

        // add to option-box
        createCntrAll[2].appendChild(this.createOptionBox);

        // addItems()
        this.addItems(num_3, createBoxAll);

        // counter
        this.counter = 1;

        // skip the first one
        createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;

        // create radio-box
        this.createRadioBox = document.createElement('div');
        this.createRadioBox.setAttribute('class', 'radio-box');

        // add to radio-box
        createCntrAll[2].appendChild(this.createRadioBox);

        // radio()
        this.radio(num_3, this.createRadioBox);

        // createPlus event
        this.createPlus.addEventListener('click', () => {
            num_3++;
            this.addItems(createBoxAll, num_3, this.createRadioBox);
        });

        // createMinus event
        this.createMinus.addEventListener('click', () => {
            num_3--;
            this.removeItems(createBoxAll, num_3, this.createRadioBox);
        });
        
        // createPrevAll event
        createPrevAll[2].addEventListener('click', () => {
            
        }, false)

        // createNextAll event
        createNextAll[2].addEventListener('click', () => {
            
        }, false)
    }

    addItems(createBoxAll, num_3, createRadioBox) {
        
    }

    // 정상 작동
    radio(num_3, createRadioBox) {
        for(let i = 0; i < num_3 - 2; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');

            // add to radio
            createRadioBox.appendChild(this.createRadio);
        }
    }

    // 정상 작동
    removeItems(createBoxAll, num_3, createRadioBox) {
        // remove to item
        createBoxAll[2].removeChild(createBoxAll[2].lastChild);
        
        // first, last child inner text
        createBoxAll[2].firstChild.innerText = num_3 - 2;
        createBoxAll[2].lastChild.innerText = 1;

        // removeRadio()
        this.removeRadio(createRadioBox);
    }

    addRadio(createRadioBox) {

    }

    // 정상 작동
    removeRadio(createRadioBox) {
        for(let i = 0; i < 1; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');
        }

        // remove last child
        createRadioBox.removeChild(createRadioBox.lastChild);
    }
}
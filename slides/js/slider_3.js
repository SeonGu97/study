'use strict';

export default class Slider_3 {
    constructor(
    num_3, 
    createCntrAll, 
    createPrevAll, 
    createNextAll, 
    createBoxAll, 
    width) {

        // option-box
        this.optionBox = document.createElement('div');
        this.optionBox.setAttribute('class', 'option-box');

        // create minus
        this.minus = document.createElement('button');
        this.minus.setAttribute('class', 'minus');

        // create plus
        this.plus = document.createElement('button');
        this.plus.setAttribute('class', 'plus');

        // add to plus, minus
        this.optionBox.appendChild(this.minus);
        this.optionBox.appendChild(this.plus);

        // add to option-box
        createCntrAll[2].appendChild(this.optionBox);

        // create radio-box
        this.createRadioBox = document.createElement('div');
        this.createRadioBox.setAttribute('class', 'radio-box');

        // add to radio-box
        createCntrAll[2].appendChild(this.createRadioBox);
        
        // radio
        this.radio(num_3 - 2, this.createRadioBox);

        // variable
        const min = 1;
        const max = 10;

        // minus event
        this.minus.addEventListener('click', () => {
            if(num_3 == min + 2) {
                return;
            }

            --num_3;

            this.remove(min, this.createRadioBox, num_3, createBoxAll, width, this.counter);
        }, false);

        // plus event
        this.plus.addEventListener('click', () => { 
            if(num_3 == max + 1) {
                return;
            }

            ++num_3;

            this.add(min, this.createRadioBox, max, num_3, createBoxAll, width, this.counter);
        }, false);

        // select all
        this.createRadioAll = document.querySelectorAll('.radio_2');

        // first radio checked
        this.createRadioAll[0].checked = true;

        // item
        this.item(num_3, createBoxAll);

        // skip the first one
        createBoxAll[2].style.transform = `translateX(${-width}px)`;

        createBoxAll[2].addEventListener('change', () => {
            console.log(true);
        })

        // counter
        this.counter = 1;

        // check
        this.check(this.createRadioBox, createBoxAll, this.counter, width);

        // prev event
        createPrevAll[2].addEventListener('click', () => {
            if(this.counter <= 0) {
                return;
            }

            this.counter--;
            
            if(this.counter == 0) {
                this.createRadioBox.lastChild.checked = true;
            } else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // next event
        createNextAll[2].addEventListener('click', () => {
            if(this.counter >= num_3 - 1) {
                return;
            }

            this.counter++;

            if(this.counter == num_3 - 1) {
                this.createRadioAll[0].checked = true;
            } else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // box event
        createBoxAll[2].addEventListener('transitionend', () =>  {
            if(this.counter <= 0) {
                createBoxAll[2].style.transition = 'none';
                this.counter = num_3 - 2;
                createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
            }else if(this.counter >= num_3 - 1) {
                createBoxAll[2].style.transition = 'none';
                this.counter = 1;
                createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
            }
        }, false);
    }

    radio(value, createRadioBox) {
        for(let i = 0; i < value; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');
            this.createRadio.setAttribute('value', `${[i + 1]}`);

            // add to radio
            createRadioBox.appendChild(this.createRadio);
        }
    }

    remove(min, createRadioBox, num_3, createBoxAll, width, counter) {
        if(createRadioBox.childNodes.length <= 2) {
            return;
        }

        for(let i = 0; i < min; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');
            this.createRadio.setAttribute('value', `${[i + 1]}`);

            // remove to radio
            createRadioBox.removeChild(createRadioBox.lastChild);
        }

        // first radio checked
        this.createRadioAll[0].checked = true;

        // removeItem
        this.removeItem(createBoxAll, min, num_3, counter, width);

        // check
        this.check(createRadioBox, createBoxAll, counter, width);
    }

    add(min, createRadioBox, max, num_3, createBoxAll, width, counter) {
        if(createRadioBox.childNodes.length >= max) {
            return;
        }

        // radio
        this.radio(min, createRadioBox);

        // addItem
        this.addItem(createBoxAll, min, num_3);

        // check
        this.check(createRadioBox, createBoxAll, counter, width)
    }

    item(num_3, createBoxAll) {
        // loop
        for(let i = 0; i < num_3; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[2].appendChild(this.createItem);
            
            // inner text
            this.createItem.innerText = [i];
        }

        // change inner text
        createBoxAll[2].firstChild.innerText = createBoxAll[2].childNodes.length - 2;
        createBoxAll[2].lastChild.innerText = 1;
    }

    addItem(createBoxAll, min, num_3) {
        // loop
        for(let i = 0; i < min; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[2].appendChild(this.createItem);
        }

        // change
        this.change(num_3, createBoxAll);
    }

    removeItem(createBoxAll, min, num_3, counter, width) {
        for(let i = 0; i < min; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[2].removeChild(createBoxAll[2].lastChild);

            // counter
            counter = 1;

            // 
            createBoxAll[2].style.transform = `translateX(${-width * counter}px)`;
        }

        // change
        this.change(num_3, createBoxAll);
    }

    change(num_3, createBoxAll) {
        // loop
        for(let i = 0; i < num_3; i++) {
            // inner text
            createBoxAll[2].childNodes[i].innerText = [i];
            this.createRadio.setAttribute('value', `${[i - 1]}`);

            // change inner text
            createBoxAll[2].firstChild.innerText = createBoxAll[2].childNodes.length - 2;
            createBoxAll[2].lastChild.innerText = 1;
        }
    }

    check(createRadioBox, createBoxAll, counter, width) {
        createRadioBox.childNodes.forEach(radios => {
            radios.addEventListener('click', e => {
                counter = e.target.value;
    
                createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
                createBoxAll[2].style.transform = `translateX(${-width * counter}px)`;
            });
        });
    }
}
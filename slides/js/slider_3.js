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

        // add to option-box
        createCntrAll[2].appendChild(this.createOptionBox);

        // create plus, minus btn
        this.plus = document.createElement('button');
        this.plus.setAttribute('class', 'plus');
        
        this.minus = document.createElement('button');
        this.minus.setAttribute('class', 'minus');

        // add to plus, minus
        this.createOptionBox.appendChild(this.minus);
        this.createOptionBox.appendChild(this.plus);

        // plus event
        this.plus.addEventListener('click', () => {
            num_3++;
            this.add(createBoxAll, num_3, width);
        }, false);

        // minus event
        this.minus.addEventListener('click', () => {
            num_3--;
            this.remove(createBoxAll, num_3, width);
        }, false);
            
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
        createBoxAll[2].firstChild.innerText = num_3 - 2;
        createBoxAll[2].lastChild.innerText = 1;

        // skip the first one
        createBoxAll[2].style.transform = `translateX(${-width}px)`;

        // counter
        this.counter = 1;
        
        // prev event
        createPrevAll[2].addEventListener('click', () => {
            if(this.counter <= 0) {
                return;
            }

            this.counter--;

            if(this.counter == 0) {
                this.createRadioAll[num_3 - 3].checked = true;
            } else {
                this.createRadioAll[this.counter - 1].checked = true;
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
            console.log(this.counter)
            
            if(this.counter == num_3 - 1) {
                this.createRadioAll[0].checked = true;
            } else {
                this.createRadioAll[this.counter - 1].checked = true;
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

        // create radio-box
        this.createRadioBox = document.createElement('div');
        this.createRadioBox.setAttribute('class', 'radio-box');

        // add to radio-box
        createCntrAll[2].appendChild(this.createRadioBox);

        for(let i = 0; i < num_3 - 2; i++) {
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');
            this.createRadio.setAttribute('value', `${[i + 1]}`);

            this.createRadioBox.appendChild(this.createRadio);
        }

        // select all radio
        this.createRadioBoxAll = document.querySelectorAll('.radio-box');
        this.createRadioAll = document.querySelectorAll('.radio_2');

        // first one, check
        this.createRadioAll[0].checked = true; 

        // radios event
        this.createRadioAll.forEach(radios => {
            radios.addEventListener('click', e => {
                this.counter = e.target.value;

                createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
                createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
            });
        });
    }

    add(createBoxAll, num_3, width) {
        for(let i = 0; i < num_3 - 1; i++) {
            createBoxAll[2].removeChild(createBoxAll[2].firstChild);
        }

        for(let i = 0; i < num_3 - 3; i++) {
            this.createRadioBoxAll[1].removeChild(this.createRadioBoxAll[1].firstChild);
        }

        for(let i = 0; i < num_3; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[2].appendChild(this.createItem);
            
            // inner text
            this.createItem.innerText = [i];
        }

        for(let i = 0; i < num_3 - 2; i++) {
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');
            this.createRadio.setAttribute('value', `${[i + 1]}`);

            this.createRadioBoxAll[1].appendChild(this.createRadio);
        }

        createBoxAll[2].firstChild.innerText = num_3 - 2;

        createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
    }

    remove(createBoxAll, num_3, width) {
        for(let i = 0; i < num_3; i++) {
            createBoxAll[2].removeChild(createBoxAll[2].firstChild);
        }

        for(let i = 0; i < num_3 - 1; i++) {
            this.createRadioBoxAll[1].removeChild(this.createRadioBoxAll[1].firstChild);
        }

        for(let i = 0; i < num_3 - 1; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[2].appendChild(this.createItem);
            
            // inner text
            this.createItem.innerText = [i + 1];
        }

        for(let i = 0; i < num_3 - 2; i++) {
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('class', 'radio_2');
            this.createRadio.setAttribute('value', `${[i + 1]}`);

            this.createRadioBoxAll[1].appendChild(this.createRadio);
        }
        
        createBoxAll[2].firstChild.innerText = num_3 - 2;

        createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
    }
}
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

        // items()
        this.items(createBoxAll, num_3, this.createRadioBox);

        // first radio check
        this.createRadioBox.firstChild.checked = true;

        // createPlus event
        this.createPlus.addEventListener('click', () => {
            // min num_3
            if(num_3 == 12) return;
            
            // num_3++
            num_3++;

            // addItems()
            this.addItems(createBoxAll, num_3, this.createRadioBox, width, this.counter);
        });

        // createMinus event
        this.createMinus.addEventListener('click', () => {
            // max num_3
            if(num_3 < 5) return;

            console.log(num_3)
            
            // num_3--
            num_3--;

            // removeItems()
            this.removeItems(createBoxAll, num_3, this.createRadioBox, width, this.counter);
        });

        // counter
        this.counter = 1;
        
        // createPrevAll event
        createPrevAll[2].addEventListener('click', () => {
            // return
            if(this.counter == 0) return;

            // counter--
            this.counter--;

            // radio checked
            if(this.counter == 0) {
                this.createRadioBox.childNodes[num_3 - 3].checked = true;
            }else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            // transform
            createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
            createBoxAll[2].style.transform = `translateX(${-width * this.counter}px)`;
        }, false);

        // createNextAll event
        createNextAll[2].addEventListener('click', () => {
            // return
            if(this.counter > num_3 - 2) return;

            // counter++
            this.counter++;

            // radio checked
            if(this.counter == num_3 - 1) {
                this.createRadioBox.childNodes[0].checked = true;
            }else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            // transform
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

        this.radioEvent(this.createRadioBox, this.counter, createBoxAll, width);
    }

    // 정상 작동
    items(createBoxAll, num_3, createRadioBox) {
        for(let i = 0; i < num_3; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll[2].appendChild(this.createItem);

            // item inner text
            this.createItem.innerText = [i];
        }

        // first, last child inner text
        createBoxAll[2].firstChild.innerText = num_3 - 2;
        createBoxAll[2].lastChild.innerText = 1;
    }
    
    addItems(createBoxAll, num_3, createRadioBox, width, counter) {
        // create item
        this.createItem = document.createElement('li');
        this.createItem.setAttribute('class', 'item');

        // add to item
        createBoxAll[2].appendChild(this.createItem);

        for(let i = 0; i < num_3; i++) {
            // item inner text
            createBoxAll[2].childNodes[i].innerText = [i];
        }

        // first, last child inner text
        createBoxAll[2].firstChild.innerText = num_3 - 2;
        createBoxAll[2].lastChild.innerText = 1;

        // addRadio()
        this.addRadio(createRadioBox);

        // radioEvent(); 
        this.radioEvent(createRadioBox, counter, createBoxAll, width);
    }

    removeItems(createBoxAll, num_3, createRadioBox, width, counter) {
        // remove to item
        createBoxAll[2].removeChild(createBoxAll[2].lastChild);
        
        // first, last child inner text
        createBoxAll[2].firstChild.innerText = num_3 - 2;
        createBoxAll[2].lastChild.innerText = 1;

        // removeRadio()
        this.removeRadio(createRadioBox);

        counter = 1;
        console.log(counter);

        // transform
        createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
        createBoxAll[2].style.transform = `translateX(${-width * 1}px)`;
    }

    radio(num_3, createRadioBox) {
        for(let i = 0; i < num_3 - 2; i++) {
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

    addRadio(createRadioBox) {
        // create radio
        this.createRadio = document.createElement('input');
        this.createRadio.setAttribute('type', 'radio');
        this.createRadio.setAttribute('name', 'radio_2');
        this.createRadio.setAttribute('class', 'radio_2');
        this.createRadio.setAttribute('value', `${createRadioBox.childNodes.length + 1}`);

        // add to radio
        createRadioBox.appendChild(this.createRadio);
    }

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

        // first radio check
        createRadioBox.firstChild.checked = true;
    }

    radioEvent(createRadioBox, counter, createBoxAll, width) {
        createRadioBox.childNodes.forEach(radios => {
            radios.addEventListener('click', e => {
                counter = e.target.value;

                createBoxAll[2].style.transition = 'transform 0.4s ease-in-out';
                createBoxAll[2].style.transform = `translateX(${-width * counter}px)`;
            });
        });
    }
}
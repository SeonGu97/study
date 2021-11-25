'use strict';

export default class Slider_4 {
    constructor(num_4, createPrevBtnAll, createNextBtnAll, createContainerAll) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

        // create sub-container
        this.createSubContainer = document.createElement('div');
        this.createSubContainer.setAttribute('class', 'sub-container');

        // add to sub-container
        createContainerAll.appendChild(this.createSubContainer);

        // create radio-box
        this.createRadioBox = document.createElement('span');
        this.createRadioBox.setAttribute('class', 'radio-box');

        // add to radio-box
        this.createSubContainer.appendChild(this.createRadioBox);

        // loop()
        this.loop(num_4, this.createBoxAll[3], this.createRadioBox);

        // style()
        this.style(this.createBoxAll[3]);

        // first child checked
        this.createRadioBox.firstChild.checked = true;

        // firstChild z-index
        this.createBoxAll[3].firstChild.style.zIndex = 25;

        // firstChild opacity
        this.createBoxAll[3].firstChild.style.opacity = 1;

        // first child active
        this.createBoxAll[3].firstChild.style.background = 'linear-gradient(0deg,#a5d6a7 20%,#c8e6c9)';
    
        // counter
        this.counter = 1;

        // prev event
        createPrevBtnAll.addEventListener('click', () => {
            this.fade(num_4, this.createBoxAll[3]);
        }, false);

        // next event
        createNextBtnAll.addEventListener('click', () => {
            this.fade(num_4, this.createBoxAll[3]);
        }, false);
    }

    // item
    item(createBoxAll) {
        // create item
        this.createItem = document.createElement('li');
        this.createItem.setAttribute('class', 'item');

        // add to item
        createBoxAll.appendChild(this.createItem);

        // create text
        this.createText = document.createElement('span');
        this.createText.setAttribute('class', 'text t_4');

        // add to text
        this.createItem.appendChild(this.createText);
    }

    // radio
    radio(createRadioBox) {
        // create radio
        this.createRadio = document.createElement('input');
        this.createRadio.setAttribute('class', 'radio_3');
        this.createRadio.setAttribute('type', 'radio');
        this.createRadio.setAttribute('name', 'radio_3');

        // add to radio
        createRadioBox.appendChild(this.createRadio);
    }

    // loop
    loop(value, createBoxAll, createRadioBox) {
        // create item
        for(let i = 0; i < value; i++) {
            this.item(createBoxAll);
        }

        // create radio
        for(let i = 0; i < value; i++) {
            this.radio(createRadioBox);
        }

        // innerText()
        this.innerText(value);
    }

    // innerText
    innerText(value) {
        // select all
        this.createTextAll = document.querySelectorAll('.t_4');
        this.createRadioAll = document.querySelectorAll('.radio_3');

        // inner text
        for(let i = 0; i < value; i++) {
            this.createTextAll[i].innerText = [i + 1];

            // +0
            if(this.createTextAll[i].textContent < 10) {
                this.createTextAll[i].innerText = 0 + [i + 1];
            }
        }

        // inner value
        for(let i = 0; i < value; i++) {
            this.createRadioAll[i].value = [i + 1];
        }
    }

    // style
    style(createBoxAll) {
        createBoxAll.childNodes.forEach(items => {
            items.style.position = 'absolute';
            items.style.opacity = 0;
        });
    }

    fade(num_4, createBoxAll) {
        for(let i = 0; i < num_4; i++) {
            createBoxAll.childNodes[i].style.opacity = 0;
        }
    }
}
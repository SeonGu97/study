'use strict';

export default class Slider_2 {
    constructor(num_2, createPrevBtnAll, createNextBtnAll, createContainerAll) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

        // counter
        this.counter = 1;

        // resize()
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        
        // item()
        this.item(num_2, this.createBoxAll[1]);

        // radio()
        this.radio(createContainerAll, num_2);

        // prev btn event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter == 0) return;
            
            // counter--;
            this.counter--;

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'none';

            // radio checked
            if(this.counter == 0) {
                this.createRadioBox.childNodes[num_2 - 3].checked = true;
            }else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            // trans()
            this.trans();
        }, false);

        // next btn event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter == num_2 - 1) return;

            // counter++
            this.counter++;

            // pointer event
            createNextBtnAll.style.pointerEvents = 'none';

            // radio checked
            if(this.counter == num_2 - 1) {
                this.createRadioBox.childNodes[0].checked = true
            }else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }
            
            // trans()
            this.trans();
        }, false);

        // box event
        this.createBoxAll[1].addEventListener('transitionend', () => {
            // min
            if(this.counter == 0) {
                this.createBoxAll[1].style.transition = 'none';
                this.counter = num_2 - 2;
                this.createBoxAll[1].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            // max
            if(this.counter == num_2 - 1) {
                this.createBoxAll[1].style.transition = 'none';
                this.counter = 1;
                this.createBoxAll[1].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'auto';
            createNextBtnAll.style.pointerEvents = 'auto';

            // reset active
            for(let i = 0; i < num_2; i++) {
                this.createBoxAll[1].childNodes[i].style.background = 'rgba(255, 255, 255, 0.2)';
            }

            // active
            this.createBoxAll[1].childNodes[this.counter].style.background = 'linear-gradient(0deg,#ffe0b2 20%,#fff3e0)';
        }, false);

        // radios event
        this.createRadioBox.childNodes.forEach( radios => {
            radios.addEventListener('click', e => {
                this.counter = e.target.value;

                this.createBoxAll[1].style.transition = '0.4s ease-in-out';
                this.createBoxAll[1].style.transform = `translateX(${-this.width * this.counter}px)`;
            }, false);
        });
    }

    // resize
    resize() {
        // gap
        let gap = 20;

        // width
        this.width = this.createBoxAll[1].clientWidth + gap;
        
        // first child skip
        this.createBoxAll[1].style.transition = 'none';
        this.createBoxAll[1].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    item(num_2, createBoxAll) {
        for(let i = 0; i < num_2; i++) {
            // create item
            this.createItem = document.createElement('li');
            this.createItem.setAttribute('class', 'item');

            // add to item
            createBoxAll.appendChild(this.createItem);

            // create text
            this.createText = document.createElement('span');
            this.createText.setAttribute('class', 'text  t_2');

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
        this.createTextAll = document.querySelectorAll('.t_2');

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[num_2 - 2].innerText;

        // last child inner text
        this.createTextAll[num_2 - 1].innerText = this.createTextAll[1].innerText;

        // active
        createBoxAll.childNodes[1].style.background = 'linear-gradient(0deg,#ffe0b2 20%,#fff3e0)';
    }

    // trans
    trans() {
        // transform
        this.createBoxAll[1].style.transition = '0.4s ease-in-out';
        this.createBoxAll[1].style.transitionDuration = '0.5s'
        this.createBoxAll[1].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // radio
    radio(createContainerAll, num_2) {
        // create radio-box
        this.createSubContainer = document.createElement('div');
        this.createSubContainer.setAttribute('class', 'sub-container');

        // add to radio box
        createContainerAll.appendChild(this.createSubContainer);

        // create radio-box
        this.createRadioBox = document.createElement('span');
        this.createRadioBox.setAttribute('class', 'radio-box');

        // add to radio-box
        this.createSubContainer.appendChild(this.createRadioBox);

        for(let i = 0; i < num_2 - 2; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_1');
            this.createRadio.setAttribute('value', `${i + 1}`);

            // add to radio
            this.createRadioBox.appendChild(this.createRadio);
        }

        // first child checked
        this.createRadioBox.firstChild.checked = true;
    }
}
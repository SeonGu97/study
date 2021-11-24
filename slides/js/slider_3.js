'use strict';

export default class Slider_3 {
    constructor(num_3, createPrevBtnAll, createNextBtnAll, createContainerAll, min, max) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

        // resize
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

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

        // counter
        this.counter = 1;

        // loop()
        this.loop(num_3, this.createBoxAll[2], this.createRadioBox);

        // first radio checked
        this.createRadioBox.firstChild.checked = true;

        // MPB()
        this.MPB(this.createSubContainer);

        // first child skip
        this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;

        // first child active
        this.createBoxAll[2].childNodes[this.counter].style.background = 'linear-gradient(0deg,#fff59d 20%,#fff9c4)';

        // minus btn event
        this.createMinusBtn.addEventListener('click', () => {
            // min
            if(num_3 == min) return;

            // num_3 --
            num_3--;
            
            // remove()
            this.remove(this.createBoxAll[2], this.createRadioBox);

            // innerText()
            this.innerText(num_3);
        }, false);

        // plus btn event
        this.createPlusBtn.addEventListener('click', () => {
            // max
            if(num_3 == max) return;

            // num_3 ++
            num_3++;

            // item()
            this.item(this.createBoxAll[2]);
            this.radio(this.createBoxAll[2], this.createRadioBox);

            // innerText()
            this.innerText(num_3);
        }, false);

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
                this.createRadioBox.childNodes[num_3 - 3].checked = true;
            }else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            // transform()
            this.transform(this.createBoxAll[2]);
        }, false);

        // next btn event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter == num_3 - 1) return;

            // counter++
            this.counter++;

            // pointer event
            createNextBtnAll.style.pointerEvents = 'none';

            // radio checked
            if(this.counter == num_3 - 1) {
                this.createRadioBox.childNodes[0].checked = true
            }else {
                this.createRadioBox.childNodes[this.counter - 1].checked = true;
            }

            // transform()
            this.transform(this.createBoxAll[2]);
        }, false);

        // box event
        this.createBoxAll[2].addEventListener('transitionend', () => {
            // min
            if(this.counter == 0) {
                this.createBoxAll[2].style.transition = 'none';
                this.counter = num_3 - 2;
                this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            // max
            if(this.counter == num_3 - 1) {
                this.createBoxAll[2].style.transition = 'none';
                this.counter = 1;
                this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
            }

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'auto';
            createNextBtnAll.style.pointerEvents = 'auto';

            // reset active
            for(let i = 0; i < num_3; i++) {
                this.createBoxAll[2].childNodes[i].style.background = 'rgba(255, 255, 255, 0.2)';
            }

            // active
            this.createBoxAll[2].childNodes[this.counter].style.background = 'linear-gradient(0deg,#fff59d 20%,#fff9c4)';
        }, false);
        
        // radios
        this.radios(this.createBoxAll[2], this.createRadioBox);
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
        this.createText.setAttribute('class', 'text t_3');

        // add to text
        this.createItem.appendChild(this.createText);
    }

    // radio 
    radio(createBoxAll, createRadioBox) {
        // create radio
        this.createRadio = document.createElement('input');
        this.createRadio.setAttribute('class', 'radio_2');
        this.createRadio.setAttribute('type', 'radio');
        this.createRadio.setAttribute('name', 'radio_2');
        
        // add to radio
        createRadioBox.appendChild(this.createRadio);

        // radios()
        this.radios(createBoxAll, createRadioBox);
    }

    // loop
    loop(value, createBoxAll, createRadioBox) {
        // create item
        for(let i = 0; i < value; i++) {
            this.item(createBoxAll);
        }

        // create radio
        for(let i = 0; i < value - 2; i++) {
            this.radio(createBoxAll, createRadioBox);
        }

        // innerText()
        this.innerText(value);
    }

    // innerText
    innerText(value) {
        // select all
        this.createTextAll = document.querySelectorAll('.t_3');
        this.createRadioAll = document.querySelectorAll('.radio_2');

        // inner text
        for(let i = 0; i < value; i++) {
            this.createTextAll[i].innerText = [i];

            // +0
            if(this.createTextAll[i].textContent < 10) {
                this.createTextAll[i].innerText = 0 + [i];
            }
        }

        // inner value
        for(let i = 0; i < value - 2; i++) {
            this.createRadioAll[i].value = [i + 1];
        }

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[value - 2].innerText;

        // last child inner text
        this.createTextAll[value - 1].innerText = this.createTextAll[1].innerText;
    }

    // resize
    resize() {
        // gap
        let gap = 20;

        // width
        this.width = this.createBoxAll[2].clientWidth + gap;
        
        // first child skip
        this.createBoxAll[2].style.transition = 'none';
        this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // MPB
    MPB(createSubContainer) {
        // create MPB-box
        this.createMPBbox = document.createElement('span');
        this.createMPBbox.setAttribute('class', 'MPB-box');

        // add to MPB-box
        createSubContainer.appendChild(this.createMPBbox);

        // create minus btn
        this.createMinusBtn = document.createElement('button');
        this.createMinusBtn.setAttribute('class', 'minus');

        // add to minus btn
        this.createMPBbox.appendChild(this.createMinusBtn);

        // create plus btn
        this.createPlusBtn = document.createElement('button');
        this.createPlusBtn.setAttribute('class', 'plus');

        // add to plus btn
        this.createMPBbox.appendChild(this.createPlusBtn);
    }

    // remove
    remove(createBoxAll, createRadioBox) {
        // create item
        this.createItem = document.createElement('li');

        // remove to item
        createBoxAll.removeChild(createBoxAll.lastChild);

        // create radio
        this.createRadio = document.createElement('input');

        // remove to radio
        createRadioBox.removeChild(createRadioBox.lastChild);

        // first child checked
        createRadioBox.firstChild.checked = true;

        // reset counter
        this.counter = 1;

        // transform
        createBoxAll.style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // transform
    transform(createBoxAll) {
        // transform
        createBoxAll.style.transition = '0.4s ease-in-out';
        createBoxAll.style.transitionDuration = '0.5s';
        createBoxAll.style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // radios
    radios(createBoxAll, createRadioBoxAll) {
        // radios event
        createRadioBoxAll.childNodes.forEach(radios => {
            radios.addEventListener('click', e => {
                // target
                this.counter = e.target.value;

                // transform
                createBoxAll.style.transition = '0.4s ease-in-out';
                createBoxAll.style.transform = `translateX(${-this.width * this.counter}px)`;
            }, false);
        });
    }
}
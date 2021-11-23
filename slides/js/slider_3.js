'use strict';

export default class Slider_3 {
    constructor(num_3, createPrevBtnAll, createNextBtnAll, createContainerAll, min, max) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');
        console.log(min, max)
        // counter
        this.counter = 1;

        // resize()
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        
        // item()
        this.item(num_3, this.createBoxAll[2]);

        // radio()
        this.radio(createContainerAll, num_3);

        // prev btn event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter == 0) return;
            if(num_3 == min) return;
            
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

            // trans()
            this.trans();
        }, false);

        // next btn event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter == num_3 - 1) return;
            if(num_3 == min) return; 

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
            
            // trans()
            this.trans();
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

        // MPB()
        this.MPB();

        // minus btn event
        this.createMinusBtn.addEventListener('click', () => {
            // min
            if(num_3 == min) return;

            // num_3 --
            num_3--;

            // remove()
            this.remove(num_3, this.createBoxAll[2]);
        }, false);

        // plus btn event
        this.createPlusBtn.addEventListener('click', () => {
            // max
            if(num_3 == max) return;
            
            // num_3 ++
            num_3++;

            // add()
            this.add(num_3, this.createBoxAll[2]);
        }, false);

        // select all
        this.createRadioBoxAll = document.querySelectorAll('.radio-box');

        // transitionend()
        this.transitionend(this.createRadioBoxAll[1]);
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

    // item
    item(num_3, createBoxAll) {
        for(let i = 0; i < num_3; i++) {
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
            
            // inner text
            this.createText.innerText = [i];

             // +0
             if(this.createText.textContent < 10) {
                this.createText.innerText = 0 + [i];
            }
        };

        // select all 
        this.createTextAll = document.querySelectorAll('.t_3');

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[num_3 - 2].innerText;

        // last child inner text
        this.createTextAll[num_3 - 1].innerText = this.createTextAll[1].innerText;

        // active
        createBoxAll.childNodes[1].style.background = 'linear-gradient(0deg,#fff59d 20%,#fff9c4)';
    }

    // trans
    trans() {
        // transform
        this.createBoxAll[2].style.transition = '0.4s ease-in-out';
        this.createBoxAll[2].style.transitionDuration = '0.5s'
        this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // MPB (minus, plus btn)
    MPB() {
        // create MPB-box
        this.createMPBbox = document.createElement('span');
        this.createMPBbox.setAttribute('class', 'MPB-box');

        // add to MPB-box
        this.createSubContainer.appendChild(this.createMPBbox);

        // create minus-btn
        this.createMinusBtn = document.createElement('button');
        this.createMinusBtn.setAttribute('class', 'minus');

        // add to minus-btn
        this.createMPBbox.appendChild(this.createMinusBtn);

        // create plus-btn
        this.createPlusBtn = document.createElement('button');
        this.createPlusBtn.setAttribute('class', 'plus');

        // add to plus-btn
        this.createMPBbox.appendChild(this.createPlusBtn);
    }

    // radio
    radio(createContainerAll, num_3) {
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

        for(let i = 0; i < num_3 - 2; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('value', `${i + 1}`);

            // add to radio
            this.createRadioBox.appendChild(this.createRadio);
        }

        // first child checked
        this.createRadioBox.firstChild.checked = true;
    }

    // remove
    remove(num_3, createBoxAll) {
        // remove item
        createBoxAll.removeChild(createBoxAll.lastChild);

        // select all 
        this.createTextAll = document.querySelectorAll('.t_3');

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[num_3 - 2].innerText;

        // last child inner text
        this.createTextAll[num_3 - 1].innerText = this.createTextAll[1].innerText;
    
        // select all
        this.createRadioBoxAll = document.querySelectorAll('.radio-box');

        // remove radio
        this.createRadioBoxAll[1].removeChild(this.createRadioBoxAll[1].lastChild);

        // first child checked
        this.createRadioBoxAll[1].firstChild.checked = true;

        // reset counter
        this.counter = 1;

        // transform
        this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // add
    add(num_3, createBoxAll) {
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

        // select all 
        this.createTextAll = document.querySelectorAll('.t_3');

        for(let i = 0; i < num_3; i++) {
            this.createTextAll[i].innerText = [i];

            // +0
            if(this.createTextAll[i].textContent < 10) {
                this.createTextAll[i].innerText = 0 + [i];
            }
        }

        // first child inner text
        this.createTextAll[0].innerText = this.createTextAll[num_3 - 2].innerText;

        // last child inner text
        this.createTextAll[num_3 - 1].innerText = this.createTextAll[1].innerText;

        for(let i = 0; i < num_3 - 2; i++) {
            // create radio
            this.createRadio = document.createElement('input');
            this.createRadio.setAttribute('type', 'radio');
            this.createRadio.setAttribute('name', 'radio_2');
            this.createRadio.setAttribute('value', `${i + 1}`);
        }

        // select all
        this.createRadioBoxAll = document.querySelectorAll('.radio-box');

        // add to radio
        this.createRadioBoxAll[1].appendChild(this.createRadio);

        this.transitionend(this.createRadioBoxAll[1]);
    }

    transitionend(createRadioBoxAll) {
        // radios event
        createRadioBoxAll.childNodes.forEach( radios => {
            radios.addEventListener('click', e => {
                this.counter = e.target.value;

                this.createBoxAll[2].style.transition = '0.4s ease-in-out';
                this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
            }, false);
        });
    }
}
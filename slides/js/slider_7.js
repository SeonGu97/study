'use strict';

export default class Slider_7 {
    constructor(num_7, createPrevBtnAll, createNextBtnAll, createContainerAll, createBoxWrapAll) {
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

        // style()
        this.style(createPrevBtnAll, createNextBtnAll, this.createSubContainer, this.createBoxAll[6], this.createRadioBox);

        // loop
        this.loop(num_7, this.createBoxAll[6], this.createRadioBox);

        // firstRadio()
        this.firstRadio(this.createRadioBox);

        // first child style
        this.createBoxAll[6].firstChild.style.background = 'linear-gradient(0deg,#ce93d8 20%,#e1bee7)';

        // counter
        this.counter = 0;

        // prev event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter == 0) return;

            // counter --
            this.counter--;

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'none';
            
            // radio checked      
            this.createRadioBox.childNodes[this.counter].checked = true;

            // reset()
            this.reset(num_7, this.createRadioBox);

            // change()
            this.change(this.createRadioBox);

            this.createBoxAll[6].style.transition = '0.4s ease-in-out';
            this.createBoxAll[6].style.transitionDuration = '0.5s';
            this.createBoxAll[6].style.transform = `translateY(${-this.height * this.counter}px)`;
        }, false);

        // next event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter == num_7 - 1) return;
            
            // counter ++
            this.counter++;

            // pointer event
            createNextBtnAll.style.pointerEvents = 'none';

            // radio checked      
            this.createRadioBox.childNodes[this.counter].checked = true;

            // reset()
            this.reset(num_7, this.createRadioBox);

            // change()
            this.change(this.createRadioBox);

            // transform()
            this.transform(this.createBoxAll[6]);
        }, false);

        // box event
        this.createBoxAll[6].addEventListener('transitionend', () => {
            // pointer event
            createPrevBtnAll.style.pointerEvents = 'auto';
            createNextBtnAll.style.pointerEvents = 'auto';

            // reset active
            for(let i = 0; i < num_7; i++) {
                this.createBoxAll[6].childNodes[i].style.background = 'rgba(255, 255, 255, 0.2)';
            }

            // active
            this.createBoxAll[6].childNodes[this.counter].style.background = 'linear-gradient(0deg,#ce93d8 20%,#e1bee7)';
        }, false);

        // radios()
        this.radios(num_7, this.createRadioBox);

        // createBoxWrapAll event
        createBoxWrapAll.addEventListener('mouseenter', () => {
            // scroll()
            this.scroll();
        }, false);
    }

    // style
    style(createPrevBtnAll, createNextBtnAll, createSubContainer, createBoxAll, createRadioBox) {
        // prev btn style
        createPrevBtnAll.style.transform = 'translateY(0%)';
        createPrevBtnAll.style.top = '0.5rem';
        createPrevBtnAll.style.left = '47.5%';
        createPrevBtnAll.style.transform = 'translateX(-50%)';
        createPrevBtnAll.style.transform = 'rotate(0.25turn)';

        // next btn style
        createNextBtnAll.style.top = 'auto';
        createNextBtnAll.style.transform = 'translateY(0%)';
        createNextBtnAll.style.bottom = '0.5rem';
        createNextBtnAll.style.right = '47.5%';
        createNextBtnAll.style.transform = 'translateX(50%)';
        createNextBtnAll.style.transform = 'rotate(0.25turn)';

        // createSubContainer style
        createSubContainer.style.width = '1.5rem';
        createSubContainer.style.height = '100%';
        createSubContainer.style.top = '0px';
        createSubContainer.style.right = '1.5rem';

        // createBoxAll style
        createBoxAll.style.flexDirection = 'column';

        // createRadioBox style
        createRadioBox.style.flexDirection = 'column';
    }

    // item
    item(createBoxAll) {
        // create item
        this.createItem = document.createElement('li');
        this.createItem.setAttribute('class', 'item');

        // item style
        this.createItem.style.marginRight = '0px';
        this.createItem.style.marginBottom = '20px';

        // add to item
        createBoxAll.appendChild(this.createItem);

        // create text
        this.createText = document.createElement('span');
        this.createText.setAttribute('class', 'text t_7');

        // add to text
        this.createItem.appendChild(this.createText);
    }

    // radio
    radio(createRadioBox) {
        // create radio
        this.createRadio = document.createElement('input');
        this.createRadio.setAttribute('class', 'radio_5');
        this.createRadio.setAttribute('type', 'radio');
        this.createRadio.setAttribute('name', 'radio_5');

        this.createRadio.style.margin = '5px 0px';

        // add to radio
        createRadioBox.appendChild(this.createRadio);
    }

    // loop
    loop(num_7, createBoxAll, createRadioBox) {
        // create item
        for(let i = 0; i < num_7; i++) {
            this.item(createBoxAll);
            this.radio(createRadioBox);
        }

        // innerText()
        this.innerText(num_7);
    }

    // inner text
    innerText(value) {
        // select all
        this.createTextAll = document.querySelectorAll('.t_7');

        // items inner text
        for(let i = 0; i < value; i++) {
            // inner text
            this.createTextAll[i].innerText = [i + 1];

            // +0
            if(this.createTextAll[i].innerText < 10) {
                this.createTextAll[i].innerText = 0 + [i + 1];
            }
        }
    }

    // resize
    resize() {
        // gap
        let gap = 20;

        // height
        this.height = this.createBoxAll[6].clientHeight + gap;
        
        // first child skip
        this.createBoxAll[6].style.transition = 'none';
        this.createBoxAll[6].style.transform = `translateY(${-this.height * this.counter}px)`;
    }

    // transform
    transform(createBoxAll) {
        createBoxAll.style.transition = '0.4s ease-in-out';
        createBoxAll.style.transitionDuration = '0.5s';
        createBoxAll.style.transform = `translateY(${-this.height * this.counter}px)`;
    }

    // radios
    radios(num_7, createRadioBox) {
        // radios event
        createRadioBox.childNodes.forEach(radios => {
            radios.addEventListener('click', e => {
                // target
                this.counter = e.target.value;

                // reset()
                this.reset(num_7, createRadioBox);

                // radio style change
                e.target.style.width = '11.198px';
                e.target.style.height = '1.2rem';
            }, false);
        });
    }

    // firstRadio
    firstRadio(createRadioBox) {
        createRadioBox.firstChild.checked = true;
        createRadioBox.firstChild.style.width = '11.198px';
        createRadioBox.firstChild.style.height = '1.2rem';
    }

    // change
    change(createRadioBox) {
        createRadioBox.childNodes[this.counter].checked = true;
        createRadioBox.childNodes[this.counter].style.width = '11.198px';
        createRadioBox.childNodes[this.counter].style.height = '1.2rem';
    }

    // reset
    reset(num_7, createRadioBox) {
        // radio style reset
        for(let i = 0; i < num_7; i++) {
            createRadioBox.childNodes[i].style.width = '11.198px';
            createRadioBox.childNodes[i].style.height = '11.198px';
        }
    }

    // scroll
    scroll() {
        
    }
}
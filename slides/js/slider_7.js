'use strict';

export default class Slider_7 {
    constructor(num_7, createPrevBtnAll, createNextBtnAll, createContainerAll, createBoxWrapAll) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

        // counter
        this.counter = 0;

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
        this.style(this.createBoxAll[6], createPrevBtnAll, createNextBtnAll, this.createSubContainer, this.createRadioBox);

        // loop
        this.loop(num_7, this.createBoxAll[6], this.createRadioBox);

        // prev btn event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter == 0) return;

            // pointer event
            createPrevBtnAll.style.pointerEvents = 'none';

            // counter--
            this.counter--;

            // radio checked
            this.createRadioBox.childNodes[this.counter].checked = true;
            
            // transform
            this.transform(this.createBoxAll[6]);

            // reset()
            this.reset(num_7, this.createRadioBox);
        }, false);

        // next btn event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter == num_7 - 1) return;

            // pointer event
            createNextBtnAll.style.pointerEvents = 'none';

            // counter++
            this.counter++;

            // radio checked
            this.createRadioBox.childNodes[this.counter].checked = true;

            // transform
            this.transform(this.createBoxAll[6]);

            // reset()
            this.reset(num_7, this.createRadioBox);
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

        // radios
        this.radios(num_7, this.createRadioBox, this.createBoxAll[6]);
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

    // style
    style(createBoxAll, createPrevBtnAll, createNextBtnAll, createSubContainer, createRadioBox) {
        // createBoxAll style
        createBoxAll.style.flexDirection = 'column';
        
        // prev style
        createPrevBtnAll.style.transform = 'translateY(0%)';
        createPrevBtnAll.style.top = '0.5rem';
        createPrevBtnAll.style.left = '47.5%';
        createPrevBtnAll.style.transform = 'translateX(-50%)';
        createPrevBtnAll.style.transform = 'rotate(0.25turn)';

        // next style
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
        createSubContainer.style.right = '0.5rem';

        // createRadioBox style
        createRadioBox.style.flexDirection = 'column';
    }

    // item
    item(num_7, createBoxAll) {
        // create item
        this.createItem = document.createElement('li');
        this.createItem.setAttribute('class', 'item');

        // create item style
        this.createItem.style.marginRight = '0px';
        this.createItem.style.marginBottom = '20px';

        // add to item
        createBoxAll.appendChild(this.createItem);

        // create text
        this.createText = document.createElement('span');
        this.createText.setAttribute('class', 'text t_7');

        // add to text
        this.createItem.appendChild(this.createText);

        // first child background
        createBoxAll.firstChild.style.background = 'linear-gradient(0deg,#ce93d8 20%,#e1bee7)';
    }

    // loop
    loop(num_7, createBoxAll, createRadioBox) {
        // create item
        for(let i = 0; i < num_7; i++) {
            this.item(num_7, createBoxAll);

            // inner text
            this.createText.innerText = [1 + i];
            if(this.createText.innerText < 10) this.createText.innerText = 0 + [1 + i];
        
            // radio()
            this.radio(num_7, createBoxAll, createRadioBox);

            this.createRadio.setAttribute('value', i);
        }
    }

    // radio 
    radio(num_7, createBoxAll, createRadioBox) {
        // create radio
        this.createRadio = document.createElement('input');
        this.createRadio.setAttribute('class', 'radio_5');
        this.createRadio.setAttribute('type', 'radio');
        this.createRadio.setAttribute('name', 'radio_5');

        // create radio style
        this.createRadio.style.margin = '0px';
        this.createRadio.style.marginBottom = '0.5rem';

        // add to radio
        createRadioBox.appendChild(this.createRadio);

        // first child checked
        createRadioBox.firstChild.checked = true;

        // first child style
        createRadioBox.firstChild.style.width = 'auto';
        createRadioBox.firstChild.style.height = '1.2rem';
    }

    // transform
    transform(createBoxAll) {
        // transform
        createBoxAll.style.transition = '0.4s ease-in-out';
        createBoxAll.style.transitionDuration = '0.5s';
        createBoxAll.style.transform = `translateY(${-this.height * this.counter}px)`;
    }

    // reset
    reset(num_7, createRadioBox) {
        // radio style reset
        for(let i = 0; i < num_7; i++) {
            createRadioBox.childNodes[i].style.width = '11.198px';
            createRadioBox.childNodes[i].style.height = '11.198px';
        }

        // radio style height
        this.createRadioBox.childNodes[this.counter].style.height = '1.2rem';
    }

    // radios
    radios(num_7, createRadioBox, createBoxAll) {
        createRadioBox.childNodes.forEach(radios => {
            radios.addEventListener('click', e => {
                // target
                this.counter = e.target.value;

                // reset()
                this.reset(num_7, createRadioBox);

                // transform
                createBoxAll.style.transition = '0.4s ease-in-out';
                createBoxAll.style.transitionDuration = '0.5s';
                createBoxAll.style.transform = `translateY(${-this.height * this.counter}px)`;
            }, false);
        });
    }
}
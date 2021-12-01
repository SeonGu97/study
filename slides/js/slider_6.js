'use strict';

export default class Slider_6 {
    constructor(num_6, createPrevBtnAll, createNextBtnAll, createContainerAll) {
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

        // create bar
        this.createBar = document.createElement('span');
        this.createBar.setAttribute('class', 'bar');

        // add to bar
        this.createSubContainer.appendChild(this.createBar);

        // create gauge
        this.createGauge = document.createElement('div');
        this.createGauge.setAttribute('class', 'gauge');

        // add to gauge
        this.createBar.appendChild(this.createGauge);

        // gauge style
        this.createGauge.style.width = 100 / num_6 + '%';
        this.createGauge.style.background = 'linear-gradient(0deg,#9fa8da 20%,#c5cae9)';

        // loop()
        this.loop(num_6, this.createBoxAll[5], this.createBar);

        // first child active
        this.createItemsWrapAll = document.querySelectorAll('.items-wrap');
        this.createItemsWrapAll[0].firstChild.style.background = 'linear-gradient(0deg,#9fa8da 20%,#c5cae9)';
        
        // counter
        this.counter = 0;

        // prev event
        createPrevBtnAll.addEventListener('click', () => {
            // min
            if(this.counter <= 0) return;

            // counter --
            this.counter--;

            // transform()
            this.transform(this.createBoxAll[5]);

            // transitionend()
            this.transitionend(this.createBoxAll[5], num_6, this.createItemsWrapAll);
        
            // gauge()
            this.gauge(num_6, this.createGauge);
        }, false);

        // next event
        createNextBtnAll.addEventListener('click', () => {
            // max
            if(this.counter >= num_6 - 1) return;
            
            // counter ++
            this.counter++;

            // transform()
            this.transform(this.createBoxAll[5]);

            // transitionend()
            this.transitionend(this.createBoxAll[5], num_6, this.createItemsWrapAll);
            
            // gauge()
            this.gauge(num_6, this.createGauge);
        }, false);
    }

    // item
    item(num_6, createBoxAll) {
        // create items-wrap
        this.createItemsWrap = document.createElement('div');
        this.createItemsWrap.setAttribute('class', 'items-wrap');

        // add to items-wrap
        createBoxAll.appendChild(this.createItemsWrap);

        for(let i = 0; i < 3; i++) {
            // create items
            this.createItems = document.createElement('li');
            this.createItems.setAttribute('class', 'items');

            // add to items
            this.createItemsWrap.appendChild(this.createItems);

            // create text
            this.createText = document.createElement('span');
            this.createText.setAttribute('class', 'text t_6');

            // add to text
            this.createItems.appendChild(this.createText);
        }
    }

    // loop
    loop(num_6, createBoxAll, createBar) {
        // create item
        for(let i = 0; i < num_6; i++) {
            // item()
            this.item(num_6, createBoxAll);
        }

        // innerText()
        this.innerText(num_6);
    }

    // innerText
    innerText(value) {
        // select all
        this.createTextAll = document.querySelectorAll('.t_6');

        // items inner text
        for(let i = 0; i < value * 3; i++) {
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

        // width
        this.width = this.createBoxAll[2].clientWidth + gap;
        
        // first child skip
        this.createBoxAll[2].style.transition = 'none';
        this.createBoxAll[2].style.transform = `translateX(${-this.width * this.counter}px)`;
    }

    // transform
    transform(createBoxAll) {
        // transform
        createBoxAll.style.transition = '0.4s ease-in-out';
        createBoxAll.style.transitionDuration = '0.5s';
        createBoxAll.style.transform = `translateX(${-this.width * this.counter}px)`;
    }
    
    // transitionend
    transitionend(createBoxAll, num_6, createItemsWrapAll) {
        createBoxAll.addEventListener('transitionend', () => {
            // reset active
            for(let i = 0; i < num_6; i++) {
                createItemsWrapAll[i].firstChild.style.background = 'rgba(255, 255, 255, 0.2)';
            }
            
            // active
            createItemsWrapAll[this.counter].firstChild.style.background = 'linear-gradient(0deg,#9fa8da 20%,#c5cae9)';
        }, false);
    }

    // gauge
    gauge(num_6, createGauge) {
        // gauge style
        createGauge.style.width = 100 / num_6 * (this.counter + 1) + '%';
        createGauge.style.background = 'linear-gradient(0deg,#9fa8da 20%,#c5cae9)';
    }
}
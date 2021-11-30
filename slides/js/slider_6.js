'use strict';

export default class Slider_6 {
    constructor(num_6, createPrevBtnAll, createNextBtnAll, createContainerAll) {
        // select all
        this.createBoxAll = document.querySelectorAll('.box');

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

        // loop()
        this.loop(num_6, this.createBoxAll[5], this.createBar);

        // first child active
        this.createItemsWrapAll = document.querySelectorAll('.items-wrap');
        this.createItemsWrapAll[0].firstChild.style.background = 'linear-gradient(0deg,#9fa8da 20%,#c5cae9)';
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
        for(let i = 1; i < num_6; i++) {
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
            this.createTextAll[i].innerText = [i + 1];

            // +0
            if(this.createTextAll[i].textContent < 10) {
                this.createTextAll[i].innerText = 0 + [i + 1];
            }
        }
    }
}
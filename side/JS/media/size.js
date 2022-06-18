'ust strict';

import Active from "./active.js";
import Device from "./device.js";

export default class Size {
    constructor(Create, _media) {
        // create
        const _size = new Create('size', 'div', 'class', 'size', _media);

        // component
        const device = new Device(Create, _size);
        const active = new Active(Create, _size);

        // event
        _size.addEventListener('click', this.event, false);
    }

    event(e) {
        // target
        const target = e.target;

        // var
        const size = document.querySelector('.size');
        const active = document.querySelector('.active');
        const container = document.querySelector('.container');

        // devices
        const device = size.childNodes;

        // device length
        const num = size.childNodes.length - 1;

        // target element width
        const width = target.getBoundingClientRect().width;

        // add index, change left px
        for(let i = 0; i < num; i++) {
            device[i].index = i;
            
            active.style.left = `${width * target.index + 4}px`;

            device[i].classList.remove('paint');
        }

        target.classList.add('paint');

        // classlist replace
        const array = ['desktop', 'tablet', 'mobile'];
        container.classList.replace(container.classList[1], array[target.index]);
    }
}
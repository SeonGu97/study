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
        }

        // classlist replace
        const array = ['desktop', 'tablet', 'mobile'];
        active.classList.replace(active.classList[1], array[target.index]);
    }
}
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
        const target = e.target;

        const size = document.querySelector('.size');
        const active = document.querySelector('.active');

        const device = size.childNodes;
        const num = size.childNodes.length - 1;

        const width = target.getBoundingClientRect().width;

        for(let i = 0; i < num; i++) {
            device[i].index = i;
            
            active.style.left = `${width * target.index + 4}px`;
        }
    }
}
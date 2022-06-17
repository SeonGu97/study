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

        let x = target.getBoundingClientRect().left;

        let size = target.parentElement.getBoundingClientRect().width;
        let half = target.parentElement.getBoundingClientRect().width / 2;
        let windowX = (window.innerWidth / 2) - (size + half);
        
        const active = document.querySelector('.active');
        active.style.left = `${x - size - windowX}px`;
    }
}
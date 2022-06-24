'use strict';

import Device_icons from "./device-icons.js";
import Cover from "./cover.js";

export default class Device {
    constructor(Create, _header) {
        const _device = new Create('device', 'div', 'class', 'device', _header);

        const device_icons = new Device_icons(Create, _device);
        const cover = new Cover(Create, _device);

        _device.firstChild.firstChild.classList.add('paint');

        _device.addEventListener('click', this.deviceEvent, false);
    }

    deviceEvent(e) {
        let target = e.target;

        const device_icons = document.querySelectorAll('.device-icons > i');

        if(target.classList[0] == 'fa-solid') {
            for(let i = 0; i < 3; i++) {
                device_icons[i].index = i;
            }
    
            const cover = document.querySelector('.cover');
            const width = cover.getBoundingClientRect().width;
    
            cover.style.left = `${width * target.index}px`;
    
            device_icons.forEach(element => {
                element.classList.remove('paint');
            });
    
            target.classList.add('paint');
        }
    }
}
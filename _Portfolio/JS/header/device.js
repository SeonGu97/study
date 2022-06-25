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

        window.addEventListener('resize', this.resize.bind(this), false);

        this.timer;
        this.delay = 500;

        this.resize(this.timer, this.delay);
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

            const class_array = ['pc', 'tablet', 'mobile'];

            const main = document.querySelector('main');
            console.log(main.classList.replace(main.classList[0], class_array[target.index]));
        }
    }

    resize(timer, delay) {
        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            let pc = window.matchMedia('(max-width: 1200px)').matches;
            let tablet = window.matchMedia('(max-width: 768px)').matches;
            let mobile = window.matchMedia('(max-width: 420px)').matches;

            const class_array = ['pc', 'tablet', 'mobile'];

            const main = document.querySelector('main');

            if(pc) {
                main.classList.replace(main.classList[0], class_array[0]);
            }else {
                main.classList[0] == class_array[1] ? 
                main.classList.replace(main.classList[0], class_array[0]) :
                '';
            }

            if(tablet) {
                main.classList.replace(main.classList[0], class_array[1]);
            }

            if(mobile) {
                main.classList.replace(main.classList[0], class_array[2]);
            }
        }, this.delay);

        return this.timer;
    }
}
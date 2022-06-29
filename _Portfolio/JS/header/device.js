'use strict';

export default class Device {
    constructor(Create, screen) {
        for(let i = 0; i < 3; i++) {
            const device = new Create('device', 'input', 'class', 'device', screen);
            device.setAttribute('type', 'radio');
            device.setAttribute('name', 'radios');

            const _device = document.querySelectorAll('.device');
            _device[0].checked = true;

            const icons = ['<i class="fa-solid fa-display"></i>', '<i class="fa-solid fa-tablet-screen-button"></i>', '<i class="fa-solid fa-mobile-screen-button"></i>'];
        }
    }
}
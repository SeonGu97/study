'use strict';

export default class Device_icons {
    constructor(Create, _device) {
        const num = 3;

        const icons = ['<i class="fa-solid fa-display"></i>', '<i class="fa-solid fa-tablet-screen-button"></i>', '<i class="fa-solid fa-mobile-screen-button"></i>'];

        for(let i = 0; i < num; i++) {
            const _device_icons = new Create('device_icons', 'span', 'class', 'device-icons', _device);

            _device_icons.innerHTML = icons[i];
        }
    }
}
'use strict';

export default class Device_icons {
    constructor(Create, _device) {
        const num = 3;

        const icons = [];

        for(let i = 0; i < num; i++) {
            const _device_icons = new Create('device_icons', 'span', 'class', 'device-icons', _device);
        }
    }
}
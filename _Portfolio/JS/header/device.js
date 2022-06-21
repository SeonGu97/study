'use strict';

import Device_icons from "./device-icons.js";

export default class Device {
    constructor(Create, _header) {
        const _device = new Create('device', 'div', 'class', 'device', _header);

        const device_icons = new Device_icons(Create, _device);
    }
}
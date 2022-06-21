'use strict';

import Device from "./device.js";

export default class Header {
    constructor(Create, _screen) {
        const _header = new Create('header', 'header', '', '', _screen);

        const _device = new Device(Create, _header);
    }
}
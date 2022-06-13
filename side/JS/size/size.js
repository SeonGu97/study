'use strict';

import Device from "./device.js";

export default class Size {
    constructor(Create, _wrap) {
        // create
        const _size = new Create('size', 'section', 'class', 'size basics hide-y', _wrap);

        // component
        const device = new Device(Create, _size);
    }
}
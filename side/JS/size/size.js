'use strict';

import Device from "./device.js";

export default class Size {
    constructor(Create, _app) {
        // create
        const _size = new Create('size', 'section', 'class', 'size basics hide-y', _app);

        // component
        const device = new Device(Create, _size);
    }
}
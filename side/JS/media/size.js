'ust strict';

import Device from "./device.js";

export default class Size {
    constructor(Create, _media) {
        // create
        const _size = new Create('size', 'div', 'class', 'size', _media);

        // component
        const device = new Device(Create, _size);
    }
}
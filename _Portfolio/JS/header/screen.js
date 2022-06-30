'use strict';

import Device from "./device.js";

export default class Screen {
    constructor(Create, header) {
        const screen = new Create('screen', 'section', 'class', 'screen', header);

        const device = new Device(Create, screen);
    }
}
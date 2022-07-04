'use strict';

import Analog from "../clock/analog.js";

export default class Main {
    constructor(Create, app) {
        const main = new Create('main', 'main', 'class', 'pc', app);

        const analog = new Analog(Create, main);
    }
}
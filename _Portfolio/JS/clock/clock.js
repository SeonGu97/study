'use strict';

import Analog from "./analog.js"
import Digital from "./digital.js";

export default class Clock {
    constructor(Create, aside) {
        const clock = new Create('clock', 'clock', 'class', 'clock', aside);

        const analog = new Analog(Create, clock);
        const digital = new Digital(Create, clock);
    }
}
'use strict';

import Analog from "./analog.js"
import Clock_switch from "./clock_switch.js";
import Digital from "./digital.js";

export default class Clock {
    constructor(Create, aside) {
        const clock = new Create('clock', 'div', 'class', 'clock', aside);

        const analog = new Analog(Create, clock);
        const digital = new Digital(Create, clock);
        const clock_switch = new Clock_switch(Create, clock);
    }
}
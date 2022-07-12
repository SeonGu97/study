'use strict';

import Digital from "./digital.js";
import Analog from "./analog.js"
import Clock_switch from "./clock_switch.js";

export default class Clock {
    constructor(Create, aside) {
        const clock = new Create('clock', 'div', 'class', 'clock', aside);

        const digital = new Digital(Create, clock);
        const analog = new Analog(Create, clock);
        const clock_switch = new Clock_switch(Create, clock);
    }
}
'use strict';

export default class Clock_switch {
    constructor(Create, clock) {
        const clock_switch = new Create('clock_switch', 'div', 'class', 'clock_switch', clock);
    
        for(let i = 0; i < 2; i++) {
            const _switch = new Create('_switch', 'div', 'class', 'switch', clock_switch);
        
            const array = ['']
        }

        const cover = new Create('cover', 'div', 'class', 'cover', clock_switch);
    }
}
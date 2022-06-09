'use strict';

export default class Clock {
    constructor(Create, _box) {
        const _clock = new Create('clock', 'div', 'class', 'clock basics hide', _box);
    }
}
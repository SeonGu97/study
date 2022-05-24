'use strict';

export default class Motto {
    constructor(Creator, main) {
        // create
        this.motto = new Creator('motto', 'div', 'class', 'motto', '" 빨리가는 유일한 방법은 제대로 가는 것이다 "', 1, main, false, '', '');
    }
}

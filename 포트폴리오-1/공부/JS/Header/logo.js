'use strict';

export default class Logo {
    constructor(Creator, nav) {
        // create
        this.logo = new Creator('logo', 'div', 'class', 'logo', 'Portfolio', 1, nav, false, '', '');
    }
}


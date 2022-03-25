'use strict';

import Bar from "./bar.js";

export default class Nav {
    constructor(creator) {
        // element
        this.header = document.querySelector('header');

        // create
        creator.basket('nav', 'nav', this.header, 1, [''], [''], '');

        // component
        this.bar = new Bar(creator);
    }
}
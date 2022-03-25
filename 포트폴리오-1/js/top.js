'use strict';

import Gallery from "./gallery.js";

export default class Top {
    constructor(creator) {
        // element
        this.main = document.querySelector('main');

        // create
        creator.basket('top', 'section', this.main, 1, ['class'], ['top'], '');

        // component
        this.gallery = new Gallery(creator);
    }
}
'use strict';

import Picture from "./picture.js";

export default class Gallery {
    constructor(creator) {
        // element
        this.top = document.querySelector('.top');

        // create
        creator.basket('gallery', 'section', this.top, 1, ['class'], ['gallery'], '');
    
        // component
        this.picture = new Picture(creator);
    }
}
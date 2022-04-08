'use strict';

import Picture from "./picture.js";

export default class Gallery {
    constructor(creator, top) {
        // create
        creator.basket('gallery', 'div', top, 1, ['class'], ['gallery pad'], '');

        // component
        this.picture = new Picture(creator);
    }
}
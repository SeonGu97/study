'use strict';

import Box from "./box.js";

export default class Project {
    constructor(creator) {
        // element
        this.middle = document.querySelector('.middle');

        // create
        creator.basket('project', 'div', this.middle, 1, ['class'], ['project'], '');
    
        // component
        this.box = new Box(creator);
    }
}
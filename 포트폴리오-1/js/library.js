'use strict';

import Display_stand_1 from "./display-stand-1.js";

export default class Library {
    constructor(creator, aside) {
        // create
        creator.basket('library', 'div', aside, 1, ['class'], ['library'], '');

        // element
        this.library = creator.name;

        // component
        this.display_stand_1 = new Display_stand_1(creator, this.library);
    }
}
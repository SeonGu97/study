'use strict';

import Title from "./title.js";

export default class Board {
    constructor(create) {
        // main
        this.main = document.querySelector('main');
        
        // create board
        create.launcher('board', 'section', ['class'], ['board'], [''], this.main, 1);
        
        // component
        this.title = new Title(create);
    }
}
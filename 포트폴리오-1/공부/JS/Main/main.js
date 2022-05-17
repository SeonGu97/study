'use strict';

import Container from "./container.js";

export default class Main {
    constructor(Creator, wrap) {
        // create
        this.main = new Creator('main', 'main', '', '', '', 1, wrap, false, '', '');
    
        // component
        this.container = new Container(Creator, this.main.name);
    }
}


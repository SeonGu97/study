'use strict';

import Nav from "./nav.js";

export default class Header {
    constructor(Creator, wrap) {
        // create
        this.header = new Creator('header', 'header', '', '', '', 1, wrap, false, '', '');
    
        // component
        this.nav = new Nav(Creator, this.header.name);
    }
}


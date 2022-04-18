'use strict';

import Nav from "./nav.js";
import Screen from "./screen.js";

export default class Header {
    constructor(creator, wrap) {
        // create
        creator.basket('header', 'header', wrap, 1, [''], [''], '');
        
        // element
        this.header = creator.name;
        
        // component
        this.nav = new Nav(creator, this.header);
        this.screen = new Screen(creator, this.header);
    }
}
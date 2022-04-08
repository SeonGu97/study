'use strict';

import Nav from "./nav.js";

export default class Header {
    constructor(creator, wrap) {
        // create
        creator.basket('header', 'header', wrap, 1, [''], [''], '');

        // component
        this.nav = new Nav(creator);
    }
}
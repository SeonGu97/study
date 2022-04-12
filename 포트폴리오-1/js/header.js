'use strict';

import Menu from "./menu.js";
import Screen from "./screen.js";

export default class Header {
    constructor(creator, app) {
        // creator
        creator.basket('header', 'header', app, 1, [''], [''], '');

        // element
        this.header = document.querySelector('header');

        // components
        this.menu = new Menu(creator, this.header);
        this.screen = new Screen(creator, this.header);
    }
}
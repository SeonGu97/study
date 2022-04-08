'use strict';

import Menu from "./menu.js";

export default class Nav {
    constructor(creator) {
        // create
        creator.basket('nav', 'nav', creator.name, 1, [''], [''], '');

        // component
        this.menu = new Menu(creator);
    }
}
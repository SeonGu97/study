'use strict';

import Menu from "./menu.js";
import Logo from "./logo.js";

export default class Nav {
    constructor(creator) {
        // create
        creator.basket('nav', 'nav', creator.name, 1, [''], [''], '');

        // element
        this.nav = creator.name;

        // components
        this.menu = new Menu(creator, this.nav);
        this.logo = new Logo(creator, this.nav);
    }
}
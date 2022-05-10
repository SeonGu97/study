'use strict';

import Menu from "./menu.js";

export default class Nav {
    constructor(Creator, aside) {
        // create
        this.nav = new Creator('nav', 'nav', '', '', '', 1, aside, false, '', '');
    
        // component
        this.menu = new Menu(Creator, this.nav.name);
    }
}

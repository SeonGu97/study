'use strict';

import Menu from './menu.js';
import Logo from './logo.js';

export default class Nav {
    constructor(Creator, header) {
        // create
        this.nav = new Creator('nav', 'nav', '', '', '', 1, header, false, '', '');
    
        // component
        this.menu = new Menu(Creator, this.nav.name);
        this.logo = new Logo(Creator, this.nav.name);
    }
}

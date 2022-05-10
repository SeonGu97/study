'use strict';

import Nav from "./nav.js";

export default class Aside {
    constructor(Creator, aside) {
        // create
        this.aside = new Creator('aside', 'aside', '', '', '', 1, aside, false, '', '');
        
        // component
        this.nav = new Nav(Creator, this.aside.name);
    }
}


'use strict';

import Nav from "../Header/nav.js";

export default class Clone_aside {
    constructor(Creator, wrap) {
        // create
        this.clone_aside = new Creator('clone_aside', 'div', 'class', 'clone-aside', '', 1, wrap, false, '', '');
    
        // component
        this.nav = new Nav(Creator, this.clone_aside.name);

        this.aside = document.querySelector('aside');

        this.clone_aside.name.appendChild(this.aside.cloneNode(true));
    }
}


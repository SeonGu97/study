'use strict';

import Library from './library.js';

export default class Aside {
    constructor(Creator, wrap) {
        // create
        this.aside = new Creator('aside', 'aside', '', '', '', 1, wrap, false, '', '');
    
        // component
        this.library = new Library(Creator, this.aside.name);
    }
}


'use strict';

import Library from "./library.js";

export default class Aside {
    constructor(Create, _wrap) {
        const _aside = new Create('aside', 'aside', 'class', 'aside', _wrap);
        
        // component
        const library = new Library(Create, _aside);
    }
}
'use strict';
import Library from "./library.js";

export default class Aside {
    constructor(create, wrap) {
        // create aside
        create.launcher('aside', 'aside', ['class'], ['aside'], [''], wrap, 1);
    
        // component
        this.library = new Library(create);
    }
}
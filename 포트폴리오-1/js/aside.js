'use strict';

import Copyright from "./copyright.js";
import Library from "./library.js";


export default class Aside {
    constructor(creator, app) {
        // create
        creator.basket('aside', 'aside', app, 1, [''], [''], '');

        // component
        this.library = new Library(creator);
        this.copyright = new Copyright(creator);
    }
}
'use strict'

import Library from "./library.js";

export default class Aside {
    constructor(CE, wrap) {
        CE.generator(
            'aside',
            'aside',
            ['class'],
            ['aside common'],
            [''],
            wrap,
            1
        );

        // component
        this.library = new Library(CE);
    }
}
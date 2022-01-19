'use strict';

import Library from "./library.js";

export default class Aside {
    constructor(This) {
        This.Getter('aside', 'aside', 1, ['class'], ['aside common'], [''], This.app);

        // components
        this.library = new Library(This);
    }
}
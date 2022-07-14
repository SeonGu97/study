'use strict';

import Bookcase from "./bookcase.js";

export default class Library {
    constructor(Create, aside) {
        const library = new Create('library', 'ul', 'class', 'library', aside);

        const bookcase = new Bookcase(Create, library);
    }
}
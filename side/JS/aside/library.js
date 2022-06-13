'use strict';

import Book from "./book.js";

export default class Library {
    constructor(Create, _aside) {
        const _library = new Create('library', 'ul', 'class', 'library basics', _aside);

        // component
        const book = new Book(Create, _library);
    }
}
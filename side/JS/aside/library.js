'use strict';

import Book from "./book.js";

export default class Library {
    constructor(Create, _aside) {
        const _library = new Create('library', 'ul', 'class', 'library basics hide-s-y un-transparent', _aside);

        // component
        const book = new Book(Create, _library);
    }
}
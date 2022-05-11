'use strict';

import Book from "./book.js";

export default class Library {
    constructor(Creator, aside) {
        // create
        this.library = new Creator('library', 'ul', 'class', 'library', '', 1, aside, false, '', '');
    
        // component
        this.book = new Book(Creator, aside);
    }
}
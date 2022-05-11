'use strict';

export default class Book {
    constructor(Creator, library) {
        // create
        this.book = new Creator('book', 'li', 'class', 'book', '', 3, library, false, '', '');
    }
}
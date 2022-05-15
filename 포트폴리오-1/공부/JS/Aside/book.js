'use strict';

export default class Book {
    constructor(Creator, library) {
        // create
        this.book = new Creator('book', 'li', 'class', 'book pointer', '', 2, library, false, '', '');
    }
}
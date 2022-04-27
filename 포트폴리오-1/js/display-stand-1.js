'use strict';

import Book_1 from "./book_1.js";

export default class Display_stand_1 {
    constructor(creator, library) {
        // create
        creator.basket('display_stand_1', 'ul', library, 1, ['class'], ['display-stand-1'], '');
    
        // component
        this.book_1 = new Book_1(creator);
    }
}
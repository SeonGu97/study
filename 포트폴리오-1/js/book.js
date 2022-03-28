'use strict';

import Word from "./word.js";

export default class Book {
    constructor(creator) {
        // element
        this.library = document.querySelector('.library');

        // create
        creator.basket('book', 'div', this.library, 1, ['class'], ['book'], '');

        // component
        this.word = new Word(creator);
    }
}
'use strict';

export default class Book {
    constructor(creator) {
        // element
        this.library = document.querySelector('.library');

        // create
        creator.basket('book', 'li', this.library, 3, ['class'], ['book'], 'content');
    }
}
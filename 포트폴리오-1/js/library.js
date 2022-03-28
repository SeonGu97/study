'use strict';

import Backward from "./backward.js";
import Touch from "./touch.js";
import Book from "./book.js";

export default class Library {
    constructor(creator) {
        // element
        this.aside = document.querySelector('aside');

        // create
        creator.basket('library', 'ul', this.aside, 1, ['class'], ['library'], '', true, 'transitionend', this.libraryEvent);

        // component
        this.backward = new Backward(creator);
        this.touch = new Touch(creator);
        this.book = new Book(creator);
    }

    libraryEvent() {
        this.library = document.querySelector('.library');
        this.library.classList.remove('active');
    }
}
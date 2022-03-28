'use strict';

import Letter from "./letter.js";

export default class Word {
    constructor(creator) {
        // element
        this.book = document.querySelector('.book');

        // create
        creator.basket('word', 'li', this.book, 3, ['class'], ['word'], '');

        // component
        this.letter = new Letter(creator);
    }
}
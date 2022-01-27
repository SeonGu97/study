'use strict';

export default class Library {
    constructor(create) {
        // select app
        this.aside = document.querySelector('.aside');

        // create library
        create.launcher('library', 'ul', ['class'], ['library'], [''], this.aside, 1);
    }
}
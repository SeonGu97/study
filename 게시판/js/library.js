'use strict';

export default class Library {
    constructor(CE) {
        this.aside = document.querySelector('aside');

        CE.generator(
            'library',
            'ul',
            ['class'],
            ['library'],
            [''],
            this.aside,
            1
        );
    }
}
'use strict';

export default class Library {
    constructor(This) {
        this.aside = document.querySelector('aside');

        This.Getter('library', 'ul', 1, ['class'], ['library'], [''], this.aside);
    }
}
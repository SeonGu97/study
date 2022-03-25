'use strict';

export default class Picture {
    constructor(creator) {
        // element
        this.gallery = document.querySelector('.gallery');

        // create
        creator.basket('picture', 'div', this.gallery, 1, ['class'], ['picture'], '사진');
    }
}
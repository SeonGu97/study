'use strict';

export default class Title {
    constructor(creator) {
        // element
        this.middle = document.querySelector('.middle');

        // create
        creator.basket('title', 'h3', this.middle, 1, ['class'], ['title'], '프로젝트');
    }
}
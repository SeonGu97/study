'use strict';

export default class Title {
    constructor(creator, main, text) {
        // create
        creator.basket('title', 'h3', main, 1, ['class'], ['title basic-pd mg-tb'], text);
    }
}
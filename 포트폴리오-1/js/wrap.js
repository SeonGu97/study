'use strict';

export default class Wrap {
    constructor(creator, app) {
        // creator
        creator.basket('wrap', 'div', app, 1, ['class'], ['wrap'], '');
    }
}
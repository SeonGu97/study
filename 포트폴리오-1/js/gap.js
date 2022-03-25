'use strict';

export default class Gap {
    constructor(creator, app) {
        // create
        creator.basket('gap', 'section', app, 1, ['class'], ['gap'], '');
    }
}
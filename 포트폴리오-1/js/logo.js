'use strict';

export default class Logo {
    constructor(creator, nav) {
        // create
        creator.basket('logo', 'div', nav, 1, ['class'], ['logo'], 'Portfolio');
    }
}
'use strict';

export default class Screen {
    constructor(creator, header) {
        // create
        creator.basket('screen', 'div', header, 1, ['class'], ['screen'], '<i class="bi bi-arrow-bar-left pointer"></i>');
    }
}
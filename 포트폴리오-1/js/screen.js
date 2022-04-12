'use strict';

export default class Screen {
    constructor(creator, header) {
        // creator
        creator.basket('screen', 'div', header, 1, ['class'], ['screen'], '<i class="bi bi-arrow-bar-left pointer"></i>');
    }
}
'use strict';

export default class Anchor {
    constructor(creator) {
        // create
        creator.basket('anchor', 'div', creator.name, 1, ['class'], ['anchor'], '<i class="fas fa-solid fa-anchor"></i>');
    }
}
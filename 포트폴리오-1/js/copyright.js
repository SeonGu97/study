'use strict';

export default class Copyright {
    constructor(creator) {
        // element
        this.library = document.querySelector('.library');

        // create
        creator.basket('copyright', 'span', this.library, 1, ['class'], ['copyright'], '© SeonGu .');
    }
}
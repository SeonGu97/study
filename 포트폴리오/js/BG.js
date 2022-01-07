'use strict';

export default class BG {
    constructor(container) {
        // create BG
        this.BG = document.createElement('div');
        this.BG.setAttribute('class', 'BG');

        // add to BG
        container.appendChild(this.BG);
    }
}
'use strict';

export default class Slide {
    constructor(creator) {
        // create
        creator.basket('slide', 'div', creator.name, 1, ['class'], ['slide'], '', true, 'transitionend', this.slideEvent);
    }

    slideEvent() {
        
    }
}
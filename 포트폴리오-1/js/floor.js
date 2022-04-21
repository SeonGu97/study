'use strict';

export default class Floor {
    constructor(creator, item) {
        // create
        for(let i = 0; i < item.length; i++) {
            creator.basket('floor', 'div', item[i], 1, ['class'], ['floor'], '');
        }
    }
}
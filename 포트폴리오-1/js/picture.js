'use strict';

export default class Picture {
    constructor(creator) {
        // create
        creator.basket('picture', 'img', creator.name, 1, ['class', 'src'], ['picture', '../picture/취업사진1.jpg'], '');
    }
}
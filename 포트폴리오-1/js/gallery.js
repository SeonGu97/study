'ues strict';

import Img from "./img.js";

export default class Gallery {
    constructor(creator, top) {
        // create
        creator.basket('gallery', 'div', top, 1, ['class'], ['gallery'], '');

        // component
        this.img = new Img(creator);
    }
}
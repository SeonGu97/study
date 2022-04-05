'use strict';

import Link from "./link.js";

export default class Bubble {
    constructor(creator, app) {
        // create
        creator.basket('bubble', 'div', app, 1, ['class'], ['bubble'], '');

        // component
        this.link = new Link(creator);
    }
}
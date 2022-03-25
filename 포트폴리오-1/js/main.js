'use strict';

import Top from "./top.js";

export default class Main {
    constructor(creator, app) {
        // create
        creator.basket('main', 'main', app, 1, [''], [''], '');

        // component
        this.top = new Top(creator);
    }
}
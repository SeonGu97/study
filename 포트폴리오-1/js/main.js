'use strict';

import Top from "./top.js";
import Line from "./line.js";
import Middle from "./middle.js";

export default class Main {
    constructor(creator, app) {
        // create
        creator.basket('main', 'main', app, 1, [''], [''], '');

        // components
        this.top = new Top(creator);
        this.line = new Line(creator);
        this.middle = new Middle(creator);
    }
}
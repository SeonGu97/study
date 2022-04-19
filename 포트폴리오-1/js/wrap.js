'use strict';

import Aside from "./aside.js";
import Box from "./box.js";
import Header from "./header.js";
import Main from "./main.js";

export default class Wrap {
    constructor(creator) {
        // create
        creator.basket('wrap', 'div', creator.name, 1, ['class'], ['wrap'], '');

        // element
        this.wrap = creator.name;

        // components
        this.header = new Header(creator, this.wrap);
        this.aside = new Aside(creator, this.wrap);
        this.main = new Main(creator, this.wrap);
        this.box = new Box(creator, this.wrap);
    }
}
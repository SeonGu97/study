'use strict';

import Aside from "./aside.js";
import Header from "./header.js";
import Top from "./top.js";

export default class Wrap {
    constructor(creator, app) {
        // create
        creator.basket('wrap', 'div', app, 1, ['class'], ['wrap'], '');

        // element
        this.wrap = creator.name;

        // components
        this.header = new Header(creator, this.wrap);
        this.top = new Top(creator, this.wrap);
        this.aside = new Aside(creator, this.wrap);
    }
}
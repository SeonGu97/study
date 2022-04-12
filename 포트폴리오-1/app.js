'use strict';

import Creator from "./js/creator.js";
import Aside from "./js/aside.js";
import Header from "./js/header.js";
import Wrap from "./js/wrap.js";

export class App {
    constructor() {
        // component
        this.creator = new Creator();

        // create
        this.creator.basket('app', 'div', document.body, 1, ['id'], ['app'], '');

        // element
        this.app = this.creator.name;

        // components
        this.aside = new Aside(this.creator, this.app);
        this.header = new Header(this.creator, this.app);
        this.wrap = new Wrap(this.creator, this.app);
    }
}

const app = new App();
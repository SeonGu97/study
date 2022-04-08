'use strict';

import Creator from "./js/creator.js";
import Wrap from "./js/wrap.js";

export class App {
    constructor() {
        // component
        this.creator = new Creator();

        // create
        this.creator.basket('app', 'div', document.body, 1, ['id'], ['app'], '');

        // element
        this.app = this.creator.name;

        // component
        this.wrap = new Wrap(this.creator, this.app);
    }
}

const app = new App();
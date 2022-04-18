'use strict';

import Creator from "./js/creator.js";
import Wrap from "./js/wrap.js";
import Resize from "./js/resize.js";

export class App {
    constructor() {
        // component
        this.creator = new Creator();

        // create
        this.creator.basket('app', 'div', document.body, 1, ['id'], ['app'], '');

        // component
        this.wrap = new Wrap(this.creator);

        this.resize = Resize();
    }
}

const app = new App();
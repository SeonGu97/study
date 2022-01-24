'use strict';

import Create_elements from "./create-elements.js";
import Wrap from "./js/wrap.js";
import Storage from "./storage.js";

export default class App {
    constructor() {
        // component
        this.create_elements = new Create_elements();
        // this.generator(variable, element, name, value, innerHTML, parent, number);
        this.create_elements.generator(
            'app',
            'div',
            ['id'],
            ['app'],
            [''],
            document.body,
            1
        );

        // components
        this.wrap = new Wrap(this.create_elements);
        this.storage = new Storage(this.create_elements);
    }
}

const app = new App();
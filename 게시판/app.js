'use strict';

import Aside from "./js/aside.js";

export default class App {
    constructor() {
        // create app
        this.app = document.createElement('div');
        this.app.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.app);

        // components
        this.aside = new Aside(this.app);
    }
}

const app = new App();
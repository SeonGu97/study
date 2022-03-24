'use strict';

import Creator from "./js/creator.js";
import Header from "./js/header.js";
import Nav from "./js/nav.js";

class App {
    constructor() {
        // components
        this.creator = new Creator();

        // create app
        this.creator.basket('app', 'div', document.body, 1, ['id'], ['app'], '');

        // element
        const app = document.querySelector('#app');

        // component
        this.header = new Header(this.creator, app);
        this.nav = new Nav(this.creator);
    }
}

const app = new App();
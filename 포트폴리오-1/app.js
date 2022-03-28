'use strict';

import Creator from "./js/creator.js";
import Header from "./js/header.js";
import Nav from "./js/nav.js";
import Gap from "./js/gap.js";
import Main from "./js/main.js";
import Aside from "./js/aside.js";


class App {
    constructor() {
        // component
        this.creator = new Creator();

        // create app
        this.creator.basket('app', 'div', document.body, 1, ['id'], ['app'], '');

        // element
        const app = document.querySelector('#app');

        // components
        this.header = new Header(this.creator, app);
        this.nav = new Nav(this.creator);
        this.gap = new Gap(this.creator, app);
        this.main = new Main(this.creator, app);
        this.aside = new Aside(this.creator, app);
    }
}

const app = new App();
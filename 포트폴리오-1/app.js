'use strict';

import Creator from "./js/creator.js";
import Header from "./js/header.js";
import Nav from "./js/nav.js";
import Gap from "./js/gap.js";
import Main from "./js/main.js";
import Aside from "./js/aside.js";
import Footer from "./js/footer.js";
import More from "./js/more.js";
import Bubble from "./js/bubble.js";


export class App {
    constructor() {
        // component
        this.creator = new Creator();

        // create app
        this.creator.basket('app', 'div', document.body, 1, ['id'], ['app'], '');

        // element
        this.app = document.querySelector('#app');

        // components
        this.header = new Header(this.creator, this.app);
        this.nav = new Nav(this.creator);
        this.gap = new Gap(this.creator, this.app);
        this.main = new Main(this.creator, this.app);
        this.aside = new Aside(this.creator, this.app);
        this.footer = new Footer(this.creator, this.app);
        this.more = new More(this.creator, this.app);
        this.bubble = new Bubble(this.creator, this.app);
    }
}

const app = new App();
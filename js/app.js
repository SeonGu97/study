'use strict';

import { Frame } from "./frame.js";

class App {
    constructor() {
        this.createApp = document.createElement('div');
        this.attrsApp = this.createApp.setAttribute('id', 'app');

        document.body.appendChild(this.createApp);

        this.frame = new Frame(this.createApp);
    }
}

const app = new App();
'use strict';

import Creator from "./JS/Creator/creator.js";

export default class App {
    constructor() {
        // component
        this.app = new Creator('app', 'div', ['id'], ['app'], '', 2, document.body, false, '', '');
    }
}

const app = new App();
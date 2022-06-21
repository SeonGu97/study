'use strict';

import Create from "../create/create.js";

export default class App {
    constructor() {
        const _app = new Create('app', 'div', 'id', 'app', document.body);
    }
}

const app = new App();
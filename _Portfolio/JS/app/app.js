'use strict';

import Create from "../create/create.js";
import Header from "../header/header.js";

export default class App {
    constructor() {
        const app = new Create('app', 'div', 'id', 'app', document.body);

        const header = new Header(Create, app);
    }
}

const app = new App();
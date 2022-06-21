'use strict';

import Create from "../create/create.js";
import Screen from "../screen/screen.js";

export default class App {
    constructor() {
        const _app = new Create('app', 'div', 'id', 'app', document.body);

        const _screen = new Screen(Create, _app);
    }
}

const app = new App();
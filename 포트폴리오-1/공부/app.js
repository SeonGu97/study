'use strict';

import Creator from "./JS/Creator/creator.js";
import Wrap from "./JS/Aside/wrap.js";

export default class App {
    constructor() {
        // create
        this.app = new Creator('app', 'div', 'id', 'app', '', 1, document.body, false, '', '');

        // component
        this.wrap = new Wrap(Creator, this.app.name);
    }
}

const app = new App();
'use strict';

import Creator from "./JS/Creator/creator.js";
import Aside from "./JS/Aside/aside.js";

export default class App {
    constructor() {
        // component
        this.app = new Creator('app', 'div', ['id'], ['app'], '', 1, document.body, false, '', '');
    
        // component
        this.aside = new Aside(Creator);
    }
}

const app = new App();
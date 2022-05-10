'use strict';

import Aside from "./aside.js";
import BG from "./bg.js";

export default class Wrap {
    constructor(Creator, app) {
        // create
        this.wrap = new Creator('wrap', 'div', 'class', 'wrap', '', 1, app, false, '', '');
        
        // component
        this.aside = new Aside(Creator, this.wrap.name);
        this.bg = new BG(Creator, this.wrap.name);
    }
}

 
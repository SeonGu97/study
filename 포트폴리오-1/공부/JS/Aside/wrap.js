'use strict';

import Aside from "./aside.js";
import BG from "./bg.js";
import Header from "../Header/header.js";

export default class Wrap {
    constructor(Creator, app) {
        // create
        this.wrap = new Creator('wrap', 'div', 'class', 'wrap', '', 1, app, false, '', '');
        
        // component
        this.aside = new Aside(Creator, this.wrap.name);
        this.bg = new BG(Creator, this.wrap.name);
        this.header = new Header(Creator, this.wrap.name);
    }
}


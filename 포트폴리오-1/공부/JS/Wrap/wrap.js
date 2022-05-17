'use strict';

import Aside from "../Aside/aside.js";
import BG from "../Clone-Aside/bg.js";
import Header from "../Header/header.js";
import Clone_aside from "../Clone-Aside/clone-aside.js";
import Main from "../Main/main.js";

export default class Wrap {
    constructor(Creator, app) {
        // create
        this.wrap = new Creator('wrap', 'div', 'class', 'wrap', '', 1, app, false, '', '');
        
        // component
        this.aside = new Aside(Creator, this.wrap.name);
        this.header = new Header(Creator, this.wrap.name);
        this.clone_aside = new Clone_aside(Creator, this.wrap.name);
        this.bg = new BG(Creator, this.wrap.name);
        this.main = new Main(Creator, this.wrap.name);
    }
}


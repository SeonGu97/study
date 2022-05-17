'use strict';

import Infor from "./infor.js";
import Picture from "./picture.js";

export default class Intro {
    constructor(Creator, container) {
        // create
        this.intro = new Creator('intro', 'section', 'class', 'intro', '', 1, container, false, '', '');
    
        // component
        this.picture = new Picture(Creator, this.intro.name);
        this.infor = new Infor(Creator, this.intro.name);
    }
}


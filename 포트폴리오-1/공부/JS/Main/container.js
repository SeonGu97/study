'use strict';

import Intro from "./intro.js";
import Title from "./title.js";
import Line from "./line.js";
import Skill from "./skill.js";

export default class Container {
    constructor(Creator, main) {
        // create
        this.container = new Creator('container', 'div', 'class', 'container', '', 1, main, false, '', '');
    
        // component
        this.title = new Title(Creator, this.container.name);
        this.intro = new Intro(Creator, this.container.name);
        this.line = new Line(Creator, this.container.name);
        this.skill = new Skill(Creator, this.container.name);
        this.line = new Line(Creator, this.container.name);
    }
}


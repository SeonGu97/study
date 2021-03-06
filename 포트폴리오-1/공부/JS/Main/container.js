'use strict';

import Intro from "./intro.js";
import Title from "./title.js";
import Line from "./line.js";
import Skill from "./skill.js";
import Project from "./project.js";
import Motto from "./motto.js";
import Footer from "./footer.js";

export default class Container {
    constructor(Creator, main) {
        // create
        this.container = new Creator('container', 'div', 'class', 'container', '', 1, main, false, '', '');
    
        // component
        this.line = new Line(Creator, this.container.name);
        this.motto = new Motto(Creator, this.container.name);
        this.line = new Line(Creator, this.container.name);
        this.title = new Title(Creator, this.container.name);
        this.intro = new Intro(Creator, this.container.name);
        this.line = new Line(Creator, this.container.name);
        this.skill = new Skill(Creator, this.container.name);
        this.line = new Line(Creator, this.container.name);
        this.title = new Title(Creator, this.container.name);
        this.project = new Project(Creator, this.container.name);
        this.footer = new Footer(Creator, this.container.name);
    }
}


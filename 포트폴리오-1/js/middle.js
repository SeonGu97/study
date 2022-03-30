'use strict';

import Project from "./project.js";
import Title from "./title.js";

export default class Middle {
    constructor(creator) {
        // element
        this.main = document.querySelector('main');

        // create
        creator.basket('middle', 'section', this.main, 1, ['class'], ['middle'], '');

        // component
        this.title = new Title(creator);
        this.project = new Project(creator);
    }
}
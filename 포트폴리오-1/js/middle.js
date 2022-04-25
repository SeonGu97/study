'use strict';

import Project from "./project.js";

export default class Middle {
    constructor(creator, main) {
        // create
        creator.basket('middle', 'section', main, 1, ['class'], ['middle basic-pd'], '');
        
        // component
        this.project = new Project(creator);
    }
}
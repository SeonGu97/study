'use strict';

import Item from "./item.js";

export default class Project {
    constructor(Creator, container) {
        // create
        this.project = new Creator('project', 'section', 'class', 'project', '', 1, container, false, '', '');

        // component
        this.item = new Item(Creator, this.project.name);
    }
}


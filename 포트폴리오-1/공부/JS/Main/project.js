'use strict';

import Item from "./item.js";

export default class Project {
    constructor(Creator, container) {
        // create
        this.project = new Creator('project', 'section', 'class', 'project basic-pd', '', 1, container, false, '', '');

        // component
        this.item = new Item(Creator, this.project.name);
    }
}


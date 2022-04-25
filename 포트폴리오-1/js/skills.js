'use strict';

import Skill_item from "./skill-item.js";

export default class Skills {
    constructor(creator, main) {
        // create
        creator.basket('skills', 'div', main, 1, ['class'], ['skills basic-pd'], '');

        // component
        this.skill_item = new Skill_item(creator);
    }
}
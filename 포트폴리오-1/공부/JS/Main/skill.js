'use strict';

import Skill_item from "./skill-item.js"

export default class Skill {
    constructor(Creator, main) {
        // create
        this.skill = new Creator('skill', 'section', 'class', 'skill', '', 1, main, false, '', '');
    
        // component
        this.skill_item = new Skill_item(Creator, this.skill.name);
    }
}


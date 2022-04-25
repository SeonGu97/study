'use strict';

export default class Skill_item {
    constructor(creator) {
        // create
        creator.basket('skill_item', 'div', creator.name, 5, ['class'], ['skill_item'], '');
    }
}
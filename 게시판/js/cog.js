'use strict';

export default class Cog {
    constructor(create, tool) {
        // create library
        create.launcher('cog', 'span', ['class'], ['cog pointer'], ['<i class="fas fa-cog"></i>'], tool, 1);
    }
}
'use strict';

export default class Mod {
    constructor(create) {
        // select remove
        this.remove = document.querySelector('.remove');

        // create mod
        create.launcher('mod', 'button', ['class'], ['mod'], ['OFF'], this.remove, 1);
    }
}
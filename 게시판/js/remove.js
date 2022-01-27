'use strict';

import Mod from "./mod.js";

export default class Remove {
    constructor(create, tool) {
        // create remove
        create.launcher('remove', 'div', ['class'], ['remove'], [''], tool, 1);

        // component
        this.mod = new Mod(create);
    }
}
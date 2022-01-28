'use strict';

import Mod from "./mod.js";

export default class Remove {
    constructor(create, tool) {
        // create remove
        create.launcher('remove', 'div', ['class'], ['remove common gap hide delay'], [''], tool, 1);

        // component
        this.mod = new Mod(create);
    }
}
'use strict';

import Box from "./box.js";

export default class Nav {
    constructor(Create, _app) {
        // create
        const _nav = new Create('nav', 'nav', '', '', _app);

        // component
        const box = new Box(Create, _nav);
    }
}
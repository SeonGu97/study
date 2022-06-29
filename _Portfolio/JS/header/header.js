'use strict';

import Screen from "./screen.js";

export default class Header {
    constructor(Create, app) {
        const header = new Create('header', 'header', '', '', app);

        const screen = new Screen(Create, header);
    }
}
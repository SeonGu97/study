'use strict';

import Header from "../header/header.js";

export default class Screen {
    constructor(Create, _app) {
        const _screen = new Create('screen', 'div', 'class', 'screen', _app);

        const _header = new Header(Create, _screen);
    }
}
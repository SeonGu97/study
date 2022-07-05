'use strict';

import Aside from "../aside/aside.js";

export default class Main {
    constructor(Create, app) {
        const main = new Create('main', 'main', 'class', 'pc', app);

        const aside = new Aside(Create, main);
    }
}
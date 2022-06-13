'use strict';

import Aside from "../aside/aside.js";
import Main from "../main/mian.js";

export default class Wrap {
    constructor(Create, _app) {
        // create
        const _wrap = new Create('warp', 'div', 'class', 'wrap', _app);

        // component
        const aside = new Aside(Create, _wrap);
        const main = new Main(Create, _wrap);
    }
}
'use strict';

import Size from "./size/size.js";

export default class Header {
    constructor(Create, _app) {
        // create
        const _header = new Create('header', 'header', '', '', _app);

        // component
        const size = new Size(Create, _header);
    }
}
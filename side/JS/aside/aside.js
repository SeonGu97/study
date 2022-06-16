'use strict';

import Area_1 from "./area-1.js";
import Area_2 from "./area-2.js";

export default class Aside {
    constructor(Create, _wrap) {
        const _aside = new Create('aside', 'aside', 'class', 'aside', _wrap);
        
        // component
        const area_1 = new Area_1(Create, _aside);
        const area_2 = new Area_2(Create, _aside)
    }
}
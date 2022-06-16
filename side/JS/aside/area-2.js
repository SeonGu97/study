'use strict';

import SNS from "./sns.js";

export default class Area_2 {
    constructor(Create, _aside) {
        // create
        const _area_2 = new Create('area_2', 'section', 'class', 'area-2', _aside);
    
        // component
        const sns = new SNS(Create, _area_2);
    }
}
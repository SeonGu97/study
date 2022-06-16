'use strict';

import Library from "./library.js";
import Weather from "./weather.js";

export default class Area_1 {
    constructor(Create, _aside) {
        // create
        const _area_1 = new Create('area_1', 'section', 'class', 'area-1', _aside);
    
        // component
        const library = new Library(Create, _area_1);
        const weather = new Weather(Create, _area_1);
    }
}
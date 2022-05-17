'use strict';

import Infor_item from "./infor-item.js";

export default class Infor {
    constructor(Creator, introduction) {
        // create
        this.infor = new Creator('infor', 'div', 'class', 'infor', '', 1, introduction, false, '', '');
    
        // component
        this.infor_item = new Infor_item(Creator, this.infor.name);
    }
}


'use strict';

import Logo from "./logo.js";

export default class Menu {
    constructor(creator, header) {
        // creator
        creator.basket('menu', 'div', header , 1, ['class'], ['menu'], '<i class="fas fa-solid fa-bars pointer"></i>');
    
        // component
        this.logo = new Logo(creator);
    }
}
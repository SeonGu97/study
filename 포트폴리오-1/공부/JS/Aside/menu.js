'use strict';

export default class Menu {
    constructor(Creator, nav) {
        // create
        this.menu = new Creator('menu', 'div', 'class', 'menu', '<i class="bi bi-list"></i>', 1, nav, false, '', '');
    }
}

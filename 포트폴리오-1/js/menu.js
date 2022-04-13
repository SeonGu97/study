'use strict';

import Logo from "./logo.js";

export default class Menu {
    constructor(creator, header) {
        // creator
        creator.basket('menu', 'div', header , 1, ['class'], ['menu'], '<i class="fas fa-solid fa-bars pointer"></i>', true, 'click', this.menuEvent);
    
        // component
        this.logo = new Logo(creator);
    }

    menuEvent(e) {
        this.target = e.target;

        this.icon = document.querySelector('.fa-bars');

        this.aside = document.querySelector('aside');

        this.app = document.querySelector('#app');

        if(this.target == this.icon) {
            this.aside.classList.toggle('active-1');
            this.app.classList.toggle('active-2');
            this.app.classList.toggle('active-3');
        }
    }
}
'use strict';

export default class Menu {
    constructor(Creator, nav) {
        // create
        this.menu = new Creator('menu', 'div', 'class', 'menu', '<i class="bi bi-list pointer"></i>', 1, nav, true, 'click', this.menuEvent);
    }

    menuEvent(e) {
        this.target = e.target;

        this.aside = document.querySelector('aside');

        if(this.target.classList.contains('bi-list')) {
            !this.aside.classList.contains('small') ? this.aside.classList.add('small') : this.aside.classList.remove('small');
        }
    }
}

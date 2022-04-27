'ues strict';

import Library from "./library.js";
import Nav from "./nav.js";

export default class Aside {
    constructor(creator, wrap) {
        // create
        creator.basket('aside', 'aside', wrap, 1, [''], [''], '', true, 'transitionend', this.asideEvent);

        // element
        this.aside = creator.name;
        
        // component
        this.nav = new Nav(creator, this.aside);
        this.library = new Library(creator, this.aside);
    }

    asideEvent(e) {
        this.menu = document.querySelectorAll('.menu');
        this.header = document.querySelector('header');

        if(!this.menu[1].classList.contains('active')) {
            this.header.classList.remove('back');
        }
    }
}
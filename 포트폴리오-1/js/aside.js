'ues strict';

import Nav from "./nav.js";

export default class Aside {
    constructor(creator, wrap) {
        // create
        creator.basket('aside', 'aside', wrap, 1, [''], [''], '', true, 'transitionend', this.asideEvent);

        // component
        this.nav = new Nav(creator, creator.name);
    }

    asideEvent(e) {
        this.menu = document.querySelectorAll('.menu');
        this.header = document.querySelector('header');

        if(!this.menu[1].classList.contains('active')) {
            this.header.classList.remove('back');
        }
    }
}
'use strict';

import Bar from "./bar.js";

export default class Menu {
    constructor(creator) {
        // create
        creator.basket('menu', 'div', creator.name, 1, ['class'], ['menu pointer'], '', true, 'click', this.menuEvent);

        // component
        this.bar = new Bar(creator);
    }

    menuEvent(e) {
        this.target = e.target;
        this.target.classList.toggle('active');

        this.aside = document.querySelector('aside');
        this.aside.style.transition = '0.75s ease-in-out';
        
        if(this.target.classList.contains('active')) {
            this.target.childNodes[0].style.transform = 'rotate(-0.125turn) translate(-6px, 7px)';
            this.target.childNodes[1].style.opacity = '0';
            this.target.childNodes[2].style.transform = 'rotate(0.125turn) translate(-6px, -7px)';
            this.aside.style.height = '100%';
        }else {
            this.target.childNodes[0].style.transform = 'rotate(0turn) translate(0px, 0px)';
            this.target.childNodes[1].style.opacity = '1';
            this.target.childNodes[2].style.transform = 'rotate(0turn) translate(0px, 0px)';
            this.aside.style.height = '2.5%';
        }
    }
}
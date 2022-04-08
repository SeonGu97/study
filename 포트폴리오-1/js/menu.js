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
        this.aside.style.transition = '0.4s';

        this.slide = document.querySelector('.slide');
        
        if(this.target.classList.contains('active')) {
            this.target.childNodes[0].style.transform = 'rotate(-0.125turn) translate(-5px, 8px)';
            this.target.childNodes[1].style.opacity = '0';
            this.target.childNodes[2].style.transform = 'rotate(0.125turn) translate(-5px, -8px)';
        
            this.aside.style.transform = 'translateY(0%)';

            this.slide.classList.add('grow');
        }else {
            setTimeout(() => {
                this.target.childNodes[0].style.transform = 'rotate(0turn) translate(0px, 0px)';
                this.target.childNodes[1].style.opacity = '1';
                this.target.childNodes[2].style.transform = 'rotate(0turn) translate(0px, 0px)';
            
                this.aside.style.transform = 'translateY(-100%)';
            }, 400);

            this.slide.classList.remove('grow');
        }
    }
}
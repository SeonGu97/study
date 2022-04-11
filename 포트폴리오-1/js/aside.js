'use strict';

import Line from "./line.js";

export default class Aside {
    constructor(creator, wrap) {
        // create
        creator.basket('aside', 'aside', wrap, 1, [''], [''], '');

        // window event
        window.addEventListener('resize', this.resize, false);
        this.resize();

        // component
        this.line = new Line(creator);
    }

    resize() {
        this.size = (window.innerWidth - 1024) / 2;
        
        this.aside = document.querySelector('aside');

        this.aside.style.transition = 'none';

        if(this.size <= 1024) {
            this.aside.style.right = `${this.size - 10}px`;
        }
        
        if(this.size < 0){
            this.aside.style.right = '0';
        }
    }
}
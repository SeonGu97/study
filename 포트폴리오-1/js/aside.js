'use strict';

import Line_1 from "./line_1.js";
import Line_2 from "./line_2.js";

export default class Aside {
    constructor(creator, wrap) {
        // create
        creator.basket('aside', 'aside', wrap, 1, [''], [''], '');

        // window event
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // element
        this.aside = creator.name;

        // components
        this.line_1 = new Line_1(creator, this.aside);
        this.line_2 = new Line_2(creator, this.aside);
    }

    resize() {
        this.aside = document.querySelector('aside');
        this.aside.style.transition = 'none';

        this.size = (window.innerWidth - 1024) / 2;
        console.log(this.size);

        if(this.size <= 1024) {
            this.aside.style.right = `${this.size}px`;
        }
        
        if(this.size < 0){
            this.aside.style.right = '0';
        }
    }
}
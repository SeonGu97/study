'use strict';

import Bubble from "./bubble.js";

export default class More {
    constructor(creator, app) {
        // create
        creator.basket('more', 'ul', app, 1, ['class'], ['more'], '<i class="bi bi-plus-lg"></i>', true, 'click', this.moreEvent);
        
        // component
        this.bubble = new Bubble(creator);
    }

    moreEvent() {
        // element
        this.bubbleAll = document.querySelectorAll('.bubble');


        for(let i = 0; i < this.bubbleAll.length; i++) {
            this.bubbleAll[i].style.transition = '0.2s';
            this.bubbleAll[i].classList.toggle('smooth');

            this.bubbleAll[1].style.transitionDelay = '0.2s';
            this.bubbleAll[2].style.transitionDelay = '0.4s';

            if(this.bubbleAll[i].classList.contains('smooth')) {
                this.bubbleAll[0].style.transform = 'translate(50%, -200%)';
                this.bubbleAll[1].style.transform = 'translate(-175%,-175%)';
                this.bubbleAll[2].style.transform = 'translate(-200%, 50%)'; 
            }else {
                this.bubbleAll[0].style.transform = 'translateY(0%)';
                this.bubbleAll[1].style.transform = 'translate(0%,0%)';
                this.bubbleAll[2].style.transform = 'translateX(0%)';
            }
        }
    }
}
'use strict';

export default class Screen {
    constructor(creator, header) {
        // create
        creator.basket('screen', 'div', header, 1, ['class'], ['screen'], '<i class="bi bi-arrow-bar-left pointer"></i>', true, 'click', this.screenEvent);
    }

    screenEvent(e) {
        this.target = e.target.parentElement;
        
        this.screen = document.querySelector('.screen');
        this.left = '<i class="bi bi-arrow-bar-left pointer"></i>';
        this.right = '<i class="bi bi-arrow-bar-right pointer"></i>';
        this.box = document.querySelector('.box');
        this.wrap = document.querySelector('.wrap');

        if(this.target == this.screen) {
            this.target.classList.toggle('active-2');
        }

        if(this.target.classList.contains('active-2')) {
            this.box.classList.add('show-2');
            this.wrap.classList.add('gap-2');

            this.target.innerHTML = this.right;
        }else {
            this.box.classList.remove('show-2');
            this.wrap.classList.remove('gap-2');
            
            this.target.innerHTML = this.left;
        }
    }
}
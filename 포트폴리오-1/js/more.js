'use strict';

export default class More {
    constructor(creator, app) {
        // create
        creator.basket('more', 'ul', app, 1, ['class'], ['more'], '<i class="bi bi-plus-lg"></i>', true, 'click', this.moreEvent);
    }

    moreEvent() {
        this.more = document.querySelector('.more');
        this.link = document.querySelectorAll('.link');

        this.more.classList.toggle('smooth');

        this.link[1].style.transitionDelay = '0.2s';
        this.link[2].style.transitionDelay = '0.4s';

        if(this.more.classList.contains('smooth')) {
            this.link[0].style.transform = 'translate(0%, -150%)';
            this.link[1].style.transform = 'translate(0%, -300%)';
            this.link[2].style.transform = 'translate(-200%, 25%)';

            for(let i = 0; i < this.link.length; i++) {
                this.link[i].classList.add('attack');
            }
            
        }else {
            for(let i = 0; i < this.link.length; i++) {
                this.link[i].style.transform = 'translate(0%, 0%)';
                this.link[i].classList.remove('attack');
            }
        }
    }
}
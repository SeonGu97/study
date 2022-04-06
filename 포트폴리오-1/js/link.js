'use strict';

export default class Link {
    constructor(creator) {
        // element
        this.bubble = document.querySelector('.bubble');

        // create
        creator.basket('link', 'a', this.bubble, 3, ['class', 'type'], ['link', 'blank'], '');

        // element
        this.linkAll = document.querySelectorAll('.link');

        this.linkAll[0].innerHTML = '<i class="bi bi-github"></i>';
        this.linkAll[0].setAttribute('href', 'https://github.com/SeonGu97');
        this.linkAll[0].style.color = '#000a12';

        this.linkAll[1].innerHTML = '<i class="bi bi-chat-square-text-fill"></i>';
        this.linkAll[1].setAttribute('href', 'https://blog.naver.com/seongu97');
        this.linkAll[1].style.color = '#00e676';
    }
}
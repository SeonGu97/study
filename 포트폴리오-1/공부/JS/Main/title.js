'use strict';

export default class Title {
    constructor(Creator, container) {
        // create
        this.title = new Creator('title', 'h3', 'class', 'title basic-pd', '', 1, container, false, '', '');
    
        // icons
        this.icons = ['<i class="bi bi-balloon-fill"></i>'];
        
        // text
        this.text = ['소개', '프로젝트'];

        this.titles = document.querySelectorAll('.title');

        for(let i = 0; i < this.titles.length; i++) {
            this.titles[i].innerHTML = this.icons[0] + this.text[i];
        }
    }
}


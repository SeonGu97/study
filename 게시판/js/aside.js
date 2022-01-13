'use strict';

import Setting from "./setting.js";

export default class Aside {
    constructor(app) {
        // create aside
        this.aside = document.createElement('aside');
        this.aside.setAttribute('class', 'aside Y');

        // add to aside
        app.appendChild(this.aside);

        // create aside-title
        this.aside_title = document.createElement('h4');
        this.aside_title.setAttribute('class', 'aside-title');

        // aside-title-text
        this.aside_title_text = '게시판';

        // inner text to aside-title-text
        this.aside_title.innerText = this.aside_title_text;

        // add to aside-title
        this.aside.appendChild(this.aside_title);

        // create library
        this.library = document.createElement('ul');
        this.library.setAttribute('class', 'library');

        // add to library
        this.aside.appendChild(this.library);

        // value
        this.value = 1;

        // titles
        this.titles = ['First-list'];

        for(let i = 0; i < this.value; i++) {
            // create book
            this.book = document.createElement('li');
            this.book.setAttribute('class', 'li');

            // inner text in book
            this.book.innerText = this.titles[i];

            // add to book
            this.library.appendChild(this.book);
        }

        // component
        this.setting = new Setting(this.aside);
    }
}
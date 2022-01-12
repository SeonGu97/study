'use strict';

export default class Aside {
    constructor(app) {
        // value
        this.value = 3;

        // titles
        this.titles = ['게시판', 'undefined', 'undefined', 'undefined'];

        // create aside
        this.aside = document.createElement('aside');
        this.aside.setAttribute('class', 'aside');

        // add to aside
        app.appendChild(this.aside);

        // create lists
        this.lists = document.createElement('ul');
        this.lists.setAttribute('class', 'lists');

        // add to lists
        this.aside.appendChild(this.lists);

        // create title
        this.title = document.createElement('div');
        this.title.setAttribute('class', 'title');

        // add to title
        this.lists.appendChild(this.title);

        // inner text in title
        this.title.innerText = this.titles[0];

        for(let i = 0; i < this.value; i++) {
            // create list
            this.list = document.createElement('li');
            this.list.setAttribute('class', 'list');

            // inner text in list
            this.list.innerText = this.titles[i + 1];

            // add to list
            this.lists.appendChild(this.list);
        }
    }
}
'use strict';

export default class App {
    constructor() {
        // create app
        this.app = document.createElement('div');
        this.app.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.app);

        // create header
        this.header = document.createElement('header');

        // add to header
        this.app.appendChild(this.header);

        // create main
        this.main = document.createElement('main');

        // add to main
        this.app.appendChild(this.main);

        // footer
        this.footer = document.createElement('footer');

        // add to footer
        this.app.appendChild(this.footer);



        // create search
        this.search = document.createElement('section');
        this.search.setAttribute('class', 'search');

        // add to search
        this.main.appendChild(this.search);

        // create board
        this.board = document.createElement('section');
        this.board.setAttribute('class', 'board');

        // add to board
        this.main.appendChild(this.board);
    }
}

const app = new App();
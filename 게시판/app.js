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



        // create library
        this.library = document.createElement('ul');
        this.library.setAttribute('class', 'library');

        // add to library
        this.header.appendChild(this.library);

        for(let i = 0; i < 6; i++) {
            // create book
            this.book = document.createElement('li');
            this.book.setAttribute('class', 'book');

            // add to book
            this.library.appendChild(this.book);
        }



        // create search-box
        this.search_box = document.createElement('section');
        this.search_box.setAttribute('class', 'search-box');

        // add to search
        this.main.appendChild(this.search_box);

        // create search
        this.search = document.createElement('input');
        this.search.setAttribute('type', 'search');

        // add to search
        this.search_box.appendChild(this.search);

        // create board
        this.board = document.createElement('section');
        this.board.setAttribute('class', 'board');

        // add to board
        this.main.appendChild(this.board);

        // create box
        this.box = document.createElement('ul');
        this.box.setAttribute('class', 'box');

        // add to box
        this.board.appendChild(this.box);

        for(let i = 0; i < 10; i++) {
            // create item
            this.item = document.createElement('li');
            this.item.setAttribute('class', 'item');

            // add to item
            this.box.appendChild(this.item);
        }



        // book foreach
        this.books = document.querySelectorAll('.book');
        this.books.forEach(book => {
            book.addEventListener('click', e => {
                this.target = e.target;
                console.log(this.target);
            }, false);
        });



        // create page
        this.page = document.createElement('section');
        this.page.setAttribute('class', 'page');

        // add to page
        this.footer.appendChild(this.page);

        for(let i = 0; i < 2; i++) {
            // create btn
            this.btn = document.createElement('span');
            this.btn.setAttribute('class', 'btn');

            // btn position
            this.btn.style.position = 'absolute';
            this.btn.style.top = '50%';
            this.btn.style.transform = 'translateY(-40%)';

            // add to btn
            this.page.appendChild(this.btn);
        }

        // btns
        this.btns = document.querySelectorAll('.btn');

        // prev
        this.prev = `<i class="fas fa-caret-left"></i>`;

        // next 
        this.next = `<i class="fas fa-caret-right"></i>`;

        // add to icon
        this.btns[0].innerHTML = this.prev;
        this.btns[1].innerHTML = this.next;

        // btn position
        this.btns[0].style.left = '0.5rem';
        this.btns[1].style.right = '0.5rem';;

        // create num-box
        this.num_box = document.createElement('section');
        this.num_box.setAttribute('class', 'num-box');

        // add to num-box
        this.page.appendChild(this.num_box);
    }
}

const app = new App();
'use strict';

export default class Book_1 {
    constructor(creator) {
        // create
        creator.basket('book', 'li', creator.name, 2, ['class'], ['book-1 pointer'], '');

        // element
        this.books = document.querySelectorAll('.book-1');

        // icon array 
        this.icon = ['<i class="bi bi-house-door"></i>', '<i class="bi bi-collection"></i>', ];
        this.text = ['<span class="word">홈</span>', '<span class="word">프로젝트</span>'];

        for(let i = 0; i < this.books.length; i++) {
            this.books[i].innerHTML = this.icon[i] + this.text[i];
        }
    }
}
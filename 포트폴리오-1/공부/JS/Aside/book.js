'use strict';

export default class Book {
    constructor(Creator, library) {
        // create
        this.book = new Creator('book', 'li', 'class', 'book pointer', '', 2, library, false, '', '');
        
        this.books = document.querySelectorAll('.book');

        this.icons = ['<i class="bi bi-house-door"></i><div class="words"></div>', '<i class="bi bi-collection"></i><div class="words"></div>']

        for(let i = 0; i < this.books.length; i++) {
            this.books[i].innerHTML = this.icons[i];
        }

        this.words = document.querySelectorAll('.words');

        this.text = ['홈', '프로젝트'];

        for(let i = 0; i < this.words.length; i++) {
            this.words[i].innerHTML = this.text[i];
        }
    }
}
'use strict';

import Book from "./book.js";

export default class Storage {
    constructor(This) {
        this.library = document.querySelector('.library');
        this.book_all = document.querySelectorAll('.book');
        this.submit = document.querySelector('.submit');
        this.text = document.querySelector('.text');

        this.name = 'LCS';
        this.value;

        this.type();

        this.update(this.submit, this.text, This, this.library);

        this.create(This, this.library);
    }

    type() {
        if(typeof(localStorage) !== undefined) {
            this.prase();
        }else {
            alert('로컬스토리지 사용불가');
        }
    }

    prase() {
        if(localStorage.getItem(this.name) === null) {
            this.value = [];
        }else {
            this.value = JSON.parse(localStorage.getItem(this.name))
        }

        this.stringify();
    }

    stringify() {
        localStorage.setItem(this.name, JSON.stringify(this.value));
    }

    update(submit, text, This, library) {
        submit.addEventListener('click', () => {
            if(!text.value.trim()) {
                return this.clear(text);
            }else {
                this.clone();

                this.push(text);
                this.stringify();

                this.create(This, library);
                
                return this.clear(text);
            }
        }, false);
    }

    clear(text) {
        text.value = '';
    }

    push(text) {
        this.value.push(text.value);
    }

    create(This, library) {
        this.book = new Book(This, this.value, library);
    }

    clone() {
        this.clone_length = this.library.cloneNode(true).childNodes.length;

        for(let i = 0; i < this.clone_length; i++) {
            this.library.removeChild(this.library.firstChild);
        }
    }
}
'use strict';

import Book from "./js/book.js";
import Remove from "./js/remove.js";
import Tool_btn from "./js/tool-btn.js";

export default class Storage {
    constructor(CE) {
        this.library = document.querySelector('.library');
        this.book_all = document.querySelectorAll('.book');
        this.submit = document.querySelector('.submit');
        this.text_box = document.querySelector('.text-box');

        this.name = 'LCS';
        this.value;

        this.type();

        this.update(this.submit, this.text_box, CE, this.library);

        this.create(CE, this.library);

        this.tool = document.querySelector('.tool');
        
        // components
        this.remove = new Remove(CE, this.tool, this.value);
        this.tool_btn = new Tool_btn(CE, this.tool);
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
            this.value = JSON.parse(localStorage.getItem(this.name));
        }

        this.stringify();
    }

    stringify() {
        localStorage.setItem(this.name, JSON.stringify(this.value));
    }

    update(submit, text, CE, library) {
        submit.addEventListener('click', () => {
            if(!text.value.trim()) {
                return this.clear(text);
            }else {
                this.clone();

                this.push(text);
                this.stringify();

                this.create(CE, library);
                
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

    create(CE, library) {
        this.book = new Book(CE, this.value, library);
    }

    clone() {
        this.clone_length = this.library.cloneNode(true).childNodes.length;

        for(let i = 0; i < this.clone_length; i++) {
            this.library.removeChild(this.library.firstChild);
        }
    }
}
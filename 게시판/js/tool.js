'use strict';

export default class Tool {
    constructor(aside, library) {
        // create tool-wrap
        this.tool_wrap = document.createElement('div');
        this.tool_wrap.setAttribute('class', 'tool-wrap common');

        // add to tool-wrap
        aside.appendChild(this.tool_wrap);

        // create tool-box
        this.tool_box = document.createElement('div');
        this.tool_box.setAttribute('class', 'tool-box');

        // add to tool-box
        this.tool_wrap.appendChild(this.tool_box);

        // create tool-text
        this.tool_text = document.createElement('input');
        this.tool_text.setAttribute('type', 'text');
        this.tool_text.setAttribute('class', 'tool-text');
        this.tool_text.setAttribute('maxlength', '10');
        this.tool_text.setAttribute('Placeholder', '게시판 이름을 입력하세요.');

        // add to tool-text
        this.tool_box.appendChild(this.tool_text);

        // create tool-submit
        this.tool_submit = document.createElement('input')
        this.tool_submit.setAttribute('type', 'submit');
        this.tool_submit.setAttribute('class', 'tool-submit');

        // add to tool-submit
        this.tool_box.appendChild(this.tool_submit);

        // tool-submit click event
        this.tool_submit.addEventListener('click', () => {
            // local()
            this.local();

            // push()
            this.push();

            // addItem()
            this.addItem(library);
        }, false);

        // type()
        this.type();

        // item()
        this.item(library);
    }

    type() {
        if(typeof(Storage) !== undefined) {
            this.local();
        }
    }

    local() {
        this.name = 'LC';
        this.LC;

        if(localStorage.getItem(this.name) === null) {
            this.LC = [];
        }else {
            this.LC = JSON.parse(localStorage.getItem(this.name));
        }

        localStorage.setItem(this.name, JSON.stringify(this.LC));
    }

    push() {
        this.value = this.tool_text.value;

        this.LC.push(this.value);

        localStorage.setItem(this.name, JSON.stringify(this.LC));
    }

    item(library) {
        for(let i = 0; i < this.LC.length; i++) {
            // create book
            this.book = document.createElement('li');
            this.book.setAttribute('class', 'book');

            // inner text in book
            this.book.innerText = this.LC[i];

            // add to book
            library.appendChild(this.book);
        }
    }

    addItem(library) {
        // create book
        this.book = document.createElement('li');
        this.book.setAttribute('class', 'book');

        for(let i = 0; i < this.LC.length; i++) {
            // inner text in book
            this.book.innerText = this.LC[i];
        }

        // add to book
        library.appendChild(this.book);

        // reset value
        this.tool_text.value = '';
    }
}
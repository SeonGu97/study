'use strict';

import Book from "../js/book.js";

export default class Storage {
    constructor(create, text_box, submit, mod, library) {
        this.type(create, text_box, submit, mod, library);
    }

    type(create, text_box, submit, mod, library) {
        if(typeof(localStorage) !== undefined) {
            this.parse(create, text_box, submit, mod, library);
        }else {
            alert('It does not support local storage.');
        }
    }

    parse(create, text_box, submit, mod, library) {
        this.name = 'Board';

        this.value;

        if(localStorage.getItem(this.name) == null) {
            this.value = [];
        }else {
            this.value = JSON.parse(localStorage.getItem(this.name));
        }
        
        this.stringify(this.name, this.value);

        this.update(create, text_box, submit);

        this.mod(mod, library);
    }

    stringify(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    update(create, text_box, submit) {
        submit.addEventListener('click', () => {
            this.content(create, text_box);
        }, false);

        this.maintain(create);
    }

    content(create, text_box) {
        if(!text_box.value.trim()) {
            return this.clear(text_box);
        }else {
            this.push(text_box);
            this.add(create, text_box);
            this.clear(text_box);
            this.stringify(this.name, this.value);
        }
    }

    clear(text_box) {
        text_box.value = '';
    }

    push(text_box) {
        this.value.push(text_box.value);
    }

    add(create, text_box) {
        this.book = new Book(create, text_box.value);
    }

    maintain(create) {
        for(let i = 0; i < this.value.length; i++) {
            this.book = new Book(create, this.value[i]);
        }
    }

    mod(mod, library) {
        mod.addEventListener('click', e => {
            mod.classList.toggle('on');

            if(mod.classList.contains('on')) {
                this.icon_add(library);
            }else {
                this.icon_remove(library);
            }

            this.trash_all = document.querySelectorAll('.trash');
            this.remove(this.trash_all);
        }, false);
    }

    icon_add(library) {
        for(let i = 0; i < this.value.length; i++) {
            this.trash = document.createElement('span');
            this.trash.setAttribute('class', 'trash');
            this.trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
            
            library[i].appendChild(this.trash);
        }
    }

    icon_remove(library) {
        for(let i = 0; i < this.value.length; i++) {
            console.log(library[i].removeChild(library[i].childNodes[1]))
        }
    }

    remove(trash_all) {
        console.log(trash_all)
        trash_all.forEach(trash => {
            console.log(trash)
            trash.addEventListener('click', e => {
                this.target = e.target;
                console.log(e.target);

                this.text = this.target.parentElement.parentElement.innerText;

                this.value.splice(this.value.indexOf(this.name), 1);

                this.parent = this.target.parentElement.parentElement;
                this.parent.remove();

                this.stringify(this.name, this.value);
            }, false);
        });
    }
}
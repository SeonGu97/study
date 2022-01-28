'use strict';

import Book from "../js/book.js";

export default class Storage {
    constructor(create, text_box, submit, mod, library, cog, add, remove) {
        this.type(create, text_box, submit, mod, library, cog, add, remove);
    }   
    
    type(create, text_box, submit, mod, library, cog, add, remove) {
        if(typeof(localStorage) !== undefined) {
            this.prase(create, text_box, submit, mod, library, cog, add, remove);
        }else {
            alert('로컬스토리지를 지원하지 않습니다.');
        }
    }

    prase(create, text_box, submit, mod, library, cog, add, remove) {
        this.name = 'Board';
        this.value;

        if(localStorage.getItem(this.name) == null) {
            this.value = [];
        }else {
            this.value = JSON.parse(localStorage.getItem(this.name));
        }

        this.stringify(this.name, this.value);

        this.push(create, text_box, submit, mod, library, this.name, this.value);

        this.maintain(create, this.value);

        this.mod_change(library, mod, this.name, this.value);

        this.tool_btn(library, submit, this.value, mod, cog, add, remove);

        this.text_box_event(text_box, library, mod, this.value);
    }

    stringify(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }

    push(create, text_box, submit, mod, library, name, value) {
        submit.addEventListener('click', () => {
            if(!text_box.value.trim()) {
                this.clear(text_box);
            }else {
                value.push(text_box.value);

                this.stringify(name, value);

                this.add(create, text_box);

                this.clear(text_box);
            }

            this.off(library, mod, value);
        }, false);
    }

    clear(text_box){
        text_box.value = '';
    }

    add(create, text_box) {
        this.book = new Book(create, text_box.value);
    }

    maintain(create, value) {
        for(let i = 0; i < value.length; i++) {
            this.book = new Book(create, value[i]);
        }
    }

    mod_change(library, mod, name, value) {
        mod.addEventListener('click', () => {
            mod.classList.toggle('on');

            if(mod.classList.contains('on')) {
                this.add_trash(library, value);
                mod.style.color = '#00c853';
                mod.innerText = 'ON';
                this.icon_remove(name, value);
            }else {
                this.remove(library, value);
                this.mod_style(mod);
            }
        }, false);
    }

    off(library, mod, value) {
        if(mod.classList.contains('on')) {
            mod.classList.remove('on');
            this.remove(library, value);
            this.mod_style(mod);
        }
    }

    tool_btn(library, submit, value, mod, cog, add, remove) {
        cog.addEventListener('click', e => {
            this.off(library, mod, value);
            this.mod_style(mod);

            cog.classList.toggle('active');

            if(cog.classList.contains('active')) {
                e.target.style.transform = 'rotate(0.5turn)';
                this.trans_plus(add, remove, submit, mod);
            }else {
                e.target.style.transform = 'rotate(0turn)';
                this.trans_minus(add, remove, submit, mod);
            }
        }, false);
    }

    remove(library, value) {
        for(let i = 0; i < value.length; i++) {
            library[i].removeChild(library[i].childNodes[1]);
        }
    }

    add_trash(library, value) {
        for(let i = 0; i < value.length; i++) {
            this.trash = document.createElement('span');
            this.trash.setAttribute('class', 'trash');
            this.trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
            
            if(library[i].classList.contains('trash')) {
                return;
            }else {
                library[i].appendChild(this.trash);
            }
        }
    }

    text_box_event(text_box, library, mod, value) {
        text_box.addEventListener('click', () => {
            this.off(library, mod, value)
        }, false);
    }

    mod_style(mod) {
        mod.innerText = 'OFF';
        mod.style.color = '#d60000';
    }

    icon_remove(name, value) {
        this.trash_all = document.querySelectorAll('.trash');
        this.trash_all.forEach(trash => {
            trash.addEventListener('click', e => {
                this.target = e.target;
                this.parent = this.target.parentElement.parentElement;
                this.parent.remove();

                this.text = this.parent.innerText;
                console.log(this.text);
                console.log(value)

                value.splice(value.indexOf(this.text), 1);

                this.stringify(name, value);
            });
        });
    }

    trans_minus(add, remove, submit, mod) {
        add.style.transform = 'translateX(-100%)';
        remove.style.transform = 'translateX(-100%)';

        submit.style.pointerEvents = 'none';
        mod.style.pointerEvents = 'none';
    }

    trans_plus(add, remove, submit, mod) {
        add.style.transform = 'translateX(0%)';
        remove.style.transform = 'translateX(0%)';

        submit.style.pointerEvents = 'auto';
        mod.style.pointerEvents = 'auto';
    }
}
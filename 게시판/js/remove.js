'use strict';

export default class remove {
    constructor(CE, tool, value) {
        CE.generator(
            'remove',
            'div',
            ['class'],
            ['remove common'],
            [''],
            tool,
            1
        );

        this.remove = document.querySelector('.remove');

        CE.generator(
            'switch',
            'button',
            ['class'],
            ['switch'],
            ['OFF'],
            this.remove,
            1
        );
        
        this.switch = document.querySelector('.switch');
        this.library = document.querySelector('.library').childNodes;

        this.state(this.switch, this.library, value);
    }

    state(btn, library, value) {
        btn.addEventListener('click', e => {
            btn.classList.toggle('state');

            if(btn.classList.contains('state')) {
                btn.innerText = 'ON';
                this.add(library, value);
            }else {
                btn.innerText = 'OFF';
                this.removal(library);
            }
        }, false);
    }

    add(library, value) {
        for(let i = 0; i < library.length; i++) {
            this.trash = document.createElement('span');
            this.trash.setAttribute('class', 'trash');
            
            this.trash.innerHTML = '<i class="fas fa-trash-alt"></i>';

            library[i].appendChild(this.trash);
        }

        this.trash_all = document.querySelectorAll('.trash');

        this.elimination(library, this.trash_all, value);
    }

    removal(library) {
        for(let i = 0; i < library.length; i++) {
            library[i].removeChild(library[i].childNodes[1]);
        }
    }

    elimination(library, trash_all, value) {
        for(let i = 0; i < library.length; i++) {
            trash_all[i].addEventListener('click', e => {
                this.target = e.target;

                this.parent = this.target.parentElement.parentElement;
                this.parent.remove();
                console.log(this.parent);

                this.name = 'LCS';

                if(localStorage.getItem(this.name) === null) {
                    value = [];
                }else {
                    value = JSON.parse(localStorage.getItem(this.name));
                }

                this.text = this.parent.innerText;

                value.splice(value.indexOf(this.text), 1);

                localStorage.setItem(this.name, JSON.stringify(value));
            }, false);
        }
    }
}
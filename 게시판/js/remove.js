'use strict'

export default class Remove {
    constructor(CE, tool) {
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
        this.library = document.querySelector('.library');
        
        this.remove_mod(this.switch, this.library);
    }

    remove_mod(btn, library) {
        btn.addEventListener('click', e => {
            this.target = e.target;

            library.classList.toggle('on');

            if(library.classList.contains('on')) {
                this.add(library); 

                this.target.innerText = 'ON';
                this.target.style.color = '#00c853';
            }else {
                this.erase(library);

                this.target.innerText = 'OFF';
                this.target.style.color = '#dd2c00';
            }
        });
    }

    add(library) {
        for(let i = 0; i < library.childNodes.length; i++) {
            this.trash_btn = document.createElement('button');
            this.trash_btn.setAttribute('class', 'trash pointer');
            this.trash_btn.innerHTML = '<i class="fas fa-trash"></i>';

            library.childNodes[i].appendChild(this.trash_btn);
        }
    }

    erase(library) {
        for(let i = 0; i < library.childNodes.length; i++) {
            this.trash = document.querySelector('.trash');

            library.childNodes[i].removeChild(this.trash);
        }
    }
}
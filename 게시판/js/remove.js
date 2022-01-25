'use strict';

export default class remove {
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
        this.library = document.querySelector('.library').childNodes;

        this.state(this.switch, this.library, this.tool, this.tool_btn);
    }

    state(btn, library, tool, tool_btn) {
        btn.addEventListener('click', e => {
            btn.classList.toggle('state');

            if(btn.classList.contains('state')) {
                btn.innerText = 'ON';
                this.add(library);
            }else {
                btn.innerText = 'OFF';
                this.removal(library);
            }
        }, false);
    }

    add(library) {
        for(let i = 0; i < library.length; i++) {
            this.trash = document.createElement('span');
            this.trash.setAttribute('class', 'trash');
            
            this.trash.innerHTML = '<i class="fas fa-trash-alt"></i>';

            library[i].appendChild(this.trash);
        }
    }

    removal(library) {
        for(let i = 0; i < library.length; i++) {
            library[i].removeChild(library[i].childNodes[1]);
        }
    }
}
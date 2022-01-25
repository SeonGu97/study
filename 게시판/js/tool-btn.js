'use strict'

export default class Tool_btn {
    constructor(CE, tool) {
        CE.generator(
            'tool_btn',
            'span',
            ['class'],
            ['tool-btn'],
            ['<i class="fas fa-cog"></i>'],
            tool,
            1
        );

        this.library = document.querySelector('.library').childNodes;
        this.add = document.querySelector('.add');
        this.tool_btn = document.querySelector('.tool-btn');
        this.remove = document.querySelector('.remove');
        this.switch = document.querySelector('.switch');
            
        this.active(this.tool_btn, this.add, this.switch);
        this.delay(this.tool_btn, this.add, this.remove, this.library, this.switch);
    }

    active(tool_btn, add, switch_btn) {
        tool_btn.addEventListener('click', e => {
            this.target = e.target;

            add.classList.toggle('active');

            if(add.classList.contains('active')) {
                this.target.style.transform = 'rotate(0.5turn)';
                switch_btn.innerText = 'OFF';

                switch_btn.classList.remove('state');
            }else {
                this.target.style.transform = 'rotate(0turn)';
            }
        }, false);
    }

    delay(tool_btn, add, remove, library, switch_btn) {
        tool_btn.addEventListener('transitionend', () => {
            if(add.classList.contains('active')) {
                add.style.transform = 'translateX(0%)';
                remove.style.transform = 'translateX(0%)';
            }else {
                add.style.transform = 'translateX(-100%)';
                remove.style.transform = 'translateX(-100%)';

                if(switch_btn.classList.contains('state')) {
                    switch_btn.innerText = 'ON';
                    this.removal(library);
                }
            }
        }, false);
    }

    removal(library) {
        for(let i = 0; i < library.length; i++) {
            library[i].removeChild(library[i].childNodes[1]);
        }
    }
}
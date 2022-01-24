'use strict'

export default class Tool_btn {
    constructor(CE, tool) {
        CE.generator(
            'tool_btn',
            'button',
            ['class'],
            ['tool-btn'],
            ['<i class="fas fa-cog"></i>'],
            tool,
            1
        );

        this.tool_btn = document.querySelector('.tool-btn');
        this.add = document.querySelector('.add');
        this.remove = document.querySelector('.remove');
        this.library = document.querySelector('.library');

        this.active(this.tool_btn, this.add, this.remove)
        this.delay(this.tool_btn, this.add, this.remove, this.library);
    }

    active(tool_btn, add, remove) {
        tool_btn.addEventListener('click', e => {
            this.target = e.target;

            add.classList.toggle('active');
            remove.classList.toggle('active');

            tool_btn.style.pointerEvents = 'none';

            if(add.classList.contains('active')) {
                this.target.style.transform = 'rotate(0.5turn)';
            }else {
                this.target.style.transform = 'rotate(-0.5turn)';
            }
        }, false);
    }

    delay(tool_btn, add, remove, library) {
        tool_btn.addEventListener('transitionend', () => {
            if(add.classList.contains('active')) {
                add.style.transform = 'translateX(0%)';
                remove.style.transform = 'translateX(0%)';
            }else {
                add.style.transform = 'translateX(-100%)';
                remove.style.transform = 'translateX(-100%)';

                for(let i = 0; i < library.childNodes.length; i++) {
                    this.trash = document.querySelector('.trash');

                    library.childNodes[i].removeChild(this.trash);
                }
            }

            this.timer(tool_btn);
        }, false);
    }

    timer(tool_btn) {
        setTimeout(() => {
            tool_btn.style.pointerEvents = 'auto';
        }, 500);
    }
}
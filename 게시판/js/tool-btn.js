'use strict';

export default class Tool_btn {
    constructor(This) {
        this.tool_box = document.querySelector('.tool-box');
        
        This.Getter('tool_btn', 'button', 1, ['class'], ['tool-btn pointer'], ['<i class="fas fa-cog"></i>'], this.tool_box);
    
        this.tool_btn = document.querySelector('.tool-btn');
        this.tool = document.querySelector('.tool');

        this.active(this.tool_btn, this.tool);
    }

    active(tool_btn, tool) {
        tool_btn.addEventListener('click', e => {
            this.target = e.target;
            
            tool.classList.toggle('active');

            if(tool.classList.contains('active')) {
                this.target.style.transform = 'rotate(0.5turn)';
            }else {
                this.target.style.transform = 'rotate(-0.5turn)';
            }
        }, false);
    }
}
'use strict';

export default class Setting {
    constructor(aside) {
        // create tool-box
        this.tool_box = document.createElement('div');
        this.tool_box.setAttribute('class', 'tool-box');

        // add to tool-box
        aside.appendChild(this.tool_box);

        // create tool-btn
        this.tool_btn = document.createElement('span');
        this.tool_btn.setAttribute('class', 'tool-btn');

        // tool-btn-icon
        this.tool_btn_icon = `<i class="fas fa-cog"></i>`;

        // inner html in tool-btn
        this.tool_btn.innerHTML = this.tool_btn_icon;

        // add to tool-btn
        this.tool_box.appendChild(this.tool_btn);

        // create tool-container
        this.tool_container = document.createElement('div');
        this.tool_container.setAttribute('class', 'tool-container');

        // add to tool-container
        this.tool_box.appendChild(this.tool_container);

        // tool-btn click event
        this.tool_btn.addEventListener('click', e => {
            // target
            this.targe = e.target;

            // toggle
            this.tool_box.classList.toggle('active');
            this.tool_container.classList.toggle('ghost');

            // icon effect
            if(this.tool_box.classList.contains('active')) {
                
            }else {

            }
        }, false);
    }
}
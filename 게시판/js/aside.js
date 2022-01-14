'use strict';

import Tool from "./tool.js";

export default class Aside {
    constructor(app) {
        // create aside
        this.aside = document.createElement('aside');
        this.aside.setAttribute('class', 'aside Y common');

        // add to aside
        app.appendChild(this.aside);

        // create title
        this.title = document.createElement('h4');
        this.title.setAttribute('class', 'title');

        // inner text in title
        this.title.innerText = '게시판';

        // add to title
        this.aside.appendChild(this.title);

        // create library
        this.library = document.createElement('ul');
        this.library.setAttribute('class', 'library');

        // add to library
        this.aside.appendChild(this.library);

        // create tool-btn
        this.tool_btn = document.createElement('span');
        this.tool_btn.setAttribute('class', 'tool-btn');

        // tool-btn-icon
        this.tool_btn_icon = `<i class="fas fa-cog"></i>`;

        // inner html in tool-btn
        this.tool_btn.innerHTML = this.tool_btn_icon;

        // add to tool-btn
        this.aside.appendChild(this.tool_btn);

        this.tool_btn.addEventListener('click', e => {
            // target
            this.target = e.target;

            // select tool-wrap
            const tool_wrap = document.querySelector('.tool-wrap');

            // toggle
            tool_wrap.classList.toggle('active');

            if(tool_wrap.classList.contains('active')) {
                this.target.style.transform = 'rotate(0.5turn)';
            }else {
                this.target.style.transform = 'rotate(-0.25turn)';
            }
        }, false);

        // component
        this.tool = new Tool(this.aside, this.library);
    }
}
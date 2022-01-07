'use strict';

import BG from "./BG.js";

export default class Container {
    constructor() {
        // create container
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'container');

        // add to container
        document.body.appendChild(this.container);

        // create subTitle
        this.subTitle = document.createElement('span');
        this.subTitle.setAttribute('class', 'subTitle');

        // inner text in subTitle
        this.subTitle.innerText = 'SIMPLE DESIGN';

        // add to subTitle
        this.container.appendChild(this.subTitle);

        // BG
        this.BG = new BG(this.container);
    }
}
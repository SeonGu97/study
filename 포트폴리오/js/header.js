'use strict';

export default class Header {
    constructor() {
        // create header
        this.header = document.createElement('header');
        
        // add to header
        document.body.appendChild(this.header);

        // create logo
        this.logo = document.createElement('span');
        this.logo.setAttribute('class', 'logo');

        // inner text logo
        this.logo.innerText = 'PORTFOLIO-';

        // add to logo
        this.header.appendChild(this.logo);
    }
}
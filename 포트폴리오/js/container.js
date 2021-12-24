'use strict';

export default class Container {
    constructor() {
        // create container
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'container');

        // add to container
        document.body.appendChild(this.container);
    }
}
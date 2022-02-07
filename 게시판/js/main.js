'use strict';

export default class Main {
    constructor(create) {
        // app
        this.app = document.querySelector('#app');

        // create main
        create.launcher('main', 'main', ['class'], ['main'], [''], this.app, 1);
    }
}
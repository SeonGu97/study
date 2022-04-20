'ues strict';

import Top from "./top.js";

export default class Main {
    constructor(creator, wrap) {
        // create
        creator.basket('main', 'main', wrap, 1, [''], [''], '');

        // element
        this.main = document.querySelector('main');

        // component
        this.top = new Top(creator, this.main);
    }
}
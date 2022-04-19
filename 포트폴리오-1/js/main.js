'ues strict';

export default class Main {
    constructor(creator, wrap) {
        // create
        creator.basket('main', 'main', wrap, 1, [''], [''], '');

        // element
        this.main = document.querySelector('main');
    }
}
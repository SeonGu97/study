'use strict';

export default class Aside {
    constructor(Creator) {
        this.aside = new Creator('aside', 'aside', '', '', '', 1, document.body, false, '', '');
    }
}


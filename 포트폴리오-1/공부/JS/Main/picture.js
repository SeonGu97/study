'use strict';

export default class Picture {
    constructor(Creator, introduction) {
        // create
        this.picture = new Creator('picture', 'img', '', '', '', 1, introduction, false, '', '');
    }
}


'use strict';

export default class Picture {
    constructor(Creator, introduction) {
        // create
        this.picture = new Creator('picture', 'img', 'src', '/Images/취업사진1.jpg', '', 1, introduction, false, '', '');
    }
}


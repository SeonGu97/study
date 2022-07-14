'use strict';

export default class Bookcase {
    constructor(Create, library) {
        for(let i = 0; i < 2; i++) {
            const bookcase = new Create('bookcase', 'li', 'class', 'bookcase', library);
        }
    }
}
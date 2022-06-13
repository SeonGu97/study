'use strict';

export default class Book {
    constructor(Create, _library) {
        const num = 5;

        for(let i = 0; i < num; i++) {
            const _book = new Create('book', 'li', 'class', 'book basics', _library);
        }
    }
}
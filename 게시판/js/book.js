'use strict';

export default class Book {
    constructor(This, value, library) {
        This.Getter('book', 'li', value.length, ['class'], ['book pointer'], value, library);
    }
}
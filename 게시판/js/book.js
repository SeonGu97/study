'use strict'

export default class Book {
    constructor(CE, value, library) {
        
        CE.generator(
            'book',
            'li',
            ['class'],
            ['book pointer'],
            value,
            library,
            value.length
        );
    }
}
'use strict';

export default class Book {
    constructor(create, value) {
        this.library = document.querySelector('.library');
        
        // create aside
        create.launcher('book', 'li', ['class'], ['book'], [`${value}`], this.library, 1);
    }
}
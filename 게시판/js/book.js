'use strict';

export default class Book {
    constructor(create, value) {
        this.library = document.querySelector('.library');
        
        // create aside
        create.launcher('book', 'li', ['class'], ['book pointer'], [`${value}`], this.library, 1);
    }
}
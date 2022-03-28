'use strict';

export default class Letter {
    constructor(creator) {
        // element
        this.word = document.querySelectorAll('.word');

        for(let i = 0; i < this.word.length; i++) {
            creator.basket('letter', 'a', this.word[i], 1, ['class'], ['letter'], `content ${1 + i}`);
        }; 
    }
}
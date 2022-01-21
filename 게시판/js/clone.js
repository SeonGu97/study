'use strict';

export default class Clone {
    constructor(This) {
        this.remove_box = document.querySelector('.remove-box');

        This.Getter('clone', 'div', 1, ['class'], ['clone'], [''], this.remove_box);
    
        this.library = document.querySelector('.library');

        this.clone = document.querySelector('.clone');
        console.log(this.library.cloneNode(true))
        this.clone.append(this.library.cloneNode(true));
    }
}
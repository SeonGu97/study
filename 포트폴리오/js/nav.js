'use strict';

export default class Nav {
    constructor(value) {
        // create nav
        this.nav = document.createElement('nav');
        this.nav.setAttribute('id', 'fp-nav');

        // add to nav
        document.body.appendChild(this.nav);

        // create ul
        this.ul = document.createElement('ul');

        // add to ul
        this.nav.appendChild(this.ul);

        for(let i = 0; i < value; i++) {
            // create li 
            this.li = document.createElement('li');

            // add to ul
            this.ul.appendChild(this.li);

            // create a
            this.a = document.createElement('a');
            this.a.setAttribute('href', `_${i + 1}`);
            this.a.setAttribute('data-menuanchor', [i + 1]);

            // add to a
            this.li.appendChild(this.a);

            // create text
            this.text = document.createElement('span');
            this.text.setAttribute('class', 'fp-sr-only');

            // add to text
            this.a.appendChild(this.text);

            // create span
            this.span = document.createElement('span');

            // add to span
            this.a.appendChild(this.span);

            // create radio
            this.radio = document.createElement('div');
            this.radio.setAttribute('class', 'fp-tooltip fp-right');

            // add to radio
            this.li.appendChild(this.radio);
        }
    }
}
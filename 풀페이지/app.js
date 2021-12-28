'use strict';

// create app
const app = document.createElement('div');
app.setAttribute('id', 'app');

// create ul
const ul = document.createElement('ul');
ul.setAttribute('class', 'ul');

// value
let value = 4;

// create li
for(let i = 0; i < value; i++) {
    const li = document.createElement('li');
    li.setAttribute('class', 'li');
}
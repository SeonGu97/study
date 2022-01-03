'use strict';

// create app
const app = document.createElement('div');
app.setAttribute('id', 'app');

// add to app
document.body.appendChild(app);

// create box
const box = document.createElement('ul');
box.setAttribute('class', 'box');

// add to box
app.appendChild(box);

const value = 5;

// create item
for(let i = 0; i < value; i++) {
    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    // inner text in item
    item.innerText = [i + 1];

    // add to item
    box.appendChild(item);
}

// html
const html = document.querySelector('html');

// counter
let counter = 0;

// scroll event
window.addEventListener('wheel', e => {
    e.preventDefault();

    // scroll
    let scroll = e.deltaY;

    // min
    if(counter < 0) counter = 0;

    // max
    if(counter > value) counter = value - 1;

    if(scroll == 100) {
        counter++;
    }else if(scroll == -100) {
        counter--;
    }

    window.scrollTo({
        top: window.innerHeight * counter,
    });
}, {passive: false});
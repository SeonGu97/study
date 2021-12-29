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

// value
let value = 4;

// create item
for(let i = 0; i < value; i++) {
    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    // add to item
    box.appendChild(item);
}

// window scroll event
window.addEventListener('scroll', windowScroll, false);

let counter = 1;

let Top = document.documentElement.scrollTop || 0;

// windowScroll
function windowScroll(e) {
    // Y
    let Y = document.documentElement.scrollTop;

    // result
    let result = Y - Top >= 0 ? true : false;

    //  Top = Y
    Top = Y;

    // gap
    let gap = window.scrollY;
    
    // height
    let height = window.innerHeight;

    // style
    document.body.style.overflow = 'hidden';
    box.style.transition = '0.5s';
    box.style.transform = `translateY(-${(height * counter) - gap}px)`;
}

box.addEventListener('transitionend', () => {
    setTimeout( () => {
        document.body.style.overflow = 'auto';
        counter++;
    }, 500);
}, false);


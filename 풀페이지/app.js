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

    // add to item
    box.appendChild(item);
}

// resize event
window.addEventListener('resize', resize, false);

// H
let H = document.documentElement.offsetHeight;

// gap
let gap = window.scrollY;

let result;

// resize
function resize(H, gap, value) {
   return result = (H  / value) - gap;
}

// resize()
const windowSize = resize(H, gap, value, result);


// ST
let ST = document.documentElement.scrollTop || 0;

// counter
let counter = 0;

// scroll event
window.addEventListener('scroll', e => {
    // Y
    let Y = document.documentElement.scrollTop;

    // size
    let size = Y - ST >= 0 ? true : false;

    // ST = Y
    ST = Y;

    // gap
    let gap = window.scrollY;
    
    if(size) {
        document.body.style.overflow = 'hidden';
        counter++;
        box.style.transition = '0.4s';
        box.style.transform = `translateY(-${(result * counter) - gap}px)`;
    }else {
        document.body.style.overflow = 'hidden';
        counter--;
        box.style.transition = '0.4s';
        box.style.transform = `translateY(-${(result * counter) - gap}px)`;
    }

    console.log((result * counter) - gap);
}, false);

// transitionend event
window.addEventListener('transitionend', () => {
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 500);
}, false);


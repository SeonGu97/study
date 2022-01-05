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

    // create num
    const num = document.createElement('span');
    num.setAttribute('class', 'num');

    // inner text in num
    num.innerText = [i + 1];

    item.appendChild(num);

    // inner text in item
    item.innerText = [i + 1];

    // add to item
    box.appendChild(item);
}

window.addEventListener('resize', () => {
    box.style.transition = 'none';
    box.style.transform = `translateY(-${(window.innerHeight * counter) - window.scrollY}px)`;
})

// html
const html = document.querySelector('html');

// ST
let ST = document.documentElement.scrollTop || 0;

// counter
let counter = 1;

// ani
function ani(sensors, H, gap) {
    if(counter < 0) {
        counter = 1
    }else if(counter >= value) {
        counter = value;
    }

    let result = (H * counter) - gap;

    if(!sensors) {
        ++counter;
    }else {
        --counter;
    };
    // box.style.transform = `translateY(-${result}px)`;
}

// scroll
window.addEventListener('scroll', () => {
    // html.style.overflow = 'hidden';

    let Y = document.documentElement.scrollTop;

    let sensors = Y - ST >= 0 ? false : true;
    console.log(sensors)
    
    ST = Y;

    // H
    let H = window.innerHeight;

    // gap
    let gap = window.scrollY;

    // ani()
    ani(sensors, H, gap);

    window.addEventListener('transitionend', () => {
        setTimeout(() => {
            html.style.overflow = 'auto';
        }, 500);
    }, false);

    active();
})

const items = document.querySelectorAll('.item');
items[0].classList.add('active');

// active
function active() {
    for(let i = 0; i < value; i++) {
        items[i].classList.remove('active');
    }
    
    items[counter - 1].classList.add('active');
}


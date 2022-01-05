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

    // create num
    const num = document.createElement('span');
    num.setAttribute('class', 'num');

    // inner text in num
    num.innerText = [i + 1];

    item.appendChild(num);
}

window.addEventListener('resize', () => {
    box.style.transition = 'none';
    box.style.transform = `translateY(-${(window.innerHeight * counter) - window.scrollY}px)`;
})

// counter
let counter = 0;

const items = document.querySelectorAll('.item');
items[0].classList.add('active');

// scroll
window.addEventListener('wheel', e => {
    e.preventDefault();

    // scroll
    let scroll = e.deltaY;

    if(scroll === 100){
        counter++;
    }else if(scroll === -100) {
        counter--;
    }

    for(let i = 0; i < value; i++) {
        items[i].classList.remove('active');
    }

    if(counter >= value) {
        counter = value - 1;
        add();
    }else if(counter < 0) {
        counter = 0;
        add();
    }
    else {
        add();
    }

    move();
}, {passive: false});


function add() {
    items[counter].classList.add('active');
}

function move() {
    // find
    let find =items[counter].classList.contains('active');

    // text
    let text = items[counter].childNodes[1].innerText - 1;

    // result
    let result = window.innerHeight * text;
    
    if(find) {
        box.style.transform = `translateY(-${result}px)`;
    }   
}


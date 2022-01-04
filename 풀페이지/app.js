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

const counter = 0;

window.addEventListener('wheel', e => {
    const Ani = ani();
},);


// ani
function ani() {
    requestAnimationFrame(ani);
}



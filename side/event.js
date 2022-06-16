'use strict';

const _window = window.addEventListener('load', () => {
    const box = document.querySelector('.box');
    box.childNodes.forEach(element => {
        add(0, element, 'boom-y');
    });

    const area_1 = document.querySelector('.area-1');

    area_1.childNodes.forEach(element => {
        add(0, element, 'boom-y');

        remove(300, element, 'un-transparent');
    });

    const area_2 = document.querySelector('.area-2');

    area_2.childNodes.forEach(element => {
        add(0, element, 'boom-y');

        remove(300, element, 'un-transparent');
    });

    const main = document.querySelector('main');
    add(1750, main, 'boom-y');
    remove(1750, main, 'un-transparent');
});

function remove(delay, element, value) {
    setTimeout(() => {
        element.classList.remove(value);
    }, delay);
}

function add(delay, element, value) {
    setTimeout(() => {
        element.classList.add(value);
    }, delay);
}

export default _window;
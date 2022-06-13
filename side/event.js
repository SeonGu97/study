'use strict';

const _window = window.addEventListener('load', () => {
    const box = document.querySelector('.box');
    box.childNodes.forEach(element => {
        add(0, element, 'boom-y');
    });

    const aside = document.querySelector('aside');
    aside.childNodes.forEach(element => {
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
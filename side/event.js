'use strict';

const _window = window.addEventListener('load', () => {
    const box = document.querySelector('.box');

    box.childNodes.forEach(element => {
        element.classList.add('boom-y');
    });

    const aside = document.querySelector('aside');

    aside.classList.add('boom-x');
});

export default _window;
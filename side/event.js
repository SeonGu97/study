'use strict';

const _window = window.addEventListener('load', () => {
    const nav = document.querySelector('nav');
    nav.childNodes.forEach(element => {
        element.classList.add('boom');
    });
});

export default _window;
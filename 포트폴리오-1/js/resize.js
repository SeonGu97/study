'use strict';

window.addEventListener('resize', resize, false);

function resize() {
    const _1350px = matchMedia('all and (max-width: 1350px)').matches;
    const _1024px = matchMedia('all and (max-width: 1024px)').matches;
    const _768px = matchMedia('all and (min-width: 768px)').matches;
    const _480px = matchMedia('all and (max-width: 480px)').matches;

    const app = document.querySelector('#app');
    const aside = document.querySelector('aside');
}

export default resize;
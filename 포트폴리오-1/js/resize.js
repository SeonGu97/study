'ues strict';

// event
window.addEventListener('resize', resize, false);

// func
function resize() {
    // media query size
    const _1349px = matchMedia('screen and (max-width: 1350px)').matches;
    const _1023px = matchMedia('screen and (max-width: 1024px)').matches;
    const _768px = matchMedia('screen and (max-width: 768px)').matches;
    const _480px = matchMedia('screen and (max-width: 480px)').matches;

    const wrap = document.querySelector('.wrap');
    const aside = document.querySelector('aside');
    const menu = document.querySelectorAll('.menu');
    const box = document.querySelector('.box');
    const screen = document.querySelector('.screen');

    if(_1349px) {
        aside.classList.contains('show') ? wrap.classList.remove('gap') : '';
        aside.classList.contains('show') ? menu.forEach(menu => {
            menu.classList.remove('active');
        }) : '';
        !wrap.classList.contains('gap') ? aside.classList.remove('show') : '';

        aside.classList.contains('static') ? aside.classList.add('show') : '';
        aside.classList.contains('static') ? menu.forEach(menu => {
            menu.classList.add('active');
        }) : '';
    }else {
        aside.classList.contains('static') ? aside.classList.remove('show') : '';
        aside.classList.contains('static') ? menu.forEach(menu => {
            menu.classList.remove('active');
        }) : '';
        aside.classList.remove('static');
    }

    if(_1023px) {
        wrap.classList.remove('gap-2');
        box.classList.remove('show-2');
        screen.classList.remove('active-2');
        const left = '<i class="bi bi-arrow-bar-left pointer"></i>';

        if(screen.classList.contains('active-2')) {
            screen.innerHTML = left;
        }
    }
}

// push
export default resize;
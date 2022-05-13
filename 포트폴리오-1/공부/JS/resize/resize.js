window.addEventListener('resize', resize, false);

function resize() {
    const _1300px = matchMedia("(max-width: 1300px)").matches;

    const aside = document.querySelector('aside');
    const library = document.querySelector('.library');
    const books = document.querySelectorAll('.book');
    const icons = document.querySelectorAll('.book > i');
    const words = document.querySelectorAll('.words');
    const clone_aside = document.querySelector('.clone-aside');
    const bg = document.querySelector('.bg');

    if(_1300px) {
        this.aside.classList.add('small') ? '' : '';
    }else {

    }
}

export default resize;
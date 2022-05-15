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
        if(aside.classList.contains('small')) {
            aside.classList.remove('small');

            library.classList.remove('remove-pd');

            books.forEach(books => {
                books.classList.remove('change');
            });

            icons.forEach(icons => {
                icons.classList.remove('line-up');
            });

            words.forEach(words => {
                words.classList.remove('line-up');
            });
        }
    }else {
        if(clone_aside.classList.contains('show')) {
            const delay = 300;
            let timer = null;

            clearTimeout(timer);

            timer = setTimeout(() => {
                aside.classList.remove('small');

                library.classList.remove('remove-pd');

                books.forEach(books => {
                    books.classList.remove('change');
                });

                icons.forEach(icons => {
                    icons.classList.remove('line-up');
                });

                words.forEach(words => {
                    words.classList.remove('line-up');
                });
                
                clone_aside.classList.remove('show');

                bg.classList.add('gone');
            }, delay);
        }
    }
}

export default resize;
'use strict';

export default class Device {
    constructor(Create, screen) {
        const num = 3;

        for(let i = 0; i < num; i++) {
            const device = new Create('device', 'div', 'class', 'device', screen);
            
            const btn = new Create('btn', 'input', 'type', 'radio', device);
            btn.setAttribute('class', 'btn');
            btn.setAttribute('name', 'radio');

            const icon = document.createElement('span');
            icon.setAttribute('class', 'icon');
            btn.after(icon);

            const array = ['<i class="fa-solid fa-display"></i>', '<i class="fa-solid fa-tablet-screen-button"></i>', '<i class="fa-solid fa-mobile-screen-button"></i>'];
            icon.innerHTML = array[i];
        }

        screen.childNodes.forEach(element => {
            element.addEventListener('click', this.deviceEvent, false);
        });

        screen.firstChild.firstChild.checked = true;
        screen.firstChild.childNodes[1].firstChild.style.color = '#6d5dfc';

        window.addEventListener('resize', this.resize, false);
    }

    deviceEvent(e) {
        let target = e.target;

        const num = 3;

        const btn = document.querySelectorAll('.btn');

        for(let i = 0; i < num; i++) {
            btn[i].index = i;

            const icon_i = document.querySelectorAll('.icon > i');

            if(btn[i].checked) {
                icon_i[target.index].style.color = '#6d5dfc';
            }else {
                icon_i[i].style.color = '#9baacf';
            }
        }

        const array = ['pc', 'tablet', 'mobile'];

        const main = document.querySelector('main');

        main.classList.replace(main.classList[0], array[target.index])
    }

    resize(e) {

    }
}
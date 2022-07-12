'use strict';

export default class Clock_switch {
    constructor(Create, clock) {
        const clock_switch = new Create('clock_switch', 'div', 'class', 'clock_switch', clock);
    
        for(let i = 0; i < 2; i++) {
            const _switch = new Create('_switch', 'div', 'class', 'switch', clock_switch);
        
            const array = ['type1', 'type2'];

            _switch.innerText = array[i];
        }

        const cover = new Create('cover', 'div', 'class', 'cover', clock_switch);

        const _switch = document.querySelectorAll('.switch');
        _switch[0].classList.add('paint');

        _switch.forEach((element, index) => {
            element.addEventListener('click', e => {
                const clock = document.querySelector('.clock');

                for(let i = 0; i < clock.childNodes.length; i++) {
                    clock.childNodes[i].classList.remove('hide');
                }

                clock.childNodes[index].classList.add('hide');

                const width = cover.getBoundingClientRect().width;

                if(index == 0) {
                    cover.style.left = `${(width * index) + 4}px`;
                }else {
                    cover.style.left = `${(width * index) + 12}px`;
                }

                let target = e.target;

                for(let i = 0; i < _switch.length; i++) {
                    _switch[i].classList.remove('paint');
                }

                target.classList.add('paint');
            }, false);
        });
    }
}
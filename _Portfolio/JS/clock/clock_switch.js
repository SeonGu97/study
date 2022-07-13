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
        const width = cover.getBoundingClientRect().width;

        const _switch = document.querySelectorAll('.switch');

        let key = 'clock';
        let value;

        if(localStorage.getItem(key) == null) {
            value = [];
        }else {
            value = JSON.parse(localStorage.getItem(key));
        }

        const _clock = document.querySelector('.clock');

        _switch.forEach((element, index) => {
            element.addEventListener('click', e => {
                cover.style.transition = '.2s ease';

                for(let i = 0; i < _clock.childNodes.length; i++) {
                    _clock.childNodes[i].classList.remove('hide');
                }

                _clock.childNodes[index].classList.add('hide');

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

                value.push(index);
                value.splice(value.indexOf(value[0]), 1);

                localStorage.setItem(key, JSON.stringify(value));
            }, false);
        });

        if(value == 0) {
            cover.style.left = `${(width * value[0]) + 4}px`;
        }else {
            cover.style.left = `${(width * value[0]) + 12}px`;
        }

        _switch[value].classList.add('paint');
        _clock.childNodes[value].classList.add('hide');
    }
}
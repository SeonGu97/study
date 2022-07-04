'use strict';

export default class Analog {
    constructor(Create, app) {
        const analog = new Create('analog', 'div', 'class', 'analog', app);

        const num = 12;

        for(let i = 0; i < num; i++) {
            const number = new Create('number', 'div', 'class', 'number', analog);
            number.innerText = i + 1;

            const numbers = document.querySelectorAll('.number');
            numbers[i].style.transform = `rotate(${30 * (i + 1)}deg)`;
        }

        const brand = new Create('brand', 'span', 'class', 'brand', analog);
        brand.innerText = 'KSG';

        const hour_hand = new Create('hour', 'div', 'class', 'hour', analog);
        const minute_hand = new Create('minute', 'div', 'class', 'minute', analog);
        const second_hand = new Create('second', 'div', 'class', 'second', analog);

        setInterval(this.time, 1000);
    }

    time() {    
        const second_hand = document.querySelector('.second');
        const minute_hand = document.querySelector('.minute');
        const hour_hand = document.querySelector('.hour');

        const date = new Date();
        const second = date.getSeconds() / 60;
        const minute = (second + date.getMinutes())  / 60;
        const hour = (minute + date.getHours()) / 12;

        this.setRotate(second_hand, second);
        this.setRotate(minute_hand, minute);
        this.setRotate(hour_hand, hour);
    }

    
    setRotate(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }
}
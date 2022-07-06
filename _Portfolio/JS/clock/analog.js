'use strict';

export default class Analog {
    constructor(Create, clock) {
        const analog = new Create('analog', 'div', 'class', 'analog', clock);

        const content = new Create('content', 'div', 'class', 'content1', analog);

        const num = 12;

        for(let i = 0; i < num; i++) {
            const number = new Create('number', 'div', 'class', 'number', content);
            number.innerText = '|';

            const numbers = document.querySelectorAll('.number');
            numbers[i].style.transform = `rotate(${30 * (i + 1)}deg)`;
        }

        const brand = new Create('brand', 'span', 'class', 'brand', content);
        brand.innerText = 'KSG';

        const hour_hand = new Create('hour', 'div', 'class', 'hour', content);
        const minute_hand = new Create('minute', 'div', 'class', 'minute', content);
        const second_hand = new Create('second', 'div', 'class', 'second', content);

        setInterval(() => {
            const date = new Date();
            const second = date.getSeconds() / 60;
            const minute = (second + date.getMinutes())  / 60;
            const hour = (minute + date.getHours()) / 12;
    
            this.setRotate(second_hand, second);
            this.setRotate(minute_hand, minute);
            this.setRotate(hour_hand, hour);
        }, 1000);
    }

    setRotate(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }
}
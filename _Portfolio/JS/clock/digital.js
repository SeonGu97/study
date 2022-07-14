'use strict';

export default class Digital {
    constructor(Create, clock) {
        const digital = new Create('digital', 'div', 'class', 'digital', clock);

        const content = new Create('content', 'div', 'class', 'content2', digital);

        const h = new Create('h', 'span', 'class', 'h', content);
        const colon = new Create('colon', 'span', 'class', 'span', content);
        colon.innerText = ':';
        const m = new Create('m', 'span', 'class', 'm', content);
        const session = new Create('session', 'span', 'class', 'session', content);

        setInterval(() => {
            this.getTime(h, m, session);
        }, 1000);

        setInterval(() => {
            colon.classList.contains('opacity') ? colon.classList.remove('opacity') : colon.classList.add('opacity');
        }, 500);
    }

    getTime(h, m, s) {
        const date = new Date();
        let minute = date.getMinutes();
        let hour = date.getHours();
        let session = 'AM';

        if(hour > 12) {
            session = 'PM';
        }else {
            session = 'AM';
        }

        hour == 0 ? hour = 12 : hour;
        (hour > 12) ? hour -= 12 : hour;
        (hour > 12) ? hour = '0' + hour : hour;
        (minute < 10) ? minute = '0' + minute : minute;

        h.innerText = `${hour}`;
        m.innerText = `${minute}`;
        s.innerText = `${session}`
    }
}
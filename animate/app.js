'use strict';

class App {
    constructor() {
        this.app = document.createElement('div');
        this.attrs = this.app.setAttribute('id', 'app');
        document.body.appendChild(this.app);

        const ani = this.app.animate([
            {transform: 'translate3d(0px, 0px, 0px)', offset: 0},
            {transform: 'translate3d(100px, 0px, 0px)', offset: 0.25},
            {transform: 'translate3d(100px, 100px, 0px)', offset: 0.5},
            {transform: 'translate3d(0px, 100px, 0px)', offset: 0.75},
            {transform: 'translate3d(0px, 0px, 0px)', offset: 1}
        ], {
            duration: 1500,
            iterations: Infinity,
            easing: "ease-in-out",// "linear", "ease", "ease-in", "ease-out"
            delay: 10,
            direction: 'alternate'//'normal', 'reverse', 'alternate', 'alternate-reverse'
        });

        this.num = 5;

        for(let i = 0; i < 5; i++) {
            this.btn = document.createElement('button');
            this.attrs = this.btn.setAttribute('class', 'btn');
            document.body.appendChild(this.btn);
        }

        const btnAll = document.querySelectorAll('.btn');
        btnAll[0].innerText = 'play()';
        btnAll[1].innerText = 'pause()';
        btnAll[2].innerText = 'cancel()';
        btnAll[3].innerText = 'finish()';
        btnAll[4].innerText = 'playState()';

        btnAll[0].addEventListener('click', () => {
            ani.play();
        })
        
        btnAll[1].addEventListener('click', () => {
            ani.pause();
        })

        btnAll[2].addEventListener('click', () => {
            ani.cancel();
        })

        btnAll[3].addEventListener('click', () => {
            ani.finish();
        })

        btnAll[4].addEventListener('click', () => {
            ani.playState();
        })

        this.range = document.createElement('input');
        this.range.setAttribute('type', 'range');
        this.range.setAttribute('min', '0');
        this.range.setAttribute('max', '10');

        document.body.appendChild(this.range);

        this.span = document.createElement('span');

        document.body.appendChild(this.span);

        this.span.innerText = this.range.value;
    }
}

const app = new App();
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

        this.createBox = document.createElement('div');
        this.createBox.setAttribute('class', 'box');
        document.body.appendChild(this.createBox);

        this.num = 6;

        for(let i = 0; i < this.num; i++) {
            this.btn = document.createElement('button');
            this.attrs = this.btn.setAttribute('class', 'btn');
            this.createBox.appendChild(this.btn);
        }

        const btnAll = document.querySelectorAll('.btn');

        btnAll[0].innerText = 'play()';
        btnAll[1].innerText = 'pause()';
        btnAll[2].innerText = 'cancel()';
        btnAll[3].innerText = 'finish()';
        btnAll[4].innerText = 'reverse()';
        btnAll[5].innerText = 'playState()';

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
            ani.reverse();
        })

        btnAll[5].addEventListener('click', () => {
            console.log(ani.playState);
        })


        for(let i = 0; i < 2; i++) {
            this.range = document.createElement('input');
            this.range.setAttribute('type', 'range');
            this.createBox.appendChild(this.range);

            this.span = document.createElement('span');

            this.range.after(this.span);
        }

        this.rangeAll = document.querySelectorAll('input');
        this.spanAll = document.querySelectorAll('span');

        this.rangeAll[0].setAttribute('min', '0');
        this.rangeAll[0].setAttribute('max', '10');
        this.rangeAll[0].setAttribute('value', '1');

        this.spanAll[0].innerText = this.rangeAll[0].value;

        this.rangeAll[1].setAttribute('min', '0');
        this.rangeAll[1].setAttribute('max', '5000');
        this.rangeAll[1].setAttribute('value', '1');

        this.spanAll[1].innerText = this.rangeAll[1].value;

        this.rangeAll[0].addEventListener('change', () => {
            this.spanAll[0].innerText = this.rangeAll[0].value;
            ani.playbackRate = this.rangeAll[0].value; 
        });

        this.rangeAll[1].addEventListener('change', () => {
            this.spanAll[1].innerText = this.rangeAll[1].value;
            ani.currentTime = this.rangeAll[1].value; 
        });
    }
}

const app = new App();
'use strict';

// setting
import Setting from "./setting/setting.js";

class App {
    constructor() {
        // create app
        this.app = document.createElement('div');
        this.app.setAttribute('id', 'app');

        // add to app
        document.body.appendChild(this.app);

        // loop()
        this.loop(Setting[0].value);

        // select all
        this.dropAll = document.querySelectorAll('.drop');

        // drop click event
        this.dropAll.forEach(drop => {
            drop.addEventListener('click', e => {
                // target_1
                this.target_1 = e.target.closest('.container');

                // target_1 toggle
                this.target_1.classList.toggle('active');

                // target_2
                this.target_2 = e.target.closest('.bar');
                
                // target_2 style
                this.target_2.style.bottom = '0px';

                if(this.target_1.classList.contains('active')) {
                    e.target.style.transform = 'rotate(0.5turn)';
                }else {
                    e.target.style.transform = 'rotate(1turn)';
                }

            }, false);

            setInterval(() => {
                drop.animate([
                    {transform: 'translateY(0px)'}, 
                    {transform: 'translateY(0.8rem)'},
                ], {duration: 1000})
            }, 1500);

            drop.addEventListener('transitionend', () => {
                drop.style.transform = 'translateY(0px)';
            }, false);
        });
    }

    create() {
        // create container
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'container');

        // add to container
        this.app.appendChild(this.container);
        
        // create bar
        this.bar = document.createElement('div');
        this.bar.setAttribute('class', 'bar');

        // add to bar
        this.container.appendChild(this.bar);

        // create drop
        this.drop = document.createElement('button');
        this.drop.setAttribute('class', 'drop');

        // add to drop
        this.bar.appendChild(this.drop);

        // icon
        this.icon = `<i class="fas fa-angle-double-down"></i>`;

        // add to icon
        this.drop.innerHTML = this.icon;
    }

    loop(value) {
        for(let i = 0; i < value; i++) {
            this.create();
        }
    }
}

const app = new App();

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

        // create container
        this.container = document.createElement('section');
        this.container.setAttribute('class', 'container');

        // add to container
        this.app.appendChild(this.container);

        // create logo
        this.logo = document.createElement('span');
        this.logo.setAttribute('class', 'logo');

        // logo inner text
        this.logo.innerText = 'PORTFOLIO-';

        // add to logo
        this.container.appendChild(this.logo);

        // app from to
        gsap.fromTo('#app', 
            {
                x: '-500%',
            },
            {
                x: '0',
                duration: 1.5,
            }
        );

        // container from to
        gsap.fromTo('.container', 
            {
                x: '200%',
                with: '0%',
                height: '1%'
            },
            {
                x: '0%',
                duration: 2,
            }
        );
        
        // container to
        gsap.to('.container', 
            {
                height: '100%',
                delay: 2.25,
            },
        );

        // logo from to
        gsap.fromTo('.logo', 
            {
                opacity: 0,
                y: '0',
            },
            {
                opacity: 1,
                delay: 3,
                y: '-200%',
            }
        );
    }
}

const app = new App();

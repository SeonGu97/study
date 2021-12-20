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

        // create cntr
        this.cntr = document.createElement('div');
        this.cntr.setAttribute('class', 'cntr');

        // add to cntr
        this.app.appendChild(this.cntr);

        // create box
        for(let i = 0; i < Setting[0].value; i++) {
            this.box = document.createElement('section');
            this.box.setAttribute('class', `box num-${i + 1}`);

            // add to box
            this.cntr.appendChild(this.box);

            // create item
            this.item = document.createElement('div');
            this.item.setAttribute('class', 'item');

            // add to item
            this.box.appendChild(this.item);
        }

        gsap.registerPlugin(ScrollTrigger);
        
        // create box
        for(let i = 0; i < Setting[0].value; i++) {
            
        }
    }
}

const app = new App();

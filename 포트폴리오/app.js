'use strict';

// setting
import Setting from "./setting/setting.js";

class App {
    constructor() {
        // create container
        this.container = document.createElement('div');
        this.container.setAttribute('id', 'fullpage');

        // add to container
        document.body.appendChild(this.container);

        for(let i = 0; i < Setting[0].value; i++) {
            // create section
            this.section = document.createElement('section');
            this.section.setAttribute('class', 'section');

            // add to section
            this.container.appendChild(this.section);

            // create title
            this.title = document.createElement('span');
            this.title.setAttribute('class', 'title');

            // inner text in title
            this.title.innerText = `${[i + 1]} page`;

            // add to title
            this.section.appendChild(this.title);
        }

        new fullpage('#fullpage', {
            licenseKey : '1166E845-353B4D41-AC9B1593-5E1F10DD',
            autoScrolling: true,
        });
    }
}

const app = new App();

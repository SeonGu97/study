'use strict';

// setting
import Setting from "./setting/setting.js";

// components
import Header from "./js/header.js";
import Container from "./js/container.js";
import Footer from "./js/footer.js";
import Nav from "./js/nav.js";

class App {
    constructor() {
        // create fullpage
        this.fullpage = document.createElement('div');
        this.fullpage.setAttribute('id', 'fullpage');

        // add to fullpage
        document.body.appendChild(this.fullpage);

        for(let i = 0; i < Setting[0].value; i++) {
            // create section
            this.section = document.createElement('section');
            this.section.setAttribute('class', `section _${i + 1}`);

            // add to section
            this.fullpage.appendChild(this.section);

            // create title
            this.title = document.createElement('div');
            this.title.setAttribute('class', 'title');

            // inner text in title
            this.title.innerText = `${[i + 1]} page`;

            // add to title
            this.section.appendChild(this.title);
        }
        
        // Header
        this.Header = new Header();

        // Container
        this.Container = new Container();

        // Footer
        this.Footer = new Footer();

        // Nav
        this.Nav = new Nav(Setting[0].value);

        // fullpage.js
        new fullpage('#fullpage', {
            licenseKey : '1166E845-353B4D41-AC9B1593-5E1F10DD',
            autoScrolling: true,
            anchors: ['1', '2', '3', '4'],
            menu: '#fp-nav',
        });
    }
}

const app = new App();

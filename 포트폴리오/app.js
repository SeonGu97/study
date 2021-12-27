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

        // animation
        gsap.from('header', {
            y: '-100%',
            opacity: 0,
            delay: 4
        })

        gsap.from('footer', {
            y: '100%',
            opacity: 0,
            delay: 4.5
        })

        gsap.fromTo('.container', 
            {
                width: '45%',
                height: '0.5%',
                top: '50%',
                left: '30%',
                border: 0,
                borderRadius: '2rem',
                background: '#eceff1'
            },
            {
                width: '100%',
                left: '0',
                borderRadius: '0',
                delay: 1   
            }
        )

        gsap.to('.container', {
            delay: 2,
            height: '100%',
            top: '0',
        })

        gsap.to('.container', {
            delay: 3,
            borderTop: '3rem solid #1B365C',
            borderRight: '2rem solid #1B365C',
            borderLeft: '2rem solid #1B365C',
            borderBottom: '2.5rem solid #1B365C',
            background: ''
        })

        gsap.fromTo('body',
            {
                background: '#212121'
            },
            {
                background: '',
                delay: 3
            }
        )

        gsap.from('#fullpage',
            {
                opacity: 0,
                duration: 1,
                delay: 5.5
            },
        )

        gsap.from('#fp-nav', {
            x: '250%',
            opacity: 1,
            delay: 6
        })
    }
}

const app = new App();

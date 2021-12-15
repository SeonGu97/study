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

        // create wrap
        this.wrap = document.createElement('div');
        this.wrap.setAttribute('class', 'wrap');

        // add to wrap
        this.app.appendChild(this.wrap);

        // create BG
        this.BG = document.createElement('div');
        this.BG.setAttribute('class', 'BG');

        // add to BG
        this.wrap.appendChild(this.BG);

        // create header
        this.header = document.createElement('header');

        // create logo
        this.logo = document.createElement('span');
        this.logo.setAttribute('class', 'logo');

        // title
        const title = 'PORTFOLIO-';

        // inner text in logo 
        this.logo.innerText = title;

        // add to logo
        this.header.appendChild(this.logo);
        
        // add to header 
        this.wrap.appendChild(this.header);

        // create cntr
        this.cntr = document.createElement('section');
        this.cntr.setAttribute('class', 'cntr');

        // add to cntr
        this.wrap.appendChild(this.cntr);

        // create footer
        this.footer = document.createElement('footer');

        // add to footer
        this.wrap.appendChild(this.footer);

        // cerate copyright
        this.copyright = document.createElement('span');
        this.copyright.setAttribute('class', 'copyright');

        // copyright
        const copyright = '©2021 PORTPOLIO-';

        // inner text in copyright
        this.copyright.innerText = copyright;

        // add to copyright
        this.footer.appendChild(this.copyright);

        // create github
        this.github = document.createElement('a');
        this.github.setAttribute('class', 'github');
        this.github.setAttribute('href', 'https://github.com/SeonGu97');
        this.github.setAttribute('target', 'blank');

        // add to github
        this.footer.appendChild(this.github);

        // github
        const github = `<i class="fab fa-github"></i>` + 'seongu97';

        // inner HTML in github
        this.github.innerHTML = github;

        // create nav
        this.nav = document.createElement('nav');
        
        // add to nav
        this.wrap.appendChild(this.nav);

        // create menu
        this.menu = document.createElement('span');
        this.menu.setAttribute('class', 'menu');

        // menu
        const menu = `<i class="fas fa-dice-d20"></i>`;

        // inner text in menu
        this.menu.innerHTML = menu;

        // add to menu
        this.nav.appendChild(this.menu);

        // create radios
        this.radios = document.createElement('div');
        this.radios.setAttribute('class', 'radios');

        // add to radios
        this.wrap.appendChild(this.radios);

        // create item
        for(let i = 0; i < Setting[0].value; i++) {
            this.item = document.createElement('input');
            this.item.setAttribute('class', 'item');
            this.item.setAttribute('type', 'radio');
            this.item.setAttribute('name', 'items');
            this.item.setAttribute('value', i);

            // add to item
            this.radios.appendChild(this.item);
        }

        // wrap
        gsap.to('.wrap',
            {
                background: '#1B365C',
                duration: 0.5,
                delay: 1.5
            },
        );

        // cnter
        gsap.fromTo('.cntr',
            {
                width: '50%',
                height: '0.5%',
                borderRadius: '1rem',
                opacity: 0.5,
            },
            {
                width: '100%',
                borderRadius: '0',
                rotation: 0,
                opacity: 1,
                delay: 1,
            }
        );

        gsap.to('.cntr',
            {
                height: '100%',
                delay: 2.1
            }
        );

        // header
        gsap.from('header',
            {
                y: '200%',
                delay: 3,
                opacity: 0
            }
        );

        // footer
        gsap.from('footer', 
            {
                y: '-200%',
                delay: 3.5,
                opacity: 0
            }
        );

        // nav
        gsap.from('nav', 
            {
                opacity: 0,
                delay: 4,
            }
        );

        // radios
        gsap.from('.radios', 
            {
                opacity: 0,
                delay: 4.5,
                stagger: 1,
            }
        );

        // item
        gsap.from(".item", {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 5, 
            stagger: 0.2,
            ease: "elastic", 
            force3D: true
        });
    }
}

const app = new App();

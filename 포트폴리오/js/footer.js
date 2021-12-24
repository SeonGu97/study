'use strict';

export default class Footer {
    constructor() {
        // create footer
        this.footer = document.createElement('footer');
        this.footer.setAttribute('class', 'footer');

        // add to footer
        document.body.appendChild(this.footer);

        // create copyright
        this.copyright = document.createElement('span');
        this.copyright.setAttribute('class', 'copyright');

        // inner text copyright
        this.copyright.innerText = '©2021 PORTFOLIO-'

        // add to copyright
        this.footer.appendChild(this.copyright);

        // create github
        this.github = document.createElement('a');
        this.github.setAttribute('class', 'github');
        this.github.setAttribute('target', 'blank');
        this.github.setAttribute('href', 'https://github.com/SeonGu97');

        // inner html in github
        this.github.innerHTML = `<i class="fab fa-github"></i>` + 'seongu97';


        // add to github
        this.footer.appendChild(this.github);
    }
}
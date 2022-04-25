'ues strict';

import Top from "./top.js";
import Line from "./line.js";
import Skills from "./skills.js";
import Middle from "./middle.js";
import Title from "./title.js";
import Footer from "./footer.js";

export default class Main {
    constructor(creator, wrap) {
        // create
        creator.basket('main', 'main', wrap, 1, [''], [''], '');

        // element
        this.main = document.querySelector('main');

        // component
        this.title = new Title(creator, this.main, '<i class="bi bi-balloon-fill red"></i> 소개');
        this.top = new Top(creator, this.main);
        this.line = new Line(creator, this.main);
        this.skills = new Skills(creator, this.main);
        this.line = new Line(creator, this.main);
        this.title = new Title(creator, this.main, '<i class="bi bi-balloon-fill blue"></i> 프로젝트');
        this.middle = new Middle(creator, this.main);
        this.footer = new Footer(creator, this.main);
    }
}
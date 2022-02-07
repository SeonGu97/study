'use strict';

import Create from "./create.js";
import Wrap from "./js/wrap.js";
import Storage from "./storage/storage.js";
import Main from "./js/main.js";


export default class App {
    constructor() {
        // component
        this.create = new Create();

        // create app
        this.create.launcher('app', 'div', ['id'], ['app'], [''], document.body, 1);
    
        // component
        this.wrap = new Wrap(this.create);

        // select elements
        this.text_box = document.querySelector('.text-box');
        this.submit = document.querySelector('.submit');
        this.mod = document.querySelector('.mod');
        this.library = document.querySelector('.library').childNodes;
        this.cog = document.querySelector('.cog');
        this.add = document.querySelector('.add');
        this.remove = document.querySelector('.remove');
        this.aside = document.querySelector('aside');

        // component
        this.storage = new Storage(this.create, this.text_box, this.submit, this.mod, this.library, this.cog, this.add, this.remove, this.aside);
        this.main = new Main(this.create);
    
    }
}

const app = new App();
'use strict';

import Aside from "./js/aside.js";

export default class App {
    constructor() {
        this.Getter('app', 'div', 2, ['id'], ['app'], ['<i class="fab fa-500px"></i>', 'Hello World'], document.body);
    }

    Getter(variable, tag, number, name, value, innerHTML, parent) {
        this.property = [];

        this.property.push({variable, tag, number}, {name, value}, {innerHTML}, {parent});
        console.log(this.property)

        this.Setter(this.property);
    }

    Setter(property) {
        property[0].variable = 'this.' + property[0].variable;

        for(let i = 0; i < property[0].number; i++) {
            this.create(property);
            this.innerHTML(property, i);
        }
    }

    create(property) {
        property[0].variable = document.createElement(property[0].tag);

        this.attrs(property);
    }

    innerHTML(property, i) {
        property[0].variable.innerHTML = property[2].innerHTML[i]
    }

    attrs(property) {
        for(let i = 0; i < property[0].number; i++) {
            property[0].variable.setAttribute(property[1].name[i], property[1].value[i]);
            
            property[0].variable.removeAttribute(undefined);
        }

        this.append(property);
    }

    append(property) {
        property[3].parent.appendChild(property[0].variable);
    }
}

const app = new App();
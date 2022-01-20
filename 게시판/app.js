'use strict';

import Aside from "./js/aside.js";
import Storage from "./js/storage.js";

export default class App {
    constructor() {
        // 엘리먼트 생성기 (변수이름, 만들태그, 만들개수, 속성, 속성벨류, 넣을 텍스트&아이콘, 만들어진 엘리먼트를 넣을 부모)
        this.Getter('app', 'div', 1, ['id'], ['app'], [''], document.body);

        this.app = document.querySelector('#app');
        
        // component
        this.aside = new Aside(this);
        this.storage = new Storage(this);
    }

    Getter(variable, tag, number, name, value, innerHTML, parent) {
        this.property = [];

        this.property.push({variable, tag, number}, {name, value}, {innerHTML}, {parent});

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
        for(let i = 0; i < property[1].name.length; i++) {
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
'use strict';

import Aside from "./js/aside.js";

export default class App {
    constructor() {
        // 만들 엘리먼트의 개수를 정한다.
        this.num = 1;

        // 엘리먼트의 속성을 정한다.
        this.box = [
            {type: 'id', value: 'app'},
        ];

        // 엘리먼트를 만드는 함수를 실행한다.
        this.loop(this.num, this.app, 'div', this.box, document.body);

        // #app을 변수에 넣는다.
        this.app = document.querySelector('#app');

        // 컴포넌트
        this.aside = new Aside(this, this.app);
    }

    // this.num의 값만큼 this.create 함수를 실행한다.
    loop(num, variable, element, box, parent) {
        for(let i = 0; i < num; i++) {
            this.create(variable, element, box, parent);
        }
    }

    // 매개변수에 변수 이름, 태그를 받아와서 만든다.   
    create(variable, element, box, parent) {
        variable = document.createElement(element);

        this.attrs(parent, variable, box);
    }

    // 만든 엘리먼트에 속성을 부여한다.
    attrs(parent, variable, box) {
        for(let j = 0; j < box.length; j++) {
            variable.setAttribute(box[j].type, box[j].value);
        }

        this.append(parent, variable);
    }

    // 완성된 엘리먼트를 사용한다.
    append(parent, variable) {
        parent.appendChild(variable);
    }
}

const app = new App();
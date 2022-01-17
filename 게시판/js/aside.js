'use strict';

import Tool from "./tool.js";
import Library from "./library.js";

export default class Aside {
    constructor(This, app) {
        // 만들 엘리먼트의 개수를 정한다.
        this.num = 1;

        // 엘리먼트의 속성을 정한다.
        this.box = [
            {type: 'class', value: 'aside'},
        ];

        // 엘리먼트를 만드는 함수를 실행한다.
        This.loop(this.num, this.aside, 'aside', this.box, app);

        // aside를 변수에 넣는다.
        this.aside = document.querySelector('aside');

        // 컴포넌트
        this.tool = new Tool(This, this.aside);
        this.library = new Library(This, this.aside);
    }
}
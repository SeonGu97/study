'use strict';

export default class Tool {
    constructor(This, aside) {
        // 만들 엘리먼트의 개수를 정한다.
        this.num = 1;

        // 엘리먼트의 속성을 정한다.
        this.box = [
            {type: 'class', value: 'tool'},
        ];

        // 엘리먼트를 만드는 함수를 실행한다.
        This.loop(this.num, this.tool, 'div', this.box, aside);
    }
}
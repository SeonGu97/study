'use strict';

import Book from "./book.js";

export default class Library {
    constructor(This, aside) {
        // 만들 엘리먼트의 개수를 정한다.
        this.num = 1;

        // 엘리먼트의 속성을 정한다.
        this.box = [
            {type: 'class', value: 'library'},
        ];

        // 엘리먼트를 만드는 함수를 실행한다.
        This.loop(this.num, this.library, 'ul', this.box, aside);

        // .library를 변수에 넣는다.
        this.library = document.querySelector('.library');

        // 컴포넌트
        this.book = new Book(This, this.library);
    }
}
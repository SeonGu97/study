'use strict';

export default class List {
    constructor(creator) {
        // element
        this.board = document.querySelector('.board');

        // create
        creator.basket('list', 'li', this.board, 4, ['class'], ['list'], '');

        // 
        this.list = document.querySelectorAll('.list');

        for(let i = 0; i < this.list.length; i++) {
            let array = ['이름 : 강선구', '생년월일 : 1997.12.06', '학력 : 고등학교 졸업', '스킬 : HTML, CSS, Javascript, Vue3'];
        
            this.list[i].innerText = array[i];
        }
    }
}
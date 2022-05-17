'use strict';

export default class Infor_item {
    constructor(Creator, introduction) {
        // create
        this.infor_item = new Creator('infor_item', 'div', 'class', 'infor-item', '', 5, introduction, false, '', '');
    
        this.infor_items = document.querySelectorAll('.infor-item');

        this.array_1 = ['이름:', '생년월일:', '거주지:', '학력:', '스킬:'];
        this.array_2 = ['강선구', '1997.12.06', '충청북도 청주시', '고등학교 졸업', 'HTML, CSS, JS, Vue3, Photoshop'];

        for(let i = 0; i < this.infor_items.length; i++) {
            this.front = new Creator('front', 'li', 'class', 'front', this.array_1[i], 1, this.infor_items[i], false, '', '');
            this.back = new Creator('back', 'span', 'class', 'back', this.array_2[i], 1, this.infor_items[i], false, '', '');
        }
    }
}


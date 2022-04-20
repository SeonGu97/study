export default class List {
    constructor(creator, board) {
        // array
        this.array_1 = ['이름:', '생년월일:', '거주지:' , '학력:', '스킬:'];
        this.array_2 = ['강선구', '1997.12.06', '충청북도 청주시', '고등학교 졸업', 'HTML, CSS, JS, Vue3, Photoshop']


        // create
        for(let i = 0; i < 5; i++) {
            creator.basket('list', 'li', board, 1, ['class'], ['list'], '');
            creator.name.innerText = this.array_1[i];

            creator.basket('text', 'span', creator.name, 1, ['class'], ['text'], '');
            creator.name.innerText = this.array_2[i];
        }
    }
}
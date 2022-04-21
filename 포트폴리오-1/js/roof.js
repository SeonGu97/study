'ues strict';

export default class Roof {
    constructor(creator, item) {
        // create
        for(let i = 0; i < item.length; i++) {
            creator.basket(' roof', 'div', item[i], 1, ['class'], ['roof'], '');
        }
    }
}
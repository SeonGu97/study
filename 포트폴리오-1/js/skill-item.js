'use strict';

export default class Skill_item {
    constructor(creator) {
        // create
        creator.basket('skill_item', 'div', creator.name, 5, ['class'], ['skill-item'], '');
    
        // element
        this.Skill_item_all = document.querySelectorAll('.skill-item');

        // icon array
        this.icon = ['<i class="fa-brands fa-html5" style="color: #dd2c00"></i>', '<i class="fa-brands fa-css3-alt" style="color: #00b0ff"></i>', '<i class="fa-brands fa-js-square" style="color: #fdd835"></i>', '<i class="fa-brands fa-vuejs" style="color: #00c853"></i>', '<div class="ps">Ps</div>'];

        for(let i = 0; i < this.Skill_item_all.length; i++) {
            this.Skill_item_all[i].innerHTML = this.icon[i];
        }
    }
}
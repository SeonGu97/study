'use strict';

export default class Skill_item {
    constructor(Creator, skill) {
        // create
        this.skill = new Creator('skill_item', 'div', 'class', 'skill-item', '', 5, skill, false, '', '');
    
        this.skills = document.querySelectorAll('.skill-item');

        this.icons = ['<i class="fa-brands fa-html5"></i>', '<i class="fa-brands fa-css3-alt"></i>', '<i class="fa-brands fa-js-square"></i>', '<i class="fa-brands fa-vuejs"></i>', ''];
        this.text = ['HTML', 'CSS', 'JS', 'Vue3', 'Photoshop'];

        this.color = ['#d50000', '#0091ea', '#ffd600', '#00c853']


        for(let i = 0; i < this.skills.length; i++) {
            this.icon =  new Creator('skill_icon', 'div', 'class', 'skill-icon', this.icons[i], 1, this.skills[i], false, '', '');
            this.word =  new Creator('skill_word', 'div', 'class', 'skill-word', this.text[i], 1, this.skills[i], false, '', '');
        
            this.icon_ = document.querySelectorAll('.skill-icon');
            this.icon_[i].style.color = this.color[i];
        }
    }   
}


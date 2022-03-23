'use strict';

export default class Creator {
    constructor() {
      
    }

    basket(name, element, parent, number, type, value, text, boolean, event, func) {
        let repository = [
            {name, element}, // 0
            {parent}, // 1
            {number}, // 2
            {type, value}, // 3
            {text}, // 4
            {boolean, event, func} // 5
        ]

        this.modify(repository);
    }

    modify(repository) {
        repository[0].name = 'this.' + repository[0].name;

        for(let i = 0; i < repository[2].number; i++) {
            this.create(repository);
            this.attrs(repository);
            this.innerText(repository);
            this.event(repository);
            this.append(repository);
        }

    }

    create(repository) {
        repository[0].name = document.createElement(repository[0].element);
    }

    attrs(repository) {
        if(!repository[3].type[0] == '') {
            for(let i = 0; i < repository[3].type.length; i++) {
                repository[0].name.setAttribute(repository[3].type[i], repository[3].value[i]);
            } 
        }
    }

    innerText(repository) {
        repository[0].name.innerHTML = repository[4].text;
    }

    event(repository) {
        if(repository[5].boolean == true) {
            repository[0].name.addEventListener(repository[5].event, repository[5].func);
        }
    }

    append(repository) {
        repository[1].parent.appendChild(repository[0].name);
    }

    appEvent(e) {
        console.log('boom!');
    }
}
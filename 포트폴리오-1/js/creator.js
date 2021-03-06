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
        for(let i = 0; i < repository[2].number; i++) {
            this.create(repository);
            this.attrs(repository);
            this.event(repository);
            this.append(repository);
            this.innerText(repository);
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

    event(repository) {
        if(repository[5].boolean == true) {
            repository[0].name.addEventListener(repository[5].event, repository[5].func, false);
        }
    }

    append(repository) {
        repository[1].parent.appendChild(repository[0].name);

        this.name = repository[0].name;
    }

    innerText(repository) {
        repository[0].name.innerHTML = repository[4].text;
    }
}
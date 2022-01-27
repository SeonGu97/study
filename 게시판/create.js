'use strict';

export default class Create {
    constructor() {

    }

    launcher(variable, element, name, value, innerHTML, parent, number) {
        if(typeof(localStorage) !== undefined) {
            this.push(variable, element, name, value, innerHTML, parent, number);
        }else {
            alert('It does not support local storage.');
        }
    }

    push(variable, element, name, value, innerHTML, parent, number) {
        this.property = [];

        this.property.push(
            {variable, element},
            {name, value},
            {innerHTML},
            {parent},
            {number}
        )

        for(let i = 0; i < this.property[4].number; i++) {
            this.create(this.property);
            this.innerHTML(this.property, i);
        }
    }

    create(property) {
        property[0].variable = 'this.' + property[0].variable;
        
        property[0].variable = document.createElement(property[0].element);

       this.attribute(property);
    }

    attribute(property) {
        for(let i = 0; i < property[1].name.length; i++) {
            property[0].variable.setAttribute(property[1].name[i], property[1].value[i]);
            property[0].variable.removeAttribute(undefined);
        }
    }

    innerHTML(property, i) {
        property[0].variable.innerHTML = property[2].innerHTML[i];
        this.append(property);
    }

    append(property) {
        property[3].parent.appendChild(property[0].variable);
    }
}

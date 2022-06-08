'use strict';

export default class Create {
    constructor(name, element, type, value, parent) {
        // create
        name = document.createElement(element);

        // '' => undefined
        type == '' ? type = undefined : type;
        type == '' ? type = undefined : type;

        // set, remove Attrs
        name.setAttribute(type, value);
        name.removeAttribute(undefined);

        // append
        parent.appendChild(name);

        // return
        return name;
    }
}
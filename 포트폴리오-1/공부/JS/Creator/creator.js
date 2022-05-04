'use strict';

export default class Creator {
    constructor(name, element, type, value, text, num, parent, boolean, event, func) {
        // var
        this.name = name;
        this.element = element;
        this.type = type;
        this.value = value;
        this.text = text;
        this.num = num;
        this.parent = parent;
        this.boolean = boolean;
        this.event = event;
        this.func = func;

        // func
        this.promise_1 = this.create();
        this.promise_2 = this.attrs();
        this.promise_3 = this.append();

        // promise
        this.promise_1 //
        .then(this.promise_2);

        this.promise_2 //
        .then(this.promise_3);

        this.promise_3 //
        .then();
    }

    async create() {
        this.name = document.createElement(this.element);

        return this.name;
    }

    async attrs() {
        for(let i = 0; i < this.type.length; i++) {
            this.name.setAttribute(this.type[i], this.value[i]);
        }

        return this.name;
    }

    async append() {
        return this.parent.appendChild(this.name);
    }
}
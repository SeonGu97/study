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
        for(let i = 0; i < this.num; i++) {
            this.promise_1 = this.create();
            this.promise_2 = this.attrs();
            this.promise_3 = this.innerHTML();
            this.promise_4 = this.append();
            this.promise_5 = this.Event();
        }

        // promise
        this.promise_1 //
        .then(this.promise_2);

        this.promise_2 //
        .then(this.promise_3);

        this.promise_3 //
        .then(this.promise_4);
    }

    get num() {
        return this._num;
    }

    set num(result) {
        this._num = result < 1 ? 1 : result;
    }

    get type() {
        return this._type;
    }

    set type(result) {
        this._type = typeof result == 'object' ? result : new Array(result);
        this._type = this._type[0].split(' ');
        this._type == '' ? this._type.length = 0 : this._type;
    }

    get value() {
        return this._value;
    }

    set value(result) {
        this._value = typeof result == 'object' ? result : new Array(result);
        this._value = this._value[0].split(' ');
    }

    get boolean() {
        return this._boolean;
    }

    set boolean(result) {
        this._boolean = result ? this.promise_5 : result;
    }

    get event() {
        return this._event;
    }

    set event(result) {
        this._event = !result ? this.boolean = false : result;
    }

    get func() {
        return this._func;
    }

    set func(result) {
        this._func = typeof result == 'function' ? result : result = undefined;
    }

    async create() {
        return this.name = document.createElement(this.element);
    }

    async attrs() {
        for(let i = 0; i < this.type.length; i++) {
            this.value[i] == '' ? this.value[i] = undefined : this.value[i];
            this.name.setAttribute(this.type[i], this.value[i]);
        }

        return this.name;
    }

    async innerHTML() {
        return this.name.innerHTML = this.text;
    }

    async append() {
        return this.parent.appendChild(this.name);
    }

    async Event() {
        return this.name.addEventListener(this.event, this.func, false);
    }
}
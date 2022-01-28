'use strict';

export default class Submit {
    constructor(create, add) {
        // create library
        create.launcher('submit', 'input', ['class', 'type'], ['submit pointer', 'submit'], [''], add, 1);
    }
}
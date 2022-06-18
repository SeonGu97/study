'ust strict';

import Screen from "./screen.js";

export default class Container {
    constructor(Create, _app) {
        // create
        const _container = new Create('container', 'section', 'class', 'container desktop', _app);
    
        // component
        const screen = new Screen(Create, _container);
    }
}
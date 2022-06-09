'ust strict';

import Create from "./create.js";
import Nav from "./JS/nav/nav.js";
import Event from "./event.js";

export default class App {
    constructor() {
        // create
        const _app = new Create('app', 'div', 'id', 'app', document.body);

        // component
        const nav = new Nav(Create, _app);
        Event;
    }
}

const app = new App();
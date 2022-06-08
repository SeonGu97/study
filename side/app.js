'ust strict';

import Create from "./create.js";
import Header from "./JS/header.js";
import Event from "./event.js";

export default class App {
    constructor() {
        // create
        const _app = new Create('app', 'div', 'id', 'app', document.body);

        // component
        const header = new Header(Create, _app);
        Event;
    }
}

const app = new App();
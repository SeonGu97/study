'ust strict';

import Create from "./create.js";
import Media from "./JS/media/media.js";
import Container from "./JS/container/container.js";

export default class App {
    constructor() {
        // create
        const _app = new Create('app', 'div', 'id', 'app', document.body);

        // component
        const media = new Media(Create, _app);
        const container = new Container(Create, _app);
    }
}

const app = new App();
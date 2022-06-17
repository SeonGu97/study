'ust strict';

import Size from "./size.js";

export default class Media {
    constructor(Create, _app) {
        // create
        const _media = new Create('media', 'section', 'class', 'media basics', _app);

        // component
        const size = new Size(Create, _media);
    }
}
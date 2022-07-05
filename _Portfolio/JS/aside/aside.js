'use strict';

import Analog from "../clock/analog.js";

export default class Aside {
    constructor(Create, main) {
        const aside = new Create('aside', 'aside', '', '', main);

        const analog = new Analog(Create, aside);
    }
}
'use strict';

import Clock from "../clock/clock.js";
import Library from "./library.js";

export default class Aside {
    constructor(Create, main) {
        const aside = new Create('aside', 'aside', '', '', main);

        const clock = new Clock(Create, aside);
        const library = new Library(Create, aside);
    }
}
'use strict';

import Clock from "../clock/clock.js";
import Size from "../size/size.js";
import Mod from "../mod/mod.js";
import Menu from "../menu/menu.js";

export default class Nav {
    constructor(Create, _app) {
        // create
        const _nav = new Create('nav', 'nav', '', '', _app);

        // component
        const clock = new Clock(Create, _nav);
        const size = new Size(Create, _nav);
        const mod = new Mod(Create, _nav);
        const menu = new Menu(Create, _nav);
    }
}
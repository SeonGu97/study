'use strict';

import Clock from "../clock/clock.js";
import Size from "../size/size.js";
import Mod from "../mod/mod.js";
import Menu from "../menu/menu.js";

export default class Box {
    constructor(Create, _nav) {
        const _box = new Create('box', 'div', 'class', 'box', _nav);
        
        // component
        const clock = new Clock(Create, _box);
        const size = new Size(Create, _box);
        const mod = new Mod(Create, _box);
        const menu = new Menu(Create, _box);
    }
}
'use strict';

import Cog from "./cog.js";
import Add from "./add.js"
import Remove from "./remove.js"

export default class Tool {
    constructor(create, warp) {
        // create tool
        create.launcher('tool', 'section', ['class'], ['tool'], [''], warp, 1);

        // select app
        this.tool = document.querySelector('.tool');

        // component
        this.cog = new Cog(create, this.tool);
        this.add = new Add(create, this.tool);
        this.remove = new Remove(create, this.tool);
    }
}
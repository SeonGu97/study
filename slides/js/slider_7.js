'use strict';

export default class Slider_7 {
    constructor(num_7, createPrevBtnAll, createNextBtnAll, createContainerAll) {
        // style()
        this.style(createPrevBtnAll, createNextBtnAll);
    }

    // style
    style(createPrevBtnAll, createNextBtnAll) {
        // prev btn style
        createPrevBtnAll.style.transform = 'translateY(0%)';
        createPrevBtnAll.style.top = '8px';
        createPrevBtnAll.style.left = '50%';
        createPrevBtnAll.style.transform = 'translateX(-50%)';

        // next btn style
        createNextBtnAll.style.top = 'auto';
        createNextBtnAll.style.transform = 'translateY(0%)';
        createNextBtnAll.style.bottom = '8px';
        createNextBtnAll.style.right = '50%';
        createNextBtnAll.style.transform = 'translateX(50%)';
    }
}
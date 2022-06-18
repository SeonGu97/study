'ust strict';

export default class Device {
    constructor(Create, _size) {
        for(let i = 0; i < 3; i++) {
            // create
            const _device = new Create('device', 'button', 'class', 'device basics', _size);
            
            // icons
            const icons = ['<i class="fa-solid fa-desktop"></i>', '<i class="fa-solid fa-tablet-screen-button"></i>', '<i class="fa-solid fa-mobile-screen-button"></i>']

            // add icon
            _device.innerHTML = icons[i];

            const device = document.querySelectorAll('.device');

            device[0].classList.add('paint');
        }
    }
}
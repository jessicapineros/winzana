import Glide from '@glidejs/glide';

export class Slider {
    constructor() {
        this.slider = document.querySelector('.js-slider');
      
        if (this.slider) {
            this.init();
        }
    }

    init() {
        new Glide(this.slider, {
            type: 'carousel',
            perView: 3,
            gap: 30,
            controls: true,
            breakpoints: {
                1024: {
                  perView: 2
                },
                640: {
                  perView: 1
                }
              }
        }).mount();
    }
}
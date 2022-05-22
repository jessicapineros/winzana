export class Menu {
    constructor() {
        this.btnMenu = document.querySelector('.js-btn-menu');
        this.menu = document.querySelector('.js-menu');
        this.closeMenu = document.querySelector('.js-close');
        this.overlay = document.querySelector('.js-overlay');
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      
        if (this.btnMenu && this.menu) {
            this.init();
        }
    }

    init() {
        this.btnMenu.addEventListener('click', this.open);
        this.overlay.addEventListener('click', this.close);
        this.closeMenu.addEventListener('click', this.close);
    }

    open() {
        this.menu.classList.add('open'); 
        this.overlay.classList.add('open');
        document.body.classList.add('menu-open'); 
    }

    close() {
        this.menu.classList.remove('open');
        this.overlay.classList.remove('open');
        document.body.classList.remove('menu-open'); 
    }
}
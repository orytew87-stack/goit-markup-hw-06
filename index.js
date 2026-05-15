const burgerbutton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const backdrop = document.querySelector('.backdrop');
const herobutton = document.querySelector('.hero-button');
const modalbtn = document.querySelector('.modal-btn')

burgerbutton.addEventListener('click', () => {
     toggleMobileMenu();
}
);

menuCloseBtn.addEventListener('click', () => { 
     toggleMobileMenu();
}
)

herobutton.addEventListener('click', () => {
    toggleBackdrop();
}
)

modalbtn.addEventListener('click', () => {
    toggleBackdrop();
}
)

function toggleMobileMenu(params) {
    mobileMenu.classList.toggle('is-open');
}


function toggleBackdrop() {
    backdrop.classList.toggle('is-open');
}
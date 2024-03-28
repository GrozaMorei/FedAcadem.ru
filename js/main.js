const headerHeader = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');
const body = document.querySelector('.body');
const main = document.getElementById('main');

document.querySelector('#menu__burger').onclick = function(){
    headerHeader.classList.toggle('header--active');
    headerMenu.classList.toggle('header__menu--active');
    headerBurger.classList.toggle('header__burger--active');
    body.classList.toggle('lock');
    main.classList.toggle('main-blur')
}
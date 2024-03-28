const body = document.querySelector('.body');
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');

document.querySelector('.header__menu-button').onclick = function () {
    // Блокировка прокрутки
    body.classList.toggle('lock');
    // Вызываем меню
    headerMenu.classList.toggle('--active');
    // Запускаем анимацию кнопки
    headerBurger.classList.toggle('--active');
}



// РАБОТА СЛАЙДЕРА ОБНОВЛЕНИЙ
var swiper = new Swiper(".news-swiper", {
    direction: 'vertical',
    allowTouchMove: false,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.news-button-next',
        prevEl: '.news-button-prev',
    },
});



// РАБОТА ОКАРДИОНА UPD
const updButtons = document.querySelectorAll('.UPD-button');
const updButtonsRotate = document.querySelectorAll('.UPD-button-rotate');
const updAnswers = document.querySelectorAll('.UPD-answer');
// Перебираем все кнопки
updButtons.forEach( (updButton, id) => {
    // Добавляем слушатели
    updButton.onclick = function () {
        // При клике убираем стиль высоты и поворот кнопки
        updAnswers.forEach(function(updAnswer) {
            updAnswer.style.height = null;
        });
        updButtonsRotate.forEach(function(updButtonRotate) {
            updButtonRotate.style.transform = 'rotate(90deg)';
        });
        // При клике добавляем стиль высоты нужному элементу и поворачиваем кнопку
        var height = updAnswers[id].scrollHeight;
        updAnswers[id].style.height = height + 'px';
        updButtonsRotate[id].style.transform = 'rotate(0deg)'
    }
});
// РАБОТА МЕНЮ ХЕДЕРА
const body = document.querySelector('.body');
const headerMenu = document.querySelector('.header__menu');
const headerBurger = document.querySelector('.header__burger');

document.querySelector('.header__menu-button').onclick = function(){
    // Блокировка прокрутки
    body.classList.toggle('lock');
    // Вызываем меню
    headerMenu.classList.toggle('--active');
    // Запускаем анимацию кнопки
    headerBurger.classList.toggle('--active');
}



// РАБОТА СЛАЙДЕРА ПРЕДМЕТОВ
let subjectSwiper = new Swiper('.subject-swiper', {
    slidesPerView: 1,
    touchRatio: 1,
    centeredSlides: true,
    spaceBetween: 200,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.subject-button-next',
        prevEl: '.subject-button-prev',
    },

    on: {
        // СЛАЙДЕР ПРЕДМЕТОВ -> СМЕНА СЕКЦИИ ТЕМ
        slideChange: function() {
            let themesItem = document.querySelectorAll('.theme-item');
            // Выключает все секции тем
            for (let item of themesItem){
                if(item.classList.contains('--active')){ item.classList.remove('--active')}
            }
            // Включение необходимой секции
            let themeId = subjectSwiper.realIndex;
            themesItem[themeId].classList.add('--active');
        }
    }
});


// РАБОТА СЛАЙДЕРА СЕМЕСТРОВ (ТРИ СЛАЙДЕРА - КОЛИЧЕСТВО ПРЕДМЕТОВ)
let semesterSwiper = new Swiper('.semester-swiper', {
    slidesPerView: 1,
    touchRatio: 1,
    centeredSlides: true,

    navigation: {
        nextEl: '.semester-button-next',
        prevEl: '.semester-button-prev',
    },

    on: {
        // СЛАЙДЕР СЕМЕСТРОВ -> СМЕНА БЛОКА ТЕМ
        slideChange: function() {
            let themesBody = document.querySelectorAll('.--active > .theme__body');
            // Выключает все блоки тем
            for (let item of themesBody){
                if(item.classList.contains('--active')){ item.classList.remove('--active')}
            }
            // Включение необходимого блока
            let themeId = semesterSwiper[subjectSwiper.realIndex].realIndex;
            themesBody[themeId].classList.add('--active');
        }
    },
});


// РАБОТА СЛАЙДЕРА ТЕМ
let themeSwiper = new Swiper('.theme-swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    touchRatio: 1,
    centeredSlides: false,
    spaceBetween: 10,

    navigation: {
        nextEl: '.theme-button-next',
        prevEl: '.theme-button-prev',
    },
});


// РАБОТА КНОПОК ТЕМ
let themeButtons = document.querySelectorAll('.theme-button');
let themeLinke = document.querySelectorAll('.theme-link');
let contents = document.querySelectorAll('.content');
console.log(contents);

themeButtons.forEach( (themeButton, id) => {
    // У каждой кнопки обработчик
    themeButton.onclick = function(){

        // Убираем активность
        themeLinke.forEach( (themeLink, id) => {
            themeLink.classList.remove('--active');
            themeButtons[id].classList.remove('--active');
            contents[id].classList.remove('--active');
        });
        // Добавляем активность
        themeLinke[id].classList.add('--active');
        themeButtons[id].classList.add('--active');
        contents[id].classList.add('--active');

    }
});
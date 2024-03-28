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



// РАБОТА СЛАЙДЕРА КОМАНДЫ
var swiper = new Swiper(".team-swiper", {
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    grabCursor: true,
    touchRatio: 1,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        600: {
            effect: "cards",
            touchRatio: 0.5,
        }
    },

    on: {
        // СМЕНА ИНФОРМАЦИИ О КОМАНДЕ
        slideChange: function () {
            let teamItems = document.querySelectorAll('.team-info-item');
            // Выключает все блоки информации
            for (let item of teamItems) {
                if (item.classList.contains('--active')) { item.classList.remove('--active') }
            }
            // Включение необходимого блока
            let teamId = swiper.realIndex;
            teamItems[teamId].classList.add('--active');
        }
    }
});

// РАБОТА ОКАРДИОНА FAQ
const faqButtons = document.querySelectorAll('.FAQ-button');
const faqButtonsRotate = document.querySelectorAll('.FAQ-button-rotate');
const faqAnswers = document.querySelectorAll('.FAQ-answer');
// Перебираем все кнопки
faqButtons.forEach( (faqButton, id) => {
    // Добавляем слушатели
    faqButton.onclick = function () {
        // При клике убираем стиль высоты и поворот кнопки
        faqAnswers.forEach(function(faqAnswer) {
            faqAnswer.style.height = null;
        });
        faqButtonsRotate.forEach(function(faqButtonRotate) {
            faqButtonRotate.style.transform = 'rotate(90deg)';
        });
        // При клике добавляем стиль высоты нужному элементу и поворачиваем кнопку
        var height = faqAnswers[id].scrollHeight;
        faqAnswers[id].style.height = height + 'px';
        faqButtonsRotate[id].style.transform = 'rotate(0deg)'
    }
});
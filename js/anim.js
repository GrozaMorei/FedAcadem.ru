
// Анимация заголовка
const newsTitle = document.querySelector('.news-title');

setInterval(function() {
    newsTitle.classList.toggle('news-title--active');
}, 1000)


// Слайдер
new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 30,
  direction: 'vertical',
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  mousewheel: {
    sensivity: 1,
  },
});

// Анимация пояления блоков
const animItems = document.querySelectorAll('._anim-items');

window.addEventListener('scroll', animOnScroll);
function animOnScroll(params) {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if(animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
      animItem.classList.add('--anim_active');
    }else{
      animItem.classList.remove('--anim_active');
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
}
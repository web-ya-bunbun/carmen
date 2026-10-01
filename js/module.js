import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const characterSlide = new Swiper('#character-list', {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="character__thumb ' +
        className +
        '"><img class="character__thumb-img" src="img/char_thumb0' +
        (index + 1) +
        '.png" alt=""></div>'
      );
    },
  },
});

//Gallery Swiper
const mainSlides = document.querySelectorAll('#gallery-main .swiper-slide');
const galleryThumbs = new Swiper('#gallery-thumbs', {
  speed: 1000,
  slideToClickedSlide: true,
  slidesPerView: 3,
  loop: true,
  watchSlidesProgress: true,
  breakpoints: {
    901: {
      slidesPerView: 7,
    },
  },
});

const galleryMain = new Swiper('#gallery-main', {
  loop: true,
  spaceBetween: 3,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

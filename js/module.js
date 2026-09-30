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

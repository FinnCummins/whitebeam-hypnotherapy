import Swiper from "swiper/bundle";

const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    centeredSlides: true,
    loop: true,

    autoplay: {
      delay: 5000,
    },

    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
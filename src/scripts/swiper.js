import Swiper, { Autoplay, Navigation, EffectCoverflow } from "swiper";
Swiper.use([Autoplay, Navigation, EffectCoverflow]);

const swiper = new Swiper('#testimonial-swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

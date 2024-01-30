const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  watchOverflow: false,

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".carousel_button.next",
    prevEl: ".carousel_button.prev",
  },
});

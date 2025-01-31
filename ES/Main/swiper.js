/* function handleMediaChange() {
  if (window.innerWidth <= 885) {
  } else {
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange); */

let swiper = new Swiper(".mySwiper", {
  initialSlide: Number(localStorage.getItem("currentSlide") || 0),
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  on: {
    slideChange: function () {
      localStorage.setItem("currentSlide", this.activeIndex);
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});

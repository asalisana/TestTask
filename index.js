

const swiper = new Swiper(".swiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    grabCursor: false,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

const swiper_two = new Swiper(".swiper-two", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    grabCursor: false,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});


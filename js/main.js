const channelSlider = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
    slidesPerView: 6
});

const recommendedSlider = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
    slidesPerView: 3
});

const recommendedChanelSlider = new Swiper('.recommended-channel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended-channel-button-next',
        prevEl: '.recommended-channel-button-prev',
    },
    slidesPerView: 6
});
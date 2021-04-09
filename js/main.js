const channelSlider = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        }
    },
    spaceBetween: 20
});

const recommendedSlider = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1600: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 2,
        }
    },
});

const recommendedChanelSlider = new Swiper('.recommended-channel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended-channel-button-next',
        prevEl: '.recommended-channel-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        }
    },
    spaceBetween: 20
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
    if (searchBtn.style.opacity == '0') {
        searchBtn.style.opacity = '1';
    } else {
        searchBtn.style.opacity = '0';
    }
});

if (document.documentElement.scrollWidth <= 640) {
    channelSlider.destroy();
    recommendedSlider.destroy();
    recommendedChanelSlider.destroy();
}
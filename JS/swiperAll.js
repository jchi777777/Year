// 台北大兔襲輪播
const swiperOne = new Swiper('#mySwiper-one', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 仁愛路燈飾輪播
const swiperTwo = new Swiper('#mySwiper-two', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 周邊活動
// const swiperThree = new Swiper('#mySwiper-three', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     rewind: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         1512: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//         1200: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//         },
//     },
// });

// 現場配置
const swiperFour = new Swiper('#mySwiper-four', {
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1512: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    },
});

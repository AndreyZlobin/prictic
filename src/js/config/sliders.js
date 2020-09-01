export default {
  main: {
    slidesPerView: 1,
    loop: true,
    lazy: true,
    navigation: {
      nextEl: '.main-slider__btn-next',
      prevEl: '.main-slider__btn-prev',
      // disabledClass: 'disabled',
    },
    pagination: {
      el: '.main-slider__dots',
      type: 'bullets',
      clickable: true,
    }
  },
  product: {
    slidesPerView: 3,
    loop: false,
    lazy: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-slider__btn-next',
      prevEl: '.product-slider__btn-prev',
      // disabledClass: 'disabled',
    }, breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      578: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
      },
    }
  },
  productTwo: {
    slidesPerView: 3,
    loop: false,
    lazy: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-slider-two__btn-next',
      prevEl: '.product-slider-two__btn-prev',
      // disabledClass: 'disabled',
    }, breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      578: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
      },
    }
  },
  productThree: {
    slidesPerView: 3,
    loop: false,
    lazy: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-slider-three__btn-next',
      prevEl: '.product-slider-three__btn-prev',
      // disabledClass: 'disabled',
    }, breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      578: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
      },
    }
  },

  catalogSilder: {
    slidesPerView: 1,
    loop: false,
    lazy: true,
    pagination: {
      el: '.catalog-slider__dots',
      type: 'bullets',
      clickable: true,
    }
  },

  withProductSlider: {
    slidesPerView: 3,
    loop: false,
    lazy: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-slider-with__btn-next',
      prevEl: '.product-slider-with__btn-prev',
    }, breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      578: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
      },
    }
  },

  productCart: {
    slidesPerView: 3,
    loop: false,
    lazy: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.product-slider-cart__btn-next',
      prevEl: '.product-slider-cart__btn-prev',
      // disabledClass: 'disabled',
    }, breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      578: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
      },
    }
  },
}
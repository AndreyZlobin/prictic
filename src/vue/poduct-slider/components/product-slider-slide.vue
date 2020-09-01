<template lang="pug">
.product-slider__slide.swiper-slide
  .product-slider__item
      .product-slider__item__wrapper
          .product-slider__item-img(:style="{backgroundImage: `url(${prductItem.picture})`}")
          .product-slider__item__content
              .product-slider__item-text 
                  .product-slider__item__content-title {{prductItem.title}}
              .product-slider__item__price
                  .product-slider__item__price-text {{prductItem.total}} ₽ 
                  .product-slider__item__price__count 
                      .product-slider__item__price__count__btn-min(@click="minCart()") -
                      .product-slider__item__price__count-counter {{prductItem.count}} 
                      .product-slider__item__price__count__btn-plus(@click="addCart()") +
          .product-slider__item__btn.button(href='#') В корзину
</template>

<script>
export default {
    props: {
        prductItem: Object
    },

    methods: {
        addCart() {
            if (this.prductItem.count < 10) {
                this.prductItem.count++;
                this.prductItem.total =
                    this.prductItem.count * this.prductItem.price;
            } else {
                return;
            }
        },
        minCart() {
            if (this.prductItem.count <= 0) {
                return;
            } else {
                this.prductItem.count--;
                this.prductItem.total -= this.prductItem.price;
            }
        }
    },
    computed: {}
};
</script>
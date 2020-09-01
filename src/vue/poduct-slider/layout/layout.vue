<template lang="pug">
section.product-slider
    .wrapper
        .product-slider__container.swiper-container
            .product-slider__wrapper.swiper-wrapper
                productSlide(v-for="prductItem in prodcutsItem"
                :key="prductItem.id"
                :prductItem = "prductItem"
                )
        .product-slider__btn-prev 
            svg
                use(href='icons/icons.svg#arrow-prev')
            //- +icon('arrow-prev')
        .product-slider__btn-next 
            //- +icon('arrow-next')
            svg
                use(href='icons/icons.svg#arrow-next')
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import productSlide from "../components/product-slider-slide.vue";
export default {
    data() {
        return {
            prodcutsItem: [
                {
                    id: 1,
                    price: 1547,
                    title: `Мльульти-Табс Юниор таблетки жев. фрукты 30 шт`,
                    subtitle: `Действующие вещество: Поливитамины + Минералы`,
                    count: 1,
                    total: 1547,
                    picture: "assets/images/card-bg.png"
                },
                {
                    id: 2,
                    price: 547,
                    title: `Мльульти-Табс Юниор таблетки жев. фрукты 30 шт`,
                    subtitle: `Действующие вещество: Поливитамины + Минералы`,
                    count: 1,
                    total: 547,
                    picture: "assets/images/card-bg.png"
                },
                {
                    id: 3,
                    price: 547,
                    title: `Мльульти-Табс Юниор таблетки жев. фрукты 30 шт`,
                    subtitle: `Действующие вещество: Поливитамины + Минералы`,
                    count: 1,
                    total: 547,
                    picture: "assets/images/card-bg.png"
                },
                {
                    id: 4,
                    price: 547,
                    title: `Мльульти-Табс Юниор таблетки жев. фрукты 30 шт`,
                    subtitle: `Действующие вещество: Поливитамины + Минералы`,
                    count: 1,
                    total: 547,
                    picture: "assets/images/card-bg.png"
                }
            ]
        };
    },
    components: { productSlide },
    methods: {},
    mounted() {
        this.swiperMain = new Swiper(".product-slider__container", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".product-slider__btn-next",
                prevEl: ".product-slider__btn-prev"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                578: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3
                }
            }
        });
    }
};
</script>

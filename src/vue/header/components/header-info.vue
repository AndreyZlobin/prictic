<template lang="pug">
.header__info
    .header__info__wrapper.wrapper
        .header__info-left
            .header__info-item
                svg.icon
                    use(href="/icons/icons.svg#select-city")
                .header__select-btn(@click="showSelectCity = !showSelectCity") {{title}}

                    transition(name="fade")
                        .header__select-list(v-if="showSelectCity")
                            ul 
                                li(v-for="city in citys" :key="city.id" ) {{city.title}}

                    transition(name="fade")   
                        svg.icon-dark(:class="{'arrow-down': showSelectCity==true}")
                            use(href="/icons/icons.svg#arrow-down")

        .header__info-right(
        :class="{'header-fixed-info': scrollConut > 60}"
        )
        
            a.header__info-item.cart(href="https://ffarm.1mcg.ru/assets/cart.html")
                    //- +icon('cart')
                    svg.icon
                        use(href="/icons/icons.svg#cart")
                    .header__info-item.cart__cunter(v-show="cartItems.length > 0") {{ cartItems.length }}

                    .header__cart-text Корзина
            .header__info-item
                svg.icon
                    use(href="/icons/icons.svg#profile")
                .header__personal-area(@click="showRegistr()" 
                ) Личный кабинет

</template>

<script>
import api from "~/js/config/api";
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            scrollConut: "",
            showSelectCity: false,
            title: " Выбрать город",
            citys: [
                {
                    id: 1,
                    title: "Углич 1"
                },
                {
                    id: 2,
                    title: "Углич 2"
                },
                {
                    id: 3,
                    title: "Углич 3"
                },
                {
                    id: 4,
                    title: "Углич 4"
                }
            ]
        };
    },
    methods: {
        handleScroll() {
            this.scrollConut = pageYOffset;
        },
        ...mapMutations("auth", ["showRegistr"]),
        ...mapActions("cart", ["fetchCartItems"])
    },
    computed: {
        ...mapGetters("cart", ["cartItems"])
    },
    created() {
        this.fetchCartItems();
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

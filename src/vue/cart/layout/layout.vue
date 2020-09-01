<template lang="pug">
section.cart
    .wrapper
       .cart__wrapper
            .cart-items
                cartItem(
                    v-for="(cartItem, index) in cartItems"
                    :key="cartItem.id"
                    :cartItem="cartItem"
                    :cartItems="cartItems"
                    :index="index"
                    v-if="cartItems.length > 0"
                )
                
                .cart-empty(v-if="cartItems.length <= 0") 
                    .cart-empty__wrapper
                        .cart-empty__title В корзине нет товаров
                        .cart-empty__img 
                            svg
                                use(href='icons/icons.svg#bigcart')  
                        .cart-empty__text Перейдите в <a href="https://ffarm.1mcg.ru/assets/catalog.html">каталог</a> и добавьте товар в корзину
            cartOrger(
                v-if="cartItems.length > 0"
                :cartItems="cartItems"
            )

</template>
<script>
import cartItem from "../components/cart-item.vue";
import cartOrger from "../components/cart-order.vue";
import store from "~/store/index";
import { mapGetters, mapState } from "vuex";
export default {
    data() {
        return {};
    },
    components: {
        cartItem,
        cartOrger
    },
    methods: {},
    computed: {
        ...mapState("cart", ["cartItems"])
        // cartItems() {
        //     return this.$store.state.cartItems;
        // }
    },
    created() {},
    mounted() {}
};
</script>

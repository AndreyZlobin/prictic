<template lang="pug">
.cart-order
    .cart-order__wrapper
        .cart-order__quantity Кол-во товаров: {{total.count}} шт.
        .cart-order__bonus-points Кол-во балл: 
        .cart-order__use-points Использовать баллы? 
        .cart-order__total-text Итого {{total.sum | fix-namber}}
        .cart-order__total-price
        a.cart-order__btn.button(@click="showRegistr()") Оформить заказ
        .cart-order__info(v-if="total.sum > 1000") Сумма вашей покупки превышает 1000 руб. Вам доступна бонусная карта покупателя.
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    props: {
        cartItems: Array
    },
    methods: {
        ...mapMutations("auth", ["showRegistr"])
    },
    computed: {
        total() {
            let sum = 0;
            let count = 0;
            this.cartItems.forEach(item => {
                count += item.count;
                sum += item.price * item.count;
            });
            return { count, sum };
        }
    },
    mounted() {}
};
</script>

<style>
</style>

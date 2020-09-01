<template lang="pug">
section.order
    .wrapper
        .order__title Оформление заказа
        .order__wrapper
            orderDetailes
            .order-items(v-if='cartItems.length > 0')
                orderProducts(
                 v-for="(cartItem, index) in cartItems"
                    :key="cartItem.id"
                    :cartItem="cartItem"
                    :cartItems="cartItems"
                    :index="index"
                )
                .order-info
                    .order-info__wrapper
                        .order-info__points(v-if='cartItems.length >= 1 ')
                            .order-info__points-title Кол-во баллов: {{240 }}
                            .order-info__points-subtitle Использовать баллы? 
                        .order-info__total
                            .order-info__text Итого: {{total.sum | fix-namber}} &#8381
                            .order-info__more(v-if='total.sum > 1000') Сумма вашей покупки превышает 1000 руб. Вам доступна бонусная карта покупателя.
</template>

<script>
import orderDetailes from "../components/order-details.vue";
import orderProducts from "../components/order-products.vue";
import store from "../../../store/index";
import { mapGetters } from "vuex";

export default {
    store,

    data() {
        return {};
    },
    components: {
        orderDetailes,
        orderProducts
    },
    computed: {
        ...mapGetters("cart", ["cartItems"]),

        total() {
            let sum = 0;
            let count = 0;
            this.cartItems.forEach(item => {
                count += item.count;
                sum += item.price * item.count;
            });
            return { count, sum };
        }
    }
};
</script>

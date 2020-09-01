<template lang="pug">
    .cart-item
        .cart-item__wrapper
            .cart-item__img(:style="{backgroundImage: `url(${itemImage})`}")
            .cart-item__inner
                .cart-item__title {{cartItem.title}}
                .cart-item__subtitle {{cartItem.subtitle}}
                .cart-item__code {{cartItem.itemCode}}
                .cart-item__price
                .cart-item__sum
                    .cart-item__total {{cartItem.price}} ₽
                    .cart-item__total__inner
                        .cart-item__quantity-text Количество:
                        svg.cart-item__min(@click="decreaseCount()")
                            use(href="/icons/icons.svg#min")
                        .cart-item__quantity-counter {{cartItem.count}} 
                        svg.cart-item__add(@click="increaseCount()")
                            use(href="/icons/icons.svg#add")
        

            svg.cart-item__delete(@click="removeItemFromCart(cartItem)")
                use(href="/icons/icons.svg#close")


</template>

<script>
import { mapActions } from "vuex";
import noImage from "~/images/no-image.svg";
import debounce from "lodash.debounce";

export default {
    props: {
        cartItem: Object,
        cartItems: Array,
        index: Number,
        updateOrder: Function
    },
    methods: {
        ...mapActions("cart", ["removeItemFromCart", "sendItemCount"]),

        decreaseCount() {
            if (!(this.cartItem.count > 1)) return;
            this.cartItem.count--;
            this.debouncedSetItemCount();
        },
        increaseCount() {
            this.cartItem.count++;
            this.debouncedSetItemCount();
        },
        debouncedSetItemCount: debounce(function() {
            this.sendItemCount(this.cartItem);
        }, 500)
    },
    computed: {
        itemImage() {
            return this.cartItem.picture ? this.cartItem.picture : noImage;
        }
    },

    mounted() {}
};
</script>

<style>
</style>

<template lang="pug">
.order-item
    .order-item__wrapper
        .order-item__img(:style="{backgroundImage: `url(${itemImage})`}")
        .order-item__inner
            .order-item__title {{cartItem.title}}
            .order-item__subtitle {{cartItem.subtitle}}
            .order-item__code {{cartItem.itemCode}}
            .order-item__price
            .order-item__sum
                .order-item__total {{cartItem.price}} ₽
                .order-item__total__inner
                    .order-item__quantity-text Количество:
                    svg.order-item__min(@click="decreaseCount()")
                        use(href="/icons/icons.svg#min")
                    .order-item__quantity-counter {{cartItem.count}} 
                    svg.order-item__add(@click="increaseCount()")
                        use(href="/icons/icons.svg#add")
    
        svg.order-item__delete(@click="removeItemFromCart(cartItem)")
            use(href="/icons/icons.svg#close")
</template>

<script>
import { mapActions } from "vuex";
import debounce from "lodash.debounce";
import noImage from "~/images/no-image.svg";
export default {
    props: {
        cartItem: Object,
        cartItems: Array,
        index: Number,
        updateOrder: Function
    },
    methods: {
        ...mapActions(["removeItemFromCart", "sendItemCount"]),
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
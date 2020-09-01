<template lang="pug">
.header-mobile__to-cart
    .header-mobile__to-cart__wrapper
        a(href="https://ffarm.1mcg.ru").to-cart__item
            svg 
                use(href="/icons/icons.svg#search2")
            pre.to-cart__item-text поиск

        a.to-cart__item(href="https://ffarm.1mcg.ru/assets/catalog.html")
            svg 
                use(href="/icons/icons.svg#catalog")
            pre.to-cart__item-text каталог

        a.to-cart__item(href="https://ffarm.1mcg.ru/assets/cart.html")
            svg 
                use(href="/icons/icons.svg#cart")
            pre.to-cart__item-text корзина


        a.to-cart__item(href="https://ffarm.1mcg.ru/assets/catalog.html")
            svg 
                use(href="/icons/icons.svg#shops")
            pre.to-cart__item-text заказы
            
        a.to-cart__item(href="#")

            
        
        .burger.modef(
            @click="$emit('showNav')"
            )
            .burger-wrapper
                hr.burger__line
                hr.burger__line
                hr.burger__line
                hr.burger__line

</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        showMenu: {
            type: Boolean
        }
    },
    methods: {},
    computed: {

    }
};
</script>

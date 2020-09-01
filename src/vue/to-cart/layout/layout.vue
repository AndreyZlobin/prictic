<template lang="pug">
.header-mobile__to-cart
    .header-mobile__to-cart__wrapper
        a(href="https://ffarm.1mcg.ru/assets/catalog.html").to-cart__item
            svg 
                use(href="/icons/icons.svg#search2")
        a(href="#").to-cart__item
            svg 
                use(href="/icons/icons.svg#catalog")
        a(href="https://ffarm.1mcg.ru/assets/catalog.html").to-cart__item
            svg 
                use(href="/icons/icons.svg#cart")

        a(href="https://ffarm.1mcg.ru").to-cart__item
            svg 
                use(href="/icons/icons.svg#shops")
        .burger.modef
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
    components: {},
    methods: {
        showMenu() {

        }
    }
};
</script>

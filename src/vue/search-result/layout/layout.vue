<template lang="pug">
section.catalog
    .wrapper
        catalog-pager
        .catalog__wrapper
            .catalog__items
                Product(
                    v-for="product in items"
                    :key="product.id"
                    :product="product"
                    )
        catalog-pager
</template>

<script>
import Product from "../components/catalog-item.vue";
import Pager from "../components/pager.vue";
import api from "~/js/config/api";

export default {
    data() {
        return {
            isvisible: true,
            items: []
        };
    },
    components: {
        Product,
        "catalog-pager": Pager
    },
    methods: {},

    mounted() {},
    created() {
        // const getSearchItems => {

        // }
        // if (localStorage.getItem("items")) {
        //     const response = localStorage.getItem("items");
        //     const result = JSON.parse(response);
        //     const products = result._embedded.items;
        //     products.forEach(element => {
        //         element.count = 1;
        //         this.items.push(element);
        //     });
        //     console.log(products);
        // }
    }
};
</script>

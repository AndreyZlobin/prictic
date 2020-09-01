<template lang="pug">
.header__navigation
    nav    
        ul
            li.navigation__item(v-for="item in catalogGroups" :key="item.id")
                a(href="https://ffarm.1mcg.ru/assets/catalog.html") {{item.title}}
                
            li.navigation__item
                a(href="https://ffarm.1mcg.ru/assets/stocks.html") Акции

</template>
<script>
import API from "~/js/config/api.js";
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters("catalog", ["catalogGroups"])
    },
    methods: {
        ...mapActions("catalog", ["fetchCatalogGroups"])
    },
    created() {
        this.fetchCatalogGroups();
    }
};
</script>

<template lang="pug">
include ../../../pug/mixins/mixins.pug
.header__mobile-nav(v-if="showMenu")
    .header__mobile-nav__wrapper
        .header__mobile-close(@click="$emit('closeNav')")
            +icon('close')
        .header__mobile-ul
            nav
                ul  
                    li.header__mobile-item(
                        v-for="item in catalogGroups" 
                        :key="item.id"
                    )
                        a(href="https://ffarm.1mcg.ru/assets/catalog.html") {{item.title}}
                        
                    li.header__mobile-item
                        a(href="https://ffarm.1mcg.ru/assets/stocks.html") Акции


//- (:class="{'mobile-menu-modef': scrollConut > 20}")
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
    data() {
        return {
            // scrollConut: ""
        };
    },
    props: {
        showMenu: Boolean
    },
    methods: {
        ...mapActions("catalog", ["fetchCatalogGroups"])

        // handleScroll() {
        //     this.scrollConut = pageYOffset;
        // }
    },
    computed: {
        ...mapGetters("catalog", ["catalogGroups"])
        // ...mapState("catalog", ["catalogGroups"])
    },

    created() {
        this.fetchCatalogGroups();
        // window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        // window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

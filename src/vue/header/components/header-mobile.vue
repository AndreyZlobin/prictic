<template lang="pug">
.header__mobile
    .header__mobile-wrapper
        .header__mobile-content
                .header__mobile-item(@click="showRegistr()")
                    svg.icon
                        use(href="/icons/icons.svg#profile")
                    .header__mobile-area Личный кабинет
                .header__mobile-item

                    input.header__mobile-search(
                        placeholder='Поиск'
  
                        v-model.trim="searchVal"
                        @keyup.enter="searchProduct"
                        
                        )

                    a.header__mobile-search-icon
                        svg.icon
                            use(href="/icons/icons.svg#search2")
                .header__mobile-item(@click="showRegistr()")
                    svg.icon
                        use(href="/icons/icons.svg#profile")
                .header__mobile-item
                    a.header__mlobile-cart
                        svg.icon
                            use(href="/icons/icons.svg#cart")

        .header__mobile-logo(:class="{'hideLogo': scrollConut > 20}")
            .logo 
                .logo__wrapper
                    a.logo__img(
                        :style="{backgroundImage: `url(${logo})`}"
                        href="https://ffarm.1mcg.ru"
                        )
                    .logo__text-wrapper
                        .logo-text Группа компаний
                        .logo-subtext <span> ФИТО-ФАРМ </span>

       
</template>

<script>
import api from "~/js/config/api";
import logo from "../../../images/logo.png";
import showNoty from "~/js/components/noty";
import filters from "../../catalog/components/filter.vue";
import { mapMutations, mapState, mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            scrollConut: "",
            logo: logo
        };
    },
    components: {
        filters
    },
    computed: {
        ...mapGetters("search", ["searchValue"]),
        searchVal: {
            get() {
                return this.searchValue;
            },
            set(value) {
                this.updatesearchValue(value);
            }
        }
    },
    methods: {
        ...mapMutations("auth", ["showRegistr"]),
        ...mapMutations("search", ["updatesearchValue"]),
        ...mapActions("search", ["searchProduct"]),
        handleScroll() {
            this.scrollConut = pageYOffset;
        }
    },

    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

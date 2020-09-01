<template lang="pug">

.header-search
    .header-search__left
        .header-logo
            .logo 
                .logo__wrapper
                    a.logo__img(
                        :style="{backgroundImage: `url(${logo})`}"
                        href="https://ffarm.1mcg.ru"
                        )
                    .logo__text-wrapper
                        .logo-text Группа компаний
                        .logo-subtext <span> ФИТО-ФАРМ </span>

        .header-phone
            a.header-phone__title(href="tel:+78005501076") 8 (800) 550-10-76
            .header-phone__subtitle Звонки по России бесплатно

    .header-search__right
        .header-search__search-icon
            svg.icon
                use(href="/icons/icons.svg#search2")
        input.header-search__right-item(
            placeholder='Поиск'
            v-model.trim="searchVal"
            @input="search"
            @blur="clearSearchItems()" 
            @keyup.enter="searchProduct"
            )
        
        transition(name="fade")
            ul.search-result(
                v-if="searchItems != 0 && searchVal != 0"
                )
                li.search-result__item(
                        v-for="searchItem in searchItems"
                        :key="searchItem.id"
                    ) 
                    a.search-result__link(href="#")
                        .search-result__text {{searchItem.title}}
                        .search-result__price {{searchItem.price}} &#8381

            //- .search-result__nothing-found(v-if="searchItems <= 0 && searchValue <= 0") По запросу <span>{{searchValue}}</span> ничего не найдено
            //- .search-result__nothing-found(v-if="searchItems = 0")  По запросу <span>{{searchValue}}</span> ничего не найдено

                v-if="searchItems != 0 && searchValue != 0"
        a.header-search__btn.button(
        href="#"
        @click="searchProduct") Найти

</template>

<script>
import logo from "~/images/logo.png";
import api from "~/js/config/api";
import showNoty from "~/js/components/noty";
import debounce from "lodash.debounce";

import { mapMutations, mapActions, mapGetters, mapState } from "vuex";

export default {
    data() {
        return { logo: logo };
    },
    computed: {
        ...mapGetters("search", ["searchItems", "searchValue"]),

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
        ...mapActions("search", ["searchProduct", "activeSearchProduct"]),
        ...mapMutations("search", ["clearSearchItems", "updatesearchValue"]),

        debouncedSetSearchItems: debounce(function() {
            this.activeSearchProduct();
        }, 500),

        search() {
            this.debouncedSetSearchItems();
        }
    }
};
</script>

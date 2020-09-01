<template lang="pug">
section.catalog
    .wrapper(v-if="items.length > 0")
        .catalog__view
            .catalog__view-wrapper
                .catalog__view-text Вид: 
                .catalog__view-icon(
                    @click="catalogBaseView = false"
                    :class="{'action': catalogBaseView == false}"
                    )
                    svg.icon
                        use(href="/icons/icons.svg#list")
                .catalog__view-icon(
                    @click="catalogBaseView = true"
                    :class="{'action': catalogBaseView == true}"
                    )
                    svg.icon
                        use(href="/icons/icons.svg#tile")
        catalog-pager(
            :pagesNumber="pagesNumber"
            v-model="offset"
            :limit="limit"
            :offset="offset"
        )

        .catalog__wrapper
            //- catalog-filter(:filters="filters")
            .catalog__items(:class="[{'catag__base-view': catalogBaseView}, {'catag__list-view' : catalogBaseView==false}]")
                .catalog__items-title(v-if="items.length <= 0 ") 
                Product(
                    v-for="product in items"
                    :key="product.id"
                    :product="product"
                    )

        catalog-pager(
            :pagesNumber="pagesNumber"
            v-model="offset"
            :offset="offset"
        )
    
    //- MobileItems
</template>

<script>
import Product from "../components/catalog-item.vue";
import Filter from "../components/filter.vue";
import Pager from "../components/pager.vue";
import MobileItems from "../components/mobile-items.vue";
import api from "~/js/config/api";

export default {
    data() {
        return {
            resizeConut: "",
            isvisible: true,
            catalogBaseView: true,
            pagesNumber: [],
            items: [],
            offset: 0,
            limit: 30,
            filters: [
                {
                    id: 1,
                    text: `Все`
                },
                {
                    id: 2,
                    text: `Простуда и грипп`
                },
                {
                    id: 3,
                    text: `От боли и воспаления`
                },
                {
                    id: 4,
                    text: `Дыхательная система`
                },
                {
                    id: 5,
                    text: `Мульти-Табс`
                },
                {
                    id: 6,
                    text: `Мульти-Табс Юниор`
                }
            ]
        };
    },
    components: {
        Product,
        "catalog-filter": Filter,
        "catalog-pager": Pager,
        MobileItems
    },
    watch: {
        offset() {
            this.fetchItems();
        },
        resizeConut() {
            this.resizeConut < 576 ? (this.catalogBaseView = true) : "";
        }
    },
    methods: {
        handleResize() {
            this.resizeConut = document.body.clientWidth;
        },

        fetchItems() {
            this.items = [];
            fetch(
                `${api.catalog}?offset=${this.offset * this.limit}&limit=${
                    this.limit
                }`
            )
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    const products = result._embedded.items;
                    const pageNumber = Math.floor(result.total / result.limit);
                    this.pagesNumber = pageNumber;

                    products.forEach(element => {
                        element.count = 1;
                        this.items.push(element);
                    });
                });
        }
    },
    created() {
        if (localStorage.getItem("items")) {
            this.items = [];
            const response = localStorage.getItem("items");
            const result = JSON.parse(response);
            const products = result._embedded.items;
            const pageNumber = Math.floor(result.total / result.limit);
            this.pagesNumber = pageNumber;

            products.forEach(element => {
                element.count = 1;
                this.items.push(element);
            });

            localStorage.removeItem("items");
        } else {
            this.fetchItems();
        }
        window.addEventListener("resize", this.handleResize);
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    }
};
</script>

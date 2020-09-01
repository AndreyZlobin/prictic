<template lang="pug">
    .catalog__filter
        .catalog__filter__tilte
            h1 Лекарства
        ul
            li(v-for="filter in filters") 
              .checkbox
                   input(type="checkbox")
                   .checkbox__mark
              label {{filter.text}}
            
                        
                        

</template>

<script>
export default {
    props: {
        // filters: Array,
    },
    data() {
        return {
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

    methods: {},
    computed: {}
};
</script>

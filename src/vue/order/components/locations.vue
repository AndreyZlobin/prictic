<template lang="pug">
.locations-form
    .locations-form__wrapper
        .locations-form__title Фито-Фарм 1

        .locations-form__inner
            Checkbox(@changeCheckStatus="changeCheckStatus()")
            .locations-form__items
                .locations-form__item
                    .locations-form__text Адрес:
                    .locations-form__subtext г. Углич, ул.Северная д.14 А
                .locations-form__item
                    .locations-form__text Режим работы:
                    .locations-form__subtext 8.00-20.30 без обеда и выходных

    .locations-form__wrapper
        .locations-form__title Фито-Фарм 1

        .locations-form__inner
            Checkbox
            .locations-form__items
                .locations-form__item
                    .locations-form__text Адрес:
                    .locations-form__subtext г. Углич, ул.Северная д.14 А
                .locations-form__item
                    .locations-form__text Режим работы:
                    .locations-form__subtext 8.00-20.30 без обеда и выходных

    .locations-form__wrapper
        .locations-form__title Фито-Фарм 1

        .locations-form__inner
            Checkbox
            .locations-form__items
                .locations-form__item
                    .locations-form__text Адрес:
                    .locations-form__subtext г. Углич, ул.Северная д.14 А
                .locations-form__item
                    .locations-form__text Режим работы:
                    .locations-form__subtext 8.00-20.30 без обеда и выходных


</template>

<script>
import Checkbox from "../../components/checkbox.vue";

export default {
    components: {
        Checkbox
    },
    methods: {
        changeCheckStatus() {
            this.checkStatus = !this.checkStatus;
        }
    }
};
</script>

<style>
</style>
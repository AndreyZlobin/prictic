<template lang="pug">
.order-details
    .order-details__wrapper
        .order-details-item.availability
            .availability-title Наличие:
            .availability-text Есть в наличии
        .order-details.type
            .order-details__types Выбор доставки:
            Checkbox
            Checkbox
        .order-details.locations 
                svg.locations-img
                    use(href="/icons/icons.svg#marker")
                .locations-text Находится в <span @click="showLocations = !showLocations">3 аптеках</span>
                transition(name="fade")
                    Locations(v-if="showLocations") 
                

        .order-person__info
            .order-person__item
                label ФИО
                input(placeholder="Дружинина Софья Николаевна")

            .order-person__items.phone
                .order-person__item
                    label Телефон
                    input(placeholder="89506603666")
                .order-person__item
                    label Электронная почта
                    input(placeholder="zl@yarnf.tu")

            .order-person__items.pay-type
                    label Оплата
                    .order-person__items__wrapper.pay-type__wrapper
                        .order-person__item.pay-type__item
                            label  онлайн
                            Checkbox
                        .order-person__item.pay-type__item
                                label При получении
                                Checkbox
                     
            .order-person__item
                label Номер карты
                input

            .order-person__item
                label ФИО
                input(placeholder="латиницей как на карте")

            .order-person__items
                .order-person__item
                    label Месяц/год
                    input
                .order-person__item
                    label CVC/CVC2
                    input
        
</template>

<script>
import Checkbox from "../../components/checkbox.vue"
import Locations from "./locations.vue"
export default {
    data(){
        return{
            showLocations: false
        }
    },
    components:{
        Locations,
        Checkbox
    }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
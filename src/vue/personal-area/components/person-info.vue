<template lang="pug">
.personal-area-info

    .personal-area__wrapper
        .personal-area__wrapper-left
            .personal-area__item
                label ФИО 
                input.personal-area-input.name(
                    :disabled="disabled == true"
                     v-model="fullName"
                    )
            .personal-area__items
                .personal-area__item
                    label Телефон
                    input.personal-area-input.phone(
                        :disabled="disabled == true"
                        v-model="phone"
                        )
                .personal-area__item
                    label Электронная почта
                    input.personal-area-input.email(
                        :disabled="disabled == true"
                         v-model="email"
                        )
            .personal-area__item
                    label Адрес
                    input.personal-area-input.address(
                        :disabled="disabled == true"
                         v-model="address"
                        )
            .personal-area__item
                    label Номер карты
                    input.personal-area-input.cart-number(
                        :disabled="disabled == true"
                        :value="cartValue"
                        v-imask="mask"
                        @accept="onAccept"
                        @complete="onComplete"
                        )
            .personal-area__btns
                a.personal-area__btn.button(@click="disabled = !disabled") Изменить
                a.personal-area__btn.button.change-user-data(
                    @click="sendUserData()"
                    v-if="!disabled"
                    ) Сохранить 

        .personal-area__wrapper-right  
            .personal-area.points-title У вас <span>400</span>  баллов

            .personal-area.points-text Баллами вы можете оплатить до 20% покупки

            a.personal-area.points-link Перейти в каталог

</template>
<script>
import { IMaskDirective } from "vue-imask";
import API from "~/js/config/api";
import showNoty from "~/js/components/noty";
import authfetch from "~/js/authfetch.js";

export default {
    data() {
        return {
            phone: "",
            email: "",
            fullName: "",
            address: "",
            disabled: true,
            mask: {
                mask: "**** **** **** ****",
                lazy: false
            },
            cartValue: "",
            onAccept(e) {
                const maskRef = e.detail;
            },
            onComplete(e) {
                const maskRef = e.detail;
            }
        };
    },

    methods: {
        async fetchUser() {
            try {
                const response = await authfetch(API.user);
                const result = await response.json();
                this.address = result._embedded.props.address.value;
                this.fullName = result._embedded.props.fullName.value;
                this.email = result.email;
                this.phone = result.phone;
            } catch (error) {
                console.error("Error: fetchUser");
                console.error(error);
            }
        },
        
        async sendUserData() {
            const link = API.user;

            const userData = {
                phone: this.phone || undefined,
                fullName: this.fullName || undefined,
                address: this.address || undefined,
                email: this.email || undefined
            };
            try {
                const response = await authfetch(link, {
                    method: "POST",
                    body: JSON.stringify(userData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                this.disabled = !this.disabled;
            } catch (error) {
                showNoty("error", error.message);
                console.error("Ошибка:", error);
            }
            this.step++;
        }
    },
    created() {
        this.fetchUser();
    },
    directives: {
        imask: IMaskDirective
    }
};
</script>
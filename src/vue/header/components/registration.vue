<template lang="pug">
    form.registration(@submit.prevent="submitHandler")

        .registration__wrapper
            svg.registration__close(@click="closeRegistr()")
                use(href="/icons/icons.svg#close")
                
            .registration__tilte  Введите номер телефона для входа/регистрации

            .registration__inner
                .registration__item            
                    .registration__label.phone Телефон 
                    
                    input.registration__input.phone(
                        v-imask="phoneMask"
                        placeholder="+7(__)__-__-__"
                        :value.trim.lazy="phone"
                        :class="{'is-invalid':$v.phone.$error }"
                        @blur="$v.phone.$touch()"
                        @complete="onComplete"
                        @accept="onAccept"
                        )

                    pre.registration__error(v-if="$v.phone.$error") Это обязательне поле
                    br
                    pre.registration__error(v-if="!$v.phone.minLength") Телефон введен некорректно

            .registration__agreement
                input(
                type="checkbox"
                v-model="agree")
                .registration__agreement-text Cогласие на обработку персональных данных <br> <span>Политика конфиденциональности</span>

            button.registration__btn.button(
                type="submit"
                :disabled="disableBtn"
                :class="{'btn-disadled': this.$v.$invalid}"
                @click="$emit('sendPhone')"
                ) Сохранить 
</template>
<script>
import { IMaskDirective } from "vue-imask";
import { email, required, minLength } from "vuelidate/lib/validators";
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            phone: "",
            agree: false,
            phoneMask: {
                mask: "+{7}(000) 000 00 00",
                lazy: true
            }
        };
    },
    computed: {
        disableBtn() {
            return this.$v.$invalid;
        }
    },
    methods: {
        ...mapMutations("auth", ["showRegistr", "closeRegistr"]),
        submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            const personData = {
                phone: this.phone
            };
            console.log(personData);
        },
        onAccept(e) {
            const maskRef = e.detail;
            this.phone = maskRef.unmaskedValue;
            console.log(this.phone);
            this.$emit("input", this.phone);
        },
        onComplete(e) {
            const maskRef = e.detail;
            this.phone = maskRef.unmaskedValue;
            this.$emit("input", this.phone);
        }
    },
    watch: {
        agree(newVal) {
            this.$emit("checkAgree", newVal);
        }
    },
    validations: {
        phone: {
            required,
            minLength: minLength(11)
        },
        agree: {
            checked: v => v
        }
    },

    directives: {
        imask: IMaskDirective
    }
};
</script>
<style lang="scss" scoped>
</style>

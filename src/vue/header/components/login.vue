<template lang="pug">
    form.login(@submit.prevent)
        .login__wrapper
            svg.login__close(
                @click="closeRegistr()"
                )
                use(href="/icons/icons.svg#close")
            .login__tilte Введите код из SMS
            .login__item
                    input.registration__input.code(
                        type="password"
                        v-model="smsCode.value"
                        )
            a.login__back(@click="$emit('stepBack')") Ввести номер телефона заново
            button.registration__btn.button(
                type="submit"
                @click.prevent="$emit('regist')"
                ) Отправить 


</template>
<script>
import { mapMutations } from "vuex";
export default {
    
    props: {
        smsCode: {
            type: Object
        }
    },
    data() {
        return {
            code: ""
        };
    },
    methods: {
    ...mapMutations("header", [ "closeRegistr"]),
    },
    watch: {

    }
};
</script>

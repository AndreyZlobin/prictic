<template lang="pug">
header.header
    HeaderInfo
    div(:class="{'header-fixed': scrollConut > 60}")
        .wrapper
            HeaderSearch
            HeaderNavigation
            transition(name="fade")
                Registration(
                    v-if="showRegistration"
                    v-show="step == 1"
                    @closeRegistr="closeRegistr()"
                    @sendPhone="sendPhone()"
                    @checkAgree="agree=$event"
                    v-model="phone"
                    
                    )
            transition(name="fade")
                login(
                    v-if='showRegistration'
                    v-show="step == 2"
                    @closeRegistr="closeRegistr()"
                    @stepBack="stepBack()"
                    @regist="sendCode()"
                :smsCode="code"
                )
            .burger(
            @click=" showNav()"
            :class="{'header-fixed-burger': scrollConut > 60}"
            )
                .burger-wrapper
                    hr.burger__line
                    hr.burger__line
                    hr.burger__line
                    hr.burger__line
            HeaderMobile()
        MobileNav(
            :showMenu="showMenu"
            @closeNav="showNav()"
            
            )
        ToCart(
            :showMenu="showMenu"
            @showNav="showNav()"
        )

</template>
<script>
import HeaderInfo from "../components/header-info.vue";
import HeaderMobile from "../components/header-mobile.vue";
import HeaderNavigation from "../components/header-navigation.vue";
import MobileNav from "../components/mobile-nav.vue";
import HeaderSearch from "../components/header-search.vue";
import ToCart from "../components/to-cart.vue";
import Login from "../components/login.vue";
import Registration from "../components/registration.vue";
import API from "~/js/config/api";
import showNoty from "~/js/components/noty";
import authfetch from "~/js/authfetch.js";
import { mapState, mapGetters } from "vuex";

export default {
    data() {
        return {
            phone: "",
            code: { value: "" },
            agree: false,
            showMenu: false,
            step: 1,
            scrollConut: "",
            siteKey: "",
            reCaptchaToken: "",
            tokens: {}
        };
    },
    components: {
        HeaderInfo,
        HeaderMobile,
        HeaderNavigation,
        MobileNav,
        HeaderSearch,
        ToCart,
        Registration,
        Login
    },
    computed: {
        ...mapGetters("auth", ["showRegistration"])
    },

    methods: {
        async sendPhone() {
            const link = API.codeSender;
            const data = {
                phone: this.phone,
                agree: this.agree
            };

            try {
                const response = await fetch(link, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                const json = await response.json();
                if (json.errors) {
                    throw json.errors[0];
                }

                this.code = json;
                console.log("Успех:", JSON.stringify(json));
                localStorage.setItem("jwt", JSON.stringify(json));
            } catch (error) {
                showNoty("error", error.message);
                console.error("Ошибка:", error);
            }
            this.step++;
        },
        async sendCode() {
            const code = this.code.value;
            const params = {
                method: "POST",
                body: JSON.stringify({ code })
            };

            let link = API.codeVerifier;
            let response = null;
            let json = null;

            try {
                response = await authfetch(link, params, "jwt");

                if (response.ok) {
                    json = await response.json();
                    localStorage.setItem("jwt", JSON.stringify(json));
                    document.location.href =
                        "https://localhost:3000/personal-area.html";
                } else {
                    json = await response.json();
                    throw json.errors[0].message;
                }
            } catch (err) {
                const message =
                    typeof err == "string" ? err : "Ошибка авторизации";
                showNoty("error", message);
            }
        },
        showNav() {
            this.showMenu = !this.showMenu;
        },

        stepBack() {
            this.step--;
        },
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
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.arrow-down {
    transform: rotate(-180deg);
    transition: 0.4s linear;
}
</style>

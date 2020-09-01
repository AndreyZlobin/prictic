<template lang="pug">
.checkbox()
    input(type="checkbox" 
    @click="$emit('changeCheckStatus')"
    )
    .checkbox__mark
</template>

<script>
export default {
    data(){
        return{
            checkStatus: false
        }
    },
    methods:{
        changeCheckStatus(){
        }
    }
};
</script>

<style lang="scss">
.checkbox {
    margin-right: 15px;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    border-radius: 2px;
    width: 20px;
    height: 20px;

    &__mark {
        transition: background-color 0.15s ease-in-out;
        border-radius: 1px;
        background-color: inherit;
        width: 70%;
        height: 70%;
    }

    input[type="checkbox"] {
        position: absolute;
        top: 1px;
        right: 0;
        bottom: 0;
        left: 1px;
        opacity: 0;
        width: 100%;
        height: 100%;
    }

    input[type="checkbox"]:checked + .checkbox__mark {
        background-color: #000;
    }
}
</style>
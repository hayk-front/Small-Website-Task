<template>
    <div class="button">{{ innerText }}</div>
</template>

<script>
    export default {
        name: "CyanButton",
        props: {
            innerText: String,
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .button{
        cursor: pointer;
        max-width: fit-content;
        background-color: $cyan;
        border-radius: 20px;
        color: #fff;
        padding: 10px 24px;
    }
</style>
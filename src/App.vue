<template>
    <div id="app">
        <Login/>
    </div>
</template>

<script>
    import './assets/scss/style.scss'
    import Login from "./components/Login";

    export default {
        name: 'App',
        components: {
            Login
        },
    }
</script>
<style lang="scss">

    #app {
        font-family             : Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing  : antialiased;
        -moz-osx-font-smoothing : grayscale;
        text-align              : center;
        color                   : #2c3e50;
    }

</style>

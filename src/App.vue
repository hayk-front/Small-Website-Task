<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import './assets/scss/style.scss'

    export default {
        name: 'App',
        mounted() {
            if(localStorage.getItem('currentUser')
                && localStorage.getItem('currentUser') !== 'admin'){
                this.$router.push('/').catch((e)=>{console.log(e)})
            }else if(localStorage.getItem('currentUser')
                && localStorage.getItem('currentUser') === 'admin'){
                this.$router.push('/admin').catch((e)=>{console.log(e)})
            }
            else{
                this.$router.push('/login').catch((e)=>{console.log(e)})
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "./assets/scss/variables";

    #app {
        font-family: 'Poppins', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        color: $grey;
    }

</style>

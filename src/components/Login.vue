<template>
    <div class="login G-flex G-flex-column G-align-center">
        <h2>Welcome to Shortly</h2>
        <label for="username-input">Username: </label>
        <input
                ref="usernameInput"
                type="text"
                id="username-input"
                name="name"
                placeholder="enter username"
        />
        <CyanButton
                :inner-text="'Log in'"
                :style="{ borderRadius: 20 + 'px' }"
                @click.native = "login"
        ></CyanButton>
    </div>
</template>

<script>
    import CyanButton from "./CyanButton";

    export default {
        name: "Login",
        components: {
            CyanButton
        },
        methods: {
            login(){
                if(this.$refs.usernameInput && this.$refs.usernameInput.value){
                    localStorage.setItem('currentUser', this.$refs.usernameInput.value.toLowerCase());
                    if(localStorage.getItem('currentUser') !== 'admin'){
                        this.$router.push('/').catch((e) => { console.log(e) } )
                    }else{
                        this.$router.push('/admin').catch((e) => { console.log(e) } )
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .login {
        margin: 15% auto;
        padding: 1% 2%;
        width: 25%;
        min-width: 300px;
        border-radius: 20px;
        box-shadow : 8px 8px 10px rgb(192, 183, 183), -10px -10px 15px white;

        h2{
            font-size: 22px;
            margin-bottom: 2%;
            color: $darkViolet;
            text-align: center;
        }

        input{
            margin: 3% 0 5%;
            padding: 8px 12px;
            border: none;
            font-family: 'Poppins', Arial, sans-serif;
            font-size: 15px;
            box-shadow : 4px 4px 8px rgb(192, 183, 183), -4px -4px 8px white;
            outline: none;
            border-radius: 8px;
        }
    }
</style>
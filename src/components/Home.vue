<template>
    <div class="homepage">
        <header class="G-flex G-align-center G-justify-between">
            <img src="../../public/icons/logo.svg" alt="Shortly"/>
            <div class="nav-menu">
                <ul class="G-flex G-justify-between">
                    <li @click="increment('features')">Features</li>
                    <li @click="increment('pricing')">Pricing</li>
                    <li @click="increment('resources')">Resources</li>
                </ul>
            </div>
            <CyanButton
                    :inner-text="'Log out'"
                    @click.native = "logout"
            ></CyanButton>
        </header>
    </div>
</template>

<script>
    import CyanButton from "./CyanButton";

    export default {
        name: "Home",
        components: {CyanButton},
        data(){
            return{
                enterTime: null,
                userInfo: {
                    clickCount: {
                        features: 0,
                        pricing: 0,
                        resources: 0,
                        getStarted: 0,
                        shortenIt: 0,
                        boostLink: 0,
                    },
                    secondsInPage: 0,
                }

            }
        },
        methods: {
            logout() {
                this.userInfo.secondsInPage = Math.round((new Date() - this.enterTime) / 1000);
                localStorage.setItem(`${localStorage.getItem('currentUser')}`, JSON.stringify(this.userInfo));
                localStorage.removeItem('currentUser');
                this.$router.push('/login').catch((e) => {
                    console.log(e)
                })
            },
            increment(buttonName){
                switch (buttonName) {
                    case 'features':
                        this.userInfo.clickCount.features++;
                        break;
                    case 'pricing':
                        this.userInfo.clickCount.pricing++;
                        break;
                    case 'resources':
                        this.userInfo.clickCount.resources++;
                        break;
                    case 'getStarted':
                        this.userInfo.clickCount.getStarted++;
                        break;
                    case 'shortenIt':
                        this.userInfo.clickCount.shortenIt++;
                        break;
                    case 'boostLink':
                        this.userInfo.clickCount.boostLink++;
                        break;
                }
            }
        },
        mounted() {
          this.enterTime = new Date();
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .homepage {
        header {
            width: 74%;
            margin: 2% auto;

            .nav-menu {
                width: 24%;
                margin-right: 50%;

                ul {
                    list-style: none;

                    li{
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
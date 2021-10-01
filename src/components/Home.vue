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
                    @click.native="logout"
            ></CyanButton>
        </header>
        <section class="section1">
            <div class="section-content G-flex G-flex-column">
                <h1>More then just shorter links</h1>
                <p>
                    Build your brands recognition and get detailed
                    insights on how your links are performing.
                </p>
                <CyanButton
                        :inner-text="'Get Started'"
                        @click.native="increment('getStarted')"
                >
                </CyanButton>

                <img src="../../public/illustrations/illustration-working.svg" alt="illustration"/>
            </div>


            <div class="link-shorter G-flex G-align-center G-justify-between">
                <label>
                    <input
                            type="text"
                            name="name"
                            placeholder="Shorten a link here..."
                    />
                </label>
                <CyanButton
                        :inner-text="'Shorten It!'"
                        :style="{borderRadius: 8 + 'px',  height: 48 + 'px'}"
                        @click.native="increment('shortenIt')"
                ></CyanButton>
            </div>
        </section>

        <section class="section2">
            <div class="section-content G-flex G-flex-column G-align-center">
                <h1>Advanced Statistics</h1>
                <p class="section-description">
                    Track how your links are performing across the
                    web with our advanced statistics dashboard.
                </p>

                <div class="statistic-types G-flex G-justify-between G-flex-wrap">
                    <div class="connecting-underline"></div>
                    <div class="brand-recognition">
                        <div class="type-icon">
                            <img src="../../public/icons/icon-brand-recognition.svg" alt="icon"/>
                        </div>
                        <h4 class="title">Brand Recognition</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores debitis eos facilis illo nobis perspiciatis
                            praesentium saepe sequi tempore, veritatis!
                        </p>
                    </div>
                    <div class="detailed-records">
                        <div class="type-icon">
                            <img src="../../public/icons/icon-detailed-records.svg" alt="icon"/>
                        </div>
                        <h4 class="title">Detailed Records</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores debitis eos facilis illo nobis perspiciatis
                            praesentium saepe sequi tempore, veritatis!
                        </p>
                    </div>
                    <div class="fully-customizable">
                        <div class="type-icon">
                            <img src="../../public/icons/icon-fully-customizable.svg" alt="icon"/>
                        </div>
                        <h4 class="title">Fully Customizable</h4>
                        <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Asperiores debitis eos facilis illo nobis perspiciatis
                            praesentium saepe sequi tempore, veritatis!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section3 G-flex G-flex-column G-align-center">
            <h1>Boost your links today</h1>
            <CyanButton
                    :inner-text="'Get Started'"
                    @click.native="increment('boostLink')"
            ></CyanButton>
        </section>

        <footer></footer>
    </div>
</template>

<script>
    import CyanButton from "./CyanButton";

    export default {
        name: "Home",
        components: {CyanButton},
        data() {
            return {
                enterTime: null,
                userInfo: {
                    username: '',
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
                this.userInfo.username = localStorage.getItem('currentUser');
                let usersArr =  JSON.parse(localStorage.getItem('users')) || [];
                usersArr.push(this.userInfo);
                localStorage.setItem('users', JSON.stringify(usersArr));

                localStorage.removeItem('currentUser');
                this.$router.push('/login').catch((e) => {
                    console.log(e)
                })
            },
            increment(buttonName) {
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
        overflow: hidden;

        header {
            width: 74%;
            margin: 2% auto;

            .nav-menu {
                width: 24%;
                margin-right: 45%;

                ul {
                    list-style: none;

                    li {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .section1 {
        position: relative;

        .section-content {
            position: relative;
            z-index: 2;
            width: 74%;
            margin: 0 auto;
            padding: 8% 0 16%;

            h1 {
                z-index: 1;
                width: 50%;

                font-size: 74px;
                color: $darkViolet;
                font-weight: 700;
                line-height: 90px;
                background-color: transparent;
            }

            p {
                width: 45%;
                margin-bottom: 3%;
                background-color: transparent;
            }

            img {
                position: absolute;
                z-index: -1;
                top: 10%;
                right: -30%;
            }
        }

        .link-shorter {
            position: absolute;
            bottom: -55px;
            width: 74%;
            border-radius: 10px;
            left: 0;
            right: 0;
            z-index: 3;
            margin: 0 auto;
            padding: 2.5% 3%;
            background-color: $violet;
            background-image: url("../../public/illustrations/bg-shorten-desktop.svg");
            background-size: cover;
            background-repeat: no-repeat;

            label {
                width: 86%;

                input {
                    width: 100%;
                    padding: 1% 3%;
                    border-radius: 8px;
                    font-family: 'Poppins', Arial, sans-serif;
                    font-size: 18px;
                    outline: none;
                    border: none;
                }
            }

        }
    }

    .section2 {
        background-color: $greyBackground;
        padding: 10% 0;

        .section-content {
            position: relative;
            z-index: 2;
            width: 74%;
            margin: 0 auto;

            h1 {
                font-size: 32px;
                font-weight: 700;
                color: $darkViolet;
                margin-bottom: 1%;
            }

            .section-description {
                width: 40%;
                margin-bottom: 5%;
            }

            .statistic-types {
                min-height: 250px;

                .connecting-underline {
                    position: absolute;
                    top: 58%;
                    left: 20%;
                    width: 60%;
                    height: 8px;
                    background-color: $cyan;
                }

                .brand-recognition, .detailed-records, .fully-customizable {
                    position: relative;
                    width: 32%;
                    background-color: #fff;
                    padding: 5% 3% 3%;
                    height: fit-content;
                    min-height: 150px;
                }

                .detailed-records {
                    margin-top: 50px;
                }

                .fully-customizable {
                    margin-top: 100px;
                }

                .type-icon {
                    position: absolute;
                    top: -50px;
                    width: 90px;
                    height: 90px;
                    padding: 8%;
                    left: 8%;
                    background-color: $violet;
                    border-radius: 50%;

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        margin: auto;
                        background-color: transparent;
                    }
                }

                .title {
                    font-size: 22px;
                    font-weight: 700;
                    color: $darkViolet;
                }

            }
        }
    }

    .section3 {
        padding: 4% 0;
        background-color: $violet;
        background-image: url("../../public/illustrations/bg-boost-desktop.svg");
        background-repeat: no-repeat;
        background-size: cover;

        h1 {
            font-size: 36px;
            color: #fff;
            margin-bottom: 2%;
        }
    }

    footer {
        height: 250px;
        background-color: $darkViolet;
    }
</style>
<template>
    <div class="admin">
        <header class="G-flex G-align-center G-justify-between">
            <img src="../../public/icons/logo.svg" alt="Shortly"/>
            <CyanButton
                    :inner-text="'Log out'"
                    @click.native="logout"
            ></CyanButton>
        </header>

        <section class="section1">
            <div class="section-content  G-flex G-flex-column">
                <h2>Admin Dashboard</h2>
                <h4>Users Info</h4>
                <div v-if="usersInfo">
                    <div>
                        <div class="table100">
                            <table>
                                <thead>
                                <tr class="table100-head">
                                    <th class="column">Username</th>
                                    <th class="column">Features <br> (Button)</th>
                                    <th class="column">Pricing<br>(Button)</th>
                                    <th class="column">Resources<br>(Button)</th>
                                    <th class="column">Get Started<br>(Button)</th>
                                    <th class="column">Shorten It<br>(Button)</th>
                                    <th class="column">Boost Link<br>(Button)</th>
                                    <th class="column">Time in Page<br>(seconds)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(user, index) in usersInfo" :key="index">
                                    <td class="column">{{ user.username }}</td>
                                    <td class="column">{{ user.clickCount.features }}</td>
                                    <td class="column">{{ user.clickCount.pricing }}</td>
                                    <td class="column">{{ user.clickCount.resources }}</td>
                                    <td class="column">{{ user.clickCount.getStarted }}</td>
                                    <td class="column">{{ user.clickCount.shortenIt }}</td>
                                    <td class="column">{{ user.clickCount.boostLink }}</td>
                                    <td class="column">{{ user.secondsInPage }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-else>There is no user info available</div>
            </div>

        </section>
    </div>
</template>

<script>
    import CyanButton from "./CyanButton";

    export default {
        name: "AdminPanel",
        components: {CyanButton},
        data() {
            return {
                usersInfo: null
            }
        },
        methods: {
            logout() {
                localStorage.removeItem('currentUser');
                this.$router.push('/login').catch((e) => {
                    console.log(e)
                })
            },
        },
        beforeMount() {
            this.usersInfo = JSON.parse(localStorage.getItem('users'));
            console.log(this.usersInfo);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .admin {
        overflow: hidden;

        header {
            width: 74%;
            margin: 2% auto 4%;
        }
    }

    .section1 {
        position: relative;

        .section-content {
            position: relative;
            z-index: 2;
            width: 74%;
            margin: 0 auto;
        }

        h2 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 2%;
            color: $darkViolet;
            font-weight: 700;
        }

        h4 {
            color: $darkViolet;
        }

        table {
            position: relative;
            width: 100%;
            margin: 1% auto;

            overflow: hidden;
            border-radius: 10px;
            border-collapse: collapse;
            background: #CECFD3;
            box-shadow: 8px 8px 10px rgb(192, 183, 183), -10px -10px 15px #D0D1D5;

            thead tr {
                height: 60px;
                background: #36304a;
            }

            td, th {
                padding-left: 8px;
            }

            td.l, th.l {
                text-align: right;
            }

            td.c, th.c {
                text-align: center;
            }

            td.r, th.r {
                text-align: center;
            }

            .table100-head th {
                font-size: 18px;
                color: #fff;
                line-height: 1.3;
                font-weight: unset;
            }

            tbody {
                tr {
                    height: 50px;
                }

                tr:nth-child(even) {
                    background-color: #f5f5f5;
                }

                tr {
                    font-size: 15px;
                    color: #808080;
                    line-height: 1.2;
                    font-weight: unset;
                }

                .column{
                    width: 12%;
                    padding: 0 1%;
                    text-align: center;
                }
            }
        }

        table * {
            position: relative;
        }
    }

</style>
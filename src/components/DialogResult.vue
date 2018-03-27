<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent width="420px" transition="dialog-bottom-transition">
            <!--<v-btn primary dark slot="activator">Open Dialog</v-btn>-->
            <v-card style="text-align: center; width:440px;">
                <div class="pa-3">
                    <img src="public/images/heroHead.png" alt="">

                    <h4 class="pt-2 mb-4">{{resWord}}</h4>

                    <h4 class="bolder pa-0 ma-0 text-xs-right"
                        :class="[value<25? 'error--text' :(value<50?'primary--text':'success--text')]">
                        {{ value }}%</h4>
                    <v-progress-linear
                            v-bind:size="130"
                            v-bind:width="15"
                            v-bind:rotate="270"
                            v-bind:value="value"
                            primary
                            :error="value<25"
                            :success="value>50"
                            class="ma-0"
                            :class="[value<25? 'error--text' :(value<50?'primary--text':'success--text')]"
                    >
                    </v-progress-linear>
                </div>


                <!--<v-card-actions>-->
                <!--<v-spacer></v-spacer>-->
                <!--<v-btn icon large class="primary&#45;&#45;text" v-tooltip:top="{html:$lang.string.home}"-->
                <!--@click.native="click('home')">-->
                <!--<v-icon large>home</v-icon>-->
                <!--</v-btn>-->
                <!--<v-btn icon large class="primary&#45;&#45;text" v-tooltip:top="{html:$lang.string.repeat}"-->
                <!--@click.native="click('repeat')">-->
                <!--<v-icon large>cached</v-icon>-->
                <!--</v-btn>-->
                <!--<v-btn icon large class="teal&#45;&#45;text" v-tooltip:bottom="{html:$lang.string.next}"-->
                <!--@click.native="click('next')">-->
                <!--<v-icon large>arrow_forward</v-icon>-->
                <!--</v-btn>-->
                <!--</v-card-actions>-->
                <!--<v-divider class="mt-4"></v-divider>-->
                <v-card class="primary pa-2">
                    <v-btn icon large dark class="ml-4" v-tooltip:top="{html:$lang.string.home}"
                           @click.native="click('home')">
                        <v-icon large>home</v-icon>
                    </v-btn>
                    <v-btn icon large dark class="ml-4" v-tooltip:top="{html:$lang.string.repeat}"
                           @click.native="click('repeat')">
                        <v-icon large>cached</v-icon>
                    </v-btn>
                    <v-btn v-if="showNext" icon large dark class="ml-4" v-tooltip:top="{html:$lang.string.next}"
                           @click.native="click('next')">
                        <v-icon large>arrow_forward</v-icon>
                    </v-btn>
                    <!--<v-layout column align-center>-->
                    <!--<v-btn flat large primary @click.native="click('home')">{{$lang.string.home}}</v-btn>-->
                    <!--<v-icon x-large>arrow_forward</v-icon>-->
                    <!--</v-layout>-->
                    <!--<v-btn flat large primary @click.native="click('repeat')">{{$lang.string.repeat}}</v-btn>-->
                    <!--<v-btn flat large success @click.native="click('next')">{{$lang.string.next}}</v-btn>-->
                </v-card>

            </v-card>
        </v-dialog>

    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                interval: {},
                value: 0,
                showNext: false,
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        created() {

            this.showNext = this.$lang.value.parts.length - 1 > this.$route.params.resId;

            this.$store.commit('setResult', this.$route.params);
            setTimeout(() => {
                this.dialog = true;
                this.interval = setInterval(() => {
                    if (this.value >= this.$route.params.result) {
                        return;
                    }
                    this.value += 10
                }, 150);
            }, 0);
        },
        computed: {
            resWord() {
                let resWords = this.$lang.string.resWords;
                let result = this.$route.params.result;
                var colStar = (result === 100) ? 3 : parseInt(result / 25);
                var rand = Math.floor(Math.random() * resWords[colStar].length);
                return resWords[colStar][rand];
            }
        },
        methods: {
            click(name) {
                let route = null;
                switch (name) {
                    case 'home':
                        route = {name: 'main'};
                        break;
                    case 'next':
                        route = {name: 'game', params: {gameId: parseInt(this.$route.params.resId) + 1}}
                        break;
                    case 'repeat':
                        this.$router.go(-1);
//                        this.$router.go({path: this.$router.path, force: true});
//                        route = {
//                            path: this.$router.path, force: true, query: {
//                                t: +new Date()
//                            }
//                        };
//                        route = {name: 'game', params: {gameId: parseInt(this.$route.params.gameId)}}
                        break;
                }
                if (route)
                    this.$router.push(route);
            },
        }
    }
</script>

<style lang="stylus">
    .progress-circular
        margin: 1rem
</style>
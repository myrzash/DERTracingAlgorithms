<template>
    <div>
        <component class="white" :is="part.interactive.name" :items="part.interactive.items"></component>
        <router-view></router-view>
        <footer style="position: relative; background:#2a323a;" class="pa-5">
            <v-layout v-if="nextPart" text-xs-right row wrap>
                <v-flex xs3 md2 offset-md1 lg2 offset-lg2 xl1 offset-xl3
                        class="partimage"
                        :style="{background:'url('+`public/images/${nextPart.image}`+')'}">
                    <!--<img height="120" width="160" :src="`public/images/${nextPart.image}`" alt=""/>-->
                </v-flex>
                <v-flex xs12 md8 lg6 xl4 class="blue">
                    <v-card flat class="transparent pa-2">
                        <p class="headline white--text text-xs-left"> {{nextPart.title}}</p>
                        <v-spacer></v-spacer>
                        <v-btn flat class="white--text" @click.native="$router.push(nextPart.route)">
                            {{$lang.string.nextSection}}
                        </v-btn>
                    </v-card>
                </v-flex>
            </v-layout>
        </footer>
    </div>
</template>

<script>
    import Lecture from './games/Lect.vue'
    import Cycle from './games/Cycle.vue'

    export default {
        data() {
            return {
                colors: [
                    'yellow accent-3',
                    'blue-grey lighten-3',
                    'cyan accent-2',
                ]
            }
        },
        created() {
            let soundCorrect = new Audio();
            soundCorrect.src = 'public/sound/correct1.mp3';
            let soundWrong = new Audio();
            soundWrong.src = 'public/sound/error1.mp3';
            this.shuffle(this.colors);
            this.$on('game', (isCorrect) => {
                if (!this.$store.state.soundEffects) return;

                console.log('isCorrect: ', isCorrect);
                if (isCorrect) {
                    soundCorrect.play();
                } else {
                    soundWrong.play();
                }

            });
        },
        components: {
            Lecture, Cycle
        },
        methods: {
            shuffle: function (a) {
                var j, x, i;
                for (i = a.length; i; i--) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
                return a;
            },
        },
        watch: {
            '$route.params.gameId'(gameId) {
                if (gameId >= 0) this.shuffle(this.colors);
            }
        },
        computed: {
            part() {
                return this.$lang.value.parts[this.$route.params.gameId];
            },
            nextPart() {
                let parts = this.$lang.value.parts;
                let nextGameId = +this.$route.params.gameId + 1;
                let end = nextGameId < parts.length;
                if (!end) return null;
                return {
                    title: parts[nextGameId].info ? parts[nextGameId].info : parts[nextGameId].title,
                    image: parts[nextGameId].image,
                    route: {
                        name: 'game',
                        params: {gameId: nextGameId}
                    }
                };
            }
        },
    }
</script>

<style lang="stylus">
    .mflex
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    .partimage
        background-repeat: no-repeat !important;
        background-position center top;
        background-size: cover !important;
        min-height: 150px;

    .btnPlay
        left: 50%;
        top: 50%;
        margin-left: -28px !important;
        margin-top: -28px !important;

    .btnPause
        left: 50%;
        top: 50%;
        margin-left: -28px !important;
        margin-top: -28px !important;
        opacity: 0;

    .btnPause:hover
        opacity: 1;
</style>
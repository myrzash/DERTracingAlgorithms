<template>
    <v-app light>
        <v-navigation-drawer
                temporary
                v-model="drawer"
                clipped
        >
            <v-list>
                <v-list-tile v-for="(item, i) in menu"
                             :class="[$route.name==item.route.name && (item.route.name=='main' || $route.params.gameId==i-1 )?'grey lighten-2':'']"
                             @click.native="$router.push(item.route); drawer=false"
                >
                    <v-list-tile-action v-if="item.icon">
                        <v-icon primary light v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title
                                :class="[$route.name==item.route.name && (item.route.name=='main' || $route.params.gameId==i-1 )?'bolder':'']"
                                v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed dark>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer">
            </v-toolbar-side-icon>

            <v-fab-transition>
                <v-btn
                        dark
                        fab
                        absolute
                        info
                        v-tooltip:left="{html:$lang.string.info}"
                        bottom
                        right
                        v-show="snackBarText"
                        @click.native="snackBar=!snackBar"
                >
                    <v-icon>info</v-icon>
                </v-btn>
            </v-fab-transition>

            <v-layout row wrap align-center>
                <v-btn icon @click.native="onSwitchSound()"
                       v-tooltip:bottom="{ html: $lang.string.soundOnOff }"
                >
                    <v-icon>{{soundEffects ? 'volume_up' : 'volume_off'}}</v-icon>
                </v-btn>
                <v-btn href="http://der.nis.edu.kz/feedback2/index.html?id=inf201710" target="_blank" icon
                       v-tooltip:bottom="{ html: $lang.string.feedback}">
                    <v-icon>feedback</v-icon>
                </v-btn>

                <v-menu offset-y>
                    <v-btn v-tooltip:bottom="{ html: $lang.string.changeLanguage }"
                           style="min-width:40px; width:40px;" flat round small slot="activator">
                        {{currentLangName}}
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="(item,index) in languages" :key="index"
                                     @click.native="onClickLang(index)">
                            <!--<v-list-tile-title>{{ item.name }}</v-list-tile-title>-->
                            <v-list-tile-title>{{ item }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-layout>

            <v-slide-x-transition mode="out-in">
                <v-toolbar-title v-if="$route.params.gameId>=0 && parts" class="ml-5">
                    {{parts[$route.params.gameId].title}}
                </v-toolbar-title>
            </v-slide-x-transition>
        </v-toolbar>

        <main :style="{minHeight: windowSize.y-70+'px'}" class="white">
            <v-slide-y-transition mode="out-in">
                <router-view>
                </router-view>
            </v-slide-y-transition>
        </main>

        <v-snackbar
                :timeout="10000"
                multi-line
                fixed
                top
                v-show="snackBarText"
                v-model="snackBar"
        >
            {{snackBarText}}
            <v-btn dark flat @click.native="snackBar = false">{{$lang.string.close}}</v-btn>
        </v-snackbar>

        <v-footer class="black white--text" style="height:70px;">
            <v-spacer></v-spacer>
            <v-layout column>
                <div v-if="$lang.value && $lang.value.title">{{$lang.value.title}}.
                    <span v-if="$lang.value.grade" class="grey--text">{{$lang.value.grade}}.</span>
                </div>
                <a class="light-blue--text" href="http://play.nis.edu.kz" target="_blank">play.nis.edu.kz</a>
            </v-layout>
            <v-spacer></v-spacer>
            <span>&copy; {{$lang.string.copyright}}</span>
            <v-spacer></v-spacer>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                music: null,
                launched: true,
                languages: {
                    kz: 'ҚАЗ',
                    ru: 'РУС',
                    en: 'ENG'
                },
                soundEffects: this.$store.state.soundEffects,
                parts: null,
                menu: new Array(),
                snackBar: false,
                snackBarText: null,
                miniVariant: false,
                clipped: true,
                drawer: null,
                windowSize: {
                    x: 0,
                    y: 0
                }
            }
        },

        methods: {
            onResize() {
                this.windowSize = {x: window.innerWidth, y: window.innerHeight}
            },
            initVideoPlayer() {
                let videos = document.querySelectorAll('video:not(.bg-video)');
                console.log("videos: ", videos);
                for (let video of videos) {
                    video.onplay = () => {
                        console.log("video playing");
                        if (this.soundEffects) this.music.pause();
                    };
                    video.onpause = () => {
                        console.log("video paused: ");
                        if (this.soundEffects) this.music.play();
                    };
                }
            },
            onClickLang(lang) {
                this.$router.push({params: {lang: lang}});
            },
            onSwitchSound() {
                this.soundEffects = !this.soundEffects;
            },
        },
        watch: {
            parts(val) {
                if (val) {
                    this.menu.splice(0, this.menu.length);
                    this.menu.push({title: this.$lang.string.home, icon: 'home', route: {name: 'main'}});
                    val.forEach((item, index) => {
                        this.menu.push({
                            title: item.title,
                            icon: 'folder_open',
                            route: {name: 'game', params: {gameId: index}}
                        });
                    });
                }
            },
            soundEffects: function (val) {
                this.$store.commit('setSoundKey', val);
                if (val == true) this.music.play();
                else this.music.pause();
            },
            '$route.params.gameId'(gameId) {
                console.log('App gameId updated: ', gameId);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                setTimeout(() => {
                    this.drawer = false;
                    this.initVideoPlayer();
                }, 0);
                if (this.parts && gameId >= 0) {
                    this.snackBarText = this.parts[gameId].info;
                } else {
                    this.snackBarText = null;
                }
            },
        },
        computed: {
            currentLangName() {
                return this.languages[this.$lang.getLang()];
            },
        },
        beforeCreate() {
            if (!this.$route.params.lang) {
                this.$router.push('/ru');
            }
        },
        created() {
            console.log("App created");
            this.music = new Audio();
            this.music.volume = 0.3;
            this.music.src = 'public/sound/bg.mp3';
            this.music.loop = true;
            if (this.soundEffects) this.music.play();
            this.initVideoPlayer();
        },
        mounted() {
            this.onResize()
        },
        beforeDestroy() {
            console.log("beforeDestroy");
            if (this.music) this.music.pause();
            this.music = null;
        }
    }


</script>

<style lang="stylus">
    @import '../stylus/main'
    @import './../node_modules/vue2-animate/dist/vue2-animate.min.css'
</style>

<style>
    #app {
        font-family: AppFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .bolder {
        font-family: AppFont900;
    }

    .btn {
        font-weight: 900 !important;
    }

    .apparate {
        opacity: 0;
    }
</style>

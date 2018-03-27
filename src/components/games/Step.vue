<template>
    <div>
        <v-layout class="pt-5" column>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>

                <div v-apparate:fadeInLeft="{y:0,delay:100}"  class="mt-2 mb-4" v-if="items.title">
                    <template v-for="title in items.title.split('|')">
                        <label :class="[$parent.$data.colors[0]]" class="pa-2 display-2 bolder">
                            {{title}}
                        </label>
                        <p></p>
                    </template>
                </div>

                <h5 v-apparate:fadeIn="{y:0,delay:100}"  class="prolog" v-if="items.prolog" v-html="items.prolog"></h5>
                <v-stepper v-model="position" vertical class="elevation-0">
                    <template v-if="items" v-for="(item,index) in items.steps">
                        <v-stepper-step :step="index+1" v-bind:complete="position > index"
                                        @click.native="position = index + 1">
                            <!--{{item.title}}-->
                        </v-stepper-step>
                        <v-stepper-content :step="index+1">

                            <v-layout row wrap class="grey lighten-3" align-center>
                                <v-flex v-if="item.image" md4 xs12 class="pa-0">
                                    <img :src="item.image" width="100%" alt=""/>
                                </v-flex>
                                <v-flex :class="[item.image?'md8':'']" xs12 class="pa-4">
                                    <h3 class="bolder mb-2" v-if="item.title">{{item.title}}</h3>
                                    <h5 class="mb-2" v-if="item.header" v-html="item.header"></h5>
                                    <h5 class="mb-2" v-if="item.text" v-html="item.text"></h5>
                                    <h5 class="mb-2"><a class="primary--text" v-if="item.href" :href="item.href.link"
                                                        :download="item.href.download?item.href.download:false">{{item.href.title}}
                                    </a></h5>

                                    <h5 class="mb-2" v-if="item.footer" v-html="item.footer"></h5>
                                </v-flex>
                            </v-layout>

                            <div style="position: relative;" v-if="item.video">
                                <!--<img v-if="item.bg" :src="item.bg" alt="">-->

                                <div v-show="!played.includes(index)"
                                     style="position: absolute; background:black; top:0; left:0; width:100%; height: 100%;"></div>

                                <video :src="item.video" width="100%"
                                       frameborder="0"
                                       :id="'vid'+index"
                                       :controls="played.includes(index)"
                                >
                                </video>

                                <v-fab-transition>
                                    <v-btn v-show="played.includes(index)" fab large dark absolute class="btnPause"
                                           @click.native="clickPause(index)">
                                        <v-icon large>pause</v-icon>
                                    </v-btn>
                                </v-fab-transition>
                                <v-fab-transition>
                                    <v-btn v-show="!played.includes(index)" fab large dark primary absolute
                                           class="btnPlay"
                                           @click.native="clickPlay(index)">
                                        <v-icon large>play_arrow
                                        </v-icon>
                                    </v-btn>
                                </v-fab-transition>
                            </div>


                            <v-btn style="width:100%;" v-if="index<items.steps.length-1" large primary dark
                                   @click.native="position++">
                                {{$lang.string.next}}
                                <v-icon class="ml-1">navigate_next</v-icon>
                            </v-btn>

                        </v-stepper-content>
                    </template>
                </v-stepper>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                position: 1,
                played: [],
            }
        },
        methods: {
            clickPlay(index) {
                this.played.forEach((item) => {
                    document.querySelector('#vid' + item).pause();
                });
                this.played.splice(0, this.played.length);
                document.querySelector('#vid' + index).play();
                this.played.push(index);
            },
            clickPause(index) {
                this.played.splice(this.played.indexOf(index), 1);
                document.querySelector('#vid' + index).pause();
            },
            finish() {
                this.$router.push({name: 'res', params: {result: 100, resId: this.$route.params.gameId}});
            }
        },
        beforeDestroy() {
            this.played.splice(0, this.played.length);
        },
        watch: {
            position(val) {
            }
        }
    }
</script>

<style lang="stylus">
    .prolog ul li
        margin: 16px;
        padding: 16px;
        list-style: none;
        background: #2196f3;
        font-weight bolder;
        color: white;
        cursor: pointer;
</style>
<template>

    <div :style="{height:items.height?`${items.height}px`:`${height}px`}" class="text-xs-center"
         style="position:relative; overflow: hidden;">
        <div v-if="items.bgVideo">

            <video class="bg-video" loop autoplay muted onloadedmetadata="this.muted = true">
                <source :src="items.src">
            </video>

            <v-layout column text-xs-left>
                <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2>
                    <div style="position: relative;" class="pl-5 pt-4 pb-5 pr-5">
                        <div v-apparate:fadeInLeft="{y:400,delay:100}" style="display: inline-block; "
                             class="black pa-2  mb-3"
                             v-if="items.subTitle">
                            <p v-for="item in items.subTitle.split('|')"
                               class="headline pa-1 ma-0 white--text font700">{{item}}</p>
                        </div>
                        <div v-apparate:fadeInRight="{y:400,delay:300}" v-if="items.title">
                            <template v-for="item in items.title.split('|')">
                                <label class="display-3 pa-2 orange lighten-2 black--text font700">{{item}}</label>
                                <p class="ma-0 pa-0"></p>
                            </template>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </div>
        <div v-else>
            <v-parallax v-if="!items.isImage && items.bg" style="position: absolute; width:100%;" :src="items.bg"
                        :height="items.height?items.height:600"></v-parallax>
            <div v-if="items.isImage" :src="items.bg" alt=""
                 :style="{backgroundColor:items.backgroundColor?items.backgroundColor:'#fafafa',backgroundImage:items.bg?`url('${items.bg}')`:''}"
                 style="position: absolute; min-height:600px; width:100%; left:0;top:0; background-repeat:no-repeat; background-size: contain; background-position: center;">
            </div>

            <v-fab-transition>
                <v-btn v-apparate:bounceIn="{y:400,delay:0}"
                       :style="{marginTop:items.height?`${items.height/2-50}px`:`${height/2-50}px`}" fab dark primary
                       large
                       @click.native.stop="dialog=true;">
                    <v-icon large>play_arrow</v-icon>
                </v-btn>
            </v-fab-transition>

            <v-dialog v-model="dialog" class="dialog-video">
                <video :src="items.src"
                       frameborder="0"
                       :id="`video${id}`"
                       controls
                >
                </video>
            </v-dialog>

        </div>
    </div>
</template>
<script>
    import Ttl from './Title.vue'

    export default {
        props: ['items', 'id'],
        components: {
            Ttl
        },
        data() {
            return {
                height: 600,
                dialog: false,
                width: 0
            }
        },
        watch: {
            dialog(val) {
                let elem = document.querySelector('#video' + this.id);
                if (!elem) return;
                console.log("ID '#video: ", elem);
                val ? elem.play() : elem.pause();
                val ? console.log("play") : console.log("paused")
            }
        },
//        methods: {
//            play() {
//                document.querySelector('#video1').play();
//            },
//            pause() {
//                document.querySelector('#video1').pause();
//            }
//        },
    }
</script>

<style lang="stylus">
    .dialog
        width: auto !important;


</style>
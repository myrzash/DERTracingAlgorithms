<template>
    <div :style="{height:items.bg?`${items.bg.height?items.bg.height:1000}px`:''}">
        <v-layout column>
            <v-flex v-if="items.bg" xs12>
                <v-parallax style="position: absolute; width:100%;" :src="items.bg.parallax"
                            :height="items.bg.height?items.bg.height:1000"></v-parallax>

                <video v-if="items.bg.video" class="bg-video" muted loop autoplay>
                    <source :src="items.bg.video">
                </video>

            </v-flex>
            <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2>
                <div style="position: relative;" class="pl-5 pt-4 pb-5 pr-5">
                    <div v-apparate:fadeInLeft="{y:500,delay:0}" style="display: inline-block;" class=" pa-2  mb-3"
                         :style="{backgroundColor:items.backgroundColor?items.backgroundColor:'black'}"
                         v-if="items.subTitle">
                        <p v-for="item in items.subTitle.split('|')"
                           :style="{color: items.color?items.color:'white'}"
                           class="headline pa-1 ma-0 font700">{{item}}</p>
                    </div>
                    <div v-apparate:fadeInLeft="{y:500,delay:0}" v-if="items.title">
                        <template v-for="item in items.title.split('|')">
                            <label class="display-3 pa-2 orange lighten-2 black--text font700">{{item}}</label>
                            <p class="ma-0 pa-0 mt-1"></p>
                        </template>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {}
        },
    }
</script>

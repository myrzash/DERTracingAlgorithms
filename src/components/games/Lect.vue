<template>
    <div class="lecture">

        <section>
            <shape :items="items.shape"></shape>
        </section>
        <v-layout column>
            <template v-for="(item,index) in items.views">
                <!--WHEN FULL WIDTH-->
                <v-flex v-if="item.length>=3 || item.full" xs12
                        :class="item.length>=3&&item[0].marginClass?item[0].marginClass:'mt-5'">

                    <div v-if="item.full">
                        <component :is="item.name" :items="item"
                                   :id="index"></component>
                    </div>
                    <v-layout row wrap class="ma-0 pa-0" :class="[index==items.views.length-1?'mb-5':'']" v-else>
                        <v-flex class="ma-0 pa-1 mt-2 m-flex" v-for="tile in item" xs12 md6
                                :class="[`lg${parseInt(12/item.length)}`]">
                            <component :is="tile.name" :items="tile" class="component"></component>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 lg10 offset-lg1 xl8 offset-xl2 v-else>

                    <v-layout v-if="item.length>=0" row wrap class="mt-5"
                              :class="[index==items.views.length-1?'mb-5':'']">
                        <v-flex class="pa-1 m-flex" v-for="tile in item" xs12 md6
                                :class="[`lg${parseInt(12/item.length)}`]">
                            <component class="component" :is="tile.name" :items="tile"></component>

                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pa-1 m-flex" :class="[item.marginClass?item.marginClass:'mt-5']" v-else>
                        <component :is="item.name" :items="item" class="component" :id="index"></component>
                    </v-layout>
                </v-flex>
            </template>
        </v-layout>
    </div>
</template>

<script>
    import Shape from './lecture/Shape.vue'
    import MText from './lecture/Text.vue'
    import MImage from './lecture/Image.vue'
    import MVideo from './lecture/Video.vue'

    export default {
        props: ['items'],
        data() {
            return {}
        },
        components: {
            Shape,
            MText,
            MImage,
            MVideo
        },
//            clickPlay(index) {
//                this.played.forEach((item) => {
//                    document.querySelector('#vid' + item).pause();
//                });
//                this.played.splice(0, this.played.length);
//                document.querySelector('#vid' + index).play();
//                this.played.push(index);
//            },
//            clickPause(index) {
//                this.played.splice(this.played.indexOf(index), 1);
//                document.querySelector('#vid' + index).pause();
//            }
//        beforeDestroy() {
//            this.played.splice(0, this.played.length);
//        }
//        mounted() {
//            let videos = document.getElementsByClassName('container-video');
//            for (let video of videos) {
//                this.positions.push(this.position(video)[1]);
//            }
//            console.log(this.positions);
//        },

    }
</script>

<style lang="stylus">
    .lecture section
        position relative;

    .bg-video
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;

    .component
        height: 100%;
        overflow: hidden;
        width: 100%;

    .lecture .m-flex
        position: relative;

    /*
    background: green;//#fafafa;*/

    /*
      .lecture .flex
          background:red;
          width:96%;
          height:96%;
          margin: 1%;
    */


</style>

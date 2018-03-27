<template>
    <v-layout column>
        <v-flex xs12 lg8 offset-lg2 class="pa-3">
            <h4 class="font500">{{items.title}}</h4>
            <h4 v-for="(name,index) in items.partNames" class="pa-0 ma-0">
                {{name}}
                <v-btn fab class="elevation-0" :class="colors[index]" small>
                </v-btn>
            </h4>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-layout row wrap text-xs-center>
                <v-flex xs12 md4 lg3 v-for="(image,index) in images" class="pa-1">
                    <div class="pa-2" :class="[isExist(index)?colors[painted[index]]:'elevation-12']"
                         style="position:relative">
                        <img :src="image" alt="" class="mt-4">
                        <v-layout row align-center justify-center>
                            <v-btn v-for="(color,colorId) in colors" fab :class="color" small
                                   :disabled="isExist(index)"
                                   @click.native="onClickColor(index,colorId)">
                            </v-btn>
                        </v-layout>
                        <div v-if="isExist(index)">
                            <v-btn v-if="corrects.includes(index)" absolute right top fab success small dark
                                   class="elevation-0 mt-4">
                                <v-icon>done</v-icon>
                            </v-btn>
                            <v-btn absolute right top fab error small dark class="elevation-0 mt-4" v-else>
                                <v-icon>close</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
            <!--<div class="text-xs-center">-->
            <!--<v-btn primary large>Начать заново</v-btn>-->
            <!--</div>-->
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                disabled: [],
                painted: null,
                corrects: [],
//                correct: 0,
                colors: ['pink lighten-3', 'lime lighten-3', 'cyan lighten-3'],
            }
        },
        created() {
//            this.correct = 0;
//            this.corrects = [];
//            this.painted = null;

        },
        computed: {
            images() {
                let array = new Array();
                for (let item of this.items.partImages) {
                    array.push(...item);
                }
                this.$parent.shuffle(array);
                this.painted = new Array();
                for (let i in array) {
                    this.painted.push(null);
                }
                return array;
            },
        },
        methods: {
            isExist(index) {
                return this.disabled.includes(index);
            },
            isTrue(index, colorId) {
                return this.items.partImages[colorId].includes(this.images[index]);
            },
            onClickColor(index, colorId) {
                if (!this.disabled.includes(index))
                    this.disabled.push(index);
                this.painted[index] = colorId;
                if (this.isTrue(index, colorId)) this.corrects.push(index);

                if (this.disabled.length == this.images.length) {
                    setTimeout(() => {
                        this.$router.push({
                            name: 'res',
                            params: {
                                result: this.corrects.length / this.images.length * 100,
                                resId: this.$route.params.gameId
                            }
                        });
                    }, 3000);
                }

            }
        },

    }
</script>
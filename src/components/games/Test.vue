<template>
    <div>

        <v-layout column text-xs-center>
            <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
                <div class=" pl-5 pr-5">

                </div>
                <v-slide-x-transition>
                    <div>
                        <v-layout column>
                            <v-flex xs12 md10 offset-md1>
                                <v-progress-linear class="ml-2" v-model="progressBar"></v-progress-linear>
                            </v-flex>
                        </v-layout>

                        <h4 class="mt-4 text-xs-center">{{item.question}}</h4>
                        <p class="subheading grey--text text-xs-center">
                            {{item.variants[0].length == 1 ? $lang.string.choiceOneVariant : $lang.string.choiceMultiVariant}}</p>
                        <div v-if="variants">
                            <v-layout row wrap v-if="item.isImage">
                                <v-flex xs12 md6 lg3 v-for="(variant,index) in variants">
                                    <v-btn large @click.native="clickBtn(variant)"
                                           class="btnImage"
                                           :disabled="fulled && !basket.includes(variant)"
                                           :class="[basket.includes(variant)?[ checked ?[ item.variants[0].includes(variant)?'success':'error']:'primary']:'']">
                                        <div class="image" v-bind:style="{background: `url(${variant})`}"></div>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                            <v-layout column v-else>
                                <v-flex xs12 md10 offset-md1 v-for="(variant,index) in variants">
                                    <v-btn large @click.native="clickBtn(variant)"
                                           style="width: 100%;"
                                           class="btnText"
                                           :disabled="fulled && !basket.includes(variant)"
                                           :class="[basket.includes(variant)?[ checked ?[ item.variants[0].includes(variant)?'success':'error']:'primary']:'']">
                                        {{variant}}
                                    </v-btn>
                                </v-flex>
                            </v-layout>

                            <!--<v-btn class="button"-->
                            <!--v-for="(variant,index) in variants"-->
                            <!--large-->
                            <!--@click.native="clickBtn(variant)"-->
                            <!--:class="[basket.includes(variant)?[ checked ?[ item.variants[0].includes(variant)?'success':'error']:'warning']:'']"-->
                            <!--:disabled="fulled && !basket.includes(variant)"-->
                            <!--&gt;-->
                            <!--<div v-if="item.isImage" class="image"-->
                            <!--v-bind:style="{background: `url(${variant})`}"></div>-->
                            <!--<p v-else> {{variant}}</p>-->
                            <!--</v-btn>-->
                        </div>
                    </div>
                </v-slide-x-transition>
                <v-divider class="mt-4 mb-4"></v-divider>
                <div>
                    <v-slide-x-transition>
                        <v-btn large primary :disabled="!fulled"
                               v-if="checked==false"
                               @click.native="check()">
                            {{$lang.string.check}}
                        </v-btn>
                        <v-btn large success v-else-if="position+1==items.count"
                               @click.native="finish()">
                            {{$lang.string.finalize}}
                        </v-btn>
                        <v-btn large primary v-else
                               @click.native="next()">
                            {{$lang.string.next}}
                        </v-btn>
                    </v-slide-x-transition>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        data() {
            return {
                progress: 0,
                correct: 0,
                position: 0,
                basket: [],
                checked: false,
            }
        },
        created() {
            this.$parent.shuffle(this.items.data);
        },
        methods: {
            clickBtn(variant) {
                if (this.checked) return false;
                let id = this.basket.indexOf(variant);
                if (id >= 0) this.basket.splice(id, 1);
                else this.basket.push(variant);
            },
            check() {
                this.checked = true;
                this.progress++;
                let victory;
                for (let trueVar of this.item.variants[0]) {
                    victory = this.basket.includes(trueVar);
                    if (!victory) break;
                }


                if (victory) this.correct++;
                this.$parent.$emit('game', victory);
            },
            next() {
                this.checked = false;
                this.position++;
                this.basket.splice(0, this.basket.length);
            },
            finish() {
                this.$router.push({
                    name: 'res',
                    params: {result: this.correct / this.progress * 100, resId: this.$route.params.gameId}
                });
            }
        },
        computed: {
            fulled() {
                return this.basket.length == this.item.variants[0].length
            },
            progressBar() {
                return this.progress / this.items.count * 100;
            },
            item() {
                return this.items.data[this.position];
            },
            variants() {
                let array = new Array();
                array.push(... this.item.variants[0]);
                array.push(... this.item.variants[1]);
                return this.$parent.shuffle(array);
            },
        },

    }
</script>

<style lang="stylus">
    /*
        .fade-enter-active
            transition: opacity .8s;

        .fade-enter, .fade-leave-to
            opacity: 0;
  */

    .btnText
        min-height: 60px;
        font-size: 1.2em;
        height: auto !important;
        text-transform: lowercase;

    .btnText > .btn__content
        white-space: inherit !important;
        line-height: 1.5em;
        flex: auto;

    .btnImage
        min-width: 260px;
        min-height: 240px;
        overflow: hidden;

    .image
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        width: 94%;
        height: 94%;
        left: 3%;
        top: 3%;
        transition: transform .3s;

</style>
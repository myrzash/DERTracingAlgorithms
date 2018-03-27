<template>
    <div>
        <div style="width:425px; height:560px; position:relative;overflow: hidden;">
            <img
                    style=" transition: margin-top .3s;"
                    v-if="part.image" :src="`public/images/${part.image}`"
                    :style="{'margin-top':show?'-10px':'0'}"
            />

            <!--<transition name="expand">-->
            <div class="blue white--text pa-3 bodyCard"
                 style=""
                 :style="{height:show?'250px':'160px'}"
                 @click="$router.push({name:'game',params:{gameId:id} })"
                 @mouseover="show=true" @mouseleave="show=false">

                <h3 class="white--text" v-if="part.title">{{part.title}}</h3>
                <transition name="fade">
                    <p class="headline" v-show="show" v-if="part.info">
                        {{part.info}}
                    </p>
                </transition>
                <!--<span v-if="part.info" class="grey&#45;&#45;text">{{part.info}}</span>-->
            </div>
            <!--</transition>-->
            <!--<v-btn primary flat @click.native="">{{$lang.string.open}}-->
            <!--</v-btn>-->


            <!--<div style="position: absolute; bottom:30px; left:0;">-->
            <!---->
            <!--</div>-->
        </div>
        <!--<v-progress-linear :info="$store.getters.result(id)!=100" :success="$store.getters.result(id)==100"-->
                           <!--:value="$store.getters.result(id)"></v-progress-linear>-->
        <!--<h6 class="text-xs-right" :class="[$store.getters.result(id)==100?'green&#45;&#45;text':'blue&#45;&#45;text']">-->
            <!--<strong>{{$store.getters.result(id)}}%</strong></h6>-->
    </div>
</template>

<script>
    export default {
        props: ['part', 'id'],
        data: () => ({
            show: false
        }),
    }
</script>


<style lang="stylus">

    .fade-enter-active, .fade-leave-active
        transition: opacity .5s;

    .fade-enter, .fade-leave-to
        opacity: 0;

    .bodyCard
        position: absolute;
        width: 100%;
        bottom: 0;
        cursor: pointer;
        transition: height .3s ease-in-out;
    .bodyCard:hover > h3
            font-weight: 600;
</style>
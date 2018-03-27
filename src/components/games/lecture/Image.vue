<template>
    <div @mouseover="show=true" @mouseleave="show=false"
         style="cursor:pointer; position: relative; display:flex; flex-direction: row; justify-content: center; align-items: center; min-height: 400px;"
         :style="{backgroundColor:items.backgroundColor?items.backgroundColor:'#fafafa', backgroundImage:items.src?items.src:''}"
    >
        <div v-apparate:fadeIn="{y:0,delay:300}" class="img"
             :style="{backgroundImage:`url('${items.src}')`, backgroundSize:items.cover?'cover':'contain'}">
        </div>
        <!--<img v-apparate:fadeIn="{y:0,delay:300}" :src="items.src" alt=""/>-->


        <div v-show="show" v-if="items.hover" class="hover-text pa-5 grey lighten-5">
            <ttl v-apparate:fadeInDown="{y:0,delay:300}" :title="items.hover.title"></ttl>

            <h5 v-if="items.big" v-apparate:fadeIn="{y:0,delay:300}" v-for="text in items.hover.text"
                v-html="text"></h5>
            <h6 v-apparate:fadeInUp="{y:0,delay:300}" style="line-height:1.1em;" v-if="!items.big"
                v-for="text in items.hover.text"
                v-html="text"></h6>
        </div>
        <v-btn v-if="items.hover" v-show="!show" @click.native="show=true" fab large dark primary absolute center>
            <v-icon>touch_app</v-icon>
        </v-btn>
        <v-btn v-if="items.hover" v-show="show" @click.native="show=false" icon large absolute right top class="mt-4">
            <v-icon>close</v-icon>
        </v-btn>
    </div>
</template>
<script>
    import Ttl from './Title.vue'

    export default {
        props: ['items'],
        components: {
            Ttl
        },
        data() {
            return {
                show: false,
            }
        },
    }
</script>

<style lang="stylus">
    .img
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        background-position: center;
        background-repeat no-repeat;

    .hover-text
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;

</style>
<template>
    <div class="pa-5" style="position: relative;"
         :style="{padding:items.padding?items.padding+'px !important':'', backgroundColor:items.backgroundColor?items.backgroundColor:'#fafafa'}">
        <ttl v-apparate:fadeInLeft="{y:0,delay:100}" :title="items.title"></ttl>
        <h5 v-apparate:fadeIn="{y:0,delay:300}" v-if="items.big" v-for="text in items.text" v-html="text"></h5>
        <h6 v-apparate:fadeIn="{y:0,delay:300}" v-if="!items.big" style="line-height:1.3em;" v-for="text in items.text"
            v-html="text"></h6>
        <img v-apparate:fadeIn="{y:0,delay:300}" :src="items.image" alt="">
        <div v-if="items.extra" v-html="items.extra"></div>
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
            return {}
        },
    }
</script>

<style lang="stylus">

</style>
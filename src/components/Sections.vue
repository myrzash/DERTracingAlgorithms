<template>
    <v-layout wrap  align-center justify-center>
        <div v-for="(part,id) in $lang.value.parts">
                <maincard v-apparate:fadeIn="{y:0,delay:id*300}" class="ma-2" :part="part" :id="id"></maincard>
        </div>
    </v-layout>
</template>

<script>
    import maincard from './model/CardMain.vue'

    export default {
        components: {
            maincard
        },
    }
</script>

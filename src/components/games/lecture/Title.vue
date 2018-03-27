<template>
    <div>
        <h4 class="font500 black--text" v-if="title">{{title}}</h4>
    </div>
</template>
<script>
    export default {
        props: ['title'],
        data() {
            return {}
        },
    }
</script>
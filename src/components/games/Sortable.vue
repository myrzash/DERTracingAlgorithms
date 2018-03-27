<template>
    <div>
        <h4>Sortable</h4>
        <v-list>
            <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                <div v-for="element in myArray">
                    <v-list-tile :ripple="false">
                        {{element.name}}
                    </v-list-tile>
                    <v-divider></v-divider>
                </div>
            </draggable>
        </v-list>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        data() {
            return {
                myArray: [
                    {
                        name: 'name001',
                    },
                    {
                        name: 'name2',
                    },
                    {
                        name: 'name3',
                    },
                    {
                        name: 'name2',
                    },
                    {
                        name: 'name3',
                    }
                ]
            }
        },
        components: {
            draggable,
        },
    }
</script>
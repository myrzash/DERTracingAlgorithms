<template>
    <v-layout column class="pa-2 pt-4 grey lighten-3">
        <v-flex xs12 md10 offset-md1 lg8 offset-lg2 xl6 offset-xl3>
            <h5 v-html="items.task"></h5>
            <v-card class="pa-4">
                <h5 v-html="convertCode"></h5>
            </v-card>
            <v-card class="pa-3 mt-4">

                <table class="datatable table">
                    <thead>
                    <tr>
                        <th v-for="header in items.headers" v-html="header"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,id) in items1">

                        <td v-for="(child,key) in item" :key="key">
                            <!--{{key}}-->
                            <!--{{child}}-->
                            <p class="font700 text-xs-center" v-if="key=='step'">{{child}}</p>
                            <v-text-field
                                    :error="checked && items2[id][key]!=child"
                                    :append-icon="checked && items2[id][key]!=child?'close':''"
                                    :disabled="item.step==1"
                                    placeholder="="
                                    v-model="item[key]"
                                    v-else
                            ></v-text-field>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </v-card>
            <div class="text-xs-center mt-2">
                <v-btn :disabled="!activeButtonCheck" @click.native="check()" large primary>{{$lang.string.check}}
                </v-btn>
            </div>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        props: ['items'],
        data() {
            return {
                checked: false,
                attempt: 0,
                code: 'begin' +
                's:=0;' +
                'for i:=1 to 6  do' +
                'begin' +
                's:=s+i;' +
                'Label1.Caption:=IntToStr(s);' +
                'Application.ProcessMessages;' +
                'sleep(100);' +
                'end;' +
                'end.',
                items1: [
                    {
                        step: 1,
                        s: 0,
                        i: '-',
                        n: 6,
                        action: 's:=0'
                    }, {
                        step: 2,
                        s: null,
                        i: null,
                        n: null,
                        action: null
                    },
                ],
                items2:
                    [{
                        step: 1,
                        s: 0,
                        i: '-',
                        n: 6,
                        action: 's:=0'
                    }, {
                        step: 2,
                        s: 1,
                        i: 1,
                        n: 6,
                        action: 's:=s+1'
                    }, {
                        step: 3,
                        s: 3,
                        i: 2,
                        n: 6,
                        action: 's:=s+2'
                    }, {
                        step: 4,
                        s: 6,
                        i: 3,
                        n: 6,
                        action: 's:=s+3'
                    }, {
                        step: 5,
                        s: 10,
                        i: 4,
                        n: 6,
                        action: 's:=s+4'
                    }, {
                        step: 6,
                        s: 15,
                        i: 5,
                        n: 6,
                        action: 's:=s+5'
                    }, {
                        step: 7,
                        s: 21,
                        i: 6,
                        n: 6,
                        action: 's:=s+6'
                    }],
            }
        },
        methods: {
            compareArray(array1, array2) {
                if (array1.length != array2.length) return false;
                for (let i = 0; i < array1.length; i++) {
                    for (let key in array1[i]) {
                        if (array1[i][key] != array2[i][key]) return false;
                    }
                }
                return true;
            },
            check() {
                this.checked = true;
                if (this.compareArray(this.items1, this.items2)) {
                    this.$router.push({
                        name: 'res',
                        params: {result: 100 - this.attempt * 10, resId: this.$route.params.gameId}
                    });
                }
                this.attempt++;
            },
            addRow() {
                this.items1.push({
                    step: this.items1.length + 1,
                    s: null,
                    i: null,
                    n: null,
                    action: null
                });
            },
//            generate(string, isInc) {
//                let params, s = Math.floor(Math.random() * 10);
//                let n, i = 0;
//                if (isInc) {
//                    i = Math.floor(Math.random() * 5);
//                    n = Math.floor(Math.random() * 3) + i + 2;
//                    params = `i=${i}; while(i<${n})`;
//                } else {
//                    n = Math.floor(Math.random() * 2);
//                    i = Math.floor(Math.random() * 3) + n + 2;
//                    params = `i=${i}; while(i>${n})`;
//                }
//                return `s =${s};` + params + string;
//            }
        },
        created() {
            for (let i = this.items1.length; i < this.items2.length; i++) {
                this.addRow();
            }
        },
        computed: {
            activeButtonCheck() {
                for (let key in this.items1[1]) {
                    if (this.items1[1][key] == null) return false;
                }
                return true;
            },
            convertCode() {
                let string = this.code;
                let commands = ['while', 'do', 'begin', 'end', 'for', 'to'];
                string = string.trim();
                string = string.replace(/;/g, ';<br/>');
                string = string.replace(/do/g, 'do<br/>');
                string = string.replace(/begin/g, 'begin<br/>');
//                string = string.replace(/=/g, ':=');
//                string = string.replace(/\(/g, ' ');
//                string = string.replace(/\)/g, ' do</br>');
//                string = string.replace(/{/g, 'begin</br>');
//                string = string.replace(/}/g, 'end;</br>');

                for (let command of commands) {
                    let re = new RegExp(command, "g");
                    string = string.replace(re, `<span class="font700 blue--text">${command}</span>`);
                }
                return string;
            }
        }

    }
</script>

<style lang="stylus">
    .textField label, .textField input
        margin: 0 20px;
        font-size: 1.5em;

    .btnPlay
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;

    .btnPause
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -28px;
        opacity: 0;

    .datatable th
        font-size: 1.6em !important;
        font-family: AppFont700;
        color: black !important;
        text-align: center !important;

    .datatable td
        font-size: 1.6em !important;

    .datatable input
        max-width: 100px;
        font-size: 1.1em !important;
        text-align: right !important;
</style>
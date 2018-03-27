import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'

import VueLocalization from 'vuejs-localization'
import Lang from './Lang.vue'

import store from './store'
import Main from './components/Main.vue'
import Game from './components/Game.vue'
import Result from './components/DialogResult.vue'

Vue.use(Vuetify);
Vue.use(VueRouter);
VueLocalization.requireAll(require.context('./lang', true, /\.js$/));

Vue.use(VueLocalization);

require('vue-apparate');
VueApparate.init(Vue);

const router = new VueRouter({
    routes: [
        {
            path: '/:lang', component: Lang,
            children: [
                {path: '', name: 'main', component: Main},
                {
                    path: 'game/:gameId', name: 'game', component: Game,
                },
                {path: 'res', name: 'res', component: Result}
            ]
        },
    ]
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

document.onselectstart = noselect;
document.oncontextmenu = noselect;

function noselect() {
    return false;
};
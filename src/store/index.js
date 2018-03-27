import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
        state: {
            RESULT: 'res201710',
            soundEffects: localStorage.getItem("bgMusic") ? localStorage.getItem("bgMusic") == 'true' : true,
        },
        getters: {
            result: (state) => (resId) => {
                return localStorage.getItem(state.RESULT + resId) ? parseInt(localStorage.getItem(state.RESULT + resId)) : 0;
            }
        },
        mutations: {
            setResult(state, attrs) {
                console.log("setResult: ", attrs);
                let {resId, result} = attrs;
                localStorage.setItem(state.RESULT + resId, result);
            },
            setSoundKey(state, val) {
                state.soundEffects = val;
                localStorage.setItem("bgMusic", val);
                console.log("bgMusic: ", localStorage.getItem("bgMusic"));
            }
        }
    })
;
export default store;
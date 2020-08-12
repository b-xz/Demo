import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
    State,
    actions,
    mutations,
    getters
})
export default store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increase (state, num) {
      state.count = num
    }
  },
  actions: {
  },
  modules: {
  }
})

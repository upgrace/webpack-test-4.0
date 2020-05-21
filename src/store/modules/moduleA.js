// import * as Types from '../TYPES'

export default {
  namespaced: true,
  state: {
    from: 'from home'
  },
  getters: {
    from: state => state.from
  },
  actions: {
    changeFrom ({ commit, state, rootState }, msg) {
      commit('doChangeForm', msg + 'old:' + state.from + 'root count: ' + rootState.count)
      // commit(Types.count, 3)
    }
  },
  mutations: {
    doChangeForm (state, msg) {
      state.from = msg
    }
  }
}

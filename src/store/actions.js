import * as Types from './TYPES'

const mutations = {
  incrementCount ({ commit, state, getters }, step) {
    commit(Types.count, step)
  }
}

export default mutations

import * as Types from './TYPES'

const mutations = {
  [Types.count] (state, step) {
    state.count += step
  }
}

export default mutations

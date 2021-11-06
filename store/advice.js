export const state = () => ({
  adviceList: [],
})

export const getters = {
  getAdviceList(state) {
    return state.adviceList
  },
  getAdviceById: (state) => (adviceId) => {
    return state.adviceList.find(
      (x) => Number.parseInt(x.id) === Number.parseInt(adviceId)
    )
  },
  getAdviceCount(state) {
    return state.adviceList.length
  },
}

export const mutations = {
  ADD_ADVICE(state, advice) {
    // Add the advice to the advice list
    state.adviceList.push(advice)
  },
  CLEAR_ADVICE(state) {
    // Clear the advice list
    state.adviceList = []
  },
}

export const actions = {
  getAdviceSlip({ rootState, commit }) {
    return new Promise((resolve, reject) => {
      // Get the advice from the API
      this.$axios.$get('/advice').then(function (response) {

        // Isolate the advice
        const adviceObject = response.slip;

        // Add advice object to the state
        commit('ADD_ADVICE', adviceObject)

        // Resolve the promise
        resolve(adviceObject)
      })
    })
  },
  getAdviceSlipById({ rootState, commit, getters }, adviceId){

    // Make sure the adviceId given is numeric
    adviceId = Number.parseInt(adviceId)

    return new Promise((resolve, reject) => {
      // Check if we have the data in state
      const stateAdviceObject = getters.getAdviceById(adviceId);

      // Check if the data is empty
      if (stateAdviceObject != null) {
        resolve(stateAdviceObject)
      }

      // Get the advice from the API
      this.$axios.$get('/advice/' + adviceId).then(function (response) {

        // Isolate the advice
        const adviceObject = response.slip;

        // Add advice object to the state
        commit('ADD_ADVICE', adviceObject)

        // Resolve the promise
        resolve(adviceObject)
      })
    })
  }
}

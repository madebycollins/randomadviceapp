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
  clearAdviceList({ commit }) {
    return new Promise((resolve, reject) => {
      // Clear the advice
      commit('CLEAR_ADVICE')

      // Resolve the promise
      resolve()
    })
  },
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
  },
  getAdviceSlipByTopic({ rootState, commit, getters }, adviceTopic){

    return new Promise((resolve, reject) => {

      // Get the advice from the API
      this.$axios.$get('/advice/search/' + adviceTopic).then(function (response) {

        if (response.total_results) {
          // Isolate the advice
          const adviceList = response.slips;

          //  Store the advice if
          adviceList.forEach(function(advice){
            // Isolate data
            const obj = {
              id: advice.id,
              advice: advice.advice

            }

            // Add advice object to the state
            commit('ADD_ADVICE', obj)
          })

          // Resolve the promise
          resolve(adviceList)
        } else {
          // Create an empty list
          const adviceList = [];

          // Resolve the list
          resolve(adviceList)
        }


      })
    })
  }
}

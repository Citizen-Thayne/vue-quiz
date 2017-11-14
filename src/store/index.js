import Vuex from 'vuex'

export const state = {
  quizTitle: '',
  questionCount: 0,
  choiceCount: 0,
  questionChoices: {},
  currentQuestionIndex: 0,
  responses: {}
}

export const getters = {
  currentChoices: (state) => state.questionChoices[state.currentQuestionIndex]
}

export const mutations = {
  incrementQuestionCount (state) {
    state.questionCount++
  },
  incrementChoiceCount (state) {
    state.choiceCount++
  },
  initializeQuestionChoices (state, questionIndex) {
    state.questionChoices[questionIndex] = []
  },
  setQuestionChoice (state, { questionIndex, choiceIndex }) {
    state.questionChoices[questionIndex].push(choiceIndex)
  },
  setResponse (state, { questionIndex, choiceIndex }) {
    state.responses[questionIndex] = choiceIndex
  },
  setQuestionIndex (state, index) {
    state.currentQuestionIndex = index
  }
}

export const actions = {
  registerQuestion ({ commit, state }) {
    let index = this.questionCount
    commit('incrementQuestionCount')
    commit('initializeQuestionChoices', state.questionCount)
    return index
  },
  registerChoice ({ commit }) {
    let index = this.choiceCount
    commit('incrementChoiceCount')
    return index
  },
  registerQuestionChoice ({ commit }, { questionIndex, choiceIndex }) {
    commit('setQuestionChoice', { questionIndex, choiceIndex })
  },
  submitAnswer ({ commit }, { questionIndex, choiceIndex }) {
    commit('setResponse', { questionIndex, choiceIndex })
  },
  goToQuestion ({commit}, index) {
    commit('setQuestionIndex', index)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

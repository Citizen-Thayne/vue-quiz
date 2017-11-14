import { mutations } from '@/store'

const {
  incrementQuestionCount,
  incrementChoiceCount,
  initializeQuestionChoices,
  setQuestionChoice,
  setResponse,
  setQuestionIndex
 } = mutations

describe('mutations', () => {
  describe('incrementQuestionCount', () => {
    it('should add one to the current question count', () => {
      const state = { questionCount: 0 }
      incrementQuestionCount(state)
      expect(state.questionCount).to.equal(1)
      incrementQuestionCount(state)
      expect(state.questionCount).to.equal(2)
    })
  })
  describe('incrementChoiceCount', () => {
    it('should add one to the current choice count', () => {
      const state = { choiceCount: 0 }
      incrementChoiceCount(state)
      expect(state.choiceCount).to.equal(1)
      incrementChoiceCount(state)
      expect(state.choiceCount).to.equal(2)
    })
  })
  describe('initializeQuestionChoices', () => {
    it('should set an empty array at question index', () => {
      const state = { questionChoices: {} }
      initializeQuestionChoices(state, 0)
      expect(state.questionChoices[0]).to.eql([])
    })
  })
  describe('setQuestionChoice', () => {
    it('should add choiceIndex to question\'s choice collection ', () => {
      const state = {
        questionChoices: {
          1: []
        }
      }
      const payload = {
        questionIndex: 1,
        choiceIndex: 2
      }
      setQuestionChoice(state, payload)
      expect(state.questionChoices[1]).to.eql([2])
    })
  })
  describe('setResponse', () => {
    it('should set a question\'s chosen response to the passed response', () => {
      const state = {
        responses: {}
      }
      const payload = {
        questionIndex: 3,
        choiceIndex: 4
      }
      setResponse(state, payload)
      expect(state.responses[3]).to.equal(4)
    })
  })
  describe('setQuestionIndex', () => {
    it('should change the questionIndex', () => {
      const state = { currentQuestionIndex: 5 }
      setQuestionIndex(state, 6)
      expect(state.currentQuestionIndex).to.equal(6)
    })
  })
})

import Question from '@/components/Question'
import Choice from '@/components/Choice'
import { shallow, createLocalVue, mount } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Question.vue', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      registerQuestion () {
        return 1
      },
      registerChoice () {
        return 2
      },
      registerQuestionChoice: sinon.spy()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('should have an index after being created', async () => {
    const wrapper = shallow(Question, { store, localVue })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.index).to.be.a('number')
    expect(wrapper.vm.index).to.equal(1)
  })
  it('should regsiter choices in `choices` slot', function () {
    const wrapper = mount(Question, {
      slots: {
        choices: Choice
      },
      store,
      localVue
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(actions.registerQuestionChoice.called).to.equal(true)
        resolve()
      })
    })
  })
})

import Choice from '@/components/Choice'
import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Choice.vue', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      registerChoice () {
        return 1
      }
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('should have an index after being created', async () => {
    const wrapper = shallow(Choice, { store, localVue })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.index).to.be.a('number')
    expect(wrapper.vm.index).to.equal(1)
  })
})

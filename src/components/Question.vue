<template>
  <div class="question">
    <slot name="choices">
    </slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      index: null,
      choicesFound: false
    }
  },
  async created () {
    await this.registerSelf()
    this.$on('choiceCreated', this.registerChoice)
  },
  async mounted () {
    await this.findChoices()
  },
  methods: {
    ...mapActions([
      'registerQuestion',
      'registerQuestionChoice'
    ]),
    async registerChoice (choiceIndex) {
      const questionIndex = this.questionIndex
      await this.registerQuestionChoice({ questionIndex, choiceIndex })
    },
    async registerSelf () {
      this.index = await this.registerQuestion()
    }
  }
}
</script>


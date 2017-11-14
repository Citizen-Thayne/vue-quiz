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
      index: null
    }
  },
  async created () {
    await this.registerSelf()
  },
  async mounted () {
    this.findChoices()
  },
  methods: {
    ...mapActions([
      'registerQuestion',
      'registerQuestionChoice'
    ]),
    async findChoices () {
      this.$slots.choices.forEach(async (el, i) => {
        if (el.isComment) {
          await this.registerQuestionChoice(this.index, i)
        }
      }, this)
    },
    async registerQuistion () {
      this.index = await this.registerQuestion()
    }
  }
}
</script>


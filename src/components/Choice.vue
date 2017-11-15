<template>
  <div class="choice">
    <slot></slot>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    isCorrect: { default: false }
  },
  data () {
    return {
      index: null
    }
  },
  async created () {
    await this.registerSelf()
    this.$parent.$emit('choiceCreated', this.index)
  },
  methods: {
    ...mapActions([
      'registerChoice'
    ]),
    async registerSelf () {
      this.index = await this.registerChoice()
    }
  }
}
</script>


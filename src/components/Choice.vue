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
  created () {
    this.registerSelf()
  },
  mounted () {
    this.isChoice = true
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


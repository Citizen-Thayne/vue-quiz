<template>
  <div class="question">
    <div v-for="question in questions" :key="question">
      {{question}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      choices: []
    }
  },
  mounted () {
    this.isQuestion = true
    this.findChoices()
  },
  methods: {
    findChoices () {
      var self = this
      this.$children.forEach((el) => {
        if (el.isChoice) {
          self.choices.push(el)
        }
      })
    }
  }
}
</script>


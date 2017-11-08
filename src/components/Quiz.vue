<script>
export default {
  data () {
    return {
      questions: [],
      currentQuestionIndex: 1
    }
  },
  mounted () {
    this.findQuestions()
  },
  methods: {
    findQuestions () {
      debugger
      var self = this
      this.$children.forEach(el => {
        if (el.isQuestion) {
          self.questions.push(el)
        }
      })
    }
  }
}
</script>

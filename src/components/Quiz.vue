<template>
  <div class="quiz">
    <slot name="questions">      
    </slot>
  </div>
</template>


<script>
export default {
  data () {
    return {
      // currentQuestionIndex: 1
    }
  }
  // mounted () {
  //   this.findQuestions()
  // },
  // methods: {
  //   findQuestions () {
  //     this.$children.forEach(child => {
  //       if (child.isQuestion) {
  //         this.questions.push(child)
  //       }
  //     }, this)
  //   }
  // }
}
</script>

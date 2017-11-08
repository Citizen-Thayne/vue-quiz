<template>
  <div id='math-quiz'>
    <question>
      <h3>What is 1 + 1</h3>
      <choice>1</choice>
      <choice correct>2</choice>
      <choice>3</choice>
      <choice>4</choice>
    </question>
    <question>
      <h3>What is 2 * 2</h3>
      <choice>1</choice>
      <choice>2</choice>
      <choice>3</choice>
      <choice correct>4</choice>
    </question>
  </div>
</template>

<script>
import Quiz from './components/Quiz'

export default {
  mixins: {
    Quiz
  }
}
</script>


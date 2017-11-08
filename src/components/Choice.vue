<template>
  <div class="choice">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    correct: { default: false }
  },
  mounted () {
    this.isChoice = true
  }
}
</script>


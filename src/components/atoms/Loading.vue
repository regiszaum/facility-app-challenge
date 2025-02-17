<template>
    <div class="loader" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  }
});
</script>

<style lang="stylus" scoped>
.loader
  padding 8px
  aspect-ratio 1
  border-radius 50%
  background #2693FF
  --_m conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box
  -webkit-mask var(--_m)
  mask var(--_m)
  -webkit-mask-composite source-out
  mask-composite subtract
  animation l3 1s infinite linear

@keyframes l3
  to
    transform rotate(1turn)
</style>
<template>
  <button class="floating-action-button">
    <IconComponent :name="'plus'" height="24px" />
  </button>
</template>

<script setup>
import IconComponent from "@/components/atoms/IconComponent.vue";
</script>
<style lang="stylus" scoped>
.floating-action-button
  position fixed
  bottom 20px
  right 20px
  background #0ed984
  color white
  border none
  width 77px
  height 77px
  border-radius 50%
  font-size 24px
  cursor pointer
  &:hover
    background #28a745
</style>

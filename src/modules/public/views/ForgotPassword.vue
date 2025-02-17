<template>
  <div class="fp-container">
    <LeftBanner />
    <ForgotPasswordForm />
  </div>
</template>

<script setup>
import LeftBanner from '../components/atoms/LeftBanner.vue';
import ForgotPasswordForm from '../components/molecules/ForgotPasswordForm.vue';
</script>

<style lang="stylus" scoped>
.fp-container
  display flex
  height 100vh
  flex-direction row

@media (max-width: 768px)
  .fp-container
    flex-direction column
</style>
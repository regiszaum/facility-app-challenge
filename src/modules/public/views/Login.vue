<template>
  <div class="login-container">
    <LeftBanner />
    <LoginForm />
  </div>
</template>

<script setup>
import LeftBanner from '../components/atoms/LeftBanner.vue';
import LoginForm from '../components/molecules/LoginForm.vue';
</script>

<style lang="stylus" scoped>
.login-container
  display flex
  height 100vh
  flex-direction row

@media (max-width: 768px)
  .login-container
    flex-direction column
</style>

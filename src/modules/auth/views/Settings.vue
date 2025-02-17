<template>
  <div class="settings-container">
    <h1>Configurações</h1>
    <img src="@/assets/svg/under-construction.svg" alt="Imagem em construção">
    <p>Esta página está em construção...</p>
  </div>
</template>

<script setup>
</script>

<style lang="stylus" scoped>
.settings-container
  display flex
  flex-direction column
  justify-content center
  align-items center
  text-align center
  background-color #E9F4FB
  color #333

  h1
    color #283848
    font-size 26px
    font-weight bold
    margin 140px 0 40px 0

  img
    width 100%
    height 200px
    margin-bottom 40px
  p
    font-size 1.2rem
    color #6c757d

@media (max-width: 768px)
  .settings-container
    padding 20px
    h1
      font-size 2rem
    p
      font-size 1rem
</style>

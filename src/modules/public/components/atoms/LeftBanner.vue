<template>
  <div class="left-section">
    <div class="left-content">
      <img src="@/assets/svg/logo.svg" alt="FacilitaTasks Logo" />
      <h1 class="page-title"><strong>FACILITA</strong><span>TASKS</span></h1>
      <span class="page-subtitle">Gestão de tarefas pessoais</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .left-section
    width 37%
    background-color #2693FF
    display flex
    justify-content center
    align-items center
    color white
    img
      width 80px
      margin-bottom 0px
    .page-title
      margin-bottom 0px
      strong
        font-weight bold
      span
        font-weight 300
    .page-subtitle
      font-size 16px
      color #fff

@media (max-width: 768px)
  .left-section
    width 100%
    height 200px
    background-color #2693FF
    display flex
    justify-content center
    align-items center
    color white
    img
      width 80px
      margin-bottom 0px
    .page-title
      font-size 40px
      margin-bottom 0px
      strong
        font-weight bold
      span
        font-weight 300
    .page-subtitle
      font-size 15px
      color #fff
@media (min-width: 769px)
  .left-content
    padding 0 20px 0 20px
  .page-title
    font-size 40px
@media (min-width: 1200px)
  .page-title
    font-size 48px
    padding 0
</style>

<template>
    <header class="topbar">
      <div class="user-info">
        <img src="@/assets/png/profile.png" alt="Usuário" class="avatar" />
        <div>
          <p class="username">Eduardo Pereira da Costa</p>
          <span class="role">Front-end Developer</span>
        </div>
      </div>
    </header>
</template>
  
<script setup>
</script>
  
<style lang="stylus" scoped>
  .topbar
    display flex
    justify-content flex-end
    align-items center
    height 43px
    width 100%
    background white
    border-bottom 1px solid #ddd
    padding 20px 0px
  
  .user-info
    display flex
    align-items center
    margin-right 15px
  
  .avatar
    width 45px
    height 45px
    margin-right 11px
    border-radius 50%
  
  .username
    font-size 15px
    font-weight 500
  
  .role
    font-weight 500
    color #2693FF
    font-size 12px
</style>
<template>
  <header class="topbar">
    <div class="user-info">
      <img src="@/assets/png/profile.png" alt="Usuário" class="avatar" />
      <div>
        <p class="username">{{ userName }}</p>
        <span class="role">{{ userRole }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.users.find(u => u.email === 'user@facilitaapp.com'));

const userName = computed(() => user.value?.name || 'Usuário');
const userRole = computed(() => user.value?.role_label || 'Sem função');
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

@media (max-width: 768px)
  .user-info
    display flex
    align-items center
    justify-content center
    margin-right 20px
</style>

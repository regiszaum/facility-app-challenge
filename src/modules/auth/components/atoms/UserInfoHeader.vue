<template>
  <header class="topbar">
   <!-- Mostra o menu mobile apenas em telas pequenas -->
   <NavbarMobile class="mobile-only" />

    <div class="user-info">
      <img src="@/assets/png/profile.png" alt="Usuário" class="avatar" />
      <div>
        <p class="username">{{ userName ? userName : 'Usuário' }}</p>
        <span class="role">{{ userRole ? userRole : 'Sem função' }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarMobile from '../molecules/NavbarMobile.vue';

const store = useStore();

// Verifica se o array `users` está carregado antes de acessar `.find()`
const user = computed(() => store.state.user?.users?.find(u => u.email === 'user@facilitaapp.com') || {});

const userName = computed(() => user.value.name || 'Usuário');
const userRole = computed(() => user.value.role_label || 'Sem função');
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
// Esconde a MobileMenu em telas grandes
@media (min-width: 769px)
  .mobile-only
    display none

</style>

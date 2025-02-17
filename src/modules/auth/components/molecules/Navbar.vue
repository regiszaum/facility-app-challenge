<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/svg/logo.svg" alt="FacilitaTasks Logo" />
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/account/dashboard">
            <IconComponent name="chart-column" height="37px" class="nav-icon"/>
            <span>
              Dashboard
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/account/tasks">
            <IconComponent name="circle-check" :type="'far'" height="37px" class="nav-icon"/>
            <span>
              Tarefas
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/account/settings">
            <IconComponent name="gear" height="37px" class="nav-icon"/>
            <span>
              Configurações
            </span>
          </router-link>
        </li>
        <li @click="logout"><IconComponent name="right-from-bracket" height="37px" class="nav-icon"/>
        <span>
          Sair
        </span>
        </li>
      </ul>
    </nav>
    <div></div>
  </aside>
</template>
  
<script setup>
import IconComponent from '@/components/atoms/IconComponent.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useToast } from '@/composables/useToast';

const store = useStore();
const router = useRouter();
const toast = useToast();

const logout = () => {
  store.dispatch('logout');
  router.push({ name: 'LoginView' });
  toast("Logout feito com sucesso!", "success");
};
</script>
  
<style lang="stylus" scoped>
  .sidebar
    width 106px
    background #2693FF
    color white
    display flex
    flex-direction column
    align-items center
    justify-content space-between
  
    .logo img
      width 50px
      height 50px
      margin-top 14px
    nav
      width 100%
      ul
        list-style none
        padding 0
        width 100%
        li
          border-top: solid 1px #46a3ff
          width 100%
          display flex
          flex-direction column
          align-items center
          font-size 12px
          font-weight bold
          cursor pointer
          text-decoration none
          color #fff
          span
            margin 10px 0 17px 0
          .nav-icon
            margin-top 10px
          &:last-child
            border-bottom solid 1px #46a3ff
          .router-link-active
            background-color #1182F2
        a
          width 100%
          display flex
          flex-direction column
          align-items center
          font-size 12px
          font-weight bold
          cursor pointer
          text-decoration none
          color #fff

</style>
  
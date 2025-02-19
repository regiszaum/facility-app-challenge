<template>
  <div class="mobile-menu">
    <button class="menu-button" @click="toggleMenu">
      <IconComponent name="bars" height="24px" width="24px" color="#2693FF" />
    </button>

    <!-- Menu suspenso -->
    <div v-if="menuOpen" class="menu-dropdown">
      <ul>
        <li>
          <a href="/account/dashboard"
            ><IconComponent name="chart-column" height="20px" color="#2693FF" /> Dashboard</a
          >
        </li>
        <li>
          <a href="/account/tasks"
            ><IconComponent name="circle-check" :type="'far'" height="20px" color="#2693FF" /> Tarefas</a
          >
        </li>
        <li>
          <a href="/account/settings"
            ><IconComponent name="gear" height="20px" color="#2693FF" /> Configurações</a
          >
        </li>
        <li @click="logout">
          <a href="#"><IconComponent name="right-from-bracket" height="20px" color="#2693FF" /> Sair</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import IconComponent from "@/components/atoms/IconComponent.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "@/composables/useToast";

const store = useStore();
const router = useRouter();
const toast = useToast();
const menuOpen = ref(false);

// Alterna a visibilidade do menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Fecha o menu ao clicar fora
const closeMenu = (event) => {
  if (!event.target.closest(".menu-button") && !event.target.closest(".menu-dropdown")) {
    menuOpen.value = false;
  }
};

// Adiciona e remove o event listener para detectar cliques fora do menu
onMounted(() => {
  document.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  document.removeEventListener("click", closeMenu);
});

const logout = () => {
  store.dispatch("user/logout");
  router.push({ name: "LoginView" });
  toast("Logout feito com sucesso!", "success");
};
</script>

<style lang="stylus" scoped>
.mobile-menu
  display none

// Mostra o menu apenas em telas pequenas
@media (max-width: 672px)
  .mobile-menu
    display block
    position absolute
    left 20px

.menu-button
  background none
  border none
  cursor pointer

.menu-dropdown
  position absolute
  top 40px
  left 0
  background white
  border 1px solid #ddd
  border-radius 8px
  box-shadow 0 4px 8px rgba(0, 0, 0, 0.1)
  width 180px
  padding 10px 0
  z-index 100

  ul
    list-style none
    padding 0
    margin 0

  li
    padding 10px 15px
    display flex
    align-items center
    gap 10px
    font-size 14px
    cursor pointer
    font-weight bold

    &:hover
      background #f4f4f4

    a
      text-decoration none
      color #283848
      display flex
      align-items center
      gap 8px
</style>
